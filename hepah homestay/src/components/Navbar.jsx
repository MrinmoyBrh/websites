import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking, onOpenGallery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          HEPAH
        </a>

        {/* Center Desktop Links */}
        <nav className="nav-links">
          <a href="#philosophy" className="nav-link">SANCTUARIES</a>
          <a
            href="#rooms"
            onClick={(e) => {
              e.preventDefault();
              onOpenGallery();
            }}
            className="nav-link"
          >
            ROOMS & RATES
          </a>
          <a href="#wellness" className="nav-link">WELLNESS</a>
          <a href="#amenities" className="nav-link">AMENITIES</a>
          <a href="#dining" className="nav-link">DINING</a>
          <a href="#reviews" className="nav-link">REVIEWS</a>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onOpenBooking} className="btn-primary">
            BOOK NOW
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>SANCTUARIES</a>
          <a
            href="#rooms"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenGallery();
            }}
          >
            ROOMS & RATES
          </a>
          <a href="#wellness" onClick={() => setMobileMenuOpen(false)}>WELLNESS</a>
          <a href="#amenities" onClick={() => setMobileMenuOpen(false)}>AMENITIES</a>
          <a href="#dining" onClick={() => setMobileMenuOpen(false)}>DINING</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>REVIEWS</a>
        </div>
      )}
    </header>
  );
}
