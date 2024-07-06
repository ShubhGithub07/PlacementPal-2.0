import mongoose, { Schema } from "mongoose";

const jobCardSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Please provide a title."],
    },
    jobType: {
      type: String,
      required: [true, "Please provide a title."],
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
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    lastDate: {
      type: Date,
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
