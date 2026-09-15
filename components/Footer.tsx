
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import Logo from './Logo';

const Footer: React.FC = () => {
    const { siteData } = useAdminData();
    const facebookUrl = siteData.social.facebook && siteData.social.facebook !== '#'
      ? siteData.social.facebook
      : 'https://www.facebook.com/share/1C4agXRQ1Q/?mibextid=wwXIfr';
    const instagramUrl = siteData.social.instagram && siteData.social.instagram !== '#'
      ? siteData.social.instagram
      : 'https://www.instagram.com/saanika_insuranceadvisor?stkn=ZmtrZjRxZ2c4azNh';

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
            <li><NavLink to="/aca-marketplace" className="hover:text-tn-accent">ACA Marketplace</NavLink></li>
            <li><NavLink to="/dental-vision" className="hover:text-tn-accent">Dental & Vision Plans</NavLink></li>
            <li><NavLink to="/about" className="hover:text-tn-accent">About Saanika</NavLink></li>
            <li><NavLink to="/reviews" className="hover:text-tn-accent">Reviews</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-tn-accent">Contact Us</NavLink></li>
            <li className="pt-2 border-t border-slate-700">
              <NavLink to="/book-medicare" className="text-xs text-red-300 hover:text-white font-semibold">
                Medicare Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/book-general" className="text-xs text-slate-300 hover:text-white font-semibold">
                General Calendar
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Phone: <a href={`tel:${siteData.contact.phone}`} className="hover:text-tn-accent">{siteData.contact.phone}</a></li>
            <li>Email: <a href={`mailto:${siteData.contact.email}`} className="hover:text-tn-accent">{siteData.contact.email}</a></li>
            <li>Service Area: All of Texas</li>
            <li>Hours: {siteData.contact.hours || '10:00 a.m. to 6:00 p.m.'}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <p className="text-xs text-slate-300 mb-3">Stay connected for Medicare tips and insurance updates:</p>
          <div className="flex justify-center md:justify-start space-x-3 mb-3">
            <a 
              id="footer-facebook-icon-link"
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
              aria-label="Follow Saanika on Facebook"
              title="Follow Saanika on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              id="footer-instagram-icon-link"
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center text-white transition-colors"
              aria-label="Follow Saanika on Instagram"
              title="Follow Saanika on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          <div className="space-y-1.5 text-xs text-gray-300">
            <div>
              <a 
                id="footer-facebook-text-link"
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-tn-accent inline-flex items-center gap-1.5"
              >
                <span>Follow on Facebook</span>
              </a>
            </div>
            <div>
              <a 
                id="footer-instagram-text-link"
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-tn-accent inline-flex items-center gap-1.5"
              >
                <span>Follow on Instagram</span>
              </a>
            </div>
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
