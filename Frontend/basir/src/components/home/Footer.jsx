export default function Footer() {
  const quickLinks = [
    { label: "गृहपृष्ठ", href: "#home" },
    { label: "मेरो परिचय", href: "#about" },
    { label: "मेरो सेवा", href: "#services" },
    { label: "विकास योजना", href: "#development" },
    { label: "समाचार", href: "#news" },
    { label: "सम्पर्क", href: "#contact" },
  ];

  const exploreLinks = [
    { label: "Bishrampur Data", href: "#data" },
    { label: "वडा अनुसार जानकारी", href: "#wards" },
    { label: "निर्वाचन सम्बन्धी जानकारी", href: "#election" },
    { label: "विकास योजना", href: "#development" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (event, href) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#020806] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-lime-400/[0.05] blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.05] blur-[150px]" />

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />
      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* ================= BRAND ================= */}

          <div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-lime-400/20 blur-2xl" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-300/30 bg-lime-400 text-2xl shadow-[0_0_35px_rgba(163,230,53,.18)]">
                  🌳
                </div>
              </div>

              <div>
                <h2 className="text-lg font-black tracking-wide">
                  SUMIT YADAV
                </h2>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300">
                  For Chairperson 2084
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              Bishrampur Gaunpalika को समृद्धि, विकास र जनताको साथमा नयाँ सोचका
              साथ अघि बढ्ने प्रतिबद्धता।
            </p>

            {/* ================= SOCIAL ================= */}

            <div className="mt-7">
              <p className="mb-3 text-[9px] font-black uppercase tracking-[0.25em] text-slate-600">
                Connect With Us
              </p>

              <div className="flex gap-3">
                {/* Instagram */}

                <a
                  href="https://www.instagram.com/sumityadav4221?igsi=dTFrNGpkZm1wYnph"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,.15)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />

                    <circle cx="12" cy="12" r="4" />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* TikTok */}

                <a
                  href="https://vt.tiktok.com/ZSVALhycu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300/10 hover:text-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,.15)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                  >
                    <path d="M15.5 3c.35 2.08 1.55 3.38 3.5 3.58v3.08c-1.32.08-2.52-.3-3.48-1v6.35c0 3.34-2.26 5.99-5.72 5.99-3.22 0-5.3-2.36-5.3-5.06 0-3.08 2.5-5.37 5.52-5.37.32 0 .64.03.94.08v3.16a3.48 3.48 0 0 0-.88-.11c-1.42 0-2.5.98-2.5 2.26 0 1.15.88 2.12 2.25 2.12 1.58 0 2.47-1.18 2.47-2.76V3h3.2Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Status */}

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Official Campaign
              </span>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.15em]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-1">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                  className="group flex cursor-pointer items-center justify-between rounded-lg px-2 py-2.5 text-sm text-slate-500 transition-all duration-200 hover:bg-white/[0.03] hover:pl-3 hover:text-lime-300"
                >
                  <span>{link.label}</span>

                  <span className="text-xs opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.15em]">
              Explore
            </h3>

            <div className="mt-5 space-y-1">
              {exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                  className="group flex cursor-pointer items-center justify-between rounded-lg px-2 py-2.5 text-sm text-slate-500 transition-all duration-200 hover:bg-white/[0.03] hover:pl-3 hover:text-lime-300"
                >
                  <span>{link.label}</span>

                  <span className="text-xs opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.15em]">
              सम्पर्क गर्नुहोस्
            </h3>

            <div className="mt-5 space-y-2">
              {/* Location */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bishrampur+Gaunpalika+Bara+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer gap-3 rounded-xl border border-transparent p-3 text-sm text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-lime-300"
              >
                <span className="mt-0.5 text-lg text-lime-400">📍</span>

                <span>
                  Bishrampur Gaunpalika
                  <br />
                  Bara, Nepal
                </span>
              </a>

              {/* Phone */}

              <a
                href="tel:+9779800000000"
                className="group flex cursor-pointer gap-3 rounded-xl border border-transparent p-3 text-sm text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-lime-300"
              >
                <span className="mt-0.5 text-lg text-lime-400">☎</span>

                <span>+977 9800000000</span>
              </a>

              {/* Email */}

              <a
                href="mailto:info@example.com"
                className="group flex cursor-pointer gap-3 rounded-xl border border-transparent p-3 text-sm text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] hover:text-lime-300"
              >
                <span className="mt-0.5 text-lg text-lime-400">✉</span>

                <span className="break-all">info@example.com</span>
              </a>
            </div>

            {/* CTA */}

            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "#contact")}
              className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-lime-400/20 bg-lime-400/10 px-4 py-2.5 text-xs font-bold text-lime-300 transition-all duration-300 hover:border-lime-400/40 hover:bg-lime-400/15 hover:shadow-[0_0_30px_rgba(163,230,53,.1)]"
            >
              सम्पर्क गर्नुहोस्
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-slate-600">
            © 2084 Sumit Yadav Campaign. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            Bishrampur • Bara • Nepal
          </div>
        </div>
      </div>
    </footer>
  );
}
