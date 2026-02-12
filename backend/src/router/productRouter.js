import express from "express";
import productController from "../app/controller/productController.js";
const router = express.Router();

router.get("/", productController.GetAllProduct);

router.get("/:id", productController.GetProductById);

router.post("/", productController.AddProduct);

router.get("/:id/related", productController.RelateProduct);

// router.put("/product/:id", productController.updateProduct);

// router.delete("/product/:id", productController.deleteProduct);

export default router;