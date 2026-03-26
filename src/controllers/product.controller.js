import { SERVICES } from "../config/gateway.config.js";

export const getProducts = async (req, res) => {
  try {
    const response = await fetch(`${SERVICES.PRODUCT_SERVICE}/products`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products from Product Service",
    });
  }
};