import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  createProductReview
} from "../controllers/productController.js";
import { userAuth, adminAuth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/")
  .get(getAllProducts)
  .post(userAuth, adminAuth, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(userAuth, adminAuth, updateProduct)
  .delete(userAuth, adminAuth, deleteProduct);
  router
  .route("/:id/reviews")
  .post(userAuth, createProductReview);

export default router;
