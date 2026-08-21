import { motion } from "framer-motion";

export default function StatsCard({ index = 0, title, value, subtitle, Icon }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.08,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-3 text-3xl font-black">{value ?? 0}</h3>

          <p className="mt-2 text-xs text-slate-500">{subtitle}</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
          {Icon && <Icon size={22} />}
        </div>
      </div>
    </motion.div>
  );
}
