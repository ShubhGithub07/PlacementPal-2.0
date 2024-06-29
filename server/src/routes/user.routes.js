import { Router } from "express";
import {
  changeCurrentPassword,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  getCurrentUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(authMiddleware, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(authMiddleware, changeCurrentPassword);

router.route("/current-user").get(authMiddleware, getCurrentUser);

export default router;
