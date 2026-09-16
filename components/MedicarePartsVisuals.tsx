import React, { useState } from 'react';
import { 
  Hospital, 
  Stethoscope, 
  Building2, 
  Pill, 
  ShieldPlus, 
  Check, 
  HelpCircle, 
  AlertTriangle,
  Info,
  DollarSign,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';

interface PartData {
  id: 'part-a' | 'part-b' | 'part-c' | 'part-d' | 'medigap';
  letter: string;
  name: string;
  subtitle: string;
  type: 'Federal Government' | 'Private Insurance' | 'Supplemental Insurance';
  color: {
    bg: string;
    border: string;
    badge: string;
    text: string;
    lightBg: string;
    iconBg: string;
  };
  icon: React.ReactNode;
  typicalCost: string;
  whatItCovers: string[];
  whatItDoesNotCover: string;
  enrollmentTip: string;
}

const partsList: PartData[] = [
  {
    id: 'part-a',
    letter: 'A',
    name: 'Hospital Insurance',
    subtitle: 'Inpatient & Facility Care',
    type: 'Federal Government',
    color: {
      bg: 'bg-blue-600',
      border: 'border-blue-200 hover:border-blue-500',
      badge: 'bg-blue-100 text-blue-800',
      text: 'text-blue-700',
      lightBg: 'bg-blue-50/70',
      iconBg: 'bg-blue-100 text-blue-700',
    },
    icon: <Hospital size={24} />,
    typicalCost: '$0/month for ~99% of Texans (if you or your spouse worked 10+ years paying Medicare taxes).',
    whatItCovers: [
      'Inpatient hospital stays (semi-private room, meals, general nursing)',
      'Skilled nursing facility care (rehabilitation for up to 100 days)',
      'Hospice care and palliative comfort support',
      'Limited home healthcare visits following hospitalization',
    ],
    whatItDoesNotCover: 'Does not cover doctor visits, routine outpatient procedures, or prescription medications taken at home.',
    enrollmentTip: 'Usually automatic when you turn 65 if you are already drawing Social Security benefits.',
  },
  {
    id: 'part-b',
    letter: 'B',
    name: 'Medical Insurance',
    subtitle: 'Doctors, Labs & Outpatient',
    type: 'Federal Government',
    color: {
      bg: 'bg-emerald-600',
      border: 'border-emerald-200 hover:border-emerald-500',
      badge: 'bg-emerald-100 text-emerald-800',
      text: 'text-emerald-700',
      lightBg: 'bg-emerald-50/70',
      iconBg: 'bg-emerald-100 text-emerald-700',
    },
    icon: <Stethoscope size={24} />,
    typicalCost: 'Standard monthly premium ($185.00/mo for 2025/2026), typically deducted from Social Security.',
    whatItCovers: [
      'Doctor visits, specialist consultations, and wellness exams',
      'Outpatient surgeries, hospital clinic services, and emergency room visits',
      'Preventive screenings (mammograms, colonoscopies, cardiac tests)',
      'Clinical lab tests, X-rays, MRIs, and diagnostic scans',
      'Durable medical equipment (wheelchairs, walkers, blood glucose monitors)',
    ],
    whatItDoesNotCover: 'Has an uncapped 20% coinsurance gap. You pay 20% of all medical bills with NO yearly maximum unless you add Medigap or Part C.',
    enrollmentTip: 'Sign up during your 7-month Initial Enrollment Period to avoid a permanent 10% lifetime penalty per year delayed.',
  },
  {
    id: 'part-c',
    letter: 'C',
    name: 'Medicare Advantage',
    subtitle: 'Private All-in-One Alternative',
    type: 'Private Insurance',
    color: {
      bg: 'bg-purple-600',
      border: 'border-purple-200 hover:border-purple-500',
      badge: 'bg-purple-100 text-purple-800',
      text: 'text-purple-700',
      lightBg: 'bg-purple-50/70',
      iconBg: 'bg-purple-100 text-purple-700',
    },
    icon: <Building2 size={24} />,
    typicalCost: 'Often $0 additional monthly premium in San Antonio and surrounding Texas counties.',
    whatItCovers: [
      'Bundles all Part A (Hospital) and Part B (Medical) into a single plan',
      'Usually includes Part D Prescription Drug coverage built right in',
      'Routine dental care (cleanings, X-rays, crowns, and denture allowances)',
      'Vision benefits (annual exams and $150–$300 designer frame allowances)',
      'Hearing aid evaluations and hardware copays',
      'SilverSneakers / gym memberships and quarterly OTC allowances',
    ],
    whatItDoesNotCover: 'Restricts non-emergency care to regional network providers (HMO or PPO). Often requires prior authorization for specialized procedures.',
    enrollmentTip: 'Review every fall during AEP (Oct 15 - Dec 7) to ensure your doctors and prescriptions remain in-network.',
  },
  {
    id: 'part-d',
    letter: 'D',
    name: 'Prescription Drug Plans',
    subtitle: 'Pharmacy & Medication Coverage',
    type: 'Private Insurance',
    color: {
      bg: 'bg-amber-600',
      border: 'border-amber-200 hover:border-amber-500',
      badge: 'bg-amber-100 text-amber-800',
      text: 'text-amber-700',
      lightBg: 'bg-amber-50/70',
      iconBg: 'bg-amber-100 text-amber-700',
    },
    icon: <Pill size={24} />,
    typicalCost: 'Monthly premiums range from $0 to $70+/mo depending on your specific medication tier needs.',
    whatItCovers: [
      'Brand name and generic outpatient medications',
      'Formulary tiered structure: Tier 1 (Low-cost generic) to Tier 5 (Specialty drugs)',
      'Protective $2,000 maximum out-of-pocket cap on prescription drugs',
      'Vaccines recommended by the CDC (including Shingrix shingles vaccine at $0)',
    ],
    whatItDoesNotCover: 'Does not cover medications administered in a physician clinic (e.g. chemotherapy is covered under Part B, not D).',
    enrollmentTip: 'Even if you take no medications today, enrolling in a low-cost plan prevents permanent Part D late enrollment penalties.',
  },
  {
    id: 'medigap',
    letter: 'Medigap',
    name: 'Medicare Supplement',
    subtitle: 'Fills the 20% Coinsurance Gap',
    type: 'Supplemental Insurance',
    color: {
      bg: 'bg-rose-700',
      border: 'border-rose-200 hover:border-rose-500',
      badge: 'bg-rose-100 text-rose-800',
      text: 'text-rose-700',
      lightBg: 'bg-rose-50/70',
      iconBg: 'bg-rose-100 text-rose-700',
    },
    icon: <ShieldPlus size={24} />,
    typicalCost: 'Monthly premium typically ranges from $100 to $180/mo (depending on age, gender, and zip code).',
    whatItCovers: [
      'Pays the 20% coinsurance left by Original Medicare Parts A and B',
      'Covers hospital deductibles and emergency foreign travel costs',
      'Plan G covers 100% of excess charges and coinsurance after the small Part B deductible ($257 in 2025/2026)',
      'Plan N offers lower monthly premiums with small $20 doctor copays',
      'Zero doctor network restrictions—accepted nationwide by any doctor who takes Medicare',
    ],
    whatItDoesNotCover: 'Does not cover outpatient prescription drugs (you pair Medigap with a standalone Part D plan) or routine vision/dental.',
    enrollmentTip: 'Enroll during your 6-month Medigap Open Enrollment Period (starts the month Part B turns active) for guaranteed acceptance without health questions.',
  },
];

export const MedicarePartsVisuals: React.FC = () => {
  const [activePart, setActivePart] = useState<string>('part-a');

  const selectedPart = partsList.find(p => p.id === activePart) || partsList[0];

  return (
    <div id="medicare-parts-visual-guide" className="my-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-tn-primary text-xs font-bold uppercase tracking-wider mb-2">
          <Layers size={14} />
          <span>Visual Plan Breakdown</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-tn-primary">
          Understanding the 5 Parts of Medicare
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Medicare isn't one single policy. It is built from modular components designed to cover hospital, medical, prescriptions, and out-of-pocket gaps.
        </p>
      </div>

      {/* Visual Navigation Pill Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-4xl mx-auto mb-8">
        {partsList.map((part) => {
          const isActive = activePart === part.id;
          return (
            <button
              key={part.id}
              type="button"
              onClick={() => setActivePart(part.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive 
                  ? `bg-white ${part.color.border} ring-2 shadow-md border-transparent`
                  : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
                  isActive ? `${part.color.bg} text-white shadow-xs` : 'bg-slate-200 text-slate-700'
                }`}>
                  {part.letter === 'Medigap' ? 'M' : part.letter}
                </span>
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${part.color.badge}`}>
                  {part.letter === 'Medigap' ? 'Supplement' : `Part ${part.letter}`}
                </span>
              </div>
              <div>
                <p className={`text-xs font-bold truncate ${isActive ? part.color.text : 'text-slate-800'}`}>
                  {part.name}
                </p>
                <p className="text-[11px] text-gray-500 truncate mt-0.5">
                  {part.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Featured Active Part Detail Infographic Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${selectedPart.color.iconBg}`}>
              {selectedPart.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${selectedPart.color.badge}`}>
                  {selectedPart.letter === 'Medigap' ? 'Medicare Supplement' : `Medicare Part ${selectedPart.letter}`}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {selectedPart.type}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-tn-primary mt-1">
                {selectedPart.name}
              </h4>
              <p className="text-sm text-gray-500">
                {selectedPart.subtitle}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:text-right flex-shrink-0">
            <span className="text-[11px] font-semibold text-gray-500 block uppercase tracking-wider">Estimated Cost:</span>
            <span className="text-sm font-bold text-tn-primary">
              {selectedPart.typicalCost.split('(')[0]}
            </span>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Covered Services */}
          <div>
            <h5 className="text-sm font-bold text-tn-primary flex items-center gap-1.5 mb-3">
              <Check className="text-emerald-600" size={17} />
              <span>What It Covers:</span>
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              {selectedPart.whatItCovers.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions & San Antonio Broker Tip */}
          <div className="space-y-4">
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
              <h5 className="text-xs font-bold text-amber-900 flex items-center gap-1.5 mb-1.5">
                <AlertTriangle className="text-amber-700 flex-shrink-0" size={15} />
                <span>What Is Not Covered / Important Considerations:</span>
              </h5>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                {selectedPart.whatItDoesNotCover}
              </p>
            </div>

            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
              <h5 className="text-xs font-bold text-blue-900 flex items-center gap-1.5 mb-1.5">
                <Info className="text-blue-700 flex-shrink-0" size={15} />
                <span>Texas Broker Insider Tip:</span>
              </h5>
              <p className="text-xs text-blue-900/90 leading-relaxed">
                {selectedPart.enrollmentTip}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA for Active Part */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            Have questions about how {selectedPart.letter === 'Medigap' ? 'Medigap' : `Part ${selectedPart.letter}`} applies to your specific doctors and medications?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://www.sunfirematrix.com/app/blazesync/int/21098209/2026/#/blazesync/sync/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-tn-accent hover:bg-red-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Compare Rates</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#/book-medicare"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-tn-primary text-xs font-semibold transition-colors"
            >
              <span>Book 1-on-1 Review</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicarePartsVisuals;
