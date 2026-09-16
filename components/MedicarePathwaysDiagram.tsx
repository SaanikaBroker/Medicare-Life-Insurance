import React, { useState } from 'react';
import { 
  GitFork, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Hospital, 
  Stethoscope, 
  Pill, 
  ShieldPlus, 
  CheckCircle2,
  HelpCircle,
  Plane,
  Building2,
  DollarSign
} from 'lucide-react';

export const MedicarePathwaysDiagram: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'both' | 'supplement' | 'advantage'>('both');

  return (
    <div id="medicare-pathways-diagram" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs my-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
          <GitFork size={14} />
          <span>Interactive Decision Roadmap</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-tn-primary">
          The Two Pathways of Medicare
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Once you enroll in Original Medicare (Parts A & B), you must choose one of two distinct routes to protect against out-of-pocket costs.
        </p>

        {/* Pathway Filter Switcher */}
        <div className="mt-5 inline-flex p-1 bg-slate-200/80 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSelectedPath('both')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedPath === 'both' 
                ? 'bg-white text-tn-primary shadow-xs' 
                : 'text-gray-600 hover:text-tn-primary'
            }`}
          >
            Compare Both Paths
          </button>
          <button
            type="button"
            onClick={() => setSelectedPath('supplement')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedPath === 'supplement' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-gray-600 hover:text-tn-primary'
            }`}
          >
            Path 1: Medigap Supplement
          </button>
          <button
            type="button"
            onClick={() => setSelectedPath('advantage')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              selectedPath === 'advantage' 
                ? 'bg-purple-600 text-white shadow-xs' 
                : 'text-gray-600 hover:text-tn-primary'
            }`}
          >
            Path 2: Medicare Advantage
          </button>
        </div>
      </div>

      {/* Starting Foundation: Original Medicare */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="bg-white border-2 border-dashed border-blue-300 rounded-xl p-4 text-center shadow-xs">
          <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">Step 1: Your Foundation</span>
          <h4 className="text-lg font-bold text-tn-primary mt-0.5">Original Medicare (Administered by Federal Govt)</h4>
          <div className="flex flex-wrap justify-center gap-2.5 mt-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
              <Hospital size={14} /> Part A (Hospital)
            </span>
            <span className="text-slate-400 font-bold self-center">+</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <Stethoscope size={14} /> Part B (Doctor Visits)
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ⚠️ Original Medicare leaves an uncapped <strong>20% coinsurance gap</strong> with no maximum out-of-pocket limit. Choose your pathway below to cover this gap:
          </p>
        </div>

        {/* Visual Connecting Arrows */}
        <div className="hidden sm:flex justify-around items-center px-12 py-3 text-slate-300">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-blue-300"></div>
            <div className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Option 1</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-purple-300"></div>
            <div className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">Option 2</div>
          </div>
        </div>
      </div>

      {/* The Two Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pathway 1: Original Medicare + Medigap + Part D */}
        {(selectedPath === 'both' || selectedPath === 'supplement') && (
          <div className={`bg-white rounded-xl border-2 transition-all p-6 flex flex-col justify-between ${
            selectedPath === 'supplement' ? 'border-blue-600 shadow-md ring-2 ring-blue-100' : 'border-blue-200 shadow-xs'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase">
                  Pathway 1
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <Plane size={13} /> Nationwide Freedom
                </span>
              </div>
              <h4 className="text-xl font-bold text-tn-primary">
                Original Medicare + Medigap & Part D
              </h4>
              <p className="text-sm text-gray-600 mt-1 mb-4 leading-relaxed">
                You keep Original Medicare as primary and purchase private Medigap insurance to pay the 20% coinsurance gap, plus a standalone Part D plan for prescription drugs.
              </p>

              {/* Composition blocks */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs">
                  <ShieldPlus className="text-blue-700 flex-shrink-0" size={16} />
                  <div>
                    <strong className="text-blue-900 block font-semibold">Medigap Supplement (Plan G or N):</strong>
                    <span className="text-blue-800/80">Covers deductibles, copays, and the 20% coinsurance gap.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50/70 border border-amber-100 text-xs">
                  <Pill className="text-amber-700 flex-shrink-0" size={16} />
                  <div>
                    <strong className="text-amber-900 block font-semibold">Standalone Part D (Rx Plan):</strong>
                    <span className="text-amber-800/80">Covers your specific maintenance and generic medications.</span>
                  </div>
                </div>
              </div>

              {/* Key Advantages */}
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Key Advantages:</h5>
              <ul className="space-y-2 text-xs text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={15} />
                  <span><strong>See Any Doctor:</strong> Visit any hospital or specialist in the USA that accepts Medicare—zero network restrictions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={15} />
                  <span><strong>No Prior Authorizations:</strong> No HMO gatekeepers or insurance company delays for medically necessary treatments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={15} />
                  <span><strong>Budget Predictability:</strong> Near-zero out-of-pocket surprise bills when receiving healthcare services.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-3 rounded-lg text-xs text-gray-600 mb-3">
                <strong>Best For:</strong> Individuals who travel, snowbirds, people with preferred doctors who do not take HMOs, or those who want maximum medical freedom.
              </div>
              <a
                href="#/book-medicare"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
              >
                <span>Explore Medigap Plans in San Antonio</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}

        {/* Pathway 2: Medicare Advantage (Part C) */}
        {(selectedPath === 'both' || selectedPath === 'advantage') && (
          <div className={`bg-white rounded-xl border-2 transition-all p-6 flex flex-col justify-between ${
            selectedPath === 'advantage' ? 'border-purple-600 shadow-md ring-2 ring-purple-100' : 'border-purple-200 shadow-xs'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase">
                  Pathway 2
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <Sparkles size={13} /> All-in-One Bundle
                </span>
              </div>
              <h4 className="text-xl font-bold text-tn-primary">
                Medicare Advantage (Part C)
              </h4>
              <p className="text-sm text-gray-600 mt-1 mb-4 leading-relaxed">
                An all-in-one private alternative to Original Medicare approved by Medicare. It bundles Hospital, Medical, and typically Prescription Drugs with extra perks.
              </p>

              {/* Composition blocks */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-50/70 border border-purple-100 text-xs">
                  <Building2 className="text-purple-700 flex-shrink-0" size={16} />
                  <div>
                    <strong className="text-purple-900 block font-semibold">Bundled Hospital + Medical + Rx:</strong>
                    <span className="text-purple-800/80">Replaces Parts A & B administration through private HMO/PPO networks.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs">
                  <Sparkles className="text-emerald-700 flex-shrink-0" size={16} />
                  <div>
                    <strong className="text-emerald-900 block font-semibold">Built-In Extra Benefits:</strong>
                    <span className="text-emerald-800/80">Routine dental checkups, vision allowances, hearing aids, and gym memberships.</span>
                  </div>
                </div>
              </div>

              {/* Key Advantages */}
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Key Advantages:</h5>
              <ul className="space-y-2 text-xs text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={15} />
                  <span><strong>$0 or Low Monthly Premiums:</strong> Many Texas plans feature $0 additional monthly plan premiums.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={15} />
                  <span><strong>All-in-One Convenience:</strong> One card for hospital visits, doctor appointments, and prescription pharmacy pickups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={15} />
                  <span><strong>Annual Out-of-Pocket Cap:</strong> Includes a legal yearly ceiling (MOOP) to protect against runaway catastrophic medical bills.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-3 rounded-lg text-xs text-gray-600 mb-3">
                <strong>Best For:</strong> Those who are comfortable staying in local doctor networks (HMO/PPO) and value $0 premiums with bundled dental, vision, and wellness extras.
              </div>
              <a
                id="btn-advantage-shop-path"
                href="https://www.sunfirematrix.com/app/blazesync/int/21098209/2026/#/blazesync/sync/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors"
              >
                <span>Shop Advantage Plans Online</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MedicarePathwaysDiagram;
