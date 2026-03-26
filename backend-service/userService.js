import express from "express";

const app = express();
app.use(express.json());

// Root check
app.get("/", (req, res) => {
  res.json({ service: "User Service Running" });
});

// REQUIRED endpoint
app.get("/users", (req, res) => {
  console.log("User Service HIT");

  res.json([
    { id: 1, name: "Nihal" },
    { id: 2, name: "Patanjali" },
    { id: 3, name: "Om Sharma" },
    { id: 4, name: "nishant" },
      { id: 5, name: "pranjal" }
  ]);
});

app.listen(4001, () => {
  console.log("User Service running on port 4001");
});