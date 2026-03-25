import express from "express";
import gatewayRoutes from "./routes/gateway.routes.js";
import tracingMiddleware from "./middleware/trace.middleware.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(tracingMiddleware);

app.use("/", gatewayRoutes);
app.use("/api", userRoutes);

export default app;
