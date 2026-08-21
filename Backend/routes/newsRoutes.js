import express from "express";

import {
  getBishrampurNews,
  refreshBishrampurNews,
} from "../controllers/newsController.js";

const router = express.Router();

/* Get latest official news */

router.get("/bishrampur", getBishrampurNews);

/* Force refresh */

router.get("/bishrampur/refresh", refreshBishrampurNews);

export default router;
