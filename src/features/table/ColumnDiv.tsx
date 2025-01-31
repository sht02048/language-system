import { AppLanguage } from "@/src/shared/constants";
import { ColumnHoverCard } from "@/src/entities/table";
import { MAXIMUM_TEXT_LENGTH } from "./table.consts";

type Props = {
  value: string;
  language: AppLanguage;
};

export default function ColumnDiv({ value, language }: Props) {
  switch (language) {
    case "English":
    case "Korean": {
      if (value.length < MAXIMUM_TEXT_LENGTH.SMALL_CHARACTER) {
        return <p>{value}</p>;
      }
      const trimmedValue = value.slice(0, MAXIMUM_TEXT_LENGTH.SMALL_CHARACTER);

      return <ColumnHoverCard value={value} trimmedValue={trimmedValue} />;
    }
    case "Japanese":
    case "Chinese (simplified)":
    case "Chinese (traditional)": {
      if (value.length < MAXIMUM_TEXT_LENGTH.BIG_CHARACTER) {
        return <p>{value}</p>;
      }

      const trimmedValue = value.slice(0, MAXIMUM_TEXT_LENGTH.BIG_CHARACTER);

      return <ColumnHoverCard value={value} trimmedValue={trimmedValue} />;
    }
  }
}
