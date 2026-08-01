import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Stay Connected
          </h2>
          <p className="newsletter-desc">
            Join the Hepah Collective for exclusive previews of new openings, seasonal Assam tea harvest invitations, and wellness insights.
          </p>

          {subscribed ? (
            <div style={{ background: '#ECFDF5', color: '#065F46', padding: '1rem 2rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600 }}>
              <Check size={16} />
              <span>Thank you for joining the Hepah Collective!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
