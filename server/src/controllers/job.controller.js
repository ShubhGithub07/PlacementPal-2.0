import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Job } from "../models/job.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllJobs = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  try {
    const jobs = await Job.find({ "appliedUsers.userId": userId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

const postJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
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

///////////////////////////////////////////////////

// Using this endpoint to fetch the jobs using compID for employee dashboard

const getMyJobs = asyncHandler(async (req, res) => {
  const { compId } = req.body;
  try {
    const jobs = await Job.find({ compId });
    return res
      .status(200)
      .json(new ApiResponse(200, jobs, "Job Posted Successfully!"));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
});

//   Shortlisting User

const shortlist = asyncHandler(async (req, res) => {
  const { userId, cardId } = req.body;

  try {
    const jobs = await Job.updateOne(
      { $and: [{ "appliedUsers.userId": userId }, { cardId }] },
      { $set: { "appliedUsers.$.isShortlisted": true } }
    );
    return res.status(200).json(new ApiResponse(200, jobs, "Shortlisted!"));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
});

//   Rejecting User

const reject = asyncHandler(async (req, res) => {
  const { userId, cardId } = req.body;

  try {
    const jobs = await Job.updateOne(
      { $and: [{ "appliedUsers.userId": userId }, { cardId }] },
      { $pull: { appliedUsers: { userId } } }
    );
    return res.status(200).json(new ApiResponse(200, jobs, "Shortlisted!"));
  } catch (error) {
    console.error("Error deleting user:", error);
    return [];
  }
});

////////////////////////////////////////////////////

const updateJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
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
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new ApiError("OOPS! Job not found.", 404));
  }
  await job.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "Job Deleted Successfully!"));
});

const getSingleJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Job.findOne({ cardId: id });
    return res.status(200).json(
      new ApiResponse(200, {
        job,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllJobs,
  postJob,
  getMyJobs,
  shortlist,
  reject,
  updateJob,
  deleteJob,
  getSingleJob,
};
