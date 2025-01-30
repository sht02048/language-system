import { getTranslationByTranslationKey } from "@/src/shared/api/translation";
import { TableLanguage } from "./table.type";

type TranslationKey = {
  id: string;
  createdAt: Date;
  name: string;
  namespaceId: string;
};

export async function pivotLanguage(
  translationKey: TranslationKey,
): Promise<TableLanguage> {
  const pivotedTranslations = (
    await getTranslationByTranslationKey(translationKey.id)
  ).map((translation) => {
    const translationLanguage = translation.language;

    return [[translationLanguage], translation.value];
  });

  const translations = Object.fromEntries(pivotedTranslations);

  return {
    languageKey: translationKey.name,
    en: translations?.en,
    ko: translations?.ko,
    ja: translations?.ja,
    zh: translations?.zh,
    zhHant: translations?.zh_Hant,
  };
}
