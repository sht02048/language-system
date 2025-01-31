import { PropsWithTable } from "@/src/entities/table";
import { Pagination, TableFilter } from "@/src/features/table";

export default function Header({ table }: PropsWithTable) {
  return (
    <div className="flex justify-between gap-4 m-4">
      <TableFilter table={table} />
      <Pagination table={table} />
    </div>
  );
}
