import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 250,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        aspectRatio: '16/9',
        backgroundColor: '#000000',
        boxShadow: '0 24px 60px rgba(0,0,0,0.8)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-44px',
            right: 0,
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: '600'
          }}
        >
          <span>CLOSE</span>
          <X size={24} />
        </button>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=0"
          title="Larita Luxury Hotel Virtual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default VideoModal;
