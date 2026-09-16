import React from 'react';
import Button from '../components/Button';
import AccordionItem from '../components/AccordionItem';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  Users, 
  FileText, 
  HelpCircle,
  Clock
} from 'lucide-react';
import acaImage from '../src/assets/images/tile_aca_full_family_1789412990092.jpg';
import DualBookingButtons from '../components/DualBookingButtons';
import CarrierLogos from '../components/CarrierLogos';

const AcaMarketplacePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-tn-primary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url(${acaImage})` }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-800 text-blue-200 text-sm font-semibold tracking-wider uppercase mb-4">
            Under-65 Individual & Family Coverage
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Obamacare / Marketplace Insurance
          </h1>
          <p className="text-xl text-gray-200 mt-2 max-w-3xl mx-auto">
            Affordable, comprehensive healthcare coverage for individuals, families, and self-employed Texans with low or $0 monthly premiums through federal subsidies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button as="a" href="#/contact" variant="primary">
              Check Your Subsidy & Rates
            </Button>
            <Button as="a" href="#/book-appointment" variant="outline" className="border-white text-white hover:bg-white hover:text-tn-primary">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-tn-primary mb-4">
                What is Obamacare / Marketplace Insurance?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Obamacare / Marketplace Insurance (established by the Affordable Care Act) is the official federal health insurance exchange that allows individuals and families who do not have coverage through an employer or Medicare to enroll in comprehensive, qualified health plans.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Plans on the Marketplace are legally required to cover all pre-existing conditions and provide 10 essential health benefit categories. Plus, depending on your household income and size, you may qualify for <strong>Advanced Premium Tax Credits (APTC)</strong> that dramatically lower your monthly premium—often down to $0/month.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                <DollarSign className="text-tn-accent mb-3" size={36} />
                <h3 className="text-xl font-bold text-tn-primary mb-2">Government Subsidies</h3>
                <p className="text-gray-600">
                  Most Texans qualify for premium tax credits that lower monthly insurance payments and reduce out-of-pocket deductibles through Cost-Sharing Reductions (CSR).
                </p>
              </div>

              <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                <ShieldCheck className="text-tn-accent mb-3" size={36} />
                <h3 className="text-xl font-bold text-tn-primary mb-2">Pre-Existing Conditions Covered</h3>
                <p className="text-gray-600">
                  You cannot be denied coverage, charged higher premiums, or dropped because of pre-existing health conditions like diabetes, asthma, or high blood pressure.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                <CheckCircle2 className="text-tn-accent mb-3" size={36} />
                <h3 className="text-xl font-bold text-tn-primary mb-2">10 Essential Health Benefits</h3>
                <p className="text-gray-600">
                  Includes doctor visits, preventive screenings, emergency services, hospitalization, prescription drugs, mental health, maternity, and lab services.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                <Users className="text-tn-accent mb-3" size={36} />
                <h3 className="text-xl font-bold text-tn-primary mb-2">Tailored for Self-Employed</h3>
                <p className="text-gray-600">
                  Ideal for small business owners, freelancers, 1099 contractors, early retirees under 65, and individuals transitioning between jobs.
                </p>
              </div>
            </div>

            {/* Metal Tiers Accordion */}
            <div>
              <h2 className="text-3xl font-bold text-tn-primary mb-6">
                Understanding the 4 Metal Plan Tiers
              </h2>
              <AccordionItem icon={<FileText size={28} />} title="Bronze Plans: Lowest Monthly Cost">
                <p>Bronze plans have the lowest monthly premiums but higher deductibles and copays. They are ideal for individuals who want low-cost catastrophic protection against major medical emergencies.</p>
              </AccordionItem>
              <AccordionItem icon={<FileText size={28} />} title="Silver Plans: Best Value with Cost-Sharing Reductions">
                <p>Silver plans offer moderate premiums and moderate deductibles. If you qualify for Cost-Sharing Reductions (CSR) based on income, choosing a Silver plan gives you the benefits of a Gold or Platinum plan at a fraction of the cost!</p>
              </AccordionItem>
              <AccordionItem icon={<FileText size={28} />} title="Gold Plans: High Coverage for Frequent Healthcare Needs">
                <p>Gold plans have higher monthly premiums but low deductibles and copays. If you have recurring prescription needs, ongoing specialist visits, or an upcoming surgery, Gold plans provide substantial financial security.</p>
              </AccordionItem>
              <AccordionItem icon={<FileText size={28} />} title="Platinum Plans: Maximum Coverage and Lowest Out-of-Pocket">
                <p>Platinum plans cover the highest percentage of medical costs (typically 90%) with the lowest deductibles, designed for individuals requiring extensive, continuous care.</p>
              </AccordionItem>
            </div>

            {/* Enrollment Periods */}
            <div className="bg-blue-50 border-l-4 border-tn-primary p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-tn-primary" size={32} />
                <h3 className="text-2xl font-bold text-tn-primary">When Can You Enroll?</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>1. Annual Open Enrollment Period (OEP):</strong> Runs every year from <strong>November 1 through January 15</strong>. Anyone can enroll, renew, or switch plans during this window.
                </p>
                <p>
                  <strong>2. Special Enrollment Period (SEP):</strong> You can enroll <em>any time during the year</em> if you experience a qualifying life event (QLE) within the last 60 days, such as:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-gray-600">
                  <li>Losing employer-sponsored or COBRA coverage</li>
                  <li>Moving to a new zip code or state (e.g., relocating to Texas)</li>
                  <li>Getting married or divorced</li>
                  <li>Having a baby or adopting a child</li>
                  <li>Changes in household income that affect subsidy eligibility</li>
                  <li>Aging off a parent's plan at age 26</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Sticky Sidebar */}
          <aside>
            <div className="bg-tn-primary text-white p-8 rounded-lg shadow-xl sticky top-24">
              <span className="inline-block px-3 py-1 rounded bg-tn-accent text-white text-xs font-bold uppercase mb-4">
                100% Free Broker Help
              </span>
              <h3 className="text-2xl font-bold mb-4">Why Enroll With TrueNorth?</h3>
              <p className="text-gray-200 text-sm mb-6">
                Enrolling through TrueNorth costs exactly the same as doing it alone on HealthCare.gov, but you gain an experienced Texas broker who:
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-tn-accent mt-0.5 flex-shrink-0" size={18} />
                  <span>Calculates your exact tax credit and ensures you maximize subsidies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-tn-accent mt-0.5 flex-shrink-0" size={18} />
                  <span>Verifies your preferred doctors, specialists, and hospitals are in-network.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-tn-accent mt-0.5 flex-shrink-0" size={18} />
                  <span>Checks your prescription medication formulary coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-tn-accent mt-0.5 flex-shrink-0" size={18} />
                  <span>Assists with annual renewals and document verification requests.</span>
                </li>
              </ul>

              <div className="mt-8">
                <p className="text-xs text-slate-200 uppercase tracking-wider font-semibold mb-3">Book an Appointment:</p>
                <DualBookingButtons variant="dark" layout="column" />
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-tn-primary mb-2">Ready to Review Texas Health Plans?</h3>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Schedule a free consultation to check your subsidy savings and provider networks.
          </p>
          <DualBookingButtons variant="light" />
        </div>
      </div>

      {/* Obamacare / Marketplace Carriers */}
      <CarrierLogos mode="marketplace" />
    </div>
  );
};

export default AcaMarketplacePage;
