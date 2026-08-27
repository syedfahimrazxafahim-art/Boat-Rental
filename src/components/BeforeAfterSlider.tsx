import React, { useState, useRef, useCallback } from 'react';
import { BeforeAfterItem } from '../types';
import { ShieldCheck, Sparkles, SlidersHorizontal, Layers, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm overflow-hidden" id={`before-after-card-${item.id}`}>
      {/* Header & Category */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-widest rounded">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Marine Grade Hygiene
            </span>
          </div>
          <h3 className="text-xl font-bold text-sky-950">{item.title}</h3>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setViewMode('slider')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
              viewMode === 'slider'
                ? 'bg-white text-sky-950 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <SlidersHorizontal className="w-3 h-3 text-sky-500" />
            <span>Interactive Slider</span>
          </button>
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-white text-sky-950 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3 h-3 text-sky-500" />
            <span>Side-by-Side</span>
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        {item.description}
      </p>

      {/* Main Interactive Visual Frame */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-sky-200 bg-slate-900 group"
          id={`interactive-slider-${item.id}`}
        >
          {/* After Layer (Full Width Background) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={item.afterImage}
              alt={item.afterLabel}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* After Tag */}
            <div className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.afterLabel}</span>
            </div>
          </div>

          {/* Before Layer (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-2xl transition-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
              <img
                src={item.beforeImage}
                alt={item.beforeLabel}
                className="w-full h-full object-cover filter contrast-90 brightness-90 saturate-75"
                referrerPolicy="no-referrer"
              />
              {/* Before Tag */}
              <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-sm">
                <span>{item.beforeLabel}</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl flex items-center justify-center -translate-x-1/2 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-9 h-9 rounded-full bg-sky-500 border-2 border-white text-white flex items-center justify-center shadow-2xl scale-105 transition-transform">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Floating Instruction & Detailing Partner Ribbon */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg flex items-center gap-3 border border-sky-100 text-xs font-bold text-sky-950">
            <span className="text-[11px] text-sky-600 uppercase tracking-wide">Drag slider to compare</span>
            <div className="w-px h-3 bg-slate-300"></div>
            <span className="text-[11px] text-slate-600 font-semibold">{item.partner}</span>
          </div>
        </div>
      ) : (
        /* Side by Side Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Before Column */}
          <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <img
              src={item.beforeImage}
              alt={item.beforeLabel}
              className="w-full h-full object-cover filter contrast-90 brightness-90 saturate-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-slate-900/85 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {item.beforeLabel}
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-3 text-white text-xs">
              <p className="line-clamp-2">{item.beforeDetails}</p>
            </div>
          </div>

          {/* After Column */}
          <div className="relative h-64 rounded-xl overflow-hidden border-2 border-sky-400 bg-sky-50 shadow-md">
            <img
              src={item.afterImage}
              alt={item.afterLabel}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 bg-sky-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow">
              {item.afterLabel}
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-sky-950/90 via-sky-950/50 to-transparent p-3 text-white text-xs">
              <p className="line-clamp-2 text-sky-100">{item.afterDetails}</p>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Specifications Breakdown */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
        <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
          <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1">Pre-Charter Condition:</span>
          <p className="text-slate-700 leading-relaxed">{item.beforeDetails}</p>
        </div>
        <div className="bg-sky-50/70 p-3.5 rounded-lg border border-sky-200">
          <div className="flex items-center gap-1 font-bold text-sky-800 uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" /> Certified Pristine Detailing:
          </div>
          <p className="text-sky-950 leading-relaxed font-medium">{item.afterDetails}</p>
        </div>
      </div>
    </div>
  );
};
