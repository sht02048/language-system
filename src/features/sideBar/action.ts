"use server";

import { prisma } from "@/src/shared/api/prisma";
import { measureTextWidth } from "@/src/shared/lib";
import { AppLanguage } from "@/src/shared/constants";
import { getVersion } from "@/src/shared/api/version";
import languageMap from "@/src/shared/lib/languageMap";
import { findCreateNamespace } from "@/src/shared/api/namespace";
import { findCreateTranslationKey } from "@/src/shared/api/translationKey";

export async function saveTranslation(formData: FormData) {
  const version = await getVersion("4.3.1");
  const name = formData.get("namespace");
  const file = formData.get("file");
  const appLanguage = formData.get("language");

  if (name === null || file === null || appLanguage === null)
    throw new Error("namespace or file is null");

  const language = languageMap(String(appLanguage) as AppLanguage);

  const namespace = await findCreateNamespace({
    namespace: String(name),
    versionId: version.id,
  });

  // @ts-expect-error entries 타입 변경으로 인해 타입 에러 발생
  const translationInfo: [string, string | Record<string, string>][] =
    Object.entries(JSON.parse(String(file)));

  translationInfo.forEach(async ([key, value]) => {
    const translationKey = await findCreateTranslationKey({
      name: key,
      namespaceId: namespace.id,
    });

    // TODO subKey 제거로 함수 로직 변경 필요
    if (typeof value === "string") {
      const textWidth = measureTextWidth(value);

      await prisma.translation.create({
        data: {
          value,
          language,
          translationKeyId: translationKey.id,
          textWidth,
          isResolved: false,
        },
      });

      return;
    }
  });
}
