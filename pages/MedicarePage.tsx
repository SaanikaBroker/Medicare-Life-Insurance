import React from 'react';
import AccordionItem from '../components/AccordionItem';
import Button from '../components/Button';
import { 
  Hospital, 
  Stethoscope, 
  Users, 
  Pill, 
  ShieldPlus, 
  BookOpen, 
  PiggyBank, 
  UserCheck, 
  Handshake,
  Check,
  X,
  Sparkles,
  HelpCircle,
  Clock,
  MapPin,
  FileCheck2,
  CalendarCheck
} from 'lucide-react';
import CarrierLogos from '../components/CarrierLogos';
import medicareHeroImage from '../src/assets/images/tile_medicare_candid_1789412970415.jpg';
import MedicarePathwaysDiagram from '../components/MedicarePathwaysDiagram';
import MedicarePartsVisuals from '../components/MedicarePartsVisuals';
import MedicareTimelineDiagram from '../components/MedicareTimelineDiagram';
import DualBookingButtons from '../components/DualBookingButtons';

const MedicarePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Visual Hero Header with Authentic Texas Senior Photo */}
      <section className="relative bg-tn-primary text-white py-16 sm:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center" 
          style={{ backgroundImage: `url(${medicareHeroImage})` }}
        />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-900/80 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-700/50">
            Official Texas Medicare Roadmap & Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
            Understanding Your Medicare Choices
          </h1>
          <p className="text-base sm:text-xl text-slate-200 mt-4 leading-relaxed max-w-2xl mx-auto">
            Clear, unbiased diagrams and plan comparisons to help you navigate Part A, Part B, Medicare Advantage, Part D, and Medigap in San Antonio and South Texas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              id="btn-shop-medicare"
              as="a"
              href="https://www.sunfirematrix.com/app/consumer/ember/?sfpath=int&sfagid=21098209#/"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Shop for Plans
            </Button>
            <Button
              as="a"
              href="#/book-medicare"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-tn-primary"
            >
              Schedule Free Medicare Review
            </Button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {/* Main Informational & Visual Center (2 Columns) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Introduction Banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-tn-primary mb-3">
                How Does Medicare Work?
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                Medicare is the federal health insurance program for individuals age 65 or older, younger adults with qualifying disabilities, and individuals with ESRD. Because Original Medicare (Parts A & B) leaves an <strong>uncapped 20% coinsurance gap</strong> with no yearly limit on what you pay, virtually all beneficiaries choose between a <strong>Medicare Supplement (Medigap)</strong> or an all-in-one <strong>Medicare Advantage Plan (Part C)</strong>.
              </p>
            </div>

            {/* DIAGRAM 1: The Two Pathways of Medicare */}
            <MedicarePathwaysDiagram />

            {/* DIAGRAM 2: Visual 5-Part Plan Explorer */}
            <MedicarePartsVisuals />

            {/* DIAGRAM 3: Side-by-Side Comparison Matrix */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden my-10">
              <div className="bg-tn-primary text-white p-6">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block mb-1">
                  At-A-Glance Comparison
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Medigap Supplement vs. Medicare Advantage
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Use this side-by-side matrix to see how the two primary Medicare coverage options compare for everyday use.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="p-3.5 sm:p-4 font-bold text-slate-700 w-1/3">Feature</th>
                      <th className="p-3.5 sm:p-4 font-bold text-blue-900 bg-blue-50/50 w-1/3 border-x border-slate-200">
                        Original Medicare + Medigap
                      </th>
                      <th className="p-3.5 sm:p-4 font-bold text-purple-900 bg-purple-50/50 w-1/3">
                        Medicare Advantage (Part C)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Doctor & Hospital Choice</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200">
                        <span className="font-bold text-emerald-700 flex items-center gap-1 mb-1">
                          <Check size={15} /> Nationwide Freedom
                        </span>
                        Any doctor, hospital, or specialist in the US accepting Medicare.
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20">
                        <span className="font-bold text-slate-800 flex items-center gap-1 mb-1">
                          HMO or PPO Networks
                        </span>
                        Regional doctor networks; seeing out-of-network doctors costs more or is not covered.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Specialist Referrals</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200 font-medium text-emerald-700">
                        No referrals ever required
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20 text-slate-600">
                        Often required for HMOs (must see Primary Care Physician first)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Monthly Plan Premium</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200">
                        Higher monthly premium ($100–$180/mo) + Part D plan premium
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20 font-bold text-purple-700">
                        Often $0/month in San Antonio area + Part B premium
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Out-of-Pocket Costs at Doctor</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200 text-emerald-700 font-semibold">
                        Very low to $0 per visit (after small annual Part B deductible)
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20 text-slate-600">
                        Pay modest copays as you go ($0–$40 for doctors, hospital daily copays)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Prescription Drugs (Part D)</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200">
                        Enrolled in a separate standalone Part D plan
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20 font-semibold text-purple-800">
                        Usually built into the same card and plan
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Extra Dental, Vision & Hearing</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200 text-slate-500">
                        Not included (can purchase standalone dental/vision policy)
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20 font-bold text-emerald-700">
                        Included on most plans (cleanings, eyeglass allowance, gym)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-800">Annual Out-of-Pocket Max</td>
                      <td className="p-3.5 sm:p-4 bg-blue-50/20 border-x border-slate-200">
                        Not needed (Medigap covers 100% of remaining approved costs)
                      </td>
                      <td className="p-3.5 sm:p-4 bg-purple-50/20">
                        Legal maximum ceiling ($3,000–$8,000/yr) protecting against catastrophic costs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DIAGRAM 4: Enrollment Timeline & Penalties */}
            <MedicareTimelineDiagram />

            {/* Financial Assistance Programs (Medicaid & Extra Help) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-red-100 text-tn-accent flex items-center justify-center mb-3">
                  <PiggyBank size={20} />
                </div>
                <h4 className="text-lg font-bold text-tn-primary mb-2">LIS / Extra Help (Part D)</h4>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  A federal program that helps Medicare beneficiaries with limited income and resources pay for prescription drugs, lowering generic copays to as low as $4.50.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>Eliminates or lowers Part D monthly premiums</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>Waives the Part D late enrollment penalty</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <FileCheck2 size={20} />
                </div>
                <h4 className="text-lg font-bold text-tn-primary mb-2">Dual Eligibility (D-SNP)</h4>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  If you qualify for both Medicare and Texas Medicaid, you may enroll in a Dual-Eligible Special Needs Plan (D-SNP) with robust monthly food, utility, and OTC credits.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>$0 doctor, specialist, and hospital copays</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>Comprehensive transportation and caregiver benefits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expandable FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-tn-primary mb-6">Frequently Asked Questions</h3>
              <AccordionItem icon={<Hospital size={24} />} title="Do I have to enroll in Medicare if I'm still working at 65?">
                <p>If you or your spouse work for an employer with <strong>20 or more employees</strong> that provides credible group health insurance, you can typically delay Part B without any late enrollment penalty until you retire or lose that coverage. If the employer has under 20 employees, Medicare is primary and you generally must enroll at 65.</p>
              </AccordionItem>
              <AccordionItem icon={<Stethoscope size={24} />} title="Can I change my Medicare plan if I don't like it?">
                <p>Yes! Every year during the Annual Enrollment Period (AEP) from <strong>October 15 through December 7</strong>, you can switch Medicare Advantage plans or Part D plans. If you are on a Medicare Advantage plan, you can also make a one-time switch between <strong>January 1 and March 31</strong> during the MA Open Enrollment Period.</p>
              </AccordionItem>
              <AccordionItem icon={<ShieldPlus size={24} />} title="Can an insurance broker change my rates or charge fees?">
                <p>No. By federal and Texas law, insurance rates are strictly filed and approved with the government. <strong>You will never pay a penny more</strong> working with TrueNorth Insurance than enrolling directly or on your own. TrueNorth's consultations, formulary checks, and year-round advocacy are 100% free.</p>
              </AccordionItem>
            </div>

          </div>

          {/* Sticky Right Sidebar with Shop CTA & Consultation Booking */}
          <aside className="lg:col-span-1">
            <div className="bg-tn-primary text-white p-7 rounded-2xl shadow-xl sticky top-24 space-y-6">
              
              <div className="border-b border-blue-800 pb-5">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-3">
                  <UserCheck size={22} />
                </div>
                <h3 className="text-xl font-bold">Why Work With TrueNorth?</h3>
                <p className="text-xs text-blue-200 mt-1">
                  Local, independent broker representation with zero sales pressure.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <ShieldPlus className="text-tn-accent flex-shrink-0 mt-0.5" size={17} />
                  <span><strong className="text-white">Unbiased Plan Comparisons:</strong> We represent top Texas Medicare carriers, not just one company.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileCheck2 className="text-tn-accent flex-shrink-0 mt-0.5" size={17} />
                  <span><strong className="text-white">Doctor & Rx Formulary Audit:</strong> We verify all your specific medications before recommending any plan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Handshake className="text-tn-accent flex-shrink-0 mt-0.5" size={17} />
                  <span><strong className="text-white">Year-Round Client Advocacy:</strong> We assist with billing, claims, and annual reviews as long as you have the plan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <PiggyBank className="text-tn-accent flex-shrink-0 mt-0.5" size={17} />
                  <span><strong className="text-white">100% Free Service:</strong> Zero consultation fees, zero enrollment surcharges.</span>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  id="btn-shop-medicare-sidebar"
                  href="https://www.sunfirematrix.com/app/consumer/ember/?sfpath=int&sfagid=21098209#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-sm bg-tn-accent text-white hover:bg-red-800 shadow-md transition-all text-center leading-snug cursor-pointer"
                >
                  Shop for Plans Online
                </a>
                
                <a
                  id="btn-medicare-page-cta"
                  href="#/book-medicare"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-medium text-xs bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all text-center leading-snug cursor-pointer"
                >
                  Schedule Medicare 101 Consultation
                </a>
              </div>

              <div className="text-[11px] text-blue-200/80 bg-blue-900/50 p-3 rounded-lg border border-blue-800/60 leading-relaxed">
                We do not offer every plan available in your area. Currently we represent 10+ organizations which offer 75+ products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* Bottom Booking Block */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-tn-accent block mb-2">
            Personalized Guidance
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-tn-primary mb-3">
            Ready to Compare Medicare Options in Your Zip Code?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule a free, educational Medicare 101 session in person, by Zoom, or over the phone. No pressure, no obligations.
          </p>
          <DualBookingButtons variant="light" />
        </div>
      </div>

      {/* Contracted Carrier Logos */}
      <CarrierLogos mode="medicare" />
    </div>
  );
};

export default MedicarePage;
