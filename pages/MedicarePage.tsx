
import React from 'react';
import AccordionItem from '../components/AccordionItem';
import Button from '../components/Button';
// FIX: Added 'Handshake' to the import from lucide-react to fix 'Cannot find name' error.
import { Hospital, Stethoscope, Users, Pill, ShieldPlus, BookOpen, PiggyBank, UserCheck, Handshake } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';
import { medicareCarriers } from '../data/carrierData';

const MedicarePage: React.FC = () => {
    const { siteData } = useAdminData();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tn-gray py-14 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-tn-accent font-medium tracking-wider text-xs uppercase">
            Texas Medicare Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-tn-primary mt-1">Understanding Medicare</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            We make Medicare simple, so you can choose the plan that is right for your doctors, prescriptions, and budget.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Left/Main Column */}
          <div className="lg:col-span-2">
            
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-tn-primary mb-3">What is Medicare?</h2>
              <p className="text-base leading-relaxed text-gray-600">
                Medicare is the federal health insurance program for people who are 65 or older, certain younger individuals with qualifying disabilities, and people with End-Stage Renal Disease. It is divided into different parts covering specific services. Our role is to help you understand these parts and find a plan that covers your healthcare needs without unexpected out-of-pocket costs.
              </p>
            </div>

            {/* Medicare Parts Accordion */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-tn-primary mb-5">The Parts of Medicare</h2>
                <AccordionItem icon={<Hospital size={24} />} title="Part A (Hospital Insurance)">
                    <p>Part A covers inpatient hospital care, skilled nursing facility care, hospice care, and home health care. For most people who have worked and paid Medicare taxes, Part A is premium-free.</p>
                </AccordionItem>
                <AccordionItem icon={<Stethoscope size={24} />} title="Part B (Medical Insurance)">
                    <p>Part B covers certain doctors' services, outpatient care, medical supplies, and preventive services. You will pay a monthly premium for Part B, which is often deducted from your Social Security benefit.</p>
                </AccordionItem>
                <AccordionItem icon={<Users size={24} />} title="Part C (Medicare Advantage)">
                    <p>Medicare Advantage Plans are an "all in one" alternative to Original Medicare. These bundled plans include Part A, Part B, and usually Part D. Most plans offer extra benefits that Original Medicare doesn’t cover — like vision, hearing, and dental. These are offered by private insurance companies approved by Medicare.</p>
                </AccordionItem>
                <AccordionItem icon={<Pill size={24} />} title="Part D (Prescription Drug Coverage)">
                    <p>Part D helps cover the cost of prescription drugs. These plans are run by private insurance companies that follow rules set by Medicare. If you have Original Medicare, you can get Part D coverage by joining a standalone Prescription Drug Plan.</p>
                </AccordionItem>
                <AccordionItem icon={<ShieldPlus size={24} />} title="Medicare Supplement (Medigap)">
                    <p>Medigap policies help pay some of the remaining healthcare costs that Original Medicare doesn't cover, like copayments, coinsurance, and deductibles. A Medigap policy is different from a Medicare Advantage Plan. It only supplements your Original Medicare benefits.</p>
                </AccordionItem>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Medicare 101 */}
                <div className="bg-tn-gray p-6 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                      <BookOpen size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-tn-primary mb-3">Medicare 101</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong className="text-tn-primary">Initial Enrollment:</strong> A 7-month window when you first become eligible.</li>
                        <li><strong className="text-tn-primary">Annual Enrollment (AEP):</strong> October 15 - December 7 each year to review or change plans.</li>
                        <li><strong className="text-tn-primary">Special Enrollment (SEP):</strong> For life events like moving or retiring and losing employer coverage.</li>
                        <li><strong className="text-tn-primary">Common Pitfalls:</strong> Avoiding late penalties and verifying prescription formularies.</li>
                    </ul>
                </div>

                {/* Financial Assistance */}
                <div className="bg-tn-gray p-6 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                      <PiggyBank size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-tn-primary mb-3">Financial Assistance</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Programs like Medicaid and LIS (Extra Help) can significantly lower your prescription and monthly costs.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong className="text-tn-primary">Medicaid:</strong> Helps with medical costs for qualifying individuals.</li>
                        <li><strong className="text-tn-primary">LIS (Extra Help):</strong> Covers or lowers Part D copays and premiums.</li>
                        <li><strong className="text-tn-primary">Dual Eligibility:</strong> Qualifying for both Medicare and Texas Medicaid.</li>
                    </ul>
                </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <aside>
            <div className="bg-tn-primary text-white p-7 rounded-xl shadow-md sticky top-24">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-3">
                <UserCheck size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Why Work With a Broker?</h3>
              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start">
                  <ShieldPlus className="mr-2.5 mt-0.5 flex-shrink-0 text-red-300" size={18} />
                  <span><strong className="text-white">Unbiased Guidance:</strong> We work for you, not one specific insurance company.</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="mr-2.5 mt-0.5 flex-shrink-0 text-red-300" size={18} />
                  <span><strong className="text-white">Plan Comparison:</strong> We simplify comparing multiple carriers in your zip code.</span>
                </li>
                <li className="flex items-start">
                  <Handshake className="mr-2.5 mt-0.5 flex-shrink-0 text-red-300" size={18} />
                  <span><strong className="text-white">Year-Round Support:</strong> We are here for you whenever claims or billing questions arise.</span>
                </li>
                <li className="flex items-start">
                  <PiggyBank className="mr-2.5 mt-0.5 flex-shrink-0 text-red-300" size={18} />
                  <span><strong className="text-white">Zero Cost to You:</strong> Our consultations and guidance are 100% free.</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  id="btn-medicare-page-cta"
                  href="#/book-medicare"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-sm bg-tn-accent text-white hover:bg-red-800 shadow-md transition-all text-center leading-snug"
                >
                  Schedule Your Medicare 101 or Annual Review
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <CarrierLogos mode="medicare" />
    </div>
  );
};

export default MedicarePage;
