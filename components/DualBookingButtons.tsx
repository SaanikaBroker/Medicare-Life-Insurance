import React from 'react';
import { Calendar, Shield, HeartHandshake, ArrowRight } from 'lucide-react';

interface BookingButtonsProps {
  className?: string;
  variant?: 'light' | 'dark' | 'card';
  medicareText?: string;
  generalText?: string;
  layout?: 'row' | 'column';
}

/**
 * Reusable component providing the two official booking options across all main pages:
 * 1. "Schedule Your Medicare 101 or Annual Review" -> #/book-medicare
 * 2. "Book a General Appointment" -> #/book-appointment (or #/book-general)
 */
export const DualBookingButtons: React.FC<BookingButtonsProps> = ({
  className = '',
  variant = 'light',
  medicareText = 'Schedule Your Medicare 101 or Annual Review',
  generalText = 'Book a General Appointment',
  layout = 'row',
}) => {
  const isDark = variant === 'dark';

  if (layout === 'column') {
    return (
      <div className={`flex flex-col gap-3.5 w-full max-w-xl mx-auto ${className}`}>
        <a
          id="btn-schedule-medicare-col"
          href="#/book-medicare"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold text-base sm:text-lg bg-tn-accent text-white hover:bg-red-800 shadow-md transition-all text-center w-full"
        >
          <Shield size={20} className="flex-shrink-0" />
          <span>{medicareText}</span>
        </a>

        <a
          id="btn-book-general-col"
          href="#/book-general"
          className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold text-base sm:text-lg text-center w-full transition-all border ${
            isDark
              ? 'border-white text-white hover:bg-white hover:text-tn-primary'
              : 'border-tn-primary text-tn-primary hover:bg-tn-primary hover:text-white bg-white shadow-xs'
          }`}
        >
          <HeartHandshake size={20} className="flex-shrink-0" />
          <span>{generalText}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full ${className}`}>
      <a
        id="btn-schedule-medicare"
        href="#/book-medicare"
        className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base bg-tn-accent text-white hover:bg-red-800 shadow-md transition-all text-center w-full sm:w-auto"
      >
        <Shield size={19} className="flex-shrink-0" />
        <span>{medicareText}</span>
      </a>

      <a
        id="btn-book-general"
        href="#/book-general"
        className={`inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-lg font-semibold text-sm sm:text-base text-center w-full sm:w-auto transition-all border ${
          isDark
            ? 'border-white text-white hover:bg-white hover:text-tn-primary'
            : 'border-tn-primary text-tn-primary hover:bg-tn-primary hover:text-white bg-white shadow-xs'
        }`}
      >
        <HeartHandshake size={19} className="flex-shrink-0" />
        <span>{generalText}</span>
      </a>
    </div>
  );
};

export default DualBookingButtons;
