const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Servir la carpeta public del frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App escuchando en http://localhost:${port}`);
});
