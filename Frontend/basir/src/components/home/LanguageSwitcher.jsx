import { Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-2 text-sm transition ${
          language === "en" ? "bg-lime-400 text-black" : "text-white"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("ne")}
        className={`px-3 py-2 text-sm transition ${
          language === "ne" ? "bg-lime-400 text-black" : "text-white"
        }`}
      >
        नेपाली
      </button>

      <div className="flex items-center px-2">
        <Globe size={16} />
      </div>
    </div>
  );
}
