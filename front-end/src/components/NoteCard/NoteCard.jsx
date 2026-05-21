import "./NoteCard.css"

export default function NoteCard(props) {
    const note = props.note
    return (
        
        <article className="noteCard__container">
                <h2 className="noteCard__title">{note.title}</h2>

                <p className="noteCard__content">{note.content}</p>

                <button 
                    className="noteCard__button"
                    type="button"
                    onClick={props.removeNote}
                    >Remove Card
                </button>            
        </article>
    )
}