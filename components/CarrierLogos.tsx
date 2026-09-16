import React, { useState } from 'react';
import { 
  CarrierItem, 
  medicareCarriersList, 
  marketplaceCarriersList,
  finalExpenseCarriersList 
} from '../data/carrierData';
import { Shield, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface CarrierCardProps {
  carrier: CarrierItem;
}

const CarrierCard: React.FC<CarrierCardProps> = ({ carrier }) => {
  const [fileCandidateIndex, setFileCandidateIndex] = useState(0);
  const [hasImage, setHasImage] = useState(true);

  // Check candidate paths in /carriers/ and root
  const candidatePaths: string[] = [];
  carrier.possibleFiles.forEach(file => {
    candidatePaths.push(`/carriers/${file}`);
    candidatePaths.push(`/${file}`);
  });

  const currentSrc = candidatePaths[fileCandidateIndex];

  const handleImageError = () => {
    if (fileCandidateIndex < candidatePaths.length - 1) {
      setFileCandidateIndex(prev => prev + 1);
    } else {
      // No uploaded image file found; fall back cleanly to formatted text placeholder
      setHasImage(false);
    }
  };

  return (
    <div 
      id={`carrier-item-${carrier.id}`}
      className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 flex items-center justify-center min-h-[72px] sm:min-h-[82px] shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200"
    >
      {hasImage && currentSrc ? (
        <img
          src={currentSrc}
          alt={`${carrier.name} Logo`}
          onError={handleImageError}
          className="max-h-10 sm:max-h-12 max-w-[85%] w-auto object-contain transition-transform duration-200"
        />
      ) : (
        /* Clean, professional text placeholder normalized to consistent height */
        <div className="text-center px-2 py-1 w-full flex items-center justify-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 tracking-tight leading-snug">
            {carrier.name}
          </span>
        </div>
      )}
    </div>
  );
};

export interface CarrierLogosProps {
  mode?: 'medicare' | 'marketplace' | 'final-expense' | 'all-other';
  title?: string;
  subtitle?: string;
  // Backwards-compatibility props
  showMedicareOnly?: boolean;
  showLifeOnly?: boolean;
}

const CarrierLogos: React.FC<CarrierLogosProps> = ({ 
  mode,
  title,
  subtitle,
  showMedicareOnly = false,
  showLifeOnly = false
}) => {
  // Determine effective mode
  let effectiveMode: 'medicare' | 'marketplace' | 'final-expense' | 'all-other' = mode || 'all-other';
  if (!mode) {
    if (showMedicareOnly) effectiveMode = 'medicare';
    else if (showLifeOnly) effectiveMode = 'final-expense';
  }

  // 1. MEDICARE Page Rule:
  // Heading: "Medicare Carriers I Work With"
  // Show only the 8 Medicare carriers
  if (effectiveMode === 'medicare') {
    return (
      <section 
        id="medicare-carriers-section"
        aria-label="Medicare Carriers I Work With"
        className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary">
              {title || "Medicare Carriers I Work With"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              {subtitle || "Directly contracted with top-rated Medicare Advantage, Medicare Supplement, and Part D plans across Texas."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {medicareCarriersList.map((carrier) => (
              <CarrierCard key={carrier.id} carrier={carrier} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. OBAMACARE / MARKETPLACE Page Rule:
  // Heading: "Obamacare / Marketplace Carriers I Work With"
  // Show only the 6 Marketplace carriers
  if (effectiveMode === 'marketplace') {
    return (
      <section 
        id="marketplace-carriers-section"
        aria-label="Obamacare / Marketplace Carriers I Work With"
        className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary">
              {title || "Obamacare / Marketplace Carriers I Work With"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              {subtitle || "Helping you navigate qualified Affordable Care Act (ACA) health plans with maximum government subsidies."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {marketplaceCarriersList.map((carrier) => (
              <CarrierCard key={carrier.id} carrier={carrier} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 3. FINAL EXPENSE Page Rule:
  // Heading: "Final Expense Carriers I Work With"
  // Show only the 11 Final Expense carriers
  if (effectiveMode === 'final-expense') {
    return (
      <section 
        id="final-expense-carriers-section"
        aria-label="Final Expense Carriers I Work With"
        className="py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary">
              {title || "Final Expense Carriers I Work With"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              {subtitle || "Contracted with leading final expense, burial, and life insurance carriers to protect Texas families."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {finalExpenseCarriersList.map((carrier) => (
              <CarrierCard key={carrier.id} carrier={carrier} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 4. ALL OTHER Main Pages Rule:
  // Main heading: "Carriers I Work With"
  // First subgroup heading: "Medicare" (8 carriers)
  // Second subgroup heading: "Final Expense" (11 carriers)
  // (No Obamacare / Marketplace logos on other pages)
  return (
    <section 
      id="carriers-i-work-with-section"
      aria-label="Carriers I Work With"
      className="py-14 sm:py-16 bg-slate-50 border-t border-b border-slate-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary">
            {title || "Carriers I Work With"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
            {subtitle || "Directly contracted with top-rated Medicare and Life Insurance providers across Texas."}
          </p>
        </div>

        {/* First Subgroup: Medicare */}
        <div id="subgroup-medicare" className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
            <Shield className="text-tn-accent flex-shrink-0" size={20} />
            <h3 className="text-lg sm:text-xl font-bold text-tn-primary tracking-wide">
              Medicare
            </h3>
            <span className="text-xs text-slate-500 ml-auto font-medium">
              {medicareCarriersList.length} Carriers
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {medicareCarriersList.map((carrier) => (
              <CarrierCard key={carrier.id} carrier={carrier} />
            ))}
          </div>
        </div>

        {/* Second Subgroup: Final Expense */}
        <div id="subgroup-final-expense">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
            <HeartHandshake className="text-tn-primary flex-shrink-0" size={20} />
            <h3 className="text-lg sm:text-xl font-bold text-tn-primary tracking-wide">
              Final Expense
            </h3>
            <span className="text-xs text-slate-500 ml-auto font-medium">
              {finalExpenseCarriersList.length} Carriers
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {finalExpenseCarriersList.map((carrier) => (
              <CarrierCard key={carrier.id} carrier={carrier} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CarrierLogos;
