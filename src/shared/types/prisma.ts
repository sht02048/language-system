import { Prisma } from "@prisma/client";

export type PrismaVersion = Prisma.VersionGetPayload<object>;
export type PrismaNamespace = Prisma.NamespaceGetPayload<object>;
export type PrismaTranslationKey = Prisma.TranslationKeyGetPayload<object>;
export type PrismaTranslation = Prisma.TranslationGetPayload<object>;
