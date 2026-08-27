import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/boatsData';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Mail, Send, CheckCircle2, Facebook, Compass } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16" id="contact-view-container">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-3">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-sky-950 tracking-tight mb-4">
          Contact Boat Rental Miami
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Speak with our dockmaster, confirm same-day boat availability, or request special charter arrangements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Cards (Left Column) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct WhatsApp Callout */}
          <div className="bg-sky-950 text-white rounded-2xl p-7 border border-sky-900 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block mb-2">
                Fastest Response Time
              </span>
              <h3 className="text-2xl font-black text-white mb-2">
                Direct WhatsApp Hotline
              </h3>
              <p className="text-xs text-sky-200 mb-6 leading-relaxed">
                Message us 7 days a week for immediate photos, live slip locations, and custom charter estimates.
              </p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent("Hello! I'm contacting Boat Rental Miami via your website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp ({BUSINESS_INFO.whatsapp})</span>
              </a>
            </div>
          </div>

          {/* Business Details List */}
          <div className="bg-white rounded-2xl p-7 border border-sky-100 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-sky-950">Phone Number</h4>
                <p className="text-xs text-slate-600 mt-0.5">{BUSINESS_INFO.phone}</p>
                <span className="text-[11px] text-emerald-600 font-semibold">Available 7:00 AM – 8:30 PM EST</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <Facebook className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-sky-950">Official Facebook Page</h4>
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-600 hover:underline font-semibold block mt-0.5"
                >
                  facebook.com/boat.rental.148
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-sky-950">Primary Marina & Docks</h4>
                <p className="text-xs text-slate-600 mt-0.5">{BUSINESS_INFO.address}</p>
                <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                  {BUSINESS_INFO.departurePoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-sky-950">Certified Detailing Partner</h4>
                <p className="text-xs text-slate-600 mt-0.5">{BUSINESS_INFO.servicePartner}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Inquiry Form (Right Column) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-sky-100 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-sky-950 mb-2">Send an Online Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the details below and our reservations coordinator will reply within 30 minutes.
            </p>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center my-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-black text-emerald-950 text-lg mb-1">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-emerald-800 mb-4">
                  Thank you! We have logged your request and will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(786) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Target Charter Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event, number of guests, preferred departure marina, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sky-950 hover:bg-sky-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Send Inquiry to Dockmaster</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
