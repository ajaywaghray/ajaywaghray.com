import React from "react";
import { Briefcase } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center font-normal">About</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-600 mb-6">
              As a seasoned Product Leader with over 15 years of experience, I specialize in growing consumer marketplaces and digital platforms that deliver exceptional value. My career spans leadership roles at industry giants like Udemy, Vrbo, and VacationRenter, where I've consistently driven innovation and measurable growth.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I take pride in being a hands-on builder who combines strategic vision with practical execution. My approach bridges business objectives with user-centered design, resulting in intuitive experiences that convert, engage, and retain customers at scale.
            </p>
            <p className="text-lg text-gray-600">
              Throughout my career, I've mentored product teams, fostered collaborative environments, and championed customer-centric methodologies that deliver business results while delighting users.
            </p>
          </div>
          
          <div>
            <div className="p-8 border border-black/10">
              <h3 className="text-xl font-normal mb-8">Career Highlights</h3>
              
              <div className="space-y-8">
                <div className="flex gap-3">
                  <Briefcase className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Director of Product, Udemy</h4>
                    <p className="text-sm text-gray-600">Drove 4x subscription revenue growth and 2x enterprise lead generation</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Briefcase className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Senior Manager of Product, Vrbo</h4>
                    <p className="text-sm text-gray-600">Led mobile strategies delivering $2B+ in bookings and 10M+ app downloads</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Briefcase className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Head of Product, VacationRenter</h4>
                    <p className="text-sm text-gray-600">Achieved $1B in gross booking value through innovative marketplace solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
