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

export async function getAllVersion() {
  const versions = await prisma.version.findMany();

  return versions;
}

export async function createVersion(version: string) {
  // TODO 같은 버전이 있을때 발생하는 에러 처리 필요
  const res = await prisma.version.create({
    data: {
      name: version,
    },
  });

  return res;
}
