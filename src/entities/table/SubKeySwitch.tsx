import { useMemo } from "react";

import { Label } from "@/src/shared/ui/label";
import { Switch } from "@/src/shared/ui/switch";
import { PropsWithTable } from "./table.type";

export default function SubKeySwitch({ table }: PropsWithTable) {
  const subKeyColumn = useMemo(
    () => table.getAllColumns().find((column) => column.id === "subKey"),
    [table],
  );

  const handleChange = (isChecked: boolean) => {
    subKeyColumn?.toggleVisibility(isChecked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode">show sub key</Label>
      <Switch id="airplane-mode" onCheckedChange={handleChange} />
    </div>
  );
}
