
export interface Carrier {
  name: string;
  logoUrl: string;
}

export const medicareCarriers: Carrier[] = [
  { name: 'UnitedHealthcare', logoUrl: 'https://picsum.photos/200/100?random=1' },
  { name: 'WellPoint', logoUrl: 'https://picsum.photos/200/100?random=2' },
  { name: 'Wellcare', logoUrl: 'https://picsum.photos/200/100?random=3' },
  { name: 'Humana', logoUrl: 'https://picsum.photos/200/100?random=4' },
  { name: 'Aetna', logoUrl: 'https://picsum.photos/200/100?random=5' },
  { name: 'HealthSpring', logoUrl: 'https://picsum.photos/200/100?random=6' },
  { name: 'Dedicated', logoUrl: 'https://picsum.photos/200/100?random=7' },
];

export const lifeInsuranceCarriers: Carrier[] = [
  { name: 'Mutual of Omaha', logoUrl: 'https://picsum.photos/200/100?random=8' },
  { name: 'American Amicable', logoUrl: 'https://picsum.photos/200/100?random=9' },
  { name: 'Royal Neighbors of America', logoUrl: 'https://picsum.photos/200/100?random=10' },
  { name: 'Transamerica', logoUrl: 'https://picsum.photos/200/100?random=11' },
  { name: 'Trinity Life', logoUrl: 'https://picsum.photos/200/100?random=12' },
  { name: 'Gerber Life', logoUrl: 'https://picsum.photos/200/100?random=13' },
  { name: 'Foresters Financial', logoUrl: 'https://picsum.photos/200/100?random=14' },
  { name: 'Americo', logoUrl: 'https://picsum.photos/200/100?random=15' },
];

// Combine and remove duplicates for use on general pages
export const allCarriers: Carrier[] = [
  ...medicareCarriers,
  ...lifeInsuranceCarriers,
].filter((carrier, index, self) => 
    index === self.findIndex((c) => c.name === carrier.name)
);
