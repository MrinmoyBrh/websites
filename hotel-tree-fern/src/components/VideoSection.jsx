import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = ({ onPlayVideo }) => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '520px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      overflow: 'hidden'
    }}>
      
      {/* Pool Image Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(rgba(22, 20, 19, 0.65), rgba(22, 20, 19, 0.75)), url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }} />

      {/* Content Container */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 5,
        textAlign: 'center',
        padding: '80px 24px'
      }}>
        
        <span className="tag-sub" style={{ color: '#C59D5F', letterSpacing: '3px' }}>
          HOTEL VIDEO
        </span>

        <h2 className="font-serif" style={{
          fontSize: 'clamp(32px, 4.5vw, 54px)',
          fontWeight: '500',
          color: '#FFFFFF',
          marginBottom: '40px',
          letterSpacing: '1px'
        }}>
          Explore Larita Luxury Hotel
        </h2>

        {/* Pulsing Play Button */}
        <button
          onClick={onPlayVideo}
          aria-label="Play hotel virtual tour video"
          className="pulse-button"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 157, 95, 0.85)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(6px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#C59D5F';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(197, 157, 95, 0.85)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Play size={32} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '4px' }} />
        </button>

      </div>

    </section>
  );
};

export default VideoSection;
