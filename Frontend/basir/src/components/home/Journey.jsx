import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Clock3,
  Expand,
  Image as ImageIcon,
  Play,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
import photo8 from "../../assets/photo8.jpg";
import photo9 from "../../assets/photo9.jpg";
import photo10 from "../../assets/photo10.jpg";
import photo11 from "../../assets/photo11.jpg";
import photo12 from "../../assets/photo12.jpg";
import photo13 from "../../assets/photo13.jpg";
import photo14 from "../../assets/photo14.jpg";
import photo15 from "../../assets/photo15.jpg";
import photo16 from "../../assets/photo16.jpg";
import photo17 from "../../assets/photo17.jpg";
import photo18 from "../../assets/photo18.jpg";
import photo19 from "../../assets/photo19.jpg";
import photo20 from "../../assets/photo20.jpg";
import photo21 from "../../assets/photo21.jpg";
import photo22 from "../../assets/photo22.jpg";
import photo23 from "../../assets/photo23.jpg";
import photo24 from "../../assets/photo24.jpg";
import photo25 from "../../assets/photo25.jpg";
import photo26 from "../../assets/photo26.jpg";
import photo27 from "../../assets/photo27.jpg";
import photo28 from "../../assets/photo28.jpg";
import photo29 from "../../assets/photo29.jpg";
import photo30 from "../../assets/photo30.jpg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
];

const journeyData = photos.map((image, index) => ({
  id: index + 1,
  image,
  type: "photo",
  year: String(2018 + Math.floor(index / 4)),
  title: [
    "यात्राको सुरुवात",
    "जनतासँग प्रत्यक्ष संवाद",
    "समुदायसँग जोडिएको क्षण",
    "साझा सोचको यात्रा",
    "युवासँग नयाँ ऊर्जा",
    "समाजको साथमा",
    "स्थानीय आवाज सुन्दै",
    "साझा भविष्यको सोच",
    "नयाँ सम्भावनाको खोजी",
    "नागरिकसँग भेटघाट",
  ][index % 10],
  description:
    "जनतासँग जोडिएको यो क्षण सामाजिक सहभागिता, संवाद र साझा भविष्यप्रतिको निरन्तर यात्राको एउटा महत्वपूर्ण सम्झना हो।",
}));

const accentThemes = [
  {
    border: "from-cyan-400 via-blue-500 to-violet-500",
    glow: "bg-cyan-400/30",
    badge: "from-cyan-400 to-blue-500",
    text: "text-cyan-300",
  },
  {
    border: "from-fuchsia-500 via-pink-500 to-rose-500",
    glow: "bg-pink-500/30",
    badge: "from-fuchsia-500 to-pink-500",
    text: "text-pink-300",
  },
  {
    border: "from-orange-400 via-amber-500 to-yellow-400",
    glow: "bg-orange-400/30",
    badge: "from-orange-400 to-amber-500",
    text: "text-orange-300",
  },
  {
    border: "from-emerald-400 via-teal-400 to-cyan-500",
    glow: "bg-emerald-400/30",
    badge: "from-emerald-400 to-teal-500",
    text: "text-emerald-300",
  },
  {
    border: "from-violet-500 via-purple-500 to-indigo-500",
    glow: "bg-violet-500/30",
    badge: "from-violet-500 to-purple-500",
    text: "text-violet-300",
  },
  {
    border: "from-rose-500 via-red-500 to-orange-500",
    glow: "bg-rose-500/30",
    badge: "from-rose-500 to-red-500",
    text: "text-rose-300",
  },
];

function JourneyCard({ item, index, onClick, shouldReduceMotion }) {
  const theme = accentThemes[index % accentThemes.length];

  return (
    <motion.button
      layout
      onClick={() => onClick(item)}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 80,
        scale: shouldReduceMotion ? 1 : 0.86,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -40,
        scale: 0.9,
      }}
      transition={{
        duration: 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        type: "spring",
        stiffness: 100,
        damping: 16,
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -16,
              scale: 1.025,
              rotateX: 2,
              rotateY: -2,
            }
      }
      whileTap={{ scale: 0.98 }}
      className="group relative min-h-[410px] text-left [perspective:1200px]"
    >
      {/* glow */}
      <div
        className={`absolute -inset-3 rounded-[34px] ${theme.glow} opacity-0 blur-3xl transition duration-700 group-hover:opacity-100`}
      />

      {/* animated gradient border */}
      <div
        className={`absolute inset-0 rounded-[30px] bg-gradient-to-br ${theme.border} p-[1px] shadow-2xl`}
      >
        <div className="relative h-full overflow-hidden rounded-[29px] bg-slate-950/85">
          {/* image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />

          {/* animated light */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: ["-140%", "240%"],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-full w-[35%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
          />

          {/* top number */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <div
              className={`rounded-full bg-gradient-to-r ${theme.badge} px-3 py-1.5 text-xs font-black text-white shadow-lg`}
            >
              {item.year}
            </div>

            <div className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-xl">
              #{String(item.id).padStart(2, "0")}
            </div>
          </div>

          {/* expand */}
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:rotate-12 group-hover:opacity-100">
            <Expand size={18} />
          </div>

          {/* center play / image */}
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-500 group-hover:scale-110 group-hover:opacity-100">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${theme.badge} shadow-2xl`}
            >
              <ImageIcon size={24} className="text-white" />
            </div>
          </div>

          {/* content */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles size={16} className={theme.text} />

              <span
                className={`text-xs font-bold uppercase tracking-[0.18em] ${theme.text}`}
              >
                JOURNEY MEMORY
              </span>
            </div>

            <h3 className="text-2xl font-black leading-tight text-white">
              {item.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">
              {item.description}
            </p>

            <div
              className={`mt-5 flex items-center gap-2 text-sm font-bold ${theme.text}`}
            >
              पूरा हेर्नुहोस्
              <ArrowRight
                size={17}
                className="transition duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default function Journey() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const cardsPerPage = 6;
  const totalPages = Math.ceil(journeyData.length / cardsPerPage);

  const start = page * cardsPerPage;

  const currentCards = journeyData.slice(start, start + cardsPerPage);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  /* Auto change cards */
  useEffect(() => {
    if (selected) return;

    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 8500);

    return () => clearInterval(timer);
  }, [selected, totalPages]);

  /* ESC close */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }

      if (!selected) return;

      const currentIndex = journeyData.findIndex(
        (item) => item.id === selected.id,
      );

      if (event.key === "ArrowRight") {
        setSelected(
          journeyData[
            currentIndex === journeyData.length - 1 ? 0 : currentIndex + 1
          ],
        );
      }

      if (event.key === "ArrowLeft") {
        setSelected(
          journeyData[
            currentIndex === 0 ? journeyData.length - 1 : currentIndex - 1
          ],
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  const selectedIndex = selected
    ? journeyData.findIndex((item) => item.id === selected.id)
    : -1;

  const selectNext = () => {
    if (!selected) return;

    setSelected(
      journeyData[
        selectedIndex === journeyData.length - 1 ? 0 : selectedIndex + 1
      ],
    );
  };

  const selectPrevious = () => {
    if (!selected) return;

    setSelected(
      journeyData[
        selectedIndex === 0 ? journeyData.length - 1 : selectedIndex - 1
      ],
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#050711] py-24">
        {/* ================= BACKGROUND ================= */}

        {/* animated mesh */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 150, -80, 0],
                  y: [0, 80, -100, 0],
                  scale: [1, 1.2, 0.9, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[150px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -150, 100, 0],
                  y: [0, 120, -80, 0],
                  scale: [1, 0.8, 1.15, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-64 top-10 h-[700px] w-[700px] rounded-full bg-fuchsia-600/20 blur-[150px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [-50, 100, -30, -50],
                  y: [100, -100, 60, 100],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[-300px] left-1/3 h-[650px] w-[650px] rounded-full bg-orange-500/15 blur-[150px]"
        />

        {/* animated grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* floating particles */}
        {!shouldReduceMotion &&
          Array.from({ length: 18 }).map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -80, 0],
                x: [0, index % 2 === 0 ? 30 : -30, 0],
                opacity: [0.15, 0.8, 0.15],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 5 + (index % 5),
                repeat: Infinity,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white"
              style={{
                left: `${5 + ((index * 17) % 90)}%`,
                top: `${10 + ((index * 29) % 80)}%`,
              }}
            />
          ))}

        <div className="relative mx-auto max-w-[1450px] px-5">
          {/* ================= HERO ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mx-auto mb-20 max-w-4xl text-center"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      boxShadow: [
                        "0 0 20px rgba(34,211,238,.15)",
                        "0 0 50px rgba(168,85,247,.3)",
                        "0 0 20px rgba(34,211,238,.15)",
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl"
            >
              <Sparkles size={17} className="text-cyan-300" />
              <span>एक यात्रा • धेरै सम्झनाहरू • साझा भविष्य</span>
              <Zap size={16} className="text-yellow-300" />
            </motion.div>

            <h2 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              <span className="text-white">मेरो यात्रा,</span>

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                मेरो परिचय
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              जनताको बीचबाट सुरु भएको यात्रा, समुदायसँग जोडिएका अनुभव, सामाजिक
              सहभागिता र विश्रामपुरको साझा भविष्यप्रतिको निरन्तर सोच।
            </p>

            {/* stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 backdrop-blur-xl">
                <p className="text-2xl font-black text-cyan-300">
                  {journeyData.length}
                </p>
                <p className="text-xs text-slate-400">Journey Memories</p>
              </div>

              <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 px-5 py-3 backdrop-blur-xl">
                <p className="text-2xl font-black text-violet-300">
                  {journeyData[0].year}+
                </p>
                <p className="text-xs text-slate-400">Journey Started</p>
              </div>

              <div className="rounded-2xl border border-pink-400/20 bg-pink-400/5 px-5 py-3 backdrop-blur-xl">
                <p className="text-2xl font-black text-pink-300">∞</p>
                <p className="text-xs text-slate-400">New Memories</p>
              </div>
            </div>
          </motion.div>

          {/* ================= STORY PANEL ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-1 backdrop-blur-2xl"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-white/[0.08] via-transparent to-violet-500/[0.08] p-7 md:p-10">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

              <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_.6fr]">
                <div>
                  <div className="mb-5 flex items-center gap-2 text-cyan-300">
                    <Clock3 size={19} />
                    <span className="text-xs font-black tracking-[0.25em]">
                      THE STORY CONTINUES
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-white md:text-4xl">
                    हरेक तस्वीरभित्र एउटा{" "}
                    <span className="bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent">
                      सम्झना
                    </span>{" "}
                    छ।
                  </h3>

                  <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                    यो केवल फोटोहरूको संग्रह होइन। जनतासँग भेटघाट, समुदायसँग
                    संवाद, सामाजिक गतिविधि र विश्रामपुरसँग जोडिएको यात्राका
                    महत्वपूर्ण क्षणहरू यहाँ सुरक्षित छन्।
                  </p>
                </div>

                <div className="flex justify-center">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            rotate: 360,
                          }
                    }
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-40 w-40 items-center justify-center rounded-full border border-dashed border-cyan-300/30"
                  >
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/30 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 shadow-[0_0_60px_rgba(34,211,238,.15)]">
                      <CalendarDays size={42} className="text-cyan-300" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTROLS ================= */}

          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />

                <p className="font-bold text-white">Journey Collection</p>
              </div>

              <p className="mt-1 text-sm text-slate-400">
                {start + 1} –{" "}
                {Math.min(start + cardsPerPage, journeyData.length)} of{" "}
                {journeyData.length} memories
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevPage}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,.2)]"
              >
                <ArrowLeft
                  size={20}
                  className="transition group-hover:-translate-x-1"
                />
              </button>

              <button
                onClick={nextPage}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition duration-300 hover:border-pink-400/60 hover:bg-pink-400/10 hover:shadow-[0_0_30px_rgba(236,72,153,.2)]"
              >
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* ================= JOURNEY CARDS ================= */}

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {currentCards.map((item, index) => (
                <JourneyCard
                  key={item.id}
                  item={item}
                  index={index + page * cardsPerPage}
                  onClick={setSelected}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ================= PROGRESS ================= */}

          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                    page === index
                      ? "w-14 bg-white/20"
                      : "w-2.5 bg-white/15 hover:bg-white/40"
                  }`}
                >
                  {page === index && (
                    <motion.span
                      key={page}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 8.5,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
                    />
                  )}
                </button>
              ))}
            </div>

            <p className="text-xs tracking-[0.25em] text-slate-500">
              AUTO JOURNEY EXPERIENCE
            </p>
          </div>
        </div>
      </section>

      {/* ================= CINEMATIC MODAL ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#03040b]/95 p-3 backdrop-blur-2xl md:p-8"
          >
            {/* modal animated lights */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 100, 0],
                      y: [0, -80, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
            />

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, -100, 0],
                      y: [0, 100, 0],
                    }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 18,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/15 bg-[#090b18]/90 shadow-[0_0_100px_rgba(139,92,246,.15)] backdrop-blur-2xl"
            >
              {/* top bar */}
              <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between p-4 md:p-5">
                <div className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-bold text-cyan-300 backdrop-blur-xl">
                  JOURNEY #{String(selected.id).padStart(2, "0")}
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-white backdrop-blur-xl transition hover:rotate-90 hover:border-red-400/60 hover:bg-red-500/20"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid min-h-[650px] lg:grid-cols-[1.5fr_.8fr]">
                {/* image */}
                <div className="relative min-h-[420px] overflow-hidden bg-black">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-full w-full object-contain"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-black text-white shadow-xl">
                      {selected.year}
                    </div>

                    <div className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs text-white backdrop-blur-xl">
                      Memory {selected.id} / {journeyData.length}
                    </div>
                  </div>
                </div>

                {/* details */}
                <div className="flex flex-col justify-center p-7 pt-20 md:p-10 md:pt-20">
                  <div className="mb-5 flex items-center gap-2 text-pink-300">
                    <Sparkles size={18} />
                    <span className="text-xs font-black tracking-[0.2em]">
                      A MOMENT TO REMEMBER
                    </span>
                  </div>

                  <h2 className="text-4xl font-black leading-tight text-white">
                    {selected.title}
                  </h2>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent" />

                  <p className="mt-6 leading-8 text-slate-300">
                    {selected.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4">
                      <CalendarDays size={18} className="text-cyan-300" />
                      <p className="mt-3 text-xs text-slate-500">YEAR</p>
                      <p className="font-black text-white">{selected.year}</p>
                    </div>

                    <div className="rounded-2xl border border-violet-400/15 bg-violet-400/[0.05] p-4">
                      <ImageIcon size={18} className="text-violet-300" />
                      <p className="mt-3 text-xs text-slate-500">TYPE</p>
                      <p className="font-black text-white">PHOTO</p>
                    </div>
                  </div>

                  {/* modal navigation */}
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <button
                      onClick={selectPrevious}
                      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                    >
                      <ChevronLeft
                        size={18}
                        className="transition group-hover:-translate-x-1"
                      />
                      Previous
                    </button>

                    <button
                      onClick={selectNext}
                      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-pink-400/50 hover:bg-pink-400/10"
                    >
                      Next
                      <ChevronRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  <p className="mt-6 text-center text-xs text-slate-500">
                    ← → keyboard प्रयोग गरेर पनि memories हेर्न सक्नुहुन्छ
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
