import 'react-i18next';
// import all namespaces (for the default language, only)
import header from '/public/locales/en/header.json';
import main from '/public/locales/en/main.json';
import body from '/public/locales/en/body.json';
import commmon from '/public/locales/en/common.json';
import faq from '/public/locales/en/faq.json';
import roadmap from '/public/locales/en/roadmap.json';
import tokenomics from '/public/locales/en/tokenomics.json';
/*
// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    header: typeof header;
      main: typeof main;
      body: typeof body;
      common: typeof common;
      faq: typeof roadmap;
      tokenomics: typeof tokenomics;
  }
}
// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "en"
    // custom resources type
    resources: {
      header: typeof header;
      main: typeof main;
      body: typeof body;
      common: typeof common;
      faq: typeof roadmap;
      tokenomics: typeof tokenomics;
      
      
    };
  };
};*/