import connectDB from "./database/db.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB:", error);
  });
