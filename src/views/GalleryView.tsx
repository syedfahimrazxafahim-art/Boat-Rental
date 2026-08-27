import React, { useState } from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/boatsData';
import { Sparkles, Maximize2, X, Eye, ShieldCheck, Waves } from 'lucide-react';

export const GalleryView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    caption: string;
    category: string;
  } | null>(null);

  const galleryItems = [
    {
      id: 'g1',
      title: 'Miami Skyline from 45ft Yacht Bow',
      category: 'Yacht Charters',
      url: ASSET_IMAGES.yachtSkyline,
      caption: 'Spectacular downtown Miami skyline views cruising along Biscayne Bay on our 45ft Sea Ray Sundancer sun deck.',
      tag: 'Biscayne Bay'
    },
    {
      id: 'g2',
      title: 'Fleet Aerial Formations on Turquoise Bay',
      category: 'Aerial Fleet',
      url: ASSET_IMAGES.fleetAerial,
      caption: 'Four high-performance motorboats and classic runabouts cruising in tandem across sapphire Miami waters.',
      tag: 'Fleet Formations'
    },
    {
      id: 'g3',
      title: 'Dockside Marina Rental Station & Skiff',
      category: 'Marina & Docks',
      url: ASSET_IMAGES.docksideHut,
      caption: 'Full-service departure docks, certified safety gear issuance, and utility watercraft boarding.',
      tag: 'Marina Dock'
    },
    {
      id: 'g4',
      title: 'Crystal Shallow Waters & Outboard Skiffs',
      category: 'Sandbars & Waters',
      url: ASSET_IMAGES.skiffTurquoise,
      caption: 'Exploring transparent turquoise sandbar coves and shallow Key Biscayne lagoons.',
      tag: 'Shallow Waters'
    },
    {
      id: 'g5',
      title: 'Steam Sanitized Marine Leather Restoration',
      category: 'Detailing & Care',
      url: ASSET_IMAGES.upholsteryClean,
      caption: 'Showroom finish upholstery restoration and hypoallergenic steam sanitization by Power Cleaning Upholstery & Carpet LLC.',
      tag: 'Certified Clean'
    }
  ];

  const categories = ['All', 'Yacht Charters', 'Aerial Fleet', 'Sandbars & Waters', 'Detailing & Care', 'Marina & Docks'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12" id="gallery-view-container">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-3">
          Visual Experience
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-sky-950 tracking-tight mb-4">
          Miami Charters & Fleet Gallery
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Authentic moments from our Biscayne Bay voyages, sandbar raft-ups, and certified detailing craft.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-sky-100 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-sky-950 text-white shadow-md'
                : 'bg-sky-50 text-slate-700 hover:bg-sky-100 border border-sky-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
          >
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

              <div className="absolute top-3 left-3 bg-sky-950/90 text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                {item.tag}
              </div>

              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-sky-950 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-sky-950 mb-1 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600 mt-3 block">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-slate-950 flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-black text-sky-950">{selectedImage.title}</h3>
                <p className="text-xs text-slate-600 mt-1 max-w-xl">{selectedImage.caption}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2.5 bg-sky-950 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-sky-900 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
