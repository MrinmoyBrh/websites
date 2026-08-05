import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviewsData = [
  {
    name: 'Bikash N.',
    location: 'Assam, India',
    rating: 9.2,
    date: 'July 2026',
    room: 'Executive Luxury Suite',
    title: 'Prompt service and comfortable king bed!',
    comment: 'Very clean rooms, comfortable king size bed, and prompt room service. The staff was super polite and helped us arrange an early morning airport shuttle to Dibrugarh Airport with ease.'
  },
  {
    name: 'Ankita S.',
    location: 'Kolkata, India',
    rating: 9.6,
    date: 'June 2026',
    room: 'Deluxe King Room',
    title: 'Top tier hospitality in Dibrugarh',
    comment: 'The food at their in-house restaurant was delicious and authentic Assamese cuisine. Rooms are modern with top-class AC, high speed Wi-Fi, and sparkling clean bathrooms.'
  },
  {
    name: 'Pranjal B.',
    location: 'Guwahati, India',
    rating: 8.8,
    date: 'May 2026',
    room: 'Executive Luxury Suite',
    title: 'Great location and work-friendly environment',
    comment: 'Great location right on the main corridor, easy access to local markets and Dibrugarh railway station. The high speed Wi-Fi worked flawlessly for my business video calls.'
  },
  {
    name: 'Dr. Sameer K.',
    location: 'New Delhi, India',
    rating: 9.0,
    date: 'April 2026',
    room: 'Super Deluxe Family Suite',
    title: 'Peaceful stay near Assam Medical College',
    comment: 'Stayed here for a medical conference near AMC. Peaceful environment, hygienic rooms, excellent power backup, and a very welcoming front desk team.'
  }
];

const ratingBreakdown = [
  { label: 'Cleanliness & Hygiene', score: 9.2 },
  { label: 'Staff & Hospitality', score: 9.5 },
  { label: 'Location & Accessibility', score: 9.0 },
  { label: 'Value for Money', score: 8.9 },
  { label: 'Comfort & Facilities', score: 9.1 }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" style={{ backgroundColor: '#FAF9F6', padding: '70px 0', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="tag-sub">AUTHENTIC GUEST FEEDBACK</span>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(26px, 4vw, 46px)',
            fontWeight: '500',
            color: '#1F1D1B',
            marginBottom: '10px'
          }}>
            Guest Reviews & Ratings
          </h2>
          <p style={{ fontSize: '13.5px', color: '#6C6862', maxWidth: '540px', margin: '0 auto' }}>
            Read real verified experiences from corporate travelers, families, and couples who stayed at Hotel Tree Fern.
          </p>
        </div>

        {/* Agoda Overall Summary Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EFECE6',
          boxShadow: '0 12px 32px rgba(0,0,0,0.04)',
          padding: '28px 24px',
          marginBottom: '44px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          alignItems: 'center',
          gap: '24px',
          boxSizing: 'border-box'
        }}>
          
          {/* Rating Big Number (Left) */}
          <div style={{ gridColumn: 'span 4', borderRight: '1px solid #EFECE6', paddingRight: '16px', textAlign: 'center' }} className="rating-summary-col">
            <div style={{
              display: 'inline-block',
              backgroundColor: '#58449B',
              color: '#FFFFFF',
              padding: '5px 12px',
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '1px',
              borderRadius: '3px',
              marginBottom: '12px'
            }}>
              VERIFIED AGODA RATING
            </div>
            <div style={{ fontSize: '46px', fontWeight: '700', color: '#1F1D1B', lineHeight: '1', fontFamily: 'serif' }}>
              8.9 <span style={{ fontSize: '18px', color: '#6C6862', fontWeight: '400' }}>/ 10</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '10px 0 6px 0' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#EAB308" color="#EAB308" />
              ))}
            </div>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#16A34A' }}>Superb • 120+ Verified Reviews</span>
          </div>

          {/* Progress Bars (Right) */}
          <div style={{ gridColumn: 'span 8' }} className="rating-bars-col">
            <div className="rating-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px' }}>
              {ratingBreakdown.map((item, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: '600', color: '#1F1D1B', marginBottom: '5px' }}>
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                    <span style={{ color: '#C59D5F', marginLeft: '6px' }}>{item.score}/10</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', backgroundColor: '#F3F0EA', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${(item.score / 10) * 100}%`,
                      height: '100%',
                      backgroundColor: '#C59D5F',
                      borderRadius: '3px'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Guest Reviews Grid (4 Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {reviewsData.map((rev, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EFECE6',
                padding: '24px 20px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
            >
              <div>
                {/* Header: Score badge & verified icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      backgroundColor: '#16A34A',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '2px'
                    }}>
                      {rev.rating} / 10
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#16A34A', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <CheckCircle size={12} /> Verified Guest
                    </span>
                  </div>
                  <Quote size={18} color="#C59D5F" style={{ opacity: 0.5 }} />
                </div>

                {/* Title */}
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1F1D1B', marginBottom: '6px', lineHeight: '1.35' }}>
                  "{rev.title}"
                </h4>

                {/* Comment */}
                <p style={{ fontSize: '12.5px', color: '#6C6862', lineHeight: '1.55', marginBottom: '16px' }}>
                  {rev.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div style={{ paddingTop: '14px', borderTop: '1px solid #F3F0EA', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <div>
                  <h5 style={{ fontSize: '12.5px', fontWeight: '700', color: '#1F1D1B' }}>{rev.name}</h5>
                  <span style={{ fontSize: '10.5px', color: '#6C6862' }}>{rev.location} • {rev.date}</span>
                </div>
                <span style={{ fontSize: '9.5px', fontWeight: '600', color: '#C59D5F', backgroundColor: '#FAF7F2', padding: '2px 6px', whiteSpace: 'nowrap' }}>
                  {rev.room}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .rating-summary-col {
            grid-column: span 12 !important;
            border-right: none !important;
            border-bottom: 1px solid #EFECE6;
            padding-right: 0 !important;
            padding-bottom: 20px;
          }
          .rating-bars-col {
            grid-column: span 12 !important;
            padding-left: 0 !important;
          }
          .rating-grid-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
