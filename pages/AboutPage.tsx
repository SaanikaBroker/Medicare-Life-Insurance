
import React, { useState } from 'react';
import Button from '../components/Button';
import { 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  MapPin,
  Shield,
  Building2,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import { medicareCarriersList, lifeInsuranceCarriersList } from '../data/carrierData';
import DualBookingButtons from '../components/DualBookingButtons';
import CarrierLogos from '../components/CarrierLogos';
import BrokerPhoto from '../components/BrokerPhoto';

const AboutPage: React.FC = () => {
  const { siteData } = useAdminData();

  return (
    <div className="bg-tn-gray">
      {/* Page Header */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-tn-accent font-medium tracking-wider text-xs uppercase">
            Meet Your Advocate
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-tn-primary mt-1">About Saanika</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            Your Dedicated, Local Texas Insurance Broker
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="md:flex gap-8 items-start">
              
              {/* Profile Photo Column */}
              <div className="md:w-5/12 mb-6 md:mb-0 flex-shrink-0">
                <BrokerPhoto mode="portrait" />

                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
                  <p className="font-semibold text-tn-primary text-sm">Saanika</p>
                  <p className="text-xs text-gray-500">Licensed Independent Broker</p>
                  <p className="text-xs text-gray-500">San Antonio, Texas</p>
                </div>

                {/* Booking Tiles Under Picture */}
                <div className="mt-5 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block text-center">
                    Book a Consultation
                  </span>

                  {/* Tile 1: Medicare 101 */}
                  <a
                    id="tile-book-medicare-about"
                    href="#/book-medicare"
                    className="group block p-3.5 rounded-xl bg-red-50/70 border border-red-200/80 hover:border-tn-accent hover:bg-red-50 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tn-accent text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                        <Shield size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-bold text-tn-primary group-hover:text-tn-accent transition-colors leading-snug">
                            Medicare 101 or Review
                          </h4>
                          <ArrowRight size={14} className="text-tn-accent group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                        </div>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
                          Turning 65, Advantage, Supplements & Part D
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Tile 2: General Appointment */}
                  <a
                    id="tile-book-general-about"
                    href="#/book-general"
                    className="group block p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-tn-primary hover:bg-slate-100/80 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tn-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                        <HeartHandshake size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-bold text-tn-primary group-hover:text-tn-primary transition-colors leading-snug">
                            Life, Obamacare / Marketplace Insurance & Pre-Need
                          </h4>
                          <ArrowRight size={14} className="text-tn-primary group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                        </div>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
                          General consultation, subsidies & funeral planning
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Bio Content Column */}
              <div className="md:w-7/12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mb-4">Hi, I’m Saanika.</h2>
                <div className="space-y-4 text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    As a <strong>licensed insurance broker based in San Antonio</strong>, my focus is helping individuals, seniors, and families make sense of <strong>Medicare</strong>, <strong>Life Insurance</strong>, <strong>Obamacare / Marketplace Insurance</strong>, and <strong>Dental & Vision coverage</strong>.
                  </p>
                  <p>
                    For anyone <strong>approaching 65</strong>, educational <strong>Medicare 101 sessions</strong> are offered in person, by Zoom, or over the phone to explain enrollment timelines and plan differences clearly before any decisions are made.
                  </p>
                  <p>
                    With <strong>Obamacare / Marketplace Insurance</strong>, household income is evaluated to help you qualify for <strong>subsidies that lower your monthly premium</strong>, followed by a side-by-side comparison of plans that include your preferred doctors and prescriptions.
                  </p>
                  <p>
                    When planning ahead with <strong>Life & Burial Insurance</strong> and <strong>funeral home planning</strong>, rates and plans are <strong>compared across 40 of the most trusted insurance carriers</strong> to find the right protection for your family and budget.
                  </p>
                  <p>
                    Families also have access to <strong>Pre-Need plans from the 7 most reputed funeral homes in San Antonio</strong>, locking in current costs, easing the emotional and financial burden on loved ones, and ensuring personal wishes are carried out with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saanika Section */}
      <section className="py-14 sm:py-16 bg-tn-gray">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <span className="text-tn-accent font-medium tracking-wider text-xs uppercase">
            Core Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mt-1 mb-10">Our Commitment to You</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left sm:text-center">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-base font-semibold text-tn-primary mb-1.5">Honesty & Transparency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Providing unbiased guidance tailored strictly to your best interests, never an insurance company's bottom line.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-base font-semibold text-tn-primary mb-1.5">Expert Knowledge</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Rigorous, up-to-date expertise in Texas provider networks, drug formularies, and Medicare regulations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-base font-semibold text-tn-primary mb-1.5">Year-Round Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Client care continues well beyond enrollment, providing continuous advocacy whenever questions or claims arise.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <MapPin size={24} />
              </div>
              <h3 className="text-base font-semibold text-tn-primary mb-1.5">Proudly Texan</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Deeply rooted in the local Texas healthcare landscape, serving families and businesses statewide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contracted Carriers & Partners Section */}
      <section id="about-carriers-list-section" className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-tn-accent font-semibold tracking-wider text-xs uppercase">
              Extensive Carrier Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary mt-1 mb-3">
              Insurance Carriers & Health Plans Represented
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              As an independent brokerage, we are not tied to any single company. We compare rates and plans across <strong>40 of the most trusted insurance carriers</strong> to find the solution that truly fits your needs, alongside Pre-Need plans from the <strong>7 most reputed funeral homes in San Antonio</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Medicare / ACA Health Plans List */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-tn-accent flex items-center justify-center">
                  <Shield size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-tn-primary">
                    Medicare & Obamacare / Marketplace Insurance
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    Advantage, Supplements, Part D & Obamacare / Marketplace Insurance
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                Directly contracted with leading major health carriers across Texas to help you verify doctor networks, compare maximum out-of-pocket costs, check prescription formularies, and qualify for Obamacare / Marketplace subsidies:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {medicareCarriersList.map((carrier) => (
                  <li 
                    key={carrier.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-150 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-tn-accent flex-shrink-0"></span>
                    <span>{carrier.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Life Insurance & Pre-Need Carriers List */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-tn-primary flex items-center justify-center">
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-tn-primary">
                    Life Insurance & Final Expense Carriers
                  </h3>
                  <span className="text-xs text-gray-500 font-medium">
                    Term, Whole Life, Burial & Pre-Need Coverage
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                Access to over 40 life and burial insurance providers plus 7 leading San Antonio funeral homes to ensure your family's financial security and legacy:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {lifeInsuranceCarriersList.map((carrier) => (
                  <li 
                    key={carrier.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-150 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-tn-primary flex-shrink-0"></span>
                    <span>{carrier.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* San Antonio Funeral Homes Note */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-tn-primary flex items-center justify-center flex-shrink-0">
              <Building2 size={22} />
            </div>
            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong className="text-tn-primary block text-sm font-semibold mb-0.5">
                San Antonio Funeral Home Partnerships
              </strong>
              <span>
                Offering pre-need plans partnered with <strong>7 of the most respected funeral homes in the greater San Antonio area</strong>. Lock in current merchandise and service prices, remove emotional guesswork for your children, and customize your personal celebration preferences in advance.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Carriers I Work With */}
      <CarrierLogos mode="all-other" />

      {/* Final CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mb-3">Let's Secure Your Future, Together</h2>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Ready to discuss your options? Schedule a relaxed, no-pressure consultation with Saanika today.
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <DualBookingButtons variant="light" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
