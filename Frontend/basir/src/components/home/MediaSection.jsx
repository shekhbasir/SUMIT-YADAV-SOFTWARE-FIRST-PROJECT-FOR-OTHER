import { Play } from "lucide-react";

export default function MediaSection() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#081b11] p-5">
          <h2 className="text-2xl font-bold">मिडिया हाइलाइट्स</h2>

          <div className="relative mt-5 flex h-72 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
            <button className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-lime-400 bg-black/50">
              <Play fill="currentColor" />
            </button>

            <div className="absolute bottom-4 left-4">
              <p className="font-bold">मेरो सोच, मेरो प्रतिबद्धता</p>

              <p className="text-xs text-slate-400">
                Bishrampur को समृद्धिका लागि
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#081b11] p-5">
          <h2 className="text-2xl font-bold">भिडियोहरू</h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative h-32 rounded-xl bg-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={20} className="text-lime-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
