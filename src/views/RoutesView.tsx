import React from 'react';
import { DESTINATION_ROUTES, BUSINESS_INFO } from '../data/boatsData';
import { MapPin, Clock, Navigation, Compass, CheckCircle2, Waves, Anchor, ArrowRight } from 'lucide-react';

interface RoutesViewProps {
  onOpenBookingModal: () => void;
}

export const RoutesView: React.FC<RoutesViewProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16" id="routes-view-container">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-3">
          Miami Boating Itineraries
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-sky-950 tracking-tight mb-4">
          Cruising Routes & Sandbar Destinations
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          From celebrity estate tours along Star Island to the turquoise social waters of Nixon Sandbar, explore our captain-curated itineraries across Biscayne Bay.
        </p>
      </div>

      {/* Routes Detailed Cards */}
      <div className="space-y-10">
        {DESTINATION_ROUTES.map((route, index) => (
          <div
            key={route.id}
            className="bg-white rounded-3xl border border-sky-100 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
            id={`route-card-${route.id}`}
          >
            {/* Visual Column */}
            <div className="lg:col-span-5 relative bg-slate-900 overflow-hidden min-h-[300px]">
              <img
                src={route.image}
                alt={route.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-sky-950/90 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Destination {index + 1}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-sky-950 flex items-center justify-between shadow-lg">
                <span className="flex items-center gap-1 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-sky-500" /> {route.recommendedDuration}
                </span>
                <span className="flex items-center gap-1 text-sky-700">
                  <Navigation className="w-3.5 h-3.5" /> {route.distance}
                </span>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-1">
                  {route.tagline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-sky-950 mb-3">
                  {route.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {route.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Route Highlights & Landmarks:
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    {route.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-sky-50/50 p-2.5 rounded-lg border border-sky-100">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Best Suited For:</span>
                  <span className="text-xs font-bold text-sky-950 bg-slate-100 px-3 py-1 rounded-md inline-block mt-0.5">
                    {route.bestFor}
                  </span>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="w-full sm:w-auto px-6 py-3 bg-sky-950 hover:bg-sky-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Anchor className="w-3.5 h-3.5 text-sky-400" />
                  <span>Book This Itinerary</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
