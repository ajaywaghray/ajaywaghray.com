import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-7xl font-normal mb-6 text-black animate-fade-in">
          Hello! I'm Ajay Waghray
        </h1>
        
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-normal mb-6 text-black animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>A Product Leader based in Austin, Texas. 🤠</h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            Passionate about transforming ideas into beautifully crafted, high-growth products
          </p>
          
          <div className="flex gap-4 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
              <a href="#contact">Talk with me</a>
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/5 rounded-full px-8">
              <a href="#projects">See my work</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
