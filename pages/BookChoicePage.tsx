import React from 'react';
import { Calendar, Shield, HeartHandshake, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';

const BookChoicePage: React.FC = () => {
  const { siteData } = useAdminData();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-tn-primary text-white py-14 sm:py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <Calendar size={16} />
            <span>Select Consultation Type</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Book an Appointment
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
            Choose the consultation option that best fits your goals today. Consultations are always 100% free with zero obligation.
          </p>
        </div>
      </section>

      {/* Choice Options */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Option 1: Medicare 101 / Annual Review */}
            <div className="bg-white rounded-2xl border-2 border-tn-accent/30 hover:border-tn-accent p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-tn-accent flex items-center justify-center mb-5">
                  <Shield size={26} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-tn-accent block mb-1">
                  Option 1
                </span>
                <h2 className="text-2xl font-bold text-tn-primary mb-3">
                  Medicare 101 / Annual Review
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  For seniors turning 65, reviewing Medicare Advantage, Medicare Supplement (Medigap), or Part D prescription drug plans.
                </p>

                <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Turning 65 enrollment guidance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Annual Medicare plan comparison</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Prescription formulary checks</span>
                  </li>
                </ul>
              </div>

              <a
                id="btn-choose-medicare"
                href="#/book-medicare"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-base bg-tn-accent text-white hover:bg-red-800 shadow-md transition-all text-center"
              >
                <span>Schedule Your Medicare 101 or Annual Review</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Option 2: General Appointment */}
            <div className="bg-white rounded-2xl border border-slate-200 hover:border-tn-primary p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-tn-primary flex items-center justify-center mb-5">
                  <HeartHandshake size={26} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-tn-primary block mb-1">
                  Option 2
                </span>
                <h2 className="text-2xl font-bold text-tn-primary mb-3">
                  General Appointment
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  For Final Expense / Burial protection, Term or Whole Life Insurance, Obamacare / Marketplace Insurance, or Dental & Vision coverage.
                </p>

                <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Final Expense & Burial insurance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Term & Whole Life protection</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <span>Obamacare / Marketplace Insurance & Dental / Vision</span>
                  </li>
                </ul>
              </div>

              <a
                id="btn-choose-general"
                href="#/book-general"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-base bg-tn-primary text-white hover:bg-blue-900 shadow-md transition-all text-center"
              >
                <span>Book a General Appointment</span>
                <ArrowRight size={18} />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Carriers I Work With */}
      <CarrierLogos mode="all-other" />
    </div>
  );
};

export default BookChoicePage;
