import { useState, useEffect } from "react"
import { getNotes, createNote, deleteNote } from "./services/notesService.js"
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
    const newNote = await createNote(cardTitle, cardData)
    console.log(newNote)
    setNotes([...notes, newNote])
  }

  async function removeNote (idToRemove) {
    await deleteNote(idToRemove)

    const updateNotes = notes.filter((note) => {
      return note.id !== idToRemove
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
