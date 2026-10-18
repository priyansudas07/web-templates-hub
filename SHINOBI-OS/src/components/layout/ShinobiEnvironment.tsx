import React from 'react';
import { KonohaSeal } from '@/components/ui/ShinobiIcons';

/**
 * ShinobiEnvironment - Atmospheric background layer for SHINOBI OS.
 * Establishes a rich, restrained Hidden Leaf-inspired nighttime setting:
 * - Deep midnight-blue / indigo nocturnal sky with moonlit silver-emerald radial aura
 * - Crescent moon with soft celestial radiance safely positioned in the upper right sky
 * - Hokage Rock cliff face & mountain silhouettes rising high on the flanks to frame the workstation
 * - Layered traditional Japanese village pagoda rooftops, curved tile eaves, and watchtowers
 * - Warm glowing lantern lights in village paper windows
 * - Atmospheric mist banks rolling through the valley
 * - Sparse CSS wind-borne drifting leaf particles (respects prefers-reduced-motion)
 */
export const ShinobiEnvironment: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Blue / Indigo Sky Base */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#070C18] via-[#0D1527] to-[#060912]"
      />

      {/* 2. Moonlit Celestial Radiance Aura (Upper Right) */}
      <div
        className="absolute top-0 right-4 sm:right-12 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14)_0%,rgba(16,185,129,0.07)_35%,transparent_70%)] blur-3xl opacity-90"
      />

      {/* Subtle Moonbeam stream down-left */}
      <div
        className="absolute -top-10 right-24 w-[350px] h-[700px] bg-gradient-to-bl from-cyan-400/[0.06] via-emerald-400/[0.03] to-transparent transform -rotate-12 blur-2xl pointer-events-none"
      />

      {/* 3. Crescent Moon Silhouette with Soft Luminous Halo */}
      <div className="absolute top-20 right-8 sm:right-20 opacity-85 transition-opacity">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="moonGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="moonGradient" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </radialGradient>
          </defs>
          {/* Subtle outer moon halo */}
          <circle cx="28" cy="24" r="18" fill="#38BDF8" opacity="0.12" filter="url(#moonGlow)" />
          {/* Crescent Moon */}
          <path
            d="M34 8C23.5 8 15 16.5 15 27C15 37.5 23.5 46 34 46C27.5 44 21 36.5 21 27C21 17.5 27.5 10 34 8Z"
            fill="url(#moonGradient)"
            filter="url(#moonGlow)"
          />
        </svg>
      </div>

      {/* 4. Delicate Konoha Celestial Watermark in Upper Sky */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.035] text-emerald-300 rotate-[-15deg]">
        <KonohaSeal className="w-full h-full" strokeWidth={1} />
      </div>

      {/* 5. Full Environmental Canvas: Mountain Massif, Hokage Rock & Konoha Village Architecture */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Distant Mountain Ridge Gradient */}
            <linearGradient id="hokageCliffFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#223352" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#152136" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0B111E" stopOpacity="1" />
            </linearGradient>

            {/* Mid Mountain Crags Gradient (Hokage Face Monument Massif) */}
            <linearGradient id="hokageCliffMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A3F64" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#1B2942" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#0E1626" stopOpacity="1" />
            </linearGradient>

            {/* Traditional Pagoda & Rooftop Tier 1 Gradient */}
            <linearGradient id="villageTier1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B263C" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#0B101B" stopOpacity="1" />
            </linearGradient>

            {/* Foreground Village Eaves & Timber Gradient */}
            <linearGradient id="villageTier2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#121A2A" stopOpacity="0.99" />
              <stop offset="100%" stopColor="#070A11" stopOpacity="1" />
            </linearGradient>

            {/* Valley Mist Gradients */}
            <linearGradient id="mistHigh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0B1426" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="mistLow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#070A12" stopOpacity="0" />
            </linearGradient>

            {/* Lantern Glow Filter */}
            <filter id="lanternBloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* LAYER 1: Far Mountain Peaks Behind Hokage Monument */}
          <path
            d="
              M0,360 
              C80,310 140,210 220,240 
              C320,270 420,340 560,320 
              C700,300 800,340 920,310 
              C1060,280 1180,180 1300,210 
              C1370,230 1410,290 1440,330 
              L1440,900 L0,900 Z
            "
            fill="url(#hokageCliffFar)"
          />

          {/* Upper Valley Mist */}
          <rect x="0" y="290" width="1440" height="160" fill="url(#mistHigh)" />

          {/* LAYER 2: Hokage Rock Massif Silhouette (Distinctive Stone Cliff & Crags) */}
          <path
            d="
              M0,400 
              L40,370 L70,380 L110,320 L150,330 L180,270 L230,280 L260,250 L310,260 L360,330 L420,340 
              L480,380 L540,370 L600,350 L670,360 L730,340 L810,360 L870,350 L930,380 L990,360 
              L1050,330 L1100,340 L1150,300 L1200,310 L1250,260 L1310,270 L1360,330 L1410,320 L1440,370 
              L1440,900 L0,900 Z
            "
            fill="url(#hokageCliffMid)"
            stroke="#3B527E"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Mid Valley Mist */}
          <rect x="0" y="420" width="1440" height="150" fill="url(#mistLow)" />

          {/* LAYER 3: Midground Japanese Village Architecture (Pagodas, Traditional Rooflines & Watchtowers) */}
          <path
            d="
              M0,580 
              L20,580 L30,550 L50,550 L60,580 L90,580 
              /* Left Anbu Watchtower (Tiered pagoda eaves) */
              L100,530 L125,530 L130,490 L145,490 L150,450 L165,450 L170,410 L175,370 L180,370 L185,410 L190,450 L205,450 L210,490 L225,490 L230,530 L255,530 L265,580 
              L300,580 L315,550 L350,550 L365,580 L400,580 
              /* Left-Center Village Rooflines */
              L410,540 L425,540 L430,510 L455,510 L460,540 L475,580 
              L520,580 L540,560 L580,560 L600,580 
              L640,580 L660,540 L690,540 L710,580 
              /* Center Torii Gate Silhouettes */
              L750,580 L760,545 L770,545 L775,525 L795,525 L800,545 L810,545 L820,580
              L860,580 L875,555 L905,555 L920,580 
              /* Right-Center Village Residences */
              L960,580 L975,545 L1010,545 L1025,580 
              L1065,580 L1080,550 L1115,550 L1130,580 
              /* Right Grand Konoha Temple Pagoda (High tiered rooflines) */
              L1170,580 L1185,530 L1205,530 L1210,480 L1225,480 L1230,430 L1245,430 L1250,380 L1255,340 L1260,340 L1265,380 L1270,430 L1285,430 L1290,480 L1305,480 L1310,530 L1330,530 L1345,580 
              L1375,580 L1390,550 L1425,550 L1440,565 
              L1440,900 L0,900 Z
            "
            fill="url(#villageTier1)"
            stroke="#2A3854"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* LAYER 4: Foreground Layered Tile Eaves & Village Perimeter */}
          <path
            d="
              M0,680 
              L40,680 L55,650 L105,650 L120,680 L170,680 
              L185,640 L225,640 L240,680 L290,680 
              L310,655 L360,655 L380,680 L430,680 
              L450,635 L500,635 L520,680 L580,680 
              L600,660 L660,660 L680,680 L740,680 
              L760,645 L810,645 L830,680 L890,680 
              L910,635 L960,635 L980,680 L1040,680 
              L1060,655 L1120,655 L1140,680 L1200,680 
              L1220,645 L1270,645 L1290,680 L1350,680 
              L1370,660 L1440,660 
              L1440,900 L0,900 Z
            "
            fill="url(#villageTier2)"
            stroke="#1D2A40"
            strokeWidth="1"
            strokeOpacity="0.6"
          />

          {/* WARM VILLAGE LANTERNS & PAPER WINDOW EMBER LIGHTS */}
          {/* Left Watchtower lanterns */}
          <circle cx="178" cy="425" r="3" fill="#FEF08A" opacity="0.95" filter="url(#lanternBloom)" />
          <circle cx="152" cy="465" r="3.5" fill="#FBBF24" opacity="0.9" filter="url(#lanternBloom)" />
          <circle cx="198" cy="465" r="3.5" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="138" cy="505" r="3" fill="#FBBF24" opacity="0.8" filter="url(#lanternBloom)" />
          <circle cx="218" cy="505" r="3" fill="#F59E0B" opacity="0.8" filter="url(#lanternBloom)" />

          {/* Left village residences */}
          <circle cx="50" cy="565" r="2.5" fill="#FBBF24" opacity="0.8" filter="url(#lanternBloom)" />
          <circle cx="335" cy="565" r="3" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="442" cy="525" r="3" fill="#FEF08A" opacity="0.9" filter="url(#lanternBloom)" />
          <circle cx="560" cy="570" r="2.5" fill="#FBBF24" opacity="0.75" filter="url(#lanternBloom)" />
          <circle cx="675" cy="555" r="3" fill="#FDE047" opacity="0.9" filter="url(#lanternBloom)" />

          {/* Center street & Torii approach */}
          <circle cx="785" cy="555" r="3.5" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="890" cy="568" r="3" fill="#FBBF24" opacity="0.8" filter="url(#lanternBloom)" />

          {/* Right Grand Pagoda lanterns */}
          <circle cx="1258" cy="395" r="3" fill="#FEF08A" opacity="0.95" filter="url(#lanternBloom)" />
          <circle cx="1238" cy="445" r="3.5" fill="#FBBF24" opacity="0.9" filter="url(#lanternBloom)" />
          <circle cx="1278" cy="445" r="3.5" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="1218" cy="495" r="3" fill="#FEF08A" opacity="0.95" filter="url(#lanternBloom)" />
          <circle cx="1298" cy="495" r="3" fill="#FBBF24" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="1195" cy="545" r="3.5" fill="#F59E0B" opacity="0.8" filter="url(#lanternBloom)" />
          <circle cx="1320" cy="545" r="3.5" fill="#FBBF24" opacity="0.85" filter="url(#lanternBloom)" />

          {/* Right village residences */}
          <circle cx="990" cy="560" r="3" fill="#FBBF24" opacity="0.8" filter="url(#lanternBloom)" />
          <circle cx="1098" cy="565" r="3" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="1408" cy="565" r="3" fill="#FBBF24" opacity="0.8" filter="url(#lanternBloom)" />

          {/* Foreground street level lanterns */}
          <circle cx="80" cy="665" r="3" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
          <circle cx="205" cy="655" r="3.5" fill="#FBBF24" opacity="0.9" filter="url(#lanternBloom)" />
          <circle cx="475" cy="650" r="3" fill="#F59E0B" opacity="0.8" filter="url(#lanternBloom)" />
          <circle cx="785" cy="660" r="3.5" fill="#FBBF24" opacity="0.9" filter="url(#lanternBloom)" />
          <circle cx="935" cy="650" r="3" fill="#FEF08A" opacity="0.95" filter="url(#lanternBloom)" />
          <circle cx="1245" cy="660" r="3.5" fill="#F59E0B" opacity="0.85" filter="url(#lanternBloom)" />
        </svg>
      </div>

      {/* 6. Sparse Wind-Borne Drifting Foliage Leaves */}
      <div className="drifting-leaves-container absolute inset-0 overflow-hidden pointer-events-none">
        <span className="drifting-leaf leaf-1" />
        <span className="drifting-leaf leaf-2" />
        <span className="drifting-leaf leaf-3" />
        <span className="drifting-leaf leaf-4" />
        <span className="drifting-leaf leaf-5" />
      </div>

      {/* 7. Subtle Ambient Edge Vignette (Non-intrusive) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(4,6,10,0.5)_100%)]" />
    </div>
  );
};
