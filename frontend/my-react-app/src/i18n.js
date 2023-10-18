// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'Arriving 2023: Global standards based business reporting process pipelines.': 'Arriving 2023: Global standards based business reporting process pipelines.',
          // Add more translations here
        },
      },
      fr: {
        translation: {
          'Arriving 2023: Global standards based business reporting process pipelines.': 'À l’horizon 2023 : pipelines de processus de reporting commercial basés sur des normes mondiales.',
          // Add more translations here
        },
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
