import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLocale from "../locales/en/translation.json";
import zhLocale from "../locales/zh/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLocale,
    },
    zh: {
      translation: zhLocale,
    },
  },

  fallbackLng: "en",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
