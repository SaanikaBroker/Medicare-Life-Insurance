
import React, { useState } from 'react';
import { useAdminData } from '../hooks/useAdminData';
import type { Testimonial } from '../types';

const AdminPage: React.FC = () => {
  const { siteData, setSiteData } = useAdminData();
  const [activeTab, setActiveTab] = useState('general');

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, key] = name.split('.');
    
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };
  
  const handleTestimonialChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newTestimonials = [...siteData.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [name]: name === 'rating' ? parseInt(value) : value };
    setSiteData(prev => ({ ...prev, testimonials: newTestimonials }));
  };

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: '',
      location: '',
      rating: 5,
      text: ''
    };
    setSiteData(prev => ({ ...prev, testimonials: [...prev.testimonials, newTestimonial] }));
  };

  const removeTestimonial = (id: number) => {
    setSiteData(prev => ({ ...prev, testimonials: prev.testimonials.filter(t => t.id !== id) }));
  };
  
  const InputField = ({ label, name, value }: { label: string, name: string, value: string }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleGeneralChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );


  const renderContent = () => {
    switch(activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Contact & Social</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Phone Number" name="contact.phone" value={siteData.contact.phone} />
                <InputField label="Email Address" name="contact.email" value={siteData.contact.email} />
                <InputField label="Address" name="contact.address" value={siteData.contact.address} />
                <InputField label="Business Hours" name="contact.hours" value={siteData.contact.hours} />
                <InputField label="Facebook URL" name="social.facebook" value={siteData.social.facebook} />
                <InputField label="LinkedIn URL" name="social.linkedin" value={siteData.social.linkedin} />
                <InputField label="Instagram URL" name="social.instagram" value={siteData.social.instagram} />
            </div>
          </div>
        );
      case 'testimonials':
        return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Manage Testimonials</h3>
              <button onClick={addTestimonial} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add Testimonial</button>
            </div>
            <div className="space-y-6">
              {siteData.testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="p-4 border rounded-md relative">
                  <button onClick={() => removeTestimonial(testimonial.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold">X</button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium">Name</label>
                      <input name="name" value={testimonial.name} onChange={(e) => handleTestimonialChange(index, e)} className="mt-1 w-full p-2 border rounded"/>
                    </div>
                     <div>
                      <label className="block text-sm font-medium">Location</label>
                      <input name="location" value={testimonial.location} onChange={(e) => handleTestimonialChange(index, e)} className="mt-1 w-full p-2 border rounded"/>
                    </div>
                     <div>
                      <label className="block text-sm font-medium">Rating (1-5)</label>
                      <input type="number" min="1" max="5" name="rating" value={testimonial.rating} onChange={(e) => handleTestimonialChange(index, e)} className="mt-1 w-full p-2 border rounded"/>
                    </div>
                  </div>
                  <div className="mt-4">
                     <label className="block text-sm font-medium">Text</label>
                     <textarea name="text" value={testimonial.text} onChange={(e) => handleTestimonialChange(index, e)} rows={3} className="mt-1 w-full p-2 border rounded"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  const TabButton = ({ name, label }: { name: string, label: string }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`px-4 py-2 text-lg font-semibold rounded-t-lg ${activeTab === name ? 'bg-white border-b-0 border' : 'bg-gray-200'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <a href="/#" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">View Live Site</a>
        </div>

        <p className="mb-6 text-gray-600">This is a simulated admin panel. Changes made here will be reflected on the site but will not persist after a page refresh.</p>

        <div className="flex border-b">
          <TabButton name="general" label="General Settings" />
          <TabButton name="testimonials" label="Testimonials" />
        </div>
        <div className="bg-white p-6 rounded-b-lg rounded-r-lg border shadow-md">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
