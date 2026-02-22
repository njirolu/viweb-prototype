import type {
  HealthResponse,
  JsonApiDocument,
  JsonApiErrorsResponse,
  Note,
  NoteResponse,
  NotesListMeta,
  NotesListResponse,
  NoteUpsertPayload,
} from './types';

const API_BASE = '/api/v1';

function toLocalErrorMessage(payload: unknown): string {
  if (payload && typeof payload === 'object') {
    const maybeErrors = payload as JsonApiErrorsResponse;
    if (Array.isArray(maybeErrors.errors) && maybeErrors.errors.length > 0) {
      const firstError = maybeErrors.errors[0];
      return firstError.detail || firstError.title || 'Request failed';
    }

    const maybeError = payload as { error?: unknown };
    if (typeof maybeError.error === 'string') {
      return maybeError.error;
    }
  }

  return 'Request failed';
}

async function request<TResponse>(path: string, init: RequestInit = {}): Promise<TResponse> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
    ...init,
  });

  const payload = (await response.json().catch(() => ({}))) as unknown;

  if (!response.ok) {
    throw new Error(toLocalErrorMessage(payload));
  }

  return payload as TResponse;
}

export function resourceToNote(resource: NoteResponse['data'] | NotesListResponse['data'][number]): Note {
  return {
    id: Number.parseInt(resource.id, 10),
    title: resource.attributes.title || '',
    content: resource.attributes.content || '',
    createdAt: resource.attributes.createdAt,
    updatedAt: resource.attributes.updatedAt,
  };
}

export async function getHealth(): Promise<string | undefined> {
  const payload = await request<HealthResponse>('/health');
  return payload.data?.attributes?.time;
}

export async function listNotes(params: { page: number; limit: number; search: string }): Promise<{
  notes: Note[];
  meta: NotesListMeta;
}> {
  const query = new URLSearchParams({
    page: String(params.page),
    limit: String(params.limit),
  });

  if (params.search.trim()) {
    query.set('search', params.search.trim());
  }

  const payload = await request<NotesListResponse>(`/notes?${query.toString()}`);
  const meta = payload.meta ?? {};

  return {
    notes: payload.data.map(resourceToNote),
    meta: {
      page: Number.parseInt(String(meta.page), 10) || params.page,
      limit: Number.parseInt(String(meta.limit), 10) || params.limit,
      total: Number.parseInt(String(meta.total), 10) || 0,
      totalPages: Number.parseInt(String(meta.totalPages), 10) || 1,
    },
  };
}

export async function createNote(payload: NoteUpsertPayload): Promise<Note> {
  const result = await request<NoteResponse>('/notes', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return resourceToNote(result.data);
}

export async function patchNote(id: number, payload: NoteUpsertPayload): Promise<Note> {
  const result = await request<NoteResponse>(`/notes/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });

  return resourceToNote(result.data);
}

export async function removeNote(id: number): Promise<void> {
  await request<JsonApiDocument<null>>(`/notes/${id}`, { method: 'DELETE' });
}
