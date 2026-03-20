import { v4 as uuidv4 } from "uuid";
import Trace from "../models/trace.model.js";
import { runWithContext } from "../utils/asyncContext.js";

const tracingMiddleware = (req, res, next) => {
  const traceId = uuidv4();
  const startTime = Date.now();

  runWithContext(traceId, () => {
    console.log("Middleware Trace:", traceId);
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
  });
};

export default tracingMiddleware;