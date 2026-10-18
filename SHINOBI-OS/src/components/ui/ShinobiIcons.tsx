import React from 'react';

/**
 * KonohaSeal - The iconic Hidden Leaf Village spiral seal emblem.
 * Original geometric vector path licensed under MIT.
 */
export const KonohaSeal: React.FC<{ className?: string; strokeWidth?: number; title?: string }> = ({
  className = 'w-5 h-5',
  strokeWidth = 2,
  title = 'Hidden Leaf Emblem',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={title ? undefined : 'true'}
    role={title ? 'img' : 'presentation'}
  >
    {title && <title>{title}</title>}
    {/* Outer leaf arc sweeping around with sharp tip pointing to top-right */}
    <path
      d="M24 6 C29 6 36 9 39 14 C42 19 41 27 37 33 C33 39 25 42 18 40 C11 38 6 31 7 24 C8 17 14 11 21 10 C27 9 32 12 34 17 C36 22 34 27 30 30 C26 33 21 32 18 29 C15 26 16 21 19 19 C22 17 25 18 26 21 C27 24 25 26 23 26"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Leaf pointer tip and stem triangular wedge */}
    <path
      d="M39 14 L44 9 L39 7 Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * HitaiAtePlate - Forehead protector brushed metal plate badge with rivets.
 */
export const HitaiAtePlate: React.FC<{
  className?: string;
  sealColor?: string;
  label?: string;
}> = ({ className = '', sealColor = 'text-emerald-400', label }) => (
  <div
    className={`relative inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-b from-[#1C2333] via-[#131926] to-[#0D121D] border border-[#2D374D] rounded-sm shadow-inner shadow-black/60 ${className}`}
  >
    {/* Left metal rivets */}
    <div className="flex flex-col gap-1 justify-center -ml-1">
      <span className="w-1 h-1 rounded-full bg-slate-400/80 shadow-[0_0_1px_rgba(255,255,255,0.6)]" />
      <span className="w-1 h-1 rounded-full bg-slate-400/80 shadow-[0_0_1px_rgba(255,255,255,0.6)]" />
    </div>

    {/* Center Engraved Konoha Seal */}
    <KonohaSeal className={`w-4 h-4 ${sealColor} drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]`} />

    {label && (
      <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-200 uppercase">
        {label}
      </span>
    )}

    {/* Right metal rivets */}
    <div className="flex flex-col gap-1 justify-center -mr-1">
      <span className="w-1 h-1 rounded-full bg-slate-400/80 shadow-[0_0_1px_rgba(255,255,255,0.6)]" />
      <span className="w-1 h-1 rounded-full bg-slate-400/80 shadow-[0_0_1px_rgba(255,255,255,0.6)]" />
    </div>
  </div>
);

/**
 * ScrollIcon - Tactical shinobi mission scroll.
 */
export const ScrollIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    <path d="M8 21h12a2 2 0 0 0 2-2v-2H10a2 2 0 0 0-2 2Z" />
    <path d="M4 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14" />
    <line x1="8" y1="7" x2="14" y2="7" />
    <line x1="8" y1="11" x2="16" y2="11" />
  </svg>
);

/**
 * KunaiIcon - Shinobi tactical throwing blade.
 */
export const KunaiIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Blade */}
    <path d="M12 2 L16 8 L13 14 L11 14 L8 8 Z" fill="currentColor" fillOpacity="0.2" />
    {/* Handle / Tang */}
    <line x1="12" y1="14" x2="12" y2="19" strokeWidth="2" />
    {/* Ring Pommel */}
    <circle cx="12" cy="20.5" r="1.5" strokeWidth="1.5" />
  </svg>
);

/**
 * ShurikenIcon - 4-blade tactical throwing star.
 */
export const ShurikenIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <circle cx="12" cy="12" r="2" fill="#07080C" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/**
 * ChakraSpark - 4-point energy aura spark.
 */
export const ChakraSpark: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z" />
  </svg>
);

/**
 * InkanStamp - Japanese vermilion ink seal stamp for confidential dossiers.
 * Text options: "極秘" (Classified), "任務" (Mission), "印" (Seal), "済" (Verified).
 */
export const InkanStamp: React.FC<{
  text?: string;
  variant?: 'crimson' | 'amber' | 'emerald';
  className?: string;
}> = ({ text = '極秘', variant = 'crimson', className = '' }) => {
  const colorStyles = {
    crimson: 'text-rose-500 border-rose-600/70 bg-rose-950/20 shadow-[0_0_10px_rgba(244,63,94,0.15)]',
    amber: 'text-amber-400 border-amber-500/70 bg-amber-950/20 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    emerald: 'text-emerald-400 border-emerald-500/70 bg-emerald-950/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center justify-center px-1.5 py-0.5 border-2 rounded-sm font-serif font-black text-[10px] tracking-widest uppercase select-none transition-transform rotate-[-3deg] ${colorStyles} ${className}`}
      title={`Classified Seal: ${text}`}
      aria-label={`Classified Seal: ${text}`}
    >
      {text}
    </span>
  );
};

/**
 * BoltHardware - Subtle metal bolt / screw head for hardware frames.
 */
export const BoltHardware: React.FC<{ className?: string }> = ({ className = 'w-2 h-2' }) => (
  <span
    className={`inline-block rounded-full bg-slate-500/50 border border-slate-400/40 shadow-inner shadow-black/80 ${className}`}
    aria-hidden="true"
  />
);

/**
 * CornerBrackets - Engraved tactical corner brackets for dossiers & consoles.
 */
export const CornerBrackets: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}> = ({ position, className = 'text-slate-600' }) => {
  const posClasses = {
    tl: 'top-1 left-1 border-t-2 border-l-2',
    tr: 'top-1 right-1 border-t-2 border-r-2',
    bl: 'bottom-1 left-1 border-b-2 border-l-2',
    br: 'bottom-1 right-1 border-b-2 border-r-2',
  }[position];

  return (
    <span
      className={`absolute w-2 h-2 pointer-events-none transition-colors ${posClasses} ${className}`}
      aria-hidden="true"
    />
  );
};
