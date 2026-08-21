import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  HeartPulse,
  GraduationCap,
  Leaf,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Users,
  ChevronDown,
  CheckCircle2,
  Zap,
  Activity,
} from "lucide-react";

const priorities = [
  {
    id: "01",
    title: "भ्रष्टाचार विरुद्ध",
    text: "पारदर्शिता, जवाफदेहिता र सुशासन",
    description:
      "सार्वजनिक काम, निर्णय र जिम्मेवारीमा पारदर्शिता तथा जवाफदेहितालाई प्राथमिकता दिने सोच।",
    Icon: Target,
    color: "cyan",
    points: [
      "पारदर्शी सार्वजनिक सेवा",
      "जवाफदेही निर्णय प्रणाली",
      "सुशासनप्रतिको प्रतिबद्धता",
    ],
  },
  {
    id: "02",
    title: "गरिब र विपन्नको साथ",
    text: "हरेक नागरिकको सम्मान र समान अवसर",
    description:
      "समाजका कमजोर, गरिब तथा विपन्न नागरिकको आवश्यकता र अवसरलाई प्राथमिकतामा राख्ने सोच।",
    Icon: HeartPulse,
    color: "rose",
    points: [
      "समान अवसरको सोच",
      "विपन्न परिवारप्रति संवेदनशीलता",
      "सहयोग र सामाजिक सहभागिता",
    ],
  },
  {
    id: "03",
    title: "युवाको भविष्य",
    text: "शिक्षा, सीप र रोजगारीको अवसर",
    description:
      "युवाको ऊर्जा, सीप र नयाँ सोचलाई विश्रामपुरको भविष्यसँग जोड्ने प्राथमिकता।",
    Icon: GraduationCap,
    color: "violet",
    points: ["सीप विकासमा जोड", "करियर र अवसरको जानकारी", "युवा सहभागिता"],
  },
  {
    id: "04",
    title: "स्वास्थ्य सेवा",
    text: "गुणस्तरीय स्वास्थ्य सेवा सबैका लागि",
    description:
      "स्वास्थ्यसम्बन्धी जानकारी, पहुँच र आवश्यक सेवाप्रति नागरिकको ध्यान केन्द्रित गर्ने सोच।",
    Icon: Activity,
    color: "emerald",
    points: [
      "स्वास्थ्य सेवामा पहुँच",
      "सचेतना र जानकारी",
      "समुदायको स्वास्थ्य प्राथमिकता",
    ],
  },
  {
    id: "05",
    title: "शिक्षा र विद्यालय",
    text: "स्तरीय शिक्षा, उज्ज्वल भविष्य",
    description:
      "बालबालिका र युवाको उज्ज्वल भविष्यका लागि गुणस्तरीय शिक्षा र आधुनिक सिकाइमा जोड।",
    Icon: GraduationCap,
    color: "amber",
    points: [
      "गुणस्तरीय शिक्षाको सोच",
      "आधुनिक सिकाइमा रुचि",
      "विद्यार्थीको भविष्य प्राथमिकता",
    ],
  },
  {
    id: "06",
    title: "वातावरण संरक्षण",
    text: "हरित विकास, स्वच्छ Bishrampur",
    description:
      "स्वच्छ वातावरण, हरियाली र दीगो विकासलाई विश्रामपुरको भविष्यसँग जोड्ने दृष्टिकोण।",
    Icon: Leaf,
    color: "lime",
    points: ["स्वच्छ वातावरण", "हरित विकासको सोच", "दीगो भविष्यप्रतिको ध्यान"],
  },
];

const themes = {
  cyan: {
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    text: "text-cyan-300",
    glow: "bg-cyan-400/25",
    bg: "from-cyan-400/15 via-blue-500/5 to-transparent",
    ring: "border-cyan-400/30",
    bar: "from-cyan-400 to-blue-500",
  },

  rose: {
    gradient: "from-rose-400 via-pink-500 to-red-500",
    text: "text-rose-300",
    glow: "bg-rose-400/25",
    bg: "from-rose-400/15 via-pink-500/5 to-transparent",
    ring: "border-rose-400/30",
    bar: "from-rose-400 to-pink-500",
  },

  violet: {
    gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
    text: "text-violet-300",
    glow: "bg-violet-400/25",
    bg: "from-violet-400/15 via-purple-500/5 to-transparent",
    ring: "border-violet-400/30",
    bar: "from-violet-400 to-purple-500",
  },

  emerald: {
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    text: "text-emerald-300",
    glow: "bg-emerald-400/25",
    bg: "from-emerald-400/15 via-teal-500/5 to-transparent",
    ring: "border-emerald-400/30",
    bar: "from-emerald-400 to-teal-500",
  },

  amber: {
    gradient: "from-amber-300 via-orange-500 to-red-500",
    text: "text-amber-300",
    glow: "bg-amber-400/25",
    bg: "from-amber-400/15 via-orange-500/5 to-transparent",
    ring: "border-amber-400/30",
    bar: "from-amber-300 to-orange-500",
  },

  lime: {
    gradient: "from-lime-300 via-green-500 to-emerald-500",
    text: "text-lime-300",
    glow: "bg-lime-400/25",
    bg: "from-lime-400/15 via-green-500/5 to-transparent",
    ring: "border-lime-400/30",
    bar: "from-lime-300 to-emerald-500",
  },
};

export default function Priorities() {
  const [active, setActive] = useState(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  return (
    <section
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className="relative isolate overflow-hidden bg-[#050711] py-24"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(
            500px circle at ${mouse.x}% ${mouse.y}%,
            rgba(139,92,246,.12),
            transparent 60%
          )`,
        }}
      />

      {/* Moving Cyan Light */}
      <motion.div
        animate={{
          x: [0, 180, -80, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[160px]"
      />

      {/* Moving Pink Light */}
      <motion.div
        animate={{
          x: [0, -180, 80, 0],
          y: [0, 150, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-64 top-20 h-[700px] w-[700px] rounded-full bg-fuchsia-500/20 blur-[160px]"
      />

      {/* Orange Bottom Light */}
      <motion.div
        animate={{
          x: [-80, 120, -30, -80],
          y: [0, -80, 70, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-300px] left-1/3 h-[650px] w-[650px] rounded-full bg-orange-500/15 blur-[160px]"
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -70, 0],
            opacity: [0.1, 0.8, 0.1],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white"
          style={{
            left: `${5 + ((index * 17) % 90)}%`,
            top: `${8 + ((index * 23) % 85)}%`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-[1400px] px-5">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2 text-sm text-white backdrop-blur-xl">
            <Sparkles size={17} className="text-cyan-300" />

            <span className="font-semibold">
              जनताको आवाजबाट बनेका प्राथमिकता
            </span>

            <Zap size={16} className="text-yellow-300" />
          </div>

          <h2 className="mt-7 text-4xl font-black leading-tight text-white md:text-6xl">
            म केका लागि{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
              लड्दै छु?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            जनताको प्राथमिकता नै हाम्रो प्राथमिकता हो। पारदर्शिता, अवसर, शिक्षा,
            स्वास्थ्य, युवा र हरित भविष्यलाई जोडेर विश्रामपुरको साझा भविष्यतर्फ
            अगाडि बढ्ने सोच।
          </p>
        </motion.div>

        {/* ================= PRIORITY GRID ================= */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {priorities.map((item, index) => {
            const Icon = item.Icon;
            const theme = themes[item.color];
            const isActive = active === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 90,
                  damping: 15,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                }}
                className="group relative min-h-[380px] [perspective:1200px]"
              >
                {/* Outer Glow */}
                <div
                  className={`absolute -inset-3 rounded-[32px] ${theme.glow} opacity-0 blur-3xl transition duration-700 group-hover:opacity-100`}
                />

                {/* Animated gradient border */}
                <div
                  className={`relative h-full overflow-hidden rounded-[30px] bg-gradient-to-br ${theme.gradient} p-[1px]`}
                >
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[29px] bg-[#090b18]/90 bg-gradient-to-br ${theme.bg} p-7 backdrop-blur-2xl`}
                  >
                    {/* top moving light */}
                    <motion.div
                      animate={{
                        x: ["-120%", "300%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute top-0 h-full w-[30%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    />

                    {/* Number */}
                    <div className="absolute right-6 top-6 text-5xl font-black text-white/[0.06]">
                      {item.id}
                    </div>

                    {/* Icon section */}
                    <div className="relative">
                      {/* rotating ring */}
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className={`absolute -left-2 -top-2 h-20 w-20 rounded-full border border-dashed ${theme.ring}`}
                      />

                      <motion.div
                        animate={{
                          y: [0, -7, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} shadow-2xl`}
                      >
                        <Icon size={30} className="text-white" />
                      </motion.div>
                    </div>

                    {/* content */}
                    <div className="relative mt-9">
                      <p
                        className={`text-xs font-black tracking-[0.2em] ${theme.text}`}
                      >
                        PRIORITY {item.id}
                      </p>

                      <h3 className="mt-3 text-2xl font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>

                    {/* progress */}
                    <div className="relative mt-7">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-slate-500">FOCUS AREA</span>
                        <span className={theme.text}>PRIORITY</span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${75 + index * 4}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.15,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
                        />
                      </div>
                    </div>

                    {/* expand button */}
                    <button
                      onClick={() => setActive(isActive ? null : item.id)}
                      className={`relative mt-7 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:border-white/25`}
                    >
                      <span className="flex items-center gap-2">
                        <ShieldCheck size={17} className={theme.text} />
                        प्राथमिकता बुझ्नुहोस्
                      </span>

                      <motion.div
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    {/* expanded content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="relative overflow-hidden"
                        >
                          <div className="mt-5 border-t border-white/10 pt-5">
                            <p className="leading-7 text-slate-300">
                              {item.description}
                            </p>

                            <div className="mt-5 space-y-3">
                              {item.points.map((point) => (
                                <motion.div
                                  key={point}
                                  initial={{
                                    opacity: 0,
                                    x: -20,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  className="flex items-center gap-3 text-sm text-slate-300"
                                >
                                  <CheckCircle2
                                    size={17}
                                    className={theme.text}
                                  />

                                  {point}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom line */}
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${theme.gradient} transition-all duration-700 group-hover:w-full`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM COMMITMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-1 backdrop-blur-2xl"
        >
          {/* animated background */}
          <motion.div
            animate={{
              x: ["-20%", "120%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-xl"
          />

          <div className="relative grid items-center gap-8 rounded-[30px] bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-violet-500/[0.08] p-8 md:grid-cols-[.8fr_1.4fr] md:p-12">
            <div className="flex justify-center">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-32 w-32 items-center justify-center rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 shadow-[0_0_70px_rgba(139,92,246,.3)]"
              >
                <Users size={54} className="text-white" />

                <div className="absolute -inset-3 rounded-[38px] border border-dashed border-cyan-300/30" />
              </motion.div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles size={18} />

                <span className="text-xs font-black tracking-[0.22em]">
                  OUR COMMITMENT
                </span>
              </div>

              <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                जनताको प्राथमिकता,
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                  हाम्रो जिम्मेवारी।
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                विश्रामपुरको भविष्य कुनै एक व्यक्तिको मात्र विषय होइन। जनताको
                विश्वास, युवाको ऊर्जा, किसानको मेहनत, महिलाको सहभागिता र
                सम्पूर्ण समुदायको सहकार्यबाट मात्र सकारात्मक परिवर्तनको आधार
                निर्माण गर्न सकिन्छ।
              </p>

              <button className="group mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 px-6 py-3.5 font-black text-white shadow-[0_10px_40px_rgba(139,92,246,.25)] transition duration-300 hover:scale-105">
                हाम्रो सोच जान्नुहोस्
                <ArrowUpRight
                  size={19}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
