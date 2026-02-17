
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface SiteData {
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  social: {
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  testimonials: Testimonial[];
  // Other global settings can be added here
}
