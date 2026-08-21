import { MapPin } from "lucide-react";

export default function WardStats({ wards = [] }) {
  const wardList = Array.isArray(wards) ? wards : [];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
          <MapPin size={21} />
        </div>

        <div>
          <h3 className="font-bold">Ward-wise Members</h3>

          <p className="text-xs text-slate-500">Movement members by ward</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {wardList.length > 0 ? (
          wardList.map((item, index) => (
            <div
              key={item.ward || index}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-xs text-slate-500">Ward</p>

              <p className="mt-1 text-xl font-black text-lime-400">
                {item.ward ?? item._id ?? "-"}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {item.count ?? 0} members
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full py-6 text-center text-sm text-slate-500">
            No ward data available.
          </div>
        )}
      </div>
    </div>
  );
}
