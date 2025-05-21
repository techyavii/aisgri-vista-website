
import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Conference', 
      href: '#about', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about-us' }
      ] 
    },
    { name: 'About Us', href: '/about-us' },
    { 
      name: 'Papers', 
      href: '#papers', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Call for Papers', href: '/call-for-papers' },
        { name: 'Paper Submission', href: '/paper-submission' },
        { name: 'Quality Policies', href: '/quality-policies' }
      ]
    },
    { name: 'Registration', href: '/registration' },
    { name: 'Publications', href: '/publications' },
    { name: 'Conference Venue', href: '/conference-venue' },
    { name: 'Downloads', href: '/downloads' }
  ];

  return (
    <>
      <div className="h-16"></div> {/* Spacer for fixed navbar */}
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-300 bg-white text-black border-b border-gray-200"
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold font-druk text-black">AISGRI 2026</Link>
          
          <div className="hidden lg:flex space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className="font-graphik font-medium hover:bg-[#333333] hover:text-white transition-colors text-black flex items-center px-3 py-2 text-sm rounded"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="font-graphik font-medium hover:bg-[#333333] hover:text-white transition-colors text-black flex items-center px-3 py-2 text-sm rounded"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                )}
                
                {link.hasDropdown && activeDropdown === link.name && link.dropdownItems && (
                  <div 
                    ref={dropdownRef}
                    className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-52 py-2 z-50"
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-[#333333] text-black hover:text-white"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button 
            className="lg:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="text-black" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-black border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href} 
                      className="font-graphik font-medium hover:bg-[#333333] hover:text-white transition-colors flex items-center py-2 px-2 rounded"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (!link.hasDropdown) setActiveDropdown(null);
                      }}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'transform rotate-180' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(link.name);
                          }}
                        />
                      )}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="font-graphik font-medium hover:bg-[#333333] hover:text-white transition-colors flex items-center py-2 px-2 rounded"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (!link.hasDropdown) setActiveDropdown(null);
                      }}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === link.name ? 'transform rotate-180' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(link.name);
                          }}
                        />
                      )}
                    </a>
                  )}
                  
                  {link.hasDropdown && activeDropdown === link.name && link.dropdownItems && (
                    <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-1 px-2 text-sm hover:bg-[#333333] hover:text-white rounded"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
