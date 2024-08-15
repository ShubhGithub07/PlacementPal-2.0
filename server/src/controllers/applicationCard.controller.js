import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApplicationCard } from "../models/applicationCard.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";
import { Job } from "../models/job.model.js";

const getAllApplicationCard = asyncHandler(async (req, res, next) => {
  const ApplicationCards = await ApplicationCard.find();

  return res.status(200).json(
    new ApiResponse(200, {
      ApplicationCards,
    })
  );
});

const createApplicationCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { name, jobTitle, experience, education, appliedOn, isShortlisted } =
    req.body;

  if (
    !name ||
    !jobTitle ||
    !experience ||
    !education ||
    !appliedOn ||
    !isShortlisted ||
    !avatar
  ) {
    return next(
      new ApiError("Please provide full ApplicationCard details.", 400)
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

  const applicationCard = await ApplicationCard.create({
    name,
    jobTitle,
    experience,
    education,
    appliedOn,
    isShortlisted,
    postedBy,
    avatar: avatar.url,
  });

  if (!applicationCard) {
    throw new ApiError(
      500,
      "Something went wrong while registering the ApplicationCard"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        applicationCard,
      },
      "ApplicationCard Posted Successfully!"
    )
  );
});

const getMyApplicationCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const myApplicationCard = await ApplicationCard.find({
    postedBy: req.user._id,
  });

  return res.status(200).json(new ApiResponse(200, { myApplicationCard }));
});

const updateApplicationCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const applicationCard = await ApplicationCard.findById(id);
  if (!applicationCard) {
    return next(new ApiError("OOPS! ApplicationCard not found.", 404));
  }
  applicationCard = await ApplicationCard.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "ApplicationCard Updated!"));
});

const deleteApplicationCard = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Candidate") {
    return next(
      new ApiError("Candidate not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const applicationCard = await ApplicationCard.findById(id);
  if (!applicationCard) {
    return next(new ApiError("OOPS! ApplicationCard not found.", 404));
  }
  await applicationCard.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "ApplicationCard Deleted Successfully!"));
});

const getSingleApplicationCard = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const applicationCard = await Job.findOne({ cardId: id });
    if (!applicationCard) {
      return next(new ApiError("ApplicationCard not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        applicationCard,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllApplicationCard,
  createApplicationCard,
  getMyApplicationCard,
  updateApplicationCard,
  deleteApplicationCard,
  getSingleApplicationCard,
};
