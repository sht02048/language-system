import { ColumnDef } from "@tanstack/react-table";
import { TableLanguage } from "@/src/entities/table";

const columns: ColumnDef<TableLanguage>[] = [
  {
    accessorKey: "languageKey",
    header: "Language Key ",
    cell: ({ row }) => (
      <code className="font-medium">{row.getValue("languageKey")}</code>
    ),
  },
  {
    accessorKey: "subKey",
    header: "SubKey",
    cell: ({ row }) => <div>{row.getValue("subKey")}</div>,
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
