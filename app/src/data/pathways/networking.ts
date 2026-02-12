import type { PathwayLevel } from '@/types';
import {
  netLessonsLevel1,
  netLessonsLevel2,
  netLessonsLevel3,
  netLessonsLevel4,
  netLessonsLevel5,
  netLessonsLevel6,
  netLessonsLevel7,
  netLessonsLevel8,
  netLessonsLevel9,
  netLessonsLevel10,
} from './networking-lessons';

/**
 * Networking Module Pathway
 * 80 lessons across 10 levels mastering relationship building, strategic networking, and community leadership
 *
 * Sources: Keith Ferrazzi (Never Eat Alone), Adam Grant (Give and Take),
 * Reid Hoffman (The Start-up of You), Dale Carnegie (How to Win Friends),
 * Derek Coburn (Networking Is Not Working), Robin Dunbar, Mark Granovetter
 */
export const networkingPathway: PathwayLevel[] = [
  {
    id: 'net-level1',
    title: 'Level 1: The Networking Mindset',
    description: 'Discover why relationships are the ultimate currency and adopt the giver mentality that top connectors share',
    icon: '\u{1F91D}',
    color: 'blue',
    unlockRequirement: 0,
    lessons: netLessonsLevel1,
  },
  {
    id: 'net-level2',
    title: 'Level 2: Your Personal Brand',
    description: 'Define your unique value proposition, craft compelling elevator pitches, and build a reputation that attracts opportunities',
    icon: '\u{2B50}',
    color: 'amber',
    unlockRequirement: 500,
    lessons: netLessonsLevel2,
  },
  {
    id: 'net-level3',
    title: 'Level 3: Mapping Your Network',
    description: 'Understand weak ties, strong ties, and structural holes to strategically position yourself for maximum opportunity',
    icon: '\u{1F5FA}\u{FE0F}',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: netLessonsLevel3,
  },
  {
    id: 'net-level4',
    title: 'Level 4: The Art of the Introduction',
    description: 'Master approaching strangers, warm introductions, and conversation techniques that create instant rapport',
    icon: '\u{1F4AC}',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: netLessonsLevel4,
  },
  {
    id: 'net-level5',
    title: 'Level 5: Digital Networking',
    description: 'Leverage LinkedIn, social media, and online communities to build a powerful digital presence',
    icon: '\u{1F4F1}',
    color: 'cyan',
    unlockRequirement: 2000,
    lessons: netLessonsLevel5,
  },
  {
    id: 'net-level6',
    title: 'Level 6: Event Mastery',
    description: 'Dominate conferences, meetups, and professional gatherings with proven systems for working a room and following up',
    icon: '\u{1F3AF}',
    color: 'red',
    unlockRequirement: 2500,
    lessons: netLessonsLevel6,
  },
  {
    id: 'net-level7',
    title: 'Level 7: The Giver Strategy',
    description: 'Apply Adam Grant\'s research on givers to create extraordinary value before ever making an ask',
    icon: '\u{1F381}',
    color: 'teal',
    unlockRequirement: 3000,
    lessons: netLessonsLevel7,
  },
  {
    id: 'net-level8',
    title: 'Level 8: Strategic Relationships',
    description: 'Build and leverage relationships with mentors, sponsors, advisors, and mastermind groups',
    icon: '\u{1F3C6}',
    color: 'indigo',
    unlockRequirement: 3500,
    lessons: netLessonsLevel8,
  },
  {
    id: 'net-level9',
    title: 'Level 9: Maintaining Connections',
    description: 'Implement CRM systems, stay top of mind, and reactivate dormant relationships for lasting impact',
    icon: '\u{1F504}',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: netLessonsLevel9,
  },
  {
    id: 'net-level10',
    title: 'Level 10: Network Leadership',
    description: 'Become a super-connector by hosting events, building communities, and leading with generosity',
    icon: '\u{1F451}',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: netLessonsLevel10,
  },
];

export default networkingPathway;
