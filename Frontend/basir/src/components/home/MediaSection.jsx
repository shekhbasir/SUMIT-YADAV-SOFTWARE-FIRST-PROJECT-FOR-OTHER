import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  MapPin,
  MousePointer2,
  Navigation,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import candidateImg from "../../assets/sumit-yadav.png";
import mapImg from "../../assets/nepal-map.jpg";

const locations = [
  {
    id: "home",
    label: "OUR HOME",
    title: "Bishrampur",
    subtitle: "विश्रामपुर • बारा • नेपाल",
    x: 61,
    y: 45,
    icon: MapPin,
  },
  {
    id: "future",
    label: "OUR FUTURE",
    title: "Youth",
    subtitle: "युवा अवसर र नयाँ सम्भावना",
    x: 72,
    y: 34,
    icon: Users,
  },
  {
    id: "development",
    label: "DEVELOPMENT",
    title: "Growth",
    subtitle: "स्थानीय विकास र अवसर",
    x: 78,
    y: 57,
    icon: TrendingUp,
  },
  {
    id: "trust",
    label: "OUR RESPONSIBILITY",
    title: "Trust",
    subtitle: "पारदर्शिता र जवाफदेहिता",
    x: 51,
    y: 64,
    icon: ShieldCheck,
  },
];

const visionCards = [
  {
    title: "युवा शक्ति",
    text: "युवालाई अवसर, सीप र सम्मानसँग जोडिएको भविष्य।",
    icon: Users,
  },
  {
    title: "विकास सबैका लागि",
    text: "पूर्वाधार, सेवा र अवसरलाई समुदायको प्राथमिकतासँग जोड्ने सोच।",
    icon: TrendingUp,
  },
  {
    title: "पारदर्शिता",
    text: "जनताको विश्वास, खुला संवाद र जवाफदेहितालाई प्राथमिकता।",
    icon: ShieldCheck,
  },
  {
    title: "समृद्ध भविष्य",
    text: "स्वच्छ, सुरक्षित र आत्मनिर्भर Bishrampur को दीर्घकालीन दृष्टि।",
    icon: Target,
  },
];

const stats = [
  ["2084", "निर्वाचन वर्ष"],
  ["01", "स्पष्ट दृष्टि"],
  ["24/7", "Digital Access"],
  ["100%", "प्रतिबद्धता"],
];

function AnimatedNumber({ value, active }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    const match = String(value).match(/^(\d+)(.*)$/);

    if (!match) {
      setDisplay(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] || "";
    const duration = 1000;
    const start = performance.now();

    let frame;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(`${Math.round(target * eased)}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, active]);

  return <>{display}</>;
}

function FloatingParticles({ reducedMotion }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        id: index,
        left: `${3 + ((index * 17.7) % 94)}%`,
        top: `${4 + ((index * 23.1) % 91)}%`,
        size: 1 + (index % 3),
        duration: 5 + (index % 7),
        delay: (index * 0.31) % 4,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,255,18,.9)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            reducedMotion
              ? {
                  opacity: 0.25,
                }
              : {
                  y: [0, -18, 0],
                  x: [0, 8, -5, 0],
                  opacity: [0.12, 0.8, 0.18],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GlobalGlobe({ reducedMotion, activeLocation, setActiveLocation }) {
  return (
    <div className="relative mx-auto aspect-square w-[min(76vw,520px)]">
      {/* Main glow */}
      <div className="absolute inset-[5%] rounded-full bg-lime-400/10 blur-[70px]" />

      {/* Outer orbit */}
      <motion.div
        className="absolute inset-[3%] rounded-full border border-lime-300/20"
        animate={
          reducedMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second orbit */}
      <motion.div
        className="absolute inset-[10%] rounded-full border border-emerald-300/20"
        animate={
          reducedMotion
            ? {}
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Tilted orbital ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[78%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-lime-300/20"
        animate={
          reducedMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Globe */}
      <div className="absolute inset-[17%] overflow-hidden rounded-full border border-lime-300/50 bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,.22),transparent_8%),radial-gradient(circle_at_42%_45%,rgba(16,185,129,.28),transparent_42%),radial-gradient(circle_at_60%_72%,rgba(163,255,18,.14),transparent_48%),#03120b] shadow-[0_0_100px_rgba(163,255,18,.2),inset_-35px_-15px_75px_rgba(0,0,0,.85)]">
        {/* Grid */}
        <motion.div
          className="absolute -inset-[30%] opacity-70"
          animate={
            reducedMotion
              ? {}
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 34px,
                rgba(163,255,18,.11) 35px,
                transparent 36px
              ),
              repeating-linear-gradient(
                0deg,
                transparent 0,
                transparent 34px,
                rgba(16,185,129,.09) 35px,
                transparent 36px
              )
            `,
            borderRadius: "50%",
          }}
        />

        {/* Globe highlight */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.18),transparent_17%)]" />

        {/* Globe center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Globe2
              size={46}
              className="mx-auto text-lime-300 drop-shadow-[0_0_18px_rgba(163,255,18,.6)]"
            />

            <p className="mt-2 text-[9px] font-black uppercase tracking-[0.35em] text-lime-200">
              GLOBAL VISION
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              WORLD • NEPAL • BARA
            </p>
          </div>
        </div>

        {/* Location points */}
        {locations.map((location) => {
          const Icon = location.icon;
          const selected = activeLocation === location.id;

          return (
            <button
              key={location.id}
              type="button"
              onClick={() => setActiveLocation(location.id)}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
              aria-label={location.label}
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-lime-300/70 bg-[#03120b]/90 text-lime-200 shadow-[0_0_25px_rgba(163,255,18,.35)] transition hover:scale-125">
                {selected && (
                  <span className="absolute inset-0 animate-ping rounded-full border border-lime-300" />
                )}

                <Icon size={14} />
              </span>
            </button>
          );
        })}

        {/* Scanning line */}
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-lime-300/60 to-transparent"
          animate={
            reducedMotion
              ? {}
              : {
                  y: [-90, 90, -90],
                  opacity: [0, 1, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top beacon */}
      <motion.div
        className="absolute left-1/2 top-[3%] h-3 w-3 -translate-x-1/2 rounded-full bg-lime-100 shadow-[0_0_28px_10px_rgba(163,255,18,.45)]"
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.5, 1],
                opacity: [0.55, 1, 0.55],
              }
        }
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
      />

      {/* Globe caption */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 rounded-full border border-lime-300/20 bg-black/40 px-4 py-2 text-center backdrop-blur-xl">
        <p className="text-[9px] font-black uppercase tracking-[0.28em] text-lime-300">
          Interactive Globe
        </p>

        <p className="mt-1 text-[10px] text-slate-400">Tap a glowing point</p>
      </div>
    </div>
  );
}

export default function MediaSection() {
  const reducedMotion = useReducedMotion();

  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const [activeLocation, setActiveLocation] = useState("home");
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const [showVision, setShowVision] = useState(false);

  const selectedLocation =
    locations.find((location) => location.id === activeLocation) ||
    locations[0];

  const handlePointerMove = (event) => {
    if (reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const resetPointer = () => {
    setPointer({
      x: 0,
      y: 0,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="relative overflow-hidden bg-[#020b07] py-16 sm:py-20 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND LIGHT SYSTEM
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[18%] h-96 w-96 rounded-full bg-lime-400/10 blur-[130px]" />

        <div className="absolute right-[10%] top-[28%] h-96 w-96 rounded-full bg-emerald-400/10 blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-lime-300/5 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020b07_78%)]" />
      </div>

      <FloatingParticles reducedMotion={reducedMotion} />

      <div className="relative mx-auto max-w-[1450px] px-5">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="mb-10 text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-lime-300 backdrop-blur-xl">
            <Sparkles size={13} />
            Vision • People • Bishrampur
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            VISION{" "}
            <span className="text-lime-300 drop-shadow-[0_0_25px_rgba(163,255,18,.35)]">
              IN MOTION
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            मेरो सोच, मेरो प्रतिबद्धता — Bishrampur को भविष्यलाई प्रविधि,
            जनसम्पर्क र स्पष्ट दृष्टिसँग जोडिएको डिजिटल अनुभव।
          </p>
        </motion.div>

        {/* =====================================================
            MAIN EXPERIENCE
        ====================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          {/* ===================================================
              LEFT — BIG SUMIT PORTRAIT
          ==================================================== */}

          <motion.div
            animate={
              reducedMotion
                ? {}
                : {
                    rotateX: pointer.y * -2.5,
                    rotateY: pointer.x * 2.5,
                    x: pointer.x * 3,
                    y: pointer.y * 3,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="relative min-h-[560px] sm:min-h-[680px]"
          >
            {/* Nepal map behind portrait */}

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={
                  reducedMotion
                    ? {}
                    : {
                        scale: [1, 1.035, 1],
                        opacity: [0.35, 0.62, 0.35],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute h-[78%] w-[78%] rounded-full bg-lime-400/10 blur-3xl"
              />

              <img
                src={mapImg}
                alt="Nepal map"
                className="absolute h-[74%] w-[74%] object-contain opacity-20 mix-blend-screen grayscale"
              />
            </div>

            {/* Large rotating orbit */}

            <motion.div
              className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-300/20"
              animate={
                reducedMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-[58%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-emerald-300/15"
              animate={
                reducedMotion
                  ? {}
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Orbit dots */}

            {[0, 90, 180, 270].map((angle) => (
              <motion.span
                key={angle}
                className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,255,18,.9)]"
                style={{
                  transform: `rotate(${angle}deg) translateX(250px)`,
                }}
                animate={
                  reducedMotion
                    ? {}
                    : {
                        rotate: [angle, angle + 360],
                      }
                }
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Portrait */}

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
              <div className="relative w-[84%] max-w-[630px]">
                <div className="absolute inset-x-[12%] bottom-[4%] h-[70%] rounded-full bg-lime-400/20 blur-[90px]" />

                <motion.img
                  src={candidateImg}
                  alt="Sumit Yadav"
                  className="relative z-10 mx-auto max-h-[690px] w-full object-contain object-bottom drop-shadow-[0_35px_50px_rgba(0,0,0,.75)]"
                  animate={
                    reducedMotion
                      ? {}
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-lime-300/30 bg-[#03120b]/85 px-5 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-300">
                    SUMIT YADAV
                  </p>
                </div>
              </div>
            </div>

            {/* Micro labels */}

            <div className="absolute left-2 top-16 hidden rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl sm:block">
              <p className="text-[9px] font-black tracking-[0.25em] text-lime-300">
                OUR HOME
              </p>

              <p className="mt-1 text-xs text-slate-300">Bishrampur</p>
            </div>

            <div className="absolute bottom-24 left-2 hidden rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl sm:block">
              <p className="text-[9px] font-black tracking-[0.25em] text-lime-300">
                OUR FUTURE
              </p>

              <p className="mt-1 text-xs text-slate-300">2084 → Beyond</p>
            </div>

            <div className="absolute right-2 top-20 hidden rounded-2xl border border-white/10 bg-black/30 p-3 text-right backdrop-blur-xl sm:block">
              <p className="text-[9px] font-black tracking-[0.25em] text-lime-300">
                OUR RESPONSIBILITY
              </p>

              <p className="mt-1 text-xs text-slate-300">People First</p>
            </div>

            <div className="absolute bottom-8 right-2 hidden items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-3 py-2 text-[9px] text-lime-200 backdrop-blur-xl sm:flex">
              <MousePointer2 size={12} />
              Move your mouse
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — GLOBAL GLOBE + VISION
          ==================================================== */}

          <div className="space-y-7">
            {/* Global panel */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="rounded-[30px] border border-white/10 bg-white/[0.025] p-5 shadow-2xl backdrop-blur-2xl sm:p-7"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-300">
                    DIGITAL PRESENCE
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    From the World to Bishrampur
                  </h3>
                </div>

                <div className="hidden rounded-full border border-lime-300/20 bg-lime-300/5 p-3 text-lime-300 sm:block">
                  <Radar size={20} />
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                World → Nepal → Bara → Bishrampur को interactive digital
                journey। Glowing points explore गर्न सकिन्छ।
              </p>

              <GlobalGlobe
                reducedMotion={reducedMotion}
                activeLocation={activeLocation}
                setActiveLocation={setActiveLocation}
              />

              {/* Selected location */}

              <div className="mt-2 rounded-2xl border border-lime-300/15 bg-lime-300/5 p-4">
                <div className="flex items-center gap-3">
                  <Navigation size={18} className="text-lime-300" />

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-lime-300">
                      SELECTED POINT
                    </p>

                    <p className="mt-1 font-bold text-white">
                      {selectedLocation.label} · {selectedLocation.title}
                    </p>
                  </div>
                </div>

                <p className="mt-2 pl-7 text-xs text-slate-400">
                  {selectedLocation.subtitle}
                </p>
              </div>
            </motion.div>

            {/* =================================================
                VISION CARDS
            ================================================== */}

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {visionCards.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 18,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.01,
                    }}
                    className="group rounded-2xl border border-white/10 bg-[#07170e]/80 p-5 backdrop-blur-xl transition hover:border-lime-300/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/10 text-lime-300">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h4 className="font-black text-white">{card.title}</h4>

                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* =================================================
                ANIMATED COUNTERS
            ================================================== */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center backdrop-blur-xl"
                >
                  <p className="text-2xl font-black text-lime-300">
                    <AnimatedNumber value={value} active={inView} />
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                COMMITMENT PANEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="relative overflow-hidden rounded-[28px] border border-lime-300/20 bg-gradient-to-br from-lime-300/10 via-white/[0.02] to-transparent p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-300/10 blur-3xl" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-lime-300">
                    <HeartHandshake size={18} />

                    <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                      Our Commitment
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    हाम्रो यात्रा, हाम्रो पहिचान।
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    जनताको आवाज, स्थानीय आवश्यकता र Bishrampur को भविष्यलाई
                    केन्द्रमा राखेर अघि बढ्ने डिजिटल vision।
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowVision((value) => !value)}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-lime-300 px-5 py-3 font-black text-black transition hover:scale-[1.03]"
                >
                  {showVision ? "HIDE VISION" : "EXPLORE VISION"}

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>

              {showVision && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  className="relative mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3"
                >
                  {[
                    ["PEOPLE", "जनताको आवाज"],
                    ["PLACE", "Bishrampur को पहिचान"],
                    ["PROGRESS", "भविष्यको सम्भावना"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-[9px] font-black tracking-[0.25em] text-lime-300">
                        {title}
                      </p>

                      <p className="mt-2 text-sm font-bold text-white">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Footer micro status */}

            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
              <Zap size={12} />
              Interactive digital experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
