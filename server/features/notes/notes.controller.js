const service = require('./notes.service');
const { sendData } = require('../../shared/jsonapi');
const { mapNoteToResource } = require('./notes.mapper');

async function listNotes(req, res, next) {
  try {
    const result = await service.listNotes(req.query ?? {});
    return sendData(res, {
      data: result.notes.map(mapNoteToResource),
      meta: result.meta,
    });
  } catch (error) {
    return next(error);
  }
}

async function getNote(req, res, next) {
  try {
    const note = await service.getNoteById(req.params.id);
    return sendData(res, { data: mapNoteToResource(note) });
  } catch (error) {
    return next(error);
  }
}

async function createNote(req, res, next) {
  try {
    const note = await service.createNote(req.body ?? {});
    return sendData(res, { status: 201, data: mapNoteToResource(note) });
  } catch (error) {
    return next(error);
  }
}

async function patchNote(req, res, next) {
  try {
    const note = await service.updateNote(req.params.id, req.body ?? {});
    return sendData(res, { data: mapNoteToResource(note) });
  } catch (error) {
    return next(error);
  }
}

async function deleteNote(req, res, next) {
  try {
    const id = await service.deleteNote(req.params.id);
    return sendData(res, {
      data: null,
      meta: {
        deleted: true,
        id: String(id),
      },
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  listNotes,
  getNote,
  createNote,
  patchNote,
  deleteNote,
};
