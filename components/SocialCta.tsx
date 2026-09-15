import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface SocialCtaProps {
  className?: string;
}

const SocialCta: React.FC<SocialCtaProps> = ({ className = '' }) => {
  const facebookUrl = "https://www.facebook.com/share/1C4agXRQ1Q/?mibextid=wwXIfr";
  const instagramUrl = "https://www.instagram.com/saanika_insuranceadvisor?stkn=ZmtrZjRxZ2c4azNh";

  return (
    <section 
      id="global-social-cta"
      aria-label="Connect with Saanika on Social Media"
      className={`py-10 bg-slate-50 border-t border-slate-200/80 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-tn-primary mb-2">
          Connect with Saanika
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
          Follow me for Medicare tips, insurance updates, and simple answers to common questions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            id="social-cta-facebook-btn"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 text-sm font-medium shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
          >
            <Facebook size={18} className="text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>Follow on Facebook</span>
          </a>

          <a
            id="social-cta-instagram-btn"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-pink-500 text-slate-800 hover:text-pink-600 text-sm font-medium shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
          >
            <Instagram size={18} className="text-pink-600 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialCta;
