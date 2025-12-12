const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo",
    ssl: { rejectUnauthorized: false }
});

async function obtenerJuegos() {
    await client.connect();

    const res = await client.query("SELECT * FROM juegos;");
    console.log(res.rows);

    await client.end();
}

obtenerJuegos();
