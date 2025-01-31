import { useSearchParams } from "next/navigation";

import { Input } from "@/src/shared/ui/input";
import { PropsWithTable } from "@/src/entities/table";
import { useVersionAndNamespace } from "@/src/shared/hooks";
import { ComboBox, Pagination } from "@/src/features/table";

export default function Header({ table }: PropsWithTable) {
  const searchParams = useSearchParams();
  const currentVersion = searchParams.get("version");
  const currentNamespace = searchParams.get("namespace");
  const { versions, namespaces } = useVersionAndNamespace(currentVersion ?? "");

  if (!currentVersion || !currentNamespace) return null;

  return (
    <div className="flex justify-between gap-4 m-4">
      <div className="flex gap-4">
        <Input placeholder="filter by Korean" className="w-64" />
        <ComboBox
          placeHolder="Enter version"
          combos={versions}
          defaultValue={currentVersion}
        />
        <ComboBox
          placeHolder="Enter namespace"
          combos={namespaces}
          defaultValue={currentNamespace}
        />
      </div>
      <Pagination table={table} />
    </div>
  );
}
