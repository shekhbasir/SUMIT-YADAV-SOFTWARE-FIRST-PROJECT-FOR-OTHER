import express from "express";

import {
  getDashboardStats,
  getAllMembers,
  getSingleMember,
} from "../controllers/adminController.js";

import { protectAdmin } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.use(protectAdmin);

router.get("/dashboard", getDashboardStats);

router.get("/members", getAllMembers);

router.get("/members/:id", getSingleMember);

export default router;
