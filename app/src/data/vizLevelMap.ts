/**
 * Visualization → Level Mapping
 *
 * Maps each of the 119 interactive visualizations to the most relevant
 * content level. Completing all lessons in the mapped level unlocks
 * the visualization as a capstone reward.
 *
 * Mapping criteria:
 * - Content relevance: viz concept must be taught in that level
 * - Source alignment: book/author match where possible
 * - Spread: avoid clustering too many vizzes on one module
 */

export interface VizLevelMapping {
  moduleId: string;
  levelId: string;
  /** Short reason for the mapping (dev reference) */
  reason: string;
}

/**
 * 119 visualizations → 119 unique levels across 35+ modules.
 * Key: visualization id (matches VisualLab entries)
 * Value: the level whose completion unlocks it
 */
export const vizLevelMap: Record<string, VizLevelMapping> = {
  // ─── Habits & Productivity (13 vizzes) ───────────────────────────────

  'habit-loop': {
    moduleId: 'personal-development',
    levelId: 'pd-level1',
    reason: 'Atomic Habits cue-craving-response-reward loop — foundational PD concept',
  },
  'compound-growth': {
    moduleId: 'personal-development',
    levelId: 'pd-level2',
    reason: '1% daily improvement / compound effect — PD growth mindset',
  },
  'activation-energy': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level2',
    reason: 'Reducing friction for good habits — productivity systems',
  },
  'two-minute-rule': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level3',
    reason: 'GTD two-minute rule — productivity quick wins',
  },
  'eisenhower-matrix': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level1',
    reason: 'Priority matrix — foundational productivity tool',
  },
  'parkinsons-law': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level4',
    reason: 'Work expands to fill time — time management',
  },
  'zeigarnik-effect': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level5',
    reason: 'Open loops and mental load — focus systems',
  },
  'flywheel-effect': {
    moduleId: 'entrepreneurship-101',
    levelId: 'ent-level3',
    reason: 'Jim Collins flywheel — business momentum',
  },
  'deliberate-practice': {
    moduleId: 'meta-learning',
    levelId: 'mlearn-level3',
    reason: 'Ericsson deliberate practice — learning mastery',
  },
  'identity-habits': {
    moduleId: 'personal-development',
    levelId: 'pd-level3',
    reason: 'Identity-based behavior change — Atomic Habits core',
  },
  'four-laws-habits': {
    moduleId: 'personal-development',
    levelId: 'pd-level4',
    reason: 'Make it obvious/attractive/easy/satisfying — Atomic Habits',
  },
  'document-dont-create': {
    moduleId: 'content-creation',
    levelId: 'content-level2',
    reason: 'Gary Vee content strategy — content creation fundamentals',
  },
  'patience-hustle': {
    moduleId: 'content-creation',
    levelId: 'content-level5',
    reason: 'Macro patience micro speed — content business growth',
  },

  // ─── Psychology & Biases (18 vizzes) ─────────────────────────────────

  'system-thinking': {
    moduleId: 'psychology',
    levelId: 'psych-level1',
    reason: 'Kahneman System 1 vs 2 — foundational psychology',
  },
  'dunning-kruger': {
    moduleId: 'psychology',
    levelId: 'psych-level2',
    reason: 'Confidence vs competence curve — cognitive bias',
  },
  'confirmation-bias': {
    moduleId: 'psychology',
    levelId: 'psych-level3',
    reason: 'Seeking confirming evidence — Kahneman bias',
  },
  'availability-heuristic': {
    moduleId: 'psychology',
    levelId: 'psych-level4',
    reason: 'Judging by ease of recall — Kahneman heuristic',
  },
  'anchoring-bias': {
    moduleId: 'psychology',
    levelId: 'psych-level5',
    reason: 'First number bias — negotiation psychology',
  },
  'mere-exposure': {
    moduleId: 'psychology',
    levelId: 'psych-level6',
    reason: 'Familiarity preference — social psychology',
  },
  'peak-end-rule': {
    moduleId: 'emotional-intelligence',
    levelId: 'eq-level5',
    reason: 'Experience memory — emotional awareness',
  },
  'hedonic-treadmill': {
    moduleId: 'stoicism',
    levelId: 'stoic-level4',
    reason: 'Adaptation to pleasure — Stoic contentment',
  },
  'ladder-of-inference': {
    moduleId: 'mental-models',
    levelId: 'mm-level3',
    reason: 'From data to conclusions — mental model',
  },
  'dark-triad': {
    moduleId: 'social-intelligence',
    levelId: 'si-level7',
    reason: 'Recognizing dark personality traits — social awareness',
  },
  'framing-effect': {
    moduleId: 'decision-making',
    levelId: 'decide-level4',
    reason: 'Same info, different frame, different decision',
  },
  'spotlight-effect': {
    moduleId: 'social-intelligence',
    levelId: 'si-level2',
    reason: 'Self-consciousness bias — social intelligence',
  },
  'halo-effect': {
    moduleId: 'social-intelligence',
    levelId: 'si-level3',
    reason: 'One trait generalizes — impression formation',
  },
  'knowledge-illusion': {
    moduleId: 'meta-learning',
    levelId: 'mlearn-level5',
    reason: 'Overestimating understanding — meta-cognitive awareness',
  },
  'eq-quadrants': {
    moduleId: 'emotional-intelligence',
    levelId: 'eq-level1',
    reason: 'EQ 4 quadrants — foundational EQ concept',
  },
  'six-second-pause': {
    moduleId: 'emotional-intelligence',
    levelId: 'eq-level2',
    reason: 'Stimulus-response gap — emotional regulation',
  },
  'status-games': {
    moduleId: 'social-intelligence',
    levelId: 'si-level5',
    reason: 'Dominance vs prestige — status dynamics',
  },
  'virtue-success-status': {
    moduleId: 'social-intelligence',
    levelId: 'si-level6',
    reason: 'Three types of status games — social hierarchy',
  },

  // ─── Decision Making (12 vizzes) ─────────────────────────────────────

  'loss-aversion': {
    moduleId: 'decision-making',
    levelId: 'decide-level2',
    reason: 'Losses hurt 2x more — Kahneman prospect theory',
  },
  'sunk-cost-fallacy': {
    moduleId: 'decision-making',
    levelId: 'decide-level3',
    reason: 'Throwing good money after bad — decision trap',
  },
  'second-order-thinking': {
    moduleId: 'mental-models',
    levelId: 'mm-level2',
    reason: 'And then what? — Munger mental model',
  },
  'inversion-thinking': {
    moduleId: 'mental-models',
    levelId: 'mm-level1',
    reason: 'Avoid failure instead of seeking success — Munger',
  },
  'first-principles': {
    moduleId: 'first-principles',
    levelId: 'fp-level1',
    reason: 'Break to fundamentals — first principles module',
  },
  'regret-minimization': {
    moduleId: 'decision-making',
    levelId: 'decide-level5',
    reason: 'Bezos age-80 test — bold decision framework',
  },
  'ooda-loop': {
    moduleId: 'strategic-thinking',
    levelId: 'strat-level3',
    reason: 'Boyd OODA loop — strategic decision speed',
  },
  'circle-competence': {
    moduleId: 'mental-models',
    levelId: 'mm-level4',
    reason: 'Buffett/Munger circle — know your limits',
  },
  'pareto-principle': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level6',
    reason: '80/20 rule — productivity leverage',
  },
  'the-dip': {
    moduleId: 'personal-development',
    levelId: 'pd-level6',
    reason: 'Seth Godin strategic quitting — personal growth',
  },
  'resulting-bias': {
    moduleId: 'decision-making',
    levelId: 'decide-level6',
    reason: 'Outcome bias — Annie Duke thinking in bets',
  },
  'confidence-calibration': {
    moduleId: 'decision-making',
    levelId: 'decide-level7',
    reason: 'Probability estimation accuracy — better decisions',
  },

  // ─── Wealth & Investing (16 vizzes) ──────────────────────────────────

  'margin-of-safety': {
    moduleId: 'finance-investing',
    levelId: 'fi-level2',
    reason: 'Ben Graham margin — investing fundamentals',
  },
  'time-in-market': {
    moduleId: 'finance-investing',
    levelId: 'fi-level3',
    reason: 'Time beats timing — long-term investing',
  },
  'barbell-strategy': {
    moduleId: 'risk-management',
    levelId: 'risk-level3',
    reason: 'Taleb barbell — risk strategy',
  },
  'lindy-effect': {
    moduleId: 'mental-models',
    levelId: 'mm-level6',
    reason: 'Longevity prediction — Taleb mental model',
  },
  'compound-interest': {
    moduleId: 'finance-investing',
    levelId: 'fi-level1',
    reason: 'Compound growth — foundational investing',
  },
  'rule-of-72': {
    moduleId: 'finance-investing',
    levelId: 'fi-level4',
    reason: 'Quick doubling math — investing heuristic',
  },
  'dollar-cost-averaging': {
    moduleId: 'finance-investing',
    levelId: 'fi-level5',
    reason: 'Consistent investing — DCA strategy',
  },
  'asset-allocation': {
    moduleId: 'finance-investing',
    levelId: 'fi-level6',
    reason: 'Portfolio distribution — asset management',
  },
  'black-swan': {
    moduleId: 'risk-management',
    levelId: 'risk-level2',
    reason: 'Taleb black swan events — tail risk',
  },
  'blockchain-basics': {
    moduleId: 'blockchain',
    levelId: 'blockchain-level1',
    reason: 'Blockchain fundamentals — crypto foundations',
  },
  'pay-yourself-first': {
    moduleId: 'wealth-building',
    levelId: 'wealth-level1',
    reason: 'First law of wealth — Richest Man in Babylon',
  },
  'seven-cures': {
    moduleId: 'wealth-building',
    levelId: 'wealth-level2',
    reason: 'Seven wealth principles — Babylon wisdom',
  },
  'asset-liability': {
    moduleId: 'wealth-building',
    levelId: 'wealth-level3',
    reason: 'Kiyosaki asset vs liability — wealth mindset',
  },
  'cashflow-quadrant': {
    moduleId: 'wealth-building',
    levelId: 'wealth-level4',
    reason: 'E-S-B-I quadrant — income sources',
  },
  'tax-buckets': {
    moduleId: 'wealth-building',
    levelId: 'wealth-level6',
    reason: 'Three tax treatment types — tax strategy',
  },
  'tax-strategy-quadrant': {
    moduleId: 'wealth-building',
    levelId: 'wealth-level7',
    reason: 'Tax optimization by quadrant — wealth preservation',
  },

  // ─── Business & Entrepreneurship (4 vizzes) ─────────────────────────

  'buy-vs-build': {
    moduleId: 'entrepreneurship-101',
    levelId: 'ent-level5',
    reason: 'Acquisition vs startup — business strategy',
  },
  'acquisition-criteria': {
    moduleId: 'entrepreneurship-101',
    levelId: 'ent-level6',
    reason: 'Business acquisition checklist — due diligence',
  },
  'decentralized-command': {
    moduleId: 'leadership',
    levelId: 'lead-level4',
    reason: 'Push decisions down — Jocko leadership',
  },

  // ─── Negotiation & Communication (18 vizzes) ────────────────────────

  'batna': {
    moduleId: 'negotiation',
    levelId: 'neg-level1',
    reason: 'Best alternative — negotiation power base',
  },
  'feynman-technique': {
    moduleId: 'meta-learning',
    levelId: 'mlearn-level1',
    reason: 'Learn by teaching simply — meta-learning tool',
  },
  'tactical-empathy': {
    moduleId: 'negotiation',
    levelId: 'neg-level2',
    reason: 'Voss FBI techniques — advanced negotiation',
  },
  'cialdini-principles': {
    moduleId: 'sales-mastery',
    levelId: 'sm-level2',
    reason: '6 weapons of influence — persuasion science',
  },
  'ackerman-model': {
    moduleId: 'negotiation',
    levelId: 'neg-level3',
    reason: 'Systematic bargaining — Voss negotiation',
  },
  'interest-vs-positions': {
    moduleId: 'negotiation',
    levelId: 'neg-level4',
    reason: 'Focus on why — Getting to Yes',
  },
  'batna-power': {
    moduleId: 'sales-mastery',
    levelId: 'sm-level4',
    reason: 'Negotiating leverage — sales negotiation',
  },
  'network-effect': {
    moduleId: 'networking',
    levelId: 'net-level2',
    reason: 'Metcalfe law — networking value',
  },
  'generosity-loop': {
    moduleId: 'networking',
    levelId: 'net-level3',
    reason: 'Give before asking — relationship building',
  },
  'nvc-four-steps': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level3',
    reason: 'Nonviolent communication OFNR — communication skills',
  },
  'request-vs-demand': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level4',
    reason: 'True requests allow no — NVC advanced',
  },
  'state-path': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level5',
    reason: 'Crucial conversations STATE method — dialogue skills',
  },
  'safety-restoration': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level6',
    reason: 'Restoring dialogue safety — crucial conversations',
  },
  'three-conversations': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level7',
    reason: 'What Happened / Feelings / Identity layers',
  },
  'contribution-vs-blame': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level8',
    reason: 'Shift from blame to contribution — conflict resolution',
  },
  'rule-of-three': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level1',
    reason: 'Pattern of three for persuasion — Talk Like TED',
  },
  'jaw-dropping-moment': {
    moduleId: 'communication-rhetoric',
    levelId: 'cr-level2',
    reason: 'Emotionally charged moment — TED presentation',
  },
  'storybrand-framework': {
    moduleId: 'personal-branding',
    levelId: 'pb-level3',
    reason: 'Donald Miller story framework — brand narrative',
  },
  'customer-as-hero': {
    moduleId: 'personal-branding',
    levelId: 'pb-level4',
    reason: 'Customer is hero, you are guide — branding',
  },

  // ─── Body Language & Social (5 vizzes) ──────────────────────────────

  'pacifying-behaviors': {
    moduleId: 'social-intelligence',
    levelId: 'si-level4',
    reason: 'Navarro stress signals — body language reading',
  },
  'feet-dont-lie': {
    moduleId: 'social-intelligence',
    levelId: 'si-level8',
    reason: 'Honest body part — Navarro body language',
  },
  'power-poses': {
    moduleId: 'social-intelligence',
    levelId: 'si-level1',
    reason: 'Expansive posture confidence — first impressions',
  },
  'mirroring-rapport': {
    moduleId: 'social-intelligence',
    levelId: 'si-level9',
    reason: 'Matching body language — rapport building',
  },
  'status-transactions': {
    moduleId: 'social-intelligence',
    levelId: 'si-level10',
    reason: 'Keith Johnstone status plays — social dynamics',
  },
  'yes-and-principle': {
    moduleId: 'dating-attraction',
    levelId: 'da-level4',
    reason: 'Improv acceptance — social flow and connection',
  },

  // ─── Health & Performance (16 vizzes) ────────────────────────────────

  'flow-state': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level7',
    reason: 'Challenge-skill balance — peak performance',
  },
  'forgetting-curve': {
    moduleId: 'meta-learning',
    levelId: 'mlearn-level2',
    reason: 'Ebbinghaus curve — spaced repetition foundation',
  },
  'sleep-architecture': {
    moduleId: 'body-longevity',
    levelId: 'body-level1',
    reason: 'Sleep stages — foundational health',
  },
  'dopamine-baseline': {
    moduleId: 'brain-neuroscience',
    levelId: 'brain-level1',
    reason: 'Huberman dopamine — neuroscience basics',
  },
  'ultradian-rhythms': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level8',
    reason: '90-minute focus cycles — performance rhythm',
  },
  'attention-residue': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level9',
    reason: 'Task switching cost — deep work Cal Newport',
  },
  'vo2max-longevity': {
    moduleId: 'body-longevity',
    levelId: 'body-level2',
    reason: 'Peter Attia fitness-longevity — body optimization',
  },
  'neuroplasticity': {
    moduleId: 'brain-neuroscience',
    levelId: 'brain-level2',
    reason: 'Neurons wire together — brain adaptability',
  },
  'hormesis': {
    moduleId: 'body-longevity',
    levelId: 'body-level3',
    reason: 'Small stress adaptation — antifragile body',
  },
  'circadian-rhythm': {
    moduleId: 'brain-neuroscience',
    levelId: 'brain-level3',
    reason: 'Huberman 24h clock — brain-body alignment',
  },
  'box-breathing': {
    moduleId: 'yoga-philosophy',
    levelId: 'yoga-level3',
    reason: 'Navy SEAL breathwork — pranayama parallel',
  },
  'wim-hof-method': {
    moduleId: 'yoga-philosophy',
    levelId: 'yoga-level4',
    reason: 'Power breathing — breath mastery',
  },
  'protein-synthesis': {
    moduleId: 'biology-evolution',
    levelId: 'bio-level4',
    reason: 'Muscle growth biology — biological process',
  },
  'mindfulness-meditation': {
    moduleId: 'yoga-philosophy',
    levelId: 'yoga-level1',
    reason: 'Attention training — meditation foundation',
  },
  'energy-pyramid': {
    moduleId: 'personal-development',
    levelId: 'pd-level7',
    reason: 'Physical/emotional/mental/spiritual energy — holistic PD',
  },
  'work-rest-cycle': {
    moduleId: 'productivity-systems',
    levelId: 'prod-level10',
    reason: '90 on / 20 off — recovery-based performance',
  },

  // ─── Resilience & Antifragility (6 vizzes) ──────────────────────────

  'antifragility': {
    moduleId: 'risk-management',
    levelId: 'risk-level1',
    reason: 'Taleb antifragility — gain from disorder',
  },
  'circle-of-control': {
    moduleId: 'stoicism',
    levelId: 'stoic-level1',
    reason: 'Covey/Stoic control focus — foundational Stoicism',
  },
  'forty-percent-rule': {
    moduleId: 'personal-development',
    levelId: 'pd-level8',
    reason: 'Goggins mental toughness — pushing limits',
  },
  'cookie-jar': {
    moduleId: 'personal-development',
    levelId: 'pd-level9',
    reason: 'Goggins past victories — mental resilience',
  },
  'extreme-ownership-principle': {
    moduleId: 'leadership',
    levelId: 'lead-level1',
    reason: 'Jocko total ownership — foundational leadership',
  },
  'circle-of-safety': {
    moduleId: 'leadership',
    levelId: 'lead-level3',
    reason: 'Sinek psychological safety — team leadership',
  },

  // ─── Philosophy & Mindset (7 vizzes) ────────────────────────────────

  'growth-mindset': {
    moduleId: 'meta-learning',
    levelId: 'mlearn-level4',
    reason: 'Dweck growth vs fixed — learning mindset',
  },
  'be-water': {
    moduleId: 'bruce-lee',
    levelId: 'bruce-level1',
    reason: 'Bruce Lee philosophy — adaptability',
  },
  'iceberg-model': {
    moduleId: 'personal-development',
    levelId: 'pd-level5',
    reason: 'Hidden effort behind success — growth mindset',
  },
  'logotherapy': {
    moduleId: 'western-philosophy',
    levelId: 'wphil-level5',
    reason: 'Frankl meaning — existential philosophy',
  },
  'stoic-dichotomy': {
    moduleId: 'stoicism',
    levelId: 'stoic-level2',
    reason: 'Epictetus control dichotomy — core Stoicism',
  },
  'dichotomy-control': {
    moduleId: 'stoicism',
    levelId: 'stoic-level3',
    reason: 'Daily Stoic dichotomy — applied Stoicism',
  },
  'memento-mori': {
    moduleId: 'stoicism',
    levelId: 'stoic-level5',
    reason: 'Remember death — Stoic urgency practice',
  },

  // ─── Performance & Leadership (4 vizzes) ────────────────────────────

  'stress-recovery-balance': {
    moduleId: 'leadership',
    levelId: 'lead-level6',
    reason: 'Stress + Recovery = Growth — peak performance',
  },
  'purpose-pyramid': {
    moduleId: 'leadership',
    levelId: 'lead-level7',
    reason: 'Self-transcending purpose — purpose-driven leadership',
  },
  'leadership-chemicals': {
    moduleId: 'leadership',
    levelId: 'lead-level2',
    reason: 'Sinek EDSO chemicals — leadership biology',
  },
};

// ─── Helpers ───────────────────────────────────────────────────────────

/** Get the viz mapping for a given level, if one exists */
export function getVizForLevel(levelId: string): { vizId: string; mapping: VizLevelMapping } | null {
  for (const [vizId, mapping] of Object.entries(vizLevelMap)) {
    if (mapping.levelId === levelId) {
      return { vizId, mapping };
    }
  }
  return null;
}

/** Get all viz IDs that are unlocked by completing levels the user has finished */
export function getUnlockedVizIds(completedLessonIds: string[], getLevelLessons: (levelId: string) => string[]): string[] {
  const unlocked: string[] = [];
  for (const [vizId, mapping] of Object.entries(vizLevelMap)) {
    const levelLessons = getLevelLessons(mapping.levelId);
    if (levelLessons.length > 0 && levelLessons.every(id => completedLessonIds.includes(id))) {
      unlocked.push(vizId);
    }
  }
  return unlocked;
}

/** Get viz unlock progress for a specific viz */
export function getVizProgress(vizId: string, completedLessonIds: string[], getLevelLessons: (levelId: string) => string[]): {
  total: number;
  completed: number;
  percentage: number;
} | null {
  const mapping = vizLevelMap[vizId];
  if (!mapping) return null;

  const levelLessons = getLevelLessons(mapping.levelId);
  const completed = levelLessons.filter(id => completedLessonIds.includes(id)).length;
  return {
    total: levelLessons.length,
    completed,
    percentage: levelLessons.length > 0 ? (completed / levelLessons.length) * 100 : 0,
  };
}
