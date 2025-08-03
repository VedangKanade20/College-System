import mongoose from "mongoose";

function connectDB() {
  const URL = `${process.env.MONGO_URI}/${process.env.DB_NAME}`;
  console.log("Connecting to MongoDB....");
  return mongoose.connect(URL);
}

export default connectDB;
