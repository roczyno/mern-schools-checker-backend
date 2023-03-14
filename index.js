import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import uccRouter from "./routes/ucc.route.js";
import knustRouter from "./routes/knust.route.js";
import ugRouter from "./routes/ug.route.js";
import uewRouter from "./routes/uew.route.js";
import cors from "cors";

dotenv.config();
const app = express();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to mongoDb");
}
//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://schools-checker.onrender.com"],
  })
);

app.use("/api/ucc", uccRouter);
app.use("/api/knust", knustRouter);
app.use("/api/ug", ugRouter);
app.use("/api/uew", uewRouter);
app.listen(5000, () => {
  main();
  console.log("server running...");
});
