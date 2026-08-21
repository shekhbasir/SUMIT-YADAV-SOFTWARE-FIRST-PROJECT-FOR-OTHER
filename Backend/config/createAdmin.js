import bcrypt from "bcryptjs";

import Admin from "../models/Admin.js";

const createInitialAdmin = async () => {
  try {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      console.warn("⚠️ ADMIN_USERNAME or ADMIN_PASSWORD is missing");

      return;
    }

    const existingAdmin = await Admin.findOne({
      username: username.toLowerCase(),
    });

    if (existingAdmin) {
      console.log("👑 Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      username: username.toLowerCase(),
      password: hashedPassword,
      role: "admin",
    });

    console.log("👑 Initial admin created successfully");
  } catch (error) {
    console.error("ADMIN CREATION ERROR:", error.message);
  }
};

export default createInitialAdmin;
