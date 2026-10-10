import { describe, it, expect } from 'vitest';
import {
  getProjectsByRank,
  getFeaturedProjects,
  getSkillsByDiscipline,
  getProjectById,
  getSkillById,
  projects,
  skills,
} from '../src/data/index';
import type { Project, Skill } from '../src/types/schema';

describe('Data Query Helpers & Resilience Guards (IMP-007)', () => {
  // 1. Empty arrays handling
  describe('Empty array handling', () => {
    it('returns empty array when projectList is empty', () => {
      const result = getProjectsByRank('S-Rank', []);
      expect(result).toEqual([]);
    });

    it('returns empty array for featured projects when projectList is empty', () => {
      const result = getFeaturedProjects([]);
      expect(result).toEqual([]);
    });

    it('returns empty array when skillList is empty', () => {
      const result = getSkillsByDiscipline('ninjutsu', []);
      expect(result).toEqual([]);
    });
  });

  // 2. Missing optional properties
  describe('Missing optional properties', () => {
    it('handles projects with missing optional metrics, problemStatement, and sortOrder safely', () => {
      const minimalProjects: Project[] = [
        {
          id: 'min-1',
          title: 'Minimal Project',
          missionRank: 'B-Rank',
          category: 'cli-tool',
          status: 'completed',
          summary: 'A minimal project representation without optional fields.',
          techStack: ['TypeScript'],
          links: [{ type: 'github', label: 'GitHub', url: 'https://github.com' }],
          featured: false,
          sortOrder: 10,
        },
      ];

      const result = getProjectsByRank('B-Rank', minimalProjects);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('min-1');
      expect(result[0].metrics).toBeUndefined();
    });

    it('handles skills with missing optional yearsExperience or associatedProjectIds', () => {
      const minimalSkills: Skill[] = [
        {
          id: 'min-skill',
          name: 'Minimal Skill',
          discipline: 'taijutsu',
          proficiency: 'Familiar',
          highlighted: false,
          sortOrder: 1,
        },
      ];

      const result = getSkillsByDiscipline('taijutsu', minimalSkills);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('min-skill');
      expect(result[0].yearsExperience).toBeUndefined();
      expect(result[0].associatedProjectIds).toBeUndefined();
    });
  });

  // 3. Projects with and without ranks
  describe('Project rank filtering', () => {
    it('filters specifically by S-Rank, A-Rank, and B-Rank', () => {
      const sRankProjects = getProjectsByRank('S-Rank');
      expect(sRankProjects.length).toBeGreaterThan(0);
      sRankProjects.forEach((p) => {
        expect(p.missionRank).toBe('S-Rank');
      });

      const aRankProjects = getProjectsByRank('A-Rank');
      expect(aRankProjects.length).toBeGreaterThan(0);
      aRankProjects.forEach((p) => {
        expect(p.missionRank).toBe('A-Rank');
      });
    });

    it('returns all sorted projects when rank is omitted', () => {
      const allProjects = getProjectsByRank(undefined);
      expect(allProjects.length).toBe(projects.length);
    });
  });

  // 4. Featured and non-featured projects
  describe('Featured projects filtering', () => {
    it('returns only projects where featured is true, ordered by sortOrder', () => {
      const featured = getFeaturedProjects();
      expect(featured.length).toBeGreaterThan(0);
      featured.forEach((p) => {
        expect(p.featured).toBe(true);
      });

      for (let i = 0; i < featured.length - 1; i++) {
        expect(featured[i].sortOrder).toBeLessThanOrEqual(featured[i + 1].sortOrder);
      }
    });
  });

  // 5. Skills by discipline quadrant
  describe('Skills discipline filtering', () => {
    it('returns skills strictly matching requested discipline', () => {
      const ninjutsu = getSkillsByDiscipline('ninjutsu');
      expect(ninjutsu.length).toBeGreaterThan(0);
      ninjutsu.forEach((s) => {
        expect(s.discipline).toBe('ninjutsu');
      });

      const taijutsu = getSkillsByDiscipline('taijutsu');
      expect(taijutsu.length).toBeGreaterThan(0);
      taijutsu.forEach((s) => {
        expect(s.discipline).toBe('taijutsu');
      });
    });

    it('returns empty array if invalid or empty discipline string is provided', () => {
      // @ts-expect-error Testing runtime resilience against invalid inputs
      const result = getSkillsByDiscipline('');
      expect(result).toEqual([]);
    });
  });

  // 6. Immutability: confirmation that query helpers do not mutate input arrays
  describe('Immutability guarantee', () => {
    it('does not mutate the source project array when filtering and sorting', () => {
      const sampleList: Project[] = [
        {
          id: 'proj-b',
          title: 'Project B',
          missionRank: 'S-Rank',
          category: 'frontend',
          status: 'production',
          summary: 'Summary B',
          techStack: ['React'],
          links: [],
          featured: true,
          sortOrder: 2,
        },
        {
          id: 'proj-a',
          title: 'Project A',
          missionRank: 'S-Rank',
          category: 'frontend',
          status: 'production',
          summary: 'Summary A',
          techStack: ['React'],
          links: [],
          featured: true,
          sortOrder: 1,
        },
      ];

      const frozenList = Object.freeze([...sampleList]);
      const initialFirstId = frozenList[0].id;

      const result = getProjectsByRank('S-Rank', frozenList);

      // Result is sorted (proj-a first, then proj-b)
      expect(result[0].id).toBe('proj-a');
      expect(result[1].id).toBe('proj-b');

      // Original list was not mutated
      expect(frozenList[0].id).toBe(initialFirstId);
    });

    it('does not mutate the source skill array when filtering and sorting', () => {
      const sampleSkills: Skill[] = [
        {
          id: 'skill-2',
          name: 'Skill 2',
          discipline: 'ninjutsu',
          proficiency: 'Proficient',
          highlighted: false,
          sortOrder: 2,
        },
        {
          id: 'skill-1',
          name: 'Skill 1',
          discipline: 'ninjutsu',
          proficiency: 'Production Core',
          highlighted: true,
          sortOrder: 1,
        },
      ];

      const frozenSkills = Object.freeze([...sampleSkills]);
      const result = getSkillsByDiscipline('ninjutsu', frozenSkills);

      expect(result[0].id).toBe('skill-1');
      expect(result[1].id).toBe('skill-2');
      expect(frozenSkills[0].id).toBe('skill-2');
    });
  });

  // 7. Single ID Lookups
  describe('ID Lookup helpers', () => {
    it('finds existing project by ID or returns undefined for unknown ID', () => {
      const found = getProjectById('sports-gear');
      expect(found).toBeDefined();
      expect(found?.title).toContain('Sports Gear');

      const notFound = getProjectById('unknown-project-xyz');
      expect(notFound).toBeUndefined();
    });

    it('finds existing skill by ID or returns undefined for unknown ID', () => {
      const found = getSkillById('skill-typescript');
      expect(found).toBeDefined();
      expect(found?.name).toBe('TypeScript');

      const notFound = getSkillById('unknown-skill-xyz');
      expect(notFound).toBeUndefined();
    });
  });
});
