// Polymind Knowledge Atom Logo Component
// V5 - Final Logo Design with Keplerian Orbital Animations
// Electrons move faster near nucleus, slower at far ends (like real gravity)

import { useMemo } from 'react';

interface PolymindLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  variant?: 'full' | 'simple' | 'flat';
  animated?: boolean;
}

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
  '2xl': 128,
};

// Kepler-style easing: slow at far ends, fast near center
// keySplines for ease-in-out effect on each arc segment
const keplerSpline = "0.42 0 0.58 1";

export function PolymindLogo({ size = 'md', className = '', variant = 'full', animated = true }: PolymindLogoProps) {
  const dimension = sizeMap[size];

  // Stable unique ID for this component instance
  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), []);

  if (variant === 'flat') {
    // Flat variant - simpler, single color
    return (
      <svg
        viewBox="0 0 64 64"
        width={dimension}
        height={dimension}
        className={className}
        fill="#F59E0B"
      >
        {/* Orbital rings */}
        <ellipse cx="32" cy="32" rx="22" ry="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-20 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(40 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(100 32 32)" />

        {/* Core */}
        <circle cx="32" cy="32" r="6" fill="currentColor" />

        {/* Electrons following elliptical paths with Kepler easing */}
        <g transform="translate(32 32) rotate(-20)">
          <circle r="3" fill="currentColor">
            {animated && (
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M22,0 A22,8 0 0,1 -22,0 A22,8 0 0,1 22,0"
              />
            )}
          </circle>
        </g>
        <g transform="translate(32 32) rotate(40)">
          <circle r="3" fill="currentColor">
            {animated && (
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M-22,0 A22,8 0 0,0 22,0 A22,8 0 0,0 -22,0"
              />
            )}
          </circle>
        </g>
        <g transform="translate(32 32) rotate(100)">
          <circle r="3" fill="currentColor">
            {animated && (
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M22,0 A22,8 0 0,1 -22,0 A22,8 0 0,1 22,0"
              />
            )}
          </circle>
        </g>
      </svg>
    );
  }

  if (variant === 'simple') {
    // Simple variant - used in navbar/headers
    return (
      <svg viewBox="0 0 128 128" width={dimension} height={dimension} className={className}>
        <defs>
          <linearGradient id={`goldSimple-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* Orbital rings */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          <ellipse cx="64" cy="64" rx="45" ry="15" stroke={`url(#goldSimple-${uid})`} transform="rotate(-20 64 64)" opacity="0.8" />
          <ellipse cx="64" cy="64" rx="45" ry="15" stroke="#F59E0B" transform="rotate(40 64 64)" opacity="0.8" />
          <ellipse cx="64" cy="64" rx="45" ry="15" stroke={`url(#goldSimple-${uid})`} transform="rotate(100 64 64)" opacity="0.8" />
        </g>

        {/* Core with pulse */}
        <circle cx="64" cy="64" r="12" fill="#0A0A0B" stroke="#F59E0B" strokeWidth="2" />
        <circle cx="64" cy="64" r="5" fill="#FDE68A">
          {animated && (
            <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
          )}
        </circle>

        {/* Electron 1 - Orbit 1 with Kepler motion */}
        <g transform="translate(64 64) rotate(-20)">
          <circle r="5" fill="#FCD34D">
            {animated && (
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M45,0 A45,15 0 0,1 -45,0 A45,15 0 0,1 45,0"
              />
            )}
          </circle>
        </g>

        {/* Electron 2 - Orbit 2 with Kepler motion (reverse) */}
        <g transform="translate(64 64) rotate(40)">
          <circle r="5" fill="#F59E0B">
            {animated && (
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M-45,0 A45,15 0 0,0 45,0 A45,15 0 0,0 -45,0"
              />
            )}
          </circle>
        </g>

        {/* Electron 3 - Orbit 3 with Kepler motion */}
        <g transform="translate(64 64) rotate(100)">
          <circle r="5" fill="#FCD34D">
            {animated && (
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M45,0 A45,15 0 0,1 -45,0 A45,15 0 0,1 45,0"
              />
            )}
          </circle>
        </g>
      </svg>
    );
  }

  // Full variant with all effects and Keplerian animations
  return (
    <svg viewBox="0 0 512 512" width={dimension} height={dimension} className={className}>
      <defs>
        <linearGradient id={`gold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id={`gold2-${uid}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id={`glow-${uid}`}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`coreGlow-${uid}`}>
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Orbital rings */}
      <g fill="none" strokeWidth="3" strokeLinecap="round">
        <ellipse cx="256" cy="256" rx="180" ry="60" stroke={`url(#gold-${uid})`} transform="rotate(-20 256 256)" opacity="0.8" filter={`url(#glow-${uid})`} />
        <ellipse cx="256" cy="256" rx="180" ry="60" stroke={`url(#gold2-${uid})`} transform="rotate(40 256 256)" opacity="0.8" filter={`url(#glow-${uid})`} />
        <ellipse cx="256" cy="256" rx="180" ry="60" stroke={`url(#gold-${uid})`} transform="rotate(100 256 256)" opacity="0.8" filter={`url(#glow-${uid})`} />
      </g>

      {/* Core */}
      <circle cx="256" cy="256" r="50" fill="#0A0A0B" stroke={`url(#gold-${uid})`} strokeWidth="4" filter={`url(#coreGlow-${uid})`} />
      <circle cx="256" cy="256" r="30" fill={`url(#gold-${uid})`} opacity="0.3" />
      <circle cx="256" cy="256" r="16" fill="#FDE68A" filter={`url(#coreGlow-${uid})`}>
        {animated && (
          <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" />
        )}
      </circle>

      {/* Electrons with Keplerian orbital motion */}
      <g filter={`url(#glow-${uid})`}>
        {/* Orbit 1 electrons (-20 deg) */}
        <g transform="translate(256 256) rotate(-20)">
          <circle r="10" fill="#FCD34D">
            {animated && (
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M180,0 A180,60 0 0,1 -180,0 A180,60 0 0,1 180,0"
              />
            )}
          </circle>
          <circle r="8" fill="#F59E0B">
            {animated && (
              <animateMotion
                dur="4.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                begin="-2.25s"
                path="M180,0 A180,60 0 0,1 -180,0 A180,60 0 0,1 180,0"
              />
            )}
          </circle>
        </g>

        {/* Orbit 2 electrons (40 deg) - reverse direction */}
        <g transform="translate(256 256) rotate(40)">
          <circle r="10" fill="#F59E0B">
            {animated && (
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M-180,0 A180,60 0 0,0 180,0 A180,60 0 0,0 -180,0"
              />
            )}
          </circle>
          <circle r="8" fill="#FCD34D">
            {animated && (
              <animateMotion
                dur="5.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                begin="-2.75s"
                path="M-180,0 A180,60 0 0,0 180,0 A180,60 0 0,0 -180,0"
              />
            )}
          </circle>
        </g>

        {/* Orbit 3 electrons (100 deg) */}
        <g transform="translate(256 256) rotate(100)">
          <circle r="10" fill="#FCD34D">
            {animated && (
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                path="M180,0 A180,60 0 0,1 -180,0 A180,60 0 0,1 180,0"
              />
            )}
          </circle>
          <circle r="8" fill="#D97706">
            {animated && (
              <animateMotion
                dur="6.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.5; 1"
                keySplines={`${keplerSpline}; ${keplerSpline}`}
                begin="-3.25s"
                path="M180,0 A180,60 0 0,1 -180,0 A180,60 0 0,1 180,0"
              />
            )}
          </circle>
        </g>
      </g>
    </svg>
  );
}

export function PolymindWordmark({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  const fontSizes = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl', xl: 'text-4xl' };

  return (
    <span className={`font-display font-bold tracking-wider text-white ${fontSizes[size]} ${className}`}>
      POLYMIND
    </span>
  );
}

export function PolymindBrand({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const logoSizes = { sm: 'sm' as const, md: 'md' as const, lg: 'lg' as const };
  const textSizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' };
  const gaps = { sm: 'gap-2', md: 'gap-3', lg: 'gap-4' };

  return (
    <div className={`flex items-center ${gaps[size]} ${className}`}>
      <PolymindLogo size={logoSizes[size]} variant="simple" />
      <span className={`font-display font-bold tracking-wider text-white ${textSizes[size]}`}>
        POLYMIND
      </span>
    </div>
  );
}

export default PolymindLogo;
