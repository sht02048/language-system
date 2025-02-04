import { language } from "@prisma/client";

export type Translation = {
  value: string;
  language: language;
  textWidth: number;
  translationKeyId: string;
};
