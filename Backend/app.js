import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import createInitialAdmin from "./config/createAdmin.js";

import newsRoutes from "./routes/newsRoutes.js";
import movementRoutes from "./routes/movementRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =====================================
   DATABASE
===================================== */

await connectDB();

await createInitialAdmin();

/* =====================================
   SECURITY
===================================== */

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/* =====================================
   CORS
===================================== */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.FRONTEND_URL, // Live hone par Vercel URL yahan se automatic load hoga
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Bina origin wali requests (jaise Postman) aur allowed domains ko allow karega
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true, // Cookies aur headers pass karne ke liye
  }),
);

/* =====================================
   LOGIN RATE LIMIT

   Brute-force protection
===================================== */

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 10,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
});

/* =====================================
   GENERAL MIDDLEWARE
===================================== */

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

/* =====================================
   HOME
===================================== */

app.get("/", (req, res) => {
  res.json({
    success: true,

    message: "Sumit Yadav Movement Backend Running 🚀",
  });
});

/* =====================================
   ROUTES
===================================== */

app.use("/api/news", newsRoutes);

app.use("/api/movement", movementRoutes);

/* Admin Login */

app.use("/api/auth/admin/login", loginLimiter);

app.use("/api/auth", authRoutes);

/* Protected Admin APIs */

app.use("/api/admin", adminRoutes);

/* =====================================
   404
===================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,

    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

/* =====================================
   ERROR HANDLER
===================================== */

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* =====================================
   START SERVER
===================================== */

app.listen(PORT, () => {
  console.log("");
  console.log("========================================");

  console.log("🚀 Backend Started Successfully");

  console.log(`🌐 Server: http://localhost:${PORT}`);

  console.log(`🤝 Movement: http://localhost:${PORT}/api/movement/join`);

  console.log(`👑 Admin Login: http://localhost:${PORT}/api/auth/admin/login`);

  console.log("========================================");

  console.log("");
});
