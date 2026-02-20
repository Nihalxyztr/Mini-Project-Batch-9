import express from "express";
import gatewayRoutes from "./routes/gateway.routes.js";
import tracingMiddleware from "./middleware/trace.middleware.js";

const app=express();
app.use(express.json());
app.use(tracingMiddleware);

app.use("/", gatewayRoutes);

export default app;