"use client";

import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

import { Header, Body, Footer } from "@/src/widgets/table";

import columns from "./table.column";
import { TableLanguage } from "./table.type";

type Props = {
  data: TableLanguage[];
};

export default function Table({ data }: Props) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="m-2">
      <Header />
      <Body table={table} columnLength={columns.length} />
      <Footer table={table} />
    </div>
  );
}
