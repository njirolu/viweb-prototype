const express = require('express');
const {
  listNotes,
  getNote,
  createNote,
  patchNote,
  deleteNote,
} = require('./notes.controller');
const { unsupportedMediaType } = require('../../shared/errors');

const router = express.Router();

function requireJsonBody(req, _res, next) {
  if (req.method !== 'POST' && req.method !== 'PATCH') {
    return next();
  }

  const hasBody =
    (req.get('content-length') && req.get('content-length') !== '0') ||
    Boolean(req.get('transfer-encoding'));

  if (hasBody && !req.is('application/json')) {
    return next(unsupportedMediaType('Content-Type must be application/json for this endpoint.'));
  }

  return next();
}

router.get('/', listNotes);
router.get('/:id', getNote);
router.post('/', requireJsonBody, createNote);
router.patch('/:id', requireJsonBody, patchNote);
router.delete('/:id', deleteNote);

module.exports = router;
