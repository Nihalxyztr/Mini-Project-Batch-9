import express from "express";

const app = express();
app.use(express.json());

app.get("/product", (req, res) => {
  res.json({ service: "Product Service Running" });
});

app.listen(3001, () => {
  console.log("Product Service running on port 4001");
});