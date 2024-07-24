import './App.css';
import './styles/header.css';
import './styles/notes.css';
import './styles/new-note.css';
import Header from './components/Header';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import { getNotes } from './service/note-service';
import { useState, useEffect } from 'react';
import { INote } from './classes/note';

function App() {
  const [notes, setNotes] = useState<INote[]>([]);
  useEffect(() => {
    update()
  }, [])
  return (
    <>
      <div className="app-content">
        <div className="nl-header">
          <Header update={update}></Header>
        </div>
        <div className="nl-notes">
          <Notes notes={notes} update={update}></Notes>
        </div>
        <div className="nl-new-note">
          <NewNote update={update}></NewNote>
        </div>
      </div>
    </>
  );

  async function update() {
    const rawNotes: INote[] = await getNotes();
    setNotes(rawNotes);
  }
}

export default App;
