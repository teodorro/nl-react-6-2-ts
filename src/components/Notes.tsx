import React from 'react';
import Note from './Note';
import { INote } from '../classes/note';
import '../styles/notes.css';
import '../styles/note.css';

interface INotesArgs {
  notes: INote[];
  update: () => void;
}

export default function Notes(
  { notes, update } : INotesArgs
) {
  return (
    <div className="notes-content">
      {notes.map((note) => (
        <div key={note.id} className="nl-note">
          <Note note={note} update={update} />
        </div>
      ))}
    </div>
  );
}
