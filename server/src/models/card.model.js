import mongoose, { Schema } from "mongoose";

const jobCardSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please provide a title."],
      minLength: [3, "Title must contain at least 3 Characters!"],
      maxLength: [30, "Title cannot exceed 30 Characters!"],
    },
    jobType: {
      type: String,
      required: [true, "Please provide a title."],
      minLength: [3, "Title must contain at least 3 Characters!"],
      maxLength: [30, "Title cannot exceed 30 Characters!"],
    },
    companyName: {
      type: String,
      required: [true, "Please provide a category."],
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      minLength: [4, "Salary must contain at least 4 digits"],
      maxLength: [9, "Salary cannot exceed 9 digits"],
    },
    logo: {
      type: String,
      required: true,
    },
    lastDate: {
      type: Number,
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

export const JobCard = mongoose.model("JobCard", jobCardSchema);
