const years = ["2018", "2019", "2020", "2021", "2022", "2023"];

export default function Journey() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold md:text-3xl">
          मेरो यात्रा, मेरो परिचय
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          जनताको बीचबाट सुरु भएको निरन्तर यात्रा
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[.8fr_1.5fr]">
        <div>
          <p className="leading-8 text-slate-300">
            म एक युवा, इमानदार र कर्मठ सामाजिक अभियन्ता हुँ। Bishrampur
            गाउँपालिकाको विकास, सुशासन र जनताको अधिकारका लागि निरन्तर काम गर्दै
            आएको छु।
          </p>

          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li>✓ भ्रष्टाचार विरुद्ध निरन्तर लडाइँ</li>
            <li>✓ गरिब तथा विपन्नको साथ</li>
            <li>✓ युवालाई रोजगारी र अवसर</li>
            <li>✓ समुदाय विकासमा सक्रिय भूमिका</li>
          </ul>

          <button className="mt-7 rounded-xl bg-lime-400 px-6 py-3 font-bold text-black">
            पूरा यात्रा पढ्नुहोस् →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {years.map((year) => (
            <div
              key={year}
              className="min-h-48 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4"
            >
              <span className="text-sm font-bold text-lime-400">{year}</span>

              <div className="mt-12 h-16 rounded-xl bg-white/5" />

              <p className="mt-3 text-xs text-slate-300">
                सामाजिक सेवा तथा जनताको साथमा
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
