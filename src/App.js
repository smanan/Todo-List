import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Header from './components/Header';

function App() {

  const[notes , setNotes] = useState([]);

  const addNote = (newNote) =>{

  }
  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
    </div>
  );
}

export default App;
