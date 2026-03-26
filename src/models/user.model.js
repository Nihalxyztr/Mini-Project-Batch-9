import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "service"],
      default: "user",
    },
    apiKey: {
      type: String,
      unique: true, // Ensure API keys are unique
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);