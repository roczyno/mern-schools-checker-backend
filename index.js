import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to mongoDb");
}

app.listen(5000, () => {
  main();
  console.log("server running...");
});
