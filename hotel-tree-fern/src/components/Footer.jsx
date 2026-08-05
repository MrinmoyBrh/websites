import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ onOpenReservation }) => {

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerNav = [
    { label: 'Home', id: 'home' },
    { label: 'About Tree Fern', id: 'about' },
    { label: 'Rooms & Suites', id: 'rooms' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Location & Map', id: 'location' },
    { label: 'Guest Reviews', id: 'reviews' },
    { label: 'Hotel Policies', id: 'policies' },
    { label: 'Contact Us', id: 'contact' }
  ];

  return (
    <footer id="contact" style={{ backgroundColor: '#161413', color: '#FFFFFF', paddingTop: '60px', paddingBottom: '32px', borderTop: '1px solid rgba(197, 157, 95, 0.2)', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Top Newsletter Strip */}
        <div style={{
          backgroundColor: '#1F1C1A',
          border: '1px solid rgba(197, 157, 95, 0.25)',
          padding: '28px 20px',
          marginBottom: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          alignItems: 'center',
          gap: '20px',
          boxSizing: 'border-box',
          width: '100%',
          overflow: 'hidden'
        }} className="newsletter-container">
          
          <div style={{ gridColumn: 'span 7', width: '100%', boxSizing: 'border-box' }} className="newsletter-text">
            <span className="tag-sub" style={{ color: '#C59D5F', marginBottom: '8px' }}>NEWSLETTER</span>
            <h3 className="font-serif" style={{
              fontSize: 'clamp(18px, 3.5vw, 26px)',
              fontWeight: '500',
              color: '#FFFFFF',
              lineHeight: '1.3',
              wordBreak: 'break-word'
            }}>
              Subscribe for special offers & exclusive updates
            </h3>
          </div>

          <div style={{ gridColumn: 'span 5', width: '100%', boxSizing: 'border-box' }} className="newsletter-input">
            <div style={{
              display: 'flex',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '12px 14px',
                  color: '#FFFFFF',
                  fontSize: '12.5px',
                  flex: 1,
                  minWidth: 0,
                  outline: 'none',
                  width: '100%'
                }}
              />
              <button
                className="btn btn-primary"
                aria-label="Subscribe to newsletter"
                style={{
                  backgroundColor: '#C59D5F',
                  padding: '12px 16px',
                  borderRadius: 0,
                  flexShrink: 0
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '36px',
          marginBottom: '50px',
          width: '100%'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{
                width: '26px',
                height: '26px',
                border: '1px solid #C59D5F',
                transform: 'rotate(45deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ width: '10px', height: '10px', border: '1px solid #C59D5F' }} />
              </div>
              <span className="font-serif" style={{ fontSize: '19px', letterSpacing: '2px', color: '#FFFFFF' }}>
                HOTEL TREE FERN
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '20px' }}>
              Premier luxury hotel in Dibrugarh, Assam, delivering modern executive comfort, fine dining, and warm Assamese hospitality.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[Instagram, Facebook, Twitter, Linkedin].map((SocialIcon, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C59D5F';
                    e.currentTarget.style.borderColor = '#C59D5F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                >
                  <SocialIcon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '17px', fontWeight: '500', color: '#C59D5F', marginBottom: '18px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerNav.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C59D5F'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '17px', fontWeight: '500', color: '#C59D5F', marginBottom: '18px' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={15} color="#C59D5F" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>AT Road, Near AMC, Dibrugarh, Assam 786001, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={15} color="#C59D5F" style={{ flexShrink: 0 }} />
                <span>+91 94350 31234 / +91 373 232 4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={15} color="#C59D5F" style={{ flexShrink: 0 }} />
                <span>reservations@hoteltreefern.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11.5px',
          color: 'rgba(255,255,255,0.5)'
        }}>
          <span>© 2026 Hotel Tree Fern, Dibrugarh. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-container {
            padding: 20px 16px !important;
          }
          .newsletter-text {
            grid-column: span 12 !important;
          }
          .newsletter-input {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
