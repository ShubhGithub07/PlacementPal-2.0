import { Router } from "express";
import {
//   deleteCompanyProfile,
//   getAllCompanyProfile,
//   getMyCompanyProfile,
//   getSingleCompanyProfile,
//   createCompanyProfile,
//   updateCompanyProfile,
} from "../controllers/companyProfile.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// router.route("/getallCopmanyProfile").post(getAllCompanyProfile);
// router.route("/createCompanyProfile").post(verifyJWT, createCompanyProfile);
// router.route("/getMyCompanyProfile").post(verifyJWT, getMyCompanyProfile);
// router.route("/update/:id").post(verifyJWT, updateCompanyProfile);
// router.route("/delete/:id").delete(verifyJWT, deleteCompanyProfile);
// router.route("/:id").get(verifyJWT, getSingleCompanyProfile);

export default router;
