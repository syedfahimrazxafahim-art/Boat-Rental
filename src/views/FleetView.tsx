import React, { useState } from 'react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/boatsData';
import { Boat } from '../types';
import {
  Anchor,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface FleetViewProps {
  onSelectBoat: (boatId: string) => void;
  onOpenBookingModal: () => void;
}

export const FleetView: React.FC<FleetViewProps> = ({
  onSelectBoat,
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Luxury Yacht', 'Sport Bowrider', 'Center Console', 'Party Pontoon'];

  const filteredFleet = selectedCategory === 'All'
    ? FLEET_DATA
    : FLEET_DATA.filter((b) => b.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12" id="fleet-view-container">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-3">
          Miami Fleet Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-sky-950 tracking-tight mb-4">
          Charter Watercraft & Pricing
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Every boat in our fleet is meticulously sanitized and maintained with certified partner <strong>{BUSINESS_INFO.servicePartner}</strong>. Transparent half-day and full-day rates with no hidden fees.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-sky-100 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-sky-950 text-white shadow-md shadow-sky-950/20'
                : 'bg-sky-50 text-slate-700 hover:bg-sky-100 border border-sky-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Fleet Cards Grid */}
      <div className="space-y-10">
        {filteredFleet.map((boat, idx) => (
          <div
            key={boat.id}
            className="bg-white rounded-3xl border border-sky-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
            id={`detailed-boat-card-${boat.id}`}
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative bg-slate-900 overflow-hidden min-h-[320px]">
              <img
                src={boat.image}
                alt={boat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-sky-950/90 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                {boat.category}
              </div>
              {boat.popular && (
                <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded text-xs font-black uppercase tracking-wider shadow-lg">
                  Top Rated
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-sky-950 flex items-center gap-2 shadow-lg">
                <Users className="w-4 h-4 text-sky-600" />
                <span>Certified Capacity: {boat.capacity} Guests</span>
              </div>
            </div>

            {/* Content & Specs Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                    Vessel Specs: {boat.length} • {boat.engine}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    Max Speed: {boat.topSpeed}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-sky-950 mb-3">
                  {boat.name}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {boat.description}
                </p>

                {/* Key Vessel Inclusions Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Included Amenities & Equipment:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {boat.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & Booking Row */}
              <div className="pt-6 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 text-left w-full sm:w-auto">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">4 Hours (Half Day)</span>
                    <span className="text-2xl font-black text-sky-950">${boat.rateHalfDay}</span>
                  </div>
                  <div className="w-px h-8 bg-slate-200"></div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">8 Hours (Full Day)</span>
                    <span className="text-2xl font-black text-sky-950">${boat.rateFullDay}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello! I would like to inquire about booking the ${boat.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg transition-colors"
                    title="Direct WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>

                  <button
                    onClick={() => {
                      onSelectBoat(boat.id);
                      onOpenBookingModal();
                    }}
                    className="flex-1 sm:flex-none px-6 py-3.5 bg-sky-950 hover:bg-sky-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer"
                  >
                    Reserve This Boat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
