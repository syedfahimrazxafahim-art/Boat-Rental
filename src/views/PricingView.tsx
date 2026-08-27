import React, { useState } from 'react';
import { FLEET_DATA, FAQS, BUSINESS_INFO } from '../data/boatsData';
import { CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, DollarSign, Calendar, MessageSquare, Anchor, HelpCircle } from 'lucide-react';

interface PricingViewProps {
  onOpenBookingModal: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenBookingModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const addOns = [
    { name: '18ft Giant Floating Foam Water Mat', price: 'Included Free', desc: 'Complimentary on all 4hr+ charters for lounging on shallow sandbars.' },
    { name: 'Seabob Underwater Jet Scooter', price: '$250 / voyage', desc: 'High-speed electric water sled for effortless snorkeling and diving.' },
    { name: 'Gourmet Miami Charcuterie & Fruit Board', price: '$120 / platter', desc: 'Artisanal cheeses, prosciutto, fresh berries, nuts, and gourmet crackers.' },
    { name: 'Premium Champagne Toast Package', price: '$95 / bottle', desc: 'Chilled Veuve Clicquot or Moët served in crystal acrylic stemware.' },
    { name: 'Licensed USCG Master Captain Fee', price: '$150 / 4hrs', desc: 'Required on larger yachts, optional on self-drive qualified vessels.' },
    { name: 'Paddleboard (SUP) Add-On', price: '$60 / rental', desc: 'Rigid inflatable paddleboard with lightweight adjustable carbon paddle.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16" id="pricing-view-container">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-3">
          Clear & Direct Rates
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-sky-950 tracking-tight mb-4">
          Transparent Charter Pricing
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          No surprise boarding fees, hidden docking charges, or unexpected extras. All prices include clean prep and standard safety equipment.
        </p>
      </div>

      {/* Pricing Matrix Table */}
      <div className="bg-white rounded-3xl border border-sky-100 shadow-xl overflow-hidden">
        <div className="bg-sky-950 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-sky-400" />
            <h2 className="text-sm font-black uppercase tracking-wider">Miami Fleet Rate Comparison</h2>
          </div>
          <span className="text-xs text-sky-300 font-semibold hidden sm:inline">
            7 Days a Week Availability
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                <th className="p-4 sm:p-5">Vessel Name</th>
                <th className="p-4 sm:p-5">Max Guests</th>
                <th className="p-4 sm:p-5">Half Day (4h)</th>
                <th className="p-4 sm:p-5">Full Day (8h)</th>
                <th className="p-4 sm:p-5">Captain Policy</th>
                <th className="p-4 sm:p-5 text-right">Reservation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {FLEET_DATA.map((boat) => (
                <tr key={boat.id} className="hover:bg-sky-50/40 transition-colors">
                  <td className="p-4 sm:p-5">
                    <div className="font-extrabold text-sm text-sky-950">{boat.name}</div>
                    <span className="text-[10px] text-sky-600 font-bold uppercase tracking-wider">{boat.category}</span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">{boat.capacity} Passengers</td>
                  <td className="p-4 sm:p-5 font-black text-sky-950 text-sm">${boat.rateHalfDay}</td>
                  <td className="p-4 sm:p-5 font-black text-sky-950 text-sm">${boat.rateFullDay}</td>
                  <td className="p-4 sm:p-5">
                    {boat.captainIncluded ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Captain Included
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full font-semibold text-[11px]">
                        Captain or Self-Drive
                      </span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <button
                      onClick={onOpenBookingModal}
                      className="px-4 py-2 bg-sky-950 hover:bg-sky-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add-Ons Section */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-2">
            Enhance Your Experience
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-sky-950">
            Custom Add-On Packages
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((add, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-sm text-sky-950">{add.name}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{add.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black text-sky-600">{add.price}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Select in Checkout</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="bg-sky-50/60 rounded-3xl p-8 sm:p-12 border border-sky-100">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-sky-200 text-sky-800 text-xs font-bold rounded-md uppercase tracking-widest mb-2 shadow-sm">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>Got Questions?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-sky-950">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-sky-950 hover:text-sky-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-sky-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact CTA */}
      <div className="bg-sky-950 text-white rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-xl">
        <h3 className="text-xl font-bold mb-2">Need a custom charter quote or multi-day booking?</h3>
        <p className="text-xs text-sky-200 mb-6">We provide customized corporate events, film shoots, and multi-vessel raft-ups.</p>
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello! I'd like a custom charter quote.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp: {BUSINESS_INFO.whatsapp}</span>
        </a>
      </div>
    </div>
  );
};
