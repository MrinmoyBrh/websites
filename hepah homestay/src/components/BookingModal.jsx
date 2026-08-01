import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle, ShieldCheck, User, Mail, Phone, MessageSquare, Star, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [suite, setSuite] = useState('master');
  const [checkIn, setCheckIn] = useState('2026-08-10');
  const [checkOut, setCheckOut] = useState('2026-08-12');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const suiteRates = {
    master: {
      id: 'master',
      name: 'Hepah Master Homestay Suite',
      specs: '355 sq ft • King Bed • Garden Terrace',
      price: 3499,
      badge: 'Most Popular'
    },
    deluxe: {
      id: 'deluxe',
      name: 'Garden View Deluxe Suite',
      specs: '320 sq ft • Queen Bed • Kitchenette',
      price: 2899,
      badge: 'Serene View'
    },
    family: {
      id: 'family',
      name: 'Heritage Family Suite',
      specs: '450 sq ft • 2 Bedrooms • Balcony',
      price: 4299,
      badge: 'Spacious'
    }
  };

  // Calculate nights between checkIn and checkOut
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2 - d1;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 2;
    }
  };

  const nights = calculateNights();
  const pricePerNight = suiteRates[suite]?.price || 3499;
  const subtotal = pricePerNight * nights;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'HH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep('success');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="close-btn"
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <span className="kicker">RESERVE YOUR SANCTUARY</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-2">
                Book Hepah Homestay
              </h2>
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-600 font-medium">
                <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60 font-semibold">
                  <Star size={12} fill="#D97706" stroke="none" /> 10.0 Rating
                </span>
                <span>• Prabhati Path, Dibrugarh, Assam</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Suite Selection Cards */}
              <div>
                <label className="form-field-label mb-2">
                  1. Select Your Suite Experience
                </label>
                <div className="suite-cards-grid">
                  {Object.values(suiteRates).map((s) => {
                    const isSelected = suite === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSuite(s.id)}
                        className={`suite-card-radio ${isSelected ? 'active' : ''}`}
                      >
                        {isSelected && (
                          <div className="suite-check-icon">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                        <div>
                          <span className="suite-badge">{s.badge}</span>
                          <h4 className="suite-title">{s.name}</h4>
                          <p className="suite-meta">{s.specs}</p>
                        </div>
                        <div className="suite-price-tag">
                          ₹{s.price.toLocaleString('en-IN')} <span className="text-xs font-normal text-neutral-500">/ night</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="form-field-group">
                  <label className="form-field-label">Check-in Date</label>
                  <div className="custom-input-wrap">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="custom-input custom-input-no-icon"
                      required
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Check-out Date</label>
                  <div className="custom-input-wrap">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="custom-input custom-input-no-icon"
                      required
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Guests</label>
                  <div className="custom-input-wrap">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="custom-input custom-select"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Personal Information */}
              <div className="space-y-4">
                <label className="form-field-label">2. Guest Details</label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-field-group">
                    <div className="custom-input-wrap">
                      <User size={16} className="custom-input-icon" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="custom-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <div className="custom-input-wrap">
                      <Mail size={16} className="custom-input-icon" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="custom-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-field-group">
                    <div className="custom-input-wrap">
                      <Phone size={16} className="custom-input-icon" />
                      <input
                        type="tel"
                        placeholder="Phone Number (+91...)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="custom-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <div className="custom-input-wrap">
                      <MessageSquare size={16} className="custom-input-icon" />
                      <input
                        type="text"
                        placeholder="Special Requests / Airport Transfer"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="custom-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Price Summary Card */}
              <div className="price-summary-luxury">
                <div className="price-row">
                  <span>{suiteRates[suite]?.name} ({nights} {nights === 1 ? 'night' : 'nights'})</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="price-row">
                  <span>Taxes & Service Fees (12%)</span>
                  <span>₹{taxes.toLocaleString('en-IN')}</span>
                </div>
                <div className="price-divider"></div>
                <div className="price-total">
                  <span className="text-sm">Total Payable</span>
                  <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Security & Guarantee Tagline */}
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-800 bg-emerald-50/80 border border-emerald-200/60 p-3 rounded-xl">
                <ShieldCheck size={16} className="shrink-0 text-emerald-700" />
                <span>Instant Confirmation • Pay at Property option available • Free cancellation</span>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="btn-primary w-full py-4 text-center justify-center text-sm font-bold tracking-widest"
              >
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Pass Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle size={36} />
            </div>

            <div>
              <span className="kicker">RESERVATION CONFIRMED</span>
              <h2 className="text-3xl font-serif text-neutral-900 mt-1">
                We Look Forward to Welcoming You!
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Booking Reference: <span className="font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-1 rounded">{bookingRef}</span>
              </p>
            </div>

            <div className="booking-pass-card text-left space-y-1">
              <div className="booking-pass-row">
                <span className="text-neutral-500">Guest Name</span>
                <span className="font-semibold text-neutral-900">{name || 'Guest'}</span>
              </div>
              <div className="booking-pass-row">
                <span className="text-neutral-500">Suite</span>
                <span className="font-semibold text-neutral-900">{suiteRates[suite]?.name}</span>
              </div>
              <div className="booking-pass-row">
                <span className="text-neutral-500">Dates ({nights} nights)</span>
                <span className="font-semibold text-neutral-900">{checkIn} to {checkOut}</span>
              </div>
              <div className="booking-pass-row">
                <span className="text-neutral-500">Guests</span>
                <span className="font-semibold text-neutral-900">{guests} Adults</span>
              </div>
              <div className="booking-pass-row">
                <span className="text-neutral-500 font-bold">Total Amount</span>
                <span className="font-serif font-bold text-lg text-amber-700">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 italic max-w-md mx-auto">
              A confirmation voucher with airport transfer details has been dispatched to {email || 'your email'}.
            </p>

            <button
              onClick={() => {
                setStep('form');
                onClose();
              }}
              className="btn-primary"
            >
              DONE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
