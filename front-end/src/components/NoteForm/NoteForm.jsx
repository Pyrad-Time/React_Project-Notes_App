import { useState } from "react"

export default function NoteForm(props) {
    const [cardTitle, setCardTitle] = useState('')
    const [cardData, setCardData] = useState('')

    return (
        
        <section>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.onAddNote(cardTitle, cardData)

                setCardTitle('')
                setCardData('')
            }}>
                <input  
                    type="text"
                    placeholder="Add your note..."
                    id="form-input"
                    value = {cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                />
                
                <label htmlFor="textarea-content">Content:</label>

                <textarea 
                    name="content" 
                    id="textarea-content" 
                    cols="30" 
                    rows="10"
                    value={cardData}
                    onChange={(e) => setCardData(e.target.value)}
                ></textarea>

                <button 
                    type="submit"
                >Add</button>
        </form >

        </section>
        
    )
}