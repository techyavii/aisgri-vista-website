
import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    {
      src: "/lovable-uploads/7ed9a922-0b4c-46b4-9bbb-71a57fa4c4a0.png",
      alt: "Aerial view of Goldsmiths University"
    },
    {
      src: "/lovable-uploads/b185578a-ca33-4aba-8e13-71db84c6e1db.png",
      alt: "Goldsmiths University campus with students"
    },
    {
      src: "/lovable-uploads/7cade809-e6ee-4b6b-8f3c-aa1079fc98db.png",
      alt: "Goldsmiths University main building with London skyline"
    },
    {
      src: "/lovable-uploads/8764d794-b00e-419b-9303-2dc2f0e99e7e.png",
      alt: "Students walking on Goldsmiths campus"
    },
    {
      src: "/lovable-uploads/6ddfa1ee-0531-49f3-9af5-0bf644712502.png",
      alt: "Computing building at Goldsmiths University"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Conference Venue</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={venueImages[2].src}
                alt={venueImages[2].alt}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">School of Computing</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>Goldsmiths, University of London</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>New Cross, London SE14 6NW, United Kingdom</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Goldsmiths+University+of+London" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {venueImages.filter((_, idx) => idx !== 2).map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            <p className="mb-4">
              The conference will be held in the School of Computing building at Goldsmiths, University of London. 
              This modern facility features state-of-the-art presentation spaces, collaborative areas, and technical support.
            </p>
            <p>
              Both physical and online participation options are available. Detailed information about 
              transportation, accommodation options, and local attractions will be provided to registered attendees.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;
