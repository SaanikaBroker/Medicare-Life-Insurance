
import React from 'react';
import Button from '../components/Button';
import { ShieldCheck, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';
import { allCarriers } from '../data/carrierData';

// FIX: Replaced corrupted base64 image data with a placeholder to resolve syntax error.
const saanikaProfileImage = "https://picsum.photos/seed/saanika/400/600";

const AboutPage: React.FC = () => {
  const { siteData } = useAdminData();
  
  return (
    <div className="bg-tn-gray">
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-tn-primary">About Saanika</h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">Your Dedicated, Local Texas Insurance Broker</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-5xl mx-auto overflow-hidden">
            <img 
                src={saanikaProfileImage} 
                alt="Saanika, your trusted insurance broker" 
                className="rounded-lg shadow-lg w-full md:w-1/3 float-none md:float-left mr-0 md:mr-8 mb-6 md:mb-4"
            />
            <h2 className="text-4xl font-bold text-tn-primary mb-6">A Passion for Helping Texans</h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                Hi, I'm Saanika, the founder of TrueNorth Medicare & Life Insurance. As a licensed insurance broker based right here in San Antonio, my mission is simple: to provide clear, honest, and personalized guidance to fellow Texans navigating the complexities of insurance.
              </p>
              <p>
                I believe that everyone deserves to feel confident and secure in their healthcare and financial decisions. Too often, people are left feeling confused by jargon and overwhelmed by options. I'm here to change that. I take the time to listen, understand your unique needs, and translate the fine print into plain English.
              </p>
              <p>
                Whether you're turning 65 and new to Medicare, exploring your life insurance options, or just want to review your current coverage, I'm here to be your trusted advocate. My services are always at no cost to you, and my only goal is to find the plan that best fits your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saanika Section */}
      <section className="py-20 bg-tn-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-tn-primary mb-12">My Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <HeartHandshake size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Honesty & Transparency</h3>
              <p className="text-lg text-gray-600">I provide unbiased advice tailored to your best interests, not an insurance company's bottom line.</p>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Expert Knowledge</h3>
              <p className="text-lg text-gray-600">I stay up-to-date on the latest plans and regulations to ensure you get the best coverage available.</p>
            </div>
             <div className="flex flex-col items-center">
              <ShieldCheck size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Ongoing Support</h3>
              <p className="text-lg text-gray-600">My job doesn't end at enrollment. I'm your year-round resource for any questions or concerns.</p>
            </div>
             <div className="flex flex-col items-center">
              <MapPin size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Proudly Texan</h3>
              <p className="text-lg text-gray-600">As a local broker, I understand the healthcare landscape in our great state and serve clients from El Paso to Beaumont.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-tn-primary mb-6">Let's Secure Your Future, Together</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Ready to discuss your needs? Schedule a free, no-pressure consultation with me today.
          </p>
          <Button as="a" href="#/book-appointment">Book a Free Consultation</Button>
        </div>
      </section>
      <CarrierLogos carriers={allCarriers} />
    </div>
  );
};

export default AboutPage;
