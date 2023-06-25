export enum Language {
  fi = "fi",
  en = "en",
}

export const defaultLanguage = Language.fi;

export const languageNames = {
  fi: "Suomi",
  en: "English",
} as const;

export const translations = {
  fi: {
    vastavalo: "Kameraseura Vastavalo",
    membership: "Jäsenyys",
    darkroom: "Pimiö",
    people: "Ihmiset",
    links: "Linkit",
  },
  en: {
    vastavalo: "Camera Club Vastavalo",
    membership: "Membership",
    darkroom: "Darkroom",
    people: "People",
    links: "Links",
  },
} as const;

export function isLanguage(lang: unknown): lang is Language {
  return Object.values(Language).includes(lang as Language);
}

export function getLanguageFromUrl(url: URL) {
  const [_, lang] = url.pathname.split("/");
  return isLanguage(lang) ? lang : defaultLanguage;
}
