import path from "path";
import express, { urlencoded } from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
dotenv.config();

const port = process.env.PORT;
connectDB();
const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow the use of req.cookie
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.get("/", (req, res) => {
  res.send("API is running....");
});



app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(port, () => console.log(`Backend server running on port ${port}`));
