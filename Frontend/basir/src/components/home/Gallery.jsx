import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Pause,
  Play,
  X,
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
import photo31 from "../../assets/photo31.jpg";
import photo32 from "../../assets/photo32.jpg";
import photo33 from "../../assets/photo33.jpg";
import photo34 from "../../assets/photo34.jpg";
import photo35 from "../../assets/photo35.jpg";
import photo36 from "../../assets/photo36.jpg";
import photo37 from "../../assets/photo37.jpg";
import photo38 from "../../assets/photo38.jpg";
import photo39 from "../../assets/photo39.jpg";
import photo40 from "../../assets/photo40.jpg";
import photo41 from "../../assets/photo41.jpg";
import photo42 from "../../assets/photo42.jpg";
import photo43 from "../../assets/photo43.jpg";
import photo44 from "../../assets/photo44.jpg";
import photo45 from "../../assets/photo45.jpg";
import photo46 from "../../assets/photo46.jpg";
import photo47 from "../../assets/photo47.jpg";
import photo48 from "../../assets/photo48.jpg";
import photo49 from "../../assets/photo49.jpg";
import photo50 from "../../assets/photo50.jpg";

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
  photo31,
  photo32,
  photo33,
  photo34,
  photo35,
  photo36,
  photo37,
  photo38,
  photo39,
  photo40,
  photo41,
  photo42,
  photo43,
  photo44,
  photo45,
  photo46,
  photo47,
  photo48,
  photo49,
  photo50,
];

const photoTitles = [
  "जनतासँग भेटघाट",
  "सामाजिक सेवा",
  "युवा कार्यक्रम",
  "स्थानीय विकास",
  "समुदायसँग संवाद",
  "जनताको साथमा",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const selectedTitle =
    selectedIndex !== null
      ? photoTitles[selectedIndex % photoTitles.length]
      : "";

  /*
   * Duplicate the complete collection.
   * This creates a seamless infinite marquee.
   */
  const marqueePhotos = useMemo(() => [...photos, ...photos], []);

  const openPhoto = (index) => {
    setSelectedIndex(index % photos.length);
    setIsPaused(true);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
    setIsPaused(false);
  };

  const nextPhoto = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0;

      return (current + 1) % photos.length;
    });
  };

  const previousPhoto = () => {
    setSelectedIndex((current) => {
      if (current === null) return photos.length - 1;

      return (current - 1 + photos.length) % photos.length;
    });
  };

  /*
   * Keyboard controls for the HD viewer.
   */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePhoto();
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }

      if (event.key === "ArrowLeft") {
        previousPhoto();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#020b07] py-12 sm:py-16">
        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

          <div className="absolute right-[10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020b07_90%)]" />
        </div>

        <div className="relative mx-auto max-w-[1450px]">
          {/* ===================================================
              HEADER
          ==================================================== */}

          <div className="mb-8 flex flex-col gap-5 px-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-lime-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-300" />
                Official Gallery
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                फोटो <span className="text-lime-300">ग्यालरी</span>
              </h2>

              <p className="mt-2 max-w-xl text-sm text-slate-400">
                जनताको बीचमा भएका गतिविधिहरू, भेटघाट र Bishrampur का महत्वपूर्ण
                क्षणहरू।
              </p>
            </div>

            {/* Gallery status */}

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl">
                <p className="text-2xl font-black text-lime-300">50</p>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Photos
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPaused((value) => !value)}
                className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-lime-300 transition hover:border-lime-300/30 hover:bg-lime-300/10"
                aria-label={isPaused ? "Play gallery" : "Pause gallery"}
              >
                {isPaused ? (
                  <Play size={19} fill="currentColor" />
                ) : (
                  <Pause size={19} />
                )}
              </button>
            </div>
          </div>

          {/* ===================================================
              MOVING GALLERY
          ==================================================== */}

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left fade */}

            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#020b07] to-transparent sm:w-32" />

            {/* Right fade */}

            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#020b07] to-transparent sm:w-32" />

            {/* Top glow line */}

            <div className="pointer-events-none absolute left-10 right-10 top-0 z-20 h-px bg-gradient-to-r from-transparent via-lime-300/40 to-transparent" />

            {/* Marquee */}

            <div
              className={`gallery-marquee flex w-max gap-4 py-4 ${
                isPaused ? "gallery-marquee-paused" : ""
              }`}
            >
              {marqueePhotos.map((photo, index) => {
                const realIndex = index % photos.length;

                return (
                  <button
                    type="button"
                    key={`${index}-${photo}`}
                    onClick={() => openPhoto(realIndex)}
                    className="gallery-card group relative h-[190px] w-[250px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#081b11] text-left shadow-2xl transition-all duration-500 hover:border-lime-300/40 hover:shadow-[0_0_40px_rgba(163,255,18,.12)] sm:h-[220px] sm:w-[300px] lg:h-[240px] lg:w-[330px]"
                    aria-label={`Open photo ${realIndex + 1}`}
                  >
                    {/* Image */}

                    <img
                      src={photo}
                      alt={photoTitles[realIndex % photoTitles.length]}
                      loading={index < 8 ? "eager" : "lazy"}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image quality overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

                    {/* Hover glow */}

                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:bg-lime-300/5" />

                    {/* Number */}

                    <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-black/45 px-2 py-1 text-[9px] font-black tracking-[0.18em] text-white backdrop-blur-md">
                      {String(realIndex + 1).padStart(2, "0")}
                    </div>

                    {/* Open icon */}

                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/45 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                      <Maximize2 size={15} />
                    </div>

                    {/* Bottom content */}

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-lime-300">
                        SUMIT YADAV
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        {photoTitles[realIndex % photoTitles.length]}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        View in HD →
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              BOTTOM INFO
          ==================================================== */}

          <div className="mt-7 flex flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-bold text-slate-300">
                जनताको बीचमा, जनताको साथमा।
              </p>

              <p className="mt-1 text-[10px] text-slate-600">
                प्रत्येक फोटोमा एउटा कथा।
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-300" />
              Auto Gallery
              <span>•</span>
              Click Any Photo
            </div>
          </div>
        </div>

        {/* =====================================================
            MARQUEE CSS
        ====================================================== */}

        <style>{`
          .gallery-marquee {
            animation: galleryScroll 85s linear infinite;
            will-change: transform;
          }

          .gallery-marquee-paused {
            animation-play-state: paused;
          }

          @keyframes galleryScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 640px) {
            .gallery-marquee {
              animation-duration: 65s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-marquee {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* =======================================================
          FULL HD LIGHTBOX
      ======================================================== */}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-2xl sm:p-6"
          onClick={closePhoto}
        >
          {/* Top controls */}

          <div
            className="absolute left-4 right-4 top-4 z-30 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl">
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-lime-300">
                SUMIT YADAV • GALLERY
              </p>

              <p className="mt-1 text-xs text-white">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Download */}

              <a
                href={selectedPhoto}
                download={`sumit-yadav-photo-${selectedIndex + 1}.png`}
                onClick={(event) => event.stopPropagation()}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-lime-300/30 hover:bg-lime-300/10 hover:text-lime-300"
                aria-label="Download photo"
              >
                <Download size={18} />
              </a>

              {/* Close */}

              <button
                type="button"
                onClick={closePhoto}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-red-400/30 hover:bg-red-400/10"
                aria-label="Close photo"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Previous */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousPhoto();
            }}
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-lime-300/30 hover:bg-lime-300/10 hover:text-lime-300 sm:left-6 sm:h-14 sm:w-14"
            aria-label="Previous photo"
          >
            <ChevronLeft size={25} />
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-lime-300/30 hover:bg-lime-300/10 hover:text-lime-300 sm:right-6 sm:h-14 sm:w-14"
            aria-label="Next photo"
          >
            <ChevronRight size={25} />
          </button>

          {/* HD Image */}

          <div
            className="relative flex max-h-[86vh] max-w-[94vw] items-center justify-center sm:max-w-[88vw]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Image glow */}

            <div className="absolute inset-10 rounded-full bg-lime-300/10 blur-[100px]" />

            <img
              src={selectedPhoto}
              alt={selectedTitle}
              className="relative z-10 max-h-[78vh] max-w-full rounded-xl object-contain shadow-[0_30px_100px_rgba(0,0,0,.8)] sm:rounded-2xl"
            />

            {/* Caption */}

            <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-black/65 px-4 py-2.5 text-center backdrop-blur-xl sm:bottom-5">
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-lime-300">
                SUMIT YADAV
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                {selectedTitle}
              </p>
            </div>
          </div>

          {/* Keyboard hint */}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[9px] uppercase tracking-[0.18em] text-slate-600">
            ← → Navigate &nbsp; • &nbsp; ESC Close
          </div>
        </div>
      )}
    </>
  );
}
