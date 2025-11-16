import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "/images/flags/us.png" },
  { code: "ar", name: "العربية", flag: "/images/flags/ar.png" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en"); // default English
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Update currentLang after i18n loads
  useEffect(() => {
    if (i18n.language) {
      setCurrentLang(i18n.language);
    }
  }, [i18n.language]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setDropdownOpen(false);
  };

  // Safe fallback
  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative">
      {/* Current Language */}
      <button
        className="flex items-center gap-2 p-1 rounded hover:bg-gray-700"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="w-6 h-6 rounded-full"
        />
        <span>{currentLanguage.name}</span>
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <ul className="absolute mt-2 bg-gray-800 text-white rounded shadow-lg w-36 z-50">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-700 rounded ${
                lang.code === currentLang ? "bg-gray-600 font-semibold" : ""
              }`}
              onClick={() => handleChangeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full" />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
