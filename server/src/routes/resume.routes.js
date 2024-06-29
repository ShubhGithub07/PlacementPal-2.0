import { Router } from "express";
import {
  deleteResume,
  getAllResume,
  getSingleResume,
  createResume,
  updateResume,
} from "../controllers/resume.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallResume").post(getAllResume);
router.route("/createResume").post(authMiddleware, createResume);
router.route("/update/:id").post(authMiddleware, updateResume);
router.route("/delete/:id").delete(authMiddleware, deleteResume);
router.route("/:id").get(authMiddleware, getSingleResume);

export default router;
