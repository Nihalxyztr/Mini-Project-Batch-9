import { v4 as uuidv4 } from "uuid";
import Trace from "../models/trace.model.js";

const tracingMiddleware = async (req, res, next) => {
  const traceId = uuidv4();
  const startTime = Date.now();
  req.traceId = traceId;
  res.on("finish", async () => {
    const responseTime = Date.now() - startTime;

    console.log(
      `[TRACE_ID: ${traceId}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${responseTime}ms`
    );

    try {
      await Trace.create({
        traceId,
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        responseTime,
      });
    } catch (error) {
      console.error("Trace save error:", error.message);
    }
  });

  next();
};

export default tracingMiddleware;