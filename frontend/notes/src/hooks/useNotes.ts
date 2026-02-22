import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { createNote, getHealth, listNotes, patchNote, removeNote } from '../api/client';
import type { Note, NoteUpsertPayload } from '../api/types';

const PAGE_SIZE = 10;

type StatusState = {
  message: string;
  isError: boolean;
};

type FormState = {
  noteId: number | null;
  title: string;
  content: string;
};

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<StatusState>({ message: 'Initializing...', isError: false });
  const [form, setForm] = useState<FormState>({ noteId: null, title: '', content: '' });
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: PAGE_SIZE,
    total: 0,
    totalPages: 1,
  });

  const searchDebounce = useRef<number | undefined>(undefined);

  const setSuccessStatus = useCallback((message: string) => {
    setStatus({ message, isError: false });
  }, []);

  const setErrorStatus = useCallback((error: unknown, fallback = 'Request failed') => {
    const message = error instanceof Error ? error.message : fallback;
    setStatus({ message, isError: true });
  }, []);

  const resetForm = useCallback(() => {
    setForm({ noteId: null, title: '', content: '' });
  }, []);

  const loadNotes = useCallback(
    async (nextPage = pagination.page, nextSearch = search) => {
      try {
        setIsLoading(true);
        setSuccessStatus('Loading notes...');

        const result = await listNotes({
          page: nextPage,
          limit: pagination.limit,
          search: nextSearch,
        });

        setNotes(result.notes);
        setPagination((current) => ({
          ...current,
          page: result.meta.page,
          limit: result.meta.limit,
          total: result.meta.total,
          totalPages: result.meta.totalPages,
        }));

        setSuccessStatus(`Loaded ${result.notes.length} note(s).`);
      } catch (error) {
        setErrorStatus(error);
      } finally {
        setIsLoading(false);
      }
    },
    [pagination.limit, setErrorStatus, setSuccessStatus]
  );

  useEffect(() => {
    (async () => {
      try {
        const healthTime = await getHealth();
        if (healthTime) {
          const dateText = new Date(healthTime).toLocaleString();
          setSuccessStatus(`API healthy at ${dateText}`);
        }
      } catch (error) {
        setErrorStatus(error, 'Health check failed');
      }

      await loadNotes(1, '');
    })().catch(() => {
      // no-op
    });
  }, [loadNotes, setErrorStatus, setSuccessStatus]);

  useEffect(() => {
    return () => {
      if (searchDebounce.current !== undefined) {
        window.clearTimeout(searchDebounce.current);
      }
    };
  }, []);

  const updateTitle = useCallback((title: string) => {
    setForm((current) => ({ ...current, title }));
  }, []);

  const updateContent = useCallback((content: string) => {
    setForm((current) => ({ ...current, content }));
  }, []);

  const updateSearch = useCallback(
    (nextSearch: string) => {
      setSearch(nextSearch);

      if (searchDebounce.current !== undefined) {
        window.clearTimeout(searchDebounce.current);
      }

      searchDebounce.current = window.setTimeout(() => {
        setPagination((current) => ({ ...current, page: 1 }));
        void loadNotes(1, nextSearch);
      }, 250);
    },
    [loadNotes]
  );

  const saveNote = useCallback(async () => {
    const payload: NoteUpsertPayload = {
      data: {
        type: 'notes',
        attributes: {
          title: form.title,
          content: form.content,
        },
      },
    };

    try {
      setIsSaving(true);

      if (form.noteId) {
        setSuccessStatus('Updating note...');
        await patchNote(form.noteId, payload);
        setSuccessStatus('Note updated.');
      } else {
        setSuccessStatus('Creating note...');
        await createNote(payload);
        setSuccessStatus('Note created.');
      }

      resetForm();
      setPagination((current) => ({ ...current, page: 1 }));
      await loadNotes(1, search);
    } catch (error) {
      setErrorStatus(error);
    } finally {
      setIsSaving(false);
    }
  }, [form.content, form.noteId, form.title, loadNotes, resetForm, search, setErrorStatus, setSuccessStatus]);

  const editNote = useCallback((note: Note) => {
    setForm({ noteId: note.id, title: note.title, content: note.content });
  }, []);

  const cancelEditing = useCallback(() => {
    resetForm();
  }, [resetForm]);

  const deleteNote = useCallback(
    async (note: Note) => {
      const shouldDelete = window.confirm('Delete this note?');
      if (!shouldDelete) {
        return;
      }

      try {
        setSuccessStatus('Deleting...');
        await removeNote(note.id);
        setSuccessStatus('Note deleted.');
        await loadNotes(pagination.page, search);
      } catch (error) {
        setErrorStatus(error);
      }
    },
    [loadNotes, pagination.page, search, setErrorStatus, setSuccessStatus]
  );

  const prevPage = useCallback(async () => {
    if (pagination.page <= 1) {
      return;
    }

    const nextPage = pagination.page - 1;
    setPagination((current) => ({ ...current, page: nextPage }));
    await loadNotes(nextPage, search);
  }, [loadNotes, pagination.page, search]);

  const nextPage = useCallback(async () => {
    if (pagination.page >= pagination.totalPages) {
      return;
    }

    const targetPage = pagination.page + 1;
    setPagination((current) => ({ ...current, page: targetPage }));
    await loadNotes(targetPage, search);
  }, [loadNotes, pagination.page, pagination.totalPages, search]);

  const computed = useMemo(
    () => ({
      notes,
      status,
      isLoading,
      isSaving,
      form,
      search,
      pagination,
      updateTitle,
      updateContent,
      updateSearch,
      saveNote,
      editNote,
      cancelEditing,
      deleteNote,
      prevPage,
      nextPage,
    }),
    [
      cancelEditing,
      deleteNote,
      editNote,
      form,
      isLoading,
      isSaving,
      nextPage,
      notes,
      pagination,
      prevPage,
      saveNote,
      search,
      status,
      updateContent,
      updateSearch,
      updateTitle,
    ]
  );

  return computed;
}
