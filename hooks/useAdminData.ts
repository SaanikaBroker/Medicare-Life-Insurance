
import React, { createContext, useContext, useState } from 'react';
import type { SiteData } from '../types';

const initialData: SiteData = {
  contact: {
    phone: '210-816-2977',
    email: 'saanika@truenorthmedicare.com',
    address: '1234 Main St, San Antonio, TX 78205',
    hours: 'Mon - Fri, 9am - 5pm'
  },
  social: {
    facebook: '#',
    linkedin: '#',
    instagram: '#'
  },
  testimonials: [
    { id: 1, name: 'John D.', location: 'San Antonio, TX', rating: 5, text: 'Saanika was incredibly patient and knowledgeable. She made a confusing process so simple. I highly recommend TrueNorth!' },
    { id: 2, name: 'Maria G.', location: 'Houston, TX', rating: 5, text: 'I didn\'t know where to start with Medicare. Saanika found me the perfect plan that saved me money. Truly a lifesaver.' },
    { id: 3, name: 'Robert P.', location: 'Dallas, TX', rating: 5, text: 'Professional, trustworthy, and genuinely caring. The best experience I\'ve had with an insurance broker.' },
    { id: 4, name: 'Linda S.', location: 'Austin, TX', rating: 5, text: 'Finding the right life insurance for my family was easy with Saanika\'s help. She explained everything clearly.' },
    { id: 5, name: 'David C.', location: 'Corpus Christi, TX', rating: 5, text: 'As a veteran, my needs were specific. TrueNorth found a plan that worked perfectly with my existing benefits.' }
  ]
};

const DataContext = createContext<{
  siteData: SiteData;
  setSiteData: React.Dispatch<React.SetStateAction<SiteData>>;
}>({
  siteData: initialData,
  setSiteData: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteData, setSiteData] = useState<SiteData>(initialData);

  // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
  // This resolves parsing errors and the downstream error in App.tsx.
  return React.createElement(DataContext.Provider, { value: { siteData, setSiteData } }, children);
};

export const useAdminData = () => useContext(DataContext);