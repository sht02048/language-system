import { Table } from "@tanstack/react-table";

export type PropsWithTable = {
  table: Table<TableLanguage>;
};

export type TableLanguage = {
  languageKey: string;
  subKey: string;
  en: string;
  ko: string;
  ja: string;
  zh: string;
  zhHant: string;
};
