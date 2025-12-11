
import React from 'react';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import IndexingSection from '@/components/IndexingSection';
import KeynoteSpeakers from '@/components/KeynoteSpeakers';

const Index: React.FC = () => {
  const carouselImages = [
    { src: "/lovable-uploads/fc596d5c-e4c3-45a5-9917-f9a2fb0d0d4c.png", alt: "Goldsmiths University Main Building" },
    { src: "/lovable-uploads/20199f8a-6131-4440-bc5e-b152fbfb3a50.png", alt: "Goldsmiths University Ivy Building" },
    { src: "/lovable-uploads/a3112ac3-55f3-4862-87b9-f97060ce68c4.png", alt: "Goldsmiths Modern Building" },
    { src: "/lovable-uploads/fe9f3022-dca0-44b3-b211-d61102ffc425.png", alt: "Department of Computing" },
    { src: "/lovable-uploads/c3e8d4a2-7168-4a7c-a6a1-5b1df9376150.png", alt: "Goldsmiths Church Building" },
    { src: "/lovable-uploads/af072e89-4ab1-4970-8b22-e0fcd19519e3.png", alt: "Goldsmiths Entrance" },
    { src: "/lovable-uploads/7ed9a922-0b4c-46b4-9bbb-71a57fa4c4a0.png", alt: "Aerial view of Goldsmiths University" },
    { src: "/lovable-uploads/b185578a-ca33-4aba-8e13-71db84c6e1db.png", alt: "Goldsmiths University campus with students" },
    { src: "/lovable-uploads/7cade809-e6ee-4b6b-8f3c-aa1079fc98db.png", alt: "Goldsmiths University main building with London skyline" },
    { src: "/lovable-uploads/8764d794-b00e-419b-9303-2dc2f0e99e7e.png", alt: "Students walking on Goldsmiths campus" },
    { src: "/lovable-uploads/6ddfa1ee-0531-49f3-9af5-0bf644712502.png", alt: "Computing building at Goldsmiths University" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ImageCarousel images={carouselImages} />
      <IndexingSection />
      <About />
      <KeynoteSpeakers />
      <Objectives />
      <ImportantDatesSection />
      <Footer />
    </div>
  );
};

export default Index;
