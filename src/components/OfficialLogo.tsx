import React from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'footer';
  showText?: boolean;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28',
  };

  const isDark = variant === 'dark' || variant === 'footer';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="official-brand-logo">
      {/* Official Vector Logo matching LOGO.jpg proportions and visual elements */}
      <div className={`relative aspect-square ${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Outer Circle Halo */}
          <circle cx="250" cy="200" r="160" stroke="#CBD5E1" strokeWidth="14" fill="none" opacity="0.8" />
          
          {/* Gradient Circle Backdrop */}
          <defs>
            <linearGradient id="skyCircleGrad" x1="250" y1="100" x2="250" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="yachtHullGrad" x1="100" y1="120" x2="440" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0077CC" />
            </linearGradient>
          </defs>

          {/* Lower Sky Blue Circle Segment */}
          <path
            d="M 120 220 A 150 150 0 0 0 380 220 Z"
            fill="url(#skyCircleGrad)"
          />

          {/* Dynamic Yacht Hull & Bow Swoosh cutting through the circle */}
          <path
            d="M 60 270 Q 230 180 470 70 L 380 160 Q 240 235 90 280 Z"
            fill="url(#yachtHullGrad)"
          />
          <path
            d="M 130 200 Q 240 145 320 80 Q 220 130 110 240 Z"
            fill="#0369A1"
          />

          {/* Palm Tree on the Left */}
          {/* Trunk */}
          <path
            d="M 105 255 Q 75 200 65 145 Q 69 146 71 150 Q 80 195 110 250 Z"
            fill="#0369A1"
          />
          {/* Palm Fronds */}
          <path
            d="M 65 145 C 50 125 15 130 5 140 C 20 145 45 148 65 145 Z"
            fill="#0369A1"
          />
          <path
            d="M 65 145 C 40 105 10 110 0 118 C 20 128 50 138 65 145 Z"
            fill="#0284C7"
          />
          <path
            d="M 65 145 C 50 95 30 80 15 85 C 30 105 55 125 65 145 Z"
            fill="#0369A1"
          />
          <path
            d="M 65 145 C 70 85 90 75 105 80 C 95 105 80 128 65 145 Z"
            fill="#0284C7"
          />
          <path
            d="M 65 145 C 90 100 115 110 125 120 C 105 130 85 140 65 145 Z"
            fill="#0369A1"
          />
          <path
            d="M 65 145 C 95 130 125 145 130 160 C 105 155 85 150 65 145 Z"
            fill="#0284C7"
          />

          {/* Typography inside the Logo Asset */}
          {/* "BOAT RENTAL" text */}
          <text
            x="250"
            y="395"
            textAnchor="middle"
            fontFamily="'Montserrat', 'Plus Jakarta Sans', sans-serif"
            fontSize="48"
            fontWeight="700"
            letterSpacing="6"
            fill="#0284C7"
          >
            BOAT RENTAL
          </text>

          {/* "Miami" in Elegant Signature Script */}
          <text
            x="270"
            y="470"
            textAnchor="middle"
            fontFamily="'Playfair Display', 'Brush Script MT', cursive, serif"
            fontStyle="italic"
            fontSize="78"
            fontWeight="700"
            letterSpacing="1"
            fill="#0F2847"
          >
            Miami
          </text>

          {/* Underline Bar */}
          <rect x="140" y="482" width="220" height="7" rx="3.5" fill="#0F2847" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span className={`font-extrabold tracking-wider text-base uppercase ${isDark ? 'text-white' : 'text-sky-950'}`}>
            Boat Rental
          </span>
          <span className="font-serif italic font-bold text-sky-500 tracking-wide text-xs">
            Miami Luxury Fleet
          </span>
        </div>
      )}
    </div>
  );
};
