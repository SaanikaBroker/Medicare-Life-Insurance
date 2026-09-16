import React, { useEffect } from 'react';
import { HeartHandshake, Phone, ExternalLink } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';

const GENERAL_DIRECT_LINK = "https://link.agent-crm.com/widget/booking/zzkam9mmGJQNlKGUw9BM";

const BookAppointmentPage: React.FC = () => {
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
            <HeartHandshake size={16} />
            <span>Consultation Calendar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Book a General Appointment
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Schedule a dedicated time to discuss Final Expense, Life & Burial Insurance, Obamacare / Marketplace Insurance, or Dental & Vision plans.
          </p>
        </div>
      </section>

      {/* Main Content & Calendar Embed */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Direct Link Fallback */}
          <div className="flex justify-end mb-4">
            <a
              id="direct-general-booking-link"
              href={GENERAL_DIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-tn-accent transition-colors"
            >
              <span>Calendar not loading? Open in new tab</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Embedded General Appointment Calendar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden p-2 sm:p-4">
            <iframe
              src={GENERAL_DIRECT_LINK}
              allow="payment"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '750px' }}
              scrolling="no"
              id="zzkam9mmGJQNlKGUw9BM_1789502404512"
              title="Book a General Appointment"
            ></iframe>
          </div>

          {/* Secondary fallback notice */}
          <div className="text-center mt-6 text-xs sm:text-sm text-gray-500">
            <p>
              Trouble loading the calendar inside your browser?{' '}
              <a
                href={GENERAL_DIRECT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tn-accent font-semibold underline hover:text-red-800"
              >
                Click here to launch the direct booking portal
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BookAppointmentPage;
