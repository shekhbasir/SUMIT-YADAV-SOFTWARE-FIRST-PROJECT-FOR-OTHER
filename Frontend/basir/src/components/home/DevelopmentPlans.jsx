import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Construction,
  Droplets,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  Map,
  Sparkles,
  Target,
  Users,
  Zap,
  ShieldCheck,
  Clock3,
  Eye,
  Route,
  School,
  Stethoscope,
  Tractor,
  Wifi,
  BriefcaseBusiness,
  Trees,
  Building2,
  CircleCheck,
} from "lucide-react";

const plans = [
  {
    id: "01",
    year: "2028",
    title: "एकीकृत सडक र सुरक्षित आवागमन",
    short: "हरेक वडा, बस्ती र बजारलाई सुरक्षित सम्पर्कसँग जोड्ने सोच।",
    description:
      "विश्रामपुरको विकासको आधार राम्रो पहुँच हो। सडक केवल यात्रा गर्ने माध्यम होइन, शिक्षा, स्वास्थ्य, व्यापार, कृषि र अवसरसँग नागरिकलाई जोड्ने आधार हो।",

    Icon: Route,

    gradient: "from-cyan-400 via-blue-500 to-indigo-600",

    glow: "bg-cyan-500/30",

    implementation: [
      "स्थानीय आवश्यकता र प्राथमिकताको नक्साङ्कन",
      "वडा तथा समुदायसँग समन्वय",
      "प्राथमिक सडक र पहुँच मार्गको पहिचान",
      "कामको सार्वजनिक जानकारी र निगरानीमा जोड",
    ],

    impact: ["सुरक्षित आवागमन", "बजारसँग राम्रो पहुँच", "सेवामा सहज पहुँच"],
  },

  {
    id: "02",
    year: "2028",
    title: "स्वास्थ्य सेवा र स्वस्थ समुदाय",
    short: "आधारभूत स्वास्थ्य पहुँच र सचेतनालाई प्राथमिकता।",
    description:
      "स्वास्थ्य सेवा नागरिकको आधारभूत आवश्यकता हो। स्थानीय स्वास्थ्य सेवा, जानकारी, सचेतना र आवश्यक सुविधामा पहुँच सुधार्ने दिशामा काम गर्ने सोचलाई प्राथमिकता दिइएको छ।",

    Icon: HeartPulse,

    gradient: "from-rose-400 via-pink-500 to-red-600",

    glow: "bg-rose-500/30",

    implementation: [
      "स्वास्थ्य सेवाको वर्तमान अवस्था बुझ्ने",
      "सम्बन्धित निकायसँग समन्वय",
      "स्वास्थ्य सचेतना कार्यक्रमलाई प्रोत्साहन",
      "नागरिकको आवश्यकताअनुसार प्राथमिकता निर्धारण",
    ],

    impact: [
      "स्वास्थ्य जानकारीमा पहुँच",
      "सचेत समुदाय",
      "आधारभूत सेवामा सुधारको प्रयास",
    ],
  },

  {
    id: "03",
    year: "2028",
    title: "शिक्षा, सीप र डिजिटल भविष्य",
    short: "गुणस्तरीय शिक्षा र नयाँ पुस्ताका लागि अवसर।",
    description:
      "आजको विद्यार्थी भोलिको विश्रामपुर हो। विद्यालय, डिजिटल ज्ञान, सीप विकास र करियरसम्बन्धी जानकारीलाई भविष्य निर्माणसँग जोड्ने सोच राखिएको छ।",

    Icon: GraduationCap,

    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",

    glow: "bg-violet-500/30",

    implementation: [
      "विद्यालय र विद्यार्थीको आवश्यकताको अध्ययन",
      "डिजिटल तथा सीपसम्बन्धी अवसरको जानकारी",
      "युवासँग प्रत्यक्ष संवाद",
      "सम्बन्धित संस्था र सरोकारवालासँग सहकार्य",
    ],

    impact: ["डिजिटल ज्ञान", "सीप विकास", "भविष्यका अवसरबारे जानकारी"],
  },

  {
    id: "04",
    year: "2028",
    title: "कृषि, सिँचाइ र स्थानीय अर्थतन्त्र",
    short: "किसानको मेहनतलाई अवसर र सम्भावनासँग जोड्ने सोच।",
    description:
      "विश्रामपुरको आर्थिक आधारसँग कृषि प्रत्यक्ष रूपमा जोडिएको छ। सिँचाइ, जानकारी, आधुनिक अभ्यास र बजारसम्बन्धी अवसरबारे संवाद र सहकार्यलाई प्राथमिकता दिने दृष्टिकोण हो।",

    Icon: Tractor,

    gradient: "from-lime-300 via-green-500 to-emerald-600",

    glow: "bg-lime-500/30",

    implementation: [
      "किसानसँग प्रत्यक्ष संवाद",
      "सिँचाइ र उत्पादनसम्बन्धी आवश्यकता बुझ्ने",
      "सम्बन्धित निकाय तथा विशेषज्ञसँग समन्वय",
      "स्थानीय सम्भावनाको पहिचान",
    ],

    impact: [
      "कृषि जानकारी",
      "स्थानीय सम्भावनाको पहिचान",
      "किसानको आवाजलाई प्राथमिकता",
    ],
  },

  {
    id: "05",
    year: "2028",
    title: "स्वच्छ, हरित र सुरक्षित विश्रामपुर",
    short: "विकाससँगै वातावरण र जीवनको गुणस्तरमा ध्यान।",
    description:
      "विकास केवल भवन र सडकमा सीमित हुँदैन। स्वच्छता, हरियाली, सुरक्षित सार्वजनिक स्थान र दीगो सोच पनि भविष्यको महत्वपूर्ण हिस्सा हुन्।",

    Icon: Leaf,

    gradient: "from-emerald-300 via-teal-500 to-cyan-600",

    glow: "bg-emerald-500/30",

    implementation: [
      "सार्वजनिक सचेतनामा जोड",
      "समुदायसँग सहकार्य",
      "स्वच्छता र वातावरणसम्बन्धी पहललाई प्रोत्साहन",
      "स्थानीय सहभागिताको विस्तार",
    ],

    impact: ["स्वच्छ समुदाय", "हरित सोच", "दीगो विकासप्रतिको ध्यान"],
  },

  {
    id: "06",
    year: "2028",
    title: "युवा, रोजगार र नयाँ अवसर",
    short: "युवाको ऊर्जा र क्षमतालाई स्थानीय भविष्यसँग जोड्ने।",
    description:
      "युवा केवल भविष्यका नागरिक होइनन्, आजकै परिवर्तनका साझेदार हुन्। सीप, जानकारी, उद्यमशीलता र नयाँ अवसरप्रति पहुँच बढाउने संवादलाई प्राथमिकता दिइएको छ।",

    Icon: BriefcaseBusiness,

    gradient: "from-amber-300 via-orange-500 to-red-600",

    glow: "bg-orange-500/30",

    implementation: [
      "युवाको सुझाव र आवश्यकता सुन्ने",
      "सीप तथा करियर जानकारी साझा गर्ने",
      "उद्यमशीलतासम्बन्धी सकारात्मक संवाद",
      "युवा सहभागितालाई प्रोत्साहन",
    ],

    impact: ["सीपको जानकारी", "करियर सचेतना", "युवा सहभागिता"],
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "जनताको आवाज",
    text: "पहिलो चरणमा नागरिक, युवा, किसान, महिला र समुदायको वास्तविक आवश्यकता सुन्ने।",
    Icon: Users,
  },

  {
    number: "02",
    title: "प्राथमिकता निर्धारण",
    text: "समस्या, सम्भावना र उपलब्ध स्रोतका आधारमा आवश्यक क्षेत्र पहिचान गर्ने।",
    Icon: Target,
  },

  {
    number: "03",
    title: "सहकार्य र योजना",
    text: "सम्बन्धित निकाय, विशेषज्ञ, समुदाय र सरोकारवालासँग सहकार्य गर्ने।",
    Icon: Landmark,
  },

  {
    number: "04",
    title: "पारदर्शी कार्यान्वयन",
    text: "सम्भव भएसम्म जानकारी, प्रगति र प्राथमिकताबारे सार्वजनिक संवाद कायम राख्ने।",
    Icon: ShieldCheck,
  },
];

export default function DevelopmentPlans() {
  const [activePlan, setActivePlan] = useState(null);

  return (
    <section className="relative isolate overflow-hidden bg-[#030712] py-24 text-white">
      {/* ============================= */}
      {/* ANIMATED BACKGROUND */}
      {/* ============================= */}

      <motion.div
        animate={{
          x: [0, 180, -100, 0],
          y: [0, 100, -80, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-72 -top-72 h-[750px] w-[750px] rounded-full bg-blue-600/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, -180, 100, 0],
          y: [0, 130, -70, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-72 top-20 h-[750px] w-[750px] rounded-full bg-violet-600/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [-100, 100, -40, -100],
          y: [0, -70, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-400px] left-[20%] h-[700px] w-[700px] rounded-full bg-emerald-500/15 blur-[170px]"
      />

      {/* Animated grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Particles */}

      {Array.from({ length: 28 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -80, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [0.7, 1.6, 0.7],
          }}
          transition={{
            duration: 4 + (index % 6),
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${(index * 13) % 100}%`,
            top: `${(index * 19) % 100}%`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-[1400px] px-5">
        {/* ============================= */}
        {/* HERO HEADER */}
        {/* ============================= */}

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
            duration: 0.9,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 backdrop-blur-xl">
            <motion.div
              animate={{
                rotate: [0, 12, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Sparkles size={17} className="text-yellow-300" />
            </motion.div>

            <span className="text-xs font-black tracking-[0.22em] text-slate-200">
              BISHRAMPUR MANIFESTO 2028
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black leading-[1.1] md:text-6xl lg:text-7xl">
            हाम्रो सपना केवल
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
              वाचा होइन,
            </span>
            <br />
            <span className="text-white">जिम्मेवारी हो।</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            विश्रामपुरको भविष्यका लागि हाम्रो सोच स्पष्ट छ। विकास जनताबाट सुरु
            हुन्छ, जनतासँगै अघि बढ्छ र सम्भव भएसम्म पारदर्शिता, सहकार्य तथा
            जिम्मेवारीका साथ कार्यान्वयनको दिशामा अगाडि बढ्नुपर्छ।
          </p>

          {/* Stats */}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              ["06", "मुख्य प्राथमिकता", Target],
              ["04", "कार्यान्वयन चरण", Construction],
              ["01", "साझा भविष्य", Sparkles],
            ].map(([number, label, Icon]) => (
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                key={label}
                className="flex min-w-[170px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl"
              >
                <div className="rounded-xl bg-white/[0.08] p-2.5">
                  <Icon size={19} className="text-cyan-300" />
                </div>

                <div className="text-left">
                  <p className="text-xl font-black">{number}</p>

                  <p className="text-xs text-slate-400">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============================= */}
        {/* PLAN CARDS */}
        {/* ============================= */}

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.Icon;
            const isActive = activePlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                }}
                className="group relative [perspective:1000px]"
              >
                {/* Glow */}

                <div
                  className={`absolute -inset-3 ${plan.glow} rounded-[30px] opacity-0 blur-3xl transition duration-700 group-hover:opacity-100`}
                />

                {/* Gradient Border */}

                <div
                  className={`relative overflow-hidden rounded-[27px] bg-gradient-to-br ${plan.gradient} p-[1px]`}
                >
                  <div className="relative min-h-[360px] overflow-hidden rounded-[26px] bg-[#080b18]/95 p-6 backdrop-blur-2xl">
                    {/* Shine */}

                    <motion.div
                      animate={{
                        x: ["-150%", "350%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="pointer-events-none absolute top-0 h-full w-[35%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />

                    {/* Number */}

                    <span className="absolute right-5 top-4 text-6xl font-black text-white/[0.05]">
                      {plan.id}
                    </span>

                    {/* Icon */}

                    <div className="relative">
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -left-2 -top-2 h-[74px] w-[74px] rounded-full border border-dashed border-white/20"
                      />

                      <motion.div
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-2xl`}
                      >
                        <Icon size={27} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}

                    <div className="relative mt-8">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-black tracking-[0.15em] text-slate-400">
                          PLAN {plan.id}
                        </span>

                        <span className="text-[10px] font-black tracking-[0.15em] text-cyan-300">
                          {plan.year}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-black leading-snug text-white">
                        {plan.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {plan.short}
                      </p>
                    </div>

                    {/* Impact Pills */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {plan.impact.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Button */}

                    <button
                      onClick={() => setActivePlan(isActive ? null : plan.id)}
                      className="relative mt-6 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold transition duration-300 hover:bg-white/[0.08]"
                    >
                      <span className="flex items-center gap-2">
                        <Eye size={16} className="text-cyan-300" />
                        योजना हेर्नुहोस्
                      </span>

                      <motion.div
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    {/* Expanded Content */}

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
                            duration: 0.4,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 border-t border-white/10 pt-5">
                            <p className="text-sm leading-7 text-slate-300">
                              {plan.description}
                            </p>

                            <div className="mt-5">
                              <p className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.15em] text-cyan-300">
                                <Construction size={15} />
                                कसरी कार्यान्वयन गर्ने?
                              </p>

                              <div className="space-y-3">
                                {plan.implementation.map((step, stepIndex) => (
                                  <motion.div
                                    key={step}
                                    initial={{
                                      opacity: 0,
                                      x: -15,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      delay: stepIndex * 0.08,
                                    }}
                                    className="flex gap-3 text-xs leading-6 text-slate-300"
                                  >
                                    <Check
                                      size={16}
                                      className="mt-1 shrink-0 text-emerald-300"
                                    />

                                    {step}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom animated line */}

                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${plan.gradient} transition-all duration-700 group-hover:w-full`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============================= */}
        {/* HOW WE IMPLEMENT */}
        {/* ============================= */}

        <div className="mt-28">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 text-cyan-300">
              <Construction size={18} />

              <span className="text-xs font-black tracking-[0.25em]">
                IMPLEMENTATION APPROACH
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black md:text-5xl">
              योजना केवल घोषणा होइन,
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                कार्यान्वयनको सोच पनि हो।
              </span>
            </h2>
          </motion.div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Connection line */}

            <div className="absolute left-[12%] right-[12%] top-14 hidden h-px bg-gradient-to-r from-cyan-400/0 via-violet-400/40 to-pink-400/0 lg:block" />

            {implementationSteps.map((step, index) => {
              const Icon = step.Icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                  className="relative"
                >
                  <div className="group relative rounded-[25px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30">
                    <div className="absolute right-5 top-4 text-5xl font-black text-white/[0.04]">
                      {step.number}
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 shadow-lg"
                    >
                      <Icon size={25} className="text-white" />
                    </motion.div>

                    <h3 className="mt-6 text-lg font-black">{step.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================= */}
        {/* VISION PANEL */}
        {/* ============================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="relative mt-28 overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] p-1 backdrop-blur-2xl"
        >
          <motion.div
            animate={{
              x: ["-30%", "130%"],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-[35%] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[33px] bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-violet-500/[0.1] p-8 md:p-14">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.5fr]">
              {/* Animated Icon */}

              <div className="flex justify-center">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-pink-500/20 blur-3xl" />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-[35px] bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 shadow-[0_0_70px_rgba(139,92,246,.35)]">
                    <Sparkles size={58} className="text-white" />
                  </div>

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-4 rounded-[42px] border border-dashed border-cyan-300/40"
                  />
                </motion.div>
              </div>

              {/* Content */}

              <div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <CircleCheck size={18} />

                  <span className="text-xs font-black tracking-[0.22em]">
                    OUR SHARED COMMITMENT
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                  विश्रामपुरको भविष्य
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                    हामी सबैको साझा जिम्मेवारी।
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                  जनताको विश्वास, युवाको ऊर्जा, किसानको मेहनत, महिलाको सहभागिता,
                  ज्येष्ठ नागरिकको अनुभव र सम्पूर्ण समुदायको सहकार्यबाट मात्र
                  दिगो र सकारात्मक परिवर्तनको आधार निर्माण हुन सक्छ।
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    ["जनताको आवाज", Users],
                    ["स्पष्ट प्राथमिकता", Target],
                    ["सहकार्य", HandshakeIcon],
                  ].map(([text, Icon]) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm"
                    >
                      <Icon size={17} className="text-cyan-300" />

                      {text}
                    </div>
                  ))}
                </div>

                <button className="group mt-9 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 px-7 py-4 font-black text-white shadow-[0_15px_50px_rgba(139,92,246,.3)] transition duration-300 hover:scale-105">
                  हाम्रो साझा यात्रा
                  <ArrowRight
                    size={20}
                    className="transition duration-300 group-hover:translate-x-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/*
  Small local icon component
*/

function HandshakeIcon({ size = 20, className = "" }) {
  return <Users size={size} className={className} />;
}
