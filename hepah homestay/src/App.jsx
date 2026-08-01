import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhilosophyGrid from './components/PhilosophyGrid';
import ReturnToYourself from './components/ReturnToYourself';
import DiningSection from './components/DiningSection';
import AmenitiesSection from './components/AmenitiesSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import RoomGallery from './components/RoomGallery';
import DiningModal from './components/DiningModal';
import PoliciesModal from './components/PoliciesModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [diningOpen, setDiningOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenGallery={() => setGalleryOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => setBookingOpen(true)}
        onOpenGallery={() => setGalleryOpen(true)}
      />

      {/* "What is Hepah?" Grid Section */}
      <PhilosophyGrid
        onOpenGallery={() => setGalleryOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenDining={() => setDiningOpen(true)}
      />

      {/* "Return to yourself" Holistic Wellness Section */}
      <ReturnToYourself
        onOpenGallery={() => setGalleryOpen(true)}
      />

      {/* Authentic Assamese Dining Page Section */}
      <DiningSection
        onOpenDining={() => setDiningOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Amenities & Facilities Showcase + Policies */}
      <AmenitiesSection
        onOpenPolicies={() => setPoliciesOpen(true)}
      />

      {/* Guest Reviews & 10.0 Ratings Showcase */}
      <ReviewsSection />

      {/* Dibrugarh Location & Directions */}
      <LocationSection
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Newsletter Subscription */}
      <Newsletter />

      {/* Footer */}
      <Footer
        onOpenPolicies={() => setPoliciesOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <RoomGallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />

      <DiningModal
        isOpen={diningOpen}
        onClose={() => setDiningOpen(false)}
      />

      <PoliciesModal
        isOpen={policiesOpen}
        onClose={() => setPoliciesOpen(false)}
      />
    </div>
  );
}


