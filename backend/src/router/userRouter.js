import express from "express";
import userController from "../app/controller/userController.js";
const router = express.Router();
router.get("/info", userController.Info);
export default router;