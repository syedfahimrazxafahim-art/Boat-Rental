export type NavPage = 'home' | 'fleet' | 'care' | 'gallery' | 'pricing' | 'routes' | 'booking' | 'contact';

export interface Boat {
  id: string;
  name: string;
  category: 'Luxury Yacht' | 'Sport Bowrider' | 'Center Console' | 'Deck Cruiser' | 'Party Pontoon';
  length: string;
  capacity: number;
  engine: string;
  topSpeed: string;
  rateHalfDay: number; // 4 hrs
  rateFullDay: number; // 8 hrs
  rateHourly?: number;
  captainIncluded: boolean;
  fuelIncluded: boolean;
  image: string;
  features: string[];
  description: string;
  inclusions: string[];
  popular?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDetails: string;
  afterDetails: string;
  beforeImage: string;
  afterImage: string;
  partner: string;
}

export interface DestinationRoute {
  id: string;
  name: string;
  tagline: string;
  recommendedDuration: string;
  distance: string;
  highlights: string[];
  bestFor: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  vessel: string;
  date: string;
}

export interface BookingFormData {
  vesselId: string;
  date: string;
  timeSlot: string;
  duration: '2_hours' | '4_hours' | '6_hours' | '8_hours';
  guests: number;
  captainOption: 'licensed_captain' | 'bareboat_experienced';
  fullName: string;
  phone: string;
  email: string;
  specialOccasion: string;
  addOns: string[];
  additionalNotes: string;
}
