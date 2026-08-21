import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "../models/Admin.js";

const createToken = (adminId) => {
  return jwt.sign(
    {
      id: adminId,
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    },
  );
};

const cookieOptions = {
  httpOnly: true,

  secure: process.env.NODE_ENV === "production",

  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",

  maxAge: 24 * 60 * 60 * 1000,
};

/* =====================================
   ADMIN LOGIN
   POST /api/auth/admin/login
===================================== */

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    const admin = await Admin.findOne({
      username: String(username).trim().toLowerCase(),
    }).select("+password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const token = createToken(admin._id);

    res.cookie("adminToken", token, cookieOptions);

    return res.status(200).json({
      success: true,

      message: "Admin login successful.",

      admin: {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed.",
    });
  }
};

/* =====================================
   ADMIN LOGOUT
   POST /api/auth/admin/logout
===================================== */

export const adminLogout = (req, res) => {
  res.clearCookie("adminToken", {
    httpOnly: true,

    secure: process.env.NODE_ENV === "production",

    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
};

/* =====================================
   GET CURRENT ADMIN
   GET /api/auth/admin/me
===================================== */

export const getCurrentAdmin = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,

      admin: {
        id: req.admin._id,
        username: req.admin.username,
        role: req.admin.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get admin.",
    });
  }
};
