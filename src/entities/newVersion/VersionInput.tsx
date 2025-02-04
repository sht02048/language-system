import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";

import type { NewVersionProps } from "./newVersion.type";

export default function VersionInput({ control }: NewVersionProps) {
  return (
    <FormField
      control={control}
      name="version"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Version</FormLabel>
          <FormControl>
            <Input
              className="w-1/3"
              type="text"
              placeholder="Enter a version"
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
