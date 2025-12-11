const { Client } = require('pg');

const client = new Client({
    connectionString: "postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo",
    ssl: { rejectUnauthorized: false }
});

async function createTable() {
    await client.connect();

    const query = `
    INSERT INTO juegos (id, nombre, descripcion, imagen_url)
VALUES
(3, 'Pokemon Legendas ZA',
 'Pokémon Legends: ZA es un juego de rol de acción de mundo abierto lanzado en 2025, ambientado en Lumiose City (Kalos), donde investigas el proyecto Plan Z relacionado con Zygarde mientras exploras y participas en combates en tiempo real.',
 'https://cdn.oneesports.gg/cdn-data/2024/02/pokemon_legends_za_reveal.jpg'),

(4, 'Ghost of Yotei',
 'Ghost of Yotei es un juego de aventuras en un mundo abierto, donde juegas como un espíritu que explora una isla inspirada en el folclore japonés, resolviendo puzzles y enfrentando criaturas fantasmales.',
 'https://tse3.mm.bing.net/th/id/OIP.pmmoBcgmrkV3VMevIkXUVgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3');

  `;

    await client.query(query);
    console.log("Datos agregados correctamente");
    await client.end();
}

createTable();
