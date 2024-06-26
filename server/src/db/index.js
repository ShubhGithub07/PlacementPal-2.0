import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/JobHub`);
    console.log(`\n MongoDB connected !! DB HOST: ${conn.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error", error);
    throw error;
  }
};

export default connectDB;
