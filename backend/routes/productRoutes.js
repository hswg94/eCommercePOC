import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct
} from "../controllers/productController.js";
import { userAuth, adminAuth } from '../middleware/authMiddleware.js'
const router = express.Router();

router.route("/")
.get(getAllProducts)
.post(userAuth, adminAuth, createProduct);
router.route("/:id")
.get(getProductById)
.put(userAuth, adminAuth, updateProduct);

export default router;
