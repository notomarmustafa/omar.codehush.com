import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import ar from "./ar.json";

i18n
  .use(LanguageDetector)       // detect browser/device language
  .use(initReactI18next)       // integrate with React
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",          // default to English if language not found
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"], // detection order
      caches: [],                // do not save user language in cookies/localStorage
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false,       // react already escapes by default
    },
  });

export default i18n;
