/**
 * Unified Static Data Registry & Query Helpers
 * Authority: docs/Schema.md (v1.0.0) & docs/TRD.md (v1.0.0)
 */

import { profile } from './profile';
import { projects } from './projects';
import { skills, skillCategories } from './skills';
import { experience, education, achievements } from './timeline';
import { siteConfig } from './siteConfig';
import type { Project, Skill, MissionRank, JutsuDiscipline } from '@/types/schema';

// Export all static datasets
export { profile, projects, skills, skillCategories, experience, education, achievements, siteConfig };

/**
 * Filter projects by mission rank without mutating the input array.
 * If rank is omitted or undefined, returns all projects sorted by sortOrder.
 */
export function getProjectsByRank(
  rank?: MissionRank,
  projectList: readonly Project[] = projects
): Project[] {
  if (!Array.isArray(projectList) || projectList.length === 0) {
    return [];
  }

  const listCopy = [...projectList];
  const filtered = rank
    ? listCopy.filter((project) => project && project.missionRank === rank)
    : listCopy;

  return filtered.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

/**
 * Filter projects marked as featured without mutating the input array.
 */
export function getFeaturedProjects(
  projectList: readonly Project[] = projects
): Project[] {
  if (!Array.isArray(projectList) || projectList.length === 0) {
    return [];
  }

  return [...projectList]
    .filter((project) => Boolean(project && project.featured))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

/**
 * Filter skills by their jutsu discipline quadrant without mutating the input array.
 */
export function getSkillsByDiscipline(
  discipline: JutsuDiscipline,
  skillList: readonly Skill[] = skills
): Skill[] {
  if (!Array.isArray(skillList) || skillList.length === 0 || !discipline) {
    return [];
  }

  return [...skillList]
    .filter((skill) => Boolean(skill && skill.discipline === discipline))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

/**
 * Lookup a project safely by unique string ID.
 */
export function getProjectById(
  id: string,
  projectList: readonly Project[] = projects
): Project | undefined {
  if (!id || !Array.isArray(projectList) || projectList.length === 0) {
    return undefined;
  }

  return projectList.find((project) => project && project.id === id);
}

/**
 * Lookup a skill safely by unique string ID.
 */
export function getSkillById(
  id: string,
  skillList: readonly Skill[] = skills
): Skill | undefined {
  if (!id || !Array.isArray(skillList) || skillList.length === 0) {
    return undefined;
  }

  return skillList.find((skill) => skill && skill.id === id);
}
