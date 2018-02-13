import enTranslations from './EN.json';
import esTranslations from './ES.json';

const selectorGetLanguage = () => 'es'.toUpperCase();

export const translations = key => {
  const lang = selectorGetLanguage();
  switch (lang) {
    case 'EN':
      return enTranslations[key];
    case 'ES':
      return esTranslations[key];
    default:
      return enTranslations[key];
  }
};
