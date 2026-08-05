import React from 'react';
import { MapPin, Plane, Train, Building2, Waves, Compass, Navigation } from 'lucide-react';

const landmarks = [
  {
    icon: Plane,
    name: 'Dibrugarh Airport (DIB)',
    distance: '15.0 km',
    time: '25 min drive',
    desc: 'Direct airport shuttle & taxi transfer available 24/7.'
  },
  {
    icon: Train,
    name: 'Dibrugarh Railway Station',
    distance: '3.5 km',
    time: '10 min drive',
    desc: 'Convenient access to major train lines across North East.'
  },
  {
    icon: Building2,
    name: 'Assam Medical College',
    distance: '2.2 km',
    time: '6 min drive',
    desc: 'Premier medical institution & healthcare hub.'
  },
  {
    icon: Waves,
    name: 'Brahmaputra Riverfront',
    distance: '4.0 km',
    time: '12 min drive',
    desc: 'Serene sunset vistas and evening promenade.'
  },
  {
    icon: Compass,
    name: 'Jalan Tea Estate',
    distance: '5.5 km',
    time: '15 min drive',
    desc: 'Lush green tea plantations and garden tours.'
  }
];

const LocationSection = () => {
  return (
    <section id="location" style={{ backgroundColor: '#FFFFFF', padding: '70px 0', borderTop: '1px solid #EFECE6', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="tag-sub">LOCATION & ACCESSIBILITY</span>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(26px, 4vw, 46px)',
            fontWeight: '500',
            color: '#1F1D1B',
            marginBottom: '10px'
          }}>
            Explore Dibrugarh, Assam
          </h2>
          <p style={{ fontSize: '13.5px', color: '#6C6862', maxWidth: '560px', margin: '0 auto' }}>
            Ideally positioned on AT Road in Dibrugarh, offering smooth connectivity to transport hubs, medical centers, and scenic attractions.
          </p>
        </div>

        {/* Split Grid: Location Card / Map (Left) + Landmarks List (Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          
          {/* Left Column: Address Card & Visual Map Frame */}
          <div style={{
            gridColumn: 'span 5',
            backgroundColor: '#161413',
            color: '#FFFFFF',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }} className="location-card-col">
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(197, 157, 95, 0.2)',
                border: '1px solid #C59D5F',
                color: '#C59D5F',
                padding: '5px 12px',
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                marginBottom: '20px'
              }}>
                <MapPin size={13} /> HOTEL ADDRESS
              </div>

              <h3 className="font-serif" style={{
                fontSize: 'clamp(22px, 3.5vw, 28px)',
                color: '#FFFFFF',
                fontWeight: '500',
                marginBottom: '14px',
                wordBreak: 'break-word',
                lineHeight: '1.25'
              }}>
                Hotel Tree Fern, Dibrugarh
              </h3>

              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.65', marginBottom: '24px' }}>
                AT Road, Near Assam Medical College (AMC), Dibrugarh, Assam 786001, India
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Navigation size={15} color="#C59D5F" style={{ flexShrink: 0 }} />
                  <span style={{ lineHeight: '1.4' }}>Main Highway Corridor • Easy Parking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Plane size={15} color="#C59D5F" style={{ flexShrink: 0 }} />
                  <span style={{ lineHeight: '1.4' }}>24/7 Airport Shuttle Pickup Available</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '28px', position: 'relative', zIndex: 2 }}>
              <a
                href="https://maps.google.com/?q=Hotel+Tree+Fern+Dibrugarh+Assam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  backgroundColor: '#C59D5F',
                  color: '#FFFFFF',
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '11px',
                  letterSpacing: '1.2px',
                  boxSizing: 'border-box'
                }}
              >
                OPEN IN GOOGLE MAPS ➔
              </a>
            </div>

            {/* Subtle background decorative map grid */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(197, 157, 95, 0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Right Column: Landmarks & Distance List */}
          <div style={{ gridColumn: 'span 7', boxSizing: 'border-box' }} className="landmarks-col">
            <h4 className="font-serif" style={{ fontSize: '20px', fontWeight: '500', color: '#1F1D1B', marginBottom: '20px' }}>
              Nearby Landmarks & Distances
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {landmarks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #EFECE6',
                      padding: '16px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      boxSizing: 'border-box',
                      minWidth: 0
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid rgba(197, 157, 95, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C59D5F',
                        flexShrink: 0
                      }}>
                        <IconComp size={18} strokeWidth={1.5} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h5 style={{ fontSize: '13.5px', fontWeight: '600', color: '#1F1D1B', marginBottom: '2px', wordBreak: 'break-word' }}>
                          {item.name}
                        </h5>
                        <p style={{ fontSize: '11.5px', color: '#6C6862', lineHeight: '1.4' }}>{item.desc}</p>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#1F1D1B', display: 'block', whiteSpace: 'nowrap' }}>
                        {item.distance}
                      </span>
                      <span style={{ fontSize: '10.5px', color: '#C59D5F', fontWeight: '600', whiteSpace: 'nowrap' }}>
                        {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .location-card-col { grid-column: span 12 !important; padding: 24px 18px !important; }
          .landmarks-col { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
};

export default LocationSection;
