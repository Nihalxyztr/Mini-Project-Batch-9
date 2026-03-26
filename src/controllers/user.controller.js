import User from "../models/user.model.js";
import { SERVICES } from "../config/gateway.config.js";

// CREATE USER (still using DB)
export const createUser = async (req, res) => {
  try {
    const { name, email, role, apiKey } = req.body;

    const user = new User({
      name,
      email,
      role,
      apiKey,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USERS (from backend service)
export const getUsers = async (req, res) => {
  try {
    const response = await fetch(`${SERVICES.USER_SERVICE}/users`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users from User Service",
    });
  }
};