export default function Gallery() {
  const photos = [
    "जनतासँग भेटघाट",
    "सामाजिक सेवा",
    "युवा कार्यक्रम",
    "स्थानीय विकास",
    "समुदायसँग संवाद",
    "जनताको साथमा",
  ];

  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <div className="rounded-2xl border border-white/10 bg-[#081b11] p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">फोटो ग्यालरी</h2>

            <p className="mt-1 text-sm text-slate-400">
              जनताको बीचमा भएका गतिविधिहरू
            </p>
          </div>

          <button className="text-sm text-lime-400">सबै हेर्नुहोस् →</button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {photos.map((photo) => (
            <div
              key={photo}
              className="group relative aspect-square overflow-hidden rounded-xl bg-white/5"
            >
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs">{photo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
