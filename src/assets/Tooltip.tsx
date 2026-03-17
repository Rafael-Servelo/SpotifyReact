import * as Tooltip from "@radix-ui/react-tooltip";
import type React from "react";

type Props = {
  children: React.ReactNode;
  text: string;
};

export default function TooltipComponent({ children, text }: Props) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

      <Tooltip.Content
        className="bg-zinc-800 text-white px-3 py-1 text-xs rounded shadow-lg"
        side="bottom"
        sideOffset={6}
      >
        {text}

        <Tooltip.Arrow className="fill-zinc-800" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
