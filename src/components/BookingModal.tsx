import React, { useState } from 'react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/boatsData';
import { X, Calendar, Clock, Users, ShieldCheck, Check, MessageSquare, Anchor, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBoatId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedBoatId = FLEET_DATA[0].id,
}) => {
  const [vesselId, setVesselId] = useState(selectedBoatId);
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [duration, setDuration] = useState<'2_hours' | '4_hours' | '6_hours' | '8_hours'>('4_hours');
  const [guests, setGuests] = useState(6);
  const [captainOption, setCaptainOption] = useState<'licensed_captain' | 'bareboat_experienced'>('licensed_captain');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialOccasion, setSpecialOccasion] = useState('Casual Day on the Bay');
  const [waterToys, setWaterToys] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentVessel = FLEET_DATA.find((b) => b.id === vesselId) || FLEET_DATA[0];

  // Dynamic Price Calculation
  let baseRate = currentVessel.rateHalfDay;
  if (duration === '2_hours') {
    baseRate = (currentVessel.rateHourly || 250) * 2;
  } else if (duration === '4_hours') {
    baseRate = currentVessel.rateHalfDay;
  } else if (duration === '6_hours') {
    baseRate = Math.round(currentVessel.rateHalfDay + (currentVessel.rateFullDay - currentVessel.rateHalfDay) * 0.5);
  } else if (duration === '8_hours') {
    baseRate = currentVessel.rateFullDay;
  }

  const captainFee = captainOption === 'licensed_captain' && !currentVessel.captainIncluded ? 150 : 0;
  const waterToysFee = waterToys ? 0 : 0; // complimentary for prototype
  const estimatedTotal = baseRate + captainFee + waterToysFee;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const msg = `*NEW RESERVATION INQUIRY - BOAT RENTAL MIAMI*
• Vessel: ${currentVessel.name}
• Date: ${date}
• Time: ${timeSlot}
• Duration: ${duration.replace('_', ' ')}
• Guests: ${guests} passengers
• Captain: ${captainOption === 'licensed_captain' ? 'USCG Licensed Captain Requested' : 'Self-Drive (Bareboat Experienced)'}
• Occasion: ${specialOccasion}
• Estimated Total: $${estimatedTotal}
• Customer: ${fullName || 'Guest'} (${phone || 'Phone pending'})

Please confirm availability and booking deposit.`;
    return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto" id="booking-modal-overlay">
      <div className="bg-white rounded-2xl border border-sky-100 max-w-3xl w-full shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200" id="booking-modal-content">
        {/* Header */}
        <div className="bg-sky-950 px-6 py-4 text-white flex items-center justify-between border-b border-sky-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-wide text-white">Reserve Your Miami Watercraft</h2>
              <p className="text-xs text-sky-300">Instant direct booking with {BUSINESS_INFO.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors"
            id="close-booking-modal-btn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center" id="booking-success-state">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
              <Check className="w-8 h-8" />
            </div>
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-full">
              Inquiry Received
            </span>
            <h3 className="text-2xl font-black text-sky-950 mt-3 mb-2">Ready to Finalize Your Voyage!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-sky-950">{fullName || 'Captain'}</strong>. We have prepared your itinerary for the <strong>{currentVessel.name}</strong> on <strong>{date}</strong> at <strong>{timeSlot}</strong>.
            </p>

            {/* Quick Summary Card */}
            <div className="bg-sky-50 rounded-xl p-4 max-w-md mx-auto mb-6 border border-sky-200 text-left text-xs space-y-2">
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Vessel:</span>
                <span className="text-sky-900 font-bold">{currentVessel.name}</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Duration:</span>
                <span className="text-sky-900">{duration.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Estimated Rate:</span>
                <span className="text-emerald-700 font-black text-sm">${estimatedTotal}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp: {BUSINESS_INFO.whatsapp}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-xs uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="p-6 space-y-6" id="booking-reservation-form">
            {/* Step 1: Vessel Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                1. Select Watercraft
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FLEET_DATA.map((boat) => {
                  const isSelected = boat.id === vesselId;
                  return (
                    <button
                      type="button"
                      key={boat.id}
                      onClick={() => setVesselId(boat.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/70 ring-2 ring-sky-500/20 shadow-sm'
                          : 'border-slate-200 hover:border-sky-300 bg-white'
                      }`}
                    >
                      <img
                        src={boat.image}
                        alt={boat.name}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                          {boat.category}
                        </span>
                        <h4 className="text-xs font-bold text-sky-950 truncate">{boat.name}</h4>
                        <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                          <span>Up to {boat.capacity} guests</span>
                          <span className="font-extrabold text-sky-900">${boat.rateHalfDay}/4hrs</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Date, Time & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Departure Time
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="9:00 AM">9:00 AM (Morning Calm)</option>
                  <option value="10:00 AM">10:00 AM (Popular Sandbar)</option>
                  <option value="1:30 PM">1:30 PM (Afternoon Sun)</option>
                  <option value="4:30 PM">4:30 PM (Sunset Cruise)</option>
                  <option value="6:00 PM">6:00 PM (Twilight Tour)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Charter Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="2_hours">2 Hours (Express Harbor)</option>
                  <option value="4_hours">4 Hours (Half Day Standard)</option>
                  <option value="6_hours">6 Hours (Extended Cruise)</option>
                  <option value="8_hours">8 Hours (Full Day VIP)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Guests & Captain Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Number of Passengers (Max: {currentVessel.capacity})
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={currentVessel.capacity}
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="flex-1 accent-sky-500"
                  />
                  <span className="w-10 text-center font-black text-sm text-sky-950 bg-sky-50 px-2 py-1 rounded border border-sky-200">
                    {guests}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Captain Service
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCaptainOption('licensed_captain')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold text-center border transition-all cursor-pointer ${
                      captainOption === 'licensed_captain'
                        ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    Licensed Captain
                  </button>
                  <button
                    type="button"
                    onClick={() => setCaptainOption('bareboat_experienced')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold text-center border transition-all cursor-pointer ${
                      captainOption === 'bareboat_experienced'
                        ? 'bg-sky-500 text-white border-sky-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    Self-Drive
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(786) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Occasion
                </label>
                <select
                  value={specialOccasion}
                  onChange={(e) => setSpecialOccasion(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Casual Day on the Bay">Casual Day on the Bay</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Bachelorette / Bachelor Party">Bachelorette / Bachelor Party</option>
                  <option value="Anniversary / Romance">Anniversary / Romance</option>
                  <option value="Corporate / Client Entertainment">Corporate / Client Entertainment</option>
                </select>
              </div>
            </div>

            {/* Estimated Total Bar & Submit Button */}
            <div className="bg-sky-50 rounded-xl p-4 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 block">
                  Transparent Estimate (No Hidden Docking Fees)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-sky-950">${estimatedTotal}</span>
                  <span className="text-xs text-slate-500">
                    Includes sanitized boat prep & safety gear
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                  title="Direct WhatsApp Booking"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ({BUSINESS_INFO.whatsapp})</span>
                </a>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 py-3 bg-sky-950 hover:bg-sky-900 text-white rounded-lg font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
