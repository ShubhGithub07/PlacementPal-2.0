import { Router } from "express";
import {
  deleteCandidateDashboard,
  getAllCandidateDashboard,
  getMyCandidateDashboard,
  getSingleCandidateDashboard,
  createCandidateDashboard,
  updateCandidateDashboard,
} from "../controllers/candidateDashboard.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallCandidateDashboard").post(getAllCandidateDashboard);
router
  .route("/createCandidateDashboard")
  .post(verifyJWT, createCandidateDashboard);
router
  .route("/getMyCandidateDashboard")
  .post(verifyJWT, getMyCandidateDashboard);
router.route("/update/:id").post(verifyJWT, updateCandidateDashboard);
router.route("/delete/:id").delete(verifyJWT, deleteCandidateDashboard);
router.route("/:id").get(verifyJWT, getSingleCandidateDashboard);

export default router;
