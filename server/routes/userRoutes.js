import { Router } from "express";
import {
  getLoggedInUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user", verifyJWT, getLoggedInUser);

export default userRouter;
