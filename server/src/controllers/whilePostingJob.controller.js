import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { PostingJob } from "../models/whilePostingJob.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllPostingJobs = asyncHandler(async (req, res, next) => {
  const PostingJobs = await PostingJob.find({ expired: false });

  return res.status(200).json(
    new ApiResponse(200, {
      PostingJobs,
    })
  );
});

const createPostingJob = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const {
    jobTitle,
    jobDescription,
    jobType,
    jobLevel,
    Tags,
    education,
    experience,
    country,
    city,
    salaryFrom,
    salaryTo,
  } = req.body;

  if (
    !jobTitle ||
    !jobDescription ||
    !jobType ||
    !jobLevel ||
    !Tags ||
    !education ||
    !experience ||
    !country ||
    !city ||
    !location
  ) {
    return next(new ApiError("Please provide full PostingJob details.", 400));
  }

  if (!salaryFrom || !salaryTo) {
    return next(
      new ApiError("Please either provide fixed salary or ranged salary.", 400)
    );
  }

  const postedBy = req.user._id;
  const postingJob = await PostingJob.create({
    jobTitle,
    jobDescription,
    jobType,
    jobLevel,
    Tags,
    education,
    experience,
    country,
    city,
    salaryFrom,
    salaryTo,
    expiredDate,
    postedBy,
  });

  if (!postingJob) {
    throw new ApiError(
      500,
      "Something went wrong while registering the PostingJob"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        postingJob,
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
