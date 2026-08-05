import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const ReservationModal = ({ isOpen, onClose, selectedRoom }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '2026-08-10',
    checkOut: '2026-08-15',
    guests: '2 Adults, 1 Child',
    roomType: selectedRoom ? selectedRoom.title : 'Deluxe King Room',
    fullName: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: 'rgba(22, 20, 19, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '540px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
        position: 'relative',
        animation: 'fadeIn 0.3s ease',
        boxSizing: 'border-box'
      }} className="res-modal-card">
        
        {/* Header */}
        <div style={{
          backgroundColor: '#161413',
          color: '#FFFFFF',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #C59D5F'
        }}>
          <div>
            <span className="tag-sub" style={{ marginBottom: '4px', fontSize: '10px' }}>RESERVATION</span>
            <h3 className="font-serif" style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '500', color: '#FFFFFF' }}>
              Book Your Luxury Stay
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              opacity: 0.8,
              padding: '4px'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 20px', boxSizing: 'border-box' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ color: '#16A34A', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <CheckCircle2 size={52} />
              </div>
              <h4 className="font-serif" style={{ fontSize: '24px', color: '#1F1D1B', marginBottom: '10px' }}>
                Reservation Confirmed!
              </h4>
              <p style={{ fontSize: '13.5px', color: '#6C6862', lineHeight: '1.6', marginBottom: '24px' }}>
                Thank you for choosing <strong>Hotel Tree Fern</strong>. We have sent your booking details to <strong>{formData.email || 'your email'}</strong>.
              </p>
              <button onClick={handleReset} className="btn btn-primary" style={{ backgroundColor: '#C59D5F', width: '100%' }}>
                DONE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
              
              {/* Check-in & Check-out Dates */}
              <div className="res-grid-row" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '14px',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ width: '100%', boxSizing: 'border-box' }}>
                  <label style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', display: 'block', marginBottom: '5px' }}>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #EFECE6',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#FAF9F6'
                    }}
                  />
                </div>

                <div style={{ width: '100%', boxSizing: 'border-box' }}>
                  <label style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', display: 'block', marginBottom: '5px' }}>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #EFECE6',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#FAF9F6'
                    }}
                  />
                </div>
              </div>

              {/* Room Preference */}
              <div style={{ width: '100%', boxSizing: 'border-box' }}>
                <label style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', display: 'block', marginBottom: '5px' }}>
                  Room Preference
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #EFECE6',
                    fontSize: '13px',
                    outline: 'none',
                    backgroundColor: '#FAF9F6',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Deluxe King Room">Deluxe King Room (₹2,499 / Night)</option>
                  <option value="Executive Luxury Suite">Executive Luxury Suite (₹3,899 / Night)</option>
                  <option value="Super Deluxe Family Suite">Super Deluxe Family Suite (₹4,799 / Night)</option>
                </select>
              </div>

              {/* Full Name */}
              <div style={{ width: '100%', boxSizing: 'border-box' }}>
                <label style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', display: 'block', marginBottom: '5px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #EFECE6',
                    fontSize: '13px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: '#FAF9F6'
                  }}
                />
              </div>

              {/* Email & Phone */}
              <div className="res-grid-row" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '14px',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ width: '100%', boxSizing: 'border-box' }}>
                  <label style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', display: 'block', marginBottom: '5px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #EFECE6',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#FAF9F6'
                    }}
                  />
                </div>

                <div style={{ width: '100%', boxSizing: 'border-box' }}>
                  <label style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', display: 'block', marginBottom: '5px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #EFECE6',
                      fontSize: '13px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#FAF9F6'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', color: '#6C6862', margin: '2px 0 6px 0' }}>
                <ShieldCheck size={15} color="#C59D5F" style={{ flexShrink: 0 }} />
                <span>Best rate guarantee & flexible cancellation.</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: '#C59D5F',
                  color: '#FFFFFF',
                  padding: '13px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  letterSpacing: '1.2px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                CONFIRM RESERVATION
              </button>

            </form>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 520px) {
          .res-grid-row {
            grid-template-columns: 1fr !important;
          }
          .res-modal-card {
            max-height: 95vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ReservationModal;
