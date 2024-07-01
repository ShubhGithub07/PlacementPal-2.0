import { Router } from "express";
import {
  deleteCompanyProfile,
  getAllCompanyProfile,
  getMyCompanyProfile,
  getSingleCompanyProfile,
  createCompanyProfile,
  updateCompanyProfile,
} from "../controllers/companyProfile.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getallCompanyProfile").post(getAllCompanyProfile);
router
  .route("/createCompanyProfile")
  .post(authMiddleware, createCompanyProfile);
router.route("/getMyCompanyProfile").post(authMiddleware, getMyCompanyProfile);
router.route("/update/:id").post(authMiddleware, updateCompanyProfile);
router.route("/delete/:id").delete(authMiddleware, deleteCompanyProfile);
router.route("/:id").get(authMiddleware, getSingleCompanyProfile);

export default router;
