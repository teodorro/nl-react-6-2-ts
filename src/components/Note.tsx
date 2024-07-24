import React, { useState } from 'react';
import '../styles/note.css';
import { INote } from '../classes/note';
import { deleteNote } from '../service/note-service';

interface INoteArgs {
  note: INote;
  update: () => void;
}

export default function Note({ note, update }: INoteArgs) {
  const [id] = useState(note.id);

  async function removeNote() {
    const res = await deleteNote(id);
    if (res) {
      await update();
    }
  }
  return (
    <>
      <div className="note">
        {note[0]}
        <button
          className="btn-delete material-icons"
          onClick={removeNote}
        >
          close
        </button>
      </div>
    </>
  );
}
