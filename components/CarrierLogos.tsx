import React, { useState } from 'react';
import { 
  CarrierItem, 
  medicareCarriersList, 
  lifeInsuranceCarriersList 
} from '../data/carrierData';
import { Shield, HeartHandshake } from 'lucide-react';

interface CarrierCardProps {
  carrier: CarrierItem;
}

const CarrierCard: React.FC<CarrierCardProps> = ({ carrier }) => {
  const [fileCandidateIndex, setFileCandidateIndex] = useState(0);
  const [hasImage, setHasImage] = useState(true);

  // Check possible paths
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
      // No uploaded file found for this carrier
      setHasImage(false);
    }
  };

  return (
    <div 
      id={`carrier-item-${carrier.id}`}
      className="bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 flex items-center justify-center min-h-[90px] sm:min-h-[105px] shadow-2xs hover:shadow-xs transition-shadow duration-200"
    >
      {hasImage && currentSrc ? (
        <img
          src={currentSrc}
          alt={`${carrier.name} Logo`}
          onError={handleImageError}
          className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain transition-transform duration-200"
        />
      ) : (
        /* Clearly labeled text placeholder when no logo file has been uploaded */
        <div className="text-center px-2 py-1 w-full">
          <p className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight">
            {carrier.name}
          </p>
        </div>
      )}
    </div>
  );
};

interface CarrierLogosProps {
  title?: string;
  subtitle?: string;
  showMedicareOnly?: boolean;
  showLifeOnly?: boolean;
}

const CarrierLogos: React.FC<CarrierLogosProps> = ({ 
  title = "We Work With Trusted Carriers",
  subtitle = "Directly contracted with top-rated Medicare and Life Insurance providers across Texas.",
  showMedicareOnly = false,
  showLifeOnly = false
}) => {
  const showMedicare = !showLifeOnly;
  const showLife = !showMedicareOnly;

  return (
    <section 
      id="trusted-carriers-section"
      aria-label="Contracted Insurance Carriers"
      className="py-14 sm:py-16 bg-slate-50 border-t border-b border-slate-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-tn-accent font-semibold tracking-wider text-xs uppercase">
            Contracted Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-tn-primary mt-1 mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Medicare Carriers Group */}
        {showMedicare && (
          <div id="medicare-carriers-group" className="mb-10">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
              <Shield className="text-tn-accent flex-shrink-0" size={20} />
              <h3 className="text-base sm:text-lg font-bold text-tn-primary tracking-wide uppercase">
                Medicare Carriers
              </h3>
              <span className="text-xs font-normal text-slate-500 ml-auto">
                {medicareCarriersList.length} Providers
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {medicareCarriersList.map((carrier) => (
                <CarrierCard key={carrier.id} carrier={carrier} />
              ))}
            </div>
          </div>
        )}

        {/* Life Insurance Carriers Group */}
        {showLife && (
          <div id="life-insurance-carriers-group">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
              <HeartHandshake className="text-tn-primary flex-shrink-0" size={20} />
              <h3 className="text-base sm:text-lg font-bold text-tn-primary tracking-wide uppercase">
                Life Insurance Carriers
              </h3>
              <span className="text-xs font-normal text-slate-500 ml-auto">
                {lifeInsuranceCarriersList.length} Providers
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {lifeInsuranceCarriersList.map((carrier) => (
                <CarrierCard key={carrier.id} carrier={carrier} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CarrierLogos;
