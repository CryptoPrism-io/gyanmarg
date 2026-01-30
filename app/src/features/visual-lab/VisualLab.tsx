import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, Lightbulb, Filter, BookOpen, X, Search, ChevronDown, Star, Lock, Unlock, Coins } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import {
  HabitLoopDiagram,
  ForgettingCurveDiagram,
  CompoundGrowthChart,
  System1vs2Diagram,
  FlowStateDiagram,
  CircleOfCompetence,
  ParetoPrinciple,
  DunningKrugerCurve,
  EisenhowerMatrix,
  FeynmanTechnique,
  IcebergModel,
  SecondOrderThinking,
  InversionThinking,
  SunkCostFallacy,
  TwoMinuteRule,
  OODALoop,
  RegretMinimization,
  HedonicTreadmill,
  FirstPrinciples,
  GrowthMindset,
  ZeigarnikEffect,
  PeakEndRule,
  MereExposure,
  LadderOfInference,
  ActivationEnergy,
  FlywheelEffect,
  ParkinsonsLaw,
  TheDip,
  MarginOfSafety,
  AnchoringBias,
  BATNA,
  AttentionResidue,
  UltradianRhythms,
  LossAversion,
  ConfirmationBias,
  CircleOfControl,
  Hormesis,
  SleepArchitecture,
  DopamineBaseline,
  LindyEffect,
  BarbellStrategy,
  Antifragility,
  VO2MaxLongevity,
  Neuroplasticity,
  DeliberatePractice,
  AvailabilityHeuristic,
  BeWater,
  TimeInMarket,
  IdentityHabits,
  FourLawsHabits,
  TacticalEmpathy,
  CialdiniPrinciples,
  DarkTriad,
  Logotherapy,
  CompoundInterest,
  AckermanModel,
  RuleOf72,
  DollarCostAveraging,
  CircadianRhythm,
  FramingEffect,
  BoxBreathing,
  AssetAllocation,
  WimHofMethod,
  SpotlightEffect,
  ProteinSynthesis,
  BlackSwan,
  MindfulnessMeditation,
  HaloEffect,
  KnowledgeIllusion,
  StoicDichotomy,
  BlockchainBasics,
  // New books visualizations
  RuleOfThree,
  JawDroppingMoment,
  PacifyingBehaviors,
  FeetDontLie,
  PowerPoses,
  MirroringRapport,
  InterestVsPositions,
  BATNAPower,
  NetworkEffect,
  GenerosityLoop,
  PayYourselfFirst,
  SevenCures,
  AssetLiability,
  CashflowQuadrant,
  TaxBuckets,
  TaxStrategyQuadrant,
  BuyVsBuild,
  AcquisitionCriteria,
  FortyPercentRule,
  CookieJar,
  EnergyPyramid,
  WorkRestCycle,
  StressRecoveryBalance,
  PurposePyramid,
  ExtremeOwnershipPrinciple,
  DecentralizedCommand,
  CircleOfSafety,
  LeadershipChemicals,
  EQQuadrants,
  SixSecondPause,
  NVCFourSteps,
  RequestVsDemand,
  STATEPath,
  SafetyRestoration,
  ThreeConversations,
  ContributionVsBlame,
  DichotomyOfControl,
  MementoMori,
  ResultingBias,
  ConfidenceCalibration,
  StatusGames,
  VirtueSuccessStatus,
  StatusTransactions,
  YesAndPrinciple,
  StoryBrandFramework,
  CustomerAsHero,
  DocumentDontCreate,
  PatienceHustle,
} from '@/components/visualizations';
import { ModuleLayout, Section } from '@/components/templates';
import { GlassCard } from '@/components/molecules';

interface VisualizationCard {
  id: string;
  title: string;
  description: string;
  source: string;
  book: string; // Normalized book name for filtering
  component: React.ComponentType;
  color: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

interface Book {
  id: string;
  name: string;
  shortName: string;
  color: string;
}

const categories: Category[] = [
  { id: 'all', name: 'All Concepts', icon: '🌟', color: '#F59E0B', description: 'Browse all visualizations' },
  { id: 'unlocked', name: 'Unlocked', icon: '🔓', color: '#22C55E', description: 'Your available visualizations' },
  { id: 'favorites', name: 'Favorites', icon: '⭐', color: '#FBBF24', description: 'Your starred visualizations' },
  { id: 'habits', name: 'Habits & Productivity', icon: '🎯', color: '#22C55E', description: 'Build systems that last' },
  { id: 'psychology', name: 'Psychology & Biases', icon: '🧠', color: '#8B5CF6', description: 'Understand your mind' },
  { id: 'decisions', name: 'Decision Making', icon: '⚖️', color: '#3B82F6', description: 'Think more clearly' },
  { id: 'wealth', name: 'Wealth & Investing', icon: '💰', color: '#10B981', description: 'Financial wisdom' },
  { id: 'negotiation', name: 'Negotiation & Influence', icon: '🤝', color: '#EC4899', description: 'Master persuasion' },
  { id: 'health', name: 'Health & Performance', icon: '💪', color: '#EF4444', description: 'Optimize your body' },
  { id: 'resilience', name: 'Resilience & Antifragility', icon: '🛡️', color: '#06B6D4', description: 'Thrive in chaos' },
  { id: 'philosophy', name: 'Philosophy & Mindset', icon: '🌊', color: '#F97316', description: 'Timeless wisdom' },
];

const books: Book[] = [
  { id: 'all', name: 'All Books', shortName: 'All', color: '#F59E0B' },
  { id: 'atomic-habits', name: 'Atomic Habits', shortName: 'Atomic Habits', color: '#22C55E' },
  { id: 'thinking-fast-slow', name: 'Thinking, Fast and Slow', shortName: 'Think Fast/Slow', color: '#3B82F6' },
  { id: 'antifragile', name: 'Antifragile', shortName: 'Antifragile', color: '#8B5CF6' },
  { id: 'deep-work', name: 'Deep Work', shortName: 'Deep Work', color: '#EF4444' },
  { id: 'intelligent-investor', name: 'The Intelligent Investor', shortName: 'Intell. Investor', color: '#10B981' },
  { id: 'munger', name: 'Charlie Munger', shortName: 'Munger', color: '#F59E0B' },
  { id: 'outlive', name: 'Outlive', shortName: 'Outlive', color: '#22C55E' },
  { id: 'why-we-sleep', name: 'Why We Sleep', shortName: 'Why We Sleep', color: '#8B5CF6' },
  { id: 'mindset', name: 'Mindset', shortName: 'Mindset', color: '#22C55E' },
  { id: 'huberman', name: 'Huberman Lab', shortName: 'Huberman', color: '#F59E0B' },
  { id: 'bruce-lee', name: 'Bruce Lee', shortName: 'Bruce Lee', color: '#3B82F6' },
  { id: 'never-split', name: 'Never Split the Difference', shortName: 'Never Split', color: '#EC4899' },
  { id: 'influence', name: 'Influence', shortName: 'Influence', color: '#8B5CF6' },
  { id: 'black-swan', name: 'The Black Swan', shortName: 'Black Swan', color: '#374151' },
  { id: 'mans-search', name: "Man's Search for Meaning", shortName: "Man's Search", color: '#F59E0B' },
  { id: 'stoic', name: 'Stoic Philosophy', shortName: 'Stoic', color: '#3B82F6' },
  { id: 'blockchain', name: 'Token Economy & DeFi', shortName: 'Blockchain', color: '#F59E0B' },
  { id: 'wim-hof', name: 'The Wim Hof Method', shortName: 'Wim Hof', color: '#06B6D4' },
  { id: 'talk-like-ted', name: 'Talk Like TED', shortName: 'Talk Like TED', color: '#EF4444' },
  { id: 'body-language', name: 'Body Language Books', shortName: 'Body Language', color: '#8B5CF6' },
  { id: 'getting-to-yes', name: 'Getting to Yes', shortName: 'Getting to Yes', color: '#22C55E' },
  { id: 'never-eat-alone', name: 'Never Eat Alone', shortName: 'Never Eat Alone', color: '#3B82F6' },
  { id: 'richest-man', name: 'Richest Man in Babylon', shortName: 'Richest Man', color: '#F59E0B' },
  { id: 'rich-dad', name: 'Rich Dad Poor Dad', shortName: 'Rich Dad', color: '#22C55E' },
  { id: 'tax-free', name: 'Tax-Free Wealth', shortName: 'Tax-Free Wealth', color: '#10B981' },
  { id: 'buy-then-build', name: 'Buy Then Build', shortName: 'Buy Then Build', color: '#3B82F6' },
  { id: 'cant-hurt-me', name: "Can't Hurt Me", shortName: "Can't Hurt Me", color: '#EF4444' },
  { id: 'extreme-ownership', name: 'Extreme Ownership', shortName: 'Extreme Ownership', color: '#374151' },
  { id: 'leaders-eat-last', name: 'Leaders Eat Last', shortName: 'Leaders Eat Last', color: '#F59E0B' },
  { id: 'eq-2', name: 'Emotional Intelligence 2.0', shortName: 'EQ 2.0', color: '#8B5CF6' },
  { id: 'nvc', name: 'Nonviolent Communication', shortName: 'NVC', color: '#22C55E' },
  { id: 'crucial-conversations', name: 'Crucial Conversations', shortName: 'Crucial Conv.', color: '#EC4899' },
  { id: 'difficult-conversations', name: 'Difficult Conversations', shortName: 'Difficult Conv.', color: '#F97316' },
  { id: 'daily-stoic', name: 'The Daily Stoic', shortName: 'Daily Stoic', color: '#3B82F6' },
  { id: 'thinking-in-bets', name: 'Thinking in Bets', shortName: 'Thinking in Bets', color: '#8B5CF6' },
  { id: 'full-engagement', name: 'Power of Full Engagement', shortName: 'Full Engagement', color: '#22C55E' },
  { id: 'peak-performance', name: 'Peak Performance', shortName: 'Peak Performance', color: '#EF4444' },
  { id: 'status-game', name: 'The Status Game', shortName: 'Status Game', color: '#F59E0B' },
  { id: 'impro', name: 'Impro', shortName: 'Impro', color: '#EC4899' },
  { id: 'storybrand', name: 'Building a StoryBrand', shortName: 'StoryBrand', color: '#3B82F6' },
  { id: 'crush-it', name: 'Crushing It!', shortName: 'Crush It', color: '#EF4444' },
  { id: 'other', name: 'Other Sources', shortName: 'Other', color: '#6B7280' },
];

// Helper to normalize book names (available for future use)
const _getBookId = (source: string): string => {
  const s = source.toLowerCase();
  if (s.includes('atomic habits')) return 'atomic-habits';
  if (s.includes('thinking') && (s.includes('fast') || s.includes('kahneman'))) return 'thinking-fast-slow';
  if (s.includes('antifragile') || s.includes('taleb')) return 'antifragile';
  if (s.includes('deep work') || s.includes('newport')) return 'deep-work';
  if (s.includes('intelligent investor') || s.includes('ben graham')) return 'intelligent-investor';
  if (s.includes('munger') || s.includes('buffett')) return 'munger';
  if (s.includes('outlive') || s.includes('attia')) return 'outlive';
  if (s.includes('why we sleep') || s.includes('walker')) return 'why-we-sleep';
  if (s.includes('mindset') || s.includes('dweck')) return 'mindset';
  if (s.includes('huberman')) return 'huberman';
  if (s.includes('bruce lee')) return 'bruce-lee';
  if (s.includes('never split') || s.includes('chris voss')) return 'never-split';
  if (s.includes('influence') || s.includes('cialdini')) return 'influence';
  if (s.includes('black swan')) return 'black-swan';
  if (s.includes('man\'s search') || s.includes('frankl')) return 'mans-search';
  if (s.includes('stoic') || s.includes('marcus aurelius') || s.includes('epictetus')) return 'stoic';
  if (s.includes('token economy') || s.includes('defi') || s.includes('blockchain')) return 'blockchain';
  if (s.includes('wim hof')) return 'wim-hof';
  // New books
  if (s.includes('talk like ted') || s.includes('carmine gallo')) return 'talk-like-ted';
  if (s.includes('body language') || s.includes('what every body') || s.includes('joe navarro') || s.includes('pease')) return 'body-language';
  if (s.includes('getting to yes')) return 'getting-to-yes';
  if (s.includes('never eat alone') || s.includes('keith ferrazzi')) return 'never-eat-alone';
  if (s.includes('richest man in babylon') || s.includes('george clason')) return 'richest-man';
  if (s.includes('rich dad') || s.includes('kiyosaki')) return 'rich-dad';
  if (s.includes('tax-free wealth') || s.includes('tom wheelwright')) return 'tax-free';
  if (s.includes('buy then build') || s.includes('walker deibel')) return 'buy-then-build';
  if (s.includes('can\'t hurt me') || s.includes('david goggins')) return 'cant-hurt-me';
  if (s.includes('extreme ownership') || s.includes('jocko willink')) return 'extreme-ownership';
  if (s.includes('leaders eat last') || s.includes('simon sinek')) return 'leaders-eat-last';
  if (s.includes('emotional intelligence 2') || s.includes('eq 2') || s.includes('bradberry')) return 'eq-2';
  if (s.includes('nonviolent communication') || s.includes('marshall rosenberg')) return 'nvc';
  if (s.includes('crucial conversations') || s.includes('kerry patterson')) return 'crucial-conversations';
  if (s.includes('difficult conversations') || s.includes('douglas stone')) return 'difficult-conversations';
  if (s.includes('daily stoic') || s.includes('ryan holiday')) return 'daily-stoic';
  if (s.includes('thinking in bets') || s.includes('annie duke')) return 'thinking-in-bets';
  if (s.includes('full engagement') || s.includes('jim loehr')) return 'full-engagement';
  if (s.includes('peak performance') || s.includes('brad stulberg')) return 'peak-performance';
  if (s.includes('status game') || s.includes('will storr')) return 'status-game';
  if (s.includes('impro') || s.includes('keith johnstone')) return 'impro';
  if (s.includes('storybrand') || s.includes('donald miller')) return 'storybrand';
  if (s.includes('crush') || s.includes('gary vaynerchuk') || s.includes('gary vee')) return 'crush-it';
  return 'other';
};
void _getBookId; // Suppress unused warning

const visualizations: VisualizationCard[] = [
  // Habits & Productivity
  {
    id: 'habit-loop',
    title: 'The Habit Loop',
    description: 'Every habit follows a 4-step pattern: Cue → Craving → Response → Reward. Understanding this loop is the key to building good habits and breaking bad ones.',
    source: 'Atomic Habits by James Clear',
    book: 'atomic-habits',
    component: HabitLoopDiagram,
    color: '#F59E0B',
    category: 'habits',
  },
  {
    id: 'compound-growth',
    title: 'The Power of 1%',
    description: 'Getting 1% better every day leads to being 37x better after one year. The same math works in reverse: 1% worse daily makes you nearly zero.',
    source: 'Atomic Habits by James Clear',
    book: 'atomic-habits',
    component: CompoundGrowthChart,
    color: '#22C55E',
    category: 'habits',
  },
  {
    id: 'activation-energy',
    title: 'Activation Energy',
    description: 'Reduce friction for good habits, increase it for bad ones. Small environmental changes make the right behavior effortless.',
    source: 'Atomic Habits by James Clear',
    book: 'atomic-habits',
    component: ActivationEnergy,
    color: '#F59E0B',
    category: 'habits',
  },
  {
    id: 'two-minute-rule',
    title: 'The Two-Minute Rule',
    description: 'If something takes less than two minutes, do it now. Small undone tasks create mental overhead far exceeding their actual time.',
    source: 'Getting Things Done by David Allen',
    book: 'other',
    component: TwoMinuteRule,
    color: '#F59E0B',
    category: 'habits',
  },
  {
    id: 'eisenhower-matrix',
    title: 'The Eisenhower Matrix',
    description: 'Prioritize tasks by urgency and importance. Do urgent+important first, schedule important tasks, delegate or eliminate the rest.',
    source: 'President Dwight D. Eisenhower',
    book: 'other',
    component: EisenhowerMatrix,
    color: '#22C55E',
    category: 'habits',
  },
  {
    id: 'parkinsons-law',
    title: "Parkinson's Law",
    description: 'Work expands to fill the time available. Set tighter deadlines to reduce procrastination and increase focus.',
    source: 'Cyril Parkinson',
    book: 'other',
    component: ParkinsonsLaw,
    color: '#3B82F6',
    category: 'habits',
  },
  {
    id: 'zeigarnik-effect',
    title: 'The Zeigarnik Effect',
    description: 'Uncompleted tasks occupy our minds more than completed ones. Your brain keeps "open loops" running, consuming mental energy.',
    source: 'Bluma Zeigarnik (1927)',
    book: 'other',
    component: ZeigarnikEffect,
    color: '#F59E0B',
    category: 'habits',
  },
  {
    id: 'flywheel-effect',
    title: 'The Flywheel Effect',
    description: 'Early pushes are hardest. But each push builds on previous work until momentum becomes self-sustaining and unstoppable.',
    source: 'Good to Great by Jim Collins',
    book: 'other',
    component: FlywheelEffect,
    color: '#22C55E',
    category: 'habits',
  },
  {
    id: 'deliberate-practice',
    title: 'Deliberate Practice',
    description: "It's not 10,000 hours of practice—it's 10,000 hours of deliberate practice with feedback and discomfort that creates expertise.",
    source: 'Peak by Anders Ericsson',
    book: 'other',
    component: DeliberatePractice,
    color: '#F59E0B',
    category: 'habits',
  },

  // Psychology & Biases
  {
    id: 'system-thinking',
    title: 'System 1 vs System 2',
    description: 'Your brain has two modes: fast intuition (System 1) and slow analysis (System 2). Knowing when each kicks in helps you think more clearly.',
    source: 'Thinking, Fast and Slow by Daniel Kahneman',
    book: 'thinking-fast-slow',
    component: System1vs2Diagram,
    color: '#3B82F6',
    category: 'psychology',
  },
  {
    id: 'dunning-kruger',
    title: 'The Dunning-Kruger Effect',
    description: 'Confidence peaks early with little knowledge (Mt. Stupid), crashes as you learn more (Valley of Despair), then rebuilds with true expertise.',
    source: 'Psychology Research by Dunning & Kruger',
    book: 'other',
    component: DunningKrugerCurve,
    color: '#EF4444',
    category: 'psychology',
  },
  {
    id: 'confirmation-bias',
    title: 'Confirmation Bias',
    description: 'We seek evidence that confirms our beliefs and ignore what contradicts them. Actively seek disconfirming evidence.',
    source: 'Thinking, Fast and Slow',
    book: 'thinking-fast-slow',
    component: ConfirmationBias,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'availability-heuristic',
    title: 'Availability Heuristic',
    description: 'We judge probability by how easily examples come to mind. Vivid events feel more common than mundane ones.',
    source: 'Thinking, Fast and Slow',
    book: 'thinking-fast-slow',
    component: AvailabilityHeuristic,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'anchoring-bias',
    title: 'Anchoring Bias',
    description: 'The first number you hear influences all subsequent judgments. In negotiations, anchor first or be anchored.',
    source: 'Never Split the Difference / Kahneman',
    book: 'thinking-fast-slow',
    component: AnchoringBias,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'mere-exposure',
    title: 'The Mere Exposure Effect',
    description: 'We prefer things simply because we\'ve been exposed to them more often. Familiarity breeds liking, not contempt.',
    source: 'Robert Zajonc (1968)',
    book: 'other',
    component: MereExposure,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'peak-end-rule',
    title: 'The Peak-End Rule',
    description: 'We judge experiences by their peak moments and how they end, not by the total sum or average. Design for memorable peaks and strong finishes.',
    source: 'Daniel Kahneman',
    book: 'thinking-fast-slow',
    component: PeakEndRule,
    color: '#3B82F6',
    category: 'psychology',
  },
  {
    id: 'hedonic-treadmill',
    title: 'The Hedonic Treadmill',
    description: 'No matter what good or bad things happen, we adapt and return to a baseline happiness level. More stuff rarely brings lasting joy.',
    source: 'Brickman & Campbell Research',
    book: 'other',
    component: HedonicTreadmill,
    color: '#22C55E',
    category: 'psychology',
  },
  {
    id: 'ladder-of-inference',
    title: 'Ladder of Inference',
    description: 'We climb from raw data to conclusions in seconds, often unconsciously. Learn to climb down and check your assumptions.',
    source: 'Chris Argyris',
    book: 'other',
    component: LadderOfInference,
    color: '#06B6D4',
    category: 'psychology',
  },

  // Decision Making
  {
    id: 'loss-aversion',
    title: 'Loss Aversion',
    description: 'Losses hurt roughly 2x more than equivalent gains feel good. This explains risk aversion and why we hold losing positions.',
    source: 'Thinking, Fast and Slow by Kahneman',
    book: 'thinking-fast-slow',
    component: LossAversion,
    color: '#EF4444',
    category: 'decisions',
  },
  {
    id: 'sunk-cost-fallacy',
    title: 'Sunk Cost Fallacy',
    description: 'We irrationally continue investing in something because of past costs, even when cutting losses is the smart choice.',
    source: 'Behavioral Economics',
    book: 'thinking-fast-slow',
    component: SunkCostFallacy,
    color: '#EF4444',
    category: 'decisions',
  },
  {
    id: 'second-order-thinking',
    title: 'Second-Order Thinking',
    description: 'Don\'t just consider immediate consequences. Ask "And then what?" to see the ripple effects of your decisions.',
    source: 'Howard Marks / Charlie Munger',
    book: 'munger',
    component: SecondOrderThinking,
    color: '#F59E0B',
    category: 'decisions',
  },
  {
    id: 'inversion-thinking',
    title: 'Inversion Thinking',
    description: 'Instead of asking how to succeed, ask how to fail—then avoid those things. Sometimes avoiding stupidity is easier than being brilliant.',
    source: 'Charlie Munger',
    book: 'munger',
    component: InversionThinking,
    color: '#22C55E',
    category: 'decisions',
  },
  {
    id: 'first-principles',
    title: 'First Principles Thinking',
    description: 'Break problems down to fundamental truths, then reason up from there. Question every assumption until you reach bedrock.',
    source: 'Elon Musk / Aristotle',
    book: 'other',
    component: FirstPrinciples,
    color: '#EF4444',
    category: 'decisions',
  },
  {
    id: 'regret-minimization',
    title: 'Regret Minimization Framework',
    description: 'Project yourself to age 80. Which choice will you regret not taking? Use this to make bold life decisions.',
    source: 'Jeff Bezos',
    book: 'other',
    component: RegretMinimization,
    color: '#8B5CF6',
    category: 'decisions',
  },
  {
    id: 'ooda-loop',
    title: 'The OODA Loop',
    description: 'Observe, Orient, Decide, Act—the faster you cycle through this loop, the bigger your competitive advantage.',
    source: 'John Boyd (Fighter Pilot)',
    book: 'other',
    component: OODALoop,
    color: '#3B82F6',
    category: 'decisions',
  },
  {
    id: 'circle-competence',
    title: 'Circle of Competence',
    description: 'Know what you truly understand vs. what you think you know. Stay within your circle for better decisions, expand it deliberately.',
    source: 'Warren Buffett & Charlie Munger',
    book: 'munger',
    component: CircleOfCompetence,
    color: '#F59E0B',
    category: 'decisions',
  },
  {
    id: 'pareto-principle',
    title: 'The 80/20 Rule',
    description: '80% of results come from 20% of efforts. Identify the vital few inputs that drive most outcomes and focus your energy there.',
    source: 'The 80/20 Principle by Richard Koch',
    book: 'other',
    component: ParetoPrinciple,
    color: '#3B82F6',
    category: 'decisions',
  },
  {
    id: 'the-dip',
    title: 'The Dip',
    description: 'Winners quit the right things at the right time. Know when to push through The Dip and when to strategically quit.',
    source: 'The Dip by Seth Godin',
    book: 'other',
    component: TheDip,
    color: '#EF4444',
    category: 'decisions',
  },

  // Wealth & Investing
  {
    id: 'margin-of-safety',
    title: 'Margin of Safety',
    description: 'Buy assets when price is significantly below intrinsic value. The margin protects against errors and bad luck.',
    source: 'The Intelligent Investor by Ben Graham',
    book: 'intelligent-investor',
    component: MarginOfSafety,
    color: '#22C55E',
    category: 'wealth',
  },
  {
    id: 'time-in-market',
    title: 'Time in Market',
    description: 'Time in the market beats timing the market. Missing just the 10 best days can cut your returns in half.',
    source: 'J.P. Morgan Research',
    book: 'intelligent-investor',
    component: TimeInMarket,
    color: '#22C55E',
    category: 'wealth',
  },
  {
    id: 'barbell-strategy',
    title: 'Barbell Strategy',
    description: 'Combine extreme safety with extreme risk, avoiding the vulnerable middle. This survives black swan events.',
    source: 'Antifragile by Nassim Taleb',
    book: 'antifragile',
    component: BarbellStrategy,
    color: '#3B82F6',
    category: 'wealth',
  },
  {
    id: 'lindy-effect',
    title: 'The Lindy Effect',
    description: 'For non-perishable things, every day of survival increases expected future lifespan. Old ideas that survived will likely outlast new trends.',
    source: 'Antifragile by Nassim Taleb',
    book: 'antifragile',
    component: LindyEffect,
    color: '#F59E0B',
    category: 'wealth',
  },

  // Negotiation & Influence
  {
    id: 'batna',
    title: 'BATNA',
    description: 'Your Best Alternative To Negotiated Agreement determines your power. Always improve your alternatives before negotiating.',
    source: 'Harvard Negotiation Project',
    book: 'other',
    component: BATNA,
    color: '#3B82F6',
    category: 'negotiation',
  },
  {
    id: 'feynman-technique',
    title: 'The Feynman Technique',
    description: 'Learn anything deeply by teaching it simply. If you can\'t explain it to a child, you don\'t really understand it.',
    source: 'Richard Feynman - Nobel Physicist',
    book: 'other',
    component: FeynmanTechnique,
    color: '#3B82F6',
    category: 'negotiation',
  },

  // Health & Performance
  {
    id: 'flow-state',
    title: 'The Flow State',
    description: 'Flow happens when challenge matches skill. Too easy = boredom. Too hard = anxiety. Find your flow channel for peak performance.',
    source: 'Deep Work by Cal Newport / Flow by Csikszentmihalyi',
    book: 'deep-work',
    component: FlowStateDiagram,
    color: '#22C55E',
    category: 'health',
  },
  {
    id: 'forgetting-curve',
    title: 'The Forgetting Curve',
    description: 'We forget 70% of what we learn within 24 hours. Spaced repetition combats this by reviewing at optimal intervals, boosting retention to 90%+.',
    source: 'Ebbinghaus Memory Research',
    book: 'other',
    component: ForgettingCurveDiagram,
    color: '#8B5CF6',
    category: 'health',
  },
  {
    id: 'sleep-architecture',
    title: 'Sleep Architecture',
    description: 'Sleep cycles through distinct stages, each serving irreplaceable functions. Deep sleep and REM cannot be skipped.',
    source: 'Why We Sleep by Matthew Walker',
    book: 'why-we-sleep',
    component: SleepArchitecture,
    color: '#8B5CF6',
    category: 'health',
  },
  {
    id: 'dopamine-baseline',
    title: 'Dopamine Baseline',
    description: 'High-spike activities crash your baseline, creating cravings. Healthy habits raise your baseline over time.',
    source: 'Dr. Andrew Huberman',
    book: 'huberman',
    component: DopamineBaseline,
    color: '#F59E0B',
    category: 'health',
  },
  {
    id: 'ultradian-rhythms',
    title: 'Ultradian Rhythms',
    description: 'Your brain naturally cycles through 90-minute focus periods. Work with these rhythms for peak performance.',
    source: 'Sleep & Performance Research',
    book: 'why-we-sleep',
    component: UltradianRhythms,
    color: '#22C55E',
    category: 'health',
  },
  {
    id: 'attention-residue',
    title: 'Attention Residue',
    description: 'Every task switch leaves residue that reduces cognitive capacity. Batch similar tasks and minimize context switching.',
    source: 'Deep Work by Cal Newport',
    book: 'deep-work',
    component: AttentionResidue,
    color: '#8B5CF6',
    category: 'health',
  },
  {
    id: 'vo2max-longevity',
    title: 'VO2 Max & Longevity',
    description: 'Cardiorespiratory fitness is the strongest predictor of longevity. Moving from low to above average fitness reduces mortality by 60%.',
    source: 'Outlive by Peter Attia',
    book: 'outlive',
    component: VO2MaxLongevity,
    color: '#22C55E',
    category: 'health',
  },
  {
    id: 'neuroplasticity',
    title: 'Neuroplasticity',
    description: 'Neurons that fire together wire together. Repeated practice strengthens neural pathways, making skills automatic.',
    source: 'Neuroscience Research',
    book: 'huberman',
    component: Neuroplasticity,
    color: '#8B5CF6',
    category: 'health',
  },
  {
    id: 'hormesis',
    title: 'Hormesis',
    description: 'Small doses of stress make you stronger. The right amount of challenge triggers adaptation and growth.',
    source: 'Antifragile / Exercise Science',
    book: 'antifragile',
    component: Hormesis,
    color: '#22C55E',
    category: 'health',
  },

  // Resilience & Antifragility
  {
    id: 'antifragility',
    title: 'Antifragility',
    description: 'Beyond resilience—systems that gain from disorder. Design to benefit from volatility, not just survive it.',
    source: 'Antifragile by Nassim Taleb',
    book: 'antifragile',
    component: Antifragility,
    color: '#22C55E',
    category: 'resilience',
  },
  {
    id: 'circle-of-control',
    title: 'Circle of Control',
    description: 'Focus energy on what you can control. Worrying about what you cannot control wastes mental energy and creates anxiety.',
    source: 'Stephen Covey / Stoic Philosophy',
    book: 'other',
    component: CircleOfControl,
    color: '#22C55E',
    category: 'resilience',
  },

  // Philosophy & Mindset
  {
    id: 'growth-mindset',
    title: 'Growth vs Fixed Mindset',
    description: 'Those with growth mindset see abilities as developable through effort. Fixed mindset sees them as innate and unchangeable.',
    source: 'Mindset by Carol Dweck',
    book: 'mindset',
    component: GrowthMindset,
    color: '#22C55E',
    category: 'philosophy',
  },
  {
    id: 'be-water',
    title: 'Be Water',
    description: 'Adapt to circumstances like water—flow around obstacles, take the shape of your container, transform under pressure.',
    source: 'Bruce Lee Philosophy',
    book: 'bruce-lee',
    component: BeWater,
    color: '#3B82F6',
    category: 'philosophy',
  },
  {
    id: 'iceberg-model',
    title: 'The Iceberg of Success',
    description: 'People see results, but beneath the surface lies years of hard work, failure, sacrifice, and discipline that made success possible.',
    source: 'Growth Mindset Research',
    book: 'mindset',
    component: IcebergModel,
    color: '#06B6D4',
    category: 'philosophy',
  },

  // New Habits visualizations
  {
    id: 'identity-habits',
    title: 'Identity-Based Habits',
    description: 'True behavior change is identity change. Focus on who you want to become, not just what you want to achieve.',
    source: 'Atomic Habits by James Clear',
    book: 'atomic-habits',
    component: IdentityHabits,
    color: '#22C55E',
    category: 'habits',
  },
  {
    id: 'four-laws-habits',
    title: 'The Four Laws of Behavior Change',
    description: 'Make it obvious, attractive, easy, and satisfying to build good habits. Invert for breaking bad ones.',
    source: 'Atomic Habits by James Clear',
    book: 'atomic-habits',
    component: FourLawsHabits,
    color: '#22C55E',
    category: 'habits',
  },

  // New Negotiation visualizations
  {
    id: 'tactical-empathy',
    title: 'Tactical Empathy',
    description: 'Master FBI negotiation techniques: mirroring, labeling, accusation audits, and calibrated questions.',
    source: 'Never Split the Difference by Chris Voss',
    book: 'never-split',
    component: TacticalEmpathy,
    color: '#3B82F6',
    category: 'negotiation',
  },
  {
    id: 'cialdini-principles',
    title: '6 Weapons of Influence',
    description: 'Reciprocity, Commitment, Social Proof, Authority, Liking, Scarcity - the psychology of persuasion.',
    source: 'Influence by Robert Cialdini',
    book: 'influence',
    component: CialdiniPrinciples,
    color: '#8B5CF6',
    category: 'negotiation',
  },
  {
    id: 'ackerman-model',
    title: 'The Ackerman Model',
    description: 'A systematic bargaining approach: offer 65%, then 85%, 95%, and finally a precise number with non-monetary item.',
    source: 'Never Split the Difference by Chris Voss',
    book: 'never-split',
    component: AckermanModel,
    color: '#22C55E',
    category: 'negotiation',
  },

  // New Psychology visualizations
  {
    id: 'dark-triad',
    title: 'The Dark Triad',
    description: 'Recognize narcissism, Machiavellianism, and psychopathy - and learn to protect yourself.',
    source: 'Dark Psychology Research',
    book: 'other',
    component: DarkTriad,
    color: '#EF4444',
    category: 'psychology',
  },
  {
    id: 'framing-effect',
    title: 'The Framing Effect',
    description: 'How the same information presented differently leads to different decisions. Words shape reality.',
    source: 'Thinking, Fast and Slow by Kahneman',
    book: 'thinking-fast-slow',
    component: FramingEffect,
    color: '#F59E0B',
    category: 'psychology',
  },
  {
    id: 'spotlight-effect',
    title: 'The Spotlight Effect',
    description: 'You are not the center of attention. People notice you far less than you think they do.',
    source: 'Thinking, Fast and Slow',
    book: 'thinking-fast-slow',
    component: SpotlightEffect,
    color: '#F59E0B',
    category: 'psychology',
  },
  {
    id: 'halo-effect',
    title: 'The Halo Effect',
    description: 'One positive trait creates a halo of assumed virtues. We generalize from limited information.',
    source: 'Thinking, Fast and Slow by Kahneman',
    book: 'thinking-fast-slow',
    component: HaloEffect,
    color: '#F59E0B',
    category: 'psychology',
  },
  {
    id: 'knowledge-illusion',
    title: 'The Knowledge Illusion',
    description: 'You know less than you think. Try explaining something in detail to discover the gaps.',
    source: 'The Knowledge Illusion',
    book: 'other',
    component: KnowledgeIllusion,
    color: '#8B5CF6',
    category: 'psychology',
  },

  // New Wealth visualizations
  {
    id: 'compound-interest',
    title: 'Compound Interest Calculator',
    description: 'See how small regular investments grow exponentially over time. Einstein\'s eighth wonder.',
    source: 'The Intelligent Investor by Ben Graham',
    book: 'intelligent-investor',
    component: CompoundInterest,
    color: '#22C55E',
    category: 'wealth',
  },
  {
    id: 'rule-of-72',
    title: 'The Rule of 72',
    description: 'Quick mental math: 72 divided by your return rate equals years to double your money.',
    source: 'The Intelligent Investor',
    book: 'intelligent-investor',
    component: RuleOf72,
    color: '#F59E0B',
    category: 'wealth',
  },
  {
    id: 'dollar-cost-averaging',
    title: 'Dollar Cost Averaging',
    description: 'Invest consistently regardless of price. Buy more shares when low, fewer when high.',
    source: 'The Intelligent Investor',
    book: 'intelligent-investor',
    component: DollarCostAveraging,
    color: '#3B82F6',
    category: 'wealth',
  },
  {
    id: 'asset-allocation',
    title: 'Asset Allocation',
    description: 'The most important investment decision. Distribute between stocks, bonds, real estate, and cash.',
    source: 'The Intelligent Investor',
    book: 'intelligent-investor',
    component: AssetAllocation,
    color: '#F59E0B',
    category: 'wealth',
  },
  {
    id: 'black-swan',
    title: 'Black Swan Events',
    description: 'Unpredictable, extreme impact events that seem obvious in hindsight. Position for asymmetry.',
    source: 'The Black Swan by Nassim Taleb',
    book: 'black-swan',
    component: BlackSwan,
    color: '#374151',
    category: 'wealth',
  },

  // New Health visualizations
  {
    id: 'circadian-rhythm',
    title: 'Circadian Rhythm',
    description: 'Your 24-hour body clock controls energy, focus, and recovery. Align activities with biology.',
    source: 'Dr. Andrew Huberman',
    book: 'huberman',
    component: CircadianRhythm,
    color: '#8B5CF6',
    category: 'health',
  },
  {
    id: 'box-breathing',
    title: 'Box Breathing',
    description: 'Navy SEAL stress control: 4 seconds inhale, hold, exhale, hold. Activate calm on demand.',
    source: 'Navy SEAL Training & Wim Hof',
    book: 'wim-hof',
    component: BoxBreathing,
    color: '#3B82F6',
    category: 'health',
  },
  {
    id: 'wim-hof-method',
    title: 'Wim Hof Method',
    description: 'Power breathing followed by breath retention. Boost immunity and cold resistance.',
    source: 'The Wim Hof Method',
    book: 'wim-hof',
    component: WimHofMethod,
    color: '#06B6D4',
    category: 'health',
  },
  {
    id: 'protein-synthesis',
    title: 'Muscle Protein Synthesis',
    description: 'Optimize protein timing and distribution for maximum muscle growth and recovery.',
    source: 'Outlive by Peter Attia',
    book: 'outlive',
    component: ProteinSynthesis,
    color: '#22C55E',
    category: 'health',
  },
  {
    id: 'mindfulness-meditation',
    title: 'Mindfulness Meditation',
    description: 'Train attention through the focus-wander-notice-return loop. Change your brain structure.',
    source: '10% Happier & Meditation Research',
    book: 'other',
    component: MindfulnessMeditation,
    color: '#8B5CF6',
    category: 'health',
  },

  // New Philosophy visualizations
  {
    id: 'logotherapy',
    title: "Logotherapy: Finding Meaning",
    description: "Viktor Frankl's three sources of meaning: creating, experiencing, and our attitude toward suffering.",
    source: "Man's Search for Meaning by Viktor Frankl",
    book: 'mans-search',
    component: Logotherapy,
    color: '#F59E0B',
    category: 'philosophy',
  },
  {
    id: 'stoic-dichotomy',
    title: 'Dichotomy of Control',
    description: 'Focus on what you control (thoughts, actions) and accept what you cannot (others, events).',
    source: 'Stoic Philosophy - Epictetus & Marcus Aurelius',
    book: 'stoic',
    component: StoicDichotomy,
    color: '#3B82F6',
    category: 'philosophy',
  },

  // Blockchain
  {
    id: 'blockchain-basics',
    title: 'Blockchain Fundamentals',
    description: 'Hash-linked blocks create an immutable, decentralized ledger. Understand the foundation of Web3.',
    source: 'Token Economy & DeFi Foundations',
    book: 'blockchain',
    component: BlockchainBasics,
    color: '#F59E0B',
    category: 'wealth',
  },

  // Talk Like TED
  {
    id: 'rule-of-three',
    title: 'The Rule of Three',
    description: 'Our brains love patterns of three. Structure your message in threes for maximum memorability.',
    source: 'Talk Like TED by Carmine Gallo',
    book: 'talk-like-ted',
    component: RuleOfThree,
    color: '#EF4444',
    category: 'negotiation',
  },
  {
    id: 'jaw-dropping-moment',
    title: 'The Jaw-Dropping Moment',
    description: 'Create one emotionally charged moment that your audience will remember forever.',
    source: 'Talk Like TED by Carmine Gallo',
    book: 'talk-like-ted',
    component: JawDroppingMoment,
    color: '#EF4444',
    category: 'negotiation',
  },

  // Body Language
  {
    id: 'pacifying-behaviors',
    title: 'Pacifying Behaviors',
    description: 'Learn to spot stress signals: neck touching, face rubbing, and self-soothing gestures.',
    source: 'What Every BODY is Saying by Joe Navarro',
    book: 'body-language',
    component: PacifyingBehaviors,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'feet-dont-lie',
    title: "Feet Don't Lie",
    description: 'The feet are the most honest part of the body. Learn what feet position reveals.',
    source: 'What Every BODY is Saying by Joe Navarro',
    book: 'body-language',
    component: FeetDontLie,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'power-poses',
    title: 'Power Poses',
    description: 'Expansive postures convey confidence. Learn the difference between high and low power poses.',
    source: 'The Definitive Book of Body Language by Allan Pease',
    book: 'body-language',
    component: PowerPoses,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'mirroring-rapport',
    title: 'Mirroring & Rapport',
    description: 'Subtly matching body language builds unconscious connection and trust.',
    source: 'The Definitive Book of Body Language by Allan Pease',
    book: 'body-language',
    component: MirroringRapport,
    color: '#8B5CF6',
    category: 'negotiation',
  },

  // Getting to Yes
  {
    id: 'interest-vs-positions',
    title: 'Interests vs Positions',
    description: 'Positions are what you say you want. Interests are why you want it. Focus on the why.',
    source: 'Getting to Yes by Roger Fisher',
    book: 'getting-to-yes',
    component: InterestVsPositions,
    color: '#22C55E',
    category: 'negotiation',
  },
  {
    id: 'batna-power',
    title: 'BATNA Power',
    description: 'Your Best Alternative To Negotiated Agreement determines your negotiating power.',
    source: 'Getting to Yes by Roger Fisher',
    book: 'getting-to-yes',
    component: BATNAPower,
    color: '#22C55E',
    category: 'negotiation',
  },

  // Never Eat Alone
  {
    id: 'network-effect',
    title: 'The Network Effect',
    description: "Metcalfe's Law: Network value grows exponentially with each connection you add.",
    source: 'Never Eat Alone by Keith Ferrazzi',
    book: 'never-eat-alone',
    component: NetworkEffect,
    color: '#3B82F6',
    category: 'negotiation',
  },
  {
    id: 'generosity-loop',
    title: 'The Generosity Loop',
    description: 'Give before you ask. Build a relationship bank account before making withdrawals.',
    source: 'Never Eat Alone by Keith Ferrazzi',
    book: 'never-eat-alone',
    component: GenerosityLoop,
    color: '#3B82F6',
    category: 'negotiation',
  },

  // Richest Man in Babylon
  {
    id: 'pay-yourself-first',
    title: 'Pay Yourself First',
    description: 'Save 10% of everything you earn. This is the first law of building wealth.',
    source: 'The Richest Man in Babylon by George Clason',
    book: 'richest-man',
    component: PayYourselfFirst,
    color: '#F59E0B',
    category: 'wealth',
  },
  {
    id: 'seven-cures',
    title: 'Seven Cures for a Lean Purse',
    description: 'The timeless principles of wealth building from ancient Babylon.',
    source: 'The Richest Man in Babylon by George Clason',
    book: 'richest-man',
    component: SevenCures,
    color: '#F59E0B',
    category: 'wealth',
  },

  // Rich Dad Poor Dad
  {
    id: 'asset-liability',
    title: 'Assets vs Liabilities',
    description: 'Assets put money in your pocket. Liabilities take money out. Know the difference.',
    source: 'Rich Dad Poor Dad by Robert Kiyosaki',
    book: 'rich-dad',
    component: AssetLiability,
    color: '#22C55E',
    category: 'wealth',
  },
  {
    id: 'cashflow-quadrant',
    title: 'The Cashflow Quadrant',
    description: 'Four ways to earn: Employee, Self-employed, Business owner, Investor. Move right.',
    source: 'Rich Dad Poor Dad by Robert Kiyosaki',
    book: 'rich-dad',
    component: CashflowQuadrant,
    color: '#22C55E',
    category: 'wealth',
  },

  // Tax-Free Wealth
  {
    id: 'tax-buckets',
    title: 'The Three Tax Buckets',
    description: 'Taxed now, taxed later, or never taxed. The wealthy focus on the third bucket.',
    source: 'Tax-Free Wealth by Tom Wheelwright',
    book: 'tax-free',
    component: TaxBuckets,
    color: '#10B981',
    category: 'wealth',
  },
  {
    id: 'tax-strategy-quadrant',
    title: 'Tax Strategy Quadrant',
    description: 'Where you earn determines how much you keep. Move from E/S to B/I quadrants.',
    source: 'Tax-Free Wealth by Tom Wheelwright',
    book: 'tax-free',
    component: TaxStrategyQuadrant,
    color: '#10B981',
    category: 'wealth',
  },

  // Buy Then Build
  {
    id: 'buy-vs-build',
    title: 'Buy vs Build',
    description: 'Why buying an existing business beats starting from scratch.',
    source: 'Buy Then Build by Walker Deibel',
    book: 'buy-then-build',
    component: BuyVsBuild,
    color: '#3B82F6',
    category: 'wealth',
  },
  {
    id: 'acquisition-criteria',
    title: 'Acquisition Criteria Checklist',
    description: 'Use this checklist to evaluate potential business acquisitions.',
    source: 'Buy Then Build by Walker Deibel',
    book: 'buy-then-build',
    component: AcquisitionCriteria,
    color: '#3B82F6',
    category: 'wealth',
  },

  // Can't Hurt Me
  {
    id: 'forty-percent-rule',
    title: 'The 40% Rule',
    description: "When your mind says you're done, you're only 40% done. Push through the governor.",
    source: "Can't Hurt Me by David Goggins",
    book: 'cant-hurt-me',
    component: FortyPercentRule,
    color: '#EF4444',
    category: 'resilience',
  },
  {
    id: 'cookie-jar',
    title: 'The Cookie Jar',
    description: 'Store past victories to draw strength from when you need it most.',
    source: "Can't Hurt Me by David Goggins",
    book: 'cant-hurt-me',
    component: CookieJar,
    color: '#EF4444',
    category: 'resilience',
  },

  // Power of Full Engagement
  {
    id: 'energy-pyramid',
    title: 'The Energy Pyramid',
    description: 'Physical, emotional, mental, spiritual—build your energy from the foundation up.',
    source: 'The Power of Full Engagement by Jim Loehr',
    book: 'full-engagement',
    component: EnergyPyramid,
    color: '#22C55E',
    category: 'health',
  },
  {
    id: 'work-rest-cycle',
    title: 'Work-Rest Oscillation',
    description: 'Peak performers oscillate between stress and recovery. 90 minutes on, 20 off.',
    source: 'The Power of Full Engagement by Jim Loehr',
    book: 'full-engagement',
    component: WorkRestCycle,
    color: '#22C55E',
    category: 'health',
  },

  // Peak Performance
  {
    id: 'stress-recovery-balance',
    title: 'Stress + Recovery = Growth',
    description: 'Growth happens when balanced stress triggers recovery-driven adaptation.',
    source: 'Peak Performance by Brad Stulberg',
    book: 'peak-performance',
    component: StressRecoveryBalance,
    color: '#EF4444',
    category: 'health',
  },
  {
    id: 'purpose-pyramid',
    title: 'The Purpose Pyramid',
    description: 'Self-transcending purpose is more sustainable than self-serving motivation.',
    source: 'Peak Performance by Brad Stulberg',
    book: 'peak-performance',
    component: PurposePyramid,
    color: '#EF4444',
    category: 'philosophy',
  },

  // Extreme Ownership
  {
    id: 'extreme-ownership-principle',
    title: 'Extreme Ownership',
    description: 'Leaders take complete ownership of everything in their world. No excuses.',
    source: 'Extreme Ownership by Jocko Willink',
    book: 'extreme-ownership',
    component: ExtremeOwnershipPrinciple,
    color: '#374151',
    category: 'resilience',
  },
  {
    id: 'decentralized-command',
    title: 'Decentralized Command',
    description: 'Push decision-making down. Everyone understands the mission and can act independently.',
    source: 'Extreme Ownership by Jocko Willink',
    book: 'extreme-ownership',
    component: DecentralizedCommand,
    color: '#374151',
    category: 'decisions',
  },

  // Leaders Eat Last
  {
    id: 'circle-of-safety',
    title: 'The Circle of Safety',
    description: 'Leaders create psychological safety so teams can focus on external threats.',
    source: 'Leaders Eat Last by Simon Sinek',
    book: 'leaders-eat-last',
    component: CircleOfSafety,
    color: '#F59E0B',
    category: 'resilience',
  },
  {
    id: 'leadership-chemicals',
    title: 'Leadership Chemicals',
    description: 'EDSO: Endorphins, dopamine, serotonin, oxytocin—and the dangers of cortisol.',
    source: 'Leaders Eat Last by Simon Sinek',
    book: 'leaders-eat-last',
    component: LeadershipChemicals,
    color: '#F59E0B',
    category: 'health',
  },

  // Emotional Intelligence 2.0
  {
    id: 'eq-quadrants',
    title: 'The EQ Quadrants',
    description: 'Self-awareness, self-management, social awareness, relationship management.',
    source: 'Emotional Intelligence 2.0 by Travis Bradberry',
    book: 'eq-2',
    component: EQQuadrants,
    color: '#8B5CF6',
    category: 'psychology',
  },
  {
    id: 'six-second-pause',
    title: 'The 6-Second Pause',
    description: 'Create space between stimulus and response. Six seconds can change everything.',
    source: 'Emotional Intelligence 2.0 by Travis Bradberry',
    book: 'eq-2',
    component: SixSecondPause,
    color: '#8B5CF6',
    category: 'psychology',
  },

  // Nonviolent Communication
  {
    id: 'nvc-four-steps',
    title: 'OFNR: The NVC Process',
    description: 'Observations, Feelings, Needs, Requests—communicate without triggering defense.',
    source: 'Nonviolent Communication by Marshall Rosenberg',
    book: 'nvc',
    component: NVCFourSteps,
    color: '#22C55E',
    category: 'negotiation',
  },
  {
    id: 'request-vs-demand',
    title: 'Requests vs Demands',
    description: 'A true request allows "no" without punishment. Demands disguised as requests backfire.',
    source: 'Nonviolent Communication by Marshall Rosenberg',
    book: 'nvc',
    component: RequestVsDemand,
    color: '#22C55E',
    category: 'negotiation',
  },

  // Crucial Conversations
  {
    id: 'state-path',
    title: 'STATE Your Path',
    description: 'Share facts, Tell your story, Ask for their path, Talk tentatively, Encourage testing.',
    source: 'Crucial Conversations by Kerry Patterson',
    book: 'crucial-conversations',
    component: STATEPath,
    color: '#EC4899',
    category: 'negotiation',
  },
  {
    id: 'safety-restoration',
    title: 'Restoring Safety',
    description: 'When safety is at risk, people go to silence or violence. Learn to restore dialogue.',
    source: 'Crucial Conversations by Kerry Patterson',
    book: 'crucial-conversations',
    component: SafetyRestoration,
    color: '#EC4899',
    category: 'negotiation',
  },

  // Difficult Conversations
  {
    id: 'three-conversations',
    title: 'The Three Conversations',
    description: 'Every difficult conversation has three layers: What Happened, Feelings, Identity.',
    source: 'Difficult Conversations by Douglas Stone',
    book: 'difficult-conversations',
    component: ThreeConversations,
    color: '#F97316',
    category: 'negotiation',
  },
  {
    id: 'contribution-vs-blame',
    title: 'Contribution vs Blame',
    description: 'Shift from "whose fault?" to "how did we both contribute?" for better outcomes.',
    source: 'Difficult Conversations by Douglas Stone',
    book: 'difficult-conversations',
    component: ContributionVsBlame,
    color: '#F97316',
    category: 'negotiation',
  },

  // The Daily Stoic
  {
    id: 'dichotomy-control',
    title: 'Dichotomy of Control',
    description: 'Sort everything into what you control and what you don\'t. Focus only on the former.',
    source: 'The Daily Stoic by Ryan Holiday',
    book: 'daily-stoic',
    component: DichotomyOfControl,
    color: '#3B82F6',
    category: 'philosophy',
  },
  {
    id: 'memento-mori',
    title: 'Memento Mori',
    description: 'Remember death. Visualize your limited time to clarify what truly matters.',
    source: 'The Daily Stoic by Ryan Holiday',
    book: 'daily-stoic',
    component: MementoMori,
    color: '#3B82F6',
    category: 'philosophy',
  },

  // Thinking in Bets
  {
    id: 'resulting-bias',
    title: 'Resulting (Outcome Bias)',
    description: 'Don\'t judge decisions by outcomes. Good decisions can have bad results and vice versa.',
    source: 'Thinking in Bets by Annie Duke',
    book: 'thinking-in-bets',
    component: ResultingBias,
    color: '#8B5CF6',
    category: 'decisions',
  },
  {
    id: 'confidence-calibration',
    title: 'Confidence Calibration',
    description: 'How accurate are your probability estimates? Well-calibrated thinkers know their limits.',
    source: 'Thinking in Bets by Annie Duke',
    book: 'thinking-in-bets',
    component: ConfidenceCalibration,
    color: '#8B5CF6',
    category: 'decisions',
  },

  // The Status Game
  {
    id: 'status-games',
    title: 'Dominance vs Prestige',
    description: 'Two paths to status: force people to follow, or earn their admiration.',
    source: 'The Status Game by Will Storr',
    book: 'status-game',
    component: StatusGames,
    color: '#F59E0B',
    category: 'psychology',
  },
  {
    id: 'virtue-success-status',
    title: 'Three Status Games',
    description: 'Dominance, virtue, and success—which game are you playing?',
    source: 'The Status Game by Will Storr',
    book: 'status-game',
    component: VirtueSuccessStatus,
    color: '#F59E0B',
    category: 'psychology',
  },

  // Impro
  {
    id: 'status-transactions',
    title: 'Status Transactions',
    description: 'Every interaction involves status plays. Learn to consciously play any status.',
    source: 'Impro by Keith Johnstone',
    book: 'impro',
    component: StatusTransactions,
    color: '#EC4899',
    category: 'psychology',
  },
  {
    id: 'yes-and-principle',
    title: '"Yes, And" Principle',
    description: 'Accept offers and build on them. Blocking kills scenes and conversations.',
    source: 'Impro by Keith Johnstone',
    book: 'impro',
    component: YesAndPrinciple,
    color: '#EC4899',
    category: 'negotiation',
  },

  // Building a StoryBrand
  {
    id: 'storybrand-framework',
    title: 'The StoryBrand Framework',
    description: 'Seven elements of a compelling brand story. Character, problem, guide, plan, action, failure, success.',
    source: 'Building a StoryBrand by Donald Miller',
    book: 'storybrand',
    component: StoryBrandFramework,
    color: '#3B82F6',
    category: 'negotiation',
  },
  {
    id: 'customer-as-hero',
    title: 'Customer as Hero',
    description: 'Your customer is the hero of the story. You are the guide. Stop making it about you.',
    source: 'Building a StoryBrand by Donald Miller',
    book: 'storybrand',
    component: CustomerAsHero,
    color: '#3B82F6',
    category: 'negotiation',
  },

  // Crushing It
  {
    id: 'document-dont-create',
    title: "Document, Don't Create",
    description: 'Stop trying to create content. Document your journey instead.',
    source: 'Crushing It! by Gary Vaynerchuk',
    book: 'crush-it',
    component: DocumentDontCreate,
    color: '#EF4444',
    category: 'habits',
  },
  {
    id: 'patience-hustle',
    title: 'Macro Patience, Micro Speed',
    description: 'Think in decades, act in days. Long-term patience with short-term urgency.',
    source: 'Crushing It! by Gary Vaynerchuk',
    book: 'crush-it',
    component: PatienceHustle,
    color: '#EF4444',
    category: 'habits',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

// First 5 visualizations are free starter visuals
const FREE_STARTER_VISUALS = [
  'habit-loop',
  'compound-growth',
  'system-thinking',
  'pareto-principle',
  'growth-mindset',
];

const UNLOCK_COST = 500;

export function VisualLab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBook, setActiveBook] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  // Progress store for XP and unlocking
  const {
    userProgress,
    unlockedVisualizations,
    unlockVisualization,
    isVisualizationUnlocked,
    getUnlockedVisualizationsCount,
  } = useProgressStore();

  // Check if visualization is unlocked (free starters or purchased)
  const isVizUnlocked = (vizId: string) => {
    return FREE_STARTER_VISUALS.includes(vizId) || isVisualizationUnlocked(vizId);
  };

  // Handle unlock attempt
  const handleUnlock = (vizId: string) => {
    if (userProgress.xp < UNLOCK_COST) {
      setUnlockError(`Not enough XP! You need ${UNLOCK_COST} XP to unlock. (Current: ${userProgress.xp} XP)`);
      setTimeout(() => setUnlockError(null), 3000);
      return;
    }

    const success = unlockVisualization(vizId);
    if (!success) {
      setUnlockError('Failed to unlock. Please try again.');
      setTimeout(() => setUnlockError(null), 3000);
    }
  };

  // Favorites state with localStorage persistence
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('gyanmarg-viz-favorites');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('gyanmarg-viz-favorites', JSON.stringify([...favorites]));
  }, [favorites]);

  // Toggle favorite
  const toggleFavorite = (vizId: string) => {
    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(vizId)) {
        newFavs.delete(vizId);
      } else {
        newFavs.add(vizId);
      }
      return newFavs;
    });
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setCategoryDropdownOpen(false);
      }
      if (bookRef.current && !bookRef.current.contains(e.target as Node)) {
        setBookDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get available books with counts
  const availableBooks = useMemo(() => {
    const bookCounts: Record<string, number> = {};
    visualizations.forEach(v => {
      bookCounts[v.book] = (bookCounts[v.book] || 0) + 1;
    });
    return books.filter(b => b.id === 'all' || bookCounts[b.id] > 0);
  }, []);

  // Filter visualizations based on category, book, search query, and favorites
  const filteredVisualizations = useMemo(() => {
    return visualizations.filter(v => {
      let categoryMatch: boolean;
      if (activeCategory === 'all') {
        categoryMatch = true;
      } else if (activeCategory === 'unlocked') {
        categoryMatch = isVizUnlocked(v.id);
      } else if (activeCategory === 'favorites') {
        categoryMatch = favorites.has(v.id);
      } else {
        categoryMatch = v.category === activeCategory;
      }
      const bookMatch = activeBook === 'all' || v.book === activeBook;
      const searchMatch = searchQuery === '' ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.source.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && bookMatch && searchMatch;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, activeBook, searchQuery, favorites, unlockedVisualizations]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredVisualizations.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === filteredVisualizations.length - 1 ? 0 : prev + 1));
  };

  // Reset index when filters change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveIndex(0);
  };

  const handleBookChange = (bookId: string) => {
    setActiveBook(bookId);
    setActiveIndex(0);
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setActiveBook('all');
    setSearchQuery('');
    setActiveIndex(0);
  };

  const activeViz = filteredVisualizations[activeIndex];
  const ActiveComponent = activeViz?.component;
  const activeCat = categories.find(c => c.id === activeCategory);
  const activeBookData = books.find(b => b.id === activeBook);

  const hasActiveFilters = (activeCategory !== 'all') || activeBook !== 'all' || searchQuery !== '';

  // Count unlocked visuals
  const totalUnlocked = FREE_STARTER_VISUALS.length + getUnlockedVisualizationsCount();
  const totalVisuals = visualizations.length;

  return (
    <ModuleLayout
      title="Visual Learning Lab"
      subtitle="Interactive diagrams that bring concepts to life"
      icon={<Sparkles className="w-5 h-5" />}
      headerGradient="aurora"
      rightContent={
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-lavender/10 border border-lavender/20">
            <Unlock className="w-4 h-4 text-lavender" />
            <span className="text-lavender font-medium text-sm">
              {totalUnlocked}/{totalVisuals}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-golden/10 border border-golden/20">
            <Coins className="w-4 h-4 text-golden" />
            <span className="text-golden font-semibold text-sm">
              {userProgress.xp} XP
            </span>
          </div>
        </div>
      }
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Search and Filter Bar */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Search visualizations..."
                className="w-full pl-10 pr-4 py-2.5 bg-surface border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveIndex(0);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div ref={categoryRef} className="relative">
              <button
                onClick={() => {
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                  setBookDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 bg-surface border rounded-xl text-sm transition-all min-w-[180px] justify-between ${
                  activeCategory !== 'all'
                    ? 'border-amber-500/50 text-amber-400'
                    : 'border-white/10 text-gray-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span className="truncate">
                    {activeCategory === 'all' ? 'All Categories' : activeCat?.name}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {categoryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-surface border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden max-h-[300px] overflow-y-auto"
                  >
                    {categories.map((cat) => {
                      const count = cat.id === 'all'
                        ? visualizations.filter(v => activeBook === 'all' || v.book === activeBook).length
                        : cat.id === 'unlocked'
                        ? visualizations.filter(v => isVizUnlocked(v.id) && (activeBook === 'all' || v.book === activeBook)).length
                        : cat.id === 'favorites'
                        ? visualizations.filter(v => favorites.has(v.id) && (activeBook === 'all' || v.book === activeBook)).length
                        : visualizations.filter(v => v.category === cat.id && (activeBook === 'all' || v.book === activeBook)).length;
                      const isActive = activeCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            handleCategoryChange(cat.id);
                            setCategoryDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-all ${
                            isActive
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'text-gray-300 hover:bg-white/5'
                          }`}
                        >
                          <span className="text-base">{cat.icon}</span>
                          <span className="flex-1">{cat.name}</span>
                          <span className="text-xs text-gray-500">({count})</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Dropdown */}
            <div ref={bookRef} className="relative">
              <button
                onClick={() => {
                  setBookDropdownOpen(!bookDropdownOpen);
                  setCategoryDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 bg-surface border rounded-xl text-sm transition-all min-w-[180px] justify-between ${
                  activeBook !== 'all'
                    ? 'border-amber-500/50 text-amber-400'
                    : 'border-white/10 text-gray-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="truncate">
                    {activeBook === 'all' ? 'All Books' : activeBookData?.shortName}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${bookDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {bookDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-surface border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden max-h-[300px] overflow-y-auto"
                  >
                    {availableBooks.map((book) => {
                      const count = book.id === 'all'
                        ? visualizations.filter(v => activeCategory === 'all' || v.category === activeCategory).length
                        : visualizations.filter(v => v.book === book.id && (activeCategory === 'all' || v.category === activeCategory)).length;
                      const isActive = activeBook === book.id;

                      if (count === 0 && book.id !== 'all') return null;

                      return (
                        <button
                          key={book.id}
                          onClick={() => {
                            handleBookChange(book.id);
                            setBookDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-all ${
                            isActive
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'text-gray-300 hover:bg-white/5'
                          }`}
                        >
                          <BookOpen className="w-4 h-4" />
                          <span className="flex-1 truncate">{book.shortName}</span>
                          <span className="text-xs text-gray-500">({count})</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active filter summary */}
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <span className="text-xs text-text-muted">
              {filteredVisualizations.length} visualization{filteredVisualizations.length !== 1 ? 's' : ''}
            </span>

            {hasActiveFilters && (
              <>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-purple-500/20 text-purple-400">
                      <Search className="w-3 h-3" />
                      "{searchQuery}"
                      <button onClick={() => { setSearchQuery(''); setActiveIndex(0); }} className="hover:opacity-70">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {activeCategory !== 'all' && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium"
                      style={{
                        backgroundColor: activeCat?.color + '20',
                        color: activeCat?.color,
                      }}
                    >
                      {activeCat?.icon} {activeCat?.name}
                      <button onClick={() => { setActiveCategory('all'); setActiveIndex(0); }} className="hover:opacity-70">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {activeBook !== 'all' && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium"
                      style={{
                        backgroundColor: activeBookData?.color + '20',
                        color: activeBookData?.color,
                      }}
                    >
                      <BookOpen className="w-3 h-3" /> {activeBookData?.shortName}
                      <button onClick={() => { setActiveBook('all'); setActiveIndex(0); }} className="hover:opacity-70">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-[10px] text-gray-500 hover:text-gray-300 underline"
                  >
                    Clear all
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Navigation dots */}
        {filteredVisualizations.length > 0 && (
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-1.5 flex-wrap max-w-md mx-auto">
            {filteredVisualizations.map((viz, index) => {
              const unlocked = isVizUnlocked(viz.id);
              return (
                <button
                  key={viz.id}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-6'
                      : unlocked
                        ? 'w-2 bg-surface hover:bg-elevated'
                        : 'w-2 bg-surface/50 hover:bg-surface'
                  }`}
                  style={{
                    backgroundColor: index === activeIndex ? viz.color : undefined,
                    opacity: !unlocked && index !== activeIndex ? 0.4 : 1,
                  }}
                  title={unlocked ? viz.title : `🔒 ${viz.title} (Locked)`}
                />
              );
            })}
          </motion.div>
        )}

        {/* Unlock error notification */}
        <AnimatePresence>
          {unlockError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-xl bg-coral/20 border border-coral/40 text-coral text-sm font-medium shadow-lg"
            >
              {unlockError}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main visualization card */}
        {activeViz && ActiveComponent ? (
          <motion.div variants={itemVariants}>
            <GlassCard className="relative overflow-hidden">
              {/* Navigation arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10 rounded-full glass-light border border-white/10
                         flex items-center justify-center text-text-muted hover:text-text-primary
                         hover:border-white/20 transition-all hidden md:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                         w-10 h-10 rounded-full glass-light border border-white/10
                         flex items-center justify-center text-text-muted hover:text-text-primary
                         hover:border-white/20 transition-all hidden md:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Visualization content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeViz.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 md:px-12"
                >
                  {/* Title and description */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: categories.find(c => c.id === activeViz.category)?.color + '20',
                          color: categories.find(c => c.id === activeViz.category)?.color
                        }}
                      >
                        {categories.find(c => c.id === activeViz.category)?.name}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1"
                        style={{
                          backgroundColor: books.find(b => b.id === activeViz.book)?.color + '20',
                          color: books.find(b => b.id === activeViz.book)?.color
                        }}
                      >
                        <BookOpen className="w-2.5 h-2.5" />
                        {books.find(b => b.id === activeViz.book)?.shortName}
                      </span>
                      {/* Locked/Unlocked badge */}
                      {isVizUnlocked(activeViz.id) ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-sage/20 text-sage flex items-center gap-1">
                          <Unlock className="w-2.5 h-2.5" />
                          Unlocked
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/20 text-coral flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          Locked
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h2
                        className="text-xl font-display font-bold"
                        style={{ color: activeViz.color }}
                      >
                        {activeViz.title}
                      </h2>
                      {isVizUnlocked(activeViz.id) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(activeViz.id);
                          }}
                          className={`p-1.5 rounded-lg transition-all ${
                            favorites.has(activeViz.id)
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-white/5 text-gray-500 hover:text-yellow-400 hover:bg-yellow-500/10'
                          }`}
                          title={favorites.has(activeViz.id) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <Star className={`w-4 h-4 ${favorites.has(activeViz.id) ? 'fill-current' : ''}`} />
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                      {activeViz.description}
                    </p>
                  </div>

                  {/* Interactive component or Locked state */}
                  {isVizUnlocked(activeViz.id) ? (
                    <>
                      <div className="flex justify-center">
                        <ActiveComponent />
                      </div>

                      {/* Source */}
                      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-text-muted">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Source: {activeViz.source}</span>
                      </div>
                    </>
                  ) : (
                    /* Locked state - show unlock button */
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="w-20 h-20 rounded-2xl bg-surface/50 border border-white/10 flex items-center justify-center mb-6">
                        <Lock className="w-10 h-10 text-text-muted" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                        This visualization is locked
                      </h3>
                      <p className="text-sm text-text-muted mb-6 text-center max-w-sm">
                        Spend {UNLOCK_COST} XP to unlock this interactive visualization and add it to your collection.
                      </p>
                      <button
                        onClick={() => handleUnlock(activeViz.id)}
                        disabled={userProgress.xp < UNLOCK_COST}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                          userProgress.xp >= UNLOCK_COST
                            ? 'bg-gradient-to-r from-golden to-sunrise text-base hover:opacity-90 hover:scale-105'
                            : 'bg-surface/50 text-text-muted cursor-not-allowed'
                        }`}
                      >
                        <Coins className="w-5 h-5" />
                        <span>Unlock for {UNLOCK_COST} XP</span>
                      </button>
                      {userProgress.xp < UNLOCK_COST && (
                        <p className="text-xs text-coral mt-3">
                          You need {UNLOCK_COST - userProgress.xp} more XP to unlock
                        </p>
                      )}

                      {/* Source (still shown even when locked) */}
                      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-text-muted">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Source: {activeViz.source}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants}>
            <GlassCard className="p-8 text-center">
              <p className="text-gray-500">No visualizations match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-3 text-xs text-amber-400 hover:text-amber-300"
              >
                Clear filters
              </button>
            </GlassCard>
          </motion.div>
        )}

        {/* Mobile navigation */}
        {filteredVisualizations.length > 0 && (
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={goToPrev}
              className="px-4 py-2 glass-light border border-white/10 hover:border-white/20 rounded-xl text-sm text-text-secondary transition-all"
            >
              ← Previous
            </button>
            <span className="text-xs text-text-muted">
              {activeIndex + 1} / {filteredVisualizations.length}
            </span>
            <button
              onClick={goToNext}
              className="px-4 py-2 glass-light border border-white/10 hover:border-white/20 rounded-xl text-sm text-text-secondary transition-all"
            >
              Next →
            </button>
          </motion.div>
        )}

        {/* Quick links grid */}
        {filteredVisualizations.length > 0 && (
          <Section
            title={
              hasActiveFilters
                ? `Filtered Concepts`
                : 'All Concepts'
            }
            subtitle={`${filteredVisualizations.length} visualizations`}
          >
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {filteredVisualizations.map((viz, index) => {
                const unlocked = isVizUnlocked(viz.id);
                return (
                  <motion.button
                    key={viz.id}
                    variants={itemVariants}
                    onClick={() => setActiveIndex(index)}
                    className={`p-3 rounded-xl border text-left transition-all relative ${
                      index === activeIndex
                        ? 'glass border-white/20'
                        : unlocked
                          ? 'glass-light border-white/10 hover:border-white/20'
                          : 'glass-light border-white/5 opacity-60 hover:opacity-80'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Top right icons */}
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      {!unlocked && (
                        <Lock className="w-3 h-3 text-coral" />
                      )}
                      {unlocked && favorites.has(viz.id) && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <div
                      className={`text-sm font-medium mb-1 line-clamp-1 pr-6 ${!unlocked ? 'opacity-70' : ''}`}
                      style={{ color: viz.color }}
                    >
                      {viz.title}
                    </div>
                    <p className="text-[10px] text-text-muted line-clamp-1">
                      {unlocked ? viz.source : `🔒 ${UNLOCK_COST} XP to unlock`}
                    </p>
                  </motion.button>
                );
              })}
            </motion.div>
          </Section>
        )}
      </motion.div>
    </ModuleLayout>
  );
}

export default VisualLab;
