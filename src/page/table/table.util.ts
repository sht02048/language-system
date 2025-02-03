import { language } from "@prisma/client";
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
  const textWidthByLanguage = allTranslations.reduce(
    (acc, translation) => {
      acc[translation.language] = translation.textWidth;
      return acc;
    },
    {} as Record<language, number>,
  );
  const resolvedByLanguage = allTranslations.reduce(
    (acc, translation) => {
      acc[translation.language] = translation.isResolved;
      return acc;
    },
    {} as Record<language, boolean>,
  );
  const subKey = allTranslations[0].subKey ?? "";

  const translations = Object.fromEntries(pivotedTranslations);

  const englishWidth = textWidthByLanguage.en;

  // TODO 타입 단언 고치기
  const textEntires = Object.entries(textWidthByLanguage) as [
    language,
    number,
  ][];

  const longerTexts = textEntires.reduce((acc, [textLanguage, width]) => {
    const isResolved = resolvedByLanguage[textLanguage];
    if (width > englishWidth && !isResolved) {
      acc.push(textLanguage);
    }
    return acc;
  }, [] as language[]);

  return {
    languageKey: translationKey.name,
    subKey,
    en: translations.en ?? "",
    ko: translations.ko ?? "",
    ja: translations.ja ?? "",
    zh: translations.zh ?? "",
    zhHant: translations.zhHant ?? "",
    longerTexts,
  };
}
