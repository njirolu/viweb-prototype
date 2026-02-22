const { badRequest } = require('./errors');

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

function parsePositiveInteger(value, fallback, fieldName) {
  if (value === undefined || value === null || value === '') {
    return fallback;
  }

  const parsed = Number.parseInt(String(value), 10);
  if (!Number.isInteger(parsed) || parsed < 1) {
    throw badRequest(`${fieldName} must be a positive integer.`, 'INVALID_PAGINATION');
  }

  return parsed;
}

function parsePagination(query = {}) {
  const page = parsePositiveInteger(query.page, DEFAULT_PAGE, 'page');
  const requestedLimit = parsePositiveInteger(query.limit, DEFAULT_LIMIT, 'limit');
  const limit = Math.min(requestedLimit, MAX_LIMIT);

  return {
    page,
    limit,
    offset: (page - 1) * limit,
  };
}

function buildPaginationMeta({ page, limit, total }) {
  const totalPages = total === 0 ? 1 : Math.ceil(total / limit);

  return {
    page,
    limit,
    total,
    totalPages,
  };
}

module.exports = {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
  parsePagination,
  buildPaginationMeta,
};
