const { Client } = require('pg');
require("dotenv").config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function createTable() {
    await client.connect();

    const query = `
    CREATE TABLE IF NOT EXISTS juegos (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      descripcion TEXT,
      imagen_url VARCHAR(255)
    );
  `;

    await client.query(query);
    console.log("Tabla creada correctamente");
    await client.end();
}

createTable();
