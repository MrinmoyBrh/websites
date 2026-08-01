import React from 'react';

export default function Hero({ onOpenBooking, onOpenGallery }) {
  return (
    <section className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg">
        <img
          src="/images/hepah-3.jpg"
          alt="Hepah Homestay Sanctuary View"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container hero-content">
        <span className="kicker">EXPERIENCE THE UNCOMMON</span>

        <h1 className="hero-title">
          A Sanctuary for the Senses
        </h1>

        <p className="hero-desc">
          Discover a curated collection of retreats in Dibrugarh, Assam where traditional Assamese warmth meets 
          serene tea garden tranquility, and time slows to the rhythm of nature.
        </p>

        <div className="hero-actions">
          <button onClick={onOpenBooking} className="btn-primary">
            EXPLORE EXPERIENCE
          </button>
          <button onClick={onOpenGallery} className="btn-secondary">
            VIEW SUITES & RATES
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', opacity: 0.5, fontSize: '0.7rem', letterSpacing: '0.2em' }}>
        SCROLL DOWN ↓
      </div>
    </section>
  );
}
