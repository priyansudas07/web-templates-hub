import type { Experience, Education, Achievement } from '@/types/schema';

export const experience: Experience[] = [
  {
    id: 'exp-fullstack-dev',
    organization: 'Web Systems & Digital Solutions',
    roleTitle: 'Full-Stack Software Engineer',
    thematicRoleRank: 'Special Jounin Operative',
    location: 'Mumbai, India',
    startDate: '2025-01',
    isCurrent: true,
    summary: 'Architecting and shipping high-performance web templates, responsive component libraries, and interactive client applications.',
    responsibilities: [
      'Developed and optimized responsive web application frontends with React 19, TypeScript, and Tailwind CSS v4.',
      'Architected resilient client-side state models and hash-routing schemes for static edge delivery.',
      'Implemented fluid micro-interactions and tactile parallax showcases using Framer Motion.',
    ],
    techStackUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    associatedProjectIds: ['sports-gear'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-btech-cs',
    institution: 'University Technical Institute',
    degree: 'Bachelor of Technology (B.Tech)',
    fieldOfStudy: 'Computer Science & Engineering',
    location: 'India',
    startDate: '2022-08',
    isCurrent: true,
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Software Engineering Architecture',
    ],
    thematicAcademyLabel: 'Leaf Shinobi Academy // Senior Division',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-web-templates-hub',
    title: 'Web Templates Hub Creator',
    issuingBody: 'Open Source Community',
    dateAwarded: '2026-09',
    description: 'Designed and published modular, high-performance web templates showcasing modern frontend engineering.',
    proofUrl: 'https://github.com/priyansudas07/web-templates-hub',
    thematicTag: 'Scroll of Engineering Merit',
  },
];
