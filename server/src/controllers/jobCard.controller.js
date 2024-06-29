import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { JobCard } from "../models/card.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";

const getAllJobCard = asyncHandler(async (req, res, next) => {
  const filter = req.query.filter || "";

  const JobCards = await JobCard.find({
    $or: [
      {
        companyName: {
          $regex: filter,
          $options: "i",
        },
      },
      {
        jobTitle: {
          $regex: filter,
          $options: "i",
        },
      },
      {
        jobType: {
          $regex: filter,
          $options: "i",
        },
      },
    ],
  });

  res.json({
    JobCards: JobCards.map((job) => ({
      companyName: job.companyName,
      jobTitle: job.jobTitle,
      jobType: job.jobType,
      address: job.address,
      salary: job.salary,
      logo: job.logo,
      _id: job._id,
    })),
  });
});

// return res.status(200).json(
//   new ApiResponse(200, {
//     JobCard,
//   })
// );
// });

const createJobCard = asyncHandler(async (req, res, next) => {
  // const { role } = req.user;
  // if (role === "Candidate") {
  //   return next(
  //     new ApiError("Candidate not allowed to access this resource.", 400)
  //   );
  // }
  const {
    jobTitle,
    jobType,
    companyName,
    address,
    salary,
    logo,
    lastDate,
    postedBy,
  } = req.body;

  // if (
  //   !salary ||
  //   !jobTitle ||
  //   !jobType ||
  //   !companyName ||
  //   !address ||
  //   !lastDate ||
  //   !logo ||
  //   !postedBy
  // ) {
  //   return next(new ApiError("Please provide salary.", 400));
  // }

  const jobCard = await JobCard.create({
    jobTitle,
    jobType,
    companyName,
    address,
    salary,
    logo,
    lastDate,
    postedBy,
  });

  // if (!jobCard) {
  //   throw new ApiError(
  //     500,
  //     "Something went wrong while registering the JobCard"
  //   );
  // }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        jobCard,
      },
      "JobCard Posted Successfully!"
    )
  );
});

const getMyJobCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const myJobCards = await JobCard.find({ postedBy: req.user._id });

  return res.status(200).json(new ApiResponse(200, { myJobCards }));
});

const updateJobCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let jobCard = await JobCard.findById(id);
  if (!jobCard) {
    return next(new ApiError("OOPS! JobCard not found.", 404));
  }
  jobCard = await JobCard.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "JobCard Updated!"));
});

const deleteJobCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const jobCard = await JobCard.findById(id);
  if (!jobCard) {
    return next(new ApiError("OOPS! JobCard not found.", 404));
  }
  await jobCard.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "JobCard Deleted Successfully!"));
});

const getSingleJobCard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const jobCard = await JobCard.findById(id);
    if (!jobCard) {
      return next(new ApiError("JobCard not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        jobCard,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllJobCard,
  createJobCard,
  getMyJobCard,
  updateJobCard,
  deleteJobCard,
  getSingleJobCard,
};
