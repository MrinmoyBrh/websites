import React from 'react';
import { Globe, Instagram, Compass } from 'lucide-react';

export default function Footer({ onOpenPolicies }) {
  return (
    <footer className="footer">
      <div className="container">
        {/* Brand Logo */}
        <div>
          <a href="#" className="footer-logo">
            HEPAH
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a
            href="#policies"
            onClick={(e) => {
              e.preventDefault();
              onOpenPolicies && onOpenPolicies();
            }}
          >
            PRIVACY POLICY
          </a>
          <a
            href="#policies"
            onClick={(e) => {
              e.preventDefault();
              onOpenPolicies && onOpenPolicies();
            }}
          >
            TERMS OF SERVICE
          </a>
          <a href="#philosophy">PRESS</a>
          <a href="#philosophy">CAREERS</a>
          <a href="#philosophy" style={{ fontWeight: 700, color: '#111' }}>SUSTAINABILITY</a>
        </nav>

        {/* Copyright */}
        <div className="footer-copy">
          © 2026 Hepah Homestay Collective. All Rights Reserved. Dibrugarh, Assam, India.
        </div>

        {/* Social / Globe Icons */}
        <div className="footer-socials">
          <a href="#" aria-label="Globe"><Globe size={18} strokeWidth={1.5} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} strokeWidth={1.5} /></a>
          <a href="#" aria-label="Compass"><Compass size={18} strokeWidth={1.5} /></a>
        </div>
      </div>
    </footer>
  );
}


