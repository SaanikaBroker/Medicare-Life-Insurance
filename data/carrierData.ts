export interface CarrierItem {
  id: string;
  name: string;
  category: 'medicare' | 'marketplace' | 'final-expense';
  possibleFiles: string[];
}

/**
 * 1. Medicare Carriers:
 * - UnitedHealthcare
 * - Humana
 * - Aetna
 * - Wellpoint
 * - HealthSpring
 * - Devoted
 * - WellCare
 * - Presidio
 */
export const medicareCarriersList: CarrierItem[] = [
  {
    id: 'unitedhealthcare',
    name: 'UnitedHealthcare',
    category: 'medicare',
    possibleFiles: [
      'unitedhealthcare.svg', 'UHC.png', 'uhc.png', 'unitedhealthcare.png', 'unitedhealthcare.webp'
    ]
  },
  {
    id: 'humana',
    name: 'Humana',
    category: 'medicare',
    possibleFiles: [
      'humana.svg', 'humana.png', 'humana.jpg', 'humana.webp'
    ]
  },
  {
    id: 'aetna',
    name: 'Aetna',
    category: 'medicare',
    possibleFiles: [
      'aetna.svg', 'aetna.png', 'aetna.jpg', 'aetna.webp'
    ]
  },
  {
    id: 'wellpoint',
    name: 'Wellpoint',
    category: 'medicare',
    possibleFiles: [
      'wellpoint.svg', 'wellpoint-logo.webp', 'wellpoint.png', 'wellpoint.webp'
    ]
  },
  {
    id: 'healthspring',
    name: 'HealthSpring',
    category: 'medicare',
    possibleFiles: [
      'healthspring.svg', 'HealthSpring.jpg', 'healthspring.png', 'healthspring.webp'
    ]
  },
  {
    id: 'devoted',
    name: 'Devoted',
    category: 'medicare',
    possibleFiles: [
      'devoted.svg', 'Devoted.png', 'devoted.png', 'devoted.webp'
    ]
  },
  {
    id: 'wellcare',
    name: 'WellCare',
    category: 'medicare',
    possibleFiles: [
      'wellcare.svg', 'wellcare.png', 'wellcare.webp'
    ]
  },
  {
    id: 'presidio',
    name: 'Presidio',
    category: 'medicare',
    possibleFiles: [
      'presidio.svg', 'thumbnail-sharing.jpg', 'presidio.png', 'presidio.webp'
    ]
  },
];

/**
 * 2. Obamacare / Marketplace Carriers:
 * - Wellpoint
 * - UnitedHealthcare
 * - Blue Cross Blue Shield
 * - Oscar
 * - Ambetter
 * - Presidio
 */
export const marketplaceCarriersList: CarrierItem[] = [
  {
    id: 'wellpoint',
    name: 'Wellpoint',
    category: 'marketplace',
    possibleFiles: [
      'wellpoint.svg', 'wellpoint-logo.webp', 'wellpoint.png', 'wellpoint.webp'
    ]
  },
  {
    id: 'unitedhealthcare',
    name: 'UnitedHealthcare',
    category: 'marketplace',
    possibleFiles: [
      'unitedhealthcare.svg', 'UHC.png', 'uhc.png', 'unitedhealthcare.png', 'unitedhealthcare.webp'
    ]
  },
  {
    id: 'bcbs',
    name: 'Blue Cross Blue Shield',
    category: 'marketplace',
    possibleFiles: [
      'bcbs.svg', 'BCBS.webp', 'bcbs.png', 'bcbs.webp'
    ]
  },
  {
    id: 'oscar',
    name: 'Oscar',
    category: 'marketplace',
    possibleFiles: [
      'oscar.svg', 'Oscar_Health_logo.svg', 'oscar.png', 'oscar.webp'
    ]
  },
  {
    id: 'ambetter',
    name: 'Ambetter',
    category: 'marketplace',
    possibleFiles: [
      'ambetter.svg', 'Ambetter-Logo.png', 'ambetter.png', 'ambetter.webp'
    ]
  },
  {
    id: 'presidio',
    name: 'Presidio',
    category: 'marketplace',
    possibleFiles: [
      'presidio.svg', 'thumbnail-sharing.jpg', 'presidio.png', 'presidio.webp'
    ]
  }
];

/**
 * 3. Final Expense Carriers:
 * - CVS/Aetna
 * - American Amicable
 * - Corebridge
 * - Gerber
 * - Guarantee Trust Life (GTL)
 * - Mutual of Omaha / United of Omaha
 * - Royal Neighbors
 * - Transamerica
 * - CICA
 * - Foresters
 * - Trinity
 * (Ignore SBLI)
 */
export const finalExpenseCarriersList: CarrierItem[] = [
  {
    id: 'cvs-aetna',
    name: 'CVS/Aetna',
    category: 'final-expense',
    possibleFiles: [
      'cvs-aetna.svg', 'cvs-aetna.png', 'aetna.svg'
    ]
  },
  {
    id: 'american-amicable',
    name: 'American Amicable',
    category: 'final-expense',
    possibleFiles: [
      'american-amicable.svg', 'AMAM.webp', 'american-amicable.png'
    ]
  },
  {
    id: 'corebridge',
    name: 'Corebridge',
    category: 'final-expense',
    possibleFiles: [
      'corebridge.svg', 'Corebridge-Financial-Full-Color.jpg', 'corebridge.png'
    ]
  },
  {
    id: 'gerber',
    name: 'Gerber',
    category: 'final-expense',
    possibleFiles: [
      'gerber.svg', '437-4370612_gerber-logo-gerber-baby-png-transparent-png.png', 'gerber.png'
    ]
  },
  {
    id: 'gtl',
    name: 'Guarantee Trust Life (GTL)',
    category: 'final-expense',
    possibleFiles: [
      'gtl.svg', 'GTL.png', 'gtl.png'
    ]
  },
  {
    id: 'mutual-of-omaha',
    name: 'Mutual of Omaha / United of Omaha',
    category: 'final-expense',
    possibleFiles: [
      'mutual-of-omaha.svg', 'mutual-of-omaha.png'
    ]
  },
  {
    id: 'royal-neighbors',
    name: 'Royal Neighbors',
    category: 'final-expense',
    possibleFiles: [
      'royal-neighbors.svg', 'RN Logo.png', 'royal-neighbors.png'
    ]
  },
  {
    id: 'transamerica',
    name: 'Transamerica',
    category: 'final-expense',
    possibleFiles: [
      'transamerica.svg', 'transamerica-logo-vector-11573939509t4wnlvkzk8.png', 'transamerica.png'
    ]
  },
  {
    id: 'cica',
    name: 'CICA',
    category: 'final-expense',
    possibleFiles: [
      'cica.svg', 'CICA.webp', 'cica.png'
    ]
  },
  {
    id: 'foresters',
    name: 'Foresters',
    category: 'final-expense',
    possibleFiles: [
      'foresters.svg', 'Foresters_NEW.jpg', 'foresters.png'
    ]
  },
  {
    id: 'trinity',
    name: 'Trinity',
    category: 'final-expense',
    possibleFiles: [
      'trinity.svg', 'TRINITY.webp', 'tRINITY.png', 'trinity.png'
    ]
  },
];

// Backwards-compatible alias for existing imports
export const lifeInsuranceCarriersList = finalExpenseCarriersList;


// Backwards-compatible mock objects if required anywhere
export interface Carrier {
  name: string;
  logoUrl: string;
}
export const medicareCarriers = medicareCarriersList.map(c => ({ name: c.name, logoUrl: '' }));
export const lifeInsuranceCarriers = lifeInsuranceCarriersList.map(c => ({ name: c.name, logoUrl: '' }));
export const allCarriers = [...medicareCarriers, ...lifeInsuranceCarriers];
