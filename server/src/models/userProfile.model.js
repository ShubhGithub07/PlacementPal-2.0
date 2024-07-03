import mongoose, { Schema } from "mongoose";

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
});

const userProfileSchema = new Schema(
  {
    fullName: { type: String, required: true },
    headline: { type: String, required: true },
    experience: { type: String, required: true },
    education: { type: String, required: true },
    personalWebsite: { type: String, required: true },
    nationality: { type: String, required: true },
    DOB: { type: Date, required: true },
    gender: { type: String, required: true },
    martialStatus: { type: String, required: true },
    socialLinks: [socialLinkSchema],
    biography: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    jobApplied : { type: Number, required: true },
    email: { type: String, required: true },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const UserProfile = mongoose.model("UserProfile", userProfileSchema);
