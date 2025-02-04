"use server";

import {
  createManyNamespaces,
  findCreateNamespace,
} from "@/src/shared/api/namespace";
import { measureTextWidth } from "@/src/shared/lib";
import { createVersion } from "@/src/shared/api/version";
import { NewVersionFormType } from "@/src/entities/newVersion";
import { createTranslation } from "@/src/shared/api/translation";
import { findCreateTranslationKey } from "@/src/shared/api/translationKey";

export async function saveVersion(values: NewVersionFormType) {
  const { version, versionFile } = values;

  const newVersion = await createVersion(version);

  const namespaces = Array.from(
    versionFile.reduce((acc, { namespace }) => {
      acc.add(namespace);

      return acc;
    }, new Set<string>())
  );

  await createManyNamespaces({
    namespaces,
    versionId: newVersion.id,
  });

  versionFile.forEach(async (row) => {
    const { key, namespace, en, ko, ja, zh, zhHant } = row;
    const versionId = newVersion?.id;

    if (versionId === undefined) return;

    const newNamespace = await findCreateNamespace({ namespace, versionId });

    const newTranslationKey = await findCreateTranslationKey({
      name: key,
      namespaceId: newNamespace.id,
    });

    const enWidth = measureTextWidth(en);
    const koWidth = measureTextWidth(ko);
    const jaWidth = measureTextWidth(ja);
    const zhWidth = measureTextWidth(zh);
    const zhHantWidth = measureTextWidth(zhHant);

    await createTranslation({
      value: en,
      language: "en",
      textWidth: enWidth,
      translationKeyId: newTranslationKey.id,
    });
    await createTranslation({
      value: ko,
      language: "ko",
      textWidth: koWidth,
      translationKeyId: newTranslationKey.id,
    });
    await createTranslation({
      value: ja,
      language: "ja",
      textWidth: jaWidth,
      translationKeyId: newTranslationKey.id,
    });
    await createTranslation({
      value: zh,
      language: "zh",
      textWidth: zhWidth,
      translationKeyId: newTranslationKey.id,
    });
    await createTranslation({
      value: zhHant,
      language: "zhHant",
      textWidth: zhHantWidth,
      translationKeyId: newTranslationKey.id,
    });
  });
}
