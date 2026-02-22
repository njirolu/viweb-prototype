import { Card, CardContent, CardHeader, CardTitle } from '@shared/components/ui/card';
import { Input } from '@shared/components/ui/input';
import { Textarea } from '@shared/components/ui/textarea';
import { Button } from '@shared/components/ui/button';

type NoteFormProps = {
  noteId: number | null;
  title: string;
  content: string;
  pending: boolean;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onSubmit: () => Promise<void>;
  onCancel: () => void;
};

export function NoteForm({
  noteId,
  title,
  content,
  pending,
  onTitleChange,
  onContentChange,
  onSubmit,
  onCancel,
}: NoteFormProps) {
  const isEditing = noteId !== null;

  return (
    <Card className="bg-card/80">
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit note' : 'Create note'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            void onSubmit();
          }}
        >
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="title">
              Title
            </label>
            <Input
              id="title"
              value={title}
              maxLength={120}
              required
              onChange={(event) => onTitleChange(event.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="content">
              Content
            </label>
            <Textarea
              id="content"
              value={content}
              rows={6}
              onChange={(event) => onContentChange(event.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button type="submit" disabled={pending}>
              {isEditing ? 'Update' : 'Save'}
            </Button>
            {isEditing ? (
              <Button type="button" variant="secondary" disabled={pending} onClick={onCancel}>
                Cancel edit
              </Button>
            ) : null}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
