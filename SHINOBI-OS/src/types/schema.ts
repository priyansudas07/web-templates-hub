/**
 * Core Domain Schema Types for SHINOBI OS
 * Authority: docs/Schema.md (v1.0.0)
 */

export type EntityId = string;
export type IsoDateString = string; // Format: "YYYY-MM" or "YYYY-MM-DD"
export type UrlString = string;     // Must be valid HTTP/HTTPS or mailto URI

// ============================================================================
// 1. DEVELOPER PROFILE ENTITY
// ============================================================================

export interface ContactLink {
  type: 'email' | 'github' | 'linkedin' | 'x-twitter' | 'portfolio' | 'discord';
  label: string;                     // Display text (e.g., "GitHub Profile")
  value: string;                     // Raw email address or full URL
  isPrimary: boolean;
}

export interface Profile {
  id: EntityId;                       // e.g., "profile-primary"
  fullName: string;                  // Real verified name
  callsign?: string;                 // Thematic moniker (e.g., "Shadow Operator")
  title: string;                     // Professional title (e.g., "Full-Stack Software Engineer")
  villageAffiliation: string;        // Thematic tag (e.g., "Hidden Leaf / Konohagakure")
  location: string;                  // Real geographic city/region (e.g., "Mumbai, India")
  bio: string;                       // High-impact career summary (1-3 paragraphs)
  shortTagline: string;              // Punchy 1-line headline for HUD top bar
  availabilityStatus: 'available' | 'employed' | 'seeking-opportunities' | 'consulting-only';
  avatarAsset?: string;              // Path to portrait/avatar image (SVG or WebP)
  socialLinks: ContactLink[];        // Verified professional profile links
}

// ============================================================================
// 2. PROJECT ENTITY (MISSION DOSSIER)
// ============================================================================

export type MissionRank = 'S-Rank' | 'A-Rank' | 'B-Rank';
export type ProjectCategory = 'full-stack' | 'frontend' | 'systems' | 'cli-tool' | 'mobile' | 'ai-ml';
export type ProjectStatus = 'production' | 'completed' | 'active-development' | 'archived';

export interface ProjectLink {
  type: 'github' | 'live-demo' | 'documentation' | 'npm' | 'docker' | 'case-study';
  label: string;                     // Display text (e.g., "Source Code", "Live Deployment")
  url: UrlString;                    // Validated external URL
  isPrimary?: boolean;               // Determines prominent button styling
}

export interface ProjectMetric {
  label: string;                     // e.g., "Lighthouse Score", "Test Coverage", "Bundle Size"
  value: string;                     // e.g., "98/100", "94%", "42 KB gzip"
  verified: boolean;                 // Flag ensuring metrics are measured, not guessed
}

export interface Project {
  id: EntityId;                       // Stable unique ID, e.g., "sports-gear", "samvad"
  title: string;                     // Real official project title
  codename?: string;                 // Thematic mission designation (e.g., "MISSION: VAULT-KAI")
  missionRank: MissionRank;          // S-Rank (Flagship), A-Rank (System/Library), B-Rank (Tool)
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;                   // Short high-impact description (max 200 chars)
  problemStatement?: string;         // Architectural context: What problem did this solve?
  approachDescription?: string;      // Solution write-up: Key architectural decisions
  techStack: string[];               // Array of exact technology names (e.g., ["React", "TypeScript"])
  links: ProjectLink[];              // Must include valid URLs; never empty or fictional
  metrics?: ProjectMetric[];         // Verified technical benchmarks only
  featured: boolean;                 // Displayed on top of mission directory
  sortOrder: number;                 // Numeric sort sequence
  thumbnailAsset?: string;           // Path to preview image in public/assets/projects/
  galleryAssets?: string[];          // Additional screenshot paths for inspection modal
  startDate?: IsoDateString;
  completionDate?: IsoDateString;
  isConfidential?: boolean;          // If true, source code links omitted gracefully
}

// ============================================================================
// 3. SKILL ENTITY (JUTSU ARCHIVE)
// ============================================================================

export type JutsuDiscipline = 
  | 'ninjutsu'   // Core Frontend, UI Frameworks, Client State
  | 'taijutsu'   // Core Programming Languages, Backend APIs, Databases
  | 'fuinjutsu'  // DevOps, Security, Cloud Infrastructure, Tooling
  | 'genjutsu';  // Creative Technology, 3D Canvas, Shaders, UI/UX Design

export type SkillProficiency = 'Production Core' | 'Proficient' | 'Familiar';

export interface SkillCategory {
  id: JutsuDiscipline;
  title: string;                     // Real discipline title (e.g., "Frontend & Client Engineering")
  thematicLabel: string;             // Display name (e.g., "Ninjutsu // Client Arts")
  description: string;               // Scope description
}

export interface Skill {
  id: EntityId;                       // e.g., "skill-typescript", "skill-react"
  name: string;                      // Real technology title (e.g., "TypeScript", "PostgreSQL")
  discipline: JutsuDiscipline;       // Categorization quadrant
  proficiency: SkillProficiency;     // Objective tier (No arbitrary percentages!)
  yearsExperience?: number;          // Only included when verified
  highlighted: boolean;              // Highlighted in quick terminal summary
  iconIdentifier?: string;           // Lucide icon or custom SVG identifier
  sortOrder: number;
  associatedProjectIds?: EntityId[]; // Project IDs demonstrating this skill
}

// ============================================================================
// 4. EXPERIENCE & EDUCATION (SHINOBI SERVICE RECORDS)
// ============================================================================

export interface Experience {
  id: EntityId;                       // e.g., "exp-company-role"
  organization: string;              // Real company, startup, or lab name
  roleTitle: string;                 // Real employment title (e.g., "Frontend Engineering Intern")
  thematicRoleRank?: string;         // Thematic tag (e.g., "Special Jounin Operative")
  location?: string;                 // Real city/remote status (e.g., "Remote / Bengaluru")
  startDate: IsoDateString;          // e.g., "2025-06"
  endDate?: IsoDateString;           // Omitted if current
  isCurrent: boolean;
  summary: string;                   // Concise role scope
  responsibilities: string[];        // Bulleted engineering contributions
  techStackUsed: string[];           // Technologies applied in this role
  organizationUrl?: UrlString;
  associatedProjectIds?: EntityId[];
}

export interface Education {
  id: EntityId;                       // e.g., "edu-university"
  institution: string;               // Real university or college name
  degree: string;                    // e.g., "Bachelor of Technology (B.Tech)"
  fieldOfStudy: string;              // e.g., "Computer Science & Engineering"
  location?: string;
  startDate: IsoDateString;
  endDate?: IsoDateString;
  isCurrent: boolean;
  gpaOrScore?: string;               // e.g., "8.8 / 10.0" (only when verified)
  relevantCoursework?: string[];     // Key academic subjects (Algorithms, Distributed Systems)
  thematicAcademyLabel?: string;     // Thematic tag (e.g., "Leaf Shinobi Academy")
}

// ============================================================================
// 5. ACHIEVEMENTS & CERTIFICATIONS
// ============================================================================

export interface Achievement {
  id: EntityId;                       // e.g., "ach-hackathon-2025"
  title: string;                     // Real competition or honor title
  issuingBody: string;               // e.g., "Smart India Hackathon", "Google Developer Group"
  dateAwarded: IsoDateString;
  description: string;
  proofUrl?: UrlString;              // Link to event, announcement, or certificate
  thematicTag?: string;              // e.g., "Scroll of Merit"
}

export interface Certification {
  id: EntityId;                       // e.g., "cert-aws-cloud-practitioner"
  name: string;                      // Real certification name
  issuer: string;                    // e.g., "Amazon Web Services", "Linux Foundation"
  dateIssued: IsoDateString;
  expirationDate?: IsoDateString;
  credentialId?: string;             // License / verification ID
  credentialUrl?: UrlString;         // Direct verification URL
  isVerified: boolean;
}

// ============================================================================
// 6. RESUME ASSET
// ============================================================================

export interface ResumeAsset {
  fileName: string;                  // e.g., "Developer_Resume.pdf"
  fileSizeLabel: string;             // e.g., "140 KB"
  lastUpdated: IsoDateString;        // Date of resume revision
  assetPath: string;                 // Relative path in public directory (/assets/docs/Developer_Resume.pdf)
  mimeType: 'application/pdf';
  isAvailable: boolean;              // If false, system indicates "Specimen Under Revision"
}

// ============================================================================
// 7. SITE CONFIGURATION & NAVIGATION
// ============================================================================

export interface NavigationItem {
  id: string;                        // e.g., "nav-terminal", "nav-missions"
  label: string;                     // e.g., "Missions"
  thematicCipher: string;            // e.g., "CODEX_02"
  routeHash: string;                 // e.g., "#missions"
  iconName: string;                  // Lucide icon identifier
  shortcutKey: string;               // e.g., "Alt+2"
  terminalCommand: string;           // e.g., "projects"
  sortOrder: number;
}

export interface SiteConfiguration {
  siteTitle: string;                 // e.g., "SHINOBI OS // Classified Shinobi Intelligence"
  metaDescription: string;
  developerHandle: string;           // e.g., "priyansu"
  defaultThemeAccent: 'leaf' | 'crimson' | 'chakra';
  enableCinematicAwakening: boolean; // Flag to enable/disable awakening intro
  enableSoundFx: boolean;            // Global sound enablement
  enableEasterEggAnbu: boolean;      // Toggles ANBU classified Easter egg
  secretAnbuCommand: string;         // Terminal code (e.g., "anbu")
  resumeConfig: ResumeAsset;
  navigationItems: NavigationItem[];
}
