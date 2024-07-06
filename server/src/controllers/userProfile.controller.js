import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { UserProfile } from "../models/userProfile.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";

const getAllUserProfile = asyncHandler(async (req, res, next) => {
  const UserProfiles = await UserProfile.find();

  return res.status(200).json(
    new ApiResponse(200, {
      UserProfiles,
    })
  );
});

const createUserProfile = asyncHandler(async (req, res, next) => {
  const {
    fullName,
    headline,
    experience,
    education,
    personalWebsite,
    nationality,
    DOB,
    gender,
    martialStatus,
    socialLinks,
    biography,
    location,
    phone,
    email,
    postedBy,
  } = req.body;

  console.log(req.body);

  if (
    !fullName ||
    !headline ||
    !experience ||
    !education ||
    !personalWebsite ||
    !nationality ||
    !DOB ||
    !gender ||
    !martialStatus ||
    !socialLinks ||
    !biography ||
    !location ||
    !phone ||
    !email ||
    !postedBy
  ) {
    return next(res.json("Missing Values"));
  }

  const userPosted = new mongoose.Types.ObjectId(postedBy);
  console.log("Posted by : ", userPosted);

  const userProfile = await UserProfile.create({
    fullName,
    headline,
    experience,
    education,
    personalWebsite,
    nationality,
    DOB,
    gender,
    martialStatus,
    socialLinks,
    biography,
    location,
    phone,
    jobApplied: 0,
    email,
    postedBy: userPosted,
  });

  if (!userProfile) {
    throw new ApiError(
      500,
      "Something went wrong while registering the UserProfile"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        userProfile,
      },
      "UserProfile Posted Successfully!"
    )
  );
});

const getMyUserProfile = asyncHandler(async (req, res) => {

  const myUserProfile = await UserProfile.findOne({ postedBy: req.body.userId });

  return res.status(200).json(new ApiResponse(200,  myUserProfile ));
});

const updateUserProfile = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let userProfile = await UserProfile.findById(id);
  if (!userProfile) {
    return next(new ApiError("OOPS! UserProfile not found.", 404));
  }
  userProfile = await UserProfile.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "UserProfile Updated!"));
});

const deleteUserProfile = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const userProfile = await UserProfile.findById(id);
  if (!userProfile) {
    return next(new ApiError("OOPS! UserProfile not found.", 404));
  }
  await userProfile.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "UserProfile Deleted Successfully!"));
});

const getSingleUserProfile = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const userProfile = await UserProfile.findById(id);
    if (!userProfile) {
      return next(new ApiError("UserProfile not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        userProfile,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllUserProfile,
  createUserProfile,
  getMyUserProfile,
  updateUserProfile,
  deleteUserProfile,
  getSingleUserProfile,
};
