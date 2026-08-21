import { useState } from "react";
import { motion } from "framer-motion";
import {
  LockKeyhole,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

import adminApi from "../api/adminApi";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");

      return;
    }

    try {
      setLoading(true);

      const { data } = await adminApi.post("/auth/admin/login", {
        username,
        password,
      });

      if (data.success) {
        onLogin(data.admin);
      }
    } catch (error) {
      setError(
        error?.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-lime-400/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-emerald-500/15 blur-[150px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="w-full max-w-[460px]"
        >
          {/* Logo */}

          <div className="mb-8 text-center">
            <motion.div
              animate={{
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] border border-lime-400/30 bg-lime-400/10 shadow-[0_0_80px_rgba(163,230,53,.18)]"
            >
              <ShieldCheck size={38} className="text-lime-400" />
            </motion.div>

            <h1 className="mt-5 text-3xl font-black tracking-tight">
              Sumit Yadav
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Movement Administration Portal
            </p>
          </div>

          {/* Login Card */}

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />

            <div className="mb-7">
              <p className="text-xl font-bold">Welcome back 👋</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Secure access for the movement administration dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Username
                </label>

                <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 transition focus-within:border-lime-400/50 focus-within:shadow-[0_0_30px_rgba(163,230,53,.08)]">
                  <User
                    size={19}
                    className="text-slate-500 transition group-focus-within:text-lime-400"
                  />

                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 transition focus-within:border-lime-400/50 focus-within:shadow-[0_0_30px_rgba(163,230,53,.08)]">
                  <LockKeyhole
                    size={19}
                    className="text-slate-500 transition group-focus-within:text-lime-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="h-14 w-full flex-1 bg-transparent text-sm outline-none placeholder:text-slate-600"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-500 transition hover:text-white"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Error */}

              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.div>
              )}

              {/* Button */}

              <button
                disabled={loading}
                className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-lime-400 font-bold text-black transition hover:scale-[1.02] disabled:opacity-60"
              >
                <span className="absolute inset-0 translate-x-[-110%] bg-white/30 transition duration-500 group-hover:translate-x-[110%]" />

                {loading ? (
                  <>
                    <LoaderCircle size={20} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Access Dashboard
                    <ArrowRight
                      size={19}
                      className="transition group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            🔒 Authorized access only
          </p>
        </motion.div>
      </div>
    </div>
  );
}
