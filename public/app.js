const API_BASE = '/api/v1';
const PAGE_SIZE = 10;

const form = document.getElementById('noteForm');
const noteIdInput = document.getElementById('noteId');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const saveButton = document.getElementById('saveButton');
const cancelButton = document.getElementById('cancelButton');
const formTitle = document.getElementById('formTitle');
const searchInput = document.getElementById('search');
const notesList = document.getElementById('notesList');
const statusEl = document.getElementById('status');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

let searchTimer;
const pagination = {
  page: 1,
  limit: PAGE_SIZE,
  totalPages: 1,
  total: 0,
};

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? '#b91c1c' : '#6b7280';
}

function extractErrorMessage(payload) {
  if (payload && Array.isArray(payload.errors) && payload.errors.length > 0) {
    const firstError = payload.errors[0];
    return firstError.detail || firstError.title || 'Request failed';
  }

  if (payload && typeof payload.error === 'string') {
    return payload.error;
  }

  return 'Request failed';
}

async function api(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(extractErrorMessage(payload));
  }

  return payload;
}

function resourceToNote(resource) {
  const attrs = resource?.attributes || {};
  return {
    id: Number.parseInt(resource.id, 10),
    title: attrs.title || '',
    content: attrs.content || '',
    createdAt: attrs.createdAt,
    updatedAt: attrs.updatedAt,
  };
}

function resetForm() {
  noteIdInput.value = '';
  titleInput.value = '';
  contentInput.value = '';
  formTitle.textContent = 'Create note';
  saveButton.textContent = 'Save';
  cancelButton.classList.add('hidden');
}

function toLocalDate(iso) {
  const dt = new Date(iso);
  return dt.toLocaleString();
}

function updatePaginationControls() {
  pageInfo.textContent = `Page ${pagination.page} of ${pagination.totalPages} (${pagination.total} total)`;
  prevPageButton.disabled = pagination.page <= 1;
  nextPageButton.disabled = pagination.page >= pagination.totalPages;
}

function renderNotes(notes) {
  notesList.innerHTML = '';

  if (notes.length === 0) {
    const li = document.createElement('li');
    li.className = 'note-item';
    li.textContent = 'No notes yet.';
    notesList.appendChild(li);
    return;
  }

  for (const note of notes) {
    const li = document.createElement('li');
    li.className = 'note-item';

    const title = document.createElement('h3');
    title.textContent = note.title;

    const content = document.createElement('p');
    content.textContent = note.content || '(empty)';

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `Created: ${toLocalDate(note.createdAt)} | Updated: ${toLocalDate(note.updatedAt)}`;

    const actions = document.createElement('div');
    actions.className = 'note-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'secondary';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      noteIdInput.value = String(note.id);
      titleInput.value = note.title;
      contentInput.value = note.content;
      formTitle.textContent = 'Edit note';
      saveButton.textContent = 'Update';
      cancelButton.classList.remove('hidden');
      titleInput.focus();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'danger';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async () => {
      if (!window.confirm('Delete this note?')) {
        return;
      }

      try {
        setStatus('Deleting...');
        await api(`/notes/${note.id}`, { method: 'DELETE' });
        setStatus('Note deleted.');
        await loadNotes();
      } catch (error) {
        setStatus(error.message, true);
      }
    });

    actions.append(editBtn, deleteBtn);
    li.append(title, content, meta, actions);
    notesList.appendChild(li);
  }
}

function buildListQuery() {
  const params = new URLSearchParams();
  params.set('page', String(pagination.page));
  params.set('limit', String(pagination.limit));

  const search = searchInput.value.trim();
  if (search) {
    params.set('search', search);
  }

  return `?${params.toString()}`;
}

async function loadNotes() {
  try {
    setStatus('Loading notes...');
    const result = await api(`/notes${buildListQuery()}`);

    const resources = Array.isArray(result.data) ? result.data : [];
    const notes = resources.map(resourceToNote);
    const meta = result.meta || {};

    pagination.page = Number.parseInt(String(meta.page), 10) || pagination.page;
    pagination.limit = Number.parseInt(String(meta.limit), 10) || pagination.limit;
    pagination.total = Number.parseInt(String(meta.total), 10) || 0;
    pagination.totalPages = Number.parseInt(String(meta.totalPages), 10) || 1;

    if (pagination.page > pagination.totalPages) {
      pagination.page = pagination.totalPages;
      return loadNotes();
    }

    renderNotes(notes);
    updatePaginationControls();
    setStatus(`Loaded ${notes.length} note(s).`);
  } catch (error) {
    setStatus(error.message, true);
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const id = noteIdInput.value.trim();
  const payload = {
    data: {
      type: 'notes',
      attributes: {
        title: titleInput.value,
        content: contentInput.value,
      },
    },
  };

  saveButton.disabled = true;
  try {
    if (id) {
      setStatus('Updating note...');
      await api(`/notes/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });
      setStatus('Note updated.');
    } else {
      setStatus('Creating note...');
      await api('/notes', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      setStatus('Note created.');
    }

    resetForm();
    pagination.page = 1;
    await loadNotes();
  } catch (error) {
    setStatus(error.message, true);
  } finally {
    saveButton.disabled = false;
  }
});

cancelButton.addEventListener('click', () => {
  resetForm();
});

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    pagination.page = 1;
    loadNotes();
  }, 250);
});

prevPageButton.addEventListener('click', () => {
  if (pagination.page <= 1) {
    return;
  }

  pagination.page -= 1;
  loadNotes();
});

nextPageButton.addEventListener('click', () => {
  if (pagination.page >= pagination.totalPages) {
    return;
  }

  pagination.page += 1;
  loadNotes();
});

(async function bootstrap() {
  try {
    const health = await api('/health');
    const healthTime = health?.data?.attributes?.time;
    setStatus(`API healthy at ${toLocalDate(healthTime)}`);
  } catch (error) {
    setStatus(`Health check failed: ${error.message}`, true);
  }

  await loadNotes();
})();
