import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/gatewayDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error Connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;