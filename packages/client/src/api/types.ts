export interface JsonApiError {
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
}

export interface JsonApiErrorsResponse {
  errors: JsonApiError[];
}

export interface NoteAttributes {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoteResource {
  type: 'notes';
  id: string;
  attributes: NoteAttributes;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotesListMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface NotesListResponse {
  data: NoteResource[];
  meta?: Partial<NotesListMeta>;
}

export interface HealthResponse {
  data?: {
    attributes?: {
      status?: string;
      time?: string;
    };
  };
}

export interface NoteResponse {
  data: NoteResource;
}

export interface JsonApiDocument<TData, TMeta = unknown> {
  data: TData;
  meta?: TMeta;
}

export interface NoteUpsertPayload {
  data: {
    type: 'notes';
    attributes: {
      title: string;
      content: string;
    };
  };
}
