import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Job } from "../models/job.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllJobs = asyncHandler(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });

  return res.status(200).json(
    new ApiResponse(200, {
      jobs,
    })
  );
});

const postJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ApiError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
  } = req.body;

  if (!title || !description || !category || !country || !city || !location) {
    return next(new ApiError("Please provide full job details.", 400));
  }

  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ApiError("Please either provide fixed salary or ranged salary.", 400)
    );
  }

  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ApiError("Cannot Enter Fixed and Ranged Salary together.", 400)
    );
  }
  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy,
  });

  if (!job) {
    throw new ApiError(500, "Something went wrong while registering the job");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        job,
      },
      "Job Posted Successfully!"
    )
  );
});

const getMyJobs = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ApiError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const myJobs = await Job.find({ postedBy: req.user._id });

  return res.status(200).json(new ApiResponse(200, { myJobs }));
});

const updateJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ApiError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ApiError("OOPS! Job not found.", 404));
  }
  job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "Job Updated!"));
});

const deleteJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ApiError("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new ApiError("OOPS! Job not found.", 404));
  }
  await job.deleteOne();

  return res.status(200).json(new ApiResponse(200, "Job Deleted Successfully!"));
});

const getSingleJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      return next(new ApiError("Job not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        job,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export { getAllJobs, postJob, getMyJobs, updateJob, deleteJob, getSingleJob };
