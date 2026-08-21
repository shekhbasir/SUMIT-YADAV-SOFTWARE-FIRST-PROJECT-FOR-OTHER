import { X, User, Phone, MapPin, Calendar, Hash } from "lucide-react";

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  const details = [
    {
      label: "Full Name",
      value: member.name,
      Icon: User,
    },
    {
      label: "Mobile Number",
      value: member.mobile,
      Icon: Phone,
    },
    {
      label: "Ward Number",
      value: member.ward,
      Icon: MapPin,
    },
    {
      label: "Member ID",
      value: member.memberId || member._id,
      Icon: Hash,
    },
    {
      label: "Joined Date",
      value: member.createdAt
        ? new Date(member.createdAt).toLocaleString()
        : "-",
      Icon: Calendar,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[30px] border border-white/10 bg-[#0a1020] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <X size={20} />
        </button>

        <div className="pr-12">
          <p className="text-sm font-semibold text-lime-400">MEMBER DETAILS</p>

          <h2 className="mt-2 text-2xl font-black">
            {member.name || "Member"}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Complete registration information
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {details.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-center gap-2 text-slate-500">
                <Icon size={16} />

                <span className="text-xs">{label}</span>
              </div>

              <p className="mt-3 break-words font-semibold text-white">
                {value || "-"}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 h-12 w-full rounded-xl border border-white/10 bg-white/5 font-semibold transition hover:bg-white/10"
        >
          Close
        </button>
      </div>
    </div>
  );
}
