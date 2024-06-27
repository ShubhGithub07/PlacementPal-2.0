import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { EmployerDashboard } from "../models/employerDashboard.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";

const getAllEmployerDashboard = asyncHandler(async (req, res, next) => {
  const EmployerDashboards = await EmployerDashboard.find();

  return res.status(200).json(
    new ApiResponse(200, {
      EmployerDashboards,
    })
  );
});

const createEmployerDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { jobTitle, jobType, remainingDays, status, applications } = req.body;

  if (!jobTitle || !jobType || !remainingDays || !status || !applications) {
    return next(
      new ApiError("Please provide full EmployerDashboard details.", 400)
    );
  }

  const employerDashboard = await EmployerDashboard.create({
    jobTitle,
    jobType,
    remainingDays,
    status,
    applications,
    postedBy,
  });

  if (!employerDashboard) {
    throw new ApiError(
      500,
      "Something went wrong while registering the EmployerDashboard"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        employerDashboard,
      },
      "EmployerDashboard Posted Successfully!"
    )
  );
});

const getMyEmployerDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const myEmployerDashboard = await EmployerDashboard.find({
    postedBy: req.user._id,
  });

  return res.status(200).json(new ApiResponse(200, { myEmployerDashboard }));
});

const updateEmployerDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let employerDashboard = await EmployerDashboard.findById(id);
  if (!employerDashboard) {
    return next(new ApiError("OOPS! EmployerDashboard not found.", 404));
  }
  employerDashboard = await EmployerDashboard.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "EmployerDashboard Updated!"));
});

const deleteEmployerDashboard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const employerDashboard = await EmployerDashboard.findById(id);
  if (!employerDashboard) {
    return next(new ApiError("OOPS! EmployerDashboard not found.", 404));
  }
  await employerDashboard.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "EmployerDashboard Deleted Successfully!"));
});

const getSingleEmployerDashboard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const employerDashboard = await EmployerDashboard.findById(id);
    if (!employerDashboard) {
      return next(new ApiError("EmployerDashboard not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        employerDashboard,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllEmployerDashboard,
  createEmployerDashboard,
  getMyEmployerDashboard,
  updateEmployerDashboard,
  deleteEmployerDashboard,
  getSingleEmployerDashboard,
};
