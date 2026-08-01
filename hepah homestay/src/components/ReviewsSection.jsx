import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const scores = [
    { label: 'Cleanliness', score: '10.0' },
    { label: 'Room Comfort', score: '10.0' },
    { label: 'Location', score: '10.0' },
    { label: 'Service', score: '10.0' },
    { label: 'Value for Money', score: '10.0' },
  ];

  const testimonials = [
    {
      quote: "Hepah Homestay is an absolute gem in Dibrugarh! The rooms were sparkling clean, spacious (355 sq ft), and fully equipped with a kitchen and balcony. The warmth of Assamese hospitality here made our stay unforgettable.",
      author: "Priya M.",
      location: "Guwahati, India",
      rating: 5,
      date: "Verified Guest • Agoda"
    },
    {
      quote: "Top-tier comfort, peaceful vibes, and extreme cleanliness. It truly feels like home away from home. Being close to the airport and tea gardens makes it the perfect base.",
      author: "Rahul S.",
      location: "Kolkata, India",
      rating: 5,
      date: "Verified Guest • Booking.com"
    },
    {
      quote: "Everything from the tea setup to the pristine bathroom was 10/10. The hosts went above and beyond for our comfort. Highly recommended for couples and families!",
      author: "Ananya D.",
      location: "New Delhi, India",
      rating: 5,
      date: "Verified Guest • Agoda"
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
          <span className="kicker">UNANIMOUS EXCELLENCE</span>
          <h2 className="section-title">
            Guest Satisfaction
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#D4AF37', marginBottom: '0.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" stroke="none" />
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', fontWeight: 300 }}>
            Rated <strong style={{ color: '#111' }}>10.0 / 10</strong> by guests across all major review platforms
          </p>
        </div>

        {/* Score Breakdown Bar */}
        <div className="scores-bar">
          <div className="scores-grid">
            {scores.map((item) => (
              <div key={item.label}>
                <div className="score-num">
                  {item.score}
                </div>
                <div className="score-label">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div style={{ display: 'flex', gap: '2px', color: '#D4AF37', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p>"{t.quote}"</p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-sub">{t.location}</div>
                </div>
                <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#AAA' }}>
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
