import { Router } from "express";
import {
  deleteApplicationCard,
  getAllApplicationCard,
  getMyApplicationCard,
  getSingleApplicationCard,
  createApplicationCard,
  updateApplicationCard,
} from "../controllers/applicationCard.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallApplicationCard").post(getAllApplicationCard);
router.route("/createApplicationCard").post(verifyJWT, createApplicationCard);
router.route("/getMyApplicationCard").post(verifyJWT, getMyApplicationCard);
router.route("/update/:id").post(verifyJWT, updateApplicationCard);
router.route("/delete/:id").delete(verifyJWT, deleteApplicationCard);
router.route("/:id").get(verifyJWT, getSingleApplicationCard);

export default router;
