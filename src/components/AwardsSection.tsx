import React from "react";
import { Award, Users } from "lucide-react";

interface AwardItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AwardItem: React.FC<AwardItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="text-black mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-normal mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center font-normal">Awards & Accolades</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-black/10 bg-white">
            <h3 className="text-xl font-normal mb-8">Awards & Recognition</h3>
            
            <AwardItem 
              title="HomeAway Innovation Award" 
              description="Recognized for pioneering mobile app strategies that dramatically increased bookings and customer satisfaction."
              icon={<Award size={24} />}
            />
            
            <AwardItem 
              title="Udemy Leadership Excellence" 
              description="Honored for exceptional leadership in driving subscription growth and enterprise adoption."
              icon={<Award size={24} />}
            />
            
            <AwardItem 
              title="VacationRenter Growth Achievement" 
              description="Acknowledged for scaling the platform to $1B in gross booking value in record time."
              icon={<Award size={24} />}
            />
          </div>
          
          <div className="p-8 border border-black/10 bg-white">
            <h3 className="text-xl font-normal mb-8">Speaking & Thought Leadership</h3>
            
            <AwardItem 
              title="Product Management Summit Panelist" 
              description="Featured speaker discussing marketplace innovations and growth strategies for digital platforms."
              icon={<Users size={24} />}
            />
            
            <AwardItem 
              title="Tech Conference Keynote" 
              description="Delivered keynote address on transforming user experience to drive business growth in competitive markets."
              icon={<Users size={24} />}
            />
            
            <AwardItem 
              title="Industry Webinar Host" 
              description="Regular host of industry webinars sharing insights on product-led growth and digital transformation."
              icon={<Users size={24} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
