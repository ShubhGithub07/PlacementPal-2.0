import { Router } from "express";
import {
  deleteCandidateDashboard,
  getAllCandidateDashboard,
  getMyCandidateDashboard,
  getSingleCandidateDashboard,
  createCandidateDashboard,
  updateCandidateDashboard,
} from "../controllers/candidateDashboard.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallCandidateDashboard").post(getAllCandidateDashboard);
router
  .route("/createCandidateDashboard")
  .post(authMiddleware, createCandidateDashboard);
router
  .route("/getMyCandidateDashboard")
  .post(authMiddleware, getMyCandidateDashboard);
router.route("/update/:id").post(authMiddleware, updateCandidateDashboard);
router.route("/delete/:id").delete(authMiddleware, deleteCandidateDashboard);
router.route("/:id").get(authMiddleware, getSingleCandidateDashboard);

export default router;
