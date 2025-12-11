const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const { Client } = require('pg');

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a Render PostgreSQL
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Conectar a la BD
client.connect()
    .then(() => console.log("Conectado a PostgreSQL Render"))
    .catch(err => console.error("Error de conexión:", err));

app.use(express.static(path.join(__dirname)));

// Ruta para obtener todos los juegos
app.get('/juegos', async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM juegos ORDER BY id ASC");
        res.json(result.rows);
    } catch (err) {
        console.error("Error al obtener juegos:", err);
        res.status(500).json({ error: "Error al obtener juegos" });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, '0.0.0.0', () => {
    console.log(`App escuchando en http://localhost:${port}`);
});
