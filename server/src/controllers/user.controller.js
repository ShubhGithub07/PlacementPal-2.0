import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { z } from "zod";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["Candidate", "Employer"]),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAcessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

const registerUser = async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({ message: "Please provide correct data" });
  }

  const user = await User.findOne({
    email: body.email,
  });


  if (user) {
    return res.json({ message: "Email already taken / Incorect Inputs" });
  }

  const dbUser = await User.create(body);

  const token = jwt.sign(
    {
      userId: dbUser._id,
      role: dbUser.role,
      email: dbUser.email,
    },
    process.env.JWT_SECRET
  );
  res.json({ message: "User created successfully", token: token , userId : dbUser._id});
};

const loginUser = async (req, res) => {
  const body = req.body;
  const result = loginSchema.safeParse(body);

  if (!result.success) {
    return res.send({ message: "Please provide the correct data" });
  }

  const existingUser = await User.findOne({ email: body.email });
  if (!existingUser) {
    return res.send({ message: "You need to sign up first!" });
  }

  const isPasswordValid = await existingUser.isPasswordCorrect(body.password);

  if (!isPasswordValid) {
    return res.send({ message: "Incorrect password" });
  }

  const token = jwt.sign(
    {
      userId: existingUser._id,
      role: existingUser.role,
      email: existingUser.email,
    },
    process.env.JWT_SECRET
  );
  return res.json({ message: "Signed in successfully", token: token });
};

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(200, req.user, "Current user fetched successfully");
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
};
