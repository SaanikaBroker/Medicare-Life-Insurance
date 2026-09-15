import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, HeartHandshake, Calendar, CheckCircle } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';

const ContactPage: React.FC = () => {
  const { siteData } = useAdminData();
  const recipientEmail = siteData.contact.email || 'sprabhu.csb@gmail.com';

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tn-primary text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Ready to Talk?
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto">
            Choose the type of appointment that works best for you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Appointment Options Section */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-tn-accent font-semibold tracking-wider text-xs uppercase">
                Schedule a Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary mt-1 mb-3">
                Book Your 1-on-1 Appointment
              </h2>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Consultations are 100% free with zero sales pressure or obligation. Select an option below to pick a time on the calendar:
              </p>

              <div className="space-y-4">
                {/* Option 1: Medicare Review */}
                <div className="p-5 rounded-xl border-2 border-tn-accent/30 bg-red-50/40 hover:border-tn-accent transition-all">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-tn-accent text-white flex items-center justify-center flex-shrink-0">
                      <Shield size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-tn-primary">
                        Medicare 101 or Annual Review
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                        Medicare Advantage, Medicare Supplement (Medigap), Part D prescription review, and Turning 65 guidance.
                      </p>
                    </div>
                  </div>
                  <a
                    id="contact-page-btn-medicare"
                    href="#/book-medicare"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm sm:text-base bg-tn-accent text-white hover:bg-red-800 shadow-sm transition-all"
                  >
                    <Calendar size={18} />
                    <span>Schedule Your Medicare 101 or Annual Review</span>
                  </a>
                </div>

                {/* Option 2: General Appointment */}
                <div className="p-5 rounded-xl border border-slate-300 bg-white hover:border-tn-primary transition-all">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-tn-primary text-white flex items-center justify-center flex-shrink-0">
                      <HeartHandshake size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-tn-primary">
                        General Consultation
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                        Final Expense / Burial protection, Term & Whole Life, ACA Marketplace individual & family plans, or Dental & Vision.
                      </p>
                    </div>
                  </div>
                  <a
                    id="contact-page-btn-general"
                    href="#/book-general"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm sm:text-base bg-tn-primary text-white hover:bg-blue-900 shadow-sm transition-all"
                  >
                    <Calendar size={18} />
                    <span>Book a General Appointment</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <CheckCircle size={16} className="text-emerald-600 flex-shrink-0" />
                <span>No paperwork or contact forms required before selecting your date and time.</span>
              </div>
            </div>

            {/* Direct Contact Information (Secondary) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-tn-primary mb-5">
                  Direct Contact Details
                </h3>

                <div className="space-y-5 text-gray-800">
                  <div className="flex items-start">
                    <Phone className="text-tn-accent mr-3.5 mt-1 flex-shrink-0" size={26} />
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Call or Text</span>
                      <a href={`tel:${siteData.contact.phone}`} className="hover:text-tn-accent font-bold text-2xl text-tn-primary block mt-0.5">
                        {siteData.contact.phone}
                      </a>
                      <span className="text-xs text-gray-500">Click to dial immediately</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-tn-accent mr-3.5 mt-1 flex-shrink-0" size={26} />
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Email Directly</span>
                      <a href={`mailto:${recipientEmail}`} className="hover:text-tn-accent font-medium text-base text-tn-primary break-all block mt-0.5">
                        {recipientEmail}
                      </a>
                      <span className="text-xs text-gray-500">Fast response within 24 business hours</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-tn-accent mr-3.5 mt-1 flex-shrink-0" size={26} />
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Service Area</span>
                      <span className="font-semibold text-tn-primary text-base">All of Texas</span>
                      <p className="text-xs text-gray-500 mt-0.5">Virtual consultations, phone appointments, and statewide coverage assistance.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-tn-accent mr-3.5 mt-1 flex-shrink-0" size={26} />
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Business Hours</span>
                      <span className="font-medium text-tn-primary text-sm">{siteData.contact.hours || '10:00 a.m. to 6:00 p.m.'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CarrierLogos />
    </div>
  );
};

export default ContactPage;
