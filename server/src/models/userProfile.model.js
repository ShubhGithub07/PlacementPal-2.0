import mongoose, { Schema } from "mongoose";

const userProfileSchema = new Schema(
  {
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    headline: {
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
    nationality: {
      type: String,
    },
    personalWebsite: {
      type: String,
    },
    DOB: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
    },
    martialStatus: {
      type: String,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const UserProfile = mongoose.model("UserProfile", userProfileSchema);
