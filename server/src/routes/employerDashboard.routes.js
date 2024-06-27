import { Router } from "express";
import {
  deleteEmployerDashboard,
  getAllEmployerDashboard,
  getMyEmployerDashboard,
  getSingleEmployerDashboard,
  createEmployerDashboard,
  updateEmployerDashboard,
} from "../controllers/employerDashboard.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallEmployerDashboard").post(getAllEmployerDashboard);
router
  .route("/createEmployerDashboard")
  .post(verifyJWT, createEmployerDashboard);
router.route("/getMyEmployerDashboard").post(verifyJWT, getMyEmployerDashboard);
router.route("/update/:id").post(verifyJWT, updateEmployerDashboard);
router.route("/delete/:id").delete(verifyJWT, deleteEmployerDashboard);
router.route("/:id").get(verifyJWT, getSingleEmployerDashboard);

export default router;
