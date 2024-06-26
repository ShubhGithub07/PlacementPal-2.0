import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    console.log("Cookies:", req.cookies); // Log cookies
    console.log("Headers:", req.headers); // Log headers

    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    console.log("Extracted Token:", token); // Log the token for debugging

    if (!token) {
      console.warn("No token found, proceeding without authentication");
      return next(); // Proceed without throwing an error
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    console.log("Decoded Token:", decodedToken); // Log the decoded token for debugging

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    next(new ApiError(401, error?.message || "Invalid Access Token"));
  }
});