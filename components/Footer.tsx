
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import Logo from './Logo';

const Footer: React.FC = () => {
    const { siteData } = useAdminData();

  return (
    <footer className="bg-tn-primary text-white pt-12 pb-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
        <div>
          <Logo className="h-12 w-auto mb-4 mx-auto md:mx-0" />
          <p className="text-gray-300">Your trusted Medicare & Life Insurance broker serving San Antonio and all of Texas.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><NavLink to="/medicare" className="hover:text-tn-accent">Medicare</NavLink></li>
            <li><NavLink to="/life-insurance" className="hover:text-tn-accent">Life Insurance</NavLink></li>
            <li><NavLink to="/about" className="hover:text-tn-accent">About Saanika</NavLink></li>
            <li><NavLink to="/reviews" className="hover:text-tn-accent">Reviews</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-tn-accent">Contact Us</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Phone: <a href={`tel:${siteData.contact.phone}`} className="hover:text-tn-accent">{siteData.contact.phone}</a></li>
            <li>Email: <a href={`mailto:${siteData.contact.email}`} className="hover:text-tn-accent">{siteData.contact.email}</a></li>
            <li>Location: {siteData.contact.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-tn-accent"><Facebook size={28} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
        <p className="mb-2">Disclaimer: We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.</p>
        <p>&copy; {new Date().getFullYear()} TrueNorth Medicare & Life Insurance. All Rights Reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
