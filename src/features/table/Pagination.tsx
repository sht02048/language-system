import {
  PageNavigation,
  PropsWithTable,
  RowSelection,
  SubKeySwitch,
} from "@/src/entities/table";

export default function Pagination({ table }: PropsWithTable) {
  return (
    <div className="flex items-center gap-8">
      <SubKeySwitch table={table} />
      <RowSelection table={table} />
      <PageNavigation table={table} />
    </div>
  );
}
