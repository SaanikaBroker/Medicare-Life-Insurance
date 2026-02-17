
import React from 'react';
import { Carrier } from '../data/carrierData';

interface CarrierLogosProps {
  carriers: Carrier[];
  title?: string;
}

const CarrierLogos: React.FC<CarrierLogosProps> = ({ carriers, title = "We Work With Trusted Carriers" }) => {
  return (
    <section className="py-16 bg-tn-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-tn-primary mb-10">{title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
          {carriers.map(carrier => (
            <div key={carrier.name} className="h-12 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transform hover:scale-110">
              <img
                src={carrier.logoUrl}
                alt={`${carrier.name} logo`}
                className="h-full max-w-[150px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierLogos;
