
import React from 'react';
import Button from '../components/Button';
import { HeartHandshake, ShieldCheck, TrendingUp, Infinity, Shield, Baby, Landmark } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';
import { lifeInsuranceCarriers } from '../data/carrierData';
import LifeInsuranceVideoReel from '../components/LifeInsuranceVideoReel';

const LifeInsurancePage: React.FC = () => {
    const { siteData } = useAdminData();

  const insuranceTypes = [
    { 
      icon: <Infinity size={22} className="text-tn-accent"/>,
      title: "Whole Life", 
      description: "Permanent coverage with guaranteed level premiums, a locked-in death benefit, and stable cash value growth." 
    },
    { 
      icon: <Shield size={22} className="text-tn-accent"/>,
      title: "Term Life", 
      description: "Affordable coverage for a specific period (e.g., 10, 20, or 30 years). Ideal for covering mortgages or family income." 
    },
    { 
      icon: <TrendingUp size={22} className="text-tn-accent"/>,
      title: "Universal Life", 
      description: "A flexible permanent policy that allows you to adjust premiums and death benefits as your financial goals change." 
    },
    { 
      icon: <Landmark size={22} className="text-tn-accent"/>,
      title: "Burial / Final Expense", 
      description: "A specialized, simplified whole life policy designed to lift funeral and end-of-life expenses off your family." 
    },
    { 
      icon: <ShieldCheck size={22} className="text-tn-accent"/>,
      title: "Accidental Life", 
      description: "Provides financial benefits if injury or death occurs as the result of a covered accident." 
    },
    { 
      icon: <Baby size={22} className="text-tn-accent"/>,
      title: "Children’s Whole Life", 
      description: "Secure lifelong protection and insurability for children or grandchildren at rates that never increase." 
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tn-primary text-white py-14 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-12 h-12 rounded-full bg-white/10 text-red-300 flex items-center justify-center mx-auto mb-3">
            <HeartHandshake size={24}/>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold">Protecting What Matters Most</h1>
          <p className="text-base sm:text-lg text-slate-200 mt-2 max-w-2xl mx-auto leading-relaxed">
            Secure your family's future and lift final expense burdens with straightforward life insurance guidance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-tn-accent font-medium tracking-wider text-xs uppercase">
              Financial Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mt-1 mb-3">Understanding Life Insurance</h2>
            <p className="text-base leading-relaxed text-gray-600 font-normal">
              Life insurance is a mutual contract designed to safeguard those who depend on you. In exchange for predictable premium payments, your insurer provides a tax-free benefit to your beneficiaries. We assist you in matching coverage to your real family goals without paying for what you do not need.
            </p>
          </div>

          {/* Types of Life Insurance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {insuranceTypes.map((type, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-3 border border-red-100">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-tn-primary mb-1.5">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow font-normal">{type.description}</p>
              </div>
            ))}
          </div>

          {/* Educational Video Guides: Term Vs Whole Life & $9.99 Life Insurance Alert */}
          <LifeInsuranceVideoReel />
          
          {/* Highlighted Whole Life Section */}
          <div className="bg-slate-50 border border-blue-100 p-6 sm:p-8 rounded-xl max-w-4xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-wider text-tn-accent font-medium">Permanent Protection</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-tn-primary mt-1 mb-3">
              Why Whole Life Insurance Is a Steady Long-Term Solution
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Whole life insurance is designed for lifelong peace of mind. As long as premiums are maintained, the policy never expires and continues to accumulate dependable value over time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start">
                    <Infinity className="text-tn-primary mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                    <span><strong className="text-tn-primary">Lifetime Coverage:</strong> Your policy stays in force for your full lifetime.</span>
                </div>
                <div className="flex items-start">
                    <TrendingUp className="text-tn-primary mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                    <span><strong className="text-tn-primary">Cash Value Growth:</strong> Builds a tax-deferred cash reserve accessible when needed.</span>
                </div>
                <div className="flex items-start">
                    <ShieldCheck className="text-tn-primary mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                    <span><strong className="text-tn-primary">Fixed Premiums:</strong> Your monthly rate is locked and guaranteed to never rise.</span>
                </div>
                <div className="flex items-start">
                    <HeartHandshake className="text-tn-primary mr-2.5 mt-0.5 flex-shrink-0" size={18} />
                    <span><strong className="text-tn-primary">Family Legacy:</strong> Delivers a tax-free financial benefit directly to your loved ones.</span>
                </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mb-2">Ready to Discuss Your Coverage?</h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Every family’s circumstances are different. Let's compare options from top-rated carriers to find comfortable protection.
            </p>
            <a 
              id="btn-life-page-cta"
              href="#/book-general" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-base bg-tn-primary text-white hover:bg-blue-900 shadow-md transition-all text-center"
            >
              Book a General Appointment
            </a>
          </div>

        </div>
      </section>
      <CarrierLogos mode="final-expense" />
    </div>
  );
};

export default LifeInsurancePage;
