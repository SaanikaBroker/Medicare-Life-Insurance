import React from 'react';
import Button from '../components/Button';
import AccordionItem from '../components/AccordionItem';
import { 
  Sparkles, 
  Glasses, 
  Smile, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  Zap, 
  Info,
  CalendarCheck
} from 'lucide-react';
import dentalVisionImage from '../src/assets/images/tile_dental_candid_1789413000735.jpg';
import DualBookingButtons from '../components/DualBookingButtons';
import CarrierLogos from '../components/CarrierLogos';

const DentalVisionPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative bg-tn-primary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url(${dentalVisionImage})` }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-800 text-blue-200 text-sm font-semibold tracking-wider uppercase mb-4">
            Standalone & Supplemental Health Plans
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dental & Vision Insurance Plans
          </h1>
          <p className="text-xl text-gray-200 mt-2 max-w-3xl mx-auto">
            Protect your smile and sight with affordable, dedicated dental and vision coverage. Designed for seniors, self-employed individuals, and families across Texas.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              id="btn-shop-dental-vision"
              as="a"
              href="https://www.humana.com/aoadv/1964336"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Shop for Plans
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
            
            {/* The Coverage Gap Explanation */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Info className="text-amber-600 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Did You Know?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Original Medicare (Parts A & B) does NOT cover routine dental care</strong> (like cleanings, fillings, dentures, crowns, and implants) or routine eye exams and eyeglasses. Many Obamacare / Marketplace Insurance plans also exclude adult dental and vision. A standalone dental & vision policy bridges this essential gap.
                  </p>
                </div>
              </div>
            </div>

            {/* Dental Coverage Breakdown */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Smile className="text-tn-accent" size={32} />
                <h2 className="text-3xl font-bold text-tn-primary">
                  What Does Dental Coverage Include?
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our dental policies offer comprehensive 100/80/50 tier coverage with large nationwide PPO provider networks, giving you freedom of dentist choice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100 flex flex-col">
                  <span className="text-2xl font-black text-tn-accent mb-1">100%</span>
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Preventive Care</h4>
                  <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                    <li>• Routine oral exams (2/year)</li>
                    <li>• Dental cleanings & polishings</li>
                    <li>• Diagnostic Bitewing X-rays</li>
                    <li>• Fluoride treatments</li>
                  </ul>
                  <span className="text-xs text-green-700 font-semibold mt-4">Usually $0 copay</span>
                </div>

                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100 flex flex-col">
                  <span className="text-2xl font-black text-tn-accent mb-1">80%</span>
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Basic Procedures</h4>
                  <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                    <li>• Composite & amalgam fillings</li>
                    <li>• Non-surgical extractions</li>
                    <li>• Emergency pain palliative care</li>
                    <li>• Periodontal maintenance</li>
                  </ul>
                  <span className="text-xs text-blue-700 font-semibold mt-4">Immediate coverage options</span>
                </div>

                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100 flex flex-col">
                  <span className="text-2xl font-black text-tn-accent mb-1">50%</span>
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Major Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1 flex-grow">
                    <li>• Crowns & inlays / onlays</li>
                    <li>• Root canal therapy</li>
                    <li>• Dentures & bridge repairs</li>
                    <li>• Dental implant coverage</li>
                  </ul>
                  <span className="text-xs text-purple-700 font-semibold mt-4">Annual max up to $3,000+</span>
                </div>
              </div>
            </div>

            {/* Vision Coverage Breakdown */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Glasses className="text-tn-accent" size={32} />
                <h2 className="text-3xl font-bold text-tn-primary">
                  What Does Vision Coverage Include?
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Preserve your vision health with annual preventative eye exams and generous retail frame & lens allowances accepted at both independent optometrists and leading national retailers (LensCrafters, Target Optical, Pearle Vision, etc.):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Annual Comprehensive Exam</h4>
                  <p className="text-sm text-gray-600">
                    Full ocular health evaluation, glaucoma screening, retinal examination, and refractive error testing with a low $10 to $15 copay.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Eyeglass Frames Allowance</h4>
                  <p className="text-sm text-gray-600">
                    $150 to $250+ annual allowance toward designer frames of your choice, plus substantial percentage discounts on any balance over the allowance.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Prescription Lenses & Enhancements</h4>
                  <p className="text-sm text-gray-600">
                    Coverage for single vision, bifocal, and progressive lenses, plus deep discounts on anti-glare, scratch-resistant, and transition coatings.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-tn-gray border border-gray-100">
                  <h4 className="text-lg font-bold text-tn-primary mb-2">Contact Lenses Benefit</h4>
                  <p className="text-sm text-gray-600">
                    Choose contact lenses in place of eyeglass lenses each year, with annual allowances toward disposable or toric lenses and fittings.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div>
              <h2 className="text-3xl font-bold text-tn-primary mb-6">
                Frequently Asked Questions
              </h2>
              <AccordionItem icon={<Zap size={28} />} title="Are there plans with NO waiting periods?">
                <p>Yes! We offer plans that waive waiting periods for preventive and basic care right on day one. Some plans even offer day-one major coverage or waive waiting periods if you have prior continuous dental coverage.</p>
              </AccordionItem>
              <AccordionItem icon={<Sparkles size={28} />} title="Can I keep my current dentist and eye doctor?">
                <p>Most of our dental plans utilize open PPO networks (like Ameritas, Delta Dental, Humana, or Guardian). You can visit any licensed dentist, though you save the most when choosing an in-network provider.</p>
              </AccordionItem>
              <AccordionItem icon={<FileCheck size={28} />} title="Can I enroll at any time of the year?">
                <p>Yes! Unlike Medicare or Obamacare / Marketplace Insurance, standalone dental and vision plans have <strong>year-round enrollment</strong>. You can enroll today and coverage can begin on the first of next month.</p>
              </AccordionItem>
            </div>

          </div>

          {/* Right Sticky Sidebar */}
          <aside>
            <div className="bg-tn-primary text-white p-8 rounded-lg shadow-xl sticky top-24">
              <span className="inline-block px-3 py-1 rounded bg-tn-accent text-white text-xs font-bold uppercase mb-4">
                Fast & Easy Enrollment
              </span>
              <h3 className="text-2xl font-bold mb-4">Find the Right Dental & Vision Plan</h3>
              <p className="text-gray-200 text-sm mb-6">
                Whether you need a low-cost preventive plan or robust coverage for implants and dentures, we'll help you compare top carriers in Texas.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-tn-accent flex-shrink-0" size={16} />
                  <span>Plans starting as low as $25–$45/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-tn-accent flex-shrink-0" size={16} />
                  <span>No age limits — perfect for all ages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-tn-accent flex-shrink-0" size={16} />
                  <span>Individual, couple & family rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-tn-accent flex-shrink-0" size={16} />
                  <span>Seamless pairing with Medicare & Obamacare / Marketplace Insurance</span>
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
          <h3 className="text-2xl font-bold text-tn-primary mb-2">Ready to Compare Dental & Vision Rates?</h3>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Get instant quotes for yourself or your family. Consultations are always 100% free.
          </p>
          <DualBookingButtons variant="light" />
        </div>
      </div>

      {/* Carriers I Work With */}
      <CarrierLogos mode="all-other" />
    </div>
  );
};

export default DentalVisionPage;
