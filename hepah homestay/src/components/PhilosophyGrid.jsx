import React from 'react';
import { Shield, Compass, ArrowRight } from 'lucide-react';

export default function PhilosophyGrid({ onOpenGallery, onOpenBooking, onOpenDining }) {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        {/* Section Header with split title & text */}
        <div className="section-header-split">
          <div>
            <h2 className="section-title">
              What is Hepah?
            </h2>
            <p className="section-desc">
              "Hepah" in Assamese represents a deep feeling of warmth, affection, and longing for something cherished. 
              We curate private homestay spaces in Dibrugarh that honor the local environment while providing an 
              unparalleled sanctuary for quiet personal renewal.
            </p>
          </div>

          <div>
            <button onClick={onOpenGallery} className="btn-link">
              EXPLORE PHILOSOPHY <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid-2x2">
          {/* Card 1: Serene Accommodations (Wide Image Card - 7 cols) */}
          <div className="col-7 card-image-wide">
            <img
              src="/images/hepah-1.jpg"
              alt="Serene Homestay Bedroom"
            />
            <div className="card-image-overlay"></div>
            
            <div className="card-content-relative">
              <h3>Serene Accommodations</h3>
              <p>
                Private 355 sq ft suite with master bedroom, private full kitchen, balcony, and garden light.
              </p>
              <button onClick={onOpenGallery} className="btn-link text-white">
                VIEW SUITE <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Card 2: Always Private, Always Personal (Dark Obsidian Card - 5 cols) */}
          <div className="col-5 card-dark-obsidian">
            <div>
              <h3>
                Always private,<br />always personal
              </h3>
              <p>
                Every stay is tailored to your biometric circadian rhythms and personal preferences.
              </p>
            </div>

            <div>
              <div className="icon-badge-outline">
                <Shield size={20} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Card 3: 100% Immersive (Light Linen Card - 5 cols) */}
          <div className="col-5 card-light-linen">
            <div>
              <h3>100% Immersive</h3>
              <p>
                No tech noise. Interfaces in sight. We believe in presence, not notifications.
              </p>
            </div>

            <div>
              <div className="icon-badge-outline-dark">
                <Compass size={20} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Card 4: Fine Dining (Medium Image Card - 7 cols) */}
          <div className="col-7 card-image-wide">
            <img
              src="/images/hepah-4.jpg"
              alt="Fine Dining Experience"
            />
            <div className="card-image-overlay"></div>

            <div className="card-content-relative">
              <h3>Fine Dining</h3>
              <p>
                Farm-to-table culinary experiences curated by master chefs with organic local ingredients.
              </p>
              <button onClick={onOpenDining} className="btn-link text-white">
                VIEW MENU <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
