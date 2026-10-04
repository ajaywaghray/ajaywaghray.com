import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, description }) => {
  return (
    <div className="p-8 border border-black/10 hover:border-black/20 transition-colors">
      <div className="text-5xl font-normal mb-4">{value}</div>
      <div className="font-medium text-lg mb-2 text-black uppercase tracking-wider">{label}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="pt-8 pb-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 text-center font-normal">Impact & Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard 
            value="$8B+" 
            label="Annual Transaction Value" 
            description="Drove over $8 billion in annual transaction value across marketplace platforms"
          />
          
          <MetricCard 
            value="4x" 
            label="Subscription Revenue Growth" 
            description="Increased Udemy's subscription revenue by 4x through strategic product initiatives"
          />
          
          <MetricCard 
            value="2x" 
            label="Enterprise Lead Generation" 
            description="Doubled enterprise lead generation through optimized conversion funnels"
          />
          
          <MetricCard 
            value="$2B+" 
            label="Mobile Bookings" 
            description="Led mobile app strategies that delivered over $2 billion in mobile bookings"
          />
          
          <MetricCard 
            value="10M+" 
            label="App Downloads" 
            description="Drove adoption leading to over 10 million app downloads through strategic product development"
          />
          
          <MetricCard 
            value="20%" 
            label="Marketplace Revenue Lift" 
            description="Achieved 20% lift in marketplace revenue at Udemy through optimization initiatives"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
