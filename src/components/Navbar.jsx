import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT TREE FERN', id: 'about' },
    { label: 'ROOMS & SUITES', id: 'rooms' },
    { label: 'AMENITIES', id: 'amenities' },
    { label: 'LOCATION', id: 'location' },
    { label: 'REVIEWS', id: 'reviews' },
    { label: 'POLICIES', id: 'policies' },
    { label: 'CONTACT', id: 'contact' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
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

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(22, 20, 19, 0.96)' : 'rgba(22, 20, 19, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(197, 157, 95, 0.25)',
        padding: scrolled ? '10px 0' : '14px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#FFFFFF', minWidth: 0, overflow: 'hidden' }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            border: '1.5px solid #C59D5F',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              border: '1px solid #C59D5F',
              backgroundColor: 'rgba(197, 157, 95, 0.2)'
            }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
            <span className="font-serif brand-title" style={{
              fontSize: '17px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              color: '#FFFFFF',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              HOTEL TREE FERN
            </span>
            <span className="brand-subtitle" style={{
              fontSize: '7.5px',
              letterSpacing: '1.5px',
              color: '#C59D5F',
              textTransform: 'uppercase',
              marginTop: '2px',
              whiteSpace: 'nowrap'
            }}>
              DIBRUGARH • LUXURY HOTEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '18px' }} className="desktop-nav">
          {navLinks.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={idx}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  color: isActive ? '#C59D5F' : '#FFFFFF',
                  fontSize: '10.5px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  paddingBottom: '4px',
                  borderBottom: isActive ? '1.5px solid #C59D5F' : '1.5px solid transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Reservation CTA Button & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <button 
            onClick={onOpenReservation}
            className="btn btn-primary nav-res-btn"
            style={{
              backgroundColor: '#C59D5F',
              color: '#FFFFFF',
              padding: '7px 12px',
              fontSize: '10.5px',
              fontWeight: '600',
              letterSpacing: '0.8px',
              gap: '5px',
              whiteSpace: 'nowrap'
            }}
          >
            <Calendar size={13} />
            <span className="res-btn-text">RESERVATION</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'none',
              padding: '4px',
              marginLeft: '2px'
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '52px',
          left: 0,
          right: 0,
          backgroundColor: '#161413',
          borderBottom: '1px solid rgba(197, 157, 95, 0.3)',
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 99,
          maxHeight: 'calc(100vh - 52px)',
          overflowY: 'auto'
        }}>
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} color="#C59D5F" />
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 520px) {
          .brand-title {
            font-size: 13.5px !important;
            letter-spacing: 0.8px !important;
          }
          .brand-subtitle {
            display: none !important;
          }
          .nav-res-btn {
            padding: 6px 8px !important;
            font-size: 9.5px !important;
          }
          .res-btn-text {
            font-size: 9px !important;
          }
        }
        @media (max-width: 375px) {
          .res-btn-text {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
