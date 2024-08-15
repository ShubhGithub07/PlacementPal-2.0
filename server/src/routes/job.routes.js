import { Router } from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  shortlist,
  reject,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/job.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/postjob").post(postJob);

router.route("/getall").post(getAllJobs);

router.route("/getmyjobs").post(getMyJobs);

router.route("/shortlist").post(shortlist);

router.route("/reject").post(reject);

//   --------------------------------------------------------------   //

router.route("/update/:id").post(authMiddleware, updateJob);
router.route("/delete/:id").delete(authMiddleware, deleteJob);
router.route("/:id").get(getSingleJob);

export default router;
