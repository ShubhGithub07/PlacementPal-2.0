import { Router } from "express";
import {
  deleteJobCard,
  getAllJobCard,
  getMyJobCard,
  getSingleJobCard,
  createJobCard,
  updateJobCard,
} from "../controllers/jobCard.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallJobCard").post(getAllJobCard);
router.route("/createJobCard").post(verifyJWT, createJobCard);
router.route("/getmyJobCard").post(verifyJWT, getMyJobCard);
router.route("/update/:id").post(verifyJWT, updateJobCard);
router.route("/delete/:id").delete(verifyJWT, deleteJobCard);
router.route("/:id").get(verifyJWT, getSingleJobCard);

export default router;
 