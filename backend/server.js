import express, { urlencoded } from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const port = process.env.PORT;
connectDB();
const app = express()
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Allow the use of req.cookie
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Backend server running on port ${port}`));
