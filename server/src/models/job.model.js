import mongoose, { Schema } from "mongoose";

const appliedUsersSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  isShortlisted: {
    type: Boolean,
    default: false,
  },
  appliedOn: {
    type: Date,
    default: new Date(),
  },
});

const jobSchema = new Schema(
  {
    logo: { type: String, required: [true, "Please provide a title."] },
    jobTitle: { type: String, required: [true, "Please provide a title."] },
    companyName: {
      type: String,
      required: [true, "Please provide a category."],
    },
    jobType: { type: String, required: [true, "Please provide a category."] },
    jobDescription: {
      type: String,
      required: [true, "Please provide a category."],
    },
    salaryFrom: { type: Number, required: true },
    salaryTo: { type: Number, required: true },
    address: { type: String, required: true },
    jobPostedOn: { type: String, required: true },
    vacancy: { type: Number, required: true },
    experience: { type: String, required: true },
    gender: { type: String, required: true },
    jobLevel: { type: String, required: true },
    appliedUsers: { type: [appliedUsersSchema], default: [] },
    cardId: { type: String, required: true },
    compId: { type: String, required: true },
    postedBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
