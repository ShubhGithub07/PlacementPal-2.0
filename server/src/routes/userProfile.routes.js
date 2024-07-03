import { Router } from "express";
import {
  deleteUserProfile,
  getAllUserProfile,
  getMyUserProfile,
  getSingleUserProfile,
  createUserProfile,
  updateUserProfile,
} from "../controllers/userProfile.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallUserProfile").post(getAllUserProfile);
router.route("/createUserProfile").post(createUserProfile);
router.route("/getmyUserProfile").post(authMiddleware, getMyUserProfile);
router.route("/update/:id").post(authMiddleware, updateUserProfile);
router.route("/delete/:id").delete(authMiddleware, deleteUserProfile);
router.route("/:id").get(authMiddleware, getSingleUserProfile);

export default router;
