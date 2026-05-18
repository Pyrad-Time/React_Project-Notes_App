// Fica com a lógica das notas
const db = require("../database/connection");

async function getNotes(req, res) {
    try {
        const result = await db.query("SELECT * FROM notes ORDER BY id ASC");

        res.json(result.rows);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao buscar notas no servidor." });
    }
}

async function postNotes(req, res) {
    const { title, content } = req.body;

    if(!title || !content) {
        return res.status(400).json({ message: "Title and content are required." });
    }

    try {
        const result = await db.query(
            "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
            [title, content]    
        );
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar o banco de dados" });
    }
}

async function deleteNotes( req, res) {
    const id = req.params.id

    try {
        const result = await db.query(
            "DELETE FROM notes WHERE id = $1 RETURNING *",
            [id]
        );

        if(result.rows.length === 0) {
            return res.status(404).json({ message: "Note not found" });
        };

        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao deletar nota no banco" });
    }
}

module.exports = {
    getNotes,
    postNotes,
    deleteNotes
}
