import './App.css';
import './styles/header.css';
import './styles/notes.css';
import './styles/new-note.css';
import Header from './components/Header';
import NewNote from './components/NewNote';
import Notes from './components/Notes';

function App() {

  return (
    <>
      <div className="app-content">
        <div className="nl-header">
          <Header update={() => {}}></Header>
        </div>
        <div className="nl-notes">
          <Notes></Notes>
        </div>
        <div className="nl-new-note">
          <NewNote></NewNote>
        </div>
      </div>
    </>
  );
}

export default App;
