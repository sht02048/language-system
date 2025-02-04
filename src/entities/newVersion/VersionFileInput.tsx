import _ from "lodash";
import Papa from "papaparse";
import { FileJson } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import { ChangeEvent, useState, type DragEvent } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";

import { cn } from "../../shared/lib/utils";
import { Button } from "../../shared/ui/button";
import { Label } from "../../shared/ui/label";
import { NewVersionFormType, NewVersionProps } from "./newVersion.type";

export default function VersionFileInput({ control }: NewVersionProps) {
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    field: ControllerRenderProps<NewVersionFormType>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      setFileName(file.name);
      field.onChange(file);
    }
  };

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<NewVersionFormType>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);

      Papa.parse(file, {
        complete: function (result) {
          const { errors, data } = result;

          if (!_.isEmpty(errors))
            throw new Error("fail to read given csv file");

          field.onChange(data);
        },
        header: true,
        skipEmptyLines: true,
      });
    }
  };

  return (
    <FormField
      control={control}
      name="versionFile"
      render={({ field }) => (
        <FormItem>
          <FormLabel>File</FormLabel>
          <div
            className={cn(
              "border-dotted border-2 rounded-2xl flex flex-col items-center py-6 h-56 gap-4 w-full mt-6 text-orange-100 justify-center",
              isDragging && "border-orange-100"
            )}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, field)}
          >
            {fileName ? (
              <span className="text-2xl font-medium">{fileName}</span>
            ) : (
              <>
                <FileJson className="size-10" />
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-lg font-medium">
                    Drag and Drop JSON file here
                  </span>
                  <span className="text-sm font-light">
                    Only JSON files are supported
                  </span>
                </div>
              </>
            )}
            <Button
              asChild
              className={cn(
                "cursor-pointer bg-orange-100",
                isDragging && "bg-secondary"
              )}
            >
              <Label htmlFor="file">
                <span>Choose file</span>
              </Label>
            </Button>
            <FormControl>
              <Input
                id="file"
                type="file"
                className="hidden"
                accept=".csv"
                onChange={(e) => handleFileChange(e, field)}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
