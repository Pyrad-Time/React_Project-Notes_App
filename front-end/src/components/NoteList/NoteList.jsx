import NoteCard from "../NoteCard/NoteCard"

export default function NoteList(props) {   
    const notes = props.notes
    const onRemoveNote = props.onRemoveNote

    return (
        notes.map((note) => {
           return <NoteCard key={note.id} note={note} removeNote={() => onRemoveNote(note.id)}/>
        })
    )
}