const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, '0.0.0.0', () => {
    console.log(`App escuchando en http://localhost:${port}`);
});
