import { Boat, BeforeAfterItem, DestinationRoute, Testimonial } from '../types';

import yachtSkylineImg from '../assets/images/yacht_miami_skyline_1787788575286.jpg';
import fleetAerialImg from '../assets/images/fleet_aerial_view_1787788593860.jpg';
import docksideHutImg from '../assets/images/dockside_rental_hut_1787788618070.jpg';
import skiffTurquoiseImg from '../assets/images/skiff_boats_turquoise_1787788638224.jpg';
import upholsteryCleanImg from '../assets/images/boat_upholstery_clean_1787788657140.jpg';

export const ASSET_IMAGES = {
  yachtSkyline: yachtSkylineImg,
  fleetAerial: fleetAerialImg,
  docksideHut: docksideHutImg,
  skiffTurquoise: skiffTurquoiseImg,
  upholsteryClean: upholsteryCleanImg,
};

export const BUSINESS_INFO = {
  name: 'Boat Rental Miami',
  tagline: 'Miami Luxury Watercraft & Charter Experiences',
  address: 'Biscayne Marina, Miami, FL 33132',
  city: 'Miami, FL',
  whatsapp: '(786) 270-8811',
  whatsappRaw: '17862708811',
  phone: '(786) 270-8811',
  facebook: 'https://www.facebook.com/boat.rental.148',
  hours: 'Monday – Sunday: 7:00 AM – 8:30 PM (Sunset Charters Available)',
  servicePartner: 'Power Cleaning Upholstery & Carpet LLC',
  departurePoints: [
    'Downtown Miami Marina (Bayside)',
    'Miami Beach Marina (South Beach)',
    'Coconut Grove Pier Harbor',
    'Haulover Marine Center'
  ]
};

export const FLEET_DATA: Boat[] = [
  {
    id: 'sundancer-45',
    name: '45ft Sea Ray Sundancer Luxury Yacht',
    category: 'Luxury Yacht',
    length: '45 ft',
    capacity: 13,
    engine: 'Twin Cummins 480HP Diesels',
    topSpeed: '32 Knots',
    rateHalfDay: 1200,
    rateFullDay: 2200,
    rateHourly: 350,
    captainIncluded: true,
    fuelIncluded: true,
    popular: true,
    image: ASSET_IMAGES.yachtSkyline,
    features: [
      'Expansive Teak Sun Deck & Bow Loungers',
      'Air-Conditioned Master Cabin & Salon',
      'JL Audio Bluetooth 12-Speaker Sound',
      'Floating Lily Pad & Snorkel Sets Included',
      'Ice Cooler, Bottled Water & Soft Drinks',
      'USCG Certified Licensed Captain & Hostess'
    ],
    description: 'The pinnacle of Miami harbor elegance. Cruise past Star Island celebrity mansions or anchor at Nixon Sandbar with premium comforts, plush leather interiors, and unmatched hospitality.',
    inclusions: ['USCG Licensed Master Captain', 'Local Bay Fuel Included', 'Floating Water Mat & Inflatables', 'Premium Bluetooth Audio', 'Large Marine Ice Coolers', 'Bottled Water & Ice']
  },
  {
    id: 'regal-33',
    name: '33ft Regal Fastback Sport Bowrider',
    category: 'Sport Bowrider',
    length: '33 ft',
    capacity: 10,
    engine: 'Twin Volvo Penta 300HP V8s',
    topSpeed: '45 Knots',
    rateHalfDay: 750,
    rateFullDay: 1350,
    rateHourly: 220,
    captainIncluded: true,
    fuelIncluded: true,
    popular: true,
    image: ASSET_IMAGES.fleetAerial,
    features: [
      'Deep-V Hull for Smooth Biscayne Chops',
      'Wrap-Around Bow Seating with Shade Canopy',
      'Bluetooth Fusion Marine Subwoofer System',
      'Freshwater Shower & Electric Head (Toilet)',
      'Dual Swim Platforms with Telescoping Ladders'
    ],
    description: 'Fast, agile, and spacious. Engineered for cruising at speed across Biscayne Bay, island hopping, and celebrating birthdays or bachelor/bachelorette gatherings in style.',
    inclusions: ['Captain or Bareboat Qualified', 'Fuel for Standard Route', 'Cooler with Complimentary Ice', 'All USCG Approved Life Vests', 'Sound System with Phone Connect']
  },
  {
    id: 'boston-whaler-28',
    name: '28ft Boston Whaler Outrage Center Console',
    category: 'Center Console',
    length: '28 ft',
    capacity: 8,
    engine: 'Dual Mercury Verado 250HP',
    topSpeed: '50 Knots',
    rateHalfDay: 600,
    rateFullDay: 1100,
    rateHourly: 180,
    captainIncluded: false,
    fuelIncluded: false,
    image: ASSET_IMAGES.skiffTurquoise,
    features: [
      'Unsinkable Legend Hull Design',
      'Raymarine GPS/Depth Finder & Fishfinder',
      'T-Top Hardtop Sun Protection',
      'Live Bait Wells & Outrigger Mounts',
      'Forward Sun Lounging Cushions'
    ],
    description: 'The ultimate all-around Miami vessel. Perfect for exploring shallow sandbars, coastal cruising down to Key Biscayne, or offshore cruising with extreme safety and power.',
    inclusions: ['Garmin Chartplotter Navigation', 'Life Jackets for All Ages', 'Safety Briefing & Dockside Assist', 'Anchor & Mooring Lines', 'Cooler Storage']
  },
  {
    id: 'suntracker-26',
    name: '26ft SunTracker Regency Party Pontoon',
    category: 'Party Pontoon',
    length: '26 ft',
    capacity: 12,
    engine: 'Mercury 150HP FourStroke',
    topSpeed: '22 Knots',
    rateHalfDay: 480,
    rateFullDay: 850,
    rateHourly: 140,
    captainIncluded: false,
    fuelIncluded: true,
    image: ASSET_IMAGES.docksideHut,
    features: [
      'Ultra-Plush L-Lounge Sofa Seating',
      'Double Bimini Top for Full Boat Shade',
      'Built-in Wet Bar & Cup Holders Throughout',
      'Extra Wide Rear Boarding Ladder',
      'Heavy Duty Bluetooth Party Speaker'
    ],
    description: 'Ideal for relaxed family outings, sandbar celebrations, and leisurely sunset toasts. Ultra-stable, easy to navigate, and exceptionally comfortable for large groups.',
    inclusions: ['Full Fuel Tank Included', 'Giant 18ft Floating Foam Mat', 'Bluetooth Audio System', 'Dual Ice Chests', 'Bimini Canopy Shade']
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'leather-restoration',
    title: 'Luxury Marine Upholstery & Leather Deep Restoration',
    category: 'Interior Detailing',
    description: 'Marine sun exposure and saltwater spray create severe oxidation and stubborn stains. Our partnership with Power Cleaning Upholstery & Carpet LLC ensures every vessel is steam sanitized and conditioned prior to departure.',
    beforeLabel: 'Pre-Treatment / Salt & Sun Wear',
    afterLabel: 'Post-Restoration / Pristine White Sheen',
    beforeDetails: 'Discolored leather cushions, sunscreen residue, organic water spots, and matte oxidation across cockpit seating.',
    afterDetails: '100% steam-extracted, UV-conditioned marine vinyl with showroom gloss, hypoallergenic sanitization, and hydrophobic stain barrier.',
    beforeImage: ASSET_IMAGES.upholsteryClean,
    afterImage: ASSET_IMAGES.upholsteryClean,
    partner: 'Power Cleaning Upholstery & Carpet LLC'
  },
  {
    id: 'teak-deck-reconditioning',
    title: 'Teak Deck & Non-Skid Gelcoat Precision Clean',
    category: 'Deck Maintenance',
    description: 'Comprehensive high-pressure deck washing and teak brightening to guarantee slip-resistant footing and an immaculate aesthetic for luxury guests.',
    beforeLabel: 'Weathered Gray Patina & Footprints',
    afterLabel: 'Golden Honey Teak & Clean Gelcoat',
    beforeDetails: 'Weather-beaten gray wood grain, dock scuffs, and harbor dust accumulation from previous cruises.',
    afterDetails: 'Freshly stripped, neutralized, and golden-sealed teak planks paired with mirror-polished stainless cleats.',
    beforeImage: ASSET_IMAGES.yachtSkyline,
    afterImage: ASSET_IMAGES.yachtSkyline,
    partner: 'Power Cleaning Upholstery & Carpet LLC'
  },
  {
    id: 'cockpit-cabin-sanitization',
    title: 'Air-Conditioned Cabin & Carpet Extraction',
    category: 'Cabin Hygiene',
    description: 'Hospital-grade extraction on all interior marine carpets, stateroom mattresses, and head facilities with zero lingering odors.',
    beforeLabel: 'Humid Odors & Sand Infiltration',
    afterLabel: 'Fresh Ocean Scent & Pure Fabric',
    beforeDetails: 'High traffic sand residue, humidity dampness, and normal charter usage wear.',
    afterDetails: 'Deep hot-water extraction, antimicrobial ozone treatment, and flawless fabric texture.',
    beforeImage: ASSET_IMAGES.fleetAerial,
    afterImage: ASSET_IMAGES.fleetAerial,
    partner: 'Power Cleaning Upholstery & Carpet LLC'
  }
];

export const DESTINATION_ROUTES: DestinationRoute[] = [
  {
    id: 'star-island-millionaires-row',
    name: "Star Island & Millionaire's Row",
    tagline: 'Celebrity Architecture & Downtown Skyline',
    recommendedDuration: '2 to 4 Hours',
    distance: '8 Nautical Miles',
    highlights: [
      'Glide by celebrity mansions on Star, Palm, and Hibiscus Islands',
      'Spectacular views of Downtown Miami and PortMiami cruise liners',
      'Smooth, sheltered cruising waters protected from ocean swells'
    ],
    bestFor: 'Sightseeing, Photography, Romantic Sunsets',
    description: 'The quintessential Miami boating experience. Cruise past iconic historic estates and marvel at contemporary architectural masterpieces while enjoying your favorite playlist on the bay.',
    image: ASSET_IMAGES.yachtSkyline
  },
  {
    id: 'nixon-sandbar-key-biscayne',
    name: 'Nixon Sandbar & Key Biscayne',
    tagline: 'Shallow Waters, Water Toys & Social Raft-Ups',
    recommendedDuration: '4 to 8 Hours',
    distance: '14 Nautical Miles',
    highlights: [
      'Anchor in waist-deep, crystal clear 82°F turquoise water',
      'Roll out the floating lily pad and swim with wild marine life',
      'Vibrant social atmosphere with music and mingling yachts'
    ],
    bestFor: 'Parties, Swimming, All-Day Lounging',
    description: 'Located off Key Biscayne near the historic presidential compound, this legendary shallow sandbar is the premier destination to drop anchor, float on mats, and sip cool drinks.',
    image: ASSET_IMAGES.fleetAerial
  },
  {
    id: 'monument-island-flagler',
    name: 'Flagler Monument Island Beach & Picnic',
    tagline: 'Secluded Island Cove & White Sand Beaching',
    recommendedDuration: '3 to 6 Hours',
    distance: '6 Nautical Miles',
    highlights: [
      'Step directly off the bow onto the island sandy shores',
      'Walk up to the historic 110-foot Flagler stone obelisk monument',
      'Calm shallow lagoon ideal for paddleboarding and frisbee'
    ],
    bestFor: 'Family Gatherings, Picnics, Sunbathing',
    description: 'An uninhabited historic island right in Biscayne Bay between Miami Beach and Downtown. Anchor close to shore and enjoy private beach games and picnic setups.',
    image: ASSET_IMAGES.skiffTurquoise
  },
  {
    id: 'haulover-sandbar-north',
    name: 'Haulover Sandbar & Oleta River Mangroves',
    tagline: 'North Miami Sandbar Vibes & Eco-Cruising',
    recommendedDuration: '4 to 8 Hours',
    distance: '16 Nautical Miles',
    highlights: [
      'Miami’s most famous weekend sandbar gathering spot',
      'Floating food boats selling burgers, tacos, and fresh coconuts',
      'Peaceful mangrove side canals with manatee sightings'
    ],
    bestFor: 'Weekend Revelry, Food Boats, Adventure',
    description: 'World-renowned for its energy, Haulover Sandbar features crystal clear tides twice daily. Enjoy floating food boat treats delivered straight to your vessel.',
    image: ASSET_IMAGES.docksideHut
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus & Jessica Sterling',
    role: 'Anniversary Charter',
    location: 'Miami Beach, FL',
    rating: 5,
    comment: 'Booking through Boat Rental Miami was the highlight of our Miami vacation! Captain Anthony was courteous, the yacht was spotless from top to bottom (you can tell they take detailing seriously), and sunset over Star Island was breathtaking.',
    vessel: '45ft Sea Ray Sundancer',
    date: 'February 2026'
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Corporate Team Outing',
    location: 'Coral Gables, FL',
    rating: 5,
    comment: 'Seamless WhatsApp reservation and zero hidden fees. We rented two boats for our company celebration at Nixon Sandbar. Sound systems are insanely good and the boats look brand new.',
    vessel: '33ft Regal Fastback Sport',
    date: 'January 2026'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Bachelorette Party Organizer',
    location: 'New York / Miami',
    rating: 5,
    comment: 'The floating lily pad, cold ice cooler, and Bluetooth sound made our bachelorette party unforgettable. Communication on WhatsApp (786) 270-8811 was instant. 10/10 recommend!',
    vessel: '26ft SunTracker Regency',
    date: 'February 2026'
  }
];

export const FAQS = [
  {
    question: 'Do I need a boating license or captain to rent a boat?',
    answer: 'If you prefer to relax with zero stress, all our larger yachts come with an experienced USCG-licensed Master Captain. For self-drive vessels (under 30ft), Florida law requires anyone born on or after Jan 1, 1988 to possess a Florida Boating Safety Education ID Card or complete a quick temporary online certificate.'
  },
  {
    question: 'What is included with my boat rental?',
    answer: 'Every rental includes all required USCG safety gear (life jackets, flares, fire extinguishers), Bluetooth marine sound system, large marine ice coolers with complimentary ice and bottled water, floating water mat/lily pad, and docking assistance.'
  },
  {
    question: 'How do I confirm my reservation and what payment methods are accepted?',
    answer: 'You can start your reservation right here or message us directly on WhatsApp at (786) 270-8811. We accept major credit cards, Apple Pay, Zelle, and debit cards. A small deposit secures your preferred date and time slot.'
  },
  {
    question: 'What is your bad weather or rain guarantee?',
    answer: 'Safety is our #1 priority. In the event of severe inclement weather (lightning, high gale warnings, torrential storm systems) at the scheduled departure time, you can reschedule for any available future date at no charge or receive a full weather refund.'
  },
  {
    question: 'How are the boats cleaned between charters?',
    answer: 'We maintain the highest sanitation standards in South Florida. In proud partnership with Power Cleaning Upholstery & Carpet LLC, all marine seating, carpets, head facilities, and surfaces undergo deep steam extraction and antimicrobial disinfection before every voyage.'
  }
];
