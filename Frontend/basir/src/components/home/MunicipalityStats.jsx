import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  UserRound,
  HeartPulse,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Home,
  GraduationCap,
  BookOpen,
  Building2,
  Map,
  LandPlot,
  CalendarDays,
  Languages,
  Gauge,
  School,
  Landmark,
  Globe2,
  Flag,
  MapPinned,
  Info,
  ChartNoAxesCombined,
  PersonStanding,
  House,
  Route,
  Layers3,
  FileText,
  BriefcaseBusiness,
  Network,
  BadgeInfo,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/*
  DATA NOTES
  ---------------------------------------------------------
  Official Bishrampur Municipality profile:
  - Population: 28,190
  - Wards: 5
  - Area: 19.81 km²
  - Established: 2074 BS
  - Included former areas: Chhatwa, Barainiya, Bishrampur, Itiyahi

  2021 Census-based data:
  - Population: 24,892
  - Male: 13,145
  - Female: 11,747
  - Households: 3,886
  - Literacy: 64.55%
  - Male literacy: 74.06%
  - Female literacy: 53.91%
  - Density: 1,257/km²
  - Average household size: 6.41
*/

const records = [
  {
    value: "28,190",
    label: "आधिकारिक जनसंख्या",
    category: "आधिकारिक प्रोफाइल",
    Icon: Users,
    featured: true,
  },
  {
    value: "24,892",
    label: "जनसंख्या (2021 Census)",
    category: "जनगणना",
    Icon: ChartNoAxesCombined,
  },
  {
    value: "13,145",
    label: "पुरुष जनसंख्या",
    category: "2021 Census",
    Icon: UserRound,
  },
  {
    value: "11,747",
    label: "महिला जनसंख्या",
    category: "2021 Census",
    Icon: Users,
  },
  {
    value: "3,886",
    label: "कुल घरधुरी",
    category: "2021 Census",
    Icon: Home,
  },
  {
    value: "6.41",
    label: "औसत परिवार आकार",
    category: "2021 Census",
    Icon: House,
  },
  {
    value: "64.55%",
    label: "कुल साक्षरता",
    category: "2021 Census",
    Icon: BookOpen,
  },
  {
    value: "74.06%",
    label: "पुरुष साक्षरता",
    category: "2021 Census",
    Icon: GraduationCap,
  },
  {
    value: "53.91%",
    label: "महिला साक्षरता",
    category: "2021 Census",
    Icon: GraduationCap,
  },
  {
    value: "1,257",
    label: "जनघनत्व प्रति km²",
    category: "2021 Census",
    Icon: Gauge,
  },
  {
    value: "19.81",
    label: "क्षेत्रफल km²",
    category: "भौगोलिक",
    Icon: LandPlot,
    featured: true,
  },
  {
    value: "5",
    label: "वडा संख्या",
    category: "प्रशासन",
    Icon: MapPinned,
    featured: true,
  },
  {
    value: "2074",
    label: "स्थापना वर्ष",
    category: "नेपाल संवत्",
    Icon: CalendarDays,
  },
  {
    value: "मधेश",
    label: "प्रदेश",
    category: "भौगोलिक",
    Icon: Map,
  },
  {
    value: "बारा",
    label: "जिल्ला",
    category: "भौगोलिक",
    Icon: MapPin,
  },
  {
    value: "नेपाल",
    label: "देश",
    category: "राष्ट्रिय",
    Icon: Flag,
  },
  {
    value: "छतवा",
    label: "समावेश पूर्व क्षेत्र",
    category: "स्थानीय इतिहास",
    Icon: Layers3,
  },
  {
    value: "बरैनिया",
    label: "समावेश पूर्व क्षेत्र",
    category: "स्थानीय इतिहास",
    Icon: Layers3,
  },
  {
    value: "विश्रामपुर",
    label: "समावेश पूर्व क्षेत्र",
    category: "स्थानीय इतिहास",
    Icon: Layers3,
  },
  {
    value: "इटियाही",
    label: "समावेश पूर्व क्षेत्र",
    category: "स्थानीय इतिहास",
    Icon: Layers3,
  },
  {
    value: "5",
    label: "प्रशासनिक वडा कार्यालय",
    category: "स्थानीय प्रशासन",
    Icon: Building2,
  },
  {
    value: "12",
    label: "विद्यालय (उपलब्ध शिक्षा डेटा)",
    category: "शिक्षा",
    Icon: School,
  },
  {
    value: "3",
    label: "माध्यमिक विद्यालय",
    category: "शिक्षा डेटा",
    Icon: GraduationCap,
  },
  {
    value: "1",
    label: "+2 कार्यक्रम",
    category: "शिक्षा डेटा",
    Icon: BookOpen,
  },
  {
    value: "5,660",
    label: "वडा नं. १ जनसंख्या",
    category: "स्थानीय वडा डेटा",
    Icon: Users,
  },
  {
    value: "4,107",
    label: "वडा नं. ३ जनसंख्या",
    category: "स्थानीय वडा डेटा",
    Icon: Users,
  },
  {
    value: "206.0",
    label: "लगभग जनसंख्या / km² × 10",
    category: "क्षेत्रीय अनुपात",
    Icon: Gauge,
  },
  {
    value: "111.9",
    label: "Sex Ratio",
    category: "2021 Census",
    Icon: PersonStanding,
  },
  {
    value: "23,785",
    label: "जनसंख्या (2011)",
    category: "तुलनात्मक डेटा",
    Icon: ChartNoAxesCombined,
  },
  {
    value: "3,395",
    label: "घरधुरी (2011)",
    category: "तुलनात्मक डेटा",
    Icon: Home,
  },
  {
    value: "0.44%",
    label: "वार्षिक जनसंख्या वृद्धि",
    category: "Census-based estimate",
    Icon: ChartNoAxesCombined,
  },
  {
    value: "वडा १",
    label: "स्थानीय प्रशासनिक इकाई",
    category: "वडा",
    Icon: Landmark,
  },
  {
    value: "वडा २",
    label: "स्थानीय प्रशासनिक इकाई",
    category: "वडा",
    Icon: Landmark,
  },
  {
    value: "वडा ३",
    label: "स्थानीय प्रशासनिक इकाई",
    category: "वडा",
    Icon: Landmark,
  },
  {
    value: "वडा ४",
    label: "स्थानीय प्रशासनिक इकाई",
    category: "वडा",
    Icon: Landmark,
  },
  {
    value: "वडा ५",
    label: "स्थानीय प्रशासनिक इकाई",
    category: "वडा",
    Icon: Landmark,
  },
  {
    value: "बारा",
    label: "जिल्ला प्रशासनसँग सम्बन्ध",
    category: "प्रशासन",
    Icon: Network,
  },
  {
    value: "मधेश",
    label: "प्रदेशीय संरचना",
    category: "प्रशासन",
    Icon: Globe2,
  },
  {
    value: "स्थानीय",
    label: "सरकारको तह",
    category: "शासन संरचना",
    Icon: Building2,
  },
  {
    value: "गाउँपालिका",
    label: "स्थानीय निकाय प्रकार",
    category: "प्रशासन",
    Icon: Landmark,
  },
  {
    value: "2083/84",
    label: "हाल उपलब्ध नीति तथा कार्यक्रम",
    category: "सार्वजनिक दस्तावेज",
    Icon: FileText,
  },
  {
    value: "डिजिटल",
    label: "आधिकारिक सूचना पहुँच",
    category: "सार्वजनिक सेवा",
    Icon: BriefcaseBusiness,
  },
];

function RecordCard({ record, index, reducedMotion }) {
  const { Icon } = record;

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 26,
              scale: 0.96,
            }
      }
      whileInView={
        reducedMotion
          ? {}
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: reducedMotion ? 0 : Math.min(index * 0.025, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reducedMotion
          ? {}
          : {
              y: -7,
              transition: {
                duration: 0.2,
              },
            }
      }
      className="group relative min-w-[270px] flex-[0_0_270px] sm:min-w-[290px] sm:flex-[0_0_290px] lg:min-w-[310px] lg:flex-[0_0_310px]"
    >
      <div
        className={[
          "relative h-full overflow-hidden rounded-[24px] border p-5",
          "transition-all duration-300",
          record.featured
            ? "border-lime-300/30 bg-gradient-to-br from-lime-400/[0.11] via-[#0b2015]/95 to-[#06120b]"
            : "border-white/[0.08] bg-[#07170f]/90",
          "group-hover:border-lime-300/35",
          "group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.38)]",
        ].join(" ")}
      >
        {/* Ambient hover light */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div
            className={[
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
              "transition-all duration-300",
              record.featured
                ? "border-lime-300/30 bg-lime-300/10 text-lime-300"
                : "border-white/10 bg-white/[0.035] text-slate-300",
              "group-hover:scale-110 group-hover:text-lime-300",
            ].join(" ")}
          >
            <Icon size={22} strokeWidth={1.8} />
          </div>

          <span className="rounded-full border border-white/[0.07] bg-black/10 px-2.5 py-1 text-[10px] font-medium tracking-wide text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative z-10 mt-7">
          <p
            className={[
              "font-bold tracking-tight",
              record.value.length > 9
                ? "text-xl sm:text-2xl"
                : "text-3xl sm:text-[2rem]",
              record.featured ? "text-lime-200" : "text-white",
            ].join(" ")}
          >
            {record.value}
          </p>

          <p className="mt-2 min-h-[40px] text-sm font-medium leading-5 text-slate-200">
            {record.label}
          </p>

          <div className="mt-5 flex items-center gap-2 text-[11px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300/80" />
            {record.category}
          </div>
        </div>

        <div className="relative z-10 mt-4 h-px w-full bg-gradient-to-r from-lime-300/20 via-white/10 to-transparent transition-all duration-300 group-hover:from-lime-300/50" />
      </div>
    </motion.article>
  );
}

export default function MunicipalityStats() {
  const scrollRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const scrollRecords = (direction) => {
    if (!scrollRef.current) return;

    const amount =
      scrollRef.current.clientWidth > 900
        ? scrollRef.current.clientWidth * 0.72
        : scrollRef.current.clientWidth * 0.86;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#03120b] py-16 text-white sm:py-20 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-[420px] w-[420px] rounded-full bg-lime-400/[0.035] blur-[130px]" />

        <div className="absolute bottom-0 right-[5%] h-[360px] w-[360px] rounded-full bg-emerald-400/[0.025] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(163,255,18,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,18,.55) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#03120b_88%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-lime-300">
            <Sparkles size={14} />
            BISHRAMPUR DATA OVERVIEW
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            विश्रामपुर गाउँपालिकाका
            <span className="block text-lime-300">महत्वपूर्ण तथ्य र विवरण</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            जनसंख्या, भूगोल, शिक्षा, प्रशासन र स्थानीय संरचनासम्बन्धी महत्वपूर्ण
            सार्वजनिक जानकारी एकै स्थानमा।
          </p>
        </motion.div>

        {/* Top highlight cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["28,190", "आधिकारिक प्रोफाइल जनसंख्या", Users],
            ["19.81 km²", "कुल क्षेत्रफल", LandPlot],
            ["5", "प्रशासनिक वडा", MapPinned],
            ["64.55%", "2021 Census Literacy", GraduationCap],
          ].map(([value, label, Icon], index) => (
            <motion.div
              key={label}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              whileInView={
                reducedMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={reducedMotion ? {} : { y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#081b11]/90 p-5 transition-colors hover:border-lime-300/25"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-lime-300/[0.05] blur-2xl transition-all group-hover:bg-lime-300/[0.1]" />

              <Icon
                size={21}
                className="relative text-lime-300 transition-transform duration-300 group-hover:scale-110"
              />

              <div className="relative mt-5 text-3xl font-black text-white">
                {value}
              </div>

              <p className="relative mt-1 text-sm text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Section controls */}
        <div className="mt-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-lime-300">
              <BadgeInfo size={17} />
              40+ Public Information Records
            </div>

            <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              सबै तथ्यहरू हेर्नुहोस्
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              कार्डमा cursor राख्दा subtle lift, glow र icon animation देखिन्छ।
              बाँया वा दाँया button प्रयोग गरेर सम्पूर्ण records browse गर्न
              सकिन्छ।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollRecords("left")}
              aria-label="अघिल्लो विवरणहरू"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-white transition-all hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300 hover:text-[#03120b] focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-[#03120b]"
            >
              <ArrowLeft
                size={20}
                className="transition-transform group-hover:-translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollRecords("right")}
              aria-label="पछिल्ला विवरणहरू"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/30 bg-lime-300 text-[#03120b] shadow-[0_12px_40px_rgba(163,255,18,0.16)] transition-all hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 focus:ring-offset-[#03120b]"
            >
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Horizontal record system */}
        <div className="relative mt-8">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 pt-2 [scrollbar-width:thin] [scrollbar-color:#2b4a31_transparent]"
          >
            {records.map((record, index) => (
              <div key={`${record.label}-${index}`} className="snap-start">
                <RecordCard
                  record={record}
                  index={index}
                  reducedMotion={reducedMotion}
                />
              </div>
            ))}

            <div className="min-w-[1px] flex-[0_0_1px]" />
          </div>

          <div className="pointer-events-none absolute bottom-5 left-0 top-0 w-8 bg-gradient-to-r from-[#03120b] to-transparent sm:w-12" />

          <div className="pointer-events-none absolute bottom-5 right-0 top-0 w-8 bg-gradient-to-l from-[#03120b] to-transparent sm:w-12" />
        </div>

        {/* Bottom information strip */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#06150d]/90 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="border-b border-white/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-300/10 text-lime-300">
                <Info size={21} />
              </div>

              <div>
                <p className="font-semibold">डेटा स्रोत सम्बन्धी जानकारी</p>

                <p className="text-xs text-slate-500">
                  Official profile + census-based public data
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
              विभिन्न सरकारी तथा census-based स्रोतहरूमा जनसंख्याको वर्ष र
              प्रकाशन समय फरक हुन सक्छ। त्यसैले प्रत्येक महत्वपूर्ण आँकडालाई
              यसको स्रोत वा dataset category सहित प्रस्तुत गरिएको छ।
            </p>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Geographic Context
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {["नेपाल", "मधेश प्रदेश", "बारा जिल्ला", "विश्रामपुर"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="rounded-full border border-lime-300/15 bg-lime-300/[0.06] px-3 py-1.5 text-xs font-medium text-lime-200">
                      {item}
                    </span>

                    {index < 3 && (
                      <ChevronRight size={14} className="text-slate-600" />
                    )}
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <Route size={14} />
              स्थानीय जानकारीका लागि संरचित digital overview
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
