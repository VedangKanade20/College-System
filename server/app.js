import express from "express";

import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

export default app;
