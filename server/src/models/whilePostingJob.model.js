import mongoose from "mongoose";

const postingJobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    jobTags: { type: String, required: true },
    jobRole: { type: String, required: true },
    salaryFrom: { type: Number, required: true },
    salaryTo: { type: Number, required: true },
    salaryType: { type: String, required: true },
    jobEdu: { type: String, required: true },
    jobExp: { type: String, required: true },
    jobType: { type: String, required: true },
    vacancies: { type: Number, require: true },
    jobExpiration: { type: Date, require: true },
    jobLevel: { type: String, required: true },
    jobCountry: { type: String, required: true },
    jobCity: { type: String, required: true },
    jobDesc: { type: String, required: true },
    postedBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const PostingJob = mongoose.model("PostingJob", postingJobSchema);
