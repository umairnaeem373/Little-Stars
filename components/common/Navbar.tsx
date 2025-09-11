import React, { useEffect, useLayoutEffect, useState } from "react";
import NavButton from "./NavButton";
import { navItems } from "@/data/data";
import { Menu, Star, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../app/favicon.ico";
import { Button } from "../ui/button";

type Props = {
  smoothScroll: (targetId: string) => void;
};

const Navbar = ({ smoothScroll }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMenuOpen((prev) => prev && window.scrollY > 50 && false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                isMenuOpen={isMenuOpen}
              />
            ))}
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 rounded-b-lg inset-x-0 bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <NavButton
                  key={item.substring(2)}
                  text={item}
                  smoothScroll={smoothScroll}
                  isMenuOpen={isMenuOpen}
                />
              ))}
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
              Enroll Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
