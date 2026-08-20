const news = [
  "जनताको स्वास्थ्य सम्बन्धी नयाँ पहल",
  "युवा तथा रोजगार सम्बन्धी कार्यक्रम",
  "स्थानीय विकास सम्बन्धी महत्वपूर्ण जानकारी",
];

export default function NewsSection() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <div className="rounded-2xl border border-white/10 bg-[#081b11] p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">ताजा समाचार</h2>

            <p className="mt-1 text-sm text-slate-400">
              पछिल्ला अपडेट तथा जानकारी
            </p>
          </div>

          <button className="text-sm text-lime-400">सबै हेर्नुहोस् →</button>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={item}
              className="rounded-xl border border-white/10 p-4"
            >
              <div className="h-36 rounded-lg bg-white/5" />

              <p className="mt-4 text-sm font-semibold">{item}</p>

              <p className="mt-2 text-xs text-slate-500">
                २०८१ जेठ {index + 10}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
