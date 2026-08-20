import { Quote } from "lucide-react";

const voices = [
  "युवा नेतृत्व, इमानदार सोच र काम गर्ने प्रतिबद्धता चाहिन्छ।",
  "भ्रष्टाचार विरुद्धको आवाजलाई हामी समर्थन गर्छौं।",
  "गरिब तथा विपन्नको लागि राम्रो काम हुनुपर्छ।",
  "युवाको लागि रोजगारी र अवसर सिर्जना हुनुपर्छ।",
];

export default function PublicVoice() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <h2 className="text-2xl font-bold md:text-3xl">जनताको आवाज</h2>

      <p className="mt-2 text-sm text-slate-400">
        जनताबाट आएको विश्वास र प्रतिक्रिया
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {voices.map((voice, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-[#081b11] p-5"
          >
            <Quote size={25} className="text-lime-400" />

            <p className="mt-4 text-sm leading-6 text-slate-300">{voice}</p>

            <p className="mt-5 text-xs text-slate-500">स्थानीय नागरिक</p>
          </div>
        ))}
      </div>
    </section>
  );
}
