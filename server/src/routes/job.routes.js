import { Router } from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/job.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getall").post(getAllJobs);
router.route("/postjob").post(verifyJWT, postJob);
router.route("/getmyjobs").post(verifyJWT, getMyJobs);
router.route("/update/:id").post(verifyJWT, updateJob);
router.route("/delete/:id").delete(verifyJWT, deleteJob);
router.route("/getsinglejob").post(getSingleJob);

export default router;
