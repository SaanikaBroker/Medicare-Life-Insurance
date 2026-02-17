
import React from 'react';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import CarrierLogos from '../components/CarrierLogos';
import { allCarriers } from '../data/carrierData';

const ContactPage: React.FC = () => {
  const { siteData } = useAdminData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to an API
    alert('Thank you for your message! We will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tn-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold">Get In Touch</h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto">We're here to answer your questions. Let’s talk about your options today.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-tn-gray p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-tn-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg focus:ring-tn-primary focus:border-tn-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg focus:ring-tn-primary focus:border-tn-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg focus:ring-tn-primary focus:border-tn-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg focus:ring-tn-primary focus:border-tn-primary"></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-tn-primary mb-6">Contact Information</h2>
                <div className="space-y-6 text-xl text-gray-800">
                  <div className="flex items-center">
                    <Phone className="text-tn-accent mr-4" size={32} />
                    <a href={`tel:${siteData.contact.phone}`} className="hover:text-tn-accent font-bold text-3xl">{siteData.contact.phone}</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-tn-accent mr-4" size={32} />
                    <a href={`mailto:${siteData.contact.email}`} className="hover:text-tn-accent">{siteData.contact.email}</a>
                  </div>
                   <div className="flex items-start">
                    <MapPin className="text-tn-accent mr-4 mt-1" size={32} />
                    <div>
                        <span className="font-semibold">Office Location:</span> {siteData.contact.address}<br />
                        <span className="font-semibold">Service Area:</span> All of Texas
                    </div>
                  </div>
                   <div className="flex items-center">
                    <Clock className="text-tn-accent mr-4" size={32} />
                     <div>
                        <span className="font-semibold">Business Hours:</span> {siteData.contact.hours}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div>
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Google Maps Placeholder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <CarrierLogos carriers={allCarriers} />
    </div>
  );
};

export default ContactPage;
