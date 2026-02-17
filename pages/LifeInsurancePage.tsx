
import React from 'react';
import Button from '../components/Button';
import { HeartHandshake, ShieldCheck, TrendingUp, Infinity, Shield, Baby, Landmark } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';
import { lifeInsuranceCarriers } from '../data/carrierData';

const LifeInsurancePage: React.FC = () => {
    const { siteData } = useAdminData();

  const insuranceTypes = [
    { 
      icon: <Infinity size={40} className="text-tn-accent"/>,
      title: "Whole Life", 
      description: "Permanent coverage with guaranteed premiums, death benefit, and cash value growth. A cornerstone of financial planning." 
    },
    { 
      icon: <Shield size={40} className="text-tn-accent"/>,
      title: "Term Life", 
      description: "Affordable coverage for a specific period (e.g., 10, 20, or 30 years). Ideal for covering mortgages or income replacement." 
    },
    { 
      icon: <TrendingUp size={40} className="text-tn-accent"/>,
      title: "Universal Life", 
      description: "A flexible permanent policy that allows you to adjust your premiums and death benefit as your needs change." 
    },
    { 
      icon: <Landmark size={40} className="text-tn-accent"/>,
      title: "Burial / Final Expense", 
      description: "A small whole life policy designed to cover funeral costs, medical bills, and other end-of-life expenses." 
    },
    { 
      icon: <ShieldCheck size={40} className="text-tn-accent"/>,
      title: "Accidental Life", 
      description: "Provides a benefit if death occurs as the result of a covered accident. Often used to supplement other coverage." 
    },
    { 
      icon: <Baby size={40} className="text-tn-accent"/>,
      title: "Children’s Whole Life", 
      description: "Secure lifelong insurance protection for your children or grandchildren at a low rate that never increases." 
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tn-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <HeartHandshake className="mx-auto text-tn-accent mb-4" size={64}/>
          <h1 className="text-5xl font-extrabold">Protecting What Matters Most</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">Secure your family's future and cover final expenses with the right life insurance plan.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-tn-primary mb-4">What is Life Insurance?</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Life insurance is a contract between you and an insurer. In exchange for premium payments, the insurer pays a lump-sum, tax-free death benefit to your designated beneficiaries upon your death. It's a fundamental tool for protecting your loved ones from financial hardship and ensuring your legacy lives on.
            </p>
          </div>

          {/* Types of Life Insurance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {insuranceTypes.map((type, index) => (
              <div key={index} className="bg-tn-gray p-8 rounded-lg shadow-lg flex flex-col">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-tn-primary mb-2">{type.title}</h3>
                <p className="text-lg text-gray-700 flex-grow">{type.description}</p>
              </div>
            ))}
          </div>
          
          {/* Highlighted Whole Life Section */}
          <div className="bg-blue-50 border-l-4 border-tn-accent p-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold text-tn-primary mb-4">Why Whole Life Insurance Is a Powerful Long-Term Solution</h3>
            <p className="text-lg text-gray-800 mb-6">
              Whole life insurance is more than just a death benefit; it's a versatile financial asset. It provides permanent protection that never expires, as long as premiums are paid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                <div className="flex items-start">
                    <Infinity className="text-tn-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Lifetime Coverage:</strong> Your policy remains in force for your entire life.</span>
                </div>
                <div className="flex items-start">
                    <TrendingUp className="text-tn-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Cash Value Growth:</strong> Builds a tax-deferred cash value you can borrow against.</span>
                </div>
                <div className="flex items-start">
                    <ShieldCheck className="text-tn-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Fixed Premiums:</strong> Your payments are guaranteed to never increase.</span>
                </div>
                <div className="flex items-start">
                    <HeartHandshake className="text-tn-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Legacy Planning:</strong> Ensures your loved ones receive a tax-free inheritance.</span>
                </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <h2 className="text-4xl font-bold text-tn-primary mb-4">Ready to Find Your Plan?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Every family is unique. Let's find a life insurance solution that fits your specific needs and budget.
            </p>
            <Button as="a" href="#/contact">Request a Free Quote</Button>
          </div>

        </div>
      </section>
      <CarrierLogos carriers={lifeInsuranceCarriers} title="We Partner With Top-Rated Life Insurance Carriers" />
    </div>
  );
};

export default LifeInsurancePage;
