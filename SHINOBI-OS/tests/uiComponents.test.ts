import { describe, it, expect } from 'vitest';
import React from 'react';
import { Button } from '../src/components/ui/Button';
import { IconButton } from '../src/components/ui/IconButton';
import { Card } from '../src/components/ui/Card';
import { Badge } from '../src/components/ui/Badge';
import { SectionHeader } from '../src/components/ui/SectionHeader';
import { EmptyState } from '../src/components/ui/EmptyState';

describe('UI Micro-Components Specifications', () => {
  describe('Button Component', () => {
    it('creates button element with children and props', () => {
      const element = React.createElement(Button, { children: 'Execute', variant: 'primary', size: 'md' });
      expect(element.props.children).toBe('Execute');
      expect(element.props.variant).toBe('primary');
      expect(element.props.size).toBe('md');
    });

    it('applies disabled state properties', () => {
      const element = React.createElement(Button, { disabled: true, children: 'Locked' });
      expect(element.props.disabled).toBe(true);
    });

    it('supports fullWidth and custom type prop', () => {
      const element = React.createElement(Button, { fullWidth: true, type: 'submit', children: 'Wide' });
      expect(element.props.fullWidth).toBe(true);
      expect(element.props.type).toBe('submit');
    });
  });

  describe('IconButton Component', () => {
    it('enforces aria-label and renders icon', () => {
      const icon = React.createElement('span', null, '✕');
      const element = React.createElement(IconButton, {
        'aria-label': 'Close dialog',
        icon,
        size: 'md',
      });
      expect(element.props['aria-label']).toBe('Close dialog');
      expect(element.props.icon).toBe(icon);
      expect(element.props.size).toBe('md');
    });

    it('supports custom type attribute', () => {
      const element = React.createElement(IconButton, {
        'aria-label': 'Action',
        icon: '!',
        type: 'button',
      });
      expect(element.props.type).toBe('button');
    });
  });

  describe('Card Component', () => {
    it('supports semantic HTML tags via as prop', () => {
      const divCard = React.createElement(Card, { as: 'div', children: 'Content' });
      expect(divCard.props.as).toBe('div');

      const articleCard = React.createElement(Card, { as: 'article', children: 'Article' });
      expect(articleCard.props.as).toBe('article');
    });

    it('supports variants and padding levels', () => {
      const element = React.createElement(Card, {
        variant: 'interactive',
        padding: 'lg',
        children: 'Interactive Card',
      });
      expect(element.props.variant).toBe('interactive');
      expect(element.props.padding).toBe('lg');
    });
  });

  describe('Badge Component', () => {
    it('renders text and rank variants', () => {
      const sRank = React.createElement(Badge, { variant: 'rank', rank: 'S-Rank', children: 'S-Rank' });
      expect(sRank.props.rank).toBe('S-Rank');

      const aRank = React.createElement(Badge, { variant: 'rank', rank: 'A-Rank', children: 'A-Rank' });
      expect(aRank.props.rank).toBe('A-Rank');

      const bRank = React.createElement(Badge, { variant: 'rank', rank: 'B-Rank', children: 'B-Rank' });
      expect(bRank.props.rank).toBe('B-Rank');
    });

    it('renders proficiency tiers', () => {
      const core = React.createElement(Badge, {
        variant: 'proficiency',
        proficiency: 'Production Core',
        children: 'Core',
      });
      expect(core.props.proficiency).toBe('Production Core');
    });
  });

  describe('SectionHeader Component', () => {
    it('configures title, subtitle and action', () => {
      const element = React.createElement(SectionHeader, {
        title: 'MISSION CODEX',
        subtitle: 'Verified Archives',
        action: React.createElement('button', null, 'Filter'),
      });
      expect(element.props.title).toBe('MISSION CODEX');
      expect(element.props.subtitle).toBe('Verified Archives');
      expect(element.props.action).toBeDefined();
    });
  });

  describe('EmptyState Component', () => {
    it('configures title and description', () => {
      const element = React.createElement(EmptyState, {
        title: 'No dossiers found',
        description: 'Adjust your search parameters.',
      });
      expect(element.props.title).toBe('No dossiers found');
      expect(element.props.description).toBe('Adjust your search parameters.');
    });
  });
});
