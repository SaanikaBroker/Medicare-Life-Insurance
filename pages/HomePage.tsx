
import React from 'react';
import Button from '../components/Button';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Link } from 'react-router-dom';
import { useAdminData } from '../hooks/useAdminData';
import { ShieldCheck, Users, Award, Handshake } from 'lucide-react';
import CarrierLogos from '../components/CarrierLogos';
import { allCarriers } from '../data/carrierData';

const HomePage: React.FC = () => {
  const { siteData } = useAdminData();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src="https://picsum.photos/1600/900?grayscale" alt="Happy senior couple" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Guiding You to the Right Medicare & Life Insurance Decisions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Local. Trusted. Serving San Antonio and All of Texas.</p>
          <div className="flex justify-center">
            <Button as="a" href="#/book-appointment" variant="primary">Schedule a Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Feature Tiles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-tn-primary mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/medicare" className="group block rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img src="https://picsum.photos/600/600?random=1" alt="Medicare services" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-tn-primary bg-opacity-70 flex items-center justify-center p-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Medicare</h3>
                    <p className="text-lg text-gray-200">Navigate Medicare with confidence. We help you understand your options and choose the right plan.</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/life-insurance" className="group block rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img src="https://picsum.photos/600/600?random=2" alt="Life insurance services" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-tn-primary bg-opacity-70 flex items-center justify-center p-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Life & Burial Insurance</h3>
                    <p className="text-lg text-gray-200">Protect your loved ones and secure their future with a comprehensive life insurance policy.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-tn-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-tn-primary mb-12">Why Choose TrueNorth?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <Award size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Local Texas Broker</h3>
              <p className="text-lg text-gray-600">We understand the specific needs of Texans because we live and work here too.</p>
            </div>
            <div className="flex flex-col items-center">
              <Handshake size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Personalized Service</h3>
              <p className="text-lg text-gray-600">You're not just a number. We take the time to know you and your unique situation.</p>
            </div>
             <div className="flex flex-col items-center">
              <ShieldCheck size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">No-Cost Consultations</h3>
              <p className="text-lg text-gray-600">Our guidance is always free, with no obligation. We're here to help you make informed choices.</p>
            </div>
             <div className="flex flex-col items-center">
              <Users size={64} className="text-tn-accent mb-4"/>
              <h3 className="text-2xl font-semibold text-tn-primary mb-2">Navigating Options</h3>
              <p className="text-lg text-gray-600">We simplify complex insurance options so you can feel confident in your decision.</p>
            </div>
          </div>
          <Button as="a" href="#/about">Speak With a Licensed Broker Today</Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-tn-primary mb-12">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={siteData.testimonials} />
          <div className="mt-12">
            <Button as="a" href="#/reviews" variant="outline">Read More Reviews</Button>
          </div>
        </div>
      </section>

      {/* Carrier Logos */}
      <CarrierLogos carriers={allCarriers} />

      {/* Final CTA Strip */}
      <section className="py-16 bg-tn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Confident Decision?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Let us help you find the peace of mind that comes with the right coverage. Your free, no-obligation consultation is just a click away.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as="a" href="#/contact" variant="primary">Get Started</Button>
            <Button as="a" href="#/book-appointment" variant="outline" className="border-white text-white hover:bg-white hover:text-tn-primary">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
