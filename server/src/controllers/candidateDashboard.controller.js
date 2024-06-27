import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { CandidateDashboard } from "../models/candidateDashboard.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";

const getAllCandidateDashboard = asyncHandler(async (req, res, next) => {
  const CandidateDashboards = await CandidateDashboard.find();

  return res.status(200).json(
    new ApiResponse(200, {
      CandidateDashboards,
    })
  );
});

const createCandidateDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const {
    jobTitle,
    companyName,
    jobType,
    jobLocation,
    appliedOn,
    status,
    minSalary,
    maxSalary,
  } = req.body;

  if (
    !jobTitle ||
    !companyName ||
    !jobType ||
    !jobLocation ||
    !appliedOn ||
    !status
  ) {
    return next(
      new ApiError("Please provide full CandidateDashboard details.", 400)
    );
  }

  if (!minSalary || !maxSalary) {
    return next(
      new ApiError("Please either provide fixed salary or ranged salary.", 400)
    );
  }

  const companyLogoLocalPath = req.file?.companyLogo[0]?.path;
  if (!companyLogoLocalPath) {
    throw new ApiError(400, "Logo file is required");
  }
  const companyLogo = await uploadOnCloudianry(companyLogoLocalPath);
  if (!companyLogo) {
    throw new ApiError(400, "companyLogo file is required");
  }

  const candidateDashboard = await CandidateDashboard.create({
    jobTitle,
    companyName,
    jobType,
    jobLocation,
    minSalary,
    maxSalary,
    appliedOn,
    status,
    postedBy,
    companyLogo: companyLogo.url,
  });

  if (!candidateDashboard) {
    throw new ApiError(
      500,
      "Something went wrong while registering the CandidateDashboard"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        candidateDashboard,
      },
      "CandidateDashboard Posted Successfully!"
    )
  );
});

const getMyCandidateDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const myCandidateDashboard = await CandidateDashboard.find({
    postedBy: req.user._id,
  });

  return res.status(200).json(new ApiResponse(200, { myCandidateDashboard }));
});

const updateCandidateDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let candidateDashboard = await CandidateDashboard.findById(id);
  if (!candidateDashboard) {
    return next(new ApiError("OOPS! CandidateDashboard not found.", 404));
  }
  candidateDashboard = await CandidateDashboard.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, "CandidateDashboard Updated!"));
});

const deleteCandidateDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const candidateDashboard = await CandidateDashboard.findById(id);
  if (!candidateDashboard) {
    return next(new ApiError("OOPS! CandidateDashboard not found.", 404));
  }
  await candidateDashboard.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "CandidateDashboard Deleted Successfully!"));
});

const getSingleCandidateDashboard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const candidateDashboard = await CandidateDashboard.findById(id);
    if (!candidateDashboard) {
      return next(new ApiError("CandidateDashboard not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        candidateDashboard,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllCandidateDashboard,
  createCandidateDashboard,
  getMyCandidateDashboard,
  updateCandidateDashboard,
  deleteCandidateDashboard,
  getSingleCandidateDashboard,
};
