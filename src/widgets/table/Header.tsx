import { Input } from "@/src/shared/ui/input";
import { ComboBox } from "@/src/features/table";
import { useVersionAndNamespace } from "@/src/shared/hooks";

import { useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const currentVersion = searchParams.get("version");
  const currentNamespace = searchParams.get("namespace");
  const { versions, namespaces } = useVersionAndNamespace(currentVersion ?? "");

  if (!currentVersion || !currentNamespace) return null;

  return (
    <div className="flex gap-4 m-4">
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
  );
}
