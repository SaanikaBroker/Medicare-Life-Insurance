
import React from 'react';
import Button from '../components/Button';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Link } from 'react-router-dom';
import { useAdminData } from '../hooks/useAdminData';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  Handshake, 
  ArrowRight, 
  Shield, 
  HeartHandshake, 
  Sparkles,
  Glasses
} from 'lucide-react';
import CarrierLogos from '../components/CarrierLogos';
import { allCarriers } from '../data/carrierData';
import DualBookingButtons from '../components/DualBookingButtons';

// Custom generated inclusive, candid San Antonio assets
import heroImage from '../src/assets/images/hero_authentic_san_antonio_1789412596912.jpg';
import medicareImg from '../src/assets/images/tile_medicare_candid_1789412970415.jpg';
import lifeInsImg from '../src/assets/images/tile_life_candid_1789412982149.jpg';
import acaImg from '../src/assets/images/tile_aca_full_family_1789412990092.jpg';
import dentalVisionImg from '../src/assets/images/tile_dental_candid_1789413000735.jpg';

const HomePage: React.FC = () => {
  const { siteData } = useAdminData();

  const services = [
    {
      title: 'Medicare Solutions',
      shortTitle: 'Medicare',
      category: 'Ages 65+ & Disability',
      description: 'Navigate Advantage, Supplement (Medigap), and Part D prescription plans with personalized, $0 broker guidance.',
      path: '/medicare',
      image: medicareImg,
      alt: 'Candid moment of an everyday Hispanic senior and her daughter chatting over kitchen tea and paperwork',
      icon: <Shield className="text-red-400" size={20} />,
    },
    {
      title: 'Life & Burial Insurance',
      shortTitle: 'Life & Burial',
      category: 'Family Security',
      description: 'Secure your family’s financial future with guaranteed term, whole life, or final expense burial protection.',
      path: '/life-insurance',
      image: lifeInsImg,
      alt: 'Unposed, authentic moment of a loving couple sharing a quiet laugh and conversation on their couch',
      icon: <HeartHandshake className="text-red-400" size={20} />,
    },
    {
      title: 'ACA Marketplace',
      shortTitle: 'ACA Marketplace',
      category: 'Under-65 Health Plans',
      description: 'Affordable Care Act individual and family health coverage with maximized subsidies and essential benefits.',
      path: '/aca-marketplace',
      image: acaImg,
      alt: 'Candid shot of a full working family with parents and young children gathered together at home',
      icon: <Users className="text-red-400" size={20} />,
    },
    {
      title: 'Dental & Vision Plans',
      shortTitle: 'Dental & Vision',
      category: 'Standalone Wellness',
      description: 'Year-round dental and vision plans covering preventive cleanings, dentures, implants, and eyewear.',
      path: '/dental-vision',
      image: dentalVisionImg,
      alt: 'Natural, unposed photo of an everyday woman wearing glasses glancing up with a gentle, relaxed smile',
      icon: <Glasses className="text-red-400" size={20} />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[520px] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <img 
          src={heroImage} 
          alt="Everyday senior couple in San Antonio, Texas sharing a warm morning at home" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Balanced, soft overlay ensuring centered text is clearly legible against authentic photography */}
        <div className="absolute inset-0 bg-slate-950/70 sm:bg-slate-950/65 backdrop-contrast-[1.02]"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center max-w-4xl flex flex-col items-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-blue-100 text-xs sm:text-sm font-medium tracking-wide mb-4">
              <span>San Antonio & Across Texas</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight text-white max-w-2xl">
              Insurance Guidance Made Simple
            </h1>
            
            <p className="text-base sm:text-lg text-slate-100/90 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
              Local, independent help with Medicare, Life Insurance, ACA Marketplace, and Dental & Vision.
            </p>
            
            <div className="flex justify-center">
              <a
                id="hero-btn-book-appointment"
                href="#/book-appointment"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg bg-tn-accent text-white hover:bg-red-800 shadow-lg hover:shadow-xl transition-all text-center tracking-wide"
              >
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tiles Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-tn-accent font-medium tracking-wider text-xs uppercase">
              Coverage for Every Stage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tn-primary mt-1 mb-3">
              Our Insurance Solutions
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Explore coverage options designed to protect your health, family, and hard-earned savings with unbiased, local guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {services.map((service) => (
              <Link 
                key={service.path}
                to={service.path} 
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Square Tile Background Image */}
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Refined gradient overlay for soft, effortless readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent transition-opacity duration-300"></div>

                {/* Top Category Badge */}
                <div className="relative z-10 p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium tracking-wide uppercase bg-black/40 backdrop-blur-sm text-slate-200 border border-white/15">
                    {service.category}
                  </span>
                </div>

                {/* Bottom Content Placed Over the Image */}
                <div className="relative z-10 p-4 pt-0 text-white">
                  <div className="flex items-center gap-1.5 mb-1">
                    {service.icon}
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-white group-hover:text-blue-100 transition-colors">
                      {service.shortTitle}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200/90 line-clamp-2 mb-2.5 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="flex items-center text-xs sm:text-sm font-medium text-white/90 group-hover:text-red-300 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-tn-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mb-12">Why Texans Choose TrueNorth</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left sm:text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold text-tn-primary mb-1.5">Local Texas Broker</h3>
              <p className="text-sm text-gray-600 leading-relaxed">We understand local Texas networks and hospital systems because we live and work here too.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <Handshake size={24} />
              </div>
              <h3 className="text-lg font-semibold text-tn-primary mb-1.5">Personalized Service</h3>
              <p className="text-sm text-gray-600 leading-relaxed">You're never a policy number. We take the time to review your prescriptions, doctors, and budget.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-semibold text-tn-primary mb-1.5">100% Free Consultations</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Our broker services are always at zero cost to you, with no sales pressure or obligation.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3 border border-red-100">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold text-tn-primary mb-1.5">Clear Explanations</h3>
              <p className="text-sm text-gray-600 leading-relaxed">We cut through the confusing insurance fine print and explain your options in plain language.</p>
            </div>
          </div>
          
          <Button as="a" href="#/about" variant="secondary" size="md">
            Meet Your Licensed Broker
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <span className="text-tn-accent font-medium tracking-wider text-xs uppercase">
            Client Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-tn-primary mt-1 mb-10">
            What Our Clients Say
          </h2>
          <TestimonialCarousel testimonials={siteData.testimonials} />
          <div className="mt-10">
            <Button as="a" href="#/reviews" variant="outline" size="md">
              Read Client Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Carrier Logos */}
      <CarrierLogos />

      {/* Final CTA Strip */}
      <section className="py-14 bg-tn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Ready to Discuss Your Options?</h2>
          <p className="text-base text-slate-200 mb-6 max-w-2xl mx-auto leading-relaxed">
            Get clear, honest guidance tailored to your health needs and budget. Consultations are always friendly, confidential, and completely free.
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <DualBookingButtons variant="dark" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
