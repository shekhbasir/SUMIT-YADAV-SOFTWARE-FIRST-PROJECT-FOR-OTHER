import { forwardRef } from "react";
import { Award, CheckCircle2 } from "lucide-react";

const MovementCertificate = forwardRef(({ member }, ref) => {
  if (!member) return null;

  const memberName = member.name || member.fullName || "Movement Member";

  const memberWard =
    member.ward !== undefined && member.ward !== null ? member.ward : "-";

  const joinedAt =
    member.joinedAt || member.createdAt || new Date().toISOString();

  const joinedDate = new Date(joinedAt).toLocaleDateString("ne-NP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-[#fffdf5] p-5 text-slate-900 shadow-2xl md:p-10"
    >
      {/* Outer Border */}
      <div className="pointer-events-none absolute inset-3 border-2 border-[#8aa92f] md:inset-5" />

      {/* Corner Decorations */}
      <div className="absolute left-0 top-0 h-24 w-24 border-b-8 border-r-8 border-[#a6c748]/30" />

      <div className="absolute bottom-0 right-0 h-24 w-24 border-l-8 border-t-8 border-[#a6c748]/30" />

      <div className="relative z-10 flex min-h-[620px] flex-col items-center justify-between px-3 py-8 text-center md:px-10 md:py-12">
        {/* Header */}

        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8aa92f] text-white shadow-lg">
            <Award size={32} />
          </div>

          <p className="mt-5 text-[10px] font-black tracking-[0.3em] text-[#6d8520] md:text-xs">
            BISHRAMPUR MOVEMENT CAMPAIGN
          </p>

          <h1 className="mt-4 text-3xl font-black md:text-5xl">
            सहभागिता प्रमाणपत्र
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Bishrampur Gaunpalika 2084
          </p>
        </div>

        {/* Main Content */}

        <div className="mt-8 max-w-3xl">
          <p className="text-sm text-slate-500 md:text-base">
            यो प्रमाणित गरिन्छ कि
          </p>

          {/* ACTUAL MEMBER NAME */}

          <h2 className="my-5 break-words text-3xl font-black text-[#536b13] md:text-5xl">
            {memberName}
          </h2>

          <p className="text-sm leading-8 text-slate-600 md:text-lg">
            विश्रामपुर गाउँपालिकाको विकास, सुशासन, सहभागिता र सकारात्मक
            परिवर्तनको यात्रामा सक्रिय रूपमा सहभागी भई Bishrampur Movement
            Campaign मा आफ्नो महत्वपूर्ण सहभागिता जनाउनु भएकोमा यो प्रमाणपत्र
            प्रदान गरिएको छ।
          </p>

          <h3 className="mt-7 text-xl font-black md:text-2xl">SUMIT YADAV</h3>

          <p className="mt-2 text-sm text-slate-500">
            Bishrampur Movement Campaign
          </p>

          {/* Member Information */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="min-w-[190px] rounded-2xl border border-[#8aa92f]/30 bg-[#f4f9df] px-5 py-4">
              <p className="text-[10px] font-bold tracking-wider text-slate-400">
                MOVEMENT ID
              </p>

              <p className="mt-2 break-all text-sm font-black text-[#5e7518]">
                {member.movementId || "Pending"}
              </p>
            </div>

            <div className="min-w-[150px] rounded-2xl border border-[#8aa92f]/30 bg-[#f4f9df] px-5 py-4">
              <p className="text-[10px] font-bold tracking-wider text-slate-400">
                WARD
              </p>

              <p className="mt-2 text-lg font-black text-[#5e7518]">
                Ward No. {memberWard}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-10 flex w-full items-end justify-between gap-5 px-2 md:px-10">
          <div className="text-left">
            <div className="mb-2 h-px w-28 bg-slate-400" />

            <p className="text-xs font-bold">Official Campaign</p>

            <p className="mt-1 text-[10px] text-slate-400">
              Joined: {joinedDate}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <CheckCircle2 size={40} className="text-[#8aa92f]" />

            <p className="mt-1 text-[9px] font-black tracking-wider text-slate-500">
              VERIFIED MEMBER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

MovementCertificate.displayName = "MovementCertificate";

export default MovementCertificate;
