import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, Eye, BedDouble, Ban, Users, Coffee } from 'lucide-react';

const roomData = [
  {
    id: 'deluxe-king',
    price: '₹2,499',
    title: 'Deluxe King Room',
    desc: 'Cozy and modern executive room equipped with plush king mattress, air conditioning, flat screen TV, work desk, and essential amenities for corporate or leisure guests.',
    specs: [
      { label: 'ROOM SIZE', val: '28 M²', icon: Maximize2 },
      { label: 'CITY VIEW', val: '', icon: Eye },
      { label: '1 KING BED', val: '', icon: BedDouble },
      { label: 'SMOKING', val: 'NO', icon: Ban },
      { label: '2 ADULTS', val: '1 CHILD', icon: Users },
      { label: 'BREAKFAST', val: 'INCLUDED', icon: Coffee }
    ],
    image: '/images/hotel/hotel_photo_3.jpg'
  },
  {
    id: 'executive-suite',
    price: '₹3,899',
    title: 'Executive Luxury Suite',
    desc: 'Spacious suite featuring premium decor, comfortable lounge area, executive work station, tea/coffee maker, and attached luxury bathroom with premium toiletries.',
    specs: [
      { label: 'ROOM SIZE', val: '42 M²', icon: Maximize2 },
      { label: 'PANORAMIC VIEW', val: '', icon: Eye },
      { label: '1 SUPER KING', val: '', icon: BedDouble },
      { label: 'SMOKING', val: 'NO', icon: Ban },
      { label: '2 ADULTS', val: '2 CHILDREN', icon: Users },
      { label: 'BREAKFAST', val: 'INCLUDED', icon: Coffee }
    ],
    image: '/images/hotel/hotel_photo_4.jpg'
  },
  {
    id: 'super-deluxe',
    price: '₹4,799',
    title: 'Super Deluxe Family Suite',
    desc: 'Generously sized suite designed for families or group travelers, offering two plush double beds, spacious seating, and 24-hour room service.',
    specs: [
      { label: 'ROOM SIZE', val: '58 M²', icon: Maximize2 },
      { label: 'DIBRUGARH VIEW', val: '', icon: Eye },
      { label: '2 QUEEN BEDS', val: '', icon: BedDouble },
      { label: 'SMOKING', val: 'NO', icon: Ban },
      { label: '4 ADULTS', val: '2 CHILDREN', icon: Users },
      { label: 'BREAKFAST', val: 'BUFFET', icon: Coffee }
    ],
    image: '/images/hotel/hotel_photo_5.jpg'
  }
];

const RoomSuites = ({ onBookRoom, onViewRoom }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevRoom = () => {
    setCurrentIdx((prev) => (prev === 0 ? roomData.length - 1 : prev - 1));
  };

  const nextRoom = () => {
    setCurrentIdx((prev) => (prev === roomData.length - 1 ? 0 : prev + 1));
  };

  const room = roomData[currentIdx];

  return (
    <section id="rooms" style={{ backgroundColor: '#F3F0EA', padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="tag-sub">EXQUISITE AND LUXURIOUS</span>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: '500',
            color: '#1F1D1B'
          }}>
            Room and suite collection
          </h2>
        </div>

        {/* Carousel Room Container */}
        <div style={{ position: 'relative' }}>
          
          {/* Main Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'stretch',
            overflow: 'hidden'
          }}>
            
            {/* Left Specs Container */}
            <div style={{
              gridColumn: 'span 5',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }} className="room-left-col">
              
              <div>
                {/* Price tag */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '12px', color: '#6C6862', textTransform: 'uppercase' }}>From</span>
                  <span style={{ fontSize: '32px', fontWeight: '700', color: '#1F1D1B', lineHeight: '1' }}>{room.price}</span>
                  <span style={{ fontSize: '11px', color: '#6C6862', textTransform: 'uppercase' }}>/ NIGHT</span>
                </div>

                {/* Room Title */}
                <h3 className="font-serif" style={{
                  fontSize: '26px',
                  fontWeight: '500',
                  color: '#1F1D1B',
                  marginBottom: '14px'
                }}>
                  {room.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: '#6C6862',
                  lineHeight: '1.6',
                  marginBottom: '28px'
                }}>
                  {room.desc}
                </p>

                {/* Amenities Specs Grid (2 columns x 3 rows) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px 16px',
                  paddingTop: '16px',
                  borderTop: '1px solid #EFECE6',
                  marginBottom: '28px'
                }}>
                  {room.specs.map((spec, sIdx) => {
                    const IconComp = spec.icon;
                    return (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <IconComp size={15} color="#C59D5F" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '10.5px', fontWeight: '600', letterSpacing: '0.5px', color: '#1F1D1B', textTransform: 'uppercase' }}>
                          {spec.label} {spec.val && `- ${spec.val}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons & Mobile Nav */}
              <div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <button
                    onClick={() => onBookRoom(room)}
                    className="btn btn-primary"
                    style={{
                      backgroundColor: '#C59D5F',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      fontSize: '11px',
                      borderRadius: '0px'
                    }}
                  >
                    <span>BOOK NOW</span>
                  </button>

                  <button
                    onClick={() => onViewRoom(room)}
                    className="btn btn-outline"
                    style={{
                      borderColor: '#1F1D1B',
                      color: '#1F1D1B',
                      padding: '12px 20px',
                      fontSize: '11px',
                      borderRadius: '0px'
                    }}
                  >
                    <span>VIEW ROOM</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Room Dots Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {roomData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      aria-label={`Select room ${idx + 1}`}
                      style={{
                        width: currentIdx === idx ? '20px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: currentIdx === idx ? '#C59D5F' : '#EFECE6',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Image Container */}
            <div style={{
              gridColumn: 'span 7',
              position: 'relative',
              minHeight: '380px'
            }} className="room-right-col">
              <img 
                src={room.image} 
                alt={room.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevRoom}
            aria-label="Previous room"
            className="room-carousel-arrow-left"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#1F1D1B',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextRoom}
            aria-label="Next room"
            className="room-carousel-arrow-right"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#1F1D1B',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .room-left-col {
            grid-column: span 12 !important;
            padding: 24px 20px !important;
          }
          .room-right-col {
            grid-column: span 12 !important;
            min-height: 260px !important;
          }
          .room-carousel-arrow-left {
            left: 10px !important;
            top: 25% !important;
            width: 36px !important;
            height: 36px !important;
          }
          .room-carousel-arrow-right {
            right: 10px !important;
            top: 25% !important;
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RoomSuites;
