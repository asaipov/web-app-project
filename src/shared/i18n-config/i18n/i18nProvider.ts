import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru"], // Поддерживаемые языки
    fallbackLng: "ru", // Язык по умолчанию
    debug: true, // Для отладки
    interpolation: {
      escapeValue: false, // React сам экранирует HTML
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам перевода
    },
  });

export default i18n;
