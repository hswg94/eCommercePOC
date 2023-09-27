import express from 'express';
import productsData from './data/productsData.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT;
connectDB();
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(productsData);
});

app.get('/api/products/:id', (req, res) => {
    const product = productsData.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Backend server running on port ${port}`));
