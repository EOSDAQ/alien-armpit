import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

// follow ISO 3166-1 alpha2 code
const locales = ['ko', 'en'/*, 'cn', 'jp'*/]

i18n
  .use(Backend)
  .use(LanguageDetector)  
  .use(reactI18nextModule)
  .init({
    whitelist: locales,
    fallbackLng: 'en',
    defaultNS: 'main',
    ns: ['main'],
    backend: {
      loadPath: '/locale/{{lng}}/{{ns}}.json',
    },
    react: {
      wait: true,
    }
  });

export default i18n;
