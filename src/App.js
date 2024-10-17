import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  //list is rendered based on dynamic data. Using useState hook to hold our array of notes. Data wil be actively changed so it is put in state  
  const [notes, setNotes] = useState([
    {id: nanoid(), text: "This is my first note", date:"17/10/2024"},
    {id: nanoid(), text: "This is my second note", date:"18/10/2024"},
    {id: nanoid(), text: "This is my third note", date:"19/10/2024"},
    {id: nanoid(), text: "This is my new note", date:"20/10/2024"},
  ]);
  return <div className="container">
    <NotesList notes={notes} />
  </div>
}

export default App;