import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import cloudinary from "cloudinary";
// import { uploadOnCloudianry } from "../utils/cloudinary.js";

const postApplication = asyncHandler(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ApiError("Employer not allowed to access this resource.", 400)
    );
  }
  
  // const resumeLocalPath = req.file?.resume[0]?.path;
  // if (!resumeLocalPath) {
  //   throw new ApiError(400, "Resume file is required!");
  // }

  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ApiError("Resume File Required!", 400));
  }

  // const resume = await uploadOnCloudianry(resumeLocalPath);
  // if (!resume) {
  //   throw new ApiError(400, "Resume file is required!");
  // }

  const { resume } = req.files;
  const allowedFormats = ["image/png", "image/jpg", "image/webp"];
  if (!allowedFormats.includes(resume.mimetype)) {
    return next(
      new ApiError("Invalid file type. Please upload a PNG file.", 400)
    );
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );

  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    return next(new ApiError("Failed to upload Resume to Cloudinary", 500));
  }

  const { name, email, coverLetter, phone, address, jobId } = req.body;
  const applicantID = {
    user: req.user._id,
    role: "Candidate",
  };
  if (!jobId) {
    return next(new ApiError("Job not found!", 404));
  }
  const jobDetails = await Job.findById(jobId);
  if (!jobDetails) {
    return next(new ApiError("Job not found!", 404));
  }

  const employerID = {
    user: jobDetails.postedBy,
    role: "Employer",
  };
  if (
    !name ||
    !email ||
    !coverLetter ||
    !phone ||
    !address ||
    !applicantID ||
    !employerID ||
    !resume
  ) {
    return next(new ApiError("Please fill all fields.", 400));
  }
  const application = await Application.create({
    name,
    email,
    coverLetter,
    phone,
    address,
    applicantID,
    employerID,
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
    // resume.url,
  });

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
