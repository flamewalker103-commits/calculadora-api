const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const validateNumbers = (a, b) => typeof a === 'number' && typeof b === 'number';

app.post('/sumar', (req, res) => {
    const { a, b } = req.body;
    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: 'Los parámetros a y b deben ser números. Asegúrate de que ambos sean válidos.' });
    }
    const resultado = a + b;
    res.json({ resultado, operation: 'suma' });
});

app.post('/restar', (req, res) => {
    const { a, b } = req.body;
    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: 'Los parámetros a y b deben ser números. Asegúrate de que ambos sean válidos.' });
    }
    const resultado = a - b;
    res.json({ resultado, operation: 'resta' });
});

app.post('/multiplicar', (req, res) => {
    const { a, b } = req.body;
    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: 'Los parámetros a y b deben ser números. Asegúrate de que ambos sean válidos.' });
    }
    const resultado = a * b;
    res.json({ resultado, operation: 'multiplicación' });
});

app.post('/dividir', (req, res) => {
    const { a, b } = req.body;
    if (!validateNumbers(a, b)) {
        return res.status(400).json({ error: 'Los parámetros a y b deben ser números. Asegúrate de que ambos sean válidos.' });
    }
    if (b === 0) {
        return res.status(400).json({ error: 'No se puede dividir entre cero.' });
    }
    const resultado = a / b;
    res.json({ resultado, operation: 'división' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});