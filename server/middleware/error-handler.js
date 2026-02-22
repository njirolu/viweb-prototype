const { AppError, badRequest, internalServerError } = require('../shared/errors');
const { sendError } = require('../shared/jsonapi');

function errorHandler(err, _req, res, _next) {
  if (res.headersSent) {
    return;
  }

  if (err instanceof SyntaxError && Object.prototype.hasOwnProperty.call(err, 'body')) {
    return sendError(res, badRequest('Request body contains invalid JSON.', 'INVALID_JSON'));
  }

  if (err instanceof AppError) {
    return sendError(res, err);
  }

  console.error(err);
  return sendError(res, internalServerError());
}

module.exports = errorHandler;
