export interface CarrierItem {
  id: string;
  name: string;
  category: 'medicare' | 'life';
  // Common filenames to auto-detect if placed in /public or /public/carriers
  possibleFiles: string[];
}

export const medicareCarriersList: CarrierItem[] = [
  {
    id: 'unitedhealthcare',
    name: 'UnitedHealthcare',
    category: 'medicare',
    possibleFiles: [
      'unitedhealthcare.png', 'unitedhealthcare.jpg', 'unitedhealthcare.svg', 'unitedhealthcare.webp',
      'uhc.png', 'uhc.jpg', 'uhc.svg', 'uhc.webp',
      'united-healthcare.png', 'united_healthcare.png', 'united-healthcare.jpg'
    ]
  },
  {
    id: 'humana',
    name: 'Humana',
    category: 'medicare',
    possibleFiles: [
      'humana.png', 'humana.jpg', 'humana.svg', 'humana.webp'
    ]
  },
  {
    id: 'healthspring',
    name: 'HealthSpring',
    category: 'medicare',
    possibleFiles: [
      'healthspring.png', 'healthspring.jpg', 'healthspring.svg', 'healthspring.webp',
      'cigna-healthspring.png', 'cigna_healthspring.png', 'cigna.png', 'cigna.svg'
    ]
  },
  {
    id: 'aetna',
    name: 'Aetna',
    category: 'medicare',
    possibleFiles: [
      'aetna.png', 'aetna.jpg', 'aetna.svg', 'aetna.webp'
    ]
  },
  {
    id: 'wellpoint',
    name: 'WellPoint',
    category: 'medicare',
    possibleFiles: [
      'wellpoint.png', 'wellpoint.jpg', 'wellpoint.svg', 'wellpoint.webp'
    ]
  },
  {
    id: 'wellcare',
    name: 'WellCare',
    category: 'medicare',
    possibleFiles: [
      'wellcare.png', 'wellcare.jpg', 'wellcare.svg', 'wellcare.webp'
    ]
  },
  {
    id: 'devoted',
    name: 'Devoted',
    category: 'medicare',
    possibleFiles: [
      'devoted.png', 'devoted.jpg', 'devoted.svg', 'devoted.webp',
      'devotedhealth.png', 'devoted-health.png'
    ]
  },
  {
    id: 'molina',
    name: 'Molina',
    category: 'medicare',
    possibleFiles: [
      'molina.png', 'molina.jpg', 'molina.svg', 'molina.webp',
      'molina-healthcare.png', 'molinahealthcare.png'
    ]
  },
  {
    id: 'presidio',
    name: 'Presidio',
    category: 'medicare',
    possibleFiles: [
      'presidio.png', 'presidio.jpg', 'presidio.svg', 'presidio.webp',
      'presidio-health.png'
    ]
  },
];

export const lifeInsuranceCarriersList: CarrierItem[] = [
  {
    id: 'mutual-of-omaha',
    name: 'Mutual of Omaha',
    category: 'life',
    possibleFiles: [
      'mutual-of-omaha.png', 'mutual_of_omaha.png', 'mutualofomaha.png',
      'mutual-of-omaha.jpg', 'mutualofomaha.jpg', 'mutual-of-omaha.svg'
    ]
  },
  {
    id: 'transamerica',
    name: 'Transamerica',
    category: 'life',
    possibleFiles: [
      'transamerica.png', 'transamerica.jpg', 'transamerica.svg', 'transamerica.webp'
    ]
  },
  {
    id: 'corebridge-aig',
    name: 'CoreBridge / AIG',
    category: 'life',
    possibleFiles: [
      'corebridge.png', 'corebridge.jpg', 'corebridge.svg',
      'corebridge-aig.png', 'corebridge_aig.png', 'aig.png', 'aig.svg'
    ]
  },
  {
    id: 'gerber',
    name: 'Gerber',
    category: 'life',
    possibleFiles: [
      'gerber.png', 'gerber.jpg', 'gerber.svg',
      'gerber-life.png', 'gerberlife.png'
    ]
  },
  {
    id: 'royal-neighbors',
    name: 'Royal Neighbors',
    category: 'life',
    possibleFiles: [
      'royal-neighbors.png', 'royal_neighbors.png', 'royalneighbors.png',
      'royal-neighbors.jpg', 'royal-neighbors.svg'
    ]
  },
  {
    id: 'trinity',
    name: 'Trinity',
    category: 'life',
    possibleFiles: [
      'trinity.png', 'trinity.jpg', 'trinity.svg',
      'trinity-life.png', 'trinitylife.png'
    ]
  },
  {
    id: 'cica',
    name: 'CICA',
    category: 'life',
    possibleFiles: [
      'cica.png', 'cica.jpg', 'cica.svg', 'cica-life.png'
    ]
  },
  {
    id: 'american-amicable',
    name: 'American Amicable',
    category: 'life',
    possibleFiles: [
      'american-amicable.png', 'american_amicable.png', 'americanamicable.png',
      'american-amicable.jpg', 'american-amicable.svg'
    ]
  },
  {
    id: 'lifeshield',
    name: 'LifeShield',
    category: 'life',
    possibleFiles: [
      'lifeshield.png', 'lifeshield.jpg', 'lifeshield.svg',
      'life-shield.png', 'lifeshield-national.png'
    ]
  },
  {
    id: 'foresters',
    name: 'Foresters',
    category: 'life',
    possibleFiles: [
      'foresters.png', 'foresters.jpg', 'foresters.svg',
      'foresters-financial.png', 'forestersfinancial.png'
    ]
  },
];

// Backwards-compatible mock objects if required anywhere
export interface Carrier {
  name: string;
  logoUrl: string;
}
export const medicareCarriers = medicareCarriersList.map(c => ({ name: c.name, logoUrl: '' }));
export const lifeInsuranceCarriers = lifeInsuranceCarriersList.map(c => ({ name: c.name, logoUrl: '' }));
export const allCarriers = [...medicareCarriers, ...lifeInsuranceCarriers];
