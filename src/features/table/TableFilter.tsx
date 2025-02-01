import { useSearchParams } from "next/navigation";

import { Input } from "@/src/shared/ui/input";
import { useVersionAndNamespace } from "@/src/shared/hooks";
import { PropsWithTable, ComboBox } from "@/src/entities/table";

export default function TableFilter({ table }: PropsWithTable) {
  const searchParams = useSearchParams();
  const currentVersion = searchParams.get("version");
  const currentNamespace = searchParams.get("namespace");
  const { versions, namespaces } = useVersionAndNamespace(currentVersion ?? "");

  if (!currentVersion || !currentNamespace) return null;

  return (
    <div className="flex gap-4">
      <Input
        placeholder="filter by LanguageKey"
        value={
          (table.getColumn("languageKey")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("languageKey")?.setFilterValue(event.target.value)
        }
        className="max-w-sm w-44"
      />
      <ComboBox
        placeHolder="Enter version"
        combos={versions}
        defaultValue={currentVersion}
        param="version"
      />
      <ComboBox
        placeHolder="Enter namespace"
        combos={namespaces}
        defaultValue={currentNamespace}
        param="namespace"
      />
    </div>
  );
}
