import type { PathwayLevel } from '@/types';
import {
  pbLessonsLevel1,
  pbLessonsLevel2,
  pbLessonsLevel3,
  pbLessonsLevel4,
  pbLessonsLevel5,
  pbLessonsLevel6,
  pbLessonsLevel7,
  pbLessonsLevel8,
  pbLessonsLevel9,
  pbLessonsLevel10,
} from './personal-branding-lessons';

/**
 * Personal Branding Mastery Pathway
 * 80 lessons across 10 levels covering brand foundations, niche discovery,
 * messaging, content strategy, platform mastery, audience building,
 * storytelling, monetization, thought leadership, and brand legacy.
 *
 * Sources: Gary Vaynerchuk (Crush It!, Crushing It!), Donald Miller (Building a StoryBrand),
 * Mark Schaefer (Known), Seth Godin (This Is Marketing), Ryan Holiday (Perennial Seller),
 * Russell Brunson (Expert Secrets), Austin Kleon (Show Your Work!), Robert Cialdini (Influence),
 * Marty Neumeier (The Brand Gap), and real-world creator case studies.
 */
export const personalBrandingPathway: PathwayLevel[] = [
  {
    id: 'pb-level1',
    title: 'Level 1: Brand Foundations',
    description: 'Understand what a personal brand really is, why it matters in the modern economy, and audit where you stand today',
    icon: '✨',
    color: 'purple',
    unlockRequirement: 0,
    lessons: pbLessonsLevel1,
  },
  {
    id: 'pb-level2',
    title: 'Level 2: Finding Your Niche',
    description: 'Discover the intersection of your skills, passions, and market demand to craft a unique positioning',
    icon: '🎯',
    color: 'indigo',
    unlockRequirement: 500,
    lessons: pbLessonsLevel2,
  },
  {
    id: 'pb-level3',
    title: 'Level 3: Brand Identity & Messaging',
    description: 'Build your StoryBrand framework, craft a magnetic elevator pitch, and design a cohesive visual identity',
    icon: '💎',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: pbLessonsLevel3,
  },
  {
    id: 'pb-level4',
    title: 'Level 4: Content Strategy',
    description: 'Master content pillars, repurposing systems, editorial calendars, and hooks that stop the scroll',
    icon: '📝',
    color: 'cyan',
    unlockRequirement: 1500,
    lessons: pbLessonsLevel4,
  },
  {
    id: 'pb-level5',
    title: 'Level 5: Platform Mastery',
    description: 'Learn platform-specific strategies for YouTube, Twitter/X, LinkedIn, TikTok, newsletters, and podcasts',
    icon: '📱',
    color: 'teal',
    unlockRequirement: 2000,
    lessons: pbLessonsLevel5,
  },
  {
    id: 'pb-level6',
    title: 'Level 6: Audience Building',
    description: 'Grow from zero to a loyal community using engagement loops, email lists, and network effects',
    icon: '🚀',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: pbLessonsLevel6,
  },
  {
    id: 'pb-level7',
    title: 'Level 7: Storytelling & Copywriting',
    description: 'Master brand narratives, copywriting formulas, email sequences, and persuasive hooks',
    icon: '🖊️',
    color: 'amber',
    unlockRequirement: 3000,
    lessons: pbLessonsLevel7,
  },
  {
    id: 'pb-level8',
    title: 'Level 8: Monetization',
    description: 'Turn your brand into a business with products, courses, consulting, sponsorships, and creator revenue models',
    icon: '💰',
    color: 'yellow',
    unlockRequirement: 3500,
    lessons: pbLessonsLevel8,
  },
  {
    id: 'pb-level9',
    title: 'Level 9: Thought Leadership',
    description: 'Establish authority through speaking, media appearances, book publishing, and intellectual property',
    icon: '🏆',
    color: 'orange',
    unlockRequirement: 4000,
    lessons: pbLessonsLevel9,
  },
  {
    id: 'pb-level10',
    title: 'Level 10: Brand Legacy',
    description: 'Scale beyond yourself with team building, brand systems, compounding reputation, and long-term vision',
    icon: '🌟',
    color: 'rose',
    unlockRequirement: 4500,
    lessons: pbLessonsLevel10,
  },
];

export default personalBrandingPathway;
