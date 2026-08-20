import { menuItems } from "../../data/navbarData";
import { useLanguage } from "../../context/LanguageContext";

export default function DesktopNav() {
  const { language } = useLanguage();

  return (
    <nav className="hidden xl:flex items-center gap-6">
      {menuItems[language].map((item, index) => (
        <a
          key={item}
          href="#"
          className={`group relative text-sm transition duration-300 ${
            index === 0 ? "text-lime-400" : "text-white"
          }`}
        >
          {item}

          <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}
