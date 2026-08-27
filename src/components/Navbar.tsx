import React, { useState } from 'react';
import { NavPage } from '../types';
import { OfficialLogo } from './OfficialLogo';
import { BUSINESS_INFO } from '../data/boatsData';
import { Phone, Calendar, Menu, X, Anchor, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Fleet & Rates', page: 'fleet' },
    { label: 'Before & After Care', page: 'care' },
    { label: 'Cruising Routes', page: 'routes' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Pricing & FAQ', page: 'pricing' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm" id="site-header">
      {/* Top Notification Announcement Bar */}
      <div className="bg-sky-950 text-white text-[11px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 sm:px-8 flex items-center justify-between border-b border-sky-900" id="top-announcement-bar">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Biscayne Bay Calm Water Advisory: Perfect Boating Conditions Today</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sky-200">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> Detailing by {BUSINESS_INFO.servicePartner}
          </span>
          <span className="text-white/40">•</span>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Boat Rental Miami! I'd like to check boat availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition-colors flex items-center gap-1 text-sky-300 font-semibold"
          >
            WhatsApp Support: {BUSINESS_INFO.whatsapp}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          id="nav-logo-button"
          aria-label="Boat Rental Miami Home"
        >
          <OfficialLogo size="md" variant="light" showText={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-bold uppercase tracking-wider text-slate-600" id="desktop-nav-links">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-3.5 py-2 rounded-md transition-all duration-200 relative ${
                  isActive
                    ? 'text-sky-600 font-extrabold'
                    : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/60'
                }`}
                id={`nav-link-${item.page}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-sky-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* WhatsApp Direct Call */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello! I'm interested in renting a boat in Miami.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            id="header-whatsapp-btn"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>{BUSINESS_INFO.whatsapp}</span>
          </a>

          {/* Book Boat Primary Button */}
          <button
            onClick={onOpenBookingModal}
            className="flex items-center gap-2 px-5 py-2.5 bg-sky-950 hover:bg-sky-900 text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
            id="header-book-btn"
          >
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            <span>Book A Boat</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenBookingModal}
            className="sm:hidden px-3 py-1.5 bg-sky-950 text-white rounded-sm text-xs font-bold uppercase tracking-wider"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-6 py-5 shadow-xl animate-in slide-in-from-top-4 duration-200" id="mobile-nav-drawer">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                  currentPage === item.page
                    ? 'bg-sky-50 text-sky-700 border-l-4 border-sky-500'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-sky-50 text-sky-700 font-bold text-xs uppercase tracking-wider rounded-lg border border-sky-200"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3.5 bg-sky-950 text-white font-bold text-xs uppercase tracking-widest rounded-sm shadow-md flex items-center justify-center gap-2"
            >
              <Anchor className="w-4 h-4 text-sky-400" />
              <span>Reserve Miami Watercraft</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
