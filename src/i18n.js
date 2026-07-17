import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import de from "./locales/de.json";

// Swiss German for the website = Standard German with Swiss spelling (ss, not ß),
// under the `de` resource. `de-CH` and any `de-*` variant fall back to `de`.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    nonExplicitSupportedLngs: true, // de-CH, de-DE ... → de
    load: "languageOnly", // en-US → en, de-CH → de
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      // Remember the user's manual choice first, then fall back to the browser.
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "buez_lang",
      caches: ["localStorage"],
    },
  });

export default i18n;
