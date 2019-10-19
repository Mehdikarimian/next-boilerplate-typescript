import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  localePath: 'public/locales',
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  whitelist: ['en', 'de'],
  keySeparator: false,
  detection: {
    order: ['querystring', 'cookie'],
    lookupCookie: 'lang',
    lookupQuerystring: 'lang',
    caches: ['cookie'],
    // cookieSecure: false
  },
});
NextI18NextInstance.i18n.languages = ['en', 'de'];

export default NextI18NextInstance;
export const {
  appWithTranslation,
  withTranslation,
} = NextI18NextInstance;