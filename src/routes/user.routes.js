import express from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { getProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/products", getProducts);

export default router;