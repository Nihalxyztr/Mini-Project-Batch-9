
import mongoose from "mongoose";

const traceSchema = new mongoose.Schema(
  {
    traceId: {
      type: String,
      required: true,
      unique: true,
    },
    method: String,
    url: String,
    statusCode: Number,
    responseTime: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Trace", traceSchema);