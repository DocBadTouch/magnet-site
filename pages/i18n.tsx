import 'react-i18next';
//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../public/locales/en/translation.json'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en';
    // custom resources type
    resources: {
      en: typeof en;
      
    };
  }
};
