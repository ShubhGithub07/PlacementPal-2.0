import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { CompanyProfile } from "../models/companyProfile.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";

const getAllCompanyProfile = asyncHandler(async (req, res, next) => {
  const CompanyProfiles = await CompanyProfile.find();

  return res.status(200).json(
    new ApiResponse(200, {
      CompanyProfiles,
    })
  );
});

const createCompanyProfile = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const {
    compnayName,
    aboutUs,
    orgType,
    industryType,
    teamSize,
    yearOfEstablishment,
    website,
  } = req.body;

  if (
    !compnayName ||
    !aboutUs ||
    !orgType ||
    !industryType ||
    !teamSize ||
    !yearOfEstablishment ||
    !website
  ) {
    return next(
      new ApiError("Please provide full CompanyProfile details.", 400)
    );
  }

  const avatarLocalPath = req.file?.avatar[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Logo file is required");
  }
  const avatar = await uploadOnCloudianry(avatarLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  const coverImage = await uploadOnCloudianry(coverImageLocalPath);

  const companyProfile = await CompanyProfile.create({
    compnayName,
    aboutUs,
    orgType,
    industryType,
    teamSize,
    yearOfEstablishment,
    website,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
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
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const myCompanyProfile = await CompanyProfile.find({
    postedBy: req.user._id,
  });

  return res.status(200).json(new ApiResponse(200, { myCompanyProfile }));
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
