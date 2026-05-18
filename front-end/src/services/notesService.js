// guarda as funções que conversam com a API
const API_URL = "http://localhost:3000/notes";

export async function getNotes() {
    const response = await fetch(API_URL);

    const notes = await response.json();
    console.log(notes)
    return notes; 
}

export async function createNotes(title, content) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content})
    });

    const newNote = response.json();
    return newNote;
}