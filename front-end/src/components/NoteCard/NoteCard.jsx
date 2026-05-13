export default function NoteCard(props) {
    const note = props.note
    return (
        
        <section>
            <div className="card__container">
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <button onClick={props.removeNote}>Remove Card</button>
            </div>
            
        </section>
    )
}