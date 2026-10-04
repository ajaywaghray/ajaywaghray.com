import React from "react";
import { FileText, MessageSquare, Headphones, Award, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="p-8 border border-black/10 hover:border-black/20 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-3 text-black">{icon}</div>
      <h3 className="text-xl font-normal mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black hover:opacity-70 transition-opacity inline-flex items-center gap-2"
        >
          Learn more →
        </a>
      )}
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center font-normal">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="HindiBot" 
            description="AI-powered language learning tool to help users master Hindi through conversational practice and personalized lessons."
            icon={<MessageSquare size={24} />}
          />
          
          <ProjectCard 
            title="Janbot.ai" 
            description="An AI assistant designed to streamline customer service operations and enhance user experience through intelligent automation."
            icon={<Users size={24} />}
          />
          
          <ProjectCard 
            title="Product Happy Hour Podcast" 
            description="A podcast exploring product management strategies, insights, and success stories from industry leaders and innovators."
            icon={<Headphones size={24} />}
          />
          
          <ProjectCard 
            title="The Free Resume Coach for Product Managers" 
            description="A resource providing guidance, templates, and expert advice to help product managers create impactful resumes and advance their careers."
            icon={<FileText size={24} />}
          />
          
          <ProjectCard 
            title="The Millennial Product Manager Newsletter" 
            description="A curated newsletter delivering valuable insights, trends, and strategies for the modern product manager navigating today's dynamic tech landscape."
            icon={<Award size={24} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
