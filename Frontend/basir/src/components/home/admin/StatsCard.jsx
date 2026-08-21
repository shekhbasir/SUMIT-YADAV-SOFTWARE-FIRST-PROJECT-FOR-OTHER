import { motion } from "framer-motion";

export default function StatsCard({ title, value, subtitle, Icon, index = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.1,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime-400/10 blur-3xl transition group-hover:bg-lime-400/20" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <motion.h3
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2 + index * 0.1,
            }}
            className="mt-3 text-3xl font-black"
          >
            {value ?? 0}
          </motion.h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-400">
          <Icon size={23} />
        </div>
      </div>

      {subtitle && <p className="mt-4 text-xs text-slate-500">{subtitle}</p>}
    </motion.div>
  );
}
