import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./config/data-source";


dotenv.config();

const PORT = process.env["PORT"] || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });