
import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about', hasDropdown: true },
    { name: 'Papers', href: '#papers', hasDropdown: true },
    { name: 'Committee', href: '#committee', hasDropdown: true },
    { name: 'Registration', href: '#registration' },
    { name: 'Publications', href: '#publications' },
    { name: 'Special Sessions', href: '#special-sessions' },
    { name: 'Conference Venue', href: '#conference-venue' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'Accommodation & Attractions', href: '#accommodation' },
    { name: 'Previous Conferences', href: '#previous-conferences', hasDropdown: true }
  ];

  return (
    <>
      <div className="h-16"></div> {/* Spacer for fixed navbar */}
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#001324] text-white border-b border-[#4285f4]/30"
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold font-druk text-white">AISGRI 2026</a>
          
          <div className="hidden lg:flex space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-graphik font-medium hover:text-[#4285f4] transition-colors text-white flex items-center px-3 py-2 text-sm"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>
            ))}
          </div>
          
          <button 
            className="lg:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="text-white" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#001324] text-white border-t border-[#4285f4]/30">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-graphik font-medium hover:text-[#4285f4] transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
