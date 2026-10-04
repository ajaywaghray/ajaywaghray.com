import React from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm py-4 px-6 md:px-12 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="/" className="font-medium text-xl">
          AW
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About me</NavLink>
          <NavLink href="#impact">Impact</NavLink>
          <NavLink href="#projects">Case studies</NavLink>
          <div className="h-4 w-px bg-gray-200 mx-2" />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => {}}
        >
          ☰
        </Button>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-black transition-colors"
  >
    {children}
  </a>
);

export default NavBar;
