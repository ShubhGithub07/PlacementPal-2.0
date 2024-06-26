import { Router } from "express";
import {
  deleteUserProfile,
  getAllUserProfile,
  getMyUserProfile,
  getSingleUserProfile,
  createUserProfile,
  updateUserProfile,
} from "../controllers/userProfile.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallUserProfile").post(getAllUserProfile);
router.route("/createUserProfile").post(verifyJWT, createUserProfile);
router.route("/getmyUserProfile").post(verifyJWT, getMyUserProfile);
router.route("/update/:id").post(verifyJWT, updateUserProfile);
router.route("/delete/:id").delete(verifyJWT, deleteUserProfile);
router.route("/:id").get(verifyJWT, getSingleUserProfile);

export default router;
