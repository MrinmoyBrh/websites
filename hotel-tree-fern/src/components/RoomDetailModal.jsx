import React from 'react';
import { X, Check } from 'lucide-react';

const RoomDetailModal = ({ room, onClose, onBookNow }) => {
  if (!room) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 220,
      backgroundColor: 'rgba(22, 20, 19, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '780px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
        position: 'relative'
      }}>
        
        {/* Header Image */}
        <div style={{ position: 'relative', height: '320px' }}>
          <img 
            src={room.image} 
            alt={room.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(22, 20, 19, 0.7)',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 className="font-serif" style={{ fontSize: '32px', fontWeight: '500', color: '#1F1D1B' }}>
              {room.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '28px', fontWeight: '700', color: '#C59D5F' }}>{room.price}</span>
              <span style={{ fontSize: '12px', color: '#6C6862' }}>/ NIGHT</span>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: '#6C6862', lineHeight: '1.7', marginBottom: '28px' }}>
            {room.desc} Experience bespoke room luxury crafted with fine Italian marble finishes, premium Egyptian cotton linens, ambient dimmable smart lighting, and 24/7 personal room service.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1F1D1B', marginBottom: '16px' }}>
            Included Room Privileges
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            {[
              'Complimentary High Speed Fiber Wifi',
              '24/7 In-Room Luxury Dining',
              'Espresso & Artisan Tea Bar',
              'Rainfall Shower & Soaking Tub',
              'Smart TV with Streaming Apps',
              'Daily Executive Housekeeping'
            ].map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#1F1D1B' }}>
                <Check size={16} color="#C59D5F" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="btn btn-primary"
              style={{
                backgroundColor: '#C59D5F',
                color: '#FFFFFF',
                flex: 1,
                padding: '14px',
                fontSize: '12px'
              }}
            >
              RESERVE THIS ROOM
            </button>
            <button
              onClick={onClose}
              className="btn btn-outline"
              style={{
                borderColor: '#1F1D1B',
                padding: '14px 28px',
                fontSize: '12px'
              }}
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RoomDetailModal;
