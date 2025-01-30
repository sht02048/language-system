import { prisma } from "../prisma";

export async function getTranslationByTranslationKey(translationKeyId: string) {
  const res = await prisma.translation.findMany({
    where: {
      translationKeyId,
    },
  });

  return res;
}
