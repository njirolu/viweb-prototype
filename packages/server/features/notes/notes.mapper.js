function mapNoteToResource(note) {
  return {
    type: 'notes',
    id: String(note.id),
    attributes: {
      title: note.title,
      content: note.content,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    },
  };
}

module.exports = {
  mapNoteToResource,
};
