
import React from 'react';
import { Calendar } from 'lucide-react';

const ConferenceBanner = () => {
  return (
    <div 
      className="w-full bg-cover bg-center py-8" 
      style={{ 
        backgroundImage: "url('/lovable-uploads/35658633-a213-467a-b271-454067639e43.png')", 
        backgroundSize: 'cover',
        position: 'relative'
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex items-center space-x-4">
          <img 
            src="/lovable-uploads/05de4a41-6b64-4c4f-8847-7ee35c378b27.png" 
            alt="Goldsmiths University of London" 
            className="h-16 w-auto mb-2"
          />
          <img 
            src="/lovable-uploads/40599a3a-6585-408c-b0d0-0597fbfce84d.png" 
            alt="DASGRI Logo" 
            className="h-16 w-auto mb-2"
          />
        </div>

        <div className="text-center md:text-right text-white">
          <h1 className="text-2xl md:text-3xl font-bold font-druk tracking-tight mb-1">International Conference on AI for Social Good and Responsible Innovation</h1>
          <h2 className="text-lg md:text-xl font-medium mb-1">(AISGRI-2026)</h2>
          <p className="text-base md:text-lg font-medium mb-1">ORGANISED BY : School of Computing, Goldsmiths, University of London, UK</p>
          <div className="flex items-center justify-center md:justify-end text-sm md:text-base">
            <Calendar className="mr-2" size={16} />
            <p>10th - 11th April, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
