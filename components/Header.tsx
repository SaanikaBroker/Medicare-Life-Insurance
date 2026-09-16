
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CalendarCheck, ChevronDown } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';

interface NavItem {
  name: string;
  path?: string;
  items?: { name: string; path: string }[];
}

const Dropdown: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isParentActive = item.items?.some(subItem => location.pathname === subItem.path);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleToggleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(prev => !prev);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        type="button"
        onClick={handleToggleClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center text-lg font-semibold text-tn-text hover:text-tn-accent transition-colors ${isParentActive ? 'text-tn-accent' : ''}`}
      >
        {item.name}
        <ChevronDown size={20} className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Invisible hover bridge connecting button to dropdown without gap */}
          <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent"></div>

          <div className="bg-white rounded-lg shadow-xl py-2">
            {item.items?.map(subLink => (
              <NavLink
                key={subLink.name}
                to={subLink.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-lg text-tn-text hover:bg-tn-gray hover:text-tn-accent transition-colors"
                style={({ isActive }) => (isActive ? { color: '#D92E17', fontWeight: '700' } : {})}
              >
                {subLink.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { siteData } = useAdminData();

  const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      items: [
        { name: 'Medicare', path: '/medicare' },
        { name: 'Life Insurance', path: '/life-insurance' },
        { name: 'Obamacare / Marketplace Insurance', path: '/aca-marketplace' },
        { name: 'Dental & Vision', path: '/dental-vision' },
      ],
    },
    { name: 'Reviews', path: '/reviews' },
    {
      name: 'About Us',
      items: [
        { name: 'About Saanika', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#D92E17',
    fontWeight: '700',
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end md:justify-center h-20">
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              link.items ? (
                <Dropdown key={link.name} item={link} />
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path!}
                  style={({ isActive }) => isActive ? activeLinkStyle : {}}
                  className="text-lg font-semibold text-tn-text hover:text-tn-accent transition-colors"
                >
                  {link.name}
                </NavLink>
              )
            ))}
            <NavLink
              to="/book-appointment"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
              className={({isActive}) => `text-lg font-semibold text-tn-text hover:text-tn-accent transition-colors ${isActive ? 'px-4 py-2 bg-tn-accent text-white rounded-lg hover:text-white' : 'px-4 py-2 bg-tn-accent text-white rounded-lg'}`}
             >
                Book Appointment
             </NavLink>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-tn-primary p-1 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              if (link.path) {
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-xl font-medium text-tn-text hover:bg-tn-gray"
                    style={({ isActive }) => isActive ? activeLinkStyle : {}}
                  >
                    {link.name}
                  </NavLink>
                );
              }
              if (link.items) {
                return (
                  <div key={link.name} className="pt-2">
                    <h3 className="px-3 text-sm font-bold text-gray-500 uppercase tracking-wider">{link.name}</h3>
                    {link.items.map(subLink => (
                       <NavLink
                        key={subLink.name}
                        to={subLink.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-md text-xl font-medium text-tn-text hover:bg-tn-gray"
                        style={({ isActive }) => isActive ? activeLinkStyle : {}}
                      >
                       - {subLink.name}
                      </NavLink>
                    ))}
                  </div>
                )
              }
              return null;
            })}
             <div className="px-3 py-4">
               <a href={`#/book-appointment`} onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full px-4 py-3 text-lg font-bold text-white bg-tn-accent rounded-lg hover:bg-red-800">
                <CalendarCheck size={20} className="mr-2"/>
                Book Appointment
              </a>
            </div>
             <div className="px-3 py-4 border-t">
               <a href={`tel:${siteData.contact.phone}`} className="flex items-center justify-center w-full text-lg font-semibold text-tn-primary hover:text-tn-accent">
                  <Phone size={20} className="mr-2"/>
                  {siteData.contact.phone}
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
