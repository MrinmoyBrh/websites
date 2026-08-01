import React from 'react';
import { Sparkles, Sun, ArrowRight } from 'lucide-react';

export default function ReturnToYourself({ onOpenGallery }) {
  return (
    <section id="wellness" className="wellness-section">
      <div className="container">
        <div className="wellness-grid">
          
          {/* Left Column: Text & Features */}
          <div>
            <span className="kicker">HOLISTIC WELLNESS</span>
            <h2 className="section-title">
              Return to yourself
            </h2>
            <p className="section-desc">
              Our Dibrugarh sanctuaries offer a variety of programs for residents, 
              travelers, and groups seeking secure and profound restoration.
            </p>

            {/* Program Items */}
            <div className="wellness-feature-list">
              {/* Item 1 */}
              <div className="wellness-item">
                <div style={{ marginTop: '0.2rem', color: '#111', flexShrink: 0 }}>
                  <Sparkles size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4>THERMAL JOURNEYS</h4>
                  <p>
                    Hydrotherapy redefined with modern scientific insights and organic tea leaf infusions.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="wellness-item">
                <div style={{ marginTop: '0.2rem', color: '#111', flexShrink: 0 }}>
                  <Sun size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4>MINDFULNESS PODS</h4>
                  <p>
                    Acoustically isolated chambers for deep meditation, sound baths, and Brahmaputra breezes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Architectural Photo with Floating Card */}
          <div className="wellness-visual">
            <img
              src="/images/hepah-9.jpg"
              alt="Hepah Serene Pool & Bath Sanctuary"
            />

            {/* Floating Bottom Card */}
            <div className="floating-heritage-card">
              <h4>Heritage</h4>
              <p>
                Preserving the cultural threads that bind us to the land.
              </p>
              <button onClick={onOpenGallery} className="btn-link">
                LEARN MORE <ArrowRight size={12} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
