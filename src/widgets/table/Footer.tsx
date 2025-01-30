import { Table } from "@tanstack/react-table";
import { Button } from "@/src/shared/ui/button";
import { TableLanguage } from "@/src/page/table/table.type";

type Props = {
  table: Table<TableLanguage>;
};

export default function Footer({ table }: Props) {
  return (
    <div className="flex items-center justify-end py-4 space-x-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
