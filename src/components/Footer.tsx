
import React from "react";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 px-6 md:px-12 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-normal">Ajay Waghray</h3>
            <p className="mt-2 text-sm text-gray-600">
              Transforming ideas into beautifully crafted, high-growth products
            </p>
          </div>
          
          <div className="flex gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#impact">Impact</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#awards">Awards</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {currentYear} Ajay Waghray. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <SocialLink href="https://linkedin.com/in/ajaywaghray" label="LinkedIn" />
            <SocialLink href="https://twitter.com/ajaywaghray" label="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-sm text-gray-600 hover:text-black transition-colors"
    >
      {children}
    </a>
  );
};

const SocialLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-gray-600 hover:text-black transition-colors"
    >
      {label}
    </a>
  );
};

export default Footer;
