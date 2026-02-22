const fs = require('fs/promises');
const path = require('path');
const initSqlJs = require('sql.js');

const projectRoot = path.resolve(__dirname, '..', '..', '..', '..');
const DEFAULT_DB_PATH = path.join(projectRoot, 'data', 'app.db');

let sqlPromise;
let db;
let dbPath = process.env.DB_PATH ? path.resolve(process.env.DB_PATH) : DEFAULT_DB_PATH;

function setDbPath(nextPath) {
  dbPath = nextPath ? path.resolve(nextPath) : DEFAULT_DB_PATH;
}

function mapRowToNote(row) {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function ensureDataDir() {
  await fs.mkdir(path.dirname(dbPath), { recursive: true });
}

async function saveDb() {
  const data = db.export();
  await fs.writeFile(dbPath, Buffer.from(data));
}

function createSchema() {
  db.run(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
}

function selectMany(query, params = []) {
  const stmt = db.prepare(query);
  stmt.bind(params);

  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }

  stmt.free();
  return rows;
}

function selectOne(query, params = []) {
  const rows = selectMany(query, params);
  return rows.length > 0 ? rows[0] : null;
}

async function initDb() {
  if (db) {
    return;
  }

  if (!sqlPromise) {
    sqlPromise = initSqlJs();
  }

  const SQL = await sqlPromise;
  await ensureDataDir();

  try {
    const file = await fs.readFile(dbPath);
    db = new SQL.Database(file);
  } catch (error) {
    if (error.code === 'ENOENT') {
      db = new SQL.Database();
    } else {
      throw error;
    }
  }

  createSchema();
  await saveDb();
}

async function list({ search = '', limit, offset }) {
  await initDb();

  if (search) {
    const query = `%${search.toLowerCase()}%`;
    const rows = selectMany(
      `
      SELECT id, title, content, created_at, updated_at
      FROM notes
      WHERE LOWER(title) LIKE ? OR LOWER(content) LIKE ?
      ORDER BY id DESC
      LIMIT ? OFFSET ?;
      `,
      [query, query, limit, offset]
    );

    return rows.map(mapRowToNote);
  }

  const rows = selectMany(
    `
    SELECT id, title, content, created_at, updated_at
    FROM notes
    ORDER BY id DESC
    LIMIT ? OFFSET ?;
    `,
    [limit, offset]
  );

  return rows.map(mapRowToNote);
}

async function count({ search = '' }) {
  await initDb();

  if (search) {
    const query = `%${search.toLowerCase()}%`;
    const row = selectOne(
      `
      SELECT COUNT(*) AS total
      FROM notes
      WHERE LOWER(title) LIKE ? OR LOWER(content) LIKE ?;
      `,
      [query, query]
    );

    return Number(row?.total || 0);
  }

  const row = selectOne('SELECT COUNT(*) AS total FROM notes;');
  return Number(row?.total || 0);
}

async function getById(id) {
  await initDb();

  const row = selectOne(
    `
    SELECT id, title, content, created_at, updated_at
    FROM notes
    WHERE id = ?
    LIMIT 1;
    `,
    [id]
  );

  return row ? mapRowToNote(row) : null;
}

async function create({ title, content }) {
  await initDb();

  const now = new Date().toISOString();
  db.run(
    `
    INSERT INTO notes (title, content, created_at, updated_at)
    VALUES (?, ?, ?, ?);
    `,
    [title, content ?? '', now, now]
  );

  const row = selectOne('SELECT last_insert_rowid() AS id;');
  await saveDb();
  return getById(row.id);
}

async function update(id, { title, content }) {
  await initDb();

  const now = new Date().toISOString();
  db.run(
    `
    UPDATE notes
    SET title = ?, content = ?, updated_at = ?
    WHERE id = ?;
    `,
    [title, content, now, id]
  );

  if (db.getRowsModified() === 0) {
    return null;
  }

  await saveDb();
  return getById(id);
}

async function remove(id) {
  await initDb();

  db.run('DELETE FROM notes WHERE id = ?;', [id]);
  const modified = db.getRowsModified();

  if (modified > 0) {
    await saveDb();
    return true;
  }

  return false;
}

async function resetDbForTests() {
  db = undefined;
  await fs.rm(dbPath, { force: true });
}

module.exports = {
  setDbPath,
  initDb,
  list,
  count,
  getById,
  create,
  update,
  delete: remove,
  resetDbForTests,
};
