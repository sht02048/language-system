import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/shared/ui/hover-card";

type Props = {
  value: string;
  trimmedValue: string;
};

export default function ColumnHoverCard({ value, trimmedValue }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <p className="underline-offset-4 hover:underline">{`${trimmedValue}...`}</p>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto max-w-80 py-2">
        <p>{value}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
