import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/src/shared/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/shared/ui/popover";
import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/ui/button";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  placeHolder: string;
  combos: string[];
  defaultValue: string;
  param: "version" | "namespace";
};

export default function ComboBox({
  defaultValue,
  placeHolder,
  combos,
  param,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue);

  const updateQuery = (nextParam: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, nextParam);
    router.push(`?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-48"
        >
          {value ? combos.find((combo) => combo === value) : defaultValue}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeHolder} className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {combos.map((combo) => (
                <CommandItem
                  key={combo}
                  value={combo}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    updateQuery(currentValue);
                  }}
                >
                  {combo}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === combo ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
