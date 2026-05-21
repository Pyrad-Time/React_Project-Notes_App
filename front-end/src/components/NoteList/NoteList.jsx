import NoteCard from "../NoteCard/NoteCard"

export default function NoteList(props) {   
    const notes = props.notes
    const onRemoveNote = props.onRemoveNote

    return (
        <section className="noteList__container">
            <h2 className="noteList__title">You Notes</h2>

            {props.notes.length === 0 ? (
                <p className="noteList__empty">No notes created yet.</p>
            ) : (
                <div className="noteList__grid">
                    {
                        notes.map((note) => {
                            return (<NoteCard 
                                key={note.id}
                                note={note}
                                removeNote={() => onRemoveNote(note.id)}
                            />)
                        })
                    }
                </div>
            )

            }
        </section>
        
    )
}