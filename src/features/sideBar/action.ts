"use server";

import { prisma } from "@/src/shared/api/prisma";
import { getVersion } from "@/src/shared/api/version";
import { AppLanguage } from "@/src/shared/constants";
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

  const translationInfo: [string, string | Record<string, string>][] =
    Object.entries(JSON.parse(String(file)));

  translationInfo.forEach(async ([key, value]) => {
    const translationKey = await findCreateTranslationKey({
      name: key,
      namespaceId: namespace.id,
    });

    if (typeof value === "string") {
      await prisma.translation.create({
        data: {
          value,
          language,
          translationKeyId: translationKey.id,
        },
      });

      return;
    }

    const subInfo: [string, string][] = Object.entries(value);

    subInfo.forEach(async ([subKey, nestedValue]) => {
      await prisma.translation.create({
        data: {
          value: nestedValue,
          translationKeyId: translationKey.id,
          subKey,
          language,
        },
      });
    });
  });
}
