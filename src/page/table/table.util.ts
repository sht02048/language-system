import { TableLanguage } from "@/src/entities/table";
import { getTranslationByTranslationKey } from "@/src/shared/api/translation";

type TranslationKey = {
  id: string;
  createdAt: Date;
  name: string;
  namespaceId: string;
};

export async function pivotLanguage(
  translationKey: TranslationKey,
): Promise<TableLanguage> {
  const allTranslations = await getTranslationByTranslationKey(
    translationKey.id,
  );
  const pivotedTranslations = allTranslations.map((translation) => {
    const translationLanguage = translation.language;

    return [[translationLanguage], translation.value];
  });
  const subKey = allTranslations[0].subKey ?? "";

  const translations = Object.fromEntries(pivotedTranslations);

  return {
    languageKey: translationKey.name,
    subKey,
    en: translations.en ?? "",
    ko: translations.ko ?? "",
    ja: translations.ja ?? "",
    zh: translations.zh ?? "",
    zhHant: translations.zhHant ?? "",
  };
}
