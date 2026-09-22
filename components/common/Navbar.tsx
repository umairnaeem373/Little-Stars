import React, { useEffect, useLayoutEffect, useState } from "react";
import NavButton from "./NavButton";
import { navItems } from "@/data/data";
import { Menu, Star, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ModeToggle from "./ModeToggle";
import { cn } from "@/lib/utils";

type Props = {
  smoothScroll: (targetId: string) => void;
};

const Navbar = ({ smoothScroll }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Star className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-primary">
                Little Stars
              </span>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavButton
                key={item.substring(3)}
                text={item}
                smoothScroll={smoothScroll}
              />
            ))}
            <Button>
              <UserPlus />
              Enroll Now
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile + Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" aria-label="Open menu">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Little Stars</SheetTitle>
                  <SheetDescription>
                    Navigate through our daycare.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <NavButton
                      key={item.substring(2)}
                      text={item}
                      smoothScroll={smoothScroll}
                      mobile
                    />
                  ))}
                </div>
                <SheetFooter>
                  <Button
                    onClick={() => smoothScroll("contact")}
                    className="w-full"
                    size="lg"
                  >
                    <UserPlus />
                    Enroll Now
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
