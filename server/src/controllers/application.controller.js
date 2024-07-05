import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import mongoose from "mongoose";

const postApplication = asyncHandler(async (req, res, next) => {
  const { coverLetter, userId, jobId } = req.body;

  if (!jobId) {
    return next(new ApiError("Job not found!", 404));
  }
  // console.log(jobId);
  // const jobDetails = await Job.findOne({ cardId: jobId });

  // console.log(jobDetails);
  // if (!jobDetails) {
  //     return next(new ApiError("Job not found!", 404));
  // }

  const application = await Application.create({
    coverLetter,
    userId,
    jobId,
    isShorlisted: false,
  });

  const applicantId = application._id;
  console.log(applicantId);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        application,
      },
      "Application Submitted!"
    )
  );
});

const employerGetAllApplications = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { _id } = req.user;
  const applications = await Application.find({ "employerID.user": _id });

  return res.status(200).json(
    new ApiResponse(200, {
      applications,
    })
  );
});

const jobseekerGetAllApplications = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { _id } = req.user;
  const applications = await Application.find({ "applicantID.user": _id });

  return res.status(200).json(
    new ApiResponse(200, {
      applications,
    })
  );
});

const jobseekerDeleteApplication = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const application = await Application.findById(id);
  if (!application) {
    return next(new ApiError("Application not found!", 404));
  }
  await application.deleteOne();

  return res.status(200).json(new ApiResponse(200, "Application Deleted!"));
});

export {
  postApplication,
  employerGetAllApplications,
  jobseekerGetAllApplications,
  jobseekerDeleteApplication,
};
