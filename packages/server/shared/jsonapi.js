function buildDocument({ data = null, meta }) {
  const payload = {
    jsonapi: { version: '1.0' },
    data,
  };

  if (meta !== undefined) {
    payload.meta = meta;
  }

  return payload;
}

function sendData(res, { status = 200, data = null, meta }) {
  return res.status(status).json(buildDocument({ data, meta }));
}

function toJsonApiError(error) {
  return {
    status: String(error.status || 500),
    code: error.code || 'INTERNAL_SERVER_ERROR',
    title: error.title || 'Internal Server Error',
    detail: error.detail || 'An unexpected error occurred.',
  };
}

function sendError(res, error) {
  const status = error.status || 500;
  return res.status(status).json({
    jsonapi: { version: '1.0' },
    errors: [toJsonApiError(error)],
  });
}

module.exports = {
  sendData,
  sendError,
};
