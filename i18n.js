const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  localePath: 'public/locales',
  defaultLanguage: 'en',
  otherLanguages: ['de'],
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
module.exports = NextI18NextInstance;