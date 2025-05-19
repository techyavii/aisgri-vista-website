
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const importantDates = [
    { title: "Paper Submission Deadline", date: "30th September 2025" },
    { title: "Acceptance Notification Due", date: "30th November 2025" },
    { title: "Registration Due", date: "30th December 2025" },
    { title: "Camera Ready Submission", date: "30th January 2026" },
    { title: "Conference Dates", date: "10th – 11th April 2026" }
  ];

  const notices = [
    "AISGRI 2026 will be organsied by Goldsmith, University of London, United Kingdom on 10th – 11th April 2026."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-druk text-3xl md:text-4xl text-[#001324] text-center mb-8 border-b-4 border-[#4285f4] pb-2 inline-block mx-auto">
            Conference Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoSection 
              id="important-dates" 
              title="Important Dates" 
              items={importantDates} 
            />
            <InfoSection 
              id="downloads" 
              title="Downloads" 
            />
            <InfoSection 
              id="notices" 
              title="Notices" 
              notices={notices} 
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
