import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, Lightbulb } from 'lucide-react';
import { GlassCard } from '@/components/molecules';

// Import all visualizations for the daily rotation
import {
  HabitLoopDiagram,
  CompoundGrowthChart,
  System1vs2Diagram,
  FlowStateDiagram,
  CircleOfCompetence,
  ParetoPrinciple,
  EisenhowerMatrix,
  SecondOrderThinking,
  InversionThinking,
  FirstPrinciples,
  GrowthMindset,
  MarginOfSafety,
  BarbellStrategy,
  TacticalEmpathy,
  AckermanModel,
  LossAversion,
  IdentityHabits,
  FourLawsHabits,
  BeWater,
  Antifragility,
  DichotomyOfControl,
  FortyPercentRule,
  InterestVsPositions,
  STATEPath,
  StoryBrandFramework,
  CashflowQuadrant,
  EnergyPyramid,
  StatusGames,
  ResultingBias,
  NVCFourSteps,
} from '@/components/visualizations';

interface DailyViz {
  id: string;
  title: string;
  description: string;
  source: string;
  component: React.ComponentType;
  color: string;
  category: string;
}

// Curated list of impactful visualizations for daily rotation
const dailyVisualizations: DailyViz[] = [
  {
    id: 'habit-loop',
    title: 'The Habit Loop',
    description: 'Every habit follows a 4-step pattern: Cue → Craving → Response → Reward.',
    source: 'Atomic Habits',
    component: HabitLoopDiagram,
    color: '#F59E0B',
    category: 'Habits',
  },
  {
    id: 'compound-growth',
    title: 'The Power of 1%',
    description: 'Getting 1% better every day leads to being 37x better after one year.',
    source: 'Atomic Habits',
    component: CompoundGrowthChart,
    color: '#22C55E',
    category: 'Habits',
  },
  {
    id: 'system-1-2',
    title: 'System 1 vs System 2',
    description: 'Your brain has two modes: fast intuition and slow analysis.',
    source: 'Thinking, Fast and Slow',
    component: System1vs2Diagram,
    color: '#3B82F6',
    category: 'Psychology',
  },
  {
    id: 'flow-state',
    title: 'The Flow State',
    description: 'Flow happens when challenge matches skill. Find your flow channel.',
    source: 'Deep Work',
    component: FlowStateDiagram,
    color: '#22C55E',
    category: 'Performance',
  },
  {
    id: 'circle-competence',
    title: 'Circle of Competence',
    description: 'Know what you truly understand. Stay within your circle for better decisions.',
    source: 'Charlie Munger',
    component: CircleOfCompetence,
    color: '#F59E0B',
    category: 'Decisions',
  },
  {
    id: 'pareto',
    title: 'The 80/20 Rule',
    description: '80% of results come from 20% of efforts. Focus on the vital few.',
    source: 'The 80/20 Principle',
    component: ParetoPrinciple,
    color: '#3B82F6',
    category: 'Productivity',
  },
  {
    id: 'eisenhower',
    title: 'Eisenhower Matrix',
    description: 'Prioritize by urgency and importance. Do, schedule, delegate, or eliminate.',
    source: 'Eisenhower',
    component: EisenhowerMatrix,
    color: '#22C55E',
    category: 'Productivity',
  },
  {
    id: 'second-order',
    title: 'Second-Order Thinking',
    description: 'Ask "And then what?" to see the ripple effects of your decisions.',
    source: 'Howard Marks',
    component: SecondOrderThinking,
    color: '#F59E0B',
    category: 'Decisions',
  },
  {
    id: 'inversion',
    title: 'Inversion Thinking',
    description: 'Ask how to fail, then avoid those things. Avoiding stupidity beats being brilliant.',
    source: 'Charlie Munger',
    component: InversionThinking,
    color: '#22C55E',
    category: 'Decisions',
  },
  {
    id: 'first-principles',
    title: 'First Principles',
    description: 'Break problems down to fundamental truths, then reason up from there.',
    source: 'Elon Musk',
    component: FirstPrinciples,
    color: '#EF4444',
    category: 'Decisions',
  },
  {
    id: 'growth-mindset',
    title: 'Growth vs Fixed Mindset',
    description: 'Abilities are developable through effort, not fixed at birth.',
    source: 'Carol Dweck',
    component: GrowthMindset,
    color: '#22C55E',
    category: 'Mindset',
  },
  {
    id: 'margin-safety',
    title: 'Margin of Safety',
    description: 'Buy assets when price is significantly below intrinsic value.',
    source: 'Ben Graham',
    component: MarginOfSafety,
    color: '#22C55E',
    category: 'Wealth',
  },
  {
    id: 'barbell',
    title: 'Barbell Strategy',
    description: 'Combine extreme safety with extreme risk, avoiding the vulnerable middle.',
    source: 'Nassim Taleb',
    component: BarbellStrategy,
    color: '#3B82F6',
    category: 'Wealth',
  },
  {
    id: 'tactical-empathy',
    title: 'Tactical Empathy',
    description: 'Master FBI negotiation: mirroring, labeling, and calibrated questions.',
    source: 'Never Split the Difference',
    component: TacticalEmpathy,
    color: '#3B82F6',
    category: 'Negotiation',
  },
  {
    id: 'ackerman',
    title: 'Ackerman Model',
    description: 'Systematic bargaining: 65%, 85%, 95%, then precise final number.',
    source: 'Never Split the Difference',
    component: AckermanModel,
    color: '#22C55E',
    category: 'Negotiation',
  },
  {
    id: 'loss-aversion',
    title: 'Loss Aversion',
    description: 'Losses hurt 2x more than equivalent gains feel good.',
    source: 'Kahneman',
    component: LossAversion,
    color: '#EF4444',
    category: 'Psychology',
  },
  {
    id: 'identity-habits',
    title: 'Identity-Based Habits',
    description: 'Focus on who you want to become, not just what you want to achieve.',
    source: 'Atomic Habits',
    component: IdentityHabits,
    color: '#22C55E',
    category: 'Habits',
  },
  {
    id: 'four-laws',
    title: 'Four Laws of Behavior',
    description: 'Make it obvious, attractive, easy, and satisfying.',
    source: 'Atomic Habits',
    component: FourLawsHabits,
    color: '#22C55E',
    category: 'Habits',
  },
  {
    id: 'be-water',
    title: 'Be Water',
    description: 'Adapt to circumstances like water—flow around obstacles.',
    source: 'Bruce Lee',
    component: BeWater,
    color: '#3B82F6',
    category: 'Philosophy',
  },
  {
    id: 'antifragile',
    title: 'Antifragility',
    description: 'Beyond resilience—systems that gain from disorder.',
    source: 'Nassim Taleb',
    component: Antifragility,
    color: '#22C55E',
    category: 'Resilience',
  },
  {
    id: 'dichotomy',
    title: 'Dichotomy of Control',
    description: 'Focus on what you control. Accept what you cannot.',
    source: 'The Daily Stoic',
    component: DichotomyOfControl,
    color: '#3B82F6',
    category: 'Philosophy',
  },
  {
    id: '40-percent',
    title: 'The 40% Rule',
    description: "When your mind says you're done, you're only 40% done.",
    source: "Can't Hurt Me",
    component: FortyPercentRule,
    color: '#EF4444',
    category: 'Resilience',
  },
  {
    id: 'interests-positions',
    title: 'Interests vs Positions',
    description: 'Positions are what you want. Interests are why. Focus on the why.',
    source: 'Getting to Yes',
    component: InterestVsPositions,
    color: '#22C55E',
    category: 'Negotiation',
  },
  {
    id: 'state-path',
    title: 'STATE Your Path',
    description: 'Share facts, Tell story, Ask, Talk tentatively, Encourage testing.',
    source: 'Crucial Conversations',
    component: STATEPath,
    color: '#EC4899',
    category: 'Communication',
  },
  {
    id: 'storybrand',
    title: 'StoryBrand Framework',
    description: 'Character, problem, guide, plan, action, failure, success.',
    source: 'Building a StoryBrand',
    component: StoryBrandFramework,
    color: '#3B82F6',
    category: 'Marketing',
  },
  {
    id: 'cashflow',
    title: 'Cashflow Quadrant',
    description: 'Employee, Self-employed, Business owner, Investor. Move right.',
    source: 'Rich Dad Poor Dad',
    component: CashflowQuadrant,
    color: '#22C55E',
    category: 'Wealth',
  },
  {
    id: 'energy-pyramid',
    title: 'Energy Pyramid',
    description: 'Physical, emotional, mental, spiritual. Build from the foundation.',
    source: 'Power of Full Engagement',
    component: EnergyPyramid,
    color: '#22C55E',
    category: 'Performance',
  },
  {
    id: 'status-games',
    title: 'Dominance vs Prestige',
    description: 'Two paths to status: force or respect. Choose wisely.',
    source: 'The Status Game',
    component: StatusGames,
    color: '#F59E0B',
    category: 'Psychology',
  },
  {
    id: 'resulting',
    title: 'Resulting (Outcome Bias)',
    description: "Don't judge decisions by outcomes. Good decisions can have bad results.",
    source: 'Thinking in Bets',
    component: ResultingBias,
    color: '#8B5CF6',
    category: 'Decisions',
  },
  {
    id: 'nvc',
    title: 'OFNR: The NVC Process',
    description: 'Observations, Feelings, Needs, Requests. Communicate without defense.',
    source: 'Nonviolent Communication',
    component: NVCFourSteps,
    color: '#22C55E',
    category: 'Communication',
  },
];

// Get visualization based on day of year
function getDailyVisualization(): DailyViz {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % dailyVisualizations.length;
  return dailyVisualizations[index];
}

export function VisualOfTheDay() {
  const dailyViz = useMemo(() => getDailyVisualization(), []);
  const DailyComponent = dailyViz.component;

  return (
    <GlassCard className="overflow-hidden">
      {/* Header with link to full lab */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-lavender" />
          <span className="text-xs text-text-muted">Today's concept</span>
        </div>
        <Link
          to="/lab"
          className="flex items-center gap-1 text-xs text-lavender hover:text-sunrise transition-colors"
        >
          <span>Explore all 100+</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Category & Title */}
      <div className="mb-4">
        <span
          className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-2"
          style={{
            backgroundColor: dailyViz.color + '20',
            color: dailyViz.color,
          }}
        >
          {dailyViz.category}
        </span>
        <h4
          className="text-lg font-display font-bold mb-1"
          style={{ color: dailyViz.color }}
        >
          {dailyViz.title}
        </h4>
        <p className="text-xs text-text-secondary">{dailyViz.description}</p>
      </div>

      {/* Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-base/50 rounded-xl p-4 border border-white/5"
      >
        <DailyComponent />
      </motion.div>

      {/* Source */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-text-muted">
        <Lightbulb className="w-3 h-3" />
        <span>From: {dailyViz.source}</span>
      </div>
    </GlassCard>
  );
}

export default VisualOfTheDay;
