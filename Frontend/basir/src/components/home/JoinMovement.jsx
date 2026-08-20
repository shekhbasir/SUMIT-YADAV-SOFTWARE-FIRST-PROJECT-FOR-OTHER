export default function JoinMovement() {
  return (
    <section className="border-y border-lime-400/20 bg-lime-400/5">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-7 px-5 py-12 md:flex-row">
        <div>
          <h2 className="text-3xl font-black">परिवर्तनका लागि हातेमालो गरौं</h2>

          <p className="mt-2 text-slate-400">
            समृद्ध, सुशासनयुक्त र भ्रष्टाचार मुक्त Bishrampur हाम्रो लक्ष्य हो।
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-lime-400 px-7 py-3 font-bold text-black">
            स्वयंसेवक बन्नुहोस्
          </button>

          <button className="rounded-xl border border-lime-400/50 px-7 py-3">
            सहयोग गर्नुहोस्
          </button>
        </div>
      </div>
    </section>
  );
}
