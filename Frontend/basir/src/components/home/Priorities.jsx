import { Target, HeartPulse, GraduationCap, Leaf } from "lucide-react";

const priorities = [
  ["भ्रष्टाचार विरुद्ध", "पारदर्शिता, जवाफदेहिता र सुशासन", Target],
  ["गरिब र विपन्नको साथ", "हरेक नागरिकको समान अधिकार", HeartPulse],
  ["युवाको भविष्य", "शिक्षा, सीप र रोजगारीको अवसर", GraduationCap],
  ["स्वास्थ्य सेवा", "गुणस्तरीय स्वास्थ्य सेवा सबैका लागि", HeartPulse],
  ["शिक्षा र विद्यालय", "स्तरीय शिक्षा, उज्ज्वल भविष्य", GraduationCap],
  ["वातावरण संरक्षण", "हरित विकास, स्वच्छ Bishrampur", Leaf],
];

export default function Priorities() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <h2 className="text-2xl font-bold md:text-3xl">म केका लागि लड्दै छु?</h2>

      <p className="mt-2 text-sm text-slate-400">
        जनताको प्राथमिकता नै हाम्रो प्राथमिकता
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {priorities.map(([title, text, Icon]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-[#081b11] p-5 hover:border-lime-400/40"
          >
            <Icon size={28} className="text-lime-400" />

            <h3 className="mt-4 font-bold">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>

            <p className="mt-4 text-lime-400">→</p>
          </div>
        ))}
      </div>
    </section>
  );
}
