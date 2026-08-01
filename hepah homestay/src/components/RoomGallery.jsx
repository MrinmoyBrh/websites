import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function RoomGallery({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!isOpen) return null;

  const galleryItems = [
    { src: '/images/hepah-1.jpg', title: 'Master Bedroom Suite', category: 'bedroom', desc: 'King bed with organic linen and morning garden light' },
    { src: '/images/hepah-3.jpg', title: 'Serene Living Room', category: 'living', desc: 'Spacious 355 sq ft space with plush seating & garden view' },
    { src: '/images/hepah-4.jpg', title: 'Private Kitchen & Dining', category: 'kitchen', desc: 'Fully equipped kitchen with wine glasses and tea setup' },
    { src: '/images/hepah-7.jpg', title: 'Luxury Bathroom', category: 'bathroom', desc: 'Sparkling clean (10.0 rated) shower & organic toiletries' },
    { src: '/images/hepah-9.jpg', title: 'Terrace Sanctuary', category: 'outdoors', desc: 'Private balcony terrace surrounded by Dibrugarh air' },
    { src: '/images/hepah-2.jpg', title: 'Deluxe Lounge Nook', category: 'living', desc: 'Quiet reading lounge with handcrafted wooden furniture' },
    { src: '/images/hepah-8.jpg', title: 'Assamese Fine Dining', category: 'dining', desc: 'Artisan tea pairing & authentic home-cooked meals' },
    { src: '/images/hepah-12.jpg', title: 'Suite Overview', category: 'bedroom', desc: 'Clean, minimalist Assamese architectural design' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="close-btn"
          aria-label="Close gallery"
        >
          <X size={18} />
        </button>

        {/* Gallery Header */}
        <div className="text-center mb-6">
          <span className="kicker">SUITES & AMBIANCE</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-2">
            Hepah Homestay Showcase
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-md mx-auto">
            Explore our 10.0 rated 355 sq ft private homestay suite in Dibrugarh
          </p>

          {/* Categories Bar */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['all', 'bedroom', 'living', 'kitchen', 'bathroom', 'dining', 'outdoors'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.4rem' }}>
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-200"
              style={{ height: '220px', position: 'relative' }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="hover:scale-105"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyConstraint: 'flex-end',
                  padding: '1.25rem',
                  color: '#FFF'
                }}
              >
                <div style={{ marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#D4AF37', fontWeight: 'bold' }}>
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white" style={{ margin: '0.2rem 0' }}>{item.title}</h4>
                  <p className="text-xs text-neutral-300 font-light" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            style={{ zIndex: 2000, background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="close-btn"
              style={{ top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.2)', color: '#FFF' }}
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
              }}
              style={{ position: 'absolute', left: '1.5rem', background: 'rgba(255,255,255,0.15)', color: '#FFF', border: 'none', borderRadius: '50%', width: '48px', height: '48px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronLeft size={28} />
            </button>

            <div className="max-w-4xl text-center px-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                style={{ maxHeight: '72vh', maxWidth: '100%', margin: '0 auto', borderRadius: '16px', objectFit: 'contain', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
              />
              <div className="mt-4 text-white">
                <h3 className="font-serif text-2xl">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{filteredItems[lightboxIndex].desc}</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
              }}
              style={{ position: 'absolute', right: '1.5rem', background: 'rgba(255,255,255,0.15)', color: '#FFF', border: 'none', borderRadius: '50%', width: '48px', height: '48px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
