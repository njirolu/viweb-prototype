import { Pencil, Search, Trash2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/components/ui/card';
import { Input } from '@shared/components/ui/input';
import { Button } from '@shared/components/ui/button';
import { ScrollArea } from '@shared/components/ui/scroll-area';

import type { Note } from '../../api/types';

type NotesListProps = {
  notes: Note[];
  search: string;
  onSearchChange: (value: string) => void;
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => Promise<void>;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}

export function NotesList({ notes, search, onSearchChange, onEdit, onDelete }: NotesListProps) {
  return (
    <Card className="bg-card/80">
      <CardHeader className="space-y-3">
        <CardTitle>Notes</CardTitle>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            placeholder="Search title/content..."
            className="pl-9"
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="max-h-[420px] pr-2">
          <ul className="grid list-none gap-3 p-0">
            {notes.length === 0 ? (
              <li className="rounded-lg border border-dashed border-border bg-muted/40 px-3 py-5 text-sm text-muted-foreground">
                No notes yet.
              </li>
            ) : null}

            {notes.map((note) => (
              <li key={note.id} className="rounded-lg border border-border bg-background/75 p-3 shadow-sm">
                <h3 className="text-base font-semibold">{note.title}</h3>
                <p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">{note.content || '(empty)'}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Created: {formatDate(note.createdAt)} | Updated: {formatDate(note.updatedAt)}
                </p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="secondary" onClick={() => onEdit(note)}>
                    <Pencil className="mr-1 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      void onDelete(note);
                    }}
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
