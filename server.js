import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { PORT } from "./src/config/gateway.config.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.log("Error starting the server", err);
    process.exit(1);
  }
};

startServer();