import express from "express";
import gatewayRoutes from "./routes/gateway.routes.js";
import tracingMiddleware from "./middleware/trace.middleware.js";
import userRoutes from "./routes/user.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";
import rateLimitMiddleware from "./middleware/rateLimit.middleware.js";

const app = express();

app.use(express.json());

// Correct order
app.use(tracingMiddleware);
app.use(loggerMiddleware);
app.use(rateLimitMiddleware);

// Routes AFTER middleware
app.use("/", gatewayRoutes);
app.use("/api", userRoutes);

export default app;