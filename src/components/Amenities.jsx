import React, { useState } from 'react';
import { Wifi, Car, Utensils, Sparkles, Dumbbell, Waves, ShieldCheck, Zap, ConciergeBell, Clock, Coffee, Bus } from 'lucide-react';

const categories = ['ALL', 'DINING', 'SERVICES', 'COMFORT & SECURITY', 'TRANSPORT'];

const allAmenities = [
  {
    category: 'SERVICES',
    icon: Wifi,
    title: 'High Speed Fiber Wi-Fi',
    desc: 'Seamless high-speed internet access throughout guest rooms and public areas.'
  },
  {
    category: 'TRANSPORT',
    icon: Car,
    title: 'Secure Car Parking',
    desc: 'Ample, safe, and monitored parking space provided free for all hotel guests.'
  },
  {
    category: 'DINING',
    icon: Utensils,
    title: 'Multi-Cuisine Restaurant',
    desc: 'Savor gourmet Indian, Chinese, Assamese, and Continental delicacies at our in-house restaurant.'
  },
  {
    category: 'DINING',
    icon: Coffee,
    title: 'Breakfast & Coffee Bar',
    desc: 'Complimentary buffet breakfast, artisan teas, and freshly brewed coffees.'
  },
  {
    category: 'SERVICES',
    icon: ConciergeBell,
    title: '24-Hour Room Service',
    desc: 'Round-the-clock in-room dining and guest assistance delivered to your doorstep.'
  },
  {
    category: 'TRANSPORT',
    icon: Bus,
    title: 'Airport Transfer & Taxi',
    desc: 'Reliable shuttle service to Dibrugarh Airport (15 km) and Railway Station.'
  },
  {
    category: 'COMFORT & SECURITY',
    icon: Zap,
    title: '100% Power Backup',
    desc: 'Uninterrupted power supply with heavy-duty diesel generators 24/7.'
  },
  {
    category: 'COMFORT & SECURITY',
    icon: ShieldCheck,
    title: '24/7 CCTV & Security',
    desc: 'Round-the-clock security personnel, electronic locks, and fire safety systems.'
  },
  {
    category: 'SERVICES',
    icon: Clock,
    title: 'Express Check-In & Out',
    desc: 'Hassle-free 24-hour reception desk, luggage storage, and daily housekeeping.'
  }
];

const Amenities = () => {
  const [activeCat, setActiveCat] = useState('ALL');

  const filteredAmenities = activeCat === 'ALL'
    ? allAmenities
    : allAmenities.filter(item => item.category === activeCat);

  return (
    <section id="amenities" style={{ backgroundColor: '#FFFFFF', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="tag-sub">MODERN AND COMFORTABLE</span>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: '500',
            color: '#1F1D1B',
            marginBottom: '12px'
          }}>
            Facilities & Amenities
          </h2>
          <p style={{ fontSize: '14px', color: '#6C6862', maxWidth: '540px', margin: '0 auto' }}>
            Enjoy modern luxury amenities engineered for comfort, business efficiency, and total relaxation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCat(cat)}
              style={{
                backgroundColor: activeCat === cat ? '#C59D5F' : 'transparent',
                color: activeCat === cat ? '#FFFFFF' : '#1F1D1B',
                border: activeCat === cat ? '1px solid #C59D5F' : '1px solid #EFECE6',
                padding: '8px 20px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {filteredAmenities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '24px',
                  borderRadius: '2px',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid #EFECE6',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(197, 157, 95, 0.4)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FAF9F6';
                  e.currentTarget.style.borderColor = '#EFECE6';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon Circle */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF7F2',
                  border: '1px solid rgba(197, 157, 95, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C59D5F',
                  flexShrink: 0
                }}>
                  <IconComponent size={22} strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-serif" style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1F1D1B',
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#6C6862',
                    lineHeight: '1.6'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
