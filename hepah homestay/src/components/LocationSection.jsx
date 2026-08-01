import React, { useState } from 'react';
import { MapPin, Plane, Coffee, Navigation, ExternalLink, Copy, Check, Train } from 'lucide-react';

export default function LocationSection({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);

  const addressText = "Prabhati Path, Dibrugarh, Assam 786003";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Hepah Homestay Prabhati Path Dibrugarh Assam 786003")}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Prabhati Path Dibrugarh Assam 786003")}`;

  const handleCopyAddress = () => {
    try {
      navigator.clipboard.writeText(addressText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="location-grid">
          
          {/* Left Info Column */}
          <div className="location-info">
            <div>
              <span className="kicker">PRABHATI PATH • DIBRUGARH</span>
              <h2 className="section-title">
                Located in the Tea City of India
              </h2>
              <p className="section-desc">
                Conveniently situated on Prabhati Path in Dibrugarh, Assam, Hepah Homestay puts you close to pristine 
                tea gardens, cultural heritage, and vibrant dining while keeping you nestled in a quiet, serene neighborhood.
              </p>
            </div>

            <div className="location-details">
              <div className="location-item">
                <div style={{ background: '#F5F4EE', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                  <MapPin size={18} color="#997B49" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#777', fontWeight: 600 }}>Exact Address</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                    <span style={{ fontWeight: 600, color: '#111' }}>{addressText}</span>
                    <button
                      onClick={handleCopyAddress}
                      style={{
                        background: '#F0EFE9',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '6px',
                        padding: '2px 8px',
                        fontSize: '0.725rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#444'
                      }}
                      title="Copy Address"
                    >
                      {copied ? (
                        <>
                          <Check size={12} color="#10B981" />
                          <span style={{ color: '#059669', fontWeight: 600 }}>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="location-item">
                <div style={{ background: '#F5F4EE', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                  <Plane size={18} color="#997B49" />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#777', fontWeight: 600 }}>Airport Access</div>
                  <span style={{ color: '#111' }}><strong>Dibrugarh Airport (DIB):</strong> 14 km (25 mins direct drive)</span>
                </div>
              </div>

              <div className="location-item">
                <div style={{ background: '#F5F4EE', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                  <Train size={18} color="#997B49" />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#777', fontWeight: 600 }}>Railway Station</div>
                  <span style={{ color: '#111' }}><strong>Dibrugarh Station:</strong> 4.5 km (10 mins drive)</span>
                </div>
              </div>

              <div className="location-item">
                <div style={{ background: '#F5F4EE', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                  <Coffee size={18} color="#997B49" />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#777', fontWeight: 600 }}>Surroundings</div>
                  <span style={{ color: '#111' }}>Lush tea estate walks & Brahmaputra riverfront</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '4px' }}>
              <button onClick={onOpenBooking} className="btn-primary">
                BOOK YOUR STAY
              </button>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Navigation size={14} />
                Get Directions
                <ExternalLink size={12} style={{ opacity: 0.7 }} />
              </a>
            </div>
          </div>

          {/* Right Map Visual Column */}
          <div>
            <div className="map-card-wrapper">
              <div className="map-iframe-box">
                {/* Embedded Interactive Google Map centered on Hepah Homestay / Prabhati Path Dibrugarh */}
                <iframe
                  title="Hepah Homestay Dibrugarh Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent("Hepah Homestay, Prabhati Path, Dibrugarh, Assam 786003")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(0.95) brightness(0.98)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Top Badge: Homestay Location Badge with Live Indicator */}
                <div className="map-badge">
                  <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)' }}></span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.8rem', lineHeight: 1.2 }}>Hepah Homestay</span>
                    <span style={{ fontSize: '0.675rem', color: '#059669', fontWeight: 500 }}>Prabhati Path • 10.0 Rated Location</span>
                  </div>
                </div>

                {/* Bottom Right Action Pill Overlay on Map */}
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', zIndex: 10 }}>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#111',
                      color: '#FFF',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.55rem 1rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <MapPin size={14} color="#D97706" />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} style={{ opacity: 0.7 }} />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

