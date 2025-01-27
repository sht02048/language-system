import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";

import type { FormType } from "./sideBar.type";

type Props = {
  control: Control<FormType>;
};

export default function NamespaceInput({ control }: Props) {
  return (
    <FormField
      control={control}
      name="namespace"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Namespace</FormLabel>
          <FormControl>
            <Input className="w-1/3" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
