import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import uccRouter from "./routes/ucc.route.js";
import cors from "cors";

dotenv.config();
const app = express();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to mongoDb");
}
//middleware
app.use(express.json());
app.use(cors());

app.use("/api/ucc", uccRouter);
app.listen(5000, () => {
  main();
  console.log("server running...");
});
