import "./NoteForm.css"
import { useState } from "react"

export default function NoteForm(props) {
    const [cardTitle, setCardTitle] = useState('')
    const [cardData, setCardData] = useState('')

    return (
        
        <section className="noteForm__section">
            <form 
                className="noteForm__container"
                onSubmit={(e) => {
                e.preventDefault()
                props.onAddNote(cardTitle, cardData)

                setCardTitle('')
                setCardData('')
            }}>
                <label htmlFor="form-input" className="noteForm__label">
                    Title
                </label>

                <input  
                    className="noteForm__input"
                    type="text"
                    placeholder="Add your note..."
                    id="form-input"
                    value = {cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                />
                
                <label htmlFor="textarea-content" className="noteForm__label">Content</label>

                <textarea 
                    className="noteForm__textarea"
                    name="content" 
                    id="textarea-content" 
                    rows="8"
                    value={cardData}
                    onChange={(e) => setCardData(e.target.value)}
                ></textarea>

                <button 
                    className="noteForm__button"
                    type="submit"
                >Add</button>
        </form >

        </section>
        
    )
}