import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please provide a title."],
      minLength: [3, "Title must contain at least 3 Characters!"],
      maxLength: [30, "Title cannot exceed 30 Characters!"],
    },
    jobDescription: {
      type: String,
      required: [true, "Please provide decription."],
      minLength: [30, "Description must contain at least 30 Characters!"],
      maxLength: [500, "Description cannot exceed 500 Characters!"],
    },
    jobType: {
      type: String,
      required: true,
    },
    jobLevel: {
      type: String,
      required: true,
    },
    Tags: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: [true, "Please provide a country name."],
    },
    city: {
      type: String,
      required: [true, "Please provide a city name."],
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
    expiredDate: {
      type: Boolean,
      //   default: false,
      required: true,
    },
    jobPostedOn: {
      type: Date,
      default: Date.now,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
