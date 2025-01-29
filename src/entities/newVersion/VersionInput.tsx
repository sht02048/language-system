import { Control } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";

import type { NewVersionFormType } from "./newVersion.type";

type Props = {
  control: Control<NewVersionFormType>;
};

export default function NamespaceInput({ control }: Props) {
  return (
    <FormField
      control={control}
      name="version"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Namespace</FormLabel>
          <FormControl>
            <Input
              className="w-1/3"
              type="text"
              placeholder="Enter a namespace"
              {...field}
            />
          </FormControl>
          <FormMessage />
          <FormDescription>{"ex) 1.0.0"}</FormDescription>
        </FormItem>
      )}
    />
  );
}
