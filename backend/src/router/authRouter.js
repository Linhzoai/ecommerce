import express from "express";
import AuthController from "../app/controller/authController.js";
const router = express.Router();

router.post("/signin",  AuthController.signIn);

router.post("/signup", AuthController.signUp);

router.post("/signout", AuthController.signOut);

router.get("/refresh-token", AuthController.refreshToken);

router.get("/me", AuthController.fetchMe);

export default router;