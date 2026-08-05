import React from 'react';
import { X, Award, MapPin, Sparkles, Coffee, HeartHandshake, ShieldCheck } from 'lucide-react';

const AboutModal = ({ isOpen, onClose, onExploreRooms }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 220,
      backgroundColor: 'rgba(22, 20, 19, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '820px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }}>
        
        {/* Header Image Overlay */}
        <div style={{ position: 'relative', height: '280px', backgroundColor: '#161413' }}>
          <img 
            src="/images/hotel/hotel_photo_3.jpg" 
            alt="Hotel Tree Fern Dibrugarh Exterior"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(to top, rgba(22,20,19,0.9), transparent)'
          }} />
          
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(22, 20, 19, 0.7)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          <div style={{ position: 'absolute', bottom: '24px', left: '32px', right: '32px', color: '#FFFFFF' }}>
            <span className="tag-sub" style={{ color: '#C59D5F', marginBottom: '6px' }}>ABOUT OUR PROPERTY</span>
            <h3 className="font-serif" style={{ fontSize: '32px', fontWeight: '500', color: '#FFFFFF', lineHeight: '1.2' }}>
              The Story of Hotel Tree Fern
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '36px' }}>
          
          <p style={{ fontSize: '15px', color: '#1F1D1B', lineHeight: '1.8', marginBottom: '24px', fontWeight: '500' }}>
            Opened in 2020 and thoughtfully upgraded in 2022, <strong>Hotel Tree Fern</strong> stands as a beacon of modern luxury, executive comfort, and authentic Assamese hospitality in Dibrugarh.
          </p>

          <p style={{ fontSize: '14px', color: '#6C6862', lineHeight: '1.8', marginBottom: '32px' }}>
            Situated on AT Road near Assam Medical College (AMC), our hotel was designed to cater to corporate executives, families, medical travelers, and tourists exploring the gateway to Upper Assam. With over 50 well-appointed rooms and suites, an in-house multi-cuisine gourmet restaurant, 24-hour concierge service, and high-speed fiber Wi-Fi, every stay is tailored for comfort and convenience.
          </p>

          {/* Key Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}>
            
            <div style={{ backgroundColor: '#FAF9F6', border: '1px solid #EFECE6', padding: '20px', display: 'flex', gap: '14px' }}>
              <Award size={22} color="#C59D5F" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1F1D1B', marginBottom: '4px' }}>3-Star Executive Luxury</h4>
                <p style={{ fontSize: '12px', color: '#6C6862', lineHeight: '1.5' }}>Rated 8.9/10 on Agoda & 8.8/10 on Booking.com</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF9F6', border: '1px solid #EFECE6', padding: '20px', display: 'flex', gap: '14px' }}>
              <MapPin size={22} color="#C59D5F" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1F1D1B', marginBottom: '4px' }}>Prime Corridor Location</h4>
                <p style={{ fontSize: '12px', color: '#6C6862', lineHeight: '1.5' }}>15 km from Dibrugarh Airport & 3.5 km from Railway Station</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#FAF9F6', border: '1px solid #EFECE6', padding: '20px', display: 'flex', gap: '14px' }}>
              <HeartHandshake size={22} color="#C59D5F" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1F1D1B', marginBottom: '4px' }}>Warm Assam Hospitality</h4>
                <p style={{ fontSize: '12px', color: '#6C6862', lineHeight: '1.5' }}>Polite 24/7 staff, quick room service & airport shuttle</p>
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={() => {
                onClose();
                onExploreRooms();
              }}
              className="btn btn-primary"
              style={{
                backgroundColor: '#C59D5F',
                color: '#FFFFFF',
                flex: 1,
                padding: '14px',
                fontSize: '12px'
              }}
            >
              EXPLORE ROOMS & SUITES
            </button>
            <button
              onClick={onClose}
              className="btn btn-outline"
              style={{
                borderColor: '#1F1D1B',
                padding: '14px 28px',
                fontSize: '12px'
              }}
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutModal;
