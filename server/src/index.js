import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
// import cloudinary from "cloudinary";

dotenv.config({
  path: "./.env",
});

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });
