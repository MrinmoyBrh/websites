import React from 'react';
import { X, Clock, Key, AlertCircle, Info, ShieldCheck, FileText } from 'lucide-react';

export default function PoliciesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-neutral-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="close-btn absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          aria-label="Close policies modal"
        >
          <X size={20} />
        </button>

        {/* Modal Title */}
        <div className="mb-6 pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-1">
            <ShieldCheck size={16} />
            <span>Hepah Homestay Guidelines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
            Policies
          </h2>
        </div>

        <div className="space-y-8 text-neutral-800 text-sm leading-relaxed">
          
          {/* 1. Others */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <Info size={18} className="text-neutral-500" />
              Others
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
              <li>
                When booking more than 5 rooms, different policies and additional supplements may apply.
              </li>
            </ul>
            <p className="text-neutral-600 pl-5">
              Extra beds, if available, are dependent on the room you choose. Please ask the property for more details.
            </p>
          </div>

          {/* 2. Some helpful facts */}
          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <FileText size={18} className="text-neutral-500" />
              Some helpful facts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF9F5] p-4 rounded-2xl border border-neutral-200/60">
              {/* Check-in / Check-out */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                  Check-in/Check-out
                </span>
                <div className="flex items-center gap-2 text-neutral-700 mt-1">
                  <Clock size={16} className="text-neutral-500 shrink-0" />
                  <span>Check-in until: <strong>06:00 PM</strong></span>
                </div>
              </div>

              {/* The property */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                  The property
                </span>
                <div className="flex items-center gap-2 text-neutral-700 mt-1">
                  <Key size={16} className="text-neutral-500 shrink-0" />
                  <span>Number of rooms : <strong>1</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Property announcements */}
          <div className="space-y-3 pt-4 border-t border-neutral-100">
            <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-600" />
              Property announcements
            </h3>
            <p className="text-neutral-600 leading-relaxed bg-amber-50/60 border border-amber-200/50 p-4 rounded-2xl text-xs sm:text-sm">
              Please note that any changes in tax structure due to government policies will result in revised taxes, which will be applicable to all reservations and will be charged additionally during check out.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary"
          >
            UNDERSTOOD & CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
