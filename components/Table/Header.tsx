import { Input } from "@/components/ui/input";
import ComboboxDemo from "@/components/ui/comboBox";

const versions = [
  {
    value: "v.4.3.1",
    label: "v.4.3.1",
  },
  {
    value: "v.4.3.0",
    label: "v.4.3.0",
  },
  {
    value: "v.4.2",
    label: "v.4.2",
  },
  {
    value: "v.4.1",
    label: "v.4.1",
  },
  {
    value: "v.3.1",
    label: "v.3.1",
  },
  {
    value: "v.3.0",
    label: "v.3.0",
  },
];

const jsonTypes = [
  {
    value: "activeMode",
    label: "activeMode",
  },
  {
    value: "auth",
    label: "auth",
  },
  {
    value: "common",
    label: "common",
  },
  {
    value: "dataTab",
    label: "dataTab",
  },
  {
    value: "documentation",
    label: "documentation",
  },
  {
    value: "error",
    label: "error",
  },
];

export default function Header() {
  return (
    <div className="m-4 flex gap-4">
      <Input placeholder="filter by Korean" className="w-64" />
      <ComboboxDemo placeHolder="version" combos={versions} />
      <ComboboxDemo placeHolder="file" combos={jsonTypes} />
    </div>
  );
}
