import React, { useState } from 'react';
import '../styles/new-note.css';
import { addNote } from '../service/note-service';

export default function NewNote({ update }: { update: () => void }) {
  const [note, setNote] = useState('');
  return (
    <>
      <div className="new-note-title">New note</div>
      <form className="new-note-content" action="submit">
        <textarea
          className="new-note"
          value={note}
          name="new-note"
          rows={8}
          cols={50}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></textarea>
        <button
          className="btn-create-note material-icons"
          onClick={async (e) => {
            e.preventDefault();
            if (note.trim() !== '') {
              await addNote(note);
              update();
            }
            setNote('');
          }}
        >
          send
        </button>
      </form>
    </>
  );
}
