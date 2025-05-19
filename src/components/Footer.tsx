
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-lunar-green text-desert-storm pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-druk mb-4 text-cream-can">Conference Information</h3>
            <p className="font-graphik mb-2">10-11th April 2026</p>
            <p className="font-graphik mb-2">Goldsmiths, University of London</p>
            <p className="font-graphik">United Kingdom</p>
          </div>
          
          <div>
            <h3 className="text-xl font-druk mb-4 text-cream-can">Links</h3>
            <ul className="space-y-2 font-graphik">
              <li><a href="#home" className="hover:text-cream-can transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cream-can transition-colors">About</a></li>
              <li><a href="#important-dates" className="hover:text-cream-can transition-colors">Important Dates</a></li>
              <li><a href="#objectives" className="hover:text-cream-can transition-colors">Objectives</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-druk mb-4 text-cream-can">Contact us</h3>
            <p className="font-graphik mb-2">Email: aisgri.conference@gold.ac.uk</p>
            <p className="font-graphik mb-2">Phone: +44 (0)20 7078 5300</p>
            <p className="font-graphik">Address: New Cross, London, SE14 6NW</p>
          </div>
        </div>
        
        <div className="border-t border-cream-can pt-8 text-center">
          <p className="font-graphik text-sm">
            &copy; {new Date().getFullYear()} AISGRI 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
