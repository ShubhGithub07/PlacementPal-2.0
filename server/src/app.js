import express from "express";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import jobRouter from "./routes/job.routes.js";
import applicationRouter from "./routes/application.routes.js";
import jobCardRouter from "./routes/jobCard.routes.js";
import userProfileRouter from "./routes/userProfile.routes.js";
import companyProfileRouter from "./routes/companyProfile.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import whilePostingJobRouter from "./routes/whilePostingJob.routes.js";
import applicationCardRouter from "./routes/applicationCard.routes.js";
import employerDashboardRouter from "./routes/employerDashboard.routes.js";
import candidateDashboardRouter from "./routes/candidateDashboard.routes.js";

const app = express();
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

app.use("/api/v1/application", applicationRouter);

app.use("/api/v1/applicationcard", applicationCardRouter);

app.use("/api/v1/candidatedashboard", candidateDashboardRouter);

app.use("/api/v1/companyprofile", companyProfileRouter);

app.use("/api/v1/employerdashboard", employerDashboardRouter);

app.use("/api/v1/job", jobRouter);

app.use("/api/v1/jobcard", jobCardRouter);

app.use("/api/v1/resume", resumeRouter);

app.use("/api/v1/users", userRouter);

app.use("/api/v1/userprofile", userProfileRouter);

app.use("/api/v1/postingjob", whilePostingJobRouter);

export default app;
