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
    }
  ];

  const visaExemptCountries = [
    'Austria', 'Croatia', 'Denmark', 'France', 'Iceland', 'Lithuania', 'Netherlands', 'Portugal', 'Slovenia', 'Belgium',
    'Estonia', 'Germany', 'Latvia', 'Luxembourg', 'Norway', 'Romania', 'Spain', 'Bulgaria', 'Czech Republic', 'Finland',
    'Hungary', 'Liechtenstein', 'Malta', 'Poland', 'Slovakia', 'Sweden'
  ];

  const londonImages = [
    { src: "/lovable-uploads/fc596d5c-e4c3-45a5-9917-f9a2fb0d0d4c.png", alt: "Big Ben and Houses of Parliament" },
    { src: "/lovable-uploads/20199f8a-6131-4440-bc5e-b152fbfb3a50.png", alt: "Tower Bridge London" },
    { src: "/lovable-uploads/a3112ac3-55f3-4862-87b9-f97060ce68c4.png", alt: "Tower Bridge at night" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">VENUE</h1>
          
          {/* Main venue section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">GOLDSMITHS</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>Goldsmiths is a major university in southeast London with a rich academic heritage.</p>
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

          {/* Location section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                Goldsmiths, University of London, New Cross, London SE14 6NW, United Kingdom
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.1216938320936!2d-0.03799192303689515!3d51.47428051312189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602f81f1bd2cf%3A0xeb2cff5d2300d7f8!2sGoldsmiths%2C%20University%20of%20London!5e0!3m2!1sen!2sin!4v1748764593177!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Visa section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">VISA</h2>
            
            <p className="mb-6 text-justify">
              If you are a citizen of one of the below 27 countries, then you do not require a visa or any other documentation apart from a passport:
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {visaExemptCountries.map((country, index) => (
                <div key={index} className="text-blue-600">
                  • {country}
                </div>
              ))}
            </div>

            <p className="text-justify mb-4 text-sm text-gray-600">
              There are 55 additional countries that do not require a visa, please visit Visitor Supporting Documents for more information. Attendees from countries that require a UK visa for entry are reminded that the process of obtaining a visa may take approximately 3 weeks time under normal circumstances. Please email{' '}
              <a href="mailto:dasgri.congress@gmail.com" className="text-blue-600 hover:underline">
                dasgri.congress@gmail.com
              </a>{' '}
              to request a visa invitation letter so that you can print and use in obtaining a visa. Obtaining a Visa Support Letter from AISGRI-2026 Conference will not guarantee that your U.K. visa application will be approved. The letter is merely supplementary information that explains a visa applicant's intended purpose of travel to United Kingdom
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">For security purposes, the conference has policy for issuing official Visa Support Letters as follows:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visa Support Letters will be issued only after you have successfully registered and paid for your conference.</li>
                <li>Visa Support Letters can only be issued for the person registered to attend the conference in form of participant, author, chair and speaker. Unfortunately we cannot issue visa Support Letters for guests of participants.</li>
              </ul>
            </div>
          </div>

          {/* London section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">LONDON</h2>
            
            <p className="mb-6 text-justify">
              London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {londonImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;
