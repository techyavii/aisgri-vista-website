
import React from 'react';

interface DateInfo {
  title: string;
  date: string;
}

interface InfoSectionProps {
  id: string;
  title: string;
  items?: DateInfo[];
  notices?: string[];
}

const MarqueeText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="marquee-container h-24 bg-goldsmiths-beige rounded overflow-hidden my-1 flex items-center">
      <div className="marquee-content px-4 py-2">
        {text}
      </div>
    </div>
  );
};

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, items, notices }) => {
  return (
    <section id={id} className="py-6 px-2">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <h3 className="font-druk text-xl text-center py-3 bg-goldsmiths-blue text-white">
            {title}
          </h3>
          
          <div className="p-6">
            {items && items.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="font-graphik font-bold text-goldsmiths-text mb-1">{item.title}</p>
                <MarqueeText text={item.date} />
              </div>
            ))}
            
            {notices && notices.map((notice, index) => (
              <div key={index} className="mb-4">
                <MarqueeText text={notice} />
              </div>
            ))}
            
            {!items && !notices && (
              <div className="text-center py-4 font-publico">
                <MarqueeText text="Download links will be available soon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
