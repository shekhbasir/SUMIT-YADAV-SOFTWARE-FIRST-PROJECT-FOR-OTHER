import { forwardRef } from "react";
import {
  Award,
  CheckCircle2,
  Crown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import candidateImg from "../../assets/sumit-yadav.png";

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
      className="
        relative mx-auto
        aspect-[1.414/1]
        w-full max-w-[1200px]
        overflow-hidden
        bg-[#f8f5e9]
        text-slate-900
        shadow-[0_30px_100px_rgba(0,0,0,0.35)]
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(173,205,78,0.22),transparent_32%),linear-gradient(135deg,#fffdf5_0%,#f5f3df_45%,#eef4d8_100%)]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(50,70,20,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(50,70,20,.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* =====================================================
          SUMIT IMAGE WATERMARK
      ====================================================== */}

      <div className="pointer-events-none absolute right-[-80px] top-1/2 hidden -translate-y-1/2 opacity-[0.10] md:block">
        <img
          src={candidateImg}
          alt=""
          className="
            h-[520px]
            w-[420px]
            object-contain
            object-bottom
            grayscale
          "
        />
      </div>

      {/* Image glow */}
      <div className="pointer-events-none absolute right-20 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-lime-400/10 blur-[90px] md:block" />

      {/* =====================================================
          OUTER BORDERS
      ====================================================== */}

      <div className="absolute inset-4 border-[3px] border-[#708b20] md:inset-7" />

      <div className="absolute inset-7 border border-[#b4c969] md:inset-11" />

      {/* Corner ornaments */}
      <div className="absolute left-7 top-7 h-20 w-20 border-l-[5px] border-t-[5px] border-[#8ca52e] md:left-10 md:top-10" />

      <div className="absolute right-7 top-7 h-20 w-20 border-r-[5px] border-t-[5px] border-[#8ca52e] md:right-10 md:top-10" />

      <div className="absolute bottom-7 left-7 h-20 w-20 border-b-[5px] border-l-[5px] border-[#8ca52e] md:bottom-10 md:left-10" />

      <div className="absolute bottom-7 right-7 h-20 w-20 border-b-[5px] border-r-[5px] border-[#8ca52e] md:bottom-10 md:right-10" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-12 py-10 text-center md:px-20 md:py-14">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex flex-col items-center">
          {/* Logo */}
          <div
            className="
              flex h-16 w-16 items-center justify-center
              rounded-full
              border-[3px] border-[#879f2d]
              bg-white/80
              shadow-[0_8px_30px_rgba(84,105,20,0.18)]
            "
          >
            <Award size={32} strokeWidth={1.8} className="text-[#637c19]" />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Sparkles size={13} className="text-[#7c9424]" />

            <p className="text-[10px] font-black tracking-[0.38em] text-[#647c1b] md:text-xs">
              BISHRAMPUR MOVEMENT
            </p>

            <Sparkles size={13} className="text-[#7c9424]" />
          </div>

          <h1
            className="
              mt-3
              text-3xl font-black tracking-tight
              text-[#29350d]
              md:text-5xl
            "
          >
            सहभागिता प्रमाणपत्र
          </h1>

          <p className="mt-2 text-xs font-medium tracking-wide text-slate-500 md:text-sm">
            Bishrampur Gaunpalika • 2084
          </p>
        </div>

        {/* =================================================
            CERTIFICATE BODY
        ================================================== */}

        <div className="relative z-20 mt-4 max-w-3xl">
          <p className="text-sm font-medium text-slate-500 md:text-base">
            यो प्रमाणित गरिन्छ कि
          </p>

          {/* Member Name */}
          <h2
            className="
              mt-3
              break-words
              text-3xl font-black
              text-[#526d12]
              drop-shadow-sm
              md:text-5xl
            "
          >
            {memberName}
          </h2>

          {/* Name underline */}
          <div className="mx-auto mt-3 h-[2px] w-36 bg-gradient-to-r from-transparent via-[#91aa31] to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            विश्रामपुरमा सकारात्मक परिवर्तन, पारदर्शिता, सुशासन र
            भ्रष्टाचारविरुद्धको सचेत नागरिक अभियानमा सक्रिय सहभागिता जनाउँदै,
            स्थानीय विकास र जनताको हितका लागि अघि बढ्ने यस यात्रामा आफ्नो
            प्रतिबद्धता व्यक्त गर्नुभएकोमा यो प्रमाणपत्र सम्मानपूर्वक प्रदान
            गरिएको छ। यो अभियानले युवाको सहभागिता, जवाफदेहिता र समृद्ध
            विश्रामपुर निर्माणको साझा उद्देश्यलाई प्राथमिकता दिन्छ।
          </p>

          {/* =================================================
              MEMBER INFO
          ================================================== */}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="min-w-[190px] rounded-xl border border-[#8ca52e]/25 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
              <p className="text-[9px] font-black tracking-[0.18em] text-slate-400">
                MOVEMENT ID
              </p>

              <p className="mt-1.5 break-all text-xs font-black text-[#5b7219]">
                {member.movementId || "PENDING"}
              </p>
            </div>

            <div className="min-w-[145px] rounded-xl border border-[#8ca52e]/25 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
              <p className="text-[9px] font-black tracking-[0.18em] text-slate-400">
                WARD
              </p>

              <p className="mt-1.5 text-sm font-black text-[#5b7219]">
                Ward No. {memberWard}
              </p>
            </div>

            <div className="min-w-[145px] rounded-xl border border-[#8ca52e]/25 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
              <p className="text-[9px] font-black tracking-[0.18em] text-slate-400">
                STATUS
              </p>

              <div className="mt-1.5 flex items-center justify-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-600" />

                <p className="text-sm font-black text-[#5b7219]">VERIFIED</p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div className="mt-6 flex w-full items-end justify-between gap-6 px-2 md:px-10">
          {/* Date */}
          <div className="text-left">
            <div className="mb-2 h-px w-28 bg-slate-400" />

            <p className="text-[10px] font-black uppercase tracking-wide text-slate-700">
              Date of Participation
            </p>

            <p className="mt-1 text-[10px] text-slate-500">{joinedDate}</p>
          </div>

          {/* Center seal */}
          <div className="hidden flex-col items-center sm:flex">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-full
                border-2 border-[#829a27]
                bg-white/70
                shadow-md
              "
            >
              <ShieldCheck size={28} className="text-[#71891e]" />
            </div>

            <p className="mt-1 text-[8px] font-black tracking-[0.18em] text-slate-500">
              VERIFIED
            </p>
          </div>

          {/* Representative */}
          <div className="text-right">
            <div className="mb-2 ml-auto h-px w-28 bg-slate-400" />

            <p className="text-xs font-black text-[#35450d]">SUMIT YADAV</p>

            <p className="mt-1 text-[9px] text-slate-500">
              Movement Representative
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DECORATION
      ====================================================== */}

      <div className="absolute bottom-0 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8da52d] to-transparent" />

      {/* =====================================================
          PRINT / EXPORT OPTIMIZATION
      ====================================================== */}

      <style>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          body {
            background: white !important;
          }

          .certificate {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
});

MovementCertificate.displayName = "MovementCertificate";

export default MovementCertificate;
