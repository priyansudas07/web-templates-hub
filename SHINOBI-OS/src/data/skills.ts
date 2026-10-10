import type { Skill, SkillCategory } from '@/types/schema';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ninjutsu',
    title: 'Frontend & UI Engineering',
    thematicLabel: 'Ninjutsu // Client Arts',
    description: 'Modern reactive component architectures, design systems, and client state machines.',
  },
  {
    id: 'taijutsu',
    title: 'Languages & Backend Systems',
    thematicLabel: 'Taijutsu // Core Systems',
    description: 'Server runtimes, network protocols, REST APIs, WebSockets, and database persistence.',
  },
  {
    id: 'fuinjutsu',
    title: 'DevOps & Tooling Infrastructure',
    thematicLabel: 'Fuinjutsu // Sealing & Cloud',
    description: 'Containerization, continuous integration, version control, and edge deployment automation.',
  },
  {
    id: 'genjutsu',
    title: 'Creative Technology & Motion',
    thematicLabel: 'Genjutsu // Visual & 3D',
    description: 'Hardware-accelerated animations, Canvas/WebGL shaders, and high-fidelity interface design.',
  },
];

export const skills: Skill[] = [
  // Ninjutsu (Frontend)
  {
    id: 'skill-typescript',
    name: 'TypeScript',
    discipline: 'ninjutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 1,
    associatedProjectIds: ['sports-gear', 'samvad', 'vdevpulse'],
  },
  {
    id: 'skill-react',
    name: 'React 19 / Next.js',
    discipline: 'ninjutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 2,
    associatedProjectIds: ['sports-gear', 'samvad'],
  },
  {
    id: 'skill-tailwind',
    name: 'Tailwind CSS v4',
    discipline: 'ninjutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 3,
    associatedProjectIds: ['sports-gear', 'samvad'],
  },
  {
    id: 'skill-html-css',
    name: 'Modern CSS / HTML5',
    discipline: 'ninjutsu',
    proficiency: 'Production Core',
    highlighted: false,
    sortOrder: 4,
  },

  // Taijutsu (Backend & Systems)
  {
    id: 'skill-nodejs',
    name: 'Node.js',
    discipline: 'taijutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 5,
    associatedProjectIds: ['samvad'],
  },
  {
    id: 'skill-python',
    name: 'Python',
    discipline: 'taijutsu',
    proficiency: 'Proficient',
    highlighted: false,
    sortOrder: 6,
  },
  {
    id: 'skill-websockets',
    name: 'REST APIs & WebSockets',
    discipline: 'taijutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 7,
    associatedProjectIds: ['samvad'],
  },
  {
    id: 'skill-databases',
    name: 'PostgreSQL / SQL',
    discipline: 'taijutsu',
    proficiency: 'Proficient',
    highlighted: false,
    sortOrder: 8,
  },

  // Fuinjutsu (DevOps & Tooling)
  {
    id: 'skill-docker',
    name: 'Docker',
    discipline: 'fuinjutsu',
    proficiency: 'Proficient',
    highlighted: true,
    sortOrder: 9,
  },
  {
    id: 'skill-git',
    name: 'Git & GitHub Actions',
    discipline: 'fuinjutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 10,
    associatedProjectIds: ['sports-gear'],
  },
  {
    id: 'skill-linux',
    name: 'Linux Environment & Shell',
    discipline: 'fuinjutsu',
    proficiency: 'Proficient',
    highlighted: false,
    sortOrder: 11,
  },

  // Genjutsu (Creative Tech & Motion)
  {
    id: 'skill-framer',
    name: 'Framer Motion',
    discipline: 'genjutsu',
    proficiency: 'Production Core',
    highlighted: true,
    sortOrder: 12,
    associatedProjectIds: ['sports-gear'],
  },
  {
    id: 'skill-canvas',
    name: 'HTML5 Canvas & WebGL',
    discipline: 'genjutsu',
    proficiency: 'Familiar',
    highlighted: false,
    sortOrder: 13,
  },
  {
    id: 'skill-figma',
    name: 'Figma UI/UX Prototyping',
    discipline: 'genjutsu',
    proficiency: 'Proficient',
    highlighted: false,
    sortOrder: 14,
  },
];
