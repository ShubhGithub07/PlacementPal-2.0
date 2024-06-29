import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    logo: {
      type: String,
      required: [true, "Please provide a title."],
    },
    jobTitle: {
      type: String,
      required: [true, "Please provide a title."],
    },
    companyName: {
      type: String,
      required: [true, "Please provide a category."],
    },
    jobType: {
      type: String,
      required: [true, "Please provide a category."],
    },
    jobDescription: {
      type: String,
      required: [true, "Please provide a category."],
    },
    salaryFrom: {
      type: Number,
      minLength: [4, "Salary must contain at least 4 digits"],
      maxLength: [9, "Salary cannot exceed 9 digits"],
    },
    salaryTo: {
      type: Number,
      minLength: [4, "Salary must contain at least 4 digits"],
      maxLength: [9, "Salary cannot exceed 9 digits"],
    },
    address: {
      type: String,
      required: true,
    },
    jobPostedOn: {
      type: String,
      required: true,
    },
    vacancy: {
      type: Number,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    jobLevel: {
      type: String,
      required: true,
    },
    cardId: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
