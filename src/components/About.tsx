
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-druk text-3xl md:text-4xl text-[#001324] text-center mb-8 border-b-4 border-[#4285f4] pb-2 inline-block mx-auto">
          About Conference
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-6">
          <p className="font-publico text-lg text-[#333] mb-6 leading-relaxed">
            AISGRI-2026 is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of AI for Social Good and Responsible Innovation to a common platform. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners.
          </p>
          <p className="font-publico text-lg text-[#333] leading-relaxed">
            Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions around the World. AISGRI 2026 will be organized by Goldsmith, University of London, United Kingdom on 10th – 11th April 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
