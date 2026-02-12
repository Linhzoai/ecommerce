import express from "express";
import cardController from "../app/controller/cardController.js";
const router = express.Router();

router.post("/add", cardController.addToCart);
router.get("/", cardController.getCart);
router.delete("/delete", cardController.deleteItemCart);
router.delete("/delete-all", cardController.deleteCart);
router.patch("/update", cardController.updateCart);
export default router;
    