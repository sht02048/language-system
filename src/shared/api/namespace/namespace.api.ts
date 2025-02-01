import { prisma } from "../prisma";
import type { Namespace } from "./namespace.type";

export async function createNamespace({ namespace, versionId }: Namespace) {
  const res = await prisma.namespace.create({
    data: {
      name: namespace,
      versionId,
    },
  });

  return res;
}

export async function findCreateNamespace({ namespace, versionId }: Namespace) {
  const res = await prisma.namespace.findFirst({
    where: {
      versionId,
      name: namespace,
    },
  });

  if (res === null) {
    return await createNamespace({ namespace, versionId });
  }

  return res;
}

export async function getNamespace({ namespace, versionId }: Namespace) {
  const res = await prisma.namespace.findFirst({
    where: {
      name: namespace,
      versionId,
    },
  });

  if (res === null) throw new Error("not existing version");

  return res;
}

export async function getNamespacesByVersion(versionId: string) {
  const res = await prisma.namespace.findMany({
    where: {
      versionId,
    },
  });

  return res;
}
