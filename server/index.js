import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/connectdb.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import programRouter from "./routes/programRoutes.js";
import batchRouter from "./routes/batchRoutes.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json()); // parses incoming JSON data
app.use(cookieParser()); // read cookies in requests
app.use(
  // enables frontend-backend communication with cookies
  cors({
    origin: process.env.FRONTEND_URL, // frontend url
    credentials: true, // allow cookies
  })
);

// connect to database
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.end("Hello world");
});

app.use("/api/users", userRouter);
app.use("/api/program", programRouter);
app.use("/api/batch", batchRouter);
