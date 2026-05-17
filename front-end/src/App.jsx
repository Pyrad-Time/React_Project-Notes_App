import Header from "./components/Header/Header.jsx"
import NoteForm from "./components/NoteForm/NoteForm.jsx"
import { useState } from "react"
import NoteList from "./components/NoteList/NoteList.jsx"


function App() {
  const [notes, setNotes] = useState([])
  

  function addNote (cardTitle, cardData) {
    const newNote = {
      id: Date.now(),
      title: cardTitle,
      content: cardData
    }
    setNotes([...notes, newNote])
  }

  function removeNote(indexToRemove) {
    const updateNotes = notes.filter((note) => {
      return indexToRemove !== note.id
    })

    setNotes(updateNotes)
  }

  return (
    
    <>
      <Header />
      <NoteForm onAddNote={addNote}/>
      <NoteList notes={notes} onRemoveNote={removeNote}/>
    </>
  )
}

export default App
