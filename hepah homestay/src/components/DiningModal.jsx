import React from 'react';
import { X, Utensils, Coffee, Leaf, Award } from 'lucide-react';

export default function DiningModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const menuSections = [
    {
      title: 'Traditional Assamese Breakfast (Complimentary)',
      icon: Coffee,
      items: [
        { name: 'Fresh Assam Orthodox Milk / Black Tea', desc: 'Brewed from first-flush Dibrugarh estate tea leaves', price: 'Included' },
        { name: 'Pitha & Laroo Platter', desc: 'Handcrafted sticky rice rolls stuffed with toasted sesame & jaggery', price: 'Included' },
        { name: 'Puri Masala & Local Pickles', desc: 'Fluffy whole wheat puris with spiced potato gravy & organic bamboo shoot pickle', price: 'Included' }
      ]
    },
    {
      title: 'Authentic Assamese Thali Dinner',
      icon: Utensils,
      items: [
        { name: 'Fish Tenga (Sour Fish Curry)', desc: 'Local river fish cooked with Elephant Apple (Ou Tenga) and fresh herbs', price: '₹450' },
        { name: 'Khar with Local Greens', desc: 'Traditional alkaline delicacy prepared with banana peel ash and pulses', price: '₹280' },
        { name: 'Duck Curry with White Gourd', desc: 'Slow-cooked local duck with black pepper and roasted spices', price: '₹550' }
      ]
    },
    {
      title: 'Organic Tea Garden Tastings',
      icon: Leaf,
      items: [
        { name: 'Single-Origin Tea Tasting Flight', desc: 'Sample 4 rare teas: CTC, Orthodox Golden Tips, Green, and White Tea', price: '₹350' },
        { name: 'Wine & Local Artisanal Cheese Evening', desc: 'Served in your suite terrace with complimentary wine glasses', price: '₹750' }
      ]
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="close-btn"
          aria-label="Close dining menu"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <span className="kicker">FARM TO TABLE</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-2">
            Assamese Culinary Experience
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-md mx-auto">
            Home-cooked with organic local ingredients and served with traditional Assamese hospitality
          </p>
        </div>

        <div className="space-y-6" style={{ maxHeight: '62vh', overflowY: 'auto', paddingRight: '0.4rem' }}>
          {menuSections.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <h3 className="font-serif text-xl text-neutral-900 mb-4 pb-3 border-b border-neutral-100 flex items-center gap-2">
                  <IconComp size={18} className="text-amber-700" />
                  {sec.title}
                </h3>
                <div className="space-y-4">
                  {sec.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900">{item.name}</h4>
                        <p className="text-xs text-neutral-500 font-light mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-neutral-900 shrink-0 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
