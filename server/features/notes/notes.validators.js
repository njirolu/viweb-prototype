const { badRequest } = require('../../shared/errors');

function parseNoteId(value) {
  const id = Number.parseInt(String(value), 10);
  if (!Number.isInteger(id) || id < 1) {
    throw badRequest('Invalid note id.', 'INVALID_NOTE_ID');
  }

  return id;
}

function ensureString(value, fieldName) {
  if (typeof value !== 'string') {
    throw badRequest(`${fieldName} must be a string.`, 'INVALID_NOTE_PAYLOAD');
  }

  return value;
}

function getAttributesFromJsonApiBody(body) {
  if (!body || typeof body !== 'object') {
    throw badRequest('Request body must be a JSON object.', 'INVALID_NOTE_PAYLOAD');
  }

  if (!body.data || typeof body.data !== 'object') {
    throw badRequest('Request body must include a data object.', 'INVALID_NOTE_PAYLOAD');
  }

  if (body.data.type !== 'notes') {
    throw badRequest('data.type must be "notes".', 'INVALID_NOTE_TYPE');
  }

  const attributes = body.data.attributes;
  if (!attributes || typeof attributes !== 'object' || Array.isArray(attributes)) {
    throw badRequest('data.attributes must be an object.', 'INVALID_NOTE_PAYLOAD');
  }

  return attributes;
}

function validateCreatePayload(body) {
  const attributes = getAttributesFromJsonApiBody(body);
  const title = ensureString(attributes.title, 'title').trim();

  if (!title) {
    throw badRequest('Title is required.', 'TITLE_REQUIRED');
  }

  let content = '';
  if (attributes.content !== undefined) {
    content = ensureString(attributes.content, 'content').trim();
  }

  return {
    title,
    content,
  };
}

function validatePatchPayload(body) {
  const attributes = getAttributesFromJsonApiBody(body);
  const updates = {};

  if (Object.prototype.hasOwnProperty.call(attributes, 'title')) {
    const title = ensureString(attributes.title, 'title').trim();
    if (!title) {
      throw badRequest('Title cannot be empty.', 'TITLE_REQUIRED');
    }
    updates.title = title;
  }

  if (Object.prototype.hasOwnProperty.call(attributes, 'content')) {
    updates.content = ensureString(attributes.content, 'content').trim();
  }

  if (Object.keys(updates).length === 0) {
    throw badRequest('PATCH requires at least one attribute to update.', 'EMPTY_PATCH_PAYLOAD');
  }

  return updates;
}

module.exports = {
  parseNoteId,
  validateCreatePayload,
  validatePatchPayload,
};
