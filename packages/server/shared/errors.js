class AppError extends Error {
  constructor({ status = 500, code = 'INTERNAL_SERVER_ERROR', title = 'Internal Server Error', detail = 'An unexpected error occurred.' }) {
    super(detail);
    this.name = 'AppError';
    this.status = status;
    this.code = code;
    this.title = title;
    this.detail = detail;
  }
}

function createError(status, code, title, detail) {
  return new AppError({ status, code, title, detail });
}

function badRequest(detail, code = 'BAD_REQUEST', title = 'Bad Request') {
  return createError(400, code, title, detail);
}

function notFound(detail, code = 'NOT_FOUND', title = 'Not Found') {
  return createError(404, code, title, detail);
}

function unsupportedMediaType(detail = 'Content-Type must be application/json.', code = 'UNSUPPORTED_MEDIA_TYPE', title = 'Unsupported Media Type') {
  return createError(415, code, title, detail);
}

function internalServerError(detail = 'Internal server error.', code = 'INTERNAL_SERVER_ERROR', title = 'Internal Server Error') {
  return createError(500, code, title, detail);
}

module.exports = {
  AppError,
  badRequest,
  notFound,
  unsupportedMediaType,
  internalServerError,
};
