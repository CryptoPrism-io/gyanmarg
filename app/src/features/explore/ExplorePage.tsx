import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, X, ChevronRight } from 'lucide-react';
import { springGentle } from '@/lib/animations';
import { BetaAccessGate } from '@/components/organisms/BetaAccessGate';
import { useUserStore } from '@/store/userStore';
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface VizEntry {
  id: string;
  title: string;
  description: string;
  source: string;
  category: string;
  component: React.ComponentType;
  color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FREE_VIZ_IDS = new Set([
  'habit-loop',
  'compound-growth',
  'system-thinking',
  'pareto-principle',
  'growth-mindset',
]);

const CATEGORY_META: Record<string, { label: string; icon: string }> = {
  habits: { label: 'Habits & Productivity', icon: '🎯' },
  psychology: { label: 'Psychology & Biases', icon: '🧠' },
  decisions: { label: 'Decision Making', icon: '⚖️' },
  wealth: { label: 'Wealth & Investing', icon: '💰' },
  negotiation: { label: 'Negotiation & Influence', icon: '🤝' },
  health: { label: 'Health & Performance', icon: '💪' },
  resilience: { label: 'Resilience & Antifragility', icon: '🛡️' },
  philosophy: { label: 'Philosophy & Mindset', icon: '🌊' },
};

const vizList: VizEntry[] = [
  // Habits & Productivity
  { id: 'habit-loop', title: 'The Habit Loop', description: 'Cue → Craving → Response → Reward. Understanding this loop is the key to building good habits.', source: 'Atomic Habits by James Clear', category: 'habits', component: HabitLoopDiagram, color: '#F59E0B' },
  { id: 'compound-growth', title: 'The Power of 1%', description: 'Getting 1% better every day leads to being 37x better after one year.', source: 'Atomic Habits by James Clear', category: 'habits', component: CompoundGrowthChart, color: '#22C55E' },
  { id: 'activation-energy', title: 'Activation Energy', description: 'Reduce friction for good habits, increase it for bad ones.', source: 'Atomic Habits by James Clear', category: 'habits', component: ActivationEnergy, color: '#F59E0B' },
  { id: 'two-minute-rule', title: 'The Two-Minute Rule', description: 'If something takes less than two minutes, do it now.', source: 'Getting Things Done by David Allen', category: 'habits', component: TwoMinuteRule, color: '#F59E0B' },
  { id: 'eisenhower-matrix', title: 'The Eisenhower Matrix', description: 'Prioritize tasks by urgency and importance.', source: 'President Dwight D. Eisenhower', category: 'habits', component: EisenhowerMatrix, color: '#22C55E' },
  { id: 'parkinsons-law', title: "Parkinson's Law", description: 'Work expands to fill the time available.', source: 'Cyril Parkinson', category: 'habits', component: ParkinsonsLaw, color: '#3B82F6' },
  { id: 'zeigarnik-effect', title: 'The Zeigarnik Effect', description: 'Uncompleted tasks occupy our minds more than completed ones.', source: 'Bluma Zeigarnik (1927)', category: 'habits', component: ZeigarnikEffect, color: '#F59E0B' },
  { id: 'flywheel-effect', title: 'The Flywheel Effect', description: 'Early pushes are hardest. But each push builds until momentum becomes self-sustaining.', source: 'Good to Great by Jim Collins', category: 'habits', component: FlywheelEffect, color: '#22C55E' },
  { id: 'deliberate-practice', title: 'Deliberate Practice', description: "10,000 hours of deliberate practice with feedback creates expertise.", source: 'Peak by Anders Ericsson', category: 'habits', component: DeliberatePractice, color: '#F59E0B' },
  { id: 'identity-habits', title: 'Identity-Based Habits', description: 'True behavior change is identity change.', source: 'Atomic Habits by James Clear', category: 'habits', component: IdentityHabits, color: '#22C55E' },
  { id: 'four-laws-habits', title: 'The Four Laws of Behavior Change', description: 'Make it obvious, attractive, easy, and satisfying to build good habits.', source: 'Atomic Habits by James Clear', category: 'habits', component: FourLawsHabits, color: '#22C55E' },
  { id: 'document-dont-create', title: "Document, Don't Create", description: 'Stop trying to create content. Document your journey instead.', source: 'Crushing It! by Gary Vaynerchuk', category: 'habits', component: DocumentDontCreate, color: '#EF4444' },
  { id: 'patience-hustle', title: 'Macro Patience, Micro Speed', description: 'Think in decades, act in days.', source: 'Crushing It! by Gary Vaynerchuk', category: 'habits', component: PatienceHustle, color: '#EF4444' },

  // Psychology & Biases
  { id: 'system-thinking', title: 'System 1 vs System 2', description: 'Your brain has two modes: fast intuition and slow analysis.', source: 'Thinking, Fast and Slow by Daniel Kahneman', category: 'psychology', component: System1vs2Diagram, color: '#3B82F6' },
  { id: 'dunning-kruger', title: 'The Dunning-Kruger Effect', description: 'Confidence peaks early, crashes as you learn more, then rebuilds with true expertise.', source: 'Psychology Research by Dunning & Kruger', category: 'psychology', component: DunningKrugerCurve, color: '#EF4444' },
  { id: 'confirmation-bias', title: 'Confirmation Bias', description: 'We seek evidence that confirms our beliefs and ignore what contradicts them.', source: 'Thinking, Fast and Slow', category: 'psychology', component: ConfirmationBias, color: '#8B5CF6' },
  { id: 'availability-heuristic', title: 'Availability Heuristic', description: 'We judge probability by how easily examples come to mind.', source: 'Thinking, Fast and Slow', category: 'psychology', component: AvailabilityHeuristic, color: '#8B5CF6' },
  { id: 'anchoring-bias', title: 'Anchoring Bias', description: 'The first number you hear influences all subsequent judgments.', source: 'Never Split the Difference / Kahneman', category: 'psychology', component: AnchoringBias, color: '#8B5CF6' },
  { id: 'mere-exposure', title: 'The Mere Exposure Effect', description: 'We prefer things simply because we\'ve been exposed to them more often.', source: 'Robert Zajonc (1968)', category: 'psychology', component: MereExposure, color: '#8B5CF6' },
  { id: 'peak-end-rule', title: 'The Peak-End Rule', description: 'We judge experiences by their peak moments and how they end.', source: 'Daniel Kahneman', category: 'psychology', component: PeakEndRule, color: '#3B82F6' },
  { id: 'hedonic-treadmill', title: 'The Hedonic Treadmill', description: 'No matter what happens, we adapt and return to a baseline happiness level.', source: 'Brickman & Campbell Research', category: 'psychology', component: HedonicTreadmill, color: '#22C55E' },
  { id: 'ladder-of-inference', title: 'Ladder of Inference', description: 'We climb from raw data to conclusions in seconds, often unconsciously.', source: 'Chris Argyris', category: 'psychology', component: LadderOfInference, color: '#06B6D4' },
  { id: 'dark-triad', title: 'The Dark Triad', description: 'Recognize narcissism, Machiavellianism, and psychopathy — and protect yourself.', source: 'Dark Psychology Research', category: 'psychology', component: DarkTriad, color: '#EF4444' },
  { id: 'framing-effect', title: 'The Framing Effect', description: 'How the same information presented differently leads to different decisions.', source: 'Thinking, Fast and Slow by Kahneman', category: 'psychology', component: FramingEffect, color: '#F59E0B' },
  { id: 'spotlight-effect', title: 'The Spotlight Effect', description: 'You are not the center of attention. People notice you far less than you think.', source: 'Thinking, Fast and Slow', category: 'psychology', component: SpotlightEffect, color: '#F59E0B' },
  { id: 'halo-effect', title: 'The Halo Effect', description: 'One positive trait creates a halo of assumed virtues.', source: 'Thinking, Fast and Slow by Kahneman', category: 'psychology', component: HaloEffect, color: '#F59E0B' },
  { id: 'knowledge-illusion', title: 'The Knowledge Illusion', description: 'You know less than you think. Try explaining something in detail to discover the gaps.', source: 'The Knowledge Illusion', category: 'psychology', component: KnowledgeIllusion, color: '#8B5CF6' },
  { id: 'pacifying-behaviors', title: 'Pacifying Behaviors', description: 'Learn to spot stress signals: neck touching, face rubbing, self-soothing gestures.', source: 'What Every BODY is Saying by Joe Navarro', category: 'psychology', component: PacifyingBehaviors, color: '#8B5CF6' },
  { id: 'feet-dont-lie', title: "Feet Don't Lie", description: 'The feet are the most honest part of the body.', source: 'What Every BODY is Saying by Joe Navarro', category: 'psychology', component: FeetDontLie, color: '#8B5CF6' },
  { id: 'power-poses', title: 'Power Poses', description: 'Expansive postures convey confidence.', source: 'The Definitive Book of Body Language by Allan Pease', category: 'psychology', component: PowerPoses, color: '#8B5CF6' },
  { id: 'eq-quadrants', title: 'The EQ Quadrants', description: 'Self-awareness, self-management, social awareness, relationship management.', source: 'Emotional Intelligence 2.0 by Travis Bradberry', category: 'psychology', component: EQQuadrants, color: '#8B5CF6' },
  { id: 'six-second-pause', title: 'The 6-Second Pause', description: 'Create space between stimulus and response. Six seconds can change everything.', source: 'Emotional Intelligence 2.0 by Travis Bradberry', category: 'psychology', component: SixSecondPause, color: '#8B5CF6' },
  { id: 'status-games', title: 'Dominance vs Prestige', description: 'Two paths to status: force people to follow, or earn their admiration.', source: 'The Status Game by Will Storr', category: 'psychology', component: StatusGames, color: '#F59E0B' },
  { id: 'virtue-success-status', title: 'Three Status Games', description: 'Dominance, virtue, and success — which game are you playing?', source: 'The Status Game by Will Storr', category: 'psychology', component: VirtueSuccessStatus, color: '#F59E0B' },
  { id: 'status-transactions', title: 'Status Transactions', description: 'Every interaction involves status plays. Learn to consciously play any status.', source: 'Impro by Keith Johnstone', category: 'psychology', component: StatusTransactions, color: '#EC4899' },

  // Decision Making
  { id: 'loss-aversion', title: 'Loss Aversion', description: 'Losses hurt roughly 2x more than equivalent gains feel good.', source: 'Thinking, Fast and Slow by Kahneman', category: 'decisions', component: LossAversion, color: '#EF4444' },
  { id: 'sunk-cost-fallacy', title: 'Sunk Cost Fallacy', description: 'We irrationally continue investing because of past costs, even when cutting losses is smart.', source: 'Behavioral Economics', category: 'decisions', component: SunkCostFallacy, color: '#EF4444' },
  { id: 'second-order-thinking', title: 'Second-Order Thinking', description: 'Ask "And then what?" to see the ripple effects of your decisions.', source: 'Howard Marks / Charlie Munger', category: 'decisions', component: SecondOrderThinking, color: '#F59E0B' },
  { id: 'inversion-thinking', title: 'Inversion Thinking', description: 'Ask how to fail — then avoid those things. Avoiding stupidity beats being brilliant.', source: 'Charlie Munger', category: 'decisions', component: InversionThinking, color: '#22C55E' },
  { id: 'first-principles', title: 'First Principles Thinking', description: 'Break problems down to fundamental truths, then reason up from there.', source: 'Elon Musk / Aristotle', category: 'decisions', component: FirstPrinciples, color: '#EF4444' },
  { id: 'regret-minimization', title: 'Regret Minimization Framework', description: 'Project yourself to age 80. Which choice will you regret not taking?', source: 'Jeff Bezos', category: 'decisions', component: RegretMinimization, color: '#8B5CF6' },
  { id: 'ooda-loop', title: 'The OODA Loop', description: 'Observe, Orient, Decide, Act — the faster you cycle, the bigger your advantage.', source: 'John Boyd (Fighter Pilot)', category: 'decisions', component: OODALoop, color: '#3B82F6' },
  { id: 'circle-competence', title: 'Circle of Competence', description: 'Know what you truly understand vs. what you think you know.', source: 'Warren Buffett & Charlie Munger', category: 'decisions', component: CircleOfCompetence, color: '#F59E0B' },
  { id: 'pareto-principle', title: 'The 80/20 Rule', description: '80% of results come from 20% of efforts.', source: 'The 80/20 Principle by Richard Koch', category: 'decisions', component: ParetoPrinciple, color: '#3B82F6' },
  { id: 'the-dip', title: 'The Dip', description: 'Winners quit the right things at the right time.', source: 'The Dip by Seth Godin', category: 'decisions', component: TheDip, color: '#EF4444' },
  { id: 'resulting-bias', title: 'Resulting (Outcome Bias)', description: "Don't judge decisions by outcomes. Good decisions can have bad results.", source: 'Thinking in Bets by Annie Duke', category: 'decisions', component: ResultingBias, color: '#8B5CF6' },
  { id: 'confidence-calibration', title: 'Confidence Calibration', description: 'How accurate are your probability estimates?', source: 'Thinking in Bets by Annie Duke', category: 'decisions', component: ConfidenceCalibration, color: '#8B5CF6' },
  { id: 'decentralized-command', title: 'Decentralized Command', description: 'Push decision-making down. Everyone understands the mission and can act independently.', source: 'Extreme Ownership by Jocko Willink', category: 'decisions', component: DecentralizedCommand, color: '#374151' },

  // Wealth & Investing
  { id: 'margin-of-safety', title: 'Margin of Safety', description: 'Buy assets when price is significantly below intrinsic value.', source: 'The Intelligent Investor by Ben Graham', category: 'wealth', component: MarginOfSafety, color: '#22C55E' },
  { id: 'time-in-market', title: 'Time in Market', description: 'Time in the market beats timing the market.', source: 'J.P. Morgan Research', category: 'wealth', component: TimeInMarket, color: '#22C55E' },
  { id: 'barbell-strategy', title: 'Barbell Strategy', description: 'Combine extreme safety with extreme risk, avoiding the vulnerable middle.', source: 'Antifragile by Nassim Taleb', category: 'wealth', component: BarbellStrategy, color: '#3B82F6' },
  { id: 'lindy-effect', title: 'The Lindy Effect', description: 'For non-perishable things, every day of survival increases expected future lifespan.', source: 'Antifragile by Nassim Taleb', category: 'wealth', component: LindyEffect, color: '#F59E0B' },
  { id: 'compound-interest', title: 'Compound Interest Calculator', description: "See how small regular investments grow exponentially. Einstein's eighth wonder.", source: 'The Intelligent Investor by Ben Graham', category: 'wealth', component: CompoundInterest, color: '#22C55E' },
  { id: 'rule-of-72', title: 'The Rule of 72', description: '72 divided by your return rate equals years to double your money.', source: 'The Intelligent Investor', category: 'wealth', component: RuleOf72, color: '#F59E0B' },
  { id: 'dollar-cost-averaging', title: 'Dollar Cost Averaging', description: 'Invest consistently regardless of price.', source: 'The Intelligent Investor', category: 'wealth', component: DollarCostAveraging, color: '#3B82F6' },
  { id: 'asset-allocation', title: 'Asset Allocation', description: 'The most important investment decision: distribute between stocks, bonds, real estate, cash.', source: 'The Intelligent Investor', category: 'wealth', component: AssetAllocation, color: '#F59E0B' },
  { id: 'black-swan', title: 'Black Swan Events', description: 'Unpredictable, extreme impact events. Position for asymmetry.', source: 'The Black Swan by Nassim Taleb', category: 'wealth', component: BlackSwan, color: '#374151' },
  { id: 'pay-yourself-first', title: 'Pay Yourself First', description: 'Save 10% of everything you earn. This is the first law of building wealth.', source: 'The Richest Man in Babylon by George Clason', category: 'wealth', component: PayYourselfFirst, color: '#F59E0B' },
  { id: 'seven-cures', title: 'Seven Cures for a Lean Purse', description: 'The timeless principles of wealth building from ancient Babylon.', source: 'The Richest Man in Babylon by George Clason', category: 'wealth', component: SevenCures, color: '#F59E0B' },
  { id: 'asset-liability', title: 'Assets vs Liabilities', description: 'Assets put money in your pocket. Liabilities take money out.', source: 'Rich Dad Poor Dad by Robert Kiyosaki', category: 'wealth', component: AssetLiability, color: '#22C55E' },
  { id: 'cashflow-quadrant', title: 'The Cashflow Quadrant', description: 'Four ways to earn: Employee, Self-employed, Business owner, Investor.', source: 'Rich Dad Poor Dad by Robert Kiyosaki', category: 'wealth', component: CashflowQuadrant, color: '#22C55E' },
  { id: 'tax-buckets', title: 'The Three Tax Buckets', description: 'Taxed now, taxed later, or never taxed. The wealthy focus on the third bucket.', source: 'Tax-Free Wealth by Tom Wheelwright', category: 'wealth', component: TaxBuckets, color: '#10B981' },
  { id: 'tax-strategy-quadrant', title: 'Tax Strategy Quadrant', description: 'Where you earn determines how much you keep.', source: 'Tax-Free Wealth by Tom Wheelwright', category: 'wealth', component: TaxStrategyQuadrant, color: '#10B981' },
  { id: 'buy-vs-build', title: 'Buy vs Build', description: 'Why buying an existing business beats starting from scratch.', source: 'Buy Then Build by Walker Deibel', category: 'wealth', component: BuyVsBuild, color: '#3B82F6' },
  { id: 'acquisition-criteria', title: 'Acquisition Criteria Checklist', description: 'Evaluate potential business acquisitions with this checklist.', source: 'Buy Then Build by Walker Deibel', category: 'wealth', component: AcquisitionCriteria, color: '#3B82F6' },
  { id: 'blockchain-basics', title: 'Blockchain Fundamentals', description: 'Hash-linked blocks create an immutable, decentralized ledger.', source: 'Token Economy & DeFi Foundations', category: 'wealth', component: BlockchainBasics, color: '#F59E0B' },

  // Negotiation & Influence
  { id: 'batna', title: 'BATNA', description: 'Your Best Alternative To Negotiated Agreement determines your power.', source: 'Harvard Negotiation Project', category: 'negotiation', component: BATNA, color: '#3B82F6' },
  { id: 'feynman-technique', title: 'The Feynman Technique', description: "Learn anything deeply by teaching it simply.", source: 'Richard Feynman - Nobel Physicist', category: 'negotiation', component: FeynmanTechnique, color: '#3B82F6' },
  { id: 'tactical-empathy', title: 'Tactical Empathy', description: 'Master FBI negotiation: mirroring, labeling, accusation audits, calibrated questions.', source: 'Never Split the Difference by Chris Voss', category: 'negotiation', component: TacticalEmpathy, color: '#3B82F6' },
  { id: 'cialdini-principles', title: '6 Weapons of Influence', description: 'Reciprocity, Commitment, Social Proof, Authority, Liking, Scarcity.', source: 'Influence by Robert Cialdini', category: 'negotiation', component: CialdiniPrinciples, color: '#8B5CF6' },
  { id: 'ackerman-model', title: 'The Ackerman Model', description: 'A systematic bargaining approach: offer 65%, then 85%, 95%, and a precise number.', source: 'Never Split the Difference by Chris Voss', category: 'negotiation', component: AckermanModel, color: '#22C55E' },
  { id: 'rule-of-three', title: 'The Rule of Three', description: 'Our brains love patterns of three. Structure your message in threes.', source: 'Talk Like TED by Carmine Gallo', category: 'negotiation', component: RuleOfThree, color: '#EF4444' },
  { id: 'jaw-dropping-moment', title: 'The Jaw-Dropping Moment', description: 'Create one emotionally charged moment your audience will remember forever.', source: 'Talk Like TED by Carmine Gallo', category: 'negotiation', component: JawDroppingMoment, color: '#EF4444' },
  { id: 'mirroring-rapport', title: 'Mirroring & Rapport', description: 'Subtly matching body language builds unconscious connection and trust.', source: 'The Definitive Book of Body Language by Allan Pease', category: 'negotiation', component: MirroringRapport, color: '#8B5CF6' },
  { id: 'interest-vs-positions', title: 'Interests vs Positions', description: 'Positions are what you say you want. Interests are why you want it.', source: 'Getting to Yes by Roger Fisher', category: 'negotiation', component: InterestVsPositions, color: '#22C55E' },
  { id: 'batna-power', title: 'BATNA Power', description: 'Your Best Alternative To Negotiated Agreement determines negotiating power.', source: 'Getting to Yes by Roger Fisher', category: 'negotiation', component: BATNAPower, color: '#22C55E' },
  { id: 'network-effect', title: 'The Network Effect', description: "Network value grows exponentially with each connection you add.", source: 'Never Eat Alone by Keith Ferrazzi', category: 'negotiation', component: NetworkEffect, color: '#3B82F6' },
  { id: 'generosity-loop', title: 'The Generosity Loop', description: 'Give before you ask. Build a relationship bank account before making withdrawals.', source: 'Never Eat Alone by Keith Ferrazzi', category: 'negotiation', component: GenerosityLoop, color: '#3B82F6' },
  { id: 'nvc-four-steps', title: 'OFNR: The NVC Process', description: 'Observations, Feelings, Needs, Requests — communicate without triggering defense.', source: 'Nonviolent Communication by Marshall Rosenberg', category: 'negotiation', component: NVCFourSteps, color: '#22C55E' },
  { id: 'request-vs-demand', title: 'Requests vs Demands', description: 'A true request allows "no" without punishment. Demands backfire.', source: 'Nonviolent Communication by Marshall Rosenberg', category: 'negotiation', component: RequestVsDemand, color: '#22C55E' },
  { id: 'state-path', title: 'STATE Your Path', description: 'Share facts, Tell your story, Ask for their path, Talk tentatively, Encourage testing.', source: 'Crucial Conversations by Kerry Patterson', category: 'negotiation', component: STATEPath, color: '#EC4899' },
  { id: 'safety-restoration', title: 'Restoring Safety', description: 'When safety is at risk, people go to silence or violence. Restore dialogue.', source: 'Crucial Conversations by Kerry Patterson', category: 'negotiation', component: SafetyRestoration, color: '#EC4899' },
  { id: 'three-conversations', title: 'The Three Conversations', description: 'Every difficult conversation has three layers: What Happened, Feelings, Identity.', source: 'Difficult Conversations by Douglas Stone', category: 'negotiation', component: ThreeConversations, color: '#F97316' },
  { id: 'contribution-vs-blame', title: 'Contribution vs Blame', description: 'Shift from "whose fault?" to "how did we both contribute?"', source: 'Difficult Conversations by Douglas Stone', category: 'negotiation', component: ContributionVsBlame, color: '#F97316' },
  { id: 'yes-and-principle', title: '"Yes, And" Principle', description: 'Accept offers and build on them. Blocking kills scenes and conversations.', source: 'Impro by Keith Johnstone', category: 'negotiation', component: YesAndPrinciple, color: '#EC4899' },
  { id: 'storybrand-framework', title: 'The StoryBrand Framework', description: 'Seven elements of a compelling brand story.', source: 'Building a StoryBrand by Donald Miller', category: 'negotiation', component: StoryBrandFramework, color: '#3B82F6' },
  { id: 'customer-as-hero', title: 'Customer as Hero', description: 'Your customer is the hero of the story. You are the guide.', source: 'Building a StoryBrand by Donald Miller', category: 'negotiation', component: CustomerAsHero, color: '#3B82F6' },

  // Health & Performance
  { id: 'flow-state', title: 'The Flow State', description: 'Flow happens when challenge matches skill.', source: 'Deep Work by Cal Newport / Flow by Csikszentmihalyi', category: 'health', component: FlowStateDiagram, color: '#22C55E' },
  { id: 'forgetting-curve', title: 'The Forgetting Curve', description: 'We forget 70% of what we learn within 24 hours. Spaced repetition fights this.', source: 'Ebbinghaus Memory Research', category: 'health', component: ForgettingCurveDiagram, color: '#8B5CF6' },
  { id: 'sleep-architecture', title: 'Sleep Architecture', description: 'Sleep cycles through distinct stages, each serving irreplaceable functions.', source: 'Why We Sleep by Matthew Walker', category: 'health', component: SleepArchitecture, color: '#8B5CF6' },
  { id: 'dopamine-baseline', title: 'Dopamine Baseline', description: 'High-spike activities crash your baseline. Healthy habits raise it over time.', source: 'Dr. Andrew Huberman', category: 'health', component: DopamineBaseline, color: '#F59E0B' },
  { id: 'ultradian-rhythms', title: 'Ultradian Rhythms', description: 'Your brain naturally cycles through 90-minute focus periods.', source: 'Sleep & Performance Research', category: 'health', component: UltradianRhythms, color: '#22C55E' },
  { id: 'attention-residue', title: 'Attention Residue', description: 'Every task switch leaves residue that reduces cognitive capacity.', source: 'Deep Work by Cal Newport', category: 'health', component: AttentionResidue, color: '#8B5CF6' },
  { id: 'vo2max-longevity', title: 'VO2 Max & Longevity', description: 'Cardiorespiratory fitness is the strongest predictor of longevity.', source: 'Outlive by Peter Attia', category: 'health', component: VO2MaxLongevity, color: '#22C55E' },
  { id: 'neuroplasticity', title: 'Neuroplasticity', description: 'Neurons that fire together wire together.', source: 'Neuroscience Research', category: 'health', component: Neuroplasticity, color: '#8B5CF6' },
  { id: 'hormesis', title: 'Hormesis', description: 'Small doses of stress make you stronger.', source: 'Antifragile / Exercise Science', category: 'health', component: Hormesis, color: '#22C55E' },
  { id: 'circadian-rhythm', title: 'Circadian Rhythm', description: 'Your 24-hour body clock controls energy, focus, and recovery.', source: 'Dr. Andrew Huberman', category: 'health', component: CircadianRhythm, color: '#8B5CF6' },
  { id: 'box-breathing', title: 'Box Breathing', description: 'Navy SEAL stress control: 4 seconds inhale, hold, exhale, hold.', source: 'Navy SEAL Training & Wim Hof', category: 'health', component: BoxBreathing, color: '#3B82F6' },
  { id: 'wim-hof-method', title: 'Wim Hof Method', description: 'Power breathing followed by breath retention. Boost immunity and cold resistance.', source: 'The Wim Hof Method', category: 'health', component: WimHofMethod, color: '#06B6D4' },
  { id: 'protein-synthesis', title: 'Muscle Protein Synthesis', description: 'Optimize protein timing and distribution for maximum muscle growth.', source: 'Outlive by Peter Attia', category: 'health', component: ProteinSynthesis, color: '#22C55E' },
  { id: 'mindfulness-meditation', title: 'Mindfulness Meditation', description: 'Train attention through the focus-wander-notice-return loop.', source: '10% Happier & Meditation Research', category: 'health', component: MindfulnessMeditation, color: '#8B5CF6' },
  { id: 'energy-pyramid', title: 'The Energy Pyramid', description: 'Physical, emotional, mental, spiritual — build your energy from the foundation up.', source: 'The Power of Full Engagement by Jim Loehr', category: 'health', component: EnergyPyramid, color: '#22C55E' },
  { id: 'work-rest-cycle', title: 'Work-Rest Oscillation', description: 'Peak performers oscillate between stress and recovery. 90 minutes on, 20 off.', source: 'The Power of Full Engagement by Jim Loehr', category: 'health', component: WorkRestCycle, color: '#22C55E' },
  { id: 'stress-recovery-balance', title: 'Stress + Recovery = Growth', description: 'Growth happens when balanced stress triggers recovery-driven adaptation.', source: 'Peak Performance by Brad Stulberg', category: 'health', component: StressRecoveryBalance, color: '#EF4444' },
  { id: 'leadership-chemicals', title: 'Leadership Chemicals', description: 'EDSO: Endorphins, dopamine, serotonin, oxytocin — and the dangers of cortisol.', source: 'Leaders Eat Last by Simon Sinek', category: 'health', component: LeadershipChemicals, color: '#F59E0B' },

  // Resilience & Antifragility
  { id: 'antifragility', title: 'Antifragility', description: 'Beyond resilience — systems that gain from disorder.', source: 'Antifragile by Nassim Taleb', category: 'resilience', component: Antifragility, color: '#22C55E' },
  { id: 'circle-of-control', title: 'Circle of Control', description: 'Focus energy on what you can control.', source: 'Stephen Covey / Stoic Philosophy', category: 'resilience', component: CircleOfControl, color: '#22C55E' },
  { id: 'forty-percent-rule', title: 'The 40% Rule', description: "When your mind says you're done, you're only 40% done.", source: "Can't Hurt Me by David Goggins", category: 'resilience', component: FortyPercentRule, color: '#EF4444' },
  { id: 'cookie-jar', title: 'The Cookie Jar', description: 'Store past victories to draw strength from when you need it most.', source: "Can't Hurt Me by David Goggins", category: 'resilience', component: CookieJar, color: '#EF4444' },
  { id: 'extreme-ownership-principle', title: 'Extreme Ownership', description: 'Leaders take complete ownership of everything in their world. No excuses.', source: 'Extreme Ownership by Jocko Willink', category: 'resilience', component: ExtremeOwnershipPrinciple, color: '#374151' },
  { id: 'circle-of-safety', title: 'The Circle of Safety', description: 'Leaders create psychological safety so teams can focus on external threats.', source: 'Leaders Eat Last by Simon Sinek', category: 'resilience', component: CircleOfSafety, color: '#F59E0B' },

  // Philosophy & Mindset
  { id: 'growth-mindset', title: 'Growth vs Fixed Mindset', description: 'Growth mindset sees abilities as developable through effort.', source: 'Mindset by Carol Dweck', category: 'philosophy', component: GrowthMindset, color: '#22C55E' },
  { id: 'be-water', title: 'Be Water', description: 'Adapt to circumstances like water — flow around obstacles, transform under pressure.', source: 'Bruce Lee Philosophy', category: 'philosophy', component: BeWater, color: '#3B82F6' },
  { id: 'iceberg-model', title: 'The Iceberg of Success', description: 'People see results, but beneath lies years of hard work, failure, and sacrifice.', source: 'Growth Mindset Research', category: 'philosophy', component: IcebergModel, color: '#06B6D4' },
  { id: 'logotherapy', title: "Logotherapy: Finding Meaning", description: "Three sources of meaning: creating, experiencing, and our attitude toward suffering.", source: "Man's Search for Meaning by Viktor Frankl", category: 'philosophy', component: Logotherapy, color: '#F59E0B' },
  { id: 'stoic-dichotomy', title: 'Dichotomy of Control', description: 'Focus on what you control and accept what you cannot.', source: 'Stoic Philosophy - Epictetus & Marcus Aurelius', category: 'philosophy', component: StoicDichotomy, color: '#3B82F6' },
  { id: 'dichotomy-control', title: 'Dichotomy of Control (Daily Stoic)', description: 'Sort everything into what you control and what you don\'t. Focus on the former.', source: 'The Daily Stoic by Ryan Holiday', category: 'philosophy', component: DichotomyOfControl, color: '#3B82F6' },
  { id: 'memento-mori', title: 'Memento Mori', description: 'Remember death. Visualize your limited time to clarify what truly matters.', source: 'The Daily Stoic by Ryan Holiday', category: 'philosophy', component: MementoMori, color: '#3B82F6' },
  { id: 'purpose-pyramid', title: 'The Purpose Pyramid', description: 'Self-transcending purpose is more sustainable than self-serving motivation.', source: 'Peak Performance by Brad Stulberg', category: 'philosophy', component: PurposePyramid, color: '#EF4444' },
];

// ─── Main Component ────────────────────────────────────────────────────────────

export function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedViz, setSelectedViz] = useState<VizEntry | null>(null);
  const [showVizPaywall, setShowVizPaywall] = useState(false);
  // showRealPaywall: true when user clicks "See Plans" inside the inline viz preview
  const [showRealPaywall, setShowRealPaywall] = useState(false);

  const isTrialActive = useUserStore((s) => s.isTrialActive);
  const { userProgress, isVisualizationUnlocked, purchaseViz } = useProgressStore();
  const VIZ_COST = 5000;

  // Derive ordered categories from actual viz data (preserving insertion order)
  const categories = useMemo(() => {
    const seen = new Set<string>();
    vizList.forEach(v => seen.add(v.category));
    return Array.from(seen);
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return vizList;
    return vizList.filter(v => v.category === activeCategory);
  }, [activeCategory]);

  const handleOpen = (viz: VizEntry) => {
    const isUnlocked = FREE_VIZ_IDS.has(viz.id) || isTrialActive() || isVisualizationUnlocked(viz.id);
    setSelectedViz(viz);
    setShowVizPaywall(!isUnlocked);
  };

  const handleClose = () => {
    setSelectedViz(null);
    setShowVizPaywall(false);
    setShowRealPaywall(false);
  };

  const ActiveComponent = selectedViz?.component ?? null;

  return (
    <div className="min-h-screen bg-base">
      {/* ── Editorial Header ────────────────────────────────────────────── */}
      <div className="px-4 pt-8 pb-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Explore Ideas
          </h1>
          <p className="mt-2 text-text-secondary text-sm sm:text-base">
            119 interactive visualizations across science, philosophy, psychology, and more
          </p>
          {/* Pro badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-500 text-xs font-medium">
              {FREE_VIZ_IDS.size} free
            </span>
            <span className="text-text-muted text-xs">·</span>
            <Lock className="w-3 h-3 text-text-muted" />
            <span className="text-text-muted text-xs">
              {vizList.length - FREE_VIZ_IDS.size} Pro
            </span>
          </div>
        </motion.div>

        {/* ── Category Tabs ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 -mx-4 px-4 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-2 pb-1 min-w-max">
            {/* All tab */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-black'
                  : 'bg-elevated text-text-secondary hover:text-text-primary border border-black/5 dark:border-white/5'
              }`}
            >
              All
            </button>
            {categories.map(cat => {
              const meta = CATEGORY_META[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-black'
                      : 'bg-elevated text-text-secondary hover:text-text-primary border border-black/5 dark:border-white/5'
                  }`}
                >
                  {meta?.icon && <span>{meta.icon}</span>}
                  {meta?.label ?? cat}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ── Viz Grid ─────────────────────────────────────────────────────── */}
      <div className="px-4 pb-16 max-w-5xl mx-auto">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {filtered.map((viz, idx) => {
            const isFree = FREE_VIZ_IDS.has(viz.id);
            const catMeta = CATEGORY_META[viz.category];

            return (
              <motion.div
                key={viz.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.5) }}
                className="relative group rounded-2xl bg-elevated border border-black/5 dark:border-white/5 overflow-hidden hover:border-black/10 dark:hover:border-white/10 transition-colors"
              >
                {/* Lock overlay for non-free */}
                {!isFree && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-base/80 backdrop-blur-sm border border-black/10 dark:border-white/10">
                    <Lock className="w-3 h-3 text-amber-500" />
                    <span className="text-amber-500 text-xs font-medium">Pro</span>
                  </div>
                )}

                <div className="p-5">
                  {/* Category badge */}
                  <span
                    className="inline-block px-2 py-0.5 rounded-md text-xs font-medium mb-3"
                    style={{
                      backgroundColor: `${viz.color}18`,
                      color: viz.color,
                    }}
                  >
                    {catMeta?.icon} {catMeta?.label ?? viz.category}
                  </span>

                  <h3 className="text-base font-semibold text-text-primary leading-snug mb-1">
                    {viz.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 mb-4">
                    {viz.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-text-muted line-clamp-1 flex-1 mr-3">
                      {viz.source}
                    </p>
                    <button
                      onClick={() => handleOpen(viz)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                        isFree
                          ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border border-amber-500/20'
                          : 'bg-black/5 dark:bg-white/5 text-text-secondary hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10'
                      }`}
                    >
                      {isFree ? (
                        <>Open <ChevronRight className="w-3 h-3" /></>
                      ) : (
                        <>Unlock <Lock className="w-3 h-3" /></>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted">
            No visualizations in this category yet.
          </div>
        )}
      </div>

      {/* ── Beta Access Gate (triggered from viz inline paywall preview) */}
      {showRealPaywall && (
        <BetaAccessGate onClose={() => { setShowRealPaywall(false); }} />
      )}

      {/* ── Viz Modal ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedViz && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleClose}
          >
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ...springGentle }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-elevated border border-black/10 dark:border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-start justify-between p-5 border-b border-black/5 dark:border-white/5">
                <div>
                  <h2 className="text-lg font-semibold text-text-primary">
                    {selectedViz.title}
                  </h2>
                  <p className="text-xs text-text-muted mt-0.5">{selectedViz.source}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="ml-4 p-1.5 rounded-xl text-text-muted hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-5">
                {!showVizPaywall && ActiveComponent && <ActiveComponent />}
                {showVizPaywall && (() => {
                  const canAfford = userProgress.xp >= VIZ_COST;
                  return (
                    <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-amber-500" />
                      </div>
                      <p className="text-sm text-text-secondary max-w-xs">
                        Spend XP to unlock this visualization permanently.
                      </p>
                      {/* XP balance */}
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-white/[0.08]">
                        <span className="text-xs text-text-muted">Your XP:</span>
                        <span className={`text-xs font-bold ${canAfford ? 'text-amber-500' : 'text-red-400'}`}>
                          {userProgress.xp.toLocaleString()} XP
                        </span>
                      </div>
                      <button
                        disabled={!canAfford}
                        onClick={() => {
                          if (selectedViz && purchaseViz(selectedViz.id)) {
                            setShowVizPaywall(false);
                          }
                        }}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          canAfford
                            ? 'bg-amber-500 hover:bg-amber-400 text-black'
                            : 'bg-surface border border-white/[0.08] text-text-muted cursor-not-allowed opacity-60'
                        }`}
                      >
                        <Unlock className="w-4 h-4" />
                        Unlock for {VIZ_COST.toLocaleString()} XP
                      </button>
                      {!canAfford && (
                        <p className="text-xs text-red-400">
                          Need {(VIZ_COST - userProgress.xp).toLocaleString()} more XP
                        </p>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
