import { prisma } from "../prisma";
import { Translation } from "./translation.type";

export async function getTranslationByTranslationKey(translationKeyId: string) {
  const res = await prisma.translation.findMany({
    where: {
      translationKeyId,
    },
  });

  return res;
}

export async function createTranslation({
  value,
  language,
  textWidth,
  translationKeyId,
}: Translation) {
  const res = await prisma.translation.create({
    data: {
      value,
      language,
      translationKeyId,
      textWidth,
      isResolved: false,
    },
  });

  return res;
}
