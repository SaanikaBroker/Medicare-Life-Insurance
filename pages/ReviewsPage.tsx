
import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';
import type { Testimonial } from '../types';
import Button from '../components/Button';

const saanikaProfileImage = "https://picsum.photos/seed/saanika/400/600";

const ReviewCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
    <div className="flex justify-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-lg italic text-gray-700 mb-6 flex-grow">"{testimonial.text}"</p>
    <div className="text-center">
        <p className="font-bold text-xl text-tn-primary">{testimonial.name}</p>
        <p className="text-md text-gray-500">{testimonial.location}</p>
    </div>
  </div>
);

const ReviewsPage: React.FC = () => {
  const { siteData } = useAdminData();

  return (
    <div className="bg-tn-gray">
      {/* Page Header */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <MessageSquareQuote className="mx-auto text-tn-accent mb-4" size={64}/>
          <h1 className="text-5xl font-extrabold text-tn-primary">Client Testimonials</h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
            We are proud to serve our clients across Texas. See what they have to say about their experience with TrueNorth.
          </p>
        </div>
      </section>

      {/* Intro from Saanika */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <img src={saanikaProfileImage} alt="Saanika, Broker" className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-white" />
                <div>
                    <h2 className="text-3xl font-bold text-tn-primary mb-2">A Note From Saanika</h2>
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                        "Building trust and helping my clients find peace of mind is my greatest reward. I'm so grateful for the kind words they've shared. Please take a moment to read about their experiences, and I hope to have the opportunity to provide you with the same level of dedicated service."
                    </p>
                </div>
            </div>
        </div>
      </section>


      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial) => (
              <ReviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Strip */}
      <section className="py-16 bg-tn-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience 5-Star Service?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join our growing family of satisfied clients. Let us provide the clear, compassionate guidance you deserve.</p>
          <div className="flex justify-center">
            <Button as="a" href="#/book-appointment" variant="primary">Schedule Your Free Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
