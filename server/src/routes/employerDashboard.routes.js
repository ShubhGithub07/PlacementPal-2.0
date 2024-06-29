import { Router } from "express";
import {
  deleteEmployerDashboard,
  getAllEmployerDashboard,
  getMyEmployerDashboard,
  getSingleEmployerDashboard,
  createEmployerDashboard,
  updateEmployerDashboard,
} from "../controllers/employerDashboard.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallEmployerDashboard").post(getAllEmployerDashboard);
router
  .route("/createEmployerDashboard")
  .post(authMiddleware, createEmployerDashboard);
router
  .route("/getMyEmployerDashboard")
  .post(authMiddleware, getMyEmployerDashboard);
router.route("/update/:id").post(authMiddleware, updateEmployerDashboard);
router.route("/delete/:id").delete(authMiddleware, deleteEmployerDashboard);
router.route("/:id").get(authMiddleware, getSingleEmployerDashboard);

export default router;
