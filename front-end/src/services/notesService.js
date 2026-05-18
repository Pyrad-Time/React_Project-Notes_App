// guarda as funções que conversam com a API
const API_URL = "http://localhost:3000/notes";

export async function getNotes() {
    const response = await fetch(API_URL);

    const notes = await response.json();
    console.log(notes)
    return notes; 
}