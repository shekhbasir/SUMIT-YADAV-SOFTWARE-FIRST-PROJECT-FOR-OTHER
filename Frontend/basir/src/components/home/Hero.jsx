import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Compass,
  Crosshair,
  HeartHandshake,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

// ============================================================
// REAL PROJECT ASSETS
// ============================================================

import mapImg from "../../assets/nepal-map.jpg";
import flagImg from "../../assets/flagImg.jpg";
import candidateImg from "../../assets/sumit-yadav.png";

// ============================================================
// CONSTANTS
// ============================================================

const COLORS = {
  background: "#03120B",
  background2: "#061A10",
  lime: "#A3FF12",
  emerald: "#10B981",
  red: "#EF4444",
  white: "#FFFFFF",
};

const GEO_TRAIL = ["Nepal", "Madhesh", "Bara", "Bishrampur"];

const VALUES = [
  {
    label: "युवा",
    icon: Sparkles,
  },
  {
    label: "इमानदार",
    icon: ShieldCheck,
  },
  {
    label: "विकासवादी",
    icon: TrendingUp,
  },
  {
    label: "जनताको साथी",
    icon: HeartHandshake,
  },
];

const STATS = [
  {
    value: "01",
    label: "युवा नेतृत्व",
    icon: Users,
  },
  {
    value: "2084",
    label: "निर्वाचन",
    icon: Target,
  },
  {
    value: "01",
    label: "स्पष्ट सोच",
    icon: Compass,
  },
];

// ============================================================
// MOTION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

// ============================================================
// PARTICLE FIELD
// ============================================================

function ParticleField({ reducedMotion, mobile = false }) {
  const particles = useMemo(() => {
    const count = mobile ? 14 : 34;

    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: `${4 + ((index * 17.31) % 92)}%`,
      top: `${6 + ((index * 23.17) % 86)}%`,
      size: 1 + (index % 3),
      duration: 5 + ((index * 1.71) % 7),
      delay: (index * 0.37) % 4,
      x: ((index % 5) - 2) * 10,
      y: ((index % 7) - 3) * 12,
      opacity: 0.08 + (index % 5) * 0.035,
    }));
  }, [mobile]);

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-lime-200"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            willChange: "transform, opacity",
          }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
            opacity: [
              particle.opacity * 0.45,
              particle.opacity,
              particle.opacity * 0.45,
            ],
          }}
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

// ============================================================
// AMBIENT ORBS
// ============================================================

function AmbientOrbs({ reducedMotion }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, 30, -10, 0],
                y: [0, -20, 20, 0],
                scale: [1, 1.08, 0.96, 1],
                opacity: [0.35, 0.5, 0.38, 0.35],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-emerald-500/[0.08] blur-[120px]"
      />

      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, -35, 15, 0],
                y: [0, 20, -25, 0],
                scale: [1, 0.95, 1.07, 1],
              }
        }
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[3%] top-[18%] h-[500px] w-[500px] rounded-full bg-lime-400/[0.055] blur-[150px]"
      />

      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, 20, -20, 0],
                y: [0, -25, 10, 0],
                opacity: [0.15, 0.28, 0.18, 0.15],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] left-[30%] h-[450px] w-[450px] rounded-full bg-lime-300/[0.04] blur-[140px]"
      />
    </div>
  );
}

// ============================================================
// GRID BACKGROUND
// ============================================================

function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.035]"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,.6) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,.6) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(circle at center, black 15%, transparent 82%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 15%, transparent 82%)",
      }}
    />
  );
}

// ============================================================
// CINEMATIC VIGNETTE
// ============================================================

function CinematicVignette() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(
            circle at 50% 42%,
            transparent 0%,
            rgba(3,18,11,.12) 38%,
            rgba(3,18,11,.65) 100%
          )
        `,
      }}
    />
  );
}

// ============================================================
// NOISE
// ============================================================

function NoiseLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.018] mix-blend-screen"
      aria-hidden="true"
      style={{
        backgroundImage: `
          radial-gradient(
            rgba(255,255,255,.8) 0.5px,
            transparent 0.6px
          )
        `,
        backgroundSize: "5px 5px",
      }}
    />
  );
}

// ============================================================
// GEO BREADCRUMB
// ============================================================

function GeoBreadcrumb({ transition }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={transition}
      className="mb-5 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]"
      aria-label="Location: Nepal, Madhesh, Bara, Bishrampur"
    >
      <Compass size={12} className="mr-1 text-lime-400" aria-hidden="true" />

      {GEO_TRAIL.map((place, index) => (
        <span key={place} className="flex items-center gap-1.5">
          <span
            className={
              index === GEO_TRAIL.length - 1
                ? "text-lime-300"
                : "text-slate-500"
            }
          >
            {place}
          </span>

          {index < GEO_TRAIL.length - 1 && (
            <span className="text-slate-700">/</span>
          )}
        </span>
      ))}
    </motion.div>
  );
}

// ============================================================
// LIVE STATUS PILL
// ============================================================

function StatusPill({ transition }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={transition}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.045] px-4 py-2 backdrop-blur-xl"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-lime-400 opacity-50" />
        <span className="relative h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,255,18,.8)]" />
      </span>

      <span className="text-[10px] font-bold tracking-[0.14em] text-lime-300 sm:text-xs">
        BISHRAMPUR • BARA • NEPAL
      </span>
    </motion.div>
  );
}

// ============================================================
// VALUE BADGES
// ============================================================

function ValueBadges({ transition }) {
  return (
    <motion.ul
      variants={fadeUp}
      transition={transition}
      lang="ne"
      className="mt-6 flex flex-wrap gap-2"
    >
      {VALUES.map(({ label, icon: Icon }) => (
        <li key={label}>
          <motion.span
            whileHover={{
              y: -3,
              scale: 1.025,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="group inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-slate-300 shadow-[0_10px_30px_rgba(0,0,0,.12)] backdrop-blur-xl transition-colors duration-300 hover:border-lime-400/30 hover:bg-lime-400/[0.055] hover:text-lime-100"
          >
            <Icon
              size={13}
              className="text-lime-400 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />

            {label}
          </motion.span>
        </li>
      ))}
    </motion.ul>
  );
}

// ============================================================
// ANIMATED UNDERLINE
// ============================================================

function NameUnderline() {
  return (
    <motion.span
      initial={{
        scaleX: 0,
        transformOrigin: "left",
      }}
      animate={{
        scaleX: 1,
      }}
      transition={{
        duration: 1,
        delay: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute -bottom-2 left-0 h-[3px] w-[46%] rounded-full bg-gradient-to-r from-lime-400 via-lime-300 to-transparent"
    />
  );
}

// ============================================================
// MAGNETIC BUTTON
// ============================================================

function MagneticButton({
  children,
  icon,
  variant = "primary",
  reducedMotion,
  onClick,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 18,
    mass: 0.35,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 18,
    mass: 0.35,
  });

  const handleMove = useCallback(
    (event) => {
      if (reducedMotion) return;

      const rect = event.currentTarget.getBoundingClientRect();

      x.set((event.clientX - rect.left - rect.width / 2) * 0.12);

      y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
    },
    [reducedMotion, x, y],
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const styles = {
    primary:
      "bg-lime-400 text-black shadow-[0_12px_45px_rgba(163,255,18,.15)] hover:shadow-[0_16px_55px_rgba(163,255,18,.28)]",
    secondary:
      "border border-white/15 bg-white/[0.025] text-white hover:border-lime-400/35 hover:bg-lime-400/[0.045]",
    outline:
      "border border-lime-400/30 bg-lime-400/[0.025] text-lime-300 hover:border-lime-400/60 hover:bg-lime-400/[0.08]",
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={
        reducedMotion
          ? {}
          : {
              scale: 1.02,
            }
      }
      whileTap={{
        scale: 0.97,
      }}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold outline-none backdrop-blur-xl transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03120B] sm:px-6 ${styles[variant]}`}
    >
      {children}

      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.button>
  );
}

// ============================================================
// GEO ROUTE
// ============================================================

function GeoRoute({ reducedMotion }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 1.4,
      }}
      className="pointer-events-none absolute left-[7%] top-[18%] hidden h-[310px] w-[230px] xl:block"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-lime-400/20 to-transparent" />

      {[0, 1, 2, 3].map((index) => {
        const labels = ["Nepal", "Madhesh", "Bara", "Bishrampur"];

        return (
          <div
            key={labels[index]}
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: `${index * 31}%`,
            }}
          >
            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      scale: [1, 1.35, 1],
                      opacity: [0.45, 0.95, 0.45],
                    }
              }
              transition={{
                duration: 2.2,
                delay: index * 0.35,
                repeat: Infinity,
              }}
              className={`h-2.5 w-2.5 rounded-full ${
                index === 3
                  ? "bg-red-400 shadow-[0_0_20px_rgba(239,68,68,.8)]"
                  : "bg-lime-400 shadow-[0_0_18px_rgba(163,255,18,.65)]"
              }`}
            />

            <span
              className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.18em] ${
                index === 3 ? "text-red-300" : "text-slate-500"
              }`}
            >
              {labels[index]}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

// ============================================================
// NEPAL MAP BACKGROUND
// ============================================================

function MapBackground({ mapParallax, reducedMotion, mapOk, onError }) {
  if (!mapOk) return null;

  return (
    <motion.div
      style={{
        y: mapParallax,
      }}
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: reducedMotion ? 0 : 1.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Main atmosphere behind map */}
      <div className="absolute left-[35%] top-[8%] h-[700px] w-[700px] rounded-full bg-lime-400/[0.035] blur-[140px]" />

      {/* Very large map */}
      <img
        src={mapImg}
        alt=""
        onError={onError}
        className="absolute left-1/2 top-1/2 h-[115%] w-[105%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.035] grayscale brightness-[1.7] contrast-125 sm:h-[120%] sm:w-[110%] lg:h-[125%] lg:w-[115%]"
      />

      {/* Sharp central map */}
      <motion.img
        src={mapImg}
        alt=""
        animate={
          reducedMotion
            ? {}
            : {
                scale: [1, 1.015, 1],
                opacity: [0.085, 0.12, 0.085],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[88%] w-[82%] -translate-x-1/2 -translate-y-1/2 object-contain brightness-[1.55] contrast-125"
      />

      {/* Map glow */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 45%, rgba(163,255,18,.15), transparent 43%)",
        }}
      />

      {/* Geographic marker */}
      <div className="absolute left-[62%] top-[58%] hidden sm:block">
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  scale: [1, 1.8, 1],
                  opacity: [0.8, 0.05, 0.8],
                }
          }
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute -inset-3 rounded-full bg-red-500/30"
        />

        <div className="relative h-3 w-3 rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,.9)]" />

        <div className="absolute left-5 top-[-8px] whitespace-nowrap">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-300">
            Bara
          </span>
        </div>
      </div>

      {/* Bishrampur marker */}
      <div className="absolute left-[60.5%] top-[60%] hidden sm:block">
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  rotate: [0, 360],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-3 rounded-full border border-red-400/25"
        />

        <MapPin
          size={16}
          className="relative text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,.8)]"
        />

        <span className="absolute left-5 top-0 whitespace-nowrap text-[9px] font-medium text-slate-400">
          Bishrampur
        </span>
      </div>
    </motion.div>
  );
}

// ============================================================
// FLAG DECORATION
// ============================================================

function NepalFlag({ flagParallax, reducedMotion }) {
  return (
    <motion.div
      style={{
        y: flagParallax,
      }}
      initial={{
        opacity: 0,
        x: -35,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="pointer-events-none absolute left-4 top-28 z-20 hidden md:block lg:left-7"
      aria-hidden="true"
    >
      {/* Pole */}
      <div className="absolute -left-2 -top-5 h-40 w-[3px] rounded-full bg-gradient-to-b from-slate-300/50 via-slate-500/20 to-transparent" />

      {/* Pole top */}
      <div className="absolute -left-[5px] -top-6 h-2 w-2 rounded-full border border-slate-300/30 bg-slate-400/30" />

      {/* Flag glow */}
      <div className="absolute left-1 top-1 h-28 w-24 bg-red-500/[0.08] blur-2xl" />

      {/* Flag */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                rotate: [-1.5, 1.2, -0.7, 1.4, -1.5],
                skewY: [-1, 1.5, -0.8, 1.2, -1],
                scaleX: [1, 1.025, 0.985, 1.015, 1],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="origin-left"
      >
        <img
          src={flagImg}
          alt=""
          className="h-28 w-auto object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,.5)]"
        />
      </motion.div>

      <span className="absolute left-7 top-32 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-600">
        Nepal
      </span>
    </motion.div>
  );
}

// ============================================================
// ORBITAL RINGS
// ============================================================

function OrbitalRings({ reducedMotion }) {
  return (
    <>
      {/* Ring 1 */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[470px] w-[470px] rounded-full border border-lime-400/[0.09] sm:h-[590px] sm:w-[590px]"
        aria-hidden="true"
      >
        <span className="absolute left-[18%] top-[-3px] h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(163,255,18,.8)]" />
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[410px] w-[410px] rounded-full border border-dashed border-white/[0.075] sm:h-[520px] sm:w-[520px]"
        aria-hidden="true"
      >
        <span className="absolute right-[10%] top-[16%] h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(239,68,68,.7)]" />
      </motion.div>

      {/* Ring 3 */}
      <motion.div
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
        className="absolute h-[360px] w-[360px] rounded-full border border-lime-300/[0.06] sm:h-[450px] sm:w-[450px]"
        aria-hidden="true"
      >
        <span className="absolute bottom-[10%] left-[3%] h-1 w-1 rounded-full bg-white/60" />
      </motion.div>
    </>
  );
}

// ============================================================
// FRAME BEAM
// ============================================================

function FrameBeam({ reducedMotion }) {
  return (
    <motion.div
      animate={
        reducedMotion
          ? {}
          : {
              rotate: 360,
            }
      }
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
      }}
      className="pointer-events-none absolute -inset-[2px] rounded-[45%_45%_8%_8%] opacity-80"
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0deg, transparent 275deg, rgba(163,255,18,.95) 315deg, transparent 350deg)",
        mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        padding: "2px",
      }}
      aria-hidden="true"
    />
  );
}

// ============================================================
// CORNER ACCENTS
// ============================================================

function FrameCorners() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <span className="absolute left-5 top-5 h-8 w-8 border-l border-t border-lime-300/45" />
      <span className="absolute right-5 top-5 h-8 w-8 border-r border-t border-lime-300/25" />
      <span className="absolute bottom-5 left-5 h-8 w-8 border-b border-lime-300/20" />
      <span className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-lime-300/45" />
    </div>
  );
}

// ============================================================
// SCANNER
// ============================================================

function PortraitScanner({ reducedMotion }) {
  if (reducedMotion) return null;

  return (
    <motion.div
      animate={{
        y: ["-10%", "110%"],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 1.5,
      }}
      className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-20 bg-gradient-to-b from-transparent via-lime-300/[0.07] to-transparent"
      aria-hidden="true"
    />
  );
}

// ============================================================
// PORTRAIT FRAME
// ============================================================

function PortraitFrame({
  reducedMotion,
  frameRef,
  rotateX,
  rotateY,
  frameShadow,
  portraitLoaded,
  setPortraitLoaded,
  onFrameMove,
  onFrameLeave,
  onPlay,
}) {
  return (
    <motion.figure
      ref={frameRef}
      onMouseMove={onFrameMove}
      onMouseLeave={onFrameLeave}
      style={{
        rotateX,
        rotateY,
        boxShadow: frameShadow,
        transformStyle: "preserve-3d",
      }}
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: reducedMotion ? 0 : 1.15,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-10 h-[510px] w-[340px] overflow-hidden rounded-[45%_45%_8%_8%] border border-lime-400/20 bg-[#071B10] sm:h-[600px] sm:w-[405px]"
    >
      {/* Animated border */}
      <FrameBeam reducedMotion={reducedMotion} />

      {/* Inner frame */}
      <div
        className="pointer-events-none absolute inset-[2px] z-30 rounded-[45%_45%_8%_8%] border border-white/[0.06]"
        aria-hidden="true"
      />

      {/* Loading state */}
      <AnimatePresence>
        {!portraitLoaded && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="absolute inset-0 z-40 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent"
            aria-hidden="true"
          >
            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      x: ["-120%", "120%"],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Candidate */}
      <img
        src={candidateImg}
        alt="Sumit Yadav, candidate for Chairperson of Bishrampur Gaunpalika"
        loading="eager"
        decoding="async"
        onLoad={() => setPortraitLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
          portraitLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Soft cinematic grade */}
      <div
        className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light"
        style={{
          background: `
            linear-gradient(
              145deg,
              rgba(163,255,18,.20),
              transparent 28%,
              transparent 68%,
              rgba(3,18,11,.62)
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Bottom cinematic gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#03120B] via-transparent to-transparent opacity-95"
        aria-hidden="true"
      />

      {/* Side gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#03120B]/35 via-transparent to-lime-400/[0.035]"
        aria-hidden="true"
      />

      {/* Scanner */}
      <PortraitScanner reducedMotion={reducedMotion} />

      {/* Corner accents */}
      <FrameCorners />

      {/* Candidate label */}
      <figcaption className="absolute bottom-7 left-7 right-7 z-40">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-lime-300">
              Candidate
            </p>

            <p className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
              SUMIT YADAV
            </p>
          </div>

          <div className="rounded-full border border-lime-400/30 bg-black/35 px-3 py-1 text-[10px] font-bold text-lime-300 backdrop-blur-xl">
            2084
          </div>
        </div>
      </figcaption>

      {/* Video button */}
      <motion.button
        type="button"
        onClick={onPlay}
        whileHover={
          reducedMotion
            ? {}
            : {
                scale: 1.08,
              }
        }
        whileTap={{
          scale: 0.94,
        }}
        aria-label="Watch Sumit Yadav introduction video"
        className="absolute right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-lime-400/45 bg-black/40 text-lime-300 shadow-[0_10px_35px_rgba(0,0,0,.35)] backdrop-blur-xl outline-none transition-colors hover:bg-lime-400 hover:text-black focus-visible:ring-2 focus-visible:ring-lime-300"
      >
        <Play size={18} fill="currentColor" />
      </motion.button>
    </motion.figure>
  );
}

// ============================================================
// FLOATING LOCATION CARD
// ============================================================

function FloatingLocationCard({ reducedMotion }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: reducedMotion ? 0 : [0, -6, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 1,
        },
        x: {
          duration: 0.8,
          delay: 1,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute bottom-12 right-0 z-50 hidden rounded-2xl border border-white/10 bg-[#071B10]/80 px-4 py-3 shadow-2xl backdrop-blur-2xl sm:block"
    >
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
          <motion.div
            animate={
              reducedMotion
                ? {}
                : {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-xl bg-red-500/20"
          />

          <MapPin size={17} className="relative text-red-400" />
        </div>

        <div>
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Constituency
          </p>

          <p className="mt-0.5 text-sm font-bold text-white">
            Bishrampur, Bara
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// FLOATING STAT CARDS
// ============================================================

function FloatingStats({ reducedMotion }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        className="absolute left-[-30px] top-[30%] rounded-2xl border border-white/10 bg-[#071B10]/65 px-3 py-2.5 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400/10">
            <Crosshair size={14} className="text-lime-300" />
          </div>

          <div>
            <p className="text-[8px] uppercase tracking-[0.18em] text-slate-500">
              Focus
            </p>

            <p className="text-xs font-bold text-white">जनता</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.4,
        }}
        className="absolute bottom-[24%] left-[-55px] rounded-2xl border border-lime-400/15 bg-[#071B10]/60 px-3 py-2.5 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2.5">
          <Sparkles size={15} className="text-lime-300" />

          <div>
            <p className="text-[8px] uppercase tracking-[0.18em] text-slate-500">
              Vision
            </p>

            <p className="text-xs font-bold text-white">विकास</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================
// STATS ROW
// ============================================================

function StatsRow({ transition }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={transition}
      className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] backdrop-blur-xl"
    >
      {STATS.map(({ value, label, icon: Icon }, index) => (
        <div
          key={label}
          className={`relative px-3 py-3.5 sm:px-5 ${
            index !== 0 ? "border-l border-white/[0.07]" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <Icon size={12} className="text-lime-400" />

            <span className="text-sm font-black text-white">{value}</span>
          </div>

          <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.13em] text-slate-500 sm:text-[9px]">
            {label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

// ============================================================
// SCROLL INDICATOR
// ============================================================

function ScrollIndicator({ reducedMotion }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.7,
      }}
      className="pointer-events-none absolute bottom-5 left-1/2 z-50 hidden -translate-x-1/2 flex-col items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-slate-600 sm:flex"
      aria-hidden="true"
    >
      <span>Scroll to explore</span>

      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                y: [0, 6, 0],
              }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={15} />
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// VIDEO MODAL
// ============================================================

function IntroModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
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
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Candidate introduction"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#071B10] shadow-[0_30px_100px_rgba(0,0,0,.6)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close introduction"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-lime-300"
            >
              <X size={17} />
            </button>

            <div className="relative aspect-video">
              <img
                src={candidateImg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-top opacity-35"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03120B] via-[#03120B]/60 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10">
                  <Play
                    size={22}
                    className="ml-1 text-lime-300"
                    fill="currentColor"
                  />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-lime-300">
                  SUMIT YADAV
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                  मेरो यात्रा
                </h2>

                <p
                  lang="ne"
                  className="mt-3 max-w-lg text-sm leading-7 text-slate-400"
                >
                  हाम्रो गाउँ, हाम्रो भविष्य र जनताको लागि स्पष्ट सोच।
                </p>

                <span className="mt-5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Introduction video ready
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// HERO
// ============================================================

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const sectionRef = useRef(null);

  const frameRef = useRef(null);

  const [mapOk, setMapOk] = useState(true);

  const [portraitLoaded, setPortraitLoaded] = useState(false);

  const [isTouch, setIsTouch] = useState(false);

  const [videoOpen, setVideoOpen] = useState(false);

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  // ==========================================================
  // TOUCH DETECTION
  // ==========================================================

  useEffect(() => {
    const media = window.matchMedia?.("(pointer: coarse)");

    setIsTouch(media?.matches ?? false);

    const handleChange = (event) => {
      setIsTouch(event.matches);
    };

    media?.addEventListener?.("change", handleChange);

    return () => {
      media?.removeEventListener?.("change", handleChange);
    };
  }, []);

  // ==========================================================
  // PORTRAIT 3D MOTION
  // ==========================================================

  const tiltX = useMotionValue(0);

  const tiltY = useMotionValue(0);

  const tiltSpringX = useSpring(tiltX, {
    stiffness: 160,
    damping: 18,
    mass: 0.4,
  });

  const tiltSpringY = useSpring(tiltY, {
    stiffness: 160,
    damping: 18,
    mass: 0.4,
  });

  const rotateX = useTransform(tiltSpringY, [-0.5, 0.5], [7, -7]);

  const rotateY = useTransform(tiltSpringX, [-0.5, 0.5], [-7, 7]);

  const frameShadow = useTransform([rotateX, rotateY], ([rx, ry]) => {
    const safeX = Number.isFinite(rx) ? rx : 0;

    const safeY = Number.isFinite(ry) ? ry : 0;

    return `
          ${safeY * -2}px
          ${22 + Math.abs(safeX) * 2}px
          65px
          rgba(0,0,0,.48)
        `;
  });

  // ==========================================================
  // BUTTON MAGNETIC MOTION
  // ==========================================================

  const magneticX = useMotionValue(0);

  const magneticY = useMotionValue(0);

  const magneticSpringX = useSpring(magneticX, {
    stiffness: 230,
    damping: 16,
  });

  const magneticSpringY = useSpring(magneticY, {
    stiffness: 230,
    damping: 16,
  });

  // ==========================================================
  // SCROLL PARALLAX
  // ==========================================================

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mapParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : -75],
  );

  const flagParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : -35],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : -20],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, reducedMotion ? 1 : 0.42],
  );

  // ==========================================================
  // TRANSITION
  // ==========================================================

  const transition = {
    duration: reducedMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1],
  };

  // ==========================================================
  // SECTION CURSOR
  // ==========================================================

  const handleSectionMove = useCallback(
    (event) => {
      if (reducedMotion || isTouch) {
        return;
      }

      const rect = sectionRef.current?.getBoundingClientRect();

      if (!rect) return;

      setSpotlight({
        x: ((event.clientX - rect.left) / rect.width) * 100,

        y: ((event.clientY - rect.top) / rect.height) * 100,

        active: true,
      });
    },
    [reducedMotion, isTouch],
  );

  const handleSectionLeave = useCallback(() => {
    setSpotlight((current) => ({
      ...current,
      active: false,
    }));
  }, []);

  // ==========================================================
  // FRAME TILT
  // ==========================================================

  const handleFrameMove = useCallback(
    (event) => {
      if (reducedMotion || isTouch) {
        return;
      }

      const rect = frameRef.current?.getBoundingClientRect();

      if (!rect) return;

      tiltX.set((event.clientX - rect.left) / rect.width - 0.5);

      tiltY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [reducedMotion, isTouch, tiltX, tiltY],
  );

  const handleFrameLeave = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
  }, [tiltX, tiltY]);

  // ==========================================================
  // MAGNETIC CTA
  // ==========================================================

  const handleMagneticMove = useCallback(
    (event) => {
      if (reducedMotion || isTouch) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();

      magneticX.set((event.clientX - rect.left - rect.width / 2) * 0.18);

      magneticY.set((event.clientY - rect.top - rect.height / 2) * 0.22);
    },
    [reducedMotion, isTouch, magneticX, magneticY],
  );

  const handleMagneticLeave = useCallback(() => {
    magneticX.set(0);
    magneticY.set(0);
  }, [magneticX, magneticY]);

  // ==========================================================
  // SAFE IMAGE ERROR
  // ==========================================================

  const handleMapError = useCallback(() => {
    setMapOk(false);
  }, []);

  // ==========================================================
  // PRIMARY CTA
  // ==========================================================

  const handlePrimaryCTA = useCallback(() => {
    const target = document.getElementById("vision");

    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [reducedMotion]);

  // ==========================================================
  // SECONDARY CTA
  // ==========================================================

  const handleJourneyCTA = useCallback(() => {
    const target = document.getElementById("journey");

    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [reducedMotion]);

  // ==========================================================
  // JOIN CTA
  // ==========================================================

  const handleJoinCTA = useCallback(() => {
    const target = document.getElementById("contact");

    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [reducedMotion]);

  // ==========================================================
  // RETURN
  // ==========================================================

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        onMouseMove={handleSectionMove}
        onMouseLeave={handleSectionLeave}
        aria-label="Candidate introduction — Sumit Yadav"
        className="relative isolate min-h-[760px] overflow-hidden bg-[#03120B] text-white sm:min-h-[820px] lg:min-h-[900px]"
      >
        {/* ==================================================
            BACKGROUND BASE
        ================================================== */}

        <div className="absolute inset-0 z-0 bg-[#03120B]" aria-hidden="true" />

        <div
          className="absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background: `
              radial-gradient(
                circle at 70% 40%,
                rgba(16,185,129,.075),
                transparent 32%
              ),
              radial-gradient(
                circle at 28% 70%,
                rgba(163,255,18,.045),
                transparent 30%
              ),
              linear-gradient(
                135deg,
                #03120B 0%,
                #04150C 45%,
                #020C08 100%
              )
            `,
          }}
        />

        {/* ==================================================
            AMBIENT LIGHT
        ================================================== */}

        <AmbientOrbs reducedMotion={reducedMotion} />

        {/* ==================================================
            FULL MAP
        ================================================== */}

        <MapBackground
          mapParallax={mapParallax}
          reducedMotion={reducedMotion}
          mapOk={mapOk}
          onError={handleMapError}
        />

        {/* ==================================================
            GEO ROUTE
        ================================================== */}

        <GeoRoute reducedMotion={reducedMotion} />

        {/* ==================================================
            GRID
        ================================================== */}

        <GridBackground />

        {/* ==================================================
            PARTICLES
        ================================================== */}

        <ParticleField reducedMotion={reducedMotion} mobile={isTouch} />

        {/* ==================================================
            CURSOR SPOTLIGHT
        ================================================== */}

        <div
          className="pointer-events-none absolute inset-0 z-[4] transition-opacity duration-500"
          aria-hidden="true"
          style={{
            opacity: spotlight.active ? 1 : 0,
            background: `
              radial-gradient(
                520px circle at
                ${spotlight.x}%
                ${spotlight.y}%,
                rgba(163,255,18,.075),
                transparent 68%
              )
            `,
          }}
        />

        {/* ==================================================
            TOP LIGHT LINE
        ================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute left-0 right-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-transparent via-lime-400/60 to-transparent"
          aria-hidden="true"
        />

        {/* ==================================================
            FLAG
        ================================================== */}

        <NepalFlag flagParallax={flagParallax} reducedMotion={reducedMotion} />

        {/* ==================================================
            VIGNETTE
        ================================================== */}

        <CinematicVignette />

        {/* ==================================================
            NOISE
        ================================================== */}

        <NoiseLayer />

        {/* ==================================================
            BOTTOM FADE
        ================================================== */}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#03120B] via-[#03120B]/70 to-transparent"
          aria-hidden="true"
        />

        {/* ==================================================
            CONTENT
        ================================================== */}

        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="relative z-30 mx-auto grid min-h-[760px] max-w-[1480px] items-center gap-10 px-5 pb-20 pt-28 sm:min-h-[820px] sm:px-8 lg:min-h-[900px] lg:grid-cols-[1fr_.92fr] lg:px-12 lg:pt-24 xl:px-16"
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-30 max-w-3xl"
          >
            {/* Breadcrumb */}

            <GeoBreadcrumb transition={transition} />

            {/* Status */}

            <StatusPill transition={transition} />

            {/* Main slogan */}

            <motion.p
              variants={fadeUp}
              transition={transition}
              lang="ne"
              className="max-w-2xl text-xl font-semibold leading-relaxed text-lime-200 sm:text-2xl lg:text-[30px]"
            >
              युवा नेतृत्व,
              <br className="sm:hidden" />
              <span className="text-white"> समृद्ध Bishrampur</span>
            </motion.p>

            {/* Name */}

            <motion.h1
              variants={fadeUp}
              transition={{
                ...transition,
                duration: reducedMotion ? 0 : 0.95,
              }}
              className="mt-4 text-[3.4rem] font-black leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-8xl lg:text-[5.2rem] xl:text-[7rem]"
            >
              <span className="block text-white">SUMIT</span>

              <span className="relative inline-block text-lime-400">
                YADAV
                <NameUnderline />
              </span>
            </motion.h1>

            {/* Candidate designation */}

            <motion.div
              variants={fadeUp}
              transition={transition}
              lang="ne"
              className="mt-7"
            >
              <p className="text-sm font-medium text-slate-400 sm:text-lg">
                २०८४ मा Bishrampur गाउँपालिकाको
              </p>

              <p className="mt-1 text-xl font-black text-white sm:text-2xl">
                अध्यक्ष पदको उम्मेदवार
              </p>
            </motion.div>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              transition={transition}
              lang="ne"
              className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              युवा सोच, स्पष्ट दृष्टिकोण र जनतासँग जोडिएको नेतृत्वमार्फत
              Bishrampur लाई अझ राम्रो बनाउने प्रतिबद्धता।
            </motion.p>

            {/* Values */}

            <ValueBadges transition={transition} />

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.button
                type="button"
                onClick={handlePrimaryCTA}
                style={{
                  x: magneticSpringX,
                  y: magneticSpringY,
                }}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        scale: 1.025,
                      }
                }
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-black shadow-[0_12px_45px_rgba(163,255,18,.18)] outline-none transition-shadow duration-300 hover:shadow-[0_18px_60px_rgba(163,255,18,.3)] focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03120B]"
              >
                मेरो सोच पढ्नुहोस्
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              <MagneticButton
                variant="secondary"
                reducedMotion={reducedMotion}
                onClick={handleJourneyCTA}
                icon={<ArrowRight size={17} />}
              >
                मेरो यात्रा
              </MagneticButton>

              <MagneticButton
                variant="outline"
                reducedMotion={reducedMotion}
                onClick={handleJoinCTA}
                icon={<Sparkles size={16} />}
              >
                JOIN MOVEMENT
              </MagneticButton>
            </motion.div>

            {/* Stats */}

            <StatsRow transition={transition} />

            {/* Bottom message */}

            <motion.div
              variants={fadeUp}
              transition={transition}
              lang="ne"
              className="mt-7 flex items-center gap-3 text-xs text-slate-600"
            >
              <div className="h-px w-9 bg-lime-400/30" />

              <span>हाम्रो गाउँपालिका • हाम्रो भविष्य</span>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT PORTRAIT AREA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: reducedMotion ? 0 : 1,
              delay: 0.2,
            }}
            className="relative flex min-h-[540px] items-center justify-center lg:min-h-[700px]"
            style={{
              perspective: 1400,
            }}
          >
            {/* Main portrait glow */}

            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.32, 0.52, 0.32],
                    }
              }
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[350px] w-[350px] rounded-full bg-lime-400/[0.12] blur-[100px] sm:h-[480px] sm:w-[480px]"
              aria-hidden="true"
            />

            {/* Emerald glow */}

            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                      opacity: [0.12, 0.22, 0.12],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[280px] w-[280px] rounded-full bg-emerald-400/[0.12] blur-[90px]"
              aria-hidden="true"
            />

            {/* Orbital system */}

            <OrbitalRings reducedMotion={reducedMotion} />

            {/* Portrait */}

            <PortraitFrame
              reducedMotion={reducedMotion}
              frameRef={frameRef}
              rotateX={rotateX}
              rotateY={rotateY}
              frameShadow={frameShadow}
              portraitLoaded={portraitLoaded}
              setPortraitLoaded={setPortraitLoaded}
              onFrameMove={handleFrameMove}
              onFrameLeave={handleFrameLeave}
              onPlay={() => setVideoOpen(true)}
            />

            {/* Location */}

            <FloatingLocationCard reducedMotion={reducedMotion} />

            {/* Floating mini cards */}

            <FloatingStats reducedMotion={reducedMotion} />

            {/* Bottom orbital marker */}

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
                duration: 0.8,
                delay: 1.3,
              }}
              className="absolute bottom-3 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-500 backdrop-blur-xl"
            >
              Nepal • Madhesh • Bara
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ==================================================
            MOBILE MAP GLOW
        ================================================== */}

        <div
          className="pointer-events-none absolute bottom-[25%] left-1/2 z-[2] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-lime-400/[0.025] blur-[100px] lg:hidden"
          aria-hidden="true"
        />

        {/* ==================================================
            SCROLL INDICATOR
        ================================================== */}

        <ScrollIndicator reducedMotion={reducedMotion} />

        {/* ==================================================
            BOTTOM BORDER
        ================================================== */}

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-50 h-px bg-gradient-to-r from-transparent via-lime-400/20 to-transparent"
          aria-hidden="true"
        />

        {/* ==================================================
            MODAL
        ================================================== */}

        <IntroModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      </section>

      {/* ======================================================
          EXTRA MOBILE SCROLL CUE
      ====================================================== */}

      <div className="flex justify-center bg-[#03120B] pb-4 pt-1 sm:hidden">
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, 5, 0],
                }
          }
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-700"
        >
          <ArrowDown size={12} />
          Explore
        </motion.div>
      </div>
    </>
  );
}
