import { useState, useEffect } from "react"
import { getNotes, createNotes } from "./services/notesService.js"
import Header from "./components/Header/Header.jsx"
import NoteForm from "./components/NoteForm/NoteForm.jsx"
import NoteList from "./components/NoteList/NoteList.jsx"


function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function loadNotes() {
      const notesFromApi = await getNotes();
      setNotes(notesFromApi)
    }

    loadNotes();
  }, [])
  

  async function addNote (cardTitle, cardData) {
    const newNote = await createNotes(cardTitle, cardData)
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
