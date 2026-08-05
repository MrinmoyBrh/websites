import React from 'react';
import { Clock, ShieldAlert, Users, CreditCard, FileCheck, Dog, CheckCircle2 } from 'lucide-react';

const policiesList = [
  {
    icon: Clock,
    title: 'Check-in & Check-out Times',
    bullets: [
      'Standard Check-in time: 12:00 PM onwards',
      'Standard Check-out time: 11:00 AM',
      'Early check-in & late check-out available subject to room availability (prior request advised).'
    ]
  },
  {
    icon: ShieldAlert,
    title: 'Cancellation & Prepayment',
    bullets: [
      'Free cancellation up to 24 hours prior to check-in date.',
      'Cancellations made within 24 hours or no-shows are subject to 1-night room charge.',
      'Special promotional rates may have non-refundable terms.'
    ]
  },
  {
    icon: Users,
    title: 'Children & Extra Bed Policy',
    bullets: [
      'Children of all ages are warmly welcomed.',
      'Kids under 6 years stay free when using existing bedding.',
      'Extra bed / rollaway mattress available for ₹500 per night.'
    ]
  },
  {
    icon: FileCheck,
    title: 'Guest Identification Requirements',
    bullets: [
      'All adult guests must present a valid government-issued Photo ID at check-in.',
      'Accepted IDs: Aadhaar Card, Passport, Driving License, Voter ID Card (PAN card not accepted per government rules).',
      'Local ID policies apply in accordance with hotel rules.'
    ]
  },
  {
    icon: CreditCard,
    title: 'Payment Options Accepted',
    bullets: [
      'Credit Cards (Visa, MasterCard, RuPay, Amex)',
      'UPI (Google Pay, PhonePe, Paytm, BHIM)',
      'Cash & Net Banking accepted at front desk.'
    ]
  },
  {
    icon: Dog,
    title: 'Pet & Smoking Policies',
    bullets: [
      'Pets are not allowed on the property (service animals allowed).',
      '100% Non-smoking in all guest rooms; designated outdoor smoking areas available.'
    ]
  }
];

const PoliciesSection = () => {
  return (
    <section id="policies" style={{ backgroundColor: '#F3F0EA', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag-sub">GUEST INFORMATION</span>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: '500',
            color: '#1F1D1B',
            marginBottom: '12px'
          }}>
            Hotel Tree Fern Policies
          </h2>
          <p style={{ fontSize: '14px', color: '#6C6862', maxWidth: '540px', margin: '0 auto' }}>
            Essential guidelines for a seamless, comfortable stay at Hotel Tree Fern, Dibrugarh.
          </p>
        </div>

        {/* 6 Grid Policies Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {policiesList.map((policy, idx) => {
            const IconComponent = policy.icon;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EFECE6',
                  padding: '32px 28px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header with Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#FAF7F2',
                    border: '1px solid rgba(197, 157, 95, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C59D5F',
                    flexShrink: 0
                  }}>
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif" style={{
                    fontSize: '19px',
                    fontWeight: '600',
                    color: '#1F1D1B'
                  }}>
                    {policy.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {policy.bullets.map((bText, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#6C6862', lineHeight: '1.6' }}>
                      <CheckCircle2 size={15} color="#C59D5F" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{bText}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PoliciesSection;
