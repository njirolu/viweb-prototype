# be-wasm

Express backend API with SQLite (WASM via `sql.js`) and vanilla frontend demo.

## Features

- Versioned REST API at `/api/v1`
- JSON:API request/response format
- Notes CRUD with search and offset pagination
- SQLite-compatible storage using WASM (`sql.js`)
- File persistence in `data/app.db`
- Static frontend served by the same Express server

## Run

```bash
npm install
npm run dev
```

Server runs at:

- `http://localhost:3000`
- In WebContainer, use the preview URL for port `3000`.

## Test

```bash
npm test
```

## API v1 Endpoints

- `GET /api/v1/health`
- `GET /api/v1/notes?page=1&limit=10&search=keyword`
- `GET /api/v1/notes/:id`
- `POST /api/v1/notes`
- `PATCH /api/v1/notes/:id`
- `DELETE /api/v1/notes/:id`

## JSON:API Request Bodies

### Create note (`POST /api/v1/notes`)

```json
{
  "data": {
    "type": "notes",
    "attributes": {
      "title": "My note",
      "content": "Optional content"
    }
  }
}
```

### Patch note (`PATCH /api/v1/notes/:id`)

```json
{
  "data": {
    "type": "notes",
    "attributes": {
      "content": "Updated content"
    }
  }
}
```

## Response Examples

### Success (single resource)

```json
{
  "jsonapi": { "version": "1.0" },
  "data": {
    "type": "notes",
    "id": "1",
    "attributes": {
      "title": "My note",
      "content": "Optional content",
      "createdAt": "2026-02-22T00:00:00.000Z",
      "updatedAt": "2026-02-22T00:00:00.000Z"
    }
  }
}
```

### Success (list + pagination meta)

```json
{
  "jsonapi": { "version": "1.0" },
  "data": [
    {
      "type": "notes",
      "id": "1",
      "attributes": {
        "title": "My note",
        "content": "Optional content",
        "createdAt": "2026-02-22T00:00:00.000Z",
        "updatedAt": "2026-02-22T00:00:00.000Z"
      }
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

### Error

```json
{
  "jsonapi": { "version": "1.0" },
  "errors": [
    {
      "status": "400",
      "code": "TITLE_REQUIRED",
      "title": "Bad Request",
      "detail": "Title is required."
    }
  ]
}
```

## Query Parameters

- `page`: 1-based page index, default `1`
- `limit`: page size, default `10`, max `100`
- `search`: case-insensitive keyword filter on title/content

## Breaking Changes from Legacy API

- Base path changed from `/api/*` to `/api/v1/*`
- `PUT /api/notes/:id` replaced by `PATCH /api/v1/notes/:id`
- Request and response payloads use JSON:API shape
- Legacy `/api/notes` endpoints are removed

## Notes

- CORS is configured as `*`.
- Database file is stored at `data/app.db` and excluded from git.
- API is intentionally unauthenticated for local/demo use.
