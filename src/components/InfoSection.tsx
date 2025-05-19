
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
    <div className="marquee-container h-8 bg-cream-can bg-opacity-10 rounded overflow-hidden my-1">
      <div className="marquee-content">
        {text}
      </div>
    </div>
  );
};

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, items, notices }) => {
  return (
    <section id={id} className="py-10">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-lunar-green text-desert-storm rounded-lg overflow-hidden shadow-lg">
          <h3 className="font-druk text-xl text-center py-3 bg-cream-can text-lunar-green">
            {title}
          </h3>
          
          <div className="p-6">
            {items && items.map((item, index) => (
              <div key={index} className="mb-4">
                <MarqueeText text={`${item.title} - ${item.date}`} />
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
