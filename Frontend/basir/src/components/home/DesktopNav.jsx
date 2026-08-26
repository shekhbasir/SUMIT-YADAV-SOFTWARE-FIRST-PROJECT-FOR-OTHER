import { menuItems } from "../../data/navbarData";
import { useLanguage } from "../../context/LanguageContext";

const navigationTargets = [
  "home",
  "about",
  "services",
  "development",
  "news",
  "media",
  "contact",
  "data",
];

export default function DesktopNav() {
  const { language } = useLanguage();

  const handleNavigation = (targetId) => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="hidden items-center gap-6 xl:flex">
      {menuItems[language].map((item, index) => {
        const targetId = navigationTargets[index];

        return (
          <button
            key={`${item}-${index}`}
            type="button"
            onClick={() => handleNavigation(targetId)}
            className={`group relative text-sm transition duration-300 ${
              index === 0 ? "text-lime-400" : "text-white hover:text-lime-300"
            }`}
          >
            {item}

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
          </button>
        );
      })}
    </nav>
  );
}
