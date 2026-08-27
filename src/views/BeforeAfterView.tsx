import React from 'react';
import { BEFORE_AFTER_CASES, BUSINESS_INFO } from '../data/boatsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Wind,
  CheckCircle2,
  Phone,
  MessageSquare,
  Award,
  BadgeCheck
} from 'lucide-react';

interface BeforeAfterViewProps {
  onOpenBookingModal: () => void;
}

export const BeforeAfterView: React.FC<BeforeAfterViewProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16" id="before-after-view-container">
      {/* Header Banner */}
      <div className="bg-sky-950 rounded-3xl p-8 sm:p-12 text-white border border-sky-900 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-md uppercase tracking-widest mb-4 border border-sky-400/30">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Certified Detailing Partnership</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            Vessel Care & Restoration Standard
          </h1>

          <p className="text-sky-200 text-sm sm:text-base leading-relaxed mb-6">
            In exclusive collaboration with <strong className="text-white underline decoration-sky-400">{BUSINESS_INFO.servicePartner}</strong>, every vessel in our Miami fleet undergoes hospital-grade steam extraction, UV vinyl conditioning, and teak rejuvenation before every charter departure.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-sky-100 pt-4 border-t border-sky-900/80">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-sky-400" />
              <span>100% Steam Sanitized</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-sky-400" />
              <span>Marine UV Shield</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-sky-400" />
              <span>Odor & Sand Extracted</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-sky-400" />
              <span>Teak Brightening</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sliders Section */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-2">
            Interactive Comparison Showcase
          </span>
          <h2 className="text-3xl font-black text-sky-950">
            Slide to Inspect Restoration Results
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Drag the slider handle on any vessel card below to inspect the transformation before and after treatment by {BUSINESS_INFO.servicePartner}.
          </p>
        </div>

        <div className="space-y-10">
          {BEFORE_AFTER_CASES.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Detailing 4-Stage Protocol Grid */}
      <section className="bg-sky-50/70 rounded-3xl p-8 sm:p-12 border border-sky-100">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="px-3 py-1 bg-white text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md border border-sky-200 shadow-sm inline-block mb-2">
            Protocol Breakdown
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-sky-950">
            Our 4-Stage Pre-Charter Protocol
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4">
              01
            </div>
            <h4 className="font-extrabold text-base text-sky-950 mb-2">Steam Extraction</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              210°F pressurized steam breaks down sunscreen buildup, body oils, and stubborn saltwater mineral deposits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4">
              02
            </div>
            <h4 className="font-extrabold text-base text-sky-950 mb-2">UV Condition & Seal</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aerospace-grade vinyl conditioners restore suppleness, prevent sun cracking, and leave a non-greasy satin finish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4">
              03
            </div>
            <h4 className="font-extrabold text-base text-sky-950 mb-2">Teak Deck Brightening</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gentle two-part cleaning lifts gray weathered grain without stripping delicate wood fibers, revealing natural golden honey warmth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4">
              04
            </div>
            <h4 className="font-extrabold text-base text-sky-950 mb-2">Antimicrobial Fogging</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hospitality-grade sanitizing mist purifies all cabin compartments, heads, and galley fixtures with zero residue.
            </p>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <div className="text-center bg-white rounded-2xl border border-sky-100 p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h3 className="text-xl font-bold text-sky-950">Experience the difference on Biscayne Bay</h3>
          <p className="text-xs text-slate-500">Book your sanitized, certified charter with confidence today.</p>
        </div>
        <button
          onClick={onOpenBookingModal}
          className="px-6 py-3 bg-sky-950 hover:bg-sky-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer"
        >
          Book Clean Charter
        </button>
      </div>
    </div>
  );
};
