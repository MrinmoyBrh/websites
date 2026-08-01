import React from 'react';
import { 
  Wifi, 
  Globe, 
  ShieldCheck, 
  Wind, 
  Users, 
  Heart, 
  Car, 
  Languages, 
  Sparkles,
  Clock,
  Key
} from 'lucide-react';

export default function AmenitiesSection({ onOpenPolicies }) {
  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        
        {/* Main Amenities Card Container */}
        <div className="amenities-card-wrapper">
          
          {/* Header Row */}
          <div className="amenities-header-row">
            <div>
              <span className="kicker">SANCTUARY COMFORT & SERVICES</span>
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: 0 }}>
                Amenities and facilities
              </h2>
            </div>
            
            {/* Exceptional Rating Badge */}
            <div className="amenities-rating-pill">
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.875rem', display: 'block' }}>
                  Exceptional 10.0
                </span>
                <span style={{ color: '#3B82F6', fontSize: '0.7rem', fontWeight: 500 }}>Facilities Rating</span>
              </div>
              <div style={{ width: '32px', height: '32px', background: '#2563EB', color: '#FFF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>
                10
              </div>
            </div>
          </div>

          {/* Grid Layout (4 columns) */}
          <div className="amenities-grid-4">
            
            {/* Column 1: Languages Spoken */}
            <div>
              <h3 className="amenities-cat-title">
                <Languages size={16} color="#C5A059" />
                Languages spoken
              </h3>
              <div className="amenities-list">
                <div className="amenities-list-item">
                  <span style={{ fontSize: '1rem' }}>🇬🇧</span>
                  <span>English</span>
                </div>
                <div className="amenities-list-item">
                  <span style={{ fontSize: '1rem' }}>🇮🇳</span>
                  <span>Hindi</span>
                </div>
              </div>
            </div>

            {/* Column 2: Internet access */}
            <div>
              <h3 className="amenities-cat-title">
                <Wifi size={16} color="#C5A059" />
                Internet access
              </h3>
              <div className="amenities-list">
                <div className="amenities-list-item">
                  <Wifi size={16} color="#666" />
                  <span>Free Wi-Fi in all rooms!</span>
                </div>
                <div className="amenities-list-item">
                  <Globe size={16} color="#666" />
                  <span>Internet</span>
                </div>
                <div className="amenities-list-item">
                  <ShieldCheck size={16} color="#666" />
                  <span>Internet services</span>
                </div>
                <div className="amenities-list-item">
                  <Wifi size={16} color="#666" />
                  <span>Wi-Fi in public areas</span>
                </div>
              </div>
            </div>

            {/* Column 3: Services & Cleanliness */}
            <div>
              <h3 className="amenities-cat-title">
                <Wind size={16} color="#C5A059" />
                Services and conveniences
              </h3>
              <div className="amenities-list" style={{ marginBottom: '1.5rem' }}>
                <div className="amenities-list-item">
                  <ShieldCheck size={16} color="#666" />
                  <span>Air conditioning in public area</span>
                </div>
                <div className="amenities-list-item">
                  <span style={{ width: '16px', textAlign: 'center' }}>🚬</span>
                  <span>Smoking area</span>
                </div>
              </div>

              <h3 className="amenities-cat-title">
                <ShieldCheck size={16} color="#C5A059" />
                Cleanliness and safety
              </h3>
              <div className="amenities-list">
                <div className="amenities-list-item">
                  <ShieldCheck size={16} color="#666" />
                  <span>Staff trained in safety protocol</span>
                </div>
              </div>
            </div>

            {/* Column 4: Kids, Access, Getting around */}
            <div>
              <h3 className="amenities-cat-title">
                <Users size={16} color="#C5A059" />
                For the kids
              </h3>
              <div className="amenities-list" style={{ marginBottom: '1.25rem' }}>
                <div className="amenities-list-item">
                  <Users size={16} color="#666" />
                  <span>Family/child friendly</span>
                </div>
                <div className="amenities-list-item">
                  <Heart size={16} color="#666" />
                  <span>Family room</span>
                </div>
              </div>

              <h3 className="amenities-cat-title">
                <Sparkles size={16} color="#C5A059" />
                Access
              </h3>
              <div className="amenities-list" style={{ marginBottom: '1.25rem' }}>
                <div className="amenities-list-item">
                  <span>🐾</span>
                  <span>Pets allowed</span>
                </div>
              </div>

              <h3 className="amenities-cat-title">
                <Car size={16} color="#C5A059" />
                Getting around
              </h3>
              <div className="amenities-list">
                <div className="amenities-list-item">
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>
                    P
                  </div>
                  <span>Car park <strong style={{ color: '#059669' }}>[free of charge]</strong></span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Embedded Policies Card */}
        <div id="policies" className="policies-card-wrapper">
          
          <div className="amenities-header-row">
            <div>
              <span className="kicker">PROPERTY GUIDELINES</span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: 0 }}>
                Policies
              </h2>
            </div>
            {onOpenPolicies && (
              <button 
                onClick={onOpenPolicies}
                className="btn-secondary"
              >
                VIEW FULL DETAILS
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            {/* Others */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>
                Others
              </h3>
              <ul style={{ paddingLeft: '1.25rem', margin: '0 0 0.5rem 0', color: '#444', fontSize: '0.875rem' }}>
                <li style={{ marginBottom: '0.25rem' }}>
                  When booking more than 5 rooms, different policies and additional supplements may apply.
                </li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
                Extra beds, if available, are dependent on the room you choose. Please ask the property for more details.
              </p>
            </div>

            {/* Some helpful facts */}
            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>
                Some helpful facts
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', background: '#FAF9F5', padding: '1.25rem', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                {/* Check-in / Check-out */}
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#777', display: 'block' }}>
                    Check-in/Check-out
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#222' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#F0EFE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={16} color="#C5A059" />
                    </div>
                    <span>Check-in until: <strong>06:00 PM</strong></span>
                  </div>
                </div>

                {/* The property */}
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#777', display: 'block' }}>
                    The property
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#222' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#F0EFE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Key size={16} color="#C5A059" />
                    </div>
                    <span>Number of rooms : <strong>1</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property announcements */}
            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>
                Property announcements
              </h3>
              <p style={{ background: '#FFFBEB', border: '1px solid #FDE68A', padding: '1rem 1.25rem', borderRadius: '16px', color: '#92400E', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                Please note that any changes in tax structure due to government policies will result in revised taxes, which will be applicable to all reservations and will be charged additionally during check out.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
