const plans = [
  ["एकीकृत सडक निर्माण", "सबै वडालाई सुरक्षित सडक सञ्जालसँग जोड्ने"],
  ["स्वास्थ्य चौकी सुधार", "गुणस्तरीय स्वास्थ्य सेवा विस्तार"],
  ["शिक्षा पूर्वाधार", "आधुनिक विद्यालय र गुणस्तरीय शिक्षा"],
  ["सिँचाइ योजना", "कृषिमा आधुनिक सिँचाइ प्रणाली"],
];

export default function DevelopmentPlans() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <h2 className="text-2xl font-bold md:text-3xl">हाम्रो विकास योजना</h2>

      <p className="mt-2 text-sm text-slate-400">
        Bishrampur को भविष्यका लागि ठोस योजना
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map(([title, text]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-[#081b11] p-4"
          >
            <div className="h-32 rounded-xl bg-white/5" />

            <h3 className="mt-4 font-bold">{title}</h3>

            <p className="mt-2 text-sm text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
