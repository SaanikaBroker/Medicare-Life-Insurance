
import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { useAdminData } from '../hooks/useAdminData';

const BookAppointmentPage: React.FC = () => {
  const { siteData } = useAdminData();

  // IMPORTANT: Replace this placeholder URL with your actual Google Calendar appointment scheduling link.
  // You can create one here: https://calendar.google.com/calendar/u/0/r/settings/appointment_schedules
  const googleCalendarUrl = "https://calendar.google.com/calendar/appointments/schedules/YOUR_UNIQUE_SCHEDULE_LINK_HERE";

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-tn-gray py-16 text-center">
        <div className="container mx-auto px-4">
          <CalendarCheck className="mx-auto text-tn-accent mb-4" size={64}/>
          <h1 className="text-5xl font-extrabold text-tn-primary">Book Your Free Consultation</h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Schedule a no-obligation consultation at your convenience. I look forward to speaking with you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center text-gray-600 mb-8">
              Please select a date and time that works best for you from the calendar below. If you have any trouble or prefer to book over the phone, please call me at <a href={`tel:${siteData.contact.phone}`} className="font-bold text-tn-primary hover:underline">{siteData.contact.phone}</a>.
            </p>
            
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <iframe
                src={googleCalendarUrl}
                style={{ border: 0 }}
                width="100%"
                height="800"
                frameBorder="0"
                title="Book an Appointment"
              ></iframe>
            </div>

            <div className="text-center mt-8 text-sm text-gray-500">
                <p><strong>Note:</strong> The calendar above is a placeholder. The real booking functionality will be active once a valid Google Calendar link is provided.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointmentPage;
