import mongoose, { Schema } from "mongoose";

const postingJobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please provide a title."],
    },
    jobTags: {
      type: String,
      required: [true, "Please provide decription."],
    },
    jobRole: {
      type: String,
      required: true,
    },
    salaryFrom: {
      type: Number,
      required: true,
    },
    salaryTo: {
      type: Number,
      required: true,
    },
    salaryType: {
      type: String,
      required: true,
    },
    jobEdu: {
      type: String,
      required: true,
    },
    jobExp: {
      type: String,
      required: [true, "Please provide a country name."],
    },
    jobType: {
      type: String,
      required: [true, "Please provide a city name."],
    },
    vacancies: {
      type: Number,
      require: true,
    },
    jobExpiration: {
      type: Date,
      require: true,
    },
    jobLevel: {
      type: String,
      required: true,
    },
    jobCountry: {
      type: String,
      required: true,
    },
    jobCity: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const PostingJob = mongoose.model("PostingJob", postingJobSchema);
