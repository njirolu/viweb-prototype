const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('path');

process.env.DB_PATH = path.join(process.cwd(), 'data', 'app.test.db');

const request = require('supertest');
const { createApp } = require('../packages/server/app');
const notesRepository = require('../packages/server/features/notes/notes.repository');

const hostApp = createApp();
const containerApp = createApp({ webContainerTarget: true });

function notePayload(attributes) {
  return {
    data: {
      type: 'notes',
      attributes,
    },
  };
}

test.beforeEach(async () => {
  await notesRepository.resetDbForTests();
  await notesRepository.initDb();
});

test.after(async () => {
  await notesRepository.resetDbForTests();
});

test('GET / serves the WebContainer runner HTML with isolation headers', async () => {
  const response = await request(hostApp).get('/').expect(200);

  assert.match(response.text, /data-runner-shell="react"/);
  assert.match(response.text, /WebContainer Workspace/);
  assert.equal(response.headers['cross-origin-opener-policy'], 'same-origin');
  assert.equal(response.headers['cross-origin-embedder-policy'], 'require-corp');
});

test('GET /webcontainer-runner/* applies isolation headers', async () => {
  const response = await request(hostApp).get('/webcontainer-runner/runner.js').expect(200);

  assert.equal(response.headers['cross-origin-opener-policy'], 'same-origin');
  assert.equal(response.headers['cross-origin-embedder-policy'], 'require-corp');
});

test('GET /api/v1/health returns 404 in host mode', async () => {
  const response = await request(hostApp).get('/api/v1/health').expect(404);
  assert.equal(response.body.error, 'Not found');
});

test('GET /notes-ui is not available in host mode and redirects to /', async () => {
  const response = await request(hostApp).get('/notes-ui').expect(302);
  assert.equal(response.headers.location, '/');
});

test('GET / serves container app in WEB_CONTAINER_TARGET mode', async () => {
  const response = await request(containerApp).get('/').expect(200);

  assert.match(response.text, /data-notes-shell="react"/);
  assert.match(response.text, /Notes API v1 Demo/);
  assert.equal(response.headers['cross-origin-opener-policy'], undefined);
  assert.equal(response.headers['cross-origin-embedder-policy'], undefined);
});

test('GET /api/v1/health returns JSON:API payload in container mode', async () => {
  const response = await request(containerApp).get('/api/v1/health').expect(200);

  assert.equal(response.body.jsonapi.version, '1.0');
  assert.equal(response.body.data.type, 'health');
  assert.equal(response.body.data.attributes.status, 'ok');
  assert.ok(response.body.data.attributes.time);
});

test('POST /api/v1/notes creates a note with valid payload', async () => {
  const createResponse = await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ title: 'First note', content: 'hello' }))
    .expect(201);

  assert.equal(createResponse.body.data.type, 'notes');
  assert.equal(createResponse.body.data.attributes.title, 'First note');

  const id = createResponse.body.data.id;
  const getResponse = await request(containerApp).get(`/api/v1/notes/${id}`).expect(200);
  assert.equal(getResponse.body.data.id, id);
});

test('POST /api/v1/notes returns structured 400 on missing title', async () => {
  const response = await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ content: 'missing title' }))
    .expect(400);

  assert.equal(response.body.jsonapi.version, '1.0');
  assert.equal(response.body.errors[0].status, '400');
  assert.equal(response.body.errors[0].code, 'INVALID_NOTE_PAYLOAD');
});

test('GET /api/v1/notes supports page and limit', async () => {
  for (let i = 1; i <= 15; i += 1) {
    await request(containerApp)
      .post('/api/v1/notes')
      .send(notePayload({ title: `Note ${i}`, content: '' }))
      .expect(201);
  }

  const response = await request(containerApp)
    .get('/api/v1/notes?page=2&limit=5')
    .expect(200);

  assert.equal(response.body.data.length, 5);
  assert.equal(response.body.meta.page, 2);
  assert.equal(response.body.meta.limit, 5);
  assert.equal(response.body.meta.total, 15);
  assert.equal(response.body.meta.totalPages, 3);
});

test('GET /api/v1/notes supports search query filtering', async () => {
  await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ title: 'Alpha', content: 'first' }))
    .expect(201);

  await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ title: 'Beta', content: 'second' }))
    .expect(201);

  const response = await request(containerApp)
    .get('/api/v1/notes?search=alp')
    .expect(200);

  assert.equal(response.body.meta.total, 1);
  assert.equal(response.body.data[0].attributes.title, 'Alpha');
});

test('GET /api/v1/notes/:id returns 200 for existing and 404 for missing notes', async () => {
  const createResponse = await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ title: 'Lookup me', content: '' }))
    .expect(201);

  const id = createResponse.body.data.id;

  await request(containerApp).get(`/api/v1/notes/${id}`).expect(200);

  const missingResponse = await request(containerApp).get('/api/v1/notes/99999').expect(404);
  assert.equal(missingResponse.body.errors[0].code, 'NOTE_NOT_FOUND');
});

test('PATCH /api/v1/notes/:id partially updates note and updates timestamp', async () => {
  const createResponse = await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ title: 'Patch me', content: 'before' }))
    .expect(201);

  const id = createResponse.body.data.id;
  const beforeUpdatedAt = createResponse.body.data.attributes.updatedAt;

  await new Promise((resolve) => setTimeout(resolve, 5));

  const patchResponse = await request(containerApp)
    .patch(`/api/v1/notes/${id}`)
    .send(notePayload({ content: 'after' }))
    .expect(200);

  assert.equal(patchResponse.body.data.attributes.title, 'Patch me');
  assert.equal(patchResponse.body.data.attributes.content, 'after');
  assert.notEqual(patchResponse.body.data.attributes.updatedAt, beforeUpdatedAt);
});

test('DELETE /api/v1/notes/:id returns 200 for existing and 404 for missing notes', async () => {
  const createResponse = await request(containerApp)
    .post('/api/v1/notes')
    .send(notePayload({ title: 'Delete me', content: '' }))
    .expect(201);

  const id = createResponse.body.data.id;

  const deleteResponse = await request(containerApp)
    .delete(`/api/v1/notes/${id}`)
    .expect(200);

  assert.equal(deleteResponse.body.meta.deleted, true);

  const missingDeleteResponse = await request(containerApp)
    .delete('/api/v1/notes/99999')
    .expect(404);

  assert.equal(missingDeleteResponse.body.errors[0].code, 'NOTE_NOT_FOUND');
});

test('POST /api/v1/notes returns 415 for non-JSON payloads', async () => {
  const response = await request(containerApp)
    .post('/api/v1/notes')
    .set('Content-Type', 'text/plain')
    .send('plain-text-body')
    .expect(415);

  assert.equal(response.body.errors[0].code, 'UNSUPPORTED_MEDIA_TYPE');
});

test('GET /api/v1/notes/:id returns 400 for invalid id format', async () => {
  const response = await request(containerApp).get('/api/v1/notes/not-a-number').expect(400);
  assert.equal(response.body.errors[0].code, 'INVALID_NOTE_ID');
});
