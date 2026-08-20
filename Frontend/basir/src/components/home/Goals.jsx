const goals = [
  ["समृद्धि", "80%"],
  ["शिक्षा", "90%"],
  ["स्वास्थ्य", "85%"],
  ["रोजगारी", "75%"],
];

export default function Goals() {
  return (
    <section className="mx-auto max-w-[1300px] px-5 py-10">
      <div className="rounded-2xl border border-white/10 bg-[#081b11] p-6">
        <h2 className="text-2xl font-bold">हाम्रो लक्ष्य</h2>

        <div className="mt-7 grid gap-6 md:grid-cols-4">
          {goals.map(([name, percent]) => (
            <div key={name}>
              <div className="flex justify-between text-sm">
                <span>{name}</span>

                <span className="text-lime-400">{percent}</span>
              </div>

              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-lime-400"
                  style={{ width: percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
