import express from "express";
import gatewayRoutes from "./routes/gateway.routes.js";


const app=express();
app.use(express.json());

app.use("/", gatewayRoutes);

export default app;