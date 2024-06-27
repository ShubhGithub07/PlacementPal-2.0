import { Router } from "express";
import {
  deleteResume,
  getAllResume,
  getSingleResume,
  createResume,
  updateResume,
} from "../controllers/resume.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallResume").post(getAllResume);
router.route("/createResume").post(verifyJWT, createResume);
router.route("/update/:id").post(verifyJWT, updateResume);
router.route("/delete/:id").delete(verifyJWT, deleteResume);
router.route("/:id").get(verifyJWT, getSingleResume);

export default router;
