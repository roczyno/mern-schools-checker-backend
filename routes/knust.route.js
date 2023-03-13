import express from "express";
import { create, getAll } from "../controllers/knust.controller.js";

const router = express.Router();

router.get("/find", getAll);
router.post("/create", create);

export default router;
