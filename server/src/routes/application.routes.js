import { Router } from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/application.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/post").post(postApplication);


//   --------------------------------------------------------------   //



router.route("/jobseeker/getall").get(authMiddleware, jobseekerGetAllApplications);

router.route("/employer/getall").get(authMiddleware, employerGetAllApplications);

router.route("/delete/:id").delete(authMiddleware, jobseekerDeleteApplication);


export default router;
