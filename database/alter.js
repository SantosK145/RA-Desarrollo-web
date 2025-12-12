const { Client } = require('pg');

const client = new Client({
    connectionString: "postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo",
    ssl: { rejectUnauthorized: false }
});

async function alterarTabla() {
    await client.connect();
    await client.query("ALTER TABLE juegos ADD COLUMN imagen_url TEXT;");
    console.log("Columna imagen_url agregada");
    await client.end();
}

alterarTabla();
