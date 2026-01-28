/**
 * Granular Lesson to Flashcard Mapping
 *
 * Maps individual lesson IDs to specific flashcard tags/patterns.
 * When a user completes a lesson, only flashcards matching that lesson's
 * specific tags are unlocked - not the entire topic.
 *
 * This creates true progressive unlock: complete a lesson about "1% Rule"
 * and only 1% Rule flashcards unlock, not all Atomic Habits cards.
 */

import type { SpacedRepetitionCard } from '@/types';

// ============================================
// DIRECT LESSON ID TO FLASHCARD TAGS MAPPING
// ============================================

// Maps lesson IDs to the flashcard tags they unlock
// More specific = higher priority
export const lessonToFlashcardTags: Record<string, string[]> = {
  // ============================================
  // PERSONAL DEVELOPMENT - ATOMIC HABITS
  // ============================================
  'pd-intro': ['atomic-habits', 'habits'],
  'mm-habits-001': ['compound-effect', '1%', 'marginal-gains', 'plateau'],
  'mm-habits-002': ['identity', 'identity-based', 'behavior-change'],
  'mm-habits-003': ['habit-loop', 'cue', 'craving', 'response', 'reward'],
  'mm-habits-004': ['four-laws', 'obvious', 'attractive', 'easy', 'satisfying'],
  'mm-habits-005': ['environment', 'environment-design', 'cue-design'],
  'mm-habits-006': ['temptation', 'temptation-bundling', 'attractive'],
  'mm-habits-007': ['two-minute', 'easy', 'starting', 'gateway-habit'],
  'mm-habits-008': ['habit-stacking', 'stacking', 'implementation'],
  'mm-habits-009': ['reward', 'satisfying', 'immediate-reward'],
  'mm-habits-010': ['tracking', 'habit-tracking', 'measurement'],
  'mm-habits-011': ['breaking-habits', 'inversion', 'bad-habits'],
  'mm-habits-012': ['automation', 'commitment-device', 'one-time'],
  'mm-habits-013': ['mastery', 'boredom', 'deliberate-practice'],
  'mm-habits-014': ['systems', 'goals-vs-systems', 'atomic-habits'],

  // ============================================
  // PERSONAL DEVELOPMENT - DEEP WORK
  // ============================================
  'dw-001': ['deep-work', 'shallow-work', 'focus'],
  'dw-002': ['attention-residue', 'task-switching', 'focus'],
  'dw-003': ['deep-work-philosophy', 'monastic', 'bimodal', 'rhythmic'],
  'dw-004': ['rituals', 'routines', 'deep-work-ritual'],
  'dw-005': ['grand-gestures', 'environment', 'commitment'],
  'dw-006': ['collaboration', 'hub-and-spoke', 'serendipity'],
  'dw-007': ['4dx', 'execution', 'lead-measures', 'lag-measures'],
  'dw-008': ['downtime', 'rest', 'attention-restoration'],
  'dw-009': ['productive-meditation', 'walking', 'deep-thinking'],
  'dw-010': ['memory', 'memory-training', 'attention'],
  'dw-011': ['schedule', 'time-blocking', 'planning'],
  'dw-012': ['shallow-work', 'email', 'meetings', 'batching'],
  'dw-013': ['fixed-schedule', 'constraints', 'productivity'],
  'dw-014': ['digital-minimalism', 'social-media', 'tools'],
  'dw-015': ['craftsman', 'rare-valuable-skills', 'career-capital'],

  // ============================================
  // PERSONAL DEVELOPMENT - FUTURE SELF
  // ============================================
  'fs-001': ['future-self', 'temporal-self', 'continuity'],
  'fs-002': ['present-bias', 'delayed-gratification', 'time-preference'],
  'fs-003': ['identity-gap', 'psychological-distance', 'future-self'],
  'fs-004': ['visualization', 'future-visualization', 'mental-simulation'],
  'fs-005': ['commitment-devices', 'precommitment', 'ulysses'],
  'fs-006': ['implementation-intentions', 'if-then', 'planning'],
  'fs-007': ['temptation', 'self-control', 'willpower'],
  'fs-008': ['goal-setting', 'smart-goals', 'future-planning'],

  // ============================================
  // PSYCHOLOGY - THINKING FAST AND SLOW
  // ============================================
  'tfs-001': ['system1', 'system2', 'dual-process', 'kahneman'],
  'tfs-002': ['heuristics', 'cognitive-shortcuts', 'intuition'],
  'tfs-003': ['anchoring', 'anchoring-bias', 'adjustment'],
  'tfs-004': ['availability', 'availability-heuristic', 'memory-bias'],
  'tfs-005': ['representativeness', 'base-rate', 'stereotyping'],
  'tfs-006': ['overconfidence', 'planning-fallacy', 'optimism-bias'],
  'tfs-007': ['loss-aversion', 'prospect-theory', 'framing'],
  'tfs-008': ['endowment-effect', 'status-quo', 'ownership'],
  'tfs-009': ['sunk-cost', 'sunk-cost-fallacy', 'escalation'],
  'tfs-010': ['priming', 'unconscious', 'behavioral-priming'],

  // ============================================
  // PSYCHOLOGY - COGNITIVE BIAS
  // ============================================
  'bias-001': ['confirmation-bias', 'selective-perception'],
  'bias-002': ['dunning-kruger', 'competence', 'metacognition'],
  'bias-003': ['hindsight-bias', 'knew-it-all-along', 'memory'],
  'bias-004': ['fundamental-attribution', 'attribution-error', 'behavior'],
  'bias-005': ['halo-effect', 'first-impressions', 'judgment'],
  'bias-006': ['bandwagon', 'social-proof', 'conformity'],
  'bias-007': ['negativity-bias', 'threat-detection', 'pessimism'],
  'bias-008': ['recency-bias', 'recency-effect', 'memory'],

  // ============================================
  // NEGOTIATION - NEVER SPLIT THE DIFFERENCE
  // ============================================
  'neg-001': ['mirroring', 'rapport', 'fbi-negotiation'],
  'neg-002': ['labeling', 'emotional-labeling', 'empathy'],
  'neg-003': ['tactical-empathy', 'perspective-taking', 'understanding'],
  'neg-004': ['accusation-audit', 'preemptive', 'objections'],
  'neg-005': ['calibrated-questions', 'how-questions', 'what-questions'],
  'neg-006': ['no-oriented', 'no-questions', 'autonomy'],
  'neg-007': ['black-swan', 'unknown-unknowns', 'leverage'],
  'neg-008': ['ackerman', 'bargaining', 'price-negotiation'],
  'neg-009': ['deadlines', 'time-pressure', 'urgency'],
  'neg-010': ['late-night-dj', 'voice-tone', 'delivery'],

  // ============================================
  // WEALTH BUILDING
  // ============================================
  'wealth-001': ['compound-interest', 'wealth-compound', 'time-value'],
  'wealth-002': ['value-investing', 'intrinsic-value', 'margin-safety'],
  'wealth-003': ['diversification', 'portfolio', 'risk-management'],
  'wealth-004': ['index-funds', 'passive-investing', 'low-cost'],
  'wealth-005': ['dollar-cost-averaging', 'dca', 'systematic-investing'],
  'wealth-006': ['fire', 'financial-independence', 'early-retirement'],
  'wealth-007': ['asset-allocation', 'rebalancing', 'portfolio-management'],
  'wealth-008': ['tax-strategy', 'tax-efficiency', 'tax-loss-harvesting'],

  // ============================================
  // AI & MACHINE LEARNING
  // ============================================
  'ai-001': ['neural-networks', 'deep-learning', 'architecture'],
  'ai-002': ['machine-learning', 'supervised', 'unsupervised'],
  'ai-003': ['transformers', 'attention', 'gpt'],
  'ai-004': ['training', 'backpropagation', 'optimization'],
  'ai-005': ['nlp', 'language-models', 'text-processing'],
  'ai-006': ['computer-vision', 'cnn', 'image-recognition'],
  'ai-007': ['reinforcement-learning', 'rl', 'reward-signal'],
  'ai-008': ['ai-ethics', 'bias', 'fairness', 'alignment'],

  // ============================================
  // BLOCKCHAIN & WEB3
  // ============================================
  'blockchain-001': ['blockchain', 'distributed-ledger', 'consensus'],
  'blockchain-002': ['bitcoin', 'cryptocurrency', 'digital-gold'],
  'blockchain-003': ['ethereum', 'smart-contracts', 'evm'],
  'blockchain-004': ['defi', 'decentralized-finance', 'yield'],
  'blockchain-005': ['nft', 'digital-ownership', 'tokens'],
  'blockchain-006': ['dao', 'governance', 'decentralized-organization'],
  'blockchain-007': ['web3', 'decentralization', 'ownership'],
  'blockchain-008': ['staking', 'proof-of-stake', 'validation'],

  // ============================================
  // BRUCE LEE PHILOSOPHY
  // ============================================
  'bruce-001': ['be-water', 'adaptability', 'formlessness'],
  'bruce-002': ['jkd', 'jeet-kune-do', 'no-style'],
  'bruce-003': ['self-expression', 'authenticity', 'individuality'],
  'bruce-004': ['simplicity', 'directness', 'economy-motion'],
  'bruce-005': ['flow', 'natural', 'effortless'],
  'bruce-006': ['continuous-learning', 'growth', 'evolution'],
  'bruce-007': ['mind-body', 'integration', 'wholeness'],
  'bruce-008': ['warrior-philosophy', 'courage', 'action'],

  // ============================================
  // EMOTIONAL INTELLIGENCE
  // ============================================
  'eq-001': ['self-awareness', 'emotional-awareness', 'introspection'],
  'eq-002': ['self-regulation', 'emotional-control', 'impulse-control'],
  'eq-003': ['motivation', 'intrinsic-motivation', 'drive'],
  'eq-004': ['empathy', 'perspective-taking', 'emotional-reading'],
  'eq-005': ['social-skills', 'relationship-management', 'influence'],
  'eq-006': ['emotional-triggers', 'amygdala-hijack', 'reactions'],
  'eq-007': ['active-listening', 'communication', 'understanding'],
  'eq-008': ['conflict-resolution', 'difficult-conversations', 'mediation'],

  // ============================================
  // PRODUCTIVITY & TIME MANAGEMENT
  // ============================================
  'productivity-001': ['time-blocking', 'calendar', 'scheduling'],
  'productivity-002': ['pomodoro', 'focus-sessions', 'breaks'],
  'productivity-003': ['eisenhower', 'urgent-important', 'prioritization'],
  'productivity-004': ['gtd', 'getting-things-done', 'capture'],
  'productivity-005': ['batching', 'task-batching', 'context-switching'],
  'productivity-006': ['energy-management', 'ultradian', 'peak-performance'],
  'productivity-007': ['automation', 'delegation', 'leverage'],
  'productivity-008': ['procrastination', 'resistance', 'starting'],

  // ============================================
  // MEANING & PURPOSE (Man's Search for Meaning)
  // ============================================
  'meaning-001': ['logotherapy', 'meaning', 'purpose'],
  'meaning-002': ['suffering', 'attitude', 'choice'],
  'meaning-003': ['will-to-meaning', 'frankl', 'existential'],
  'meaning-004': ['tragic-optimism', 'hope', 'resilience'],
  'meaning-005': ['responsibility', 'freedom', 'choice'],
  'meaning-006': ['self-transcendence', 'beyond-self', 'service'],

  // ============================================
  // VALUES (The Subtle Art)
  // ============================================
  'values-001': ['values', 'priorities', 'what-matters'],
  'values-002': ['responsibility', 'fault-vs-responsibility', 'ownership'],
  'values-003': ['uncertainty', 'not-knowing', 'humility'],
  'values-004': ['failure', 'growth', 'learning'],
  'values-005': ['rejection', 'boundaries', 'saying-no'],
  'values-006': ['mortality', 'death', 'memento-mori'],

  // ============================================
  // MENTAL MODELS
  // ============================================
  'mental-models-001': ['first-principles', 'reasoning', 'fundamentals'],
  'mental-models-002': ['inversion', 'avoiding-stupidity', 'negative-thinking'],
  'mental-models-003': ['second-order', 'consequences', 'long-term'],
  'mental-models-004': ['circle-competence', 'expertise', 'boundaries'],
  'mental-models-005': ['occams-razor', 'simplicity', 'parsimony'],
  'mental-models-006': ['hanlon-razor', 'malice-vs-stupidity', 'attribution'],
  'mental-models-007': ['map-territory', 'models', 'reality'],
  'mental-models-008': ['thought-experiment', 'mental-simulation', 'hypothetical'],

  // ============================================
  // LEARNING SCIENCE
  // ============================================
  'learning-001': ['spaced-repetition', 'forgetting-curve', 'retention'],
  'learning-002': ['active-recall', 'retrieval-practice', 'testing-effect'],
  'learning-003': ['interleaving', 'mixed-practice', 'variety'],
  'learning-004': ['elaboration', 'connections', 'meaning-making'],
  'learning-005': ['concrete-examples', 'abstraction', 'transfer'],
  'learning-006': ['dual-coding', 'visual-verbal', 'multimodal'],
  'learning-007': ['desirable-difficulties', 'struggle', 'challenge'],
  'learning-008': ['metacognition', 'learning-to-learn', 'self-awareness'],
};

// ============================================
// FALLBACK: SOURCE-BASED MAPPING
// For flashcards without specific tag matches
// ============================================

export const sourceToLessonPatterns: Record<string, string[]> = {
  'Atomic Habits': ['mm-habits', 'pd-', 'atomic', 'habits'],
  'Deep Work': ['dw-', 'deep-work', 'focus'],
  'Future Self': ['fs-', 'future-self'],
  "Man's Search for Meaning": ['meaning-', 'frankl', 'logotherapy'],
  'The Subtle Art': ['values-', 'subtle-art'],
  'Thinking Fast and Slow': ['tfs-', 'kahneman', 'psychology'],
  'Never Split the Difference': ['neg-', 'negotiation', 'fbi'],
  'Bruce Lee': ['bruce-', 'bl-', 'jkd'],
  'Emotional Intelligence': ['eq-', 'emotional'],
  'Mental Models': ['mental-models', 'models'],
  'Productivity': ['productivity-', 'prod-'],
  'AI': ['ai-', 'ml-', 'machine-learning'],
  'Blockchain': ['blockchain-', 'crypto-', 'defi-', 'web3'],
  'Wealth Building': ['wealth-', 'investing-', 'finance-'],
  'Learning Science': ['learning-', 'learn-'],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Check if a flashcard should be unlocked based on a completed lesson
 */
export function isFlashcardUnlockedByLesson(
  card: SpacedRepetitionCard,
  lessonId: string
): boolean {
  // 1. Check direct lesson-to-tags mapping
  const lessonTags = lessonToFlashcardTags[lessonId];
  if (lessonTags && card.tags) {
    const cardTagsLower = card.tags.map(t => t.toLowerCase());
    for (const tag of lessonTags) {
      if (cardTagsLower.some(ct => ct.includes(tag.toLowerCase()))) {
        return true;
      }
    }
  }

  // 2. Check pattern matching for lesson ID in flashcard ID
  // e.g., flashcard 'ah-001' matches lesson containing 'habits'
  const lessonIdLower = lessonId.toLowerCase();
  const cardIdLower = card.id.toLowerCase();

  // Direct ID prefix matching
  if (lessonIdLower.includes('habits') && cardIdLower.startsWith('ah-')) return true;
  if (lessonIdLower.includes('dw-') && cardIdLower.startsWith('dw-')) return true;
  if (lessonIdLower.includes('fs-') && cardIdLower.startsWith('fs-')) return true;
  if (lessonIdLower.includes('neg-') && cardIdLower.startsWith('neg-')) return true;
  if (lessonIdLower.includes('tfs-') && cardIdLower.startsWith('tfs-')) return true;
  if (lessonIdLower.includes('bruce') && cardIdLower.startsWith('bl-')) return true;
  if (lessonIdLower.includes('ai-') && cardIdLower.startsWith('ai-')) return true;
  if (lessonIdLower.includes('blockchain') && cardIdLower.startsWith('bc-')) return true;
  if (lessonIdLower.includes('wealth') && cardIdLower.startsWith('wb-')) return true;

  return false;
}

/**
 * Get all flashcards that should be unlocked by a list of completed lessons
 */
export function getUnlockedFlashcards(
  allCards: SpacedRepetitionCard[],
  completedLessonIds: string[]
): SpacedRepetitionCard[] {
  if (completedLessonIds.length === 0) return [];

  return allCards.filter(card =>
    completedLessonIds.some(lessonId => isFlashcardUnlockedByLesson(card, lessonId))
  );
}

/**
 * Get flashcard count that would be unlocked by a specific lesson
 * Useful for showing "Complete this lesson to unlock X flashcards"
 */
export function getFlashcardCountForLesson(
  allCards: SpacedRepetitionCard[],
  lessonId: string
): number {
  return allCards.filter(card => isFlashcardUnlockedByLesson(card, lessonId)).length;
}

// Legacy exports for backwards compatibility
export function getUnlockedFlashcardSources(completedLessonIds: string[]): Set<string> {
  const sources = new Set<string>();
  for (const lessonId of completedLessonIds) {
    // Add sources based on lesson patterns
    for (const [source, patterns] of Object.entries(sourceToLessonPatterns)) {
      if (patterns.some(p => lessonId.toLowerCase().includes(p.toLowerCase()))) {
        sources.add(source);
      }
    }
  }
  return sources;
}

export function isFlashcardUnlocked(
  flashcardSource: string,
  unlockedSources: Set<string>
): boolean {
  if (unlockedSources.has(flashcardSource)) return true;
  for (const unlocked of unlockedSources) {
    if (
      flashcardSource.toLowerCase().includes(unlocked.toLowerCase()) ||
      unlocked.toLowerCase().includes(flashcardSource.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
}
