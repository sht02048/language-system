import { prisma } from "../prisma";
import type { TranslationKey } from "./translationKey.type";

export async function createTranslationKey({
  name,
  namespaceId,
}: TranslationKey) {
  const res = await prisma.translationKey.create({
    data: {
      name,
      namespaceId,
    },
  });

  return res;
}

export async function findCreateTranslationKey({
  name,
  namespaceId,
}: TranslationKey) {
  const res = await prisma.translationKey.findFirst({
    where: {
      name,
      namespaceId,
    },
  });

  if (res === null) {
    return await createTranslationKey({ name, namespaceId });
  }

  return res;
}

export async function getAllTranslationKeyByNamespace(namespaceId: string) {
  const res = await prisma.translationKey.findMany({
    where: {
      namespaceId,
    },
  });

  return res;
}
