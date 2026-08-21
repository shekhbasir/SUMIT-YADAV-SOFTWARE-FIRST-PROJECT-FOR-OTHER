import express from "express";
import { joinMovement } from "../controllers/movementController.js";

const router = express.Router();

router.post("/join", joinMovement);

export default router;
