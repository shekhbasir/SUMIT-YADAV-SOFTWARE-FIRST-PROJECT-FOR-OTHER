import { useEffect, useState, useMemo } from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BellRing,
  CalendarDays,
  ExternalLink,
  Newspaper,
  Radio,
  RefreshCw,
  Sparkles,
  Wifi,
  AlertCircle,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/news/bishrampur?limit=60";

export default function NewsSection() {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [lastUpdated, setLastUpdated] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | FETCH LIVE NEWS
  |--------------------------------------------------------------------------
  */

  const fetchNews = async () => {
    try {
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("News request failed");
      }

      const data = await response.json();

      if (data.success && Array.isArray(data.news)) {
        setNews(data.news);

        setLastUpdated(new Date());
      } else {
        throw new Error("Invalid news data");
      }
    } catch (err) {
      console.error(err);

      setError("ताजा समाचार लोड गर्न सकिएन।");
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | FIRST LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    fetchNews();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | AUTO REFRESH EVERY 5 MINUTES
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const interval = setInterval(
      () => {
        fetchNews();
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Duplicate items for infinite marquee
  |--------------------------------------------------------------------------
  */

  const marqueeNews = useMemo(() => {
    if (!news.length) return [];

    return [...news, ...news, ...news];
  }, [news]);

  return (
    <section className="relative overflow-hidden bg-[#030712] py-20 text-white">
      {/* ============================================ */}
      {/* ANIMATED BACKGROUND */}
      {/* ============================================ */}

      <motion.div
        animate={{
          x: [0, 180, -100, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-60 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-60 top-20 h-[650px] w-[650px] rounded-full bg-violet-600/15 blur-[160px]"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.3) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.3) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1450px] px-5">
        {/* ============================================ */}
        {/* HEADER */}
        {/* ============================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            {/* Live badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-2 backdrop-blur-xl">
              <motion.span
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-emerald-400"
              />

              <Wifi size={14} className="text-emerald-300" />

              <span className="text-[11px] font-black tracking-[0.18em] text-emerald-200">
                LIVE OFFICIAL UPDATES
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              ताजा
              <span className="ml-3 bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                समाचार
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              विश्रामपुर गाउँपालिकाको आधिकारिक वेबसाइटबाट प्राप्त सूचना तथा
              समाचार। नयाँ अपडेट उपलब्ध हुँदा यहाँ live रूपमा देखाइन्छ।
            </p>
          </div>

          {/* Right information */}

          <div className="flex flex-wrap gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Newspaper size={17} className="text-cyan-300" />

                <div>
                  <p className="text-lg font-black">{news.length || "00"}+</p>

                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Official Updates
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={fetchNews}
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
            >
              <RefreshCw
                size={17}
                className="text-cyan-300 transition group-hover:rotate-180"
              />
              Refresh
            </button>
          </div>
        </motion.div>

        {/* ============================================ */}
        {/* STATUS */}
        {/* ============================================ */}

        {lastUpdated && (
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
            <Radio size={14} className="text-emerald-400" />
            Last synced:
            {lastUpdated.toLocaleTimeString()}
          </div>
        )}

        {/* ============================================ */}
        {/* LOADING */}
        {/* ============================================ */}

        {loading && (
          <div className="mt-12 flex min-h-[280px] items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400 border-t-transparent"
              >
                <Newspaper className="text-cyan-300" />
              </motion.div>

              <p className="mt-5 text-sm text-slate-400">
                Official news loading...
              </p>
            </div>
          </div>
        )}

        {/* ============================================ */}
        {/* ERROR */}
        {/* ============================================ */}

        {!loading && error && (
          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/[0.07] p-5 text-red-200">
            <AlertCircle size={20} />

            {error}
          </div>
        )}

        {/* ============================================ */}
        {/* INFINITE NEWS MARQUEE */}
        {/* ============================================ */}

        {!loading && !error && marqueeNews.length > 0 && (
          <div className="relative mt-12 overflow-hidden">
            {/* Left fade */}

            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-20 bg-gradient-to-r from-[#030712] to-transparent md:w-40" />

            {/* Right fade */}

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-20 bg-gradient-to-l from-[#030712] to-transparent md:w-40" />

            <motion.div
              className="flex w-max gap-5 py-5 hover:[animation-play-state:paused]"
              animate={{
                x: ["0%", "-33.333%"],
              }}
              transition={{
                duration: Math.max(120, news.length * 4),
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {marqueeNews.map((item, index) => (
                <NewsCard
                  key={`${item.id}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        )}

        {/* ============================================ */}
        {/* FOOTER */}
        {/* ============================================ */}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <BellRing size={15} className="text-violet-300" />
            Hover गरेर समाचार रोक्न सकिन्छ
          </div>

          <a
            href="https://bishrampurmun.gov.np/news-notices"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white"
          >
            सबै आधिकारिक समाचार हेर्नुहोस्
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| NEWS CARD
|--------------------------------------------------------------------------
*/

function NewsCard({ item, index }) {
  const gradients = [
    "from-cyan-500/20 via-blue-500/10 to-transparent",
    "from-violet-500/20 via-purple-500/10 to-transparent",
    "from-pink-500/20 via-rose-500/10 to-transparent",
    "from-emerald-500/20 via-teal-500/10 to-transparent",
    "from-amber-500/20 via-orange-500/10 to-transparent",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -12,
        scale: 1.025,
      }}
      className="group relative block w-[310px] shrink-0 md:w-[360px]"
    >
      {/* Glow */}

      <div
        className={`absolute -inset-2 rounded-[30px] bg-gradient-to-r ${gradient} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`}
      />

      {/* Card */}

      <div className="relative min-h-[220px] overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition duration-500 group-hover:border-white/25">
        {/* Animated light */}

        <motion.div
          animate={{
            x: ["-150%", "350%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="pointer-events-none absolute top-0 h-full w-[35%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
        />

        {/* Top */}

        <div className="relative flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 shadow-lg">
            <Newspaper size={20} className="text-white" />
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
            <Sparkles size={13} className="text-yellow-300" />
            OFFICIAL
          </div>
        </div>

        {/* Title */}

        <h3 className="relative mt-6 line-clamp-3 text-base font-black leading-7 text-white transition group-hover:text-cyan-200">
          {item.title}
        </h3>

        {/* Bottom */}

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CalendarDays size={14} />

            <span className="max-w-[180px] truncate">{item.date}</span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
            <ExternalLink size={16} className="text-cyan-300" />
          </div>
        </div>

        {/* Bottom gradient */}

        <div
          className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${gradient} transition-all duration-700 group-hover:w-full`}
        />
      </div>
    </motion.a>
  );
}
