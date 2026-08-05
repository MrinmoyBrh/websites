import React from 'react';
import { MapPin, Sparkles, Smile, Tag } from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    title: 'Located in the heart of the city',
    desc: 'Ideally located in the city\'s heart for easy access and convenience.'
  },
  {
    icon: Sparkles,
    title: 'Luxurious, modern, and comfortable',
    desc: 'Experience a luxurious, modern, and fully equipped space for comfort.'
  },
  {
    icon: Smile,
    title: 'Friendly and welcoming staff',
    desc: 'Our friendly and welcoming staff ensure a delightful stay every time.'
  },
  {
    icon: Tag,
    title: 'Best prices and great offers',
    desc: 'Enjoy unbeatable prices with fantastic offers tailored just for you.'
  }
];

const FeaturesHighlights = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '70px 0', borderBottom: '1px solid #EFECE6' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px'
        }}>
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  padding: '0 12px'
                }}
              >
                {/* Gold Outline Circle Icon Container */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF7F2',
                  border: '1px solid rgba(197, 157, 95, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#C59D5F'
                }}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif" style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1F1D1B',
                  marginBottom: '10px',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#6C6862',
                  lineHeight: '1.6',
                  maxWidth: '240px'
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlights;
