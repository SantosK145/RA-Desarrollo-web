const { Client } = require('pg');

const client = new Client({
    connectionString: "postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo",
    ssl: { rejectUnauthorized: false }
});

async function createTable() {
    await client.connect();

    const query = `
    INSERT INTO juegos (id, nombre, descripcion)
VALUES
(1, 'Zelda Tears of the Kingdom',
 'Secuela de Breath of the Wild que expande Hyrule con nuevas islas celestiales, poderes creativos y libertad total para explorar y construir. Un juego que reinventa la aventura con ingenio y un vasto mundo dinámico.'),

(2, 'Persona 5 Royal',
 'Un JRPG estilizado donde un grupo de estudiantes se convierte en los Ladrones Fantasma, enfrentando la corrupción del corazón humano. Combina vida escolar, exploración de palacios y un sistema de combate táctico lleno de estilo.');

  `;

    await client.query(query);
    console.log("Tabla creada correctamente");
    await client.end();
}

createTable();
