import express from "express";
import gatewayRoutes from "./routes/gateway.routes.js";

import tracingMiddleware from "./middleware/trace.middleware.js";
import loggerMiddleware from "./middleware/logger.middleware.js";
import rateLimitMiddleware from "./middleware/rateLimit.middleware.js";

const app = express();

app.use(express.json());


app.use(tracingMiddleware);
app.use(loggerMiddleware);
app.use(rateLimitMiddleware);

app.use("/", gatewayRoutes);

export default app;