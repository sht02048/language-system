import Table from "@/components/Table";
import { TableParams, TableParamsSchema } from "./type";
export { type TableParams, TableParamsSchema } from "./type";

export default function Page({ searchParams }: { searchParams: TableParams }) {
  const safeParams = TableParamsSchema.parse(searchParams);

  return (
    <div className="m-2">
      <Table />
      {safeParams.version}
    </div>
  );
}
