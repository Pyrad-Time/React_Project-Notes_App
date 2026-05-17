const db = require("./database/connection");

async function testConnection() {
    try {
        const result = await db.query("SELECT NOW()");

        console.log("Conexão com PostgreSQL funcionando!");
        console.log(result.rows[0]);
    } catch(error) {
        console.log("Erro ao conectar");
        console.log(error)
    }
};

testConnection()