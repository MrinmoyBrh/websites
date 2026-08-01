import React from 'react';
import { Utensils, Coffee, Leaf, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';

export default function DiningSection({ onOpenDining, onOpenBooking }) {
  const menuCategories = [
    {
      title: 'Traditional Assamese Breakfast',
      badge: 'Complimentary with Stay',
      icon: Coffee,
      desc: 'Home-cooked breakfast prepared fresh every morning using local ingredients and authentic Assamese recipes.',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
      dishes: [
        {
          name: 'Fresh Assam Orthodox Milk / Black Tea',
          desc: 'Brewed from first-flush Dibrugarh estate tea leaves',
          price: 'Included'
        },
        {
          name: 'Pitha & Laroo Platter',
          desc: 'Handcrafted sticky rice rolls stuffed with toasted sesame & jaggery',
          price: 'Included'
        },
        {
          name: 'Puri Masala & Local Pickles',
          desc: 'Fluffy whole wheat puris with spiced potato gravy & organic bamboo shoot pickle',
          price: 'Included'
        }
      ]
    },
    {
      title: 'Authentic Assamese Thali Dinner',
      badge: 'Chef Signature',
      icon: Utensils,
      desc: 'An authentic multi-course feast featuring fresh river fish, slow-cooked duck, and traditional alkaline delicacies.',
      image: '/images/assamese-thali-fish-tenga.jpg',
      dishes: [
        {
          name: 'Fish Tenga (Sour Fish Curry)',
          desc: 'Local river fish cooked with Elephant Apple (Ou Tenga) and fresh herbs',
          price: '₹450'
        },
        {
          name: 'Khar with Local Greens',
          desc: 'Traditional alkaline delicacy prepared with banana peel ash and pulses',
          price: '₹280'
        },
        {
          name: 'Duck Curry with White Gourd',
          desc: 'Slow-cooked local duck with black pepper and roasted spices',
          price: '₹550'
        }
      ]
    },
    {
      title: 'Organic Tea Garden Tastings',
      badge: 'Exclusive Experience',
      icon: Leaf,
      desc: 'Rare single-origin tea flights and artisanal pairings served on your private garden terrace.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      dishes: [
        {
          name: 'Single-Origin Tea Tasting Flight',
          desc: 'Sample 4 rare teas: CTC, Orthodox Golden Tips, Green, and White Tea',
          price: '₹350'
        },
        {
          name: 'Wine & Local Artisanal Cheese Evening',
          desc: 'Served in your suite terrace with complimentary wine glasses',
          price: '₹750'
        }
      ]
    }
  ];

  return (
    <section id="dining" className="dining-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="dining-header">
          <span className="kicker">FARM TO TABLE CULINARY JOURNEY</span>
          <h2 className="section-title">
            Authentic Assamese Dining
          </h2>
          <p className="section-desc">
            At Hepah Homestay, dining is an expression of warmth and heritage. Every meal is home-cooked with 100% organic local ingredients, seasonal produce, and recipes passed down through generations.
          </p>

          {/* Highlights Pills Row */}
          <div className="dining-pills-row">
            <div className="dining-pill-badge">
              <CheckCircle2 size={15} color="#10B981" />
              <span>Complimentary Daily Breakfast</span>
            </div>
            <div className="dining-pill-badge">
              <ChefHat size={15} color="#C5A059" />
              <span>Private Suite Dining</span>
            </div>
            <div className="dining-pill-badge">
              <Leaf size={15} color="#0D4E3A" />
              <span>100% Organic Produce</span>
            </div>
          </div>
        </div>

        {/* 3 Menu Recipe Cards Grid */}
        <div className="dining-grid">
          {menuCategories.map((category, index) => {
            const IconComp = category.icon;
            return (
              <div key={index} className="dining-card">
                {/* Image Header */}
                <div className="dining-card-img-wrap">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="dining-card-img"
                  />
                  <div className="dining-card-tag">
                    <Sparkles size={13} color="#C5A059" />
                    <span>{category.badge}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="dining-card-body">
                  <div>
                    <div className="dining-card-category">
                      <IconComp size={15} />
                      <span>Specialty Menu</span>
                    </div>
                    <h3 className="dining-card-title">
                      {category.title}
                    </h3>
                    <p className="dining-card-desc">
                      {category.desc}
                    </p>
                  </div>

                  {/* Recipe Dishes List with Descriptions & Prices */}
                  <div className="dining-card-items">
                    <div className="dining-card-items-title">
                      Featured Recipes & Pricing
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {category.dishes.map((dish, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111', lineHeight: 1.3 }}>
                              {dish.name}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: 300, marginTop: '2px', lineHeight: 1.4 }}>
                              {dish.desc}
                            </div>
                          </div>
                          <span style={{
                            fontSize: '0.725rem',
                            fontWeight: 700,
                            color: dish.price === 'Included' ? '#059669' : '#111',
                            background: dish.price === 'Included' ? '#ECFDF5' : '#F5F4EE',
                            border: dish.price === 'Included' ? '1px solid #A7F3D0' : '1px solid rgba(0,0,0,0.08)',
                            padding: '0.2rem 0.65rem',
                            borderRadius: '9999px',
                            whiteSpace: 'nowrap',
                            shrink: 0
                          }}>
                            {dish.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dark Obsidian Banner */}
        <div className="dining-banner">
          <div>
            <div className="dining-banner-kicker">
              EXPLORE OUR FULL MENU & DINING EXPERIENCES
            </div>
            <h3 className="dining-banner-title">
              Taste the True Longing of Assam
            </h3>
            <p className="dining-banner-desc">
              Customize your meals according to dietary preferences or request special private dinners on the terrace.
            </p>
          </div>

          <div className="dining-banner-actions">
            <button onClick={onOpenDining} className="btn-primary">
              VIEW FULL DINING MENU
            </button>
            <button onClick={onOpenBooking} className="btn-secondary">
              BOOK STAY WITH DINING
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
