import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Resume } from "../models/resume.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudianry } from "../utils/cloudinary.js";

const getAllResume = asyncHandler(async (req, res, next) => {
  const Resumes = await Resume.find();

  return res.status(200).json(
    new ApiResponse(200, {
      Resumes,
    })
  );
});

const createResume = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { name, email, phone, address, education, experience, skills } =
    req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !education ||
    !experience ||
    !skills ||
    !resume
  ) {
    return next(new ApiError("Please provide full Resume details.", 400));
  }

  const resumeLocalPath = req.file?.resumeImage[0]?.path;
  if (!resumeLocalPath) {
    throw new ApiError(400, "Logo file is required");
  }
  const resumeImage = await uploadOnCloudianry(resumeLocalPath);
  if (!resumeImage) {
    throw new ApiError(400, "resume file is required");
  }

  const resume = await Resume.create({
    name,
    email,
    phone,
    address,
    education,
    experience,
    skills,
    postedBy,
    resumeImage: resume.url,
  });

  if (!resume) {
    throw new ApiError(
      500,
      "Something went wrong while registering the Resume"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        resume,
      },
      "Resume Posted Successfully!"
    )
  );
});

const updateResume = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  let resume = await Resume.findById(id);
  if (!resume) {
    return next(new ApiError("OOPS! Resume not found.", 404));
  }
  resume = await Resume.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json(new ApiResponse(200, "Resume Updated!"));
});

const deleteResume = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  const { id } = req.params;
  const resume = await Resume.findById(id);
  if (!resume) {
    return next(new ApiError("OOPS! Resume not found.", 404));
  }
  await resume.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, "Resume Deleted Successfully!"));
});

const getSingleResume = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const resume = await Resume.findById(id);
    if (!resume) {
      return next(new ApiError("Resume not found.", 404));
    }
    return res.status(200).json(
      new ApiResponse(200, {
        resume,
      })
    );
  } catch (error) {
    return next(new ApiError(`Invalid ID / CastError`, 404));
  }
});

export {
  getAllResume,
  createResume,
  updateResume,
  deleteResume,
  getSingleResume,
};
