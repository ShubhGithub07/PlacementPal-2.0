import { Router } from "express";
import {
  deleteApplicationCard,
  getAllApplicationCard,
  getMyApplicationCard,
  getSingleApplicationCard,
  createApplicationCard,
  updateApplicationCard,
} from "../controllers/applicationCard.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();




//   --------------------------------------------------------------   //




router.route("/getallApplicationCard").post(getAllApplicationCard);
router
  .route("/createApplicationCard")
  .post(authMiddleware, createApplicationCard);
router
  .route("/getMyApplicationCard")
  .post(authMiddleware, getMyApplicationCard);
router.route("/update/:id").post(authMiddleware, updateApplicationCard);
router.route("/delete/:id").delete(authMiddleware, deleteApplicationCard);
router.route("/:id").get(getSingleApplicationCard);

export default router;
