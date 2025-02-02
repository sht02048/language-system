const LANGUAGES = [
  "English",
  "Korean",
  "Japanese",
  "Chinese (simplified)",
  "Chinese (traditional)",
] as const;

type AppLanguage = (typeof LANGUAGES)[number];

export { LANGUAGES, type AppLanguage };
