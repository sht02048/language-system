import { prisma } from "../prisma";

export async function getVersion(version: string) {
  const res = await prisma.version.findFirst({
    where: {
      name: version,
    },
  });

  if (res === null) throw new Error("not existing version");

  return res;
}
