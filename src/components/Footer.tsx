import React from 'react';
import { NavPage } from '../types';
import { OfficialLogo } from './OfficialLogo';
import { BUSINESS_INFO } from '../data/boatsData';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Facebook, Anchor, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sky-950 text-white border-t border-sky-900" id="site-footer">
      {/* Top Banner Stripe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-sky-900">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => handleNav('home')} className="text-left focus:outline-none">
              <OfficialLogo size="md" variant="footer" showText={true} />
            </button>
            <p className="text-xs text-sky-200 leading-relaxed max-w-sm">
              Miami's premier boat rental and charter service. Explore Biscayne Bay, Star Island, and Nixon Sandbar aboard spotless, high-performance vessels.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-sky-900/80 hover:bg-sky-800 flex items-center justify-center text-sky-300 hover:text-white transition-colors border border-sky-800"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors border border-emerald-600"
                aria-label="WhatsApp Support"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-sky-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-sky-200">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('fleet')} className="hover:text-white transition-colors">
                  Fleet & Rates
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('care')} className="hover:text-white transition-colors">
                  Before & After Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('routes')} className="hover:text-white transition-colors">
                  Cruising Routes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors">
                  Pricing & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Location Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-sky-400">Direct Contact</h4>
            <div className="space-y-2.5 text-xs text-sky-200">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">WhatsApp / Phone:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Hours of Operation:</span>
                  <span>{BUSINESS_INFO.hours}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Departure Location:</span>
                  <span>{BUSINESS_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailing Partner Badge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-sky-400">Sanitation Partner</h4>
            <div className="bg-sky-900/60 p-4 rounded-xl border border-sky-800 text-xs text-sky-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>{BUSINESS_INFO.servicePartner}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-sky-300">
                Official marine upholstery steam restoration and antimicrobial sanitation partner.
              </p>
              <button
                onClick={() => handleNav('care')}
                className="text-[11px] font-bold text-sky-300 hover:text-white underline block"
              >
                Learn about cleaning standards →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sky-400">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Miami, FL • Biscayne Bay</span>
            <span>USCG Certified Safety Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
