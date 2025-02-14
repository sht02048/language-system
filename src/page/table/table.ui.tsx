"use client";

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

import { Header, Body } from "@/src/widgets/table";
import { TableLanguage } from "@/src/entities/table";

import columns from "./table.column";

type Props = {
  data: TableLanguage[];
};

export default function Table({ data }: Props) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    subKey: false,
  });

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnFilters,
      columnVisibility,
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
      sorting: [
        {
          id: "languageKey",
          desc: false,
        },
        {
          id: "subKey",
          desc: false,
        },
      ],
    },
  });

  return (
    <div className="m-2">
      <Header table={table} />
      <Body table={table} columnLength={columns.length} />
    </div>
  );
}
