import React from 'react';
import Footer from '@/components/Footer';
import { Book, Computer } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-goldsmiths-blue relative"
        style={{
          backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">About Us</h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 inline-block">
                <Book className="h-16 w-16 text-goldsmiths-blue" />
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the University
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Goldsmiths, University of London is internationally renowned for its creative and interdisciplinary approach to teaching and research. Located in New Cross, South-East London, Goldsmiths is a constituent college of the prestigious University of London, known for its vibrant academic community and forward-thinking ethos. Since its foundation in 1891, Goldsmiths has built a legacy of academic excellence, social engagement, and pioneering innovation across the arts, humanities, social sciences, and computing.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  With a global student body from over 140 countries, Goldsmiths fosters an inclusive and intellectually rich environment where students and researchers collaborate across disciplines to address complex societal challenges. The university consistently ranks among the top institutions in the UK for research intensity and international outlook.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  Goldsmiths is especially known for pushing the boundaries of traditional disciplines, and it continues to influence culture, education, technology, and society through impactful scholarship and creative inquiry <span className="font-bold">BECAUSE Different is what we do!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About the School of Computing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-3/4 order-2 md:order-1">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the School of Computing
              </h2>
              
              <div className="bg-goldsmiths-beige shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  The School of Computing at Goldsmiths is a dynamic and innovative hub of research and education at the intersection of technology, creativity, and social impact. The school is renowned for its cross-disciplinary ethos, offering innovative programmes that merge computing with creative and human-centred domains, particularly in data science & artificial intelligence, computational arts, music technology, user experience design, computational linguistics, and interactive games, preparing students to shape the future of digital culture and socially responsible technology.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  It fosters a collaborative research environment with strong links to industry, public sector, and community partners. The school is also home to pioneering work in areas such as explainable AI, creative computing, and ethical technology design.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/4 flex justify-center md:justify-end mb-6 md:mb-0 order-1 md:order-2">
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 inline-block">
                <Computer className="h-16 w-16 text-goldsmiths-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
