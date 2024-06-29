import { Router } from "express";
import {
  deleteJobCard,
  getAllJobCard,
  getMyJobCard,
  getSingleJobCard,
  createJobCard,
  updateJobCard,
} from "../controllers/jobCard.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallJobCard").get(getAllJobCard);
router.route("/createjobcard").post(createJobCard);
router.route("/getmyJobCard").post(authMiddleware, getMyJobCard);
router.route("/update/:id").post(authMiddleware, updateJobCard);
router.route("/delete/:id").delete(authMiddleware, deleteJobCard);
router.route("/:id").get(authMiddleware, getSingleJobCard);

export default router;
