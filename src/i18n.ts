import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome cats"
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать котики"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
