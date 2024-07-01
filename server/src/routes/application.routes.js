import { Router } from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/application.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/jobseeker/getall").get(authMiddleware, jobseekerGetAllApplications);

router.route("/employer/getall").get(authMiddleware, employerGetAllApplications);

router.route("/delete/:id").delete(authMiddleware, jobseekerDeleteApplication);

router.route("/post").post(authMiddleware, postApplication);

export default router;
