const repository = require('./notes.repository');
const { parsePagination, buildPaginationMeta } = require('../../shared/pagination');
const { notFound } = require('../../shared/errors');
const {
  parseNoteId,
  validateCreatePayload,
  validatePatchPayload,
} = require('./notes.validators');

function normalizeSearch(search) {
  if (search === undefined || search === null || search === '') {
    return '';
  }

  return String(search).trim();
}

async function listNotes(query) {
  const search = normalizeSearch(query.search);
  const { page, limit, offset } = parsePagination(query);

  const [notes, total] = await Promise.all([
    repository.list({ search, limit, offset }),
    repository.count({ search }),
  ]);

  return {
    notes,
    meta: buildPaginationMeta({ page, limit, total }),
  };
}

async function getNoteById(rawId) {
  const id = parseNoteId(rawId);
  const note = await repository.getById(id);

  if (!note) {
    throw notFound('Note not found.', 'NOTE_NOT_FOUND');
  }

  return note;
}

async function createNote(body) {
  const payload = validateCreatePayload(body);
  return repository.create(payload);
}

async function updateNote(rawId, body) {
  const id = parseNoteId(rawId);
  const updates = validatePatchPayload(body);
  const existing = await repository.getById(id);

  if (!existing) {
    throw notFound('Note not found.', 'NOTE_NOT_FOUND');
  }

  return repository.update(id, {
    title: updates.title ?? existing.title,
    content: updates.content ?? existing.content,
  });
}

async function deleteNote(rawId) {
  const id = parseNoteId(rawId);
  const deleted = await repository.delete(id);

  if (!deleted) {
    throw notFound('Note not found.', 'NOTE_NOT_FOUND');
  }

  return id;
}

module.exports = {
  listNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
