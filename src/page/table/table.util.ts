import { language } from "@prisma/client";

import { TableLanguage } from "@/src/entities/table";
import { PrismaTranslation } from "@/src/shared/types";
import { getTranslationByTranslationKey } from "@/src/shared/api/translation";

import { NO_SUB_KEY } from "./table.consts";

type TranslationKey = {
  id: string;
  createdAt: Date;
  name: string;
  namespaceId: string;
};

export async function pivotLanguage(
  translationKey: TranslationKey
): Promise<TableLanguage[]> {
  const allTranslations = await getTranslationByTranslationKey(
    translationKey.id
  );

  const result = allTranslations.reduce<
    Record<
      string,
      Record<
        language,
        { value: string; textWidth: number; isResolved: boolean }
      >
    >
  >(
    (
      acc,
      { language, subKey, value, textWidth, isResolved }: PrismaTranslation
    ) => {
      const key = subKey || NO_SUB_KEY;

      acc[key] = {
        ...(acc[key] ?? {}),
        [language]: { value, textWidth, isResolved },
      };

      return acc;
    },
    {}
  );

  return Object.entries(result).map(([subKey, info]) => {
    const key = subKey === NO_SUB_KEY ? "" : subKey;
    const englishWidth = info.en.textWidth;

    const longerTexts = Object.entries(info).reduce((acc, [language, data]) => {
      const { textWidth, isResolved } = data;

      if (textWidth > englishWidth && !isResolved) {
        acc.push(language);
      }

      return acc;
    }, [] as language[]);

    return {
      languageKey: translationKey.name,
      subKey: key,
      en: info.en?.value ?? "",
      ko: info.ko?.value ?? "",
      ja: info.ja?.value ?? "",
      zh: info.zh?.value ?? "",
      zhHant: info.zhHant?.value ?? "",
      longerTexts,
    };
  }, {});
}
