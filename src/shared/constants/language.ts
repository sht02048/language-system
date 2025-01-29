const LANGUAGES = [
  "English",
  "Korean",
  "Japanese",
  "Chinese (traditional)",
  "Chinese (simplified)",
] as const;

type AppLanguage = (typeof LANGUAGES)[number];

export { LANGUAGES, type AppLanguage };
