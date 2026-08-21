import express from "express";

import {
  adminLogin,
  adminLogout,
  getCurrentAdmin,
} from "../controllers/authController.js";

import { protectAdmin } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post("/admin/login", adminLogin);

router.post("/admin/logout", protectAdmin, adminLogout);

router.get("/admin/me", protectAdmin, getCurrentAdmin);

export default router;
