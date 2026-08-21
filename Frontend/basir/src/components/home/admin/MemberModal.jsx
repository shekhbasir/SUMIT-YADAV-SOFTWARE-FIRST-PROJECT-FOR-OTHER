import { motion, AnimatePresence } from "framer-motion";

import { X, User, Phone, MapPin, Calendar, Hash, Users } from "lucide-react";

export default function MemberModal({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-[30px] border border-white/10 bg-[#0a101c] shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400" />

            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-lime-400/20 bg-lime-400/10 text-lime-400">
                  <User size={28} />
                </div>

                <div>
                  <h2 className="text-xl font-black">{member.name}</h2>

                  <p className="mt-1 text-sm text-lime-400">
                    {member.movementId}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Info Icon={User} label="Age" value={member.age} />

                <Info Icon={Users} label="Ward" value={`Ward ${member.ward}`} />

                <Info Icon={Phone} label="Mobile" value={member.mobile} />

                <Info Icon={MapPin} label="Address" value={member.address} />

                <Info
                  Icon={Calendar}
                  label="Joined"
                  value={
                    member.createdAt
                      ? new Date(member.createdAt).toLocaleString()
                      : "-"
                  }
                />

                <Info
                  Icon={Hash}
                  label="Status"
                  value={member.status || "Active"}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Info({ Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <Icon size={17} className="text-lime-400" />

      <p className="mt-3 text-xs text-slate-500">{label}</p>

      <p className="mt-1 break-words text-sm font-medium text-slate-200">
        {value || "-"}
      </p>
    </div>
  );
}
