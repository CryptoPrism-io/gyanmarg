import type { PathwayLevel } from '@/types';
import {
  taLessonsLevel1,
  taLessonsLevel2,
  taLessonsLevel3,
  taLessonsLevel4,
  taLessonsLevel5,
  taLessonsLevel6,
  taLessonsLevel7,
  taLessonsLevel8,
  taLessonsLevel9,
  taLessonsLevel10,
} from './technical-analysis-lessons';

/**
 * Technical Analysis Pathway
 * 80 lessons across 10 levels covering chart patterns, indicators, and trading systems
 */
export const technicalAnalysisPathway: PathwayLevel[] = [
  {
    id: 'ta-level1',
    title: 'Level 1: Chart Reading Foundations',
    description: 'Learn to read price charts, understand timeframes, and decode market language',
    icon: '📊',
    color: 'green',
    unlockRequirement: 0,
    lessons: taLessonsLevel1,
  },
  {
    id: 'ta-level2',
    title: 'Level 2: Candlestick Patterns',
    description: 'Master the art of reading candlestick patterns and what they reveal about market psychology',
    icon: '🕯️',
    color: 'amber',
    unlockRequirement: 500,
    lessons: taLessonsLevel2,
  },
  {
    id: 'ta-level3',
    title: 'Level 3: Support, Resistance & Structure',
    description: 'Identify key price levels, trendlines, and market structure like a professional',
    icon: '📐',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: taLessonsLevel3,
  },
  {
    id: 'ta-level4',
    title: 'Level 4: Trend Analysis & Moving Averages',
    description: 'Detect trends early using moving averages and multi-timeframe analysis',
    icon: '📈',
    color: 'emerald',
    unlockRequirement: 1500,
    lessons: taLessonsLevel4,
  },
  {
    id: 'ta-level5',
    title: 'Level 5: Momentum Indicators',
    description: 'Use RSI, MACD, and stochastic oscillators to time entries and exits',
    icon: '⚡',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: taLessonsLevel5,
  },
  {
    id: 'ta-level6',
    title: 'Level 6: Volume & Market Internals',
    description: 'Read volume to confirm trends and spot institutional activity',
    icon: '🔊',
    color: 'cyan',
    unlockRequirement: 2500,
    lessons: taLessonsLevel6,
  },
  {
    id: 'ta-level7',
    title: 'Level 7: Chart Patterns & Breakouts',
    description: 'Identify head and shoulders, triangles, flags, and trade breakouts with confidence',
    icon: '🎯',
    color: 'orange',
    unlockRequirement: 3000,
    lessons: taLessonsLevel7,
  },
  {
    id: 'ta-level8',
    title: 'Level 8: Risk Management & Position Sizing',
    description: 'Protect your capital with professional risk management and position sizing',
    icon: '🛡️',
    color: 'red',
    unlockRequirement: 3500,
    lessons: taLessonsLevel8,
  },
  {
    id: 'ta-level9',
    title: 'Level 9: Trading Systems & Backtesting',
    description: 'Build, test, and optimize your own trading system from scratch',
    icon: '⚙️',
    color: 'slate',
    unlockRequirement: 4000,
    lessons: taLessonsLevel9,
  },
  {
    id: 'ta-level10',
    title: 'Level 10: Trading Psychology & Integration',
    description: 'Master trading psychology and integrate all tools into your complete trading plan',
    icon: '🧠',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: taLessonsLevel10,
  },
];

export default technicalAnalysisPathway;
