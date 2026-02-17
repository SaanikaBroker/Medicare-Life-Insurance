
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
      <section className="bg-tn-gray py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-tn-primary">Understanding Medicare</h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">We make Medicare simple, so you can choose the plan that's right for you.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left/Main Column */}
          <div className="lg:col-span-2">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-tn-primary mb-4">What is Medicare?</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Medicare is the federal health insurance program for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease. It can be complex, with different parts covering specific services. Our goal is to help you understand these parts and find a plan that covers your health and prescription drug needs without breaking the bank.
              </p>
            </div>

            {/* Medicare Parts Accordion */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-tn-primary mb-6">The Parts of Medicare</h2>
                <AccordionItem icon={<Hospital size={32} />} title="Part A (Hospital Insurance)">
                    <p>Part A covers inpatient hospital care, skilled nursing facility care, hospice care, and home health care. For most people who have worked and paid Medicare taxes, Part A is premium-free.</p>
                </AccordionItem>
                <AccordionItem icon={<Stethoscope size={32} />} title="Part B (Medical Insurance)">
                    <p>Part B covers certain doctors' services, outpatient care, medical supplies, and preventive services. You will pay a monthly premium for Part B, which is often deducted from your Social Security benefit.</p>
                </AccordionItem>
                <AccordionItem icon={<Users size={32} />} title="Part C (Medicare Advantage)">
                    <p>Medicare Advantage Plans are an "all in one" alternative to Original Medicare. These bundled plans include Part A, Part B, and usually Part D. Most plans offer extra benefits that Original Medicare doesn’t cover — like vision, hearing, and dental. These are offered by private insurance companies approved by Medicare.</p>
                </AccordionItem>
                <AccordionItem icon={<Pill size={32} />} title="Part D (Prescription Drug Coverage)">
                    <p>Part D helps cover the cost of prescription drugs. These plans are run by private insurance companies that follow rules set by Medicare. If you have Original Medicare, you can get Part D coverage by joining a standalone Prescription Drug Plan.</p>
                </AccordionItem>
                <AccordionItem icon={<ShieldPlus size={32} />} title="Medicare Supplement (Medigap)">
                    <p>Medigap policies help pay some of the remaining healthcare costs that Original Medicare doesn't cover, like copayments, coinsurance, and deductibles. A Medigap policy is different from a Medicare Advantage Plan. It only supplements your Original Medicare benefits.</p>
                </AccordionItem>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Medicare 101 */}
                <div className="bg-tn-gray p-8 rounded-lg">
                    <BookOpen size={40} className="text-tn-accent mb-4"/>
                    <h3 className="text-3xl font-bold text-tn-primary mb-4">Medicare 101</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        <li><strong>Initial Enrollment:</strong> A 7-month window when you first become eligible.</li>
                        <li><strong>Annual Enrollment (AEP):</strong> October 15 - December 7 each year to change plans.</li>
                        <li><strong>Special Enrollment (SEP):</strong> For life events like moving or losing other coverage.</li>
                        <li><strong>Common Mistakes:</strong> Avoid late enrollment penalties and ensure your doctors are in-network.</li>
                    </ul>
                </div>

                {/* Financial Assistance */}
                <div className="bg-tn-gray p-8 rounded-lg">
                    <PiggyBank size={40} className="text-tn-accent mb-4"/>
                    <h3 className="text-3xl font-bold text-tn-primary mb-4">Financial Assistance</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Programs like Medicaid and LIS (Extra Help) can significantly lower your costs.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        <li><strong>Medicaid:</strong> Helps with medical costs for people with limited income.</li>
                        <li><strong>LIS (Extra Help):</strong> Helps pay for Part D prescription drug costs.</li>
                        <li><strong>Dual Eligibility:</strong> Qualifying for both Medicare and Medicaid.</li>
                    </ul>
                </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <aside>
            <div className="bg-tn-primary text-white p-8 rounded-lg shadow-lg sticky top-24">
              <UserCheck size={40} className="mb-4 text-tn-accent"/>
              <h3 className="text-3xl font-bold mb-4">Why Work With a Broker?</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start"><ShieldPlus className="mr-3 mt-1 flex-shrink-0 text-tn-accent" /><span><strong>Unbiased Guidance:</strong> We work for you, not the insurance companies.</span></li>
                <li className="flex items-start"><BookOpen className="mr-3 mt-1 flex-shrink-0 text-tn-accent" /><span><strong>Plan Comparison:</strong> We simplify the process of comparing dozens of plans.</span></li>
                <li className="flex items-start"><Handshake className="mr-3 mt-1 flex-shrink-0 text-tn-accent" /><span><strong>Ongoing Support:</strong> We're here for you year-round, not just during enrollment.</span></li>
                <li className="flex items-start"><PiggyBank className="mr-3 mt-1 flex-shrink-0 text-tn-accent" /><span><strong>No Additional Cost:</strong> Our services are completely free to you.</span></li>
              </ul>
              <div className="mt-8">
                <Button as="a" href="#/contact" variant="primary" className="w-full">Get Medicare Help Now</Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <CarrierLogos carriers={medicareCarriers} />
    </div>
  );
};

export default MedicarePage;
