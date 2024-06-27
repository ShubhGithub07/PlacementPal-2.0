import mongoose from "mongoose";
const employerDashboardSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    remainingDays: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    applications: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const EmployerDashboard = mongoose.model(
  "EmployerDashboard",
  employerDashboardSchema,
);
