import express from "express";

const app = express();
app.use(express.json());

// Correct endpoint
app.get("/products", (req, res) => {
  console.log("Product Service HIT");

  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

// Correct port
app.listen(4002, () => {
  console.log("Product Service running on port 4002");
});