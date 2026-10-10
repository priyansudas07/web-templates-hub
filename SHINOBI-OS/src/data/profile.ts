import type { Profile } from '@/types/schema';

export const profile: Profile = {
  id: 'profile-primary',
  fullName: 'Priyansu Das',
  callsign: 'SHINOBI-07',
  title: 'Full-Stack Software Engineer & Frontend Architect',
  villageAffiliation: 'Konohagakure // Digital Division',
  location: 'Mumbai, India',
  bio: 'Software engineer specialized in building high-performance web applications, resilient TypeScript architectures, and responsive user interfaces. Passionate about clean state machines, modular components, and fluid micro-interactions.',
  shortTagline: 'ENGINEERING HIGH-FIDELITY WEB SYSTEMS & RESILIENT ARCHITECTURES',
  availabilityStatus: 'available',
  // Avatar left optional until user supplies public/assets/profile/profile-avatar.webp
  avatarAsset: undefined,
  socialLinks: [
    {
      type: 'github',
      label: 'GitHub',
      value: 'https://github.com/priyansudas07',
      isPrimary: true,
    },
    {
      type: 'email',
      label: 'Direct Email',
      value: 'mailto:priyansudas273@gmail.com',
      isPrimary: true,
    },
    {
      type: 'portfolio',
      label: 'Repository Hub',
      value: 'https://github.com/priyansudas07/web-templates-hub',
      isPrimary: false,
    },
  ],
};
