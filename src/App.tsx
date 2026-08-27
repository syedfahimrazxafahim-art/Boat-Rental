/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomeView } from './views/HomeView';
import { FleetView } from './views/FleetView';
import { BeforeAfterView } from './views/BeforeAfterView';
import { RoutesView } from './views/RoutesView';
import { GalleryView } from './views/GalleryView';
import { PricingView } from './views/PricingView';
import { ContactView } from './views/ContactView';
import { BUSINESS_INFO } from './data/boatsData';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBoatId, setSelectedBoatId] = useState<string>('sundancer-45');

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBoat = (boatId: string) => {
    setSelectedBoatId(boatId);
  };

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white" id="boat-rental-miami-app">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Page View Area */}
      <main className="flex-1" id="main-content-view">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectBoat={handleSelectBoat}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
        {currentPage === 'fleet' && (
          <FleetView
            onSelectBoat={handleSelectBoat}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
        {currentPage === 'care' && (
          <BeforeAfterView onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'routes' && (
          <RoutesView onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'gallery' && <GalleryView />}
        {currentPage === 'pricing' && (
          <PricingView onOpenBookingModal={handleOpenBookingModal} />
        )}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedBoatId={selectedBoatId}
      />

      {/* Floating Action Button: WhatsApp Direct Chat */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" id="floating-contact-widget">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Boat Rental Miami! I'm on your website and would like to chat about renting a boat.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white"
          id="floating-whatsapp-btn"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">
            WhatsApp ({BUSINESS_INFO.whatsapp})
          </span>
        </a>
      </div>
    </div>
  );
}
