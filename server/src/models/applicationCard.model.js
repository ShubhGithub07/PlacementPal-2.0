import mongoose from "mongoose";
const applicationCardSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    appliedOn: {
      type: String,
      required: true,
    },
    isShortlisted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ApplicationCard = mongoose.model(
  "ApplicationCard",
  applicationCardSchema
);
