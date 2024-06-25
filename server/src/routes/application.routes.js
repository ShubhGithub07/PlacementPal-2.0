import { Router } from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/application.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/jobseeker/getall").get(verifyJWT, jobseekerGetAllApplications);

router.route("/employer/getall").get(verifyJWT, employerGetAllApplications);

router.route("/delete/:id").delete(verifyJWT, jobseekerDeleteApplication);

router.route("/post").post(verifyJWT, postApplication);

export default router;
