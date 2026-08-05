import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesHighlights from './components/FeaturesHighlights';
import AboutSection from './components/AboutSection';
import RoomSuites from './components/RoomSuites';
import Amenities from './components/Amenities';
import LocationSection from './components/LocationSection';
import PoliciesSection from './components/PoliciesSection';
import ReviewsSection from './components/ReviewsSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import VideoModal from './components/VideoModal';
import RoomDetailModal from './components/RoomDetailModal';
import AboutModal from './components/AboutModal';

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);
  const [activeReservationRoom, setActiveReservationRoom] = useState(null);

  const handleOpenReservation = (room = null) => {
    setActiveReservationRoom(room);
    setIsReservationOpen(true);
  };

  const handleOpenRoomDetail = (room) => {
    setSelectedRoomDetail(room);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Floating Navigation Header */}
      <Navbar onOpenReservation={() => handleOpenReservation(null)} />

      {/* Main Hero Section */}
      <Hero 
        onExploreClick={() => scrollToSection('about')}
        onStoryClick={() => setIsAboutOpen(true)}
      />

      {/* 4 Feature Highlights Strip */}
      <FeaturesHighlights />

      {/* About Hotel Tree Fern Section + Rating Badges */}
      <AboutSection onReadMoreClick={() => setIsAboutOpen(true)} />

      {/* Room and Suite Collection Showcase */}
      <RoomSuites 
        onBookRoom={(room) => handleOpenReservation(room)}
        onViewRoom={(room) => handleOpenRoomDetail(room)}
      />

      {/* Full Facilities & Amenities Breakdown */}
      <Amenities />

      {/* Location & Nearby Landmarks Section */}
      <LocationSection />

      {/* Guest Reviews & Agoda Verified Feedback */}
      <ReviewsSection />

      {/* Property Policies Section */}
      <PoliciesSection />

      {/* Hotel Video Exploration Banner */}
      <VideoSection onPlayVideo={() => setIsVideoOpen(true)} />

      {/* Footer */}
      <Footer onOpenReservation={() => handleOpenReservation(null)} />

      {/* Interactive Modals */}
      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        selectedRoom={activeReservationRoom}
      />

      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <RoomDetailModal 
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookNow={(room) => handleOpenReservation(room)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onExploreRooms={() => scrollToSection('rooms')}
      />
    </div>
  );
}

export default App;
