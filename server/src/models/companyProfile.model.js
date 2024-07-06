import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
});

const openJobsSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
});

const companyProfileSchema = new mongoose.Schema(
  {
    logoUrl: { type: String },
    aboutUs: { type: String, required: true },
    email: { type: String, required: true },
    established: { type: Date, required: true },
    industry: { type: String, required: true },
    location: { type: String, required: true },
    name: { type: String, required: true },
    organizationType: { type: String, required: true },
    phone: { type: String, required: true },
    socialLinks: { type: [socialLinkSchema], default: [] },
    teamSize: { type: String, required: true },
    vision: { type: String, required: true },
    website: { type: String, required: true },
    openJobs: { type: [openJobsSchema], default: [] },
    postedBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const CompanyProfile = mongoose.model(
  "CompanyProfile",
  companyProfileSchema
);
