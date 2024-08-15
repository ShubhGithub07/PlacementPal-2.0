import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { PostingJob } from "../models/whilePostingJob.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { JobCard } from "../models/card.model.js";
import { Job } from "../models/job.model.js";
import { CompanyProfile } from "../models/companyProfile.model.js";

const getAllPostingJobs = asyncHandler(async (req, res, next) => {
  // const PostingJobs = await PostingJob.find({ expired: false });
  // return res.status(200).json(
  //   new ApiResponse(200, {
  //     PostingJobs,
  //   })
  // );
});

const createPostingJob = asyncHandler(async (req, res, next) => {
  const {
    jobTitle,
    jobTags,
    jobRole,
    salaryFrom,
    salaryTo,
    salaryType,
    jobEdu,
    jobExp,
    jobType,
    vacancies,
    jobExpiration,
    jobLevel,
    jobCountry,
    jobCity,
    jobDesc,
    postedBy,
  } = req.body;

  if (
    !jobTitle ||
    !jobTags ||
    !jobRole ||
    !salaryFrom ||
    !salaryTo ||
    !salaryType ||
    !jobEdu ||
    !jobExp ||
    !jobType ||
    !vacancies ||
    !jobExpiration ||
    !jobLevel ||
    !jobCountry ||
    !jobCity ||
    !jobDesc ||
    !postedBy
  ) {
    return next(new ApiError(400, "Missing Values"));
  }

  const userPosted = new mongoose.Types.ObjectId(postedBy);

  const postingJob = await PostingJob.create({
    jobTitle,
    jobTags,
    jobRole,
    salaryFrom,
    salaryTo,
    salaryType,
    jobEdu,
    jobExp,
    jobType,
    vacancies,
    jobExpiration,
    jobLevel,
    jobCountry,
    jobCity,
    jobDesc,
    postedBy: userPosted,
  });

  if (!postingJob) {
    throw new ApiError(
      500,
      "Something went wrong while registering the PostingJob"
    );
  }

  // Fetch company profile
  const companyProfile = await CompanyProfile.findOne({
    postedBy: userPosted,
  });

  if (!companyProfile) {
    throw new ApiError(404, "Company profile not found");
  }

  const address = `${postingJob.jobCity}, ${postingJob.jobCountry}`;

  // Create Job Card
  const jobCard = await JobCard.create({
    jobTitle: postingJob.jobTitle,
    jobType: postingJob.jobType,
    companyName: companyProfile.name,
    address: address,
    salary: postingJob.salaryTo,
    logo: companyProfile.logoUrl,
    lastDate: postingJob.jobExpiration,
    postedBy: userPosted,
  });

  if (!jobCard) {
    throw new ApiError(500, "Something went wrong while creating the JobCard");
  }

  // Create Job with cardId from JobCard
  const job = await Job.create({
    logo: companyProfile.logoUrl,
    jobTitle: postingJob.jobTitle,
    companyName: companyProfile.name,
    jobType: postingJob.jobType,
    jobDescription: postingJob.jobDesc,
    salaryFrom: postingJob.salaryFrom,
    salaryTo: postingJob.salaryTo,
    address: address,
    jobPostedOn: new Date(),
    vacancy: postingJob.vacancies,
    experience: postingJob.jobExp,
    gender: "Any",
    jobLevel: postingJob.jobLevel,
    cardId: jobCard._id, // Using jobCard's _id as cardId
    compId: companyProfile._id,
    postedBy: userPosted,
  });

  if (!job) {
    throw new ApiError(500, "Something went wrong while creating the Job");
  }

  await CompanyProfile.findByIdAndUpdate(
    companyProfile._id,
    {
      $push: { openJobs: { jobId: job.cardId } },
    },
    { new: true, useFindAndModify: false }
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        postingJob,
        jobCard,
        job,
      },
      "PostingJob Posted Successfully!"
    )
  );
});

const getMyPostingJobs = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const myPostingJobs = await PostingJob.find({ postedBy: req.user._id });

  return res.status(200).json(new ApiResponse(200, { myPostingJobs }));
});

const updatePostingJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let postingJob = await PostingJob.findById(id);
  if (!postingJob) {
    return next(new ApiError("OOPS! PostingJob not found.", 404));
  }
  postingJob = await PostingJob.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "PostingJob Updated!"));
});

const deletePostingJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const postingJob = await PostingJob.findById(id);
  if (!postingJob) {
    return next(new ApiError("OOPS! PostingJob not found.", 404));
  }
  await postingJob.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "PostingJob Deleted Successfully!"));
});

const getSinglePostingJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const postingJob = await PostingJob.findById(id);
    if (!postingJob) {
      return next(new ApiError("PostingJob not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        postingJob,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllPostingJobs,
  createPostingJob,
  getMyPostingJobs,
  updatePostingJob,
  deletePostingJob,
  getSinglePostingJob,
};
