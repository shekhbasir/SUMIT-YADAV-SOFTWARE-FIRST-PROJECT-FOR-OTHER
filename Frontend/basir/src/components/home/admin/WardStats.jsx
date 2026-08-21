import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

export default function WardStats({ wards = {} }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
          <MapPinned size={21} />
        </div>

        <div>
          <h3 className="font-bold">Ward-wise Members</h3>

          <p className="text-xs text-slate-500">
            Movement participation overview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {[1, 2, 3, 4, 5].map((ward, index) => {
          const count = wards[ward] || wards[String(ward)] || 0;

          return (
            <motion.div
              key={ward}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3 text-center"
            >
              <div className="text-xs text-slate-500">Ward</div>

              <div className="mt-1 text-lg font-black text-lime-400">
                {ward}
              </div>

              <div className="mt-2 text-sm font-bold">{count}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
