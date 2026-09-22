import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  smoothScroll: (targetId: string) => void;
  text: String;
  mobile?: boolean;
};

const NavButton = ({ smoothScroll, text, mobile = false }: Props) => {
  return (
    <Button
      variant="ghost"
      onClick={() => smoothScroll(text.toLowerCase())}
      className={cn(
        "text-foreground hover:text-foreground/80 transition-colors",
        mobile && "w-full justify-start h-11 text-base"
      )}
    >
      {text}
    </Button>
  );
};

export default NavButton;
