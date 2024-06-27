import moongoose from "mongoose";
const companyProfileSchema = new moongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    compnayName: {
      type: String,
      required: true,
    },
    aboutUs: {
      type: String,
      required: true,
    },
    orgType: {
      type: String,
      required: true,
    },
    industryType: {
      type: String,
      required: true,
    },
    teamSize: {
      type: Number,
      required: true,
    },
    yearOfEstablishment: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    companyVision: {
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

export const CompanyProfile = moongoose.model(
  "CompanyProfile",
  companyProfileSchema
);
