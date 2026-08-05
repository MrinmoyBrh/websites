import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight, ArrowDown } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/hotel/hotel_photo_3.jpg',
    title: 'HOTEL TREE FERN',
    subtitle: 'Located in the heart of Dibrugarh, this luxurious, modern hotel offers top-notch amenities for a perfect stay.',
  },
  {
    image: '/images/hotel/hotel_photo_4.jpg',
    title: 'EXQUISITE SUITES & COMFORT',
    subtitle: 'Immerse yourself in refined elegance with spacious executive rooms and world-class luxury craftsmanship.',
  },
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85',
    title: 'ASSAM HOSPITALITY',
    subtitle: 'Experience warm Assam hospitality, gourmet dining, and personalized service tailored for every guest.',
  }
];

const Hero = ({ onExploreClick, onStoryClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#161413', color: '#FFFFFF', overflow: 'hidden' }}>
      
      {/* Background Image Carousel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(to bottom, rgba(22, 20, 19, 0.55), rgba(22, 20, 19, 0.8)), url("${heroSlides[activeSlide].image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out',
        zIndex: 1
      }} />

      {/* Grid subtle overlay lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '25% 100%',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Side Carousel Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hero-arrow-left"
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(22, 20, 19, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(4px)'
        }}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Side Carousel Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hero-arrow-right"
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(22, 20, 19, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(4px)'
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Vertical SCROLL Indicator */}
      <div className="hero-scroll-indicator" style={{
        position: 'absolute',
        right: '48px',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'right center',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '3px',
        color: 'rgba(255, 255, 255, 0.7)',
        textTransform: 'uppercase'
      }}>
        <span>SCROLL</span>
        <ArrowDown size={12} style={{ transform: 'rotate(-90deg)' }} />
      </div>

      {/* Main Hero Content - ABSOLUTE MATHEMATICAL DEAD-CENTER */}
      <div className="hero-main-container" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '900px',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      }}>
        
        {/* 5 Gold Stars */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#EAB308" color="#EAB308" />
          ))}
        </div>

        {/* Title */}
        <h1 className="font-serif hero-title" style={{
          fontSize: 'clamp(28px, 5.5vw, 64px)',
          fontWeight: '500',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '18px',
          maxWidth: '850px',
          lineHeight: 1.15,
          textAlign: 'center',
          width: '100%'
        }}>
          {heroSlides[activeSlide].title}
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle" style={{
          fontSize: 'clamp(13px, 2vw, 15.5px)',
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.88)',
          maxWidth: '580px',
          lineHeight: '1.75',
          marginBottom: '26px',
          textAlign: 'center',
          width: '100%',
          padding: '0 12px'
        }}>
          {heroSlides[activeSlide].subtitle}
        </p>

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '24px' }}>
          <button
            onClick={onExploreClick}
            className="btn"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              color: '#FFFFFF',
              padding: '12px 32px',
              fontSize: '11px',
              letterSpacing: '2px'
            }}
          >
            <span>EXPLORE</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Carousel Slide Dots Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: activeSlide === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeSlide === idx ? '#C59D5F' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

      </div>

      {/* Bottom Floating Experience Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: 'rgba(22, 20, 19, 0.94)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '16px 0'
      }}>
        <div className="container hero-bottom-bar" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          
          {/* Left Experience Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '10.5px', fontWeight: '600', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
              LUXURY HOTEL IN DIBRUGARH, ASSAM
            </span>
            <button
              onClick={onStoryClick}
              className="btn btn-primary"
              style={{
                backgroundColor: '#C59D5F',
                padding: '7px 16px',
                fontSize: '10.5px',
                letterSpacing: '1px',
                borderRadius: '0px'
              }}
            >
              <span>TREE FERN STORY</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Right Stats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#FFFFFF' }}>8.9 / 10</span>
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Agoda Score</span>
            </div>

            <div style={{ height: '20px', width: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#FFFFFF' }}>4.9/5</span>
              <Star size={13} fill="#EAB308" color="#EAB308" />
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Verified Reviews</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-scroll-indicator {
            display: none !important;
          }
          .hero-arrow-left {
            left: 8px !important;
            width: 36px !important;
            height: 36px !important;
          }
          .hero-arrow-right {
            right: 8px !important;
            width: 36px !important;
            height: 36px !important;
          }
          .hero-bottom-bar {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;
