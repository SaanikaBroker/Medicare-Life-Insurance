import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, Award, ShieldAlert, ArrowRight } from 'lucide-react';

export const MedicareTimelineDiagram: React.FC = () => {
  return (
    <div id="medicare-enrollment-timeline" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          <Calendar size={14} />
          <span>Timing & Critical Deadlines</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-tn-primary">
          Medicare Enrollment Timeline
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Missing key Medicare deadlines can lead to lifelong penalties and coverage delays. Here is exactly when you need to act.
        </p>
      </div>

      {/* 7-Month Initial Enrollment Period Visual Diagram */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
          <div>
            <h4 className="text-lg font-bold text-tn-primary flex items-center gap-2">
              <Clock className="text-tn-accent" size={20} />
              <span>The 7-Month Initial Enrollment Period (IEP)</span>
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Your primary window when turning 65 to sign up for Medicare Part A, Part B, and Part D or Advantage.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold self-start sm:self-auto border border-blue-200">
            Turns 65 Milestone
          </span>
        </div>

        {/* Visual Timeline Stepper Bar */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2.5 my-6">
          {/* Months -3, -2, -1 */}
          <div className="md:col-span-3 bg-blue-50/80 border border-blue-200 rounded-xl p-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[11px] font-bold text-blue-700 uppercase">3 Months Prior</span>
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">1</span>
              </div>
              <p className="text-xs font-bold text-tn-primary">Apply for Part A & B Early</p>
              <p className="text-[11px] text-gray-600 mt-1">
                Coverage starts right on the 1st day of your birth month. Ensures your Medicare card arrives on time.
              </p>
            </div>
            <span className="text-[10px] font-semibold text-emerald-700 mt-2 flex items-center gap-1">
              <CheckCircle2 size={12} /> Best time to enroll
            </span>
          </div>

          {/* Birthday Month */}
          <div className="md:col-span-1 bg-tn-primary text-white rounded-xl p-3 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] font-bold text-blue-200 uppercase">Birth Month</span>
                <span className="w-5 h-5 rounded-full bg-tn-accent text-white text-[10px] font-bold flex items-center justify-center">★</span>
              </div>
              <p className="text-xs font-bold text-white">Your 65th Birthday</p>
              <p className="text-[10px] text-blue-100 mt-1">
                Medicare becomes active on the 1st of this month.
              </p>
            </div>
            <span className="text-[9px] font-bold bg-white/20 text-white px-1.5 py-0.5 rounded text-center mt-2">
              Day 1 Coverage
            </span>
          </div>

          {/* Months +1, +2, +3 */}
          <div className="md:col-span-3 bg-amber-50/80 border border-amber-200 rounded-xl p-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[11px] font-bold text-amber-800 uppercase">3 Months After</span>
                <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center">2</span>
              </div>
              <p className="text-xs font-bold text-tn-primary">Final Chance Before Penalties</p>
              <p className="text-[11px] text-gray-600 mt-1">
                You can still enroll, but coverage may be delayed to the next month and you risk gaps if you wait too long.
              </p>
            </div>
            <span className="text-[10px] font-semibold text-amber-800 mt-2 flex items-center gap-1">
              <AlertCircle size={12} /> Don't miss this cutoff
            </span>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-gray-600 flex items-center gap-2">
          <AlertCircle className="text-tn-accent flex-shrink-0" size={16} />
          <span>
            <strong>Working past 65 with credible employer coverage?</strong> You may safely delay Part B without penalty until you or your spouse retire, using an 8-month Special Enrollment Period (SEP).
          </span>
        </div>
      </div>

      {/* Recurring Annual Windows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* AEP Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                Annual Open Enrollment (AEP)
              </span>
              <span className="text-xs font-bold text-tn-accent">Oct 15 – Dec 7</span>
            </div>
            <h5 className="text-base font-bold text-tn-primary">The Fall Review Period</h5>
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
              Every year, you can join, switch, or drop Medicare Advantage (Part C) or Prescription Drug (Part D) plans. Changes take effect January 1st.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-gray-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                <span>Verify that your medications didn't change tier</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                <span>Confirm your doctors and dentists remain in-network</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Free annual policy checkups available</span>
            <a href="#/book-medicare" className="text-xs font-bold text-tn-accent hover:underline flex items-center gap-1">
              Book Fall Review <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Medigap Guaranteed Issue Window */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                Medigap Open Enrollment
              </span>
              <span className="text-xs font-bold text-purple-700">6-Month Golden Window</span>
            </div>
            <h5 className="text-base font-bold text-tn-primary">Guaranteed Issue Protection</h5>
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
              Starts the first month you are age 65 and enrolled in Part B. Private insurance companies <strong>cannot deny you coverage or charge higher rates</strong> for pre-existing conditions.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-gray-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                <span>No medical underwriting or health history exams</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                <span>Lock in Plan G or Plan N at lowest entry rates</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-500">Once it passes, underwriting applies</span>
            <a href="#/book-medicare" className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1">
              Ask About Medigap <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicareTimelineDiagram;
