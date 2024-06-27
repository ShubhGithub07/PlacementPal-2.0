import { Router } from "express";
import {
  deletePostingJob,
  getAllPostingJobs,
  getMyPostingJobs,
  getSinglePostingJob,
  createPostingJob,
  updatePostingJob,
} from "../controllers/whilePostingJob.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallPostingJob").post(getAllPostingJobs);
router.route("/createPostingJob").post(verifyJWT, createPostingJob);
router.route("/getMyPostingJob").post(verifyJWT, getMyPostingJobs);
router.route("/update/:id").post(verifyJWT, updatePostingJob);
router.route("/delete/:id").delete(verifyJWT, deletePostingJob);
router.route("/:id").get(verifyJWT, getSinglePostingJob);

export default router;
