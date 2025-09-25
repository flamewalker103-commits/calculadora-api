const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/sumar', (req, res) => {
    const { a, b } = req.body;
    const resultado = a + b;
    res.json({ resultado });
});

app.post('/restar', (req, res) => {
    const { a, b } = req.body;
    const resultado = a - b;
    res.json({ resultado });
});

app.post('/multiplicar', (req, res) => {
    const { a, b } = req.body;
    const resultado = a * b;
    res.json({ resultado });
});

app.post('/dividir', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'No se puede dividir entre cero.' });
    }
    const resultado = a / b;
    res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
