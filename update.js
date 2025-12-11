const { Client } = require('pg');

const client = new Client({
    connectionString: "postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo",
    ssl: { rejectUnauthorized: false }
});

async function updateData() {
    await client.connect();

    await client.query(`
        UPDATE juegos
        SET imagen_url = 'https://zeldacentral.com/wp-content/uploads/2025/03/Tears-of-the-Kingdom-wallpaper.jpg'
        WHERE id = 1;
    `);

    await client.query(`
        UPDATE juegos
        SET imagen_url = 'https://th.bing.com/th/id/R.a25aeb2e937536a502050ad19633ea41?rik=AUWS1MCuVm2uzg&pid=ImgRaw&r=0'
        WHERE id = 2;
    `);

    console.log("Datos actualizados correctamente");
    await client.end();
}

updateData();
