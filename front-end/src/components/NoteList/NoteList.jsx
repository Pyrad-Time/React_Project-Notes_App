import NoteCard from "../NoteCard/NoteCard"

export default function NoteList(props) {   
    const notes = props.notes
    const onRemoveNote = props.onRemoveNote

    return (
        notes.map((note, index) => {
           return <NoteCard key={index} note={note} removeNote={() => onRemoveNote(index)}/>
        })
    )
}