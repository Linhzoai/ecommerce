import authRouter from "./authRouter.js";
import productRouter from "./productRouter.js";
import authMiddleware from "../app/middleware/authMiddleware.js";
import userRouter from "./userRouter.js";
import orderRouter from "./orderRouter.js";
import cardRouter from "./cardRouter.js";
const router = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/product", productRouter);
  app.use(authMiddleware);
  app.use("/api/user", userRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/card", cardRouter);
};
export default router;