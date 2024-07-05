import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    coverLetter: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
    isShorlisted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
