import { ColumnDiv } from "@/src/features/table";
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
    cell: ({ row }) => (
      <ColumnDiv value={row.getValue("en")} language="English" />
    ),
  },
  {
    accessorKey: "ko",
    header: "Korean",
    cell: ({ row }) => {
      return <ColumnDiv value={row.getValue("ko")} language="Korean" />;
    },
  },
  {
    accessorKey: "ja",
    header: "Japanese",
    cell: ({ row }) => (
      <ColumnDiv value={row.getValue("ja")} language="Japanese" />
    ),
  },
  {
    accessorKey: "zh",
    header: "Chinese (simplified)",
    cell: ({ row }) => (
      <ColumnDiv value={row.getValue("zh")} language="Chinese (simplified)" />
    ),
  },
  {
    accessorKey: "zhHant",
    header: "Chinese (traditional)",
    cell: ({ row }) => (
      <ColumnDiv
        value={row.getValue("zhHant")}
        language="Chinese (traditional)"
      />
    ),
  },
  {
    accessorKey: "longerTexts",
  },
];

export default columns;
