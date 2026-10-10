import type { Project } from '@/types/schema';

export const projects: Project[] = [
  {
    id: 'sports-gear',
    title: 'Sports Gear — Authentic Kit Vault',
    codename: 'MISSION: VAULT-KAI',
    missionRank: 'S-Rank',
    category: 'full-stack',
    status: 'production',
    summary: 'Luxury digital sportswear catalog and interactive kit discovery experience engineered with React 19, Tailwind CSS v4, and WhatsApp concierge procurement.',
    problemStatement: 'Generic e-commerce templates create friction for collectors seeking rare match-worn specimens and authentic kits.',
    approachDescription: 'Engineered an editorial specimen showcase pairing cursor parallax and macro fabric inspection docks with zero-cart WhatsApp procurement.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Framer Motion'],
    links: [
      {
        type: 'github',
        label: 'Source Repository',
        url: 'https://github.com/priyansudas07/web-templates-hub',
        isPrimary: true,
      },
      {
        type: 'live-demo',
        label: 'Live Deployment',
        url: 'https://sportsgear.in/',
        isPrimary: true,
      },
    ],
    metrics: [
      {
        label: 'Build Time',
        value: '< 500ms',
        verified: true,
      },
    ],
    featured: true,
    sortOrder: 1,
    thumbnailAsset: undefined,
  },
  {
    id: 'samvad',
    title: 'SAMVAD — Real-Time Communications Engine',
    codename: 'MISSION: SAMVAD-NET',
    missionRank: 'S-Rank',
    category: 'full-stack',
    status: 'completed',
    summary: 'Real-time collaborative messaging and signaling platform built for low-latency state synchronization across distributed clients.',
    problemStatement: 'Modern collaborative apps struggle with reliable packet delivery over constrained networks without excessive server overhead.',
    approachDescription: 'Implemented a custom WebSocket synchronization hub with optimistic client updates and automated offline reconnection buffers.',
    techStack: ['TypeScript', 'Node.js', 'WebSockets', 'React', 'Tailwind CSS'],
    links: [
      {
        type: 'github',
        label: 'Source Code',
        url: 'https://github.com/priyansudas07',
        isPrimary: true,
      },
    ],
    featured: true,
    sortOrder: 2,
    thumbnailAsset: undefined,
  },
  {
    id: 'vdevpulse',
    title: 'VDevPulse — Developer Telemetry Dashboard',
    codename: 'MISSION: TELEMETRY-ZERO',
    missionRank: 'A-Rank',
    category: 'systems',
    status: 'completed',
    summary: 'Lightweight developer productivity and repository analytics monitor aggregating commit cadences, pull-request velocities, and code review throughput.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'REST APIs'],
    links: [
      {
        type: 'github',
        label: 'Source Code',
        url: 'https://github.com/priyansudas07',
        isPrimary: true,
      },
    ],
    featured: false,
    sortOrder: 3,
    thumbnailAsset: undefined,
  },
];
