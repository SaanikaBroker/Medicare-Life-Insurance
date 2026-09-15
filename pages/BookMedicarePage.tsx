import React, { useEffect } from 'react';
import { Shield, Phone, ExternalLink } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';

const MEDICARE_DIRECT_LINK = "https://link.agent-crm.com/widget/booking/sshuQWEZWcJKSLCq9WZs";

const BookMedicarePage: React.FC = () => {
  const { siteData } = useAdminData();

  useEffect(() => {
    // Load the official GoHighLevel / Agent CRM form embed script
    const script = document.createElement('script');
    script.src = "https://link.agent-crm.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-tn-primary text-white py-14 sm:py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <Shield size={16} />
            <span>Medicare Consultation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Schedule Your Medicare 101 or Annual Review
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Choose a convenient date and time on the calendar below for your personalized, 100% free Medicare review.
          </p>
        </div>
      </section>

      {/* Main Content & Calendar Embed */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Direct Link Fallback */}
          <div className="flex justify-end mb-4">
            <a
              id="direct-medicare-booking-link"
              href={MEDICARE_DIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-tn-accent transition-colors"
            >
              <span>Calendar not loading? Open in new tab</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Embedded Medicare Calendar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden p-2 sm:p-4">
            <iframe
              src={MEDICARE_DIRECT_LINK}
              allow="payment"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '750px' }}
              scrolling="no"
              id="sshuQWEZWcJKSLCq9WZs_1789502321401"
              title="Schedule Your Medicare 101 or Annual Review"
            ></iframe>
          </div>

          {/* Secondary fallback notice */}
          <div className="text-center mt-6 text-xs sm:text-sm text-gray-500">
            <p>
              Trouble loading the calendar inside your browser?{' '}
              <a
                href={MEDICARE_DIRECT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tn-accent font-semibold underline hover:text-red-800"
              >
                Click here to launch the direct Medicare booking portal
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BookMedicarePage;
