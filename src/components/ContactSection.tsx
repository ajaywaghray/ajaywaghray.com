
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Link } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center font-normal">Get in Touch</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-normal mb-6">Let's Connect</h3>
            <p className="text-lg text-gray-600 mb-8">
              I'm open to consulting opportunities, advisory roles, speaking engagements, or simply connecting with fellow product enthusiasts. Reach out and let's explore how we can collaborate.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-black mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:contact@ajaywaghray.com" className="text-gray-600 hover:text-black transition-colors">
                    contact@ajaywaghray.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Link className="text-black mt-1" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ajaywaghray" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    linkedin.com/in/ajaywaghray
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center rounded-2xl border border-black/10 p-8 md:p-12">
            <Mail className="h-10 w-10 text-black mb-6" />
            <h3 className="text-2xl font-normal mb-4">Send Me a Note</h3>
            <p className="text-lg text-gray-600 mb-8">
              Email is the best way to reach me. Click below to start a message, and I'll get back to you soon.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-black hover:bg-black/90 text-white rounded-full"
            >
              <a href="mailto:contact@ajaywaghray.com">
                <Mail />
                Email me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
