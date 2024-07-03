import { Router } from "express";
import {
  deletePostingJob,
  getAllPostingJobs,
  getMyPostingJobs,
  getSinglePostingJob,
  createPostingJob,
  updatePostingJob,
} from "../controllers/whilePostingJob.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallPostingJob").post(getAllPostingJobs);
router.route("/createPostingJob").post(createPostingJob);
router.route("/getMyPostingJob").post(authMiddleware, getMyPostingJobs);
router.route("/update/:id").post(authMiddleware, updatePostingJob);
router.route("/delete/:id").delete(authMiddleware, deletePostingJob);
router.route("/:id").get(authMiddleware, getSinglePostingJob);

export default router;
