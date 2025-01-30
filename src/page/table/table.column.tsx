import { ColumnDef } from "@tanstack/react-table";
import { TableLanguage } from "./table.type";

const columns: ColumnDef<TableLanguage>[] = [
  {
    accessorKey: "languageKey",
    header: "Language Key ",
    cell: ({ row }) => <div>{row.getValue("languageKey")}</div>,
  },
  {
    accessorKey: "en",
    header: "English",
    cell: ({ row }) => <div>{row.getValue("en")}</div>,
  },
  {
    accessorKey: "ko",
    header: "Korean",
    cell: ({ row }) => {
      return <div>{row.getValue("ko")}</div>;
    },
  },
  {
    accessorKey: "ja",
    header: "Japanese",
    cell: ({ row }) => <div>{row.getValue("ja")}</div>,
  },
  {
    accessorKey: "zh",
    header: "Zh",
    cell: ({ row }) => <div>{row.getValue("zh")}</div>,
  },
  {
    accessorKey: "zhHant",
    header: "Zh-Hant",
    cell: ({ row }) => <div>{row.getValue("zhHant")}</div>,
  },
];

export default columns;
