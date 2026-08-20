import {
  UserRound,
  HeartPulse,
  Building2,
  Target,
  CalendarDays,
  Users,
  Phone,
} from "lucide-react";

const links = [
  ["मेरो परिचय", "उम्मेदवार परिचय", UserRound],
  ["मेरो सेवा", "जनताको सेवा", HeartPulse],
  ["विकास योजना", "विकासका योजना", Building2],
  ["Bishrampur Data", "स्थानीय तथ्याङ्क", Target],
  ["समाचार", "अपडेट तथा जानकारी", CalendarDays],
  ["कार्यक्रम", "आगामी कार्यक्रम", CalendarDays],
  ["सामाजिक गतिविधि", "हाम्रो काम", Users],
  ["सम्पर्क", "हामीसँग जोडिनुहोस्", Phone],
];

export default function QuickLinks() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-12">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-[#081a10] md:grid-cols-4 lg:grid-cols-8">
        {links.map(([title, subtitle, Icon]) => (
          <button
            key={title}
            className="border-b border-r border-white/10 p-5 text-center transition hover:bg-lime-400/10"
          >
            <Icon size={27} className="mx-auto text-lime-400" />

            <p className="mt-3 text-sm font-semibold">{title}</p>

            <p className="mt-1 text-[10px] text-slate-500">{subtitle}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
