import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const port = process.env.PORT;
connectDB();
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Backend server running on port ${port}`));
