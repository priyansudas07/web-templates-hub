# Content Architecture & Data Schema Specification
# SHINOBI OS — Classified Shinobi Intelligence

---

## 1. Document Metadata & Context

| Attribute | Details |
| :--- | :--- |
| **Document Title** | Content Architecture & Data Schema Specification: SHINOBI OS |
| **Document ID** | SCHEMA-SHINOBI-001 |
| **Version** | 1.0.0 (Production Type Design Baseline) |
| **Status** | Approved for Technical Requirements (TRD) Specification |
| **Last Updated** | 2026-10-10 |
| **Author** | Senior Software Architect (TypeScript Data Modeling & Frontend Architecture) |
| **Primary References** | `SHINOBI-OS/docs/PRD.md` (v1.0.0), `SHINOBI-OS/docs/AppFlow.md` (v1.0.0), `SHINOBI-OS/docs/Design.md` (v1.0.0) |
| **Repository Path** | `SHINOBI-OS/docs/Schema.md` |

---

## 2. Content Architecture

### 2.1 Static, Data-Driven Modeling Strategy
SHINOBI OS operates as a purely client-side, zero-database application deployed on static edge infrastructure (Vercel, GitHub Pages, or Netlify). To ensure instantaneous page loads, zero runtime database latency, and deterministic compilation, all portfolio and system configuration data is structured as **strongly typed static TypeScript datasets**.

### 2.2 Separation of Concerns: Factual Data vs. Fictional Thematic Dressing
A critical architectural tenet of SHINOBI OS is the strict separation between verified professional career data and thematic anime storytelling wrappers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CONTENT SEPARATION MODEL                        │
├───────────────────────────────────┬────────────────────────────────────┤
│ FACTUAL REAL-WORLD DATA           │ THEMATIC SHINOBI PRESENTATION      │
│ (Strictly Verified, No Fiction)   │ (Atmospheric UI Shell & Metadata)  │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Real Full Name & Bio            │ • Ninja Registry / Operative Tag   │
│ • Verified Software Projects      │ • Mission Dossiers (S/A/B-Rank)    │
│ • Production Tech Stack           │ • Jutsu Archive (Ninjutsu, etc.)   │
│ • Real Degree & Academic Record   │ • Academy Scroll / Training Record │
│ • Employment & Internship Dates   │ • Shinobi Service Timeline         │
│ • Authentic PDF Resume Asset      │ • Declassified Intelligence Spec   │
│ • Real GitHub / LinkedIn / Email  │ • Tactical Communication Uplink    │
└───────────────────────────────────┴────────────────────────────────────┘
```

**Architectural Rule**: Fictional labels (e.g., `S-Rank Mission`, `Ninjutsu Mastery`) exist *exclusively* as display decorators or categorization mappings in UI presentation components. The raw underlying entities record concrete engineering facts (e.g., `flagship-project`, `frontend-core`, `degree: "B.Tech in Computer Science"`). Fictional claims must never corrupt authentic career records.

---

## 3. Entity Definitions & Domain Model

The domain model consists of 13 interconnected entities uniquely identified by stable kebab-case strings (e.g. `id: "project-samvad"`):

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     Profile     │───────│ SiteConfiguration│───────│ NavigationItem  │
└─────────────────┘       └─────────────────┘       └─────────────────┘
         │                         │
         ├─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     Project     │◄──────│      Skill      │       │   ResumeAsset   │
│ (Mission Dossier│       │ (Jutsu Archive) │       │ (PDF Document)  │
└─────────────────┘       └─────────────────┘       └─────────────────┘
         │                         │
         ▼                         ▼
┌─────────────────┐       ┌─────────────────┐
│   ProjectLink   │       │  SkillCategory  │
└─────────────────┘       └─────────────────┘
         │
         ├─────────────────────────┬─────────────────────────┐
         ▼                         ▼                         ▼
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   Experience    │       │    Education    │       │  Achievement &  │
│ (Work Timeline) │       │(Academic Record)│       │  Certification  │
└─────────────────┘       └─────────────────┘       └─────────────────┘
```

---

## 4. TypeScript Type Definitions

Below are the production-ready TypeScript interfaces governing all content entities.

```typescript
/**
 * Common primitive types and branded identifiers
 */
export type EntityId = string;
export type IsoDateString = string; // Format: "YYYY-MM" or "YYYY-MM-DD"
export type UrlString = string;     // Must be valid HTTP/HTTPS or mailto URI

// ============================================================================
// 1. DEVELOPER PROFILE ENTITY
// ============================================================================

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
  id: EntityId;                       // Stable unique ID, e.g., "samvad", "vdevpulse"
  title: string;                     // Real official project title
  codename?: string;                 // Thematic mission designation (e.g., "PROJECT: TSUSAN")
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
  thumbnailAsset?: string;           // Path to preview image in public/projects/
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
// 6. CONTACT & RESUME ASSETS
// ============================================================================

export interface ContactLink {
  type: 'email' | 'github' | 'linkedin' | 'x-twitter' | 'portfolio' | 'discord';
  label: string;                     // Display text (e.g., "GitHub Profile")
  value: string;                     // Raw email address or full URL
  isPrimary: boolean;
}

export interface ResumeAsset {
  fileName: string;                  // e.g., "Developer_Resume.pdf"
  fileSizeLabel: string;             // e.g., "140 KB"
  lastUpdated: IsoDateString;        // Date of resume revision
  assetPath: string;                 // Relative path in public directory (/assets/resume.pdf)
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
```

---

## 5. Detailed Validation Rules

To prevent data corruption, broken links, or visual failures, all content datasets must adhere to these build-time validation constraints:

| Entity Field | Validation Rule | Error Recovery Behavior |
| :--- | :--- | :--- |
| **Entity IDs** | Must be unique non-empty kebab-case strings matching `/^[a-z0-9-]+$/`. | Build error if duplicated; logs collision ID. |
| **External URLs** | Must be well-formed URIs starting with `https://` or `mailto:`. | If invalid, omit the link button; never render non-functional `href="#"`. |
| **Dates** | Must conform to ISO-8601 (`YYYY-MM` or `YYYY-MM-DD`). | If missing, render `"Present"` or `"Date Undisclosed"`. |
| **Mission Rank** | Must strictly equal `'S-Rank'`, `'A-Rank'`, or `'B-Rank'`. | Falls back to `'B-Rank'` default. |
| **Tech Stack Tags** | Non-empty array of strings. Maximum 12 tags per project. | Truncates to first 8 tags on cards; displays all in modal. |
| **Proficiency Tier**| Must strictly be `'Production Core'`, `'Proficient'`, or `'Familiar'`. | Falls back to `'Familiar'`. Zero numerical percentage bars permitted. |
| **Resume Asset** | `isAvailable` must be boolean. `assetPath` must exist in `/public`. | If missing, button disables with tooltip: `"Resume specimen currently under revision"`. |
| **Cross-References**| `associatedProjectIds` in skills must map to existing `Project.id`. | Ignores unmapped project IDs silently without crashing. |

---

## 6. Sample Content Datasets (Illustrative Placeholders)

> **Important**: The records below serve strictly as schema format illustrations. Real personal credentials, verified repository links, and production metrics will replace these placeholders during content ingestion.

### 6.1 Sample Developer Profile
```typescript
export const sampleProfile: Profile = {
  id: "profile-priyansu",
  fullName: "Priyansu Das",
  callsign: "SHINOBI-07",
  title: "Full-Stack Software Engineer & Frontend Architect",
  villageAffiliation: "Konohagakure // Digital Division",
  location: "Mumbai, India",
  bio: "Software engineer specialized in building high-performance web applications, resilient TypeScript architectures, and responsive user interfaces. Passionate about clean state machines, modular components, and fluid micro-interactions.",
  shortTagline: "ENGINEERING HIGH-FIDELITY WEB SYSTEMS & RESILIENT ARCHITECTURES",
  availabilityStatus: "available",
  avatarAsset: "/assets/profile/profile-avatar.webp",
  socialLinks: [
    { type: "github", label: "GitHub", value: "https://github.com/priyansudas07", isPrimary: true },
    { type: "linkedin", label: "LinkedIn", value: "https://linkedin.com/in/priyansudas", isPrimary: true },
    { type: "email", label: "Direct Transmission", value: "mailto:priyansudas273@gmail.com", isPrimary: true }
  ]
};
```

### 6.2 Sample Projects (Mission Dossiers)
```typescript
export const sampleProjects: Project[] = [
  {
    id: "sports-gear",
    title: "Sports Gear — Authentic Kit Vault",
    codename: "MISSION: VAULT-KAI",
    missionRank: "S-Rank",
    category: "full-stack",
    status: "production",
    summary: "Luxury digital sportswear catalog and interactive kit discovery platform engineered with React 19, Tailwind CSS v4, and WhatsApp concierge procurement.",
    problemStatement: "Traditional e-commerce templates are generic and clunky, causing friction for collectors seeking rare match-worn jerseys and authentic club grails.",
    approachDescription: "Engineered an editorial specimen showcase pairing cursor parallax and macro fabric inspection docks with zero-cart WhatsApp procurement.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Framer Motion"],
    links: [
      { type: "github", label: "GitHub Repository", url: "https://github.com/priyansudas07/web-templates-hub", isPrimary: true },
      { type: "live-demo", label: "Live Deployment", url: "https://sportsgear.in", isPrimary: true }
    ],
    metrics: [
      { label: "Build Time", value: "< 700ms", verified: true },
      { label: "Lighthouse Performance", value: "98/100", verified: true }
    ],
    featured: true,
    sortOrder: 1,
    thumbnailAsset: "/projects/sports-gear-thumb.webp",
    startDate: "2026-08",
    completionDate: "2026-09"
  },
  {
    id: "samvad",
    title: "SAMVAD — Real-Time Communications Engine",
    codename: "MISSION: SAMVAD-NET",
    missionRank: "S-Rank",
    category: "full-stack",
    status: "completed",
    summary: "Real-time collaborative messaging and signaling platform built for low-latency state synchronization across distributed clients.",
    problemStatement: "Modern collaborative apps struggle with reliable packet delivery over constrained networks without excessive server overhead.",
    approachDescription: "Implemented a custom WebSocket synchronization hub with optimistic client updates and automated offline reconnection buffers.",
    techStack: ["TypeScript", "Node.js", "WebSockets", "React", "Tailwind CSS"],
    links: [
      { type: "github", label: "Source Code", url: "https://github.com/priyansudas07", isPrimary: true }
    ],
    featured: true,
    sortOrder: 2,
    startDate: "2026-04",
    completionDate: "2026-06"
  },
  {
    id: "vdevpulse",
    title: "VDevPulse — Developer Telemetry Dashboard",
    codename: "MISSION: TELEMETRY-ZERO",
    missionRank: "A-Rank",
    category: "systems",
    status: "completed",
    summary: "Lightweight developer productivity and repository analytics monitor aggregating commit cadences, pull-request velocities, and code review throughput.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "REST APIs"],
    links: [
      { type: "github", label: "Source Code", url: "https://github.com/priyansudas07", isPrimary: true }
    ],
    featured: false,
    sortOrder: 3,
    startDate: "2026-02",
    completionDate: "2026-03"
  }
];
```

### 6.3 Sample Skills (Jutsu Archive)
```typescript
export const sampleSkills: Skill[] = [
  // Ninjutsu (Frontend Engineering)
  { id: "skill-typescript", name: "TypeScript", discipline: "ninjutsu", proficiency: "Production Core", highlighted: true, sortOrder: 1, associatedProjectIds: ["sports-gear", "samvad", "vdevpulse"] },
  { id: "skill-react", name: "React 19 / Next.js", discipline: "ninjutsu", proficiency: "Production Core", highlighted: true, sortOrder: 2, associatedProjectIds: ["sports-gear", "samvad"] },
  { id: "skill-tailwind", name: "Tailwind CSS v4", discipline: "ninjutsu", proficiency: "Production Core", highlighted: true, sortOrder: 3, associatedProjectIds: ["sports-gear", "samvad"] },
  { id: "skill-html-css", name: "Modern CSS / HTML5", discipline: "ninjutsu", proficiency: "Production Core", highlighted: false, sortOrder: 4 },

  // Taijutsu (Backend & Systems)
  { id: "skill-nodejs", name: "Node.js", discipline: "taijutsu", proficiency: "Production Core", highlighted: true, sortOrder: 5, associatedProjectIds: ["samvad"] },
  { id: "skill-python", name: "Python", discipline: "taijutsu", proficiency: "Proficient", highlighted: false, sortOrder: 6 },
  { id: "skill-rest-graphql", name: "REST & WebSockets", discipline: "taijutsu", proficiency: "Production Core", highlighted: true, sortOrder: 7, associatedProjectIds: ["samvad"] },
  { id: "skill-sql", name: "PostgreSQL / SQLite", discipline: "taijutsu", proficiency: "Proficient", highlighted: false, sortOrder: 8 },

  // Fuinjutsu (DevOps, Infrastructure & Security)
  { id: "skill-docker", name: "Docker", discipline: "fuinjutsu", proficiency: "Proficient", highlighted: true, sortOrder: 9 },
  { id: "skill-git-ci", name: "Git & GitHub Actions", discipline: "fuinjutsu", proficiency: "Production Core", highlighted: true, sortOrder: 10, associatedProjectIds: ["sports-gear"] },
  { id: "skill-linux", name: "Linux CLI & Scripting", discipline: "fuinjutsu", proficiency: "Proficient", highlighted: false, sortOrder: 11 },

  // Genjutsu (Creative Tech & 3D)
  { id: "skill-framer", name: "Framer Motion", discipline: "genjutsu", proficiency: "Production Core", highlighted: true, sortOrder: 12, associatedProjectIds: ["sports-gear"] },
  { id: "skill-canvas", name: "HTML5 Canvas / Shaders", discipline: "genjutsu", proficiency: "Familiar", highlighted: false, sortOrder: 13 },
  { id: "skill-figma", name: "UI/UX & Figma", discipline: "genjutsu", proficiency: "Proficient", highlighted: false, sortOrder: 14 }
];
```

---

## 7. Suggested Content Organization

When implementation begins, content files should be organized inside `src/data/` as clean, standalone TypeScript modules:

```
src/
└── data/
    ├── profile.ts            # Profile information & social links
    ├── projects.ts           # Mission dossiers (Projects array)
    ├── skills.ts             # Jutsu skills list & discipline categories
    ├── timeline.ts           # Work experience & education history
    ├── achievements.ts       # Hackathons, certifications, honors
    ├── siteConfig.ts         # Navigation items, theme defaults, resume paths
    └── index.ts              # Unified barrel export & schema validation helpers
```

**Why modular splitting?**
- Isolating each collection into its own file allows updating project descriptions or adding a new skill without modifying unrelated files.
- Zero bundle penalty: Vite bundles and tree-shakes static TypeScript modules with zero runtime overhead.

---

## 8. Privacy, Publication & Security Rules

1. **No Real PII (Personal Identifiable Information)**:
   - Private home addresses, phone numbers, or government identification numbers must never be included in the dataset.
   - Contact is mediated strictly through public professional email (`mailto:`) and verified social profiles (LinkedIn, GitHub).
2. **Confidentiality Protection**:
   - Proprietary client codebases or confidential employer architectures must be designated with `isConfidential: true`. Their entries describe high-level architecture without exposing private endpoints, credentials, or proprietary source code links.
3. **Fictional Classification Integrity**:
   - The thematic "Classified / ANBU" tags are purely artistic narrative devices.
   - The schema must never store or pretend to store genuine confidential secrets, access tokens, or private credentials in the client repository.

---

## 9. Schema Acceptance Criteria

- [ ] **Strict Typing**: All content entities satisfy TypeScript compilation under `strict: true` with zero `any` types.
- [ ] **Content / UI Decoupling**: Modifying any project title, description, or skill in `src/data/` updates the UI without requiring edits to component JSX or CSS.
- [ ] **Stable Identifiers**: Every record uses a predictable kebab-case string ID (`samvad`, `skill-typescript`).
- [ ] **Optional Field Resilience**: Omitting optional properties (`metrics`, `galleryAssets`, `credentialUrl`) renders cleanly without runtime `undefined` errors.
- [ ] **No Fabricated Benchmarks**: Every `ProjectMetric` requires an explicit `verified: true` flag; unverified performance metrics are prohibited.
- [ ] **URL Integrity**: All external project and social links validate against standard URI schemes (`https://`, `mailto:`).

---

## 10. Open Decisions for Technical Requirements (TRD)

The following architectural and data decisions are flagged for technical finalization in `TRD.md`:

1. **Validation Tooling Strategy** *(To be finalized in `TRD.md`)*:
   - *Option A*: Pure TypeScript compile-time type checking (zero runtime overhead, 0 KB bundle weight).
   - *Option B*: Lightweight Zod schema validation run during static build / unit tests (`npm run test:schema`).
   - *Recommendation*: Option B via Zod in build tests, ensuring zero runtime weight in production bundles.
2. **Resume PDF Storage Location** *(To be confirmed in `TRD.md`)*:
   - *Recommendation*: Store official ATS PDF in `public/assets/docs/Developer_Resume.pdf` with an explicit fallback state in `ResumeAsset.isAvailable`.

---
*End of Content Architecture & Data Schema Specification — SHINOBI OS*
