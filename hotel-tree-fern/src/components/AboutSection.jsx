import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = ({ onReadMoreClick }) => {
  return (
    <section id="about" style={{ backgroundColor: '#FAF9F6', padding: '60px 0', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Main Grid: Dual Images (Left) + Text Content (Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          
          {/* Left Side: Staggered Dual Images */}
          <div style={{ gridColumn: 'span 6', position: 'relative', width: '100%', minHeight: '320px' }} className="about-img-col">
            
            {/* Image 1: Taller Vertical Image on Left */}
            <div className="about-img-1" style={{
              width: '55%',
              height: '300px',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
              position: 'relative',
              zIndex: 2
            }}>
              <img 
                src="/images/hotel/hotel_photo_5.jpg" 
                alt="Hotel Tree Fern Dibrugarh Interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Image 2: Staggered Horizontal Image on Right */}
            <div className="about-img-2" style={{
              width: '55%',
              height: '260px',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
              position: 'absolute',
              right: '0',
              top: '40px',
              zIndex: 3
            }}>
              <img 
                src="/images/hotel/hotel_photo_3.jpg" 
                alt="Hotel Tree Fern Luxury Suite"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>

          {/* Right Side: Text Content */}
          <div style={{ gridColumn: 'span 6', width: '100%' }} className="about-text-col">
            
            <span className="tag-sub">WELCOME TO HOTEL TREE FERN</span>

            <h2 className="font-serif" style={{
              fontSize: 'clamp(24px, 3.5vw, 42px)',
              fontWeight: '500',
              color: '#1F1D1B',
              lineHeight: '1.25',
              marginBottom: '18px',
              wordBreak: 'break-word'
            }}>
              Luxury hotel in the heart of Dibrugarh, Assam.
            </h2>

            <p style={{
              fontSize: '13.5px',
              color: '#6C6862',
              lineHeight: '1.75',
              marginBottom: '24px',
              maxWidth: '520px'
            }}>
              Hotel Tree Fern in Dibrugarh offers modern, well-appointed executive rooms and luxury suites. Enjoy top-notch facilities, in-house gourmet restaurant, 24-hour room service, and convenient proximity to transport hubs. Our friendly staff ensures a seamless, personalized experience with authentic Assam hospitality.
            </p>

            <button
              onClick={onReadMoreClick}
              className="btn btn-primary"
              style={{
                backgroundColor: '#C59D5F',
                color: '#FFFFFF',
                padding: '12px 26px',
                fontSize: '11px',
                letterSpacing: '1.5px',
                borderRadius: '0px'
              }}
            >
              <span>READ MORE</span>
              <ArrowRight size={14} />
            </button>

          </div>

        </div>

        {/* Rating Badges Row (3 Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          paddingTop: '10px',
          width: '100%'
        }}>
          
          {/* Badge 1: Agoda */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFECE6',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
            minWidth: 0
          }}>
            <div style={{
              backgroundColor: '#58449B',
              color: '#FFFFFF',
              fontWeight: '700',
              fontSize: '18px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              flexShrink: 0
            }}>
              a.
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontWeight: '700', fontSize: '14px', color: '#1F1D1B' }}>8.9/10</span>
                <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: '600' }}>Superb</span>
              </div>
              <span style={{ fontSize: '11px', color: '#6C6862', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Verified Reviews on Agoda
              </span>
            </div>
          </div>

          {/* Badge 2: Booking.com */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFECE6',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
            minWidth: 0
          }}>
            <div style={{
              backgroundColor: '#003580',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '18px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontFamily: 'sans-serif',
              flexShrink: 0
            }}>
              B.
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontWeight: '700', fontSize: '14px', color: '#1F1D1B' }}>8.8/10</span>
                <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: '600' }}>Excellent</span>
              </div>
              <span style={{ fontSize: '11px', color: '#6C6862', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Top Rated on Booking
              </span>
            </div>
          </div>

          {/* Badge 3: Tripadvisor */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFECE6',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
            minWidth: 0
          }}>
            <div style={{
              backgroundColor: '#00AF87',
              color: '#FFFFFF',
              fontWeight: '700',
              fontSize: '16px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              flexShrink: 0
            }}>
              🦉
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontWeight: '700', fontSize: '14px', color: '#1F1D1B' }}>4.8/5</span>
                <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: '600' }}>Exceptional</span>
              </div>
              <span style={{ fontSize: '11px', color: '#6C6862', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Guest Choice Award
              </span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-img-col {
            grid-column: span 12 !important;
            margin-bottom: 20px;
            min-height: 240px !important;
          }
          .about-text-col {
            grid-column: span 12 !important;
            padding-left: 0 !important;
          }
          .about-img-1 {
            width: 50% !important;
            height: 220px !important;
          }
          .about-img-2 {
            width: 55% !important;
            height: 200px !important;
            top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
