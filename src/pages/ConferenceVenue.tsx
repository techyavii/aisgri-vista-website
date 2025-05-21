
import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Conference Venue</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/35658633-a213-467a-b271-454067639e43.png" 
                alt="Goldsmiths University Building" 
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
