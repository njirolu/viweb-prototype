import { NotebookPen } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/components/ui/card';
import { Badge } from '@shared/components/ui/badge';
import { Separator } from '@shared/components/ui/separator';

import { NoteForm } from './features/notes/note-form';
import { NotesList } from './features/notes/notes-list';
import { NotesPagination } from './features/notes/notes-pagination';
import { useNotes } from './hooks/useNotes';

export default function App() {
  const notes = useNotes();

  return (
    <div className="theme-notes min-h-full bg-[radial-gradient(circle_at_top,_hsl(195_95%_84%)_0%,_hsl(var(--background))_38%)]">
      <main className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-8 md:px-6">
        <Card className="border-white/50 bg-card/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <NotebookPen className="h-6 w-6 text-primary" />
                  Notes API v1 Demo
                </CardTitle>
                <CardDescription>
                  Express + SQLite (WASM) in WebContainer, rewritten with React + TypeScript.
                </CardDescription>
              </div>
              <Badge variant={notes.status.isError ? 'danger' : 'secondary'}>
                {notes.status.message || 'Ready'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <NoteForm
                title={notes.form.title}
                content={notes.form.content}
                noteId={notes.form.noteId}
                pending={notes.isSaving}
                onTitleChange={notes.updateTitle}
                onContentChange={notes.updateContent}
                onSubmit={notes.saveNote}
                onCancel={notes.cancelEditing}
              />
              <NotesList
                notes={notes.notes}
                search={notes.search}
                onSearchChange={notes.updateSearch}
                onEdit={notes.editNote}
                onDelete={notes.deleteNote}
              />
            </div>

            <Separator />

            <NotesPagination
              page={notes.pagination.page}
              totalPages={notes.pagination.totalPages}
              total={notes.pagination.total}
              onPrev={notes.prevPage}
              onNext={notes.nextPage}
              canPrev={notes.pagination.page > 1 && !notes.isLoading}
              canNext={notes.pagination.page < notes.pagination.totalPages && !notes.isLoading}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
