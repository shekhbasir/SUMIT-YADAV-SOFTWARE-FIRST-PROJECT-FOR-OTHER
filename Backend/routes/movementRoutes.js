import express from "express";

import { joinMovement } from "../controllers/movementController.js";

const router = express.Router();

/*
  POST
  /api/movement/join
*/

router.post("/join", joinMovement);

export default router;
