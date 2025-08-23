import React from "react";
import { Button } from "../ui/button";

type Props = {
  isMenuOpen: Boolean;
  smoothScroll: (targetId: string) => void;
  text: String;
};

const NavButton = ({ isMenuOpen, smoothScroll, text }: Props) => {
  return (
    <Button
      variant="ghost"
      onClick={() => smoothScroll(text.toLowerCase())}
      className={`${
        isMenuOpen && "block w-full text-left"
      } text-gray-700 hover:text-purple-600 transition-colors`}
    >
      {text}
    </Button>
  );
};

export default NavButton;
