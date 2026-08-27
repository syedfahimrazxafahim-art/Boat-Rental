import React from 'react';
import { NavPage, Boat } from '../types';
import { FLEET_DATA, BEFORE_AFTER_CASES, DESTINATION_ROUTES, TESTIMONIALS, BUSINESS_INFO, ASSET_IMAGES } from '../data/boatsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  Anchor,
  ShieldCheck,
  Sparkles,
  Compass,
  ArrowRight,
  Phone,
  MessageSquare,
  Users,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  Calendar,
  Waves
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onSelectBoat: (boatId: string) => void;
  onOpenBookingModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectBoat,
  onOpenBookingModal,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16" id="home-view-container">
      {/* 1. HERO SECTION: Geometric Balance Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50/40 border-b border-sky-100" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-100/90 text-sky-800 text-xs font-bold rounded-md uppercase mb-4 tracking-widest self-start border border-sky-200">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Elite Miami Charter Experience</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-sky-950 leading-[1.05] tracking-tight mb-6">
                Cruise Miami in <br />
                <span className="text-sky-500 underline decoration-sky-300 underline-offset-8">
                  Pure Luxury.
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                Explore the crystal turquoise waters of Biscayne Bay, Star Island, and Nixon Sandbar. Impeccably detailed vessels, licensed USCG captains, and bespoke sandbar itineraries.
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBookingModal}
                  className="px-8 py-4 bg-sky-950 hover:bg-sky-900 text-white font-bold rounded-sm text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
                  id="hero-book-btn"
                >
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Book Your Boat</span>
                </button>

                <button
                  onClick={() => onNavigate('fleet')}
                  className="px-8 py-4 border-2 border-sky-950 hover:bg-sky-950 hover:text-white text-sky-950 font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  id="hero-fleet-btn"
                >
                  <span>View Fleet & Rates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Social Proof & WhatsApp Quick Connect */}
              <div className="mt-10 pt-6 border-t border-sky-200/60 flex flex-wrap items-center justify-between gap-4 text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-sky-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-sky-800">5★</div>
                    <div className="w-8 h-8 rounded-full bg-sky-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-sky-900">MB</div>
                    <div className="w-8 h-8 rounded-full bg-sky-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">US</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-600">
                      500+ 5-Star Miami Charters
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello! I'd like to check boat rental availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (View.jpg & Quick Specs Card) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-sky-100 shadow-2xl bg-slate-900 group">
                <img
                  src={ASSET_IMAGES.yachtSkyline}
                  alt="Miami Yacht Skyline view from bow"
                  className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/20 to-transparent"></div>

                {/* Floating Vessel Spotlight Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-sky-100 flex items-center gap-2 text-xs font-bold text-sky-950">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
                  <span>Miami Biscayne Bay Waters</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                      Featured Luxury Flagship
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-sky-950">
                      45ft Sea Ray Sundancer Luxury Yacht
                    </h3>
                    <p className="text-xs text-slate-500">
                      Capacity: 13 Guests • Twin Cummins 480HP • Teak Bow Loungers
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onSelectBoat('sundancer-45');
                      onOpenBookingModal();
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
                  >
                    Reserve Flagship
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GEOMETRIC BALANCE FEATURE TRIO (Navy, White, Sky Blue Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="geometric-features-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Deep Navy (Certified Detailing & Cleaning) */}
          <div className="bg-sky-950 rounded-2xl p-7 text-white flex flex-col justify-between border border-sky-900 shadow-lg relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-sky-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-sky-300 border border-white/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 bg-sky-900 text-sky-300 text-[10px] font-bold rounded uppercase tracking-widest mb-2">
                Certified Partner
              </div>
              <h3 className="font-extrabold text-xl mb-2 text-white">
                Pristine Upholstery & Sanitization
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed">
                Every boat undergoes deep steam upholstery cleaning and antimicrobial sanitation before every charter by <strong>{BUSINESS_INFO.servicePartner}</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-sky-300">
              <span>View Before & After</span>
              <button
                onClick={() => onNavigate('care')}
                className="p-1 hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Crisp White (Instant Real-Time Booking) */}
          <div className="bg-white rounded-2xl p-7 border border-sky-100 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
            <div>
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6 text-sky-600 border border-sky-100">
                <Clock className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold rounded uppercase tracking-widest mb-2">
                Instant Availability
              </div>
              <h3 className="font-extrabold text-xl mb-2 text-sky-950">
                Direct WhatsApp & Online Booking
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero waiting or booking delays. Check availability, pick your custom time slot, and receive immediate WhatsApp confirmation at <strong>{BUSINESS_INFO.whatsapp}</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                Message on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Sky Blue (Flat Transparent Rates) */}
          <div className="bg-sky-500 rounded-2xl p-7 text-white flex flex-col justify-between shadow-xl shadow-sky-200/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 font-black text-2xl text-white">
                $
              </div>
              <div className="inline-block px-2.5 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded uppercase tracking-widest mb-2">
                No Hidden Surprises
              </div>
              <h3 className="font-extrabold text-xl mb-2 text-white">
                Transparent All-Inclusive Pricing
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Clear flat rates including USCG safety gear, Bluetooth audio, large ice coolers with ice, and floating mats. No surprise docking fees or captain surcharges.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white">
              <button
                onClick={() => onNavigate('pricing')}
                className="hover:underline flex items-center gap-1"
              >
                Explore Pricing Breakdown <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED FLEET PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="featured-fleet-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md">
              Handcrafted Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sky-950 mt-2">
              Our Miami Rental Fleet
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Choose from luxury motor yachts, high-performance bowriders, and spacious party pontoons.
            </p>
          </div>
          <button
            onClick={() => onNavigate('fleet')}
            className="self-start md:self-auto px-5 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <span>View All Boats</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_DATA.map((boat) => (
            <div
              key={boat.id}
              className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`boat-card-${boat.id}`}
            >
              <div>
                {/* Vessel Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-sky-950/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {boat.category}
                  </div>
                  {boat.popular && (
                    <div className="absolute top-3 right-3 bg-sky-500 text-white px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider shadow">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-sky-950 flex items-center gap-1 shadow">
                    <Users className="w-3.5 h-3.5 text-sky-600" />
                    <span>Up to {boat.capacity} Guests</span>
                  </div>
                </div>

                {/* Vessel Details */}
                <div className="p-5">
                  <h3 className="font-extrabold text-base text-sky-950 leading-snug mb-2 group-hover:text-sky-600 transition-colors">
                    {boat.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {boat.description}
                  </p>

                  <div className="space-y-1.5 mb-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      <span className="truncate">{boat.engine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      <span className="truncate">{boat.features[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & Booking Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Half Day (4 hrs)</span>
                  <span className="text-lg font-black text-sky-950">${boat.rateHalfDay}</span>
                </div>
                <button
                  onClick={() => {
                    onSelectBoat(boat.id);
                    onOpenBookingModal();
                  }}
                  className="px-4 py-2 bg-sky-950 hover:bg-sky-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Boat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BEFORE & AFTER VESSEL CARE SECTION (Mandatory Requirement) */}
      <section className="bg-sky-50/60 py-16 border-y border-sky-100" id="before-after-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-sky-200 text-sky-800 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Pristine Maintenance Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-sky-950">
              Interactive Before & After Vessel Detailing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We never compromise on hygiene. In official partnership with <strong>{BUSINESS_INFO.servicePartner}</strong>, every leather cushion, teak plank, and cabin fabric is clinically steam cleaned and sanitized.
            </p>
          </div>

          {/* Primary Interactive Comparison Slider */}
          <div className="max-w-4xl mx-auto mb-10">
            <BeforeAfterSlider item={BEFORE_AFTER_CASES[0]} />
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('care')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-sky-50 text-sky-900 border border-sky-300 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Explore All Detailing Standards & Gallery</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. POPULAR MIAMI CRUISING DESTINATIONS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="routes-snapshot-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md">
              Local Miami Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sky-950 mt-2">
              Top Boating Hotspots & Sandbars
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Custom curated routes for relaxing, partying, sightseeing, and sunset views.
            </p>
          </div>
          <button
            onClick={() => onNavigate('routes')}
            className="self-start md:self-auto px-5 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <span>Explore All Routes</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATION_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-sky-950/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{route.recommendedDuration}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-extrabold text-base text-sky-950 mb-1">
                    {route.name}
                  </h3>
                  <span className="text-xs text-sky-600 font-semibold block mb-3">
                    {route.tagline}
                  </span>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {route.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ideal For:
                </span>
                <span className="text-xs font-bold text-sky-900 bg-sky-50 px-2.5 py-1 rounded-md block truncate">
                  {route.bestFor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS & SOCIAL PROOF */}
      <section className="bg-gradient-to-b from-white to-sky-50/50 py-16 border-t border-sky-100" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-sky-950 mt-2">
              Loved by Miami Boaters
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Read authentic feedback from private celebrations, corporate charters, and family vacations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-sky-950">{t.name}</h4>
                    <span className="text-[11px] text-slate-400">{t.role} • {t.location}</span>
                  </div>
                  <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded">
                    {t.vessel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIGH CONVERSION WHATSAPP & DIRECT BOOKING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cta-banner-section">
        <div className="bg-sky-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-sky-900">
          <div className="relative z-10 max-w-3xl">
            <span className="px-3 py-1 bg-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-4 border border-sky-400/30">
              Ready for Biscayne Bay?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white mb-4">
              Book Your Miami Boat Rental Today
            </h2>
            <p className="text-sky-200 text-sm sm:text-base mb-8 leading-relaxed max-w-xl">
              Connect directly with our dockmaster on WhatsApp or book online in under 60 seconds. Same-day rentals and private captained charters available 7 days a week.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Boat Rental Miami! I'd like to book a boat today.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
              </a>

              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg transition-all cursor-pointer"
              >
                Reserve Online Now
              </button>

              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider border border-white/20 transition-all"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
