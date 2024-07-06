import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { CompanyProfile } from "../models/companyProfile.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllCompanyProfile = asyncHandler(async (req, res, next) => {
  const CompanyProfiles = await CompanyProfile.find();

  return res.status(200).json(
    new ApiResponse(200, {
      CompanyProfiles,
    })
  );
});

const createCompanyProfile = asyncHandler(async (req, res, next) => {
  const {
    logoUrl,
    aboutUs,
    email,
    established,
    industry,
    location,
    name,
    organizationType,
    phone,
    socialLinks,
    teamSize,
    vision,
    website,
    postedBy,
  } = req.body;

  console.log(req.body);

  if (
    !logoUrl ||
    !aboutUs ||
    !email ||
    !established ||
    !industry ||
    !location ||
    !name ||
    !organizationType ||
    !phone ||
    !socialLinks ||
    !teamSize ||
    !vision ||
    !postedBy ||
    !website
  ) {
    return next(res.json("Missing fields"));
  }

  const userPosted = new mongoose.Types.ObjectId(postedBy);
  console.log(userPosted);

  const companyProfile = await CompanyProfile.create({
    logoUrl,
    aboutUs,
    email,
    established,
    industry,
    location,
    name,
    organizationType,
    phone,
    socialLinks,
    teamSize,
    vision,
    website,
    postedBy: userPosted,
  });

  if (!companyProfile) {
    throw new ApiError(
      500,
      "Something went wrong while registering the CompanyProfile"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        companyProfile,
      },
      "CompanyProfile Posted Successfully!"
    )
  );
});

const getMyCompanyProfile = asyncHandler(async (req, res, next) => {
  const myCompanyProfile = await CompanyProfile.findOne({
    postedBy: req.body.userId,
  });

  return res.status(200).json(new ApiResponse(200, myCompanyProfile));
});

const updateCompanyProfile = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let companyProfile = await CompanyProfile.findById(id);
  if (!companyProfile) {
    return next(new ApiError("OOPS! CompanyProfile not found.", 404));
  }
  companyProfile = await CompanyProfile.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "CompanyProfile Updated!"));
});

const deleteCompanyProfile = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const companyProfile = await CompanyProfile.findById(id);
  if (!companyProfile) {
    return next(new ApiError("OOPS! CompanyProfile not found.", 404));
  }
  await companyProfile.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "CompanyProfile Deleted Successfully!"));
});

const getSingleCompanyProfile = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const companyProfile = await CompanyProfile.findById(id);
    if (!companyProfile) {
      return next(new ApiError("CompanyProfile not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        companyProfile,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllCompanyProfile,
  createCompanyProfile,
  getMyCompanyProfile,
  updateCompanyProfile,
  deleteCompanyProfile,
  getSingleCompanyProfile,
};
