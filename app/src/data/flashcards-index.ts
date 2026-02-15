import type { SpacedRepetitionCard } from '@/types';

/**
 * Flashcard Index - Combines all flashcard batches into a single export
 * Total: 3000+ flashcards across all modules
 */

// Main flashcards file (Atomic Habits, Deep Work, etc.)
import { flashcards as mainFlashcards } from './flashcards';

// Batch 2: AI/ML
import { aiMlFlashcards } from './flashcards-batch2-aiml';

// Batch 2: Python & Data Science
import { pythonDataScienceFlashcards } from './flashcards-batch2-python';

// Batch 2: Wealth Building
import { wealthBuildingFlashcards } from './flashcards-batch2-wealth';

// Batch 3: Negotiation, Psychology, Blockchain
import {
  negotiationFlashcards,
  psychologyFlashcards,
  blockchainFlashcards
} from './flashcards-batch3';

// Batch 4: Bruce Lee, Life Design, Master Synthesis
import {
  bruceLeeFlashcards,
  lifeDesignFlashcards,
  masterSynthesisFlashcards
} from './flashcards-batch4';

// Batch 5: Subtle Art, Man's Search for Meaning, Future Self, Dark Psychology
import {
  subtleArtFlashcards,
  mansSearchFlashcards,
  futureSelfFlashcards,
  darkPsychologyFlashcards
} from './flashcards-batch5';

// Batch 6: Cognitive Bias, Mental Models, Productivity, Stoicism
import {
  cognitiveBiasFlashcards,
  mentalModelsFlashcards,
  productivityFlashcards,
  stoicismFlashcards
} from './flashcards-batch6';

// Batch 7: Quantitative Trading, Communication, DeFi, Statistics
import {
  quantitativeTradingFlashcards,
  communicationFlashcards,
  defiFlashcards,
  statisticsFlashcards
} from './flashcards-batch7';

// Batch 8: Emotional Intelligence, Thinking Fast and Slow
import { emotionalIntelligenceFlashcards } from './flashcards-batch8-ei';
import { thinkingFastSlowFlashcards } from './flashcards-batch8-tfs';

// Batch 9: Critical Thinking, Habits, Leadership
import { criticalThinkingFlashcards } from './flashcards-batch9-thinking';
import { habitsFlashcards } from './flashcards-batch9-habits';
import { leadershipFlashcards } from './flashcards-batch9-leadership';

// Batch 10: Philosophy, Entrepreneurship, Persuasion
import { philosophyFlashcards } from './flashcards-batch10-philosophy';
import { entrepreneurshipFlashcards } from './flashcards-batch10-entrepreneurship';
import { persuasionFlashcards } from './flashcards-batch10-persuasion';

// Batch 11: Creativity, Memory & Learning, Health, Time Management
import { creativityFlashcards } from './flashcards-batch11-creativity';
import { memoryLearningFlashcards } from './flashcards-batch11-memory';
import { healthWellnessFlashcards } from './flashcards-batch11-health';
import { timeManagementFlashcards } from './flashcards-batch11-time';

// Batch 12: Financial Markets, Relationships, Systems Thinking, Career
import { financialMarketsFlashcards } from './flashcards-batch12-finance';
import { relationshipsFlashcards } from './flashcards-batch12-relationships';
import { systemsThinkingFlashcards } from './flashcards-batch12-systems';
import { careerFlashcards } from './flashcards-batch12-career';

// Batch 13: Mindfulness, Writing, Economics, Problem Solving
import { mindfulnessFlashcards } from './flashcards-batch13-mindfulness';
import { writingFlashcards } from './flashcards-batch13-writing';
import { economicsFlashcards } from './flashcards-batch13-economics';
import { problemSolvingFlashcards } from './flashcards-batch13-problems';

// Batch 14: Resilience, Crypto & Web3, Focus, Goal Setting, Negotiation Advanced
import { resilienceFlashcards } from './flashcards-batch14-resilience';
import { cryptoWeb3Flashcards } from './flashcards-batch14-crypto';
import { focusFlashcards } from './flashcards-batch14-focus';
import { goalSettingFlashcards } from './flashcards-batch14-goals';
import { negotiationAdvancedFlashcards } from './flashcards-batch14-negadvanced';

// Batch 15: Self-Discipline, Decision Making, Personal Branding, Motivation, Data Analysis
import { selfDisciplineFlashcards } from './flashcards-batch15-discipline';
import { decisionMakingFlashcards } from './flashcards-batch15-decisions';
import { personalBrandingFlashcards } from './flashcards-batch15-branding';
import { motivationFlashcards } from './flashcards-batch15-motivation';
import { dataAnalysisFlashcards } from './flashcards-batch15-data';

// Batch 16: Speaking, Learning, Strategy, Networking, Cognitive, Risk, Influence, Sleep
import { publicSpeakingFlashcards } from './flashcards-batch16-speaking';
import { learningStrategiesFlashcards } from './flashcards-batch16-learning';
import { strategicThinkingFlashcards } from './flashcards-batch16-strategy';
import { networkingFlashcards } from './flashcards-batch16-networking';
import { cognitiveScienceFlashcards } from './flashcards-batch16-cognitive';
import { riskManagementFlashcards } from './flashcards-batch16-risk';
import { influencePsychologyFlashcards } from './flashcards-batch16-influence';
import { sleepScienceFlashcards } from './flashcards-batch16-sleep';

// Batch 17: Productivity Systems, Stress, Sales, Conflict, Innovation, Interview
import { productivitySystemsFlashcards } from './flashcards-batch17-productivity';
import { stressManagementFlashcards } from './flashcards-batch17-stress';
import { salesPsychologyFlashcards } from './flashcards-batch17-sales';
import { conflictResolutionFlashcards } from './flashcards-batch17-conflict';
import { innovationThinkingFlashcards } from './flashcards-batch17-innovation';
import { interviewSkillsFlashcards } from './flashcards-batch17-interview';

// Batch 18: Universal — Auto-extracted from all lesson quizzes (871 cards, 61 categories)
import { universalFlashcards } from './flashcards-batch18-universal';

// Batch 19: Premium — Gemini-crafted retention flashcards from deep lesson analysis
import { premiumFlashcards } from './flashcards-batch19-premium';

// Gemini All: Comprehensive Gemini-generated flashcards for all 76 modules (35 cards each)
import { geminiFlashcards } from './flashcards-gemini-all';

/**
 * Cap: max 50 cards per module (pathwayId).
 * Priority: Premium (batch19) > Universal (batch18) > earlier batches.
 * Within each tier: balanced difficulty (beginner → intermediate → advanced).
 */
const MAX_CARDS_PER_MODULE = 50;

function capPerModule(cards: SpacedRepetitionCard[]): SpacedRepetitionCard[] {
  // Deduplicate by ID first
  const seen = new Set<string>();
  const deduped = cards.filter(c => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });

  // Group by pathwayId
  const grouped: Record<string, SpacedRepetitionCard[]> = {};
  deduped.forEach(card => {
    const pid = card.pathwayId || 'unknown';
    if (!grouped[pid]) grouped[pid] = [];
    grouped[pid].push(card);
  });

  // For each group, select best 50
  const result: SpacedRepetitionCard[] = [];
  const diffOrder: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2 };

  for (const cards of Object.values(grouped)) {
    if (cards.length <= MAX_CARDS_PER_MODULE) {
      result.push(...cards);
    } else {
      // Sort: Gemini-all first (best), then premium (batch19), then universal, then legacy
      const sorted = cards.sort((a, b) => {
        // Gemini-all cards first (gem- prefix) — highest quality
        const aGem = a.id.startsWith('gem-') ? 0 : 1;
        const bGem = b.id.startsWith('gem-') ? 0 : 1;
        if (aGem !== bGem) return aGem - bGem;
        // Then premium cards (fc- prefix from batch19)
        const aPremium = a.id.startsWith('fc-') ? 0 : 1;
        const bPremium = b.id.startsWith('fc-') ? 0 : 1;
        if (aPremium !== bPremium) return aPremium - bPremium;
        // Then universal cards (batch18)
        const aUniv = a.id.startsWith('univ-') ? 0 : 1;
        const bUniv = b.id.startsWith('univ-') ? 0 : 1;
        if (aUniv !== bUniv) return aUniv - bUniv;
        // Then by difficulty for balance
        return (diffOrder[a.difficulty] || 1) - (diffOrder[b.difficulty] || 1);
      });
      result.push(...sorted.slice(0, MAX_CARDS_PER_MODULE));
    }
  }

  return result;
}

/**
 * All flashcards combined — capped at 50 per module for optimal review sessions
 */
export const allFlashcards: SpacedRepetitionCard[] = capPerModule([
  // Main
  ...mainFlashcards,
  // Batch 2
  ...aiMlFlashcards,
  ...pythonDataScienceFlashcards,
  ...wealthBuildingFlashcards,
  // Batch 3
  ...negotiationFlashcards,
  ...psychologyFlashcards,
  ...blockchainFlashcards,
  // Batch 4
  ...bruceLeeFlashcards,
  ...lifeDesignFlashcards,
  ...masterSynthesisFlashcards,
  // Batch 5
  ...subtleArtFlashcards,
  ...mansSearchFlashcards,
  ...futureSelfFlashcards,
  ...darkPsychologyFlashcards,
  // Batch 6
  ...cognitiveBiasFlashcards,
  ...mentalModelsFlashcards,
  ...productivityFlashcards,
  ...stoicismFlashcards,
  // Batch 7
  ...quantitativeTradingFlashcards,
  ...communicationFlashcards,
  ...defiFlashcards,
  ...statisticsFlashcards,
  // Batch 8
  ...emotionalIntelligenceFlashcards,
  ...thinkingFastSlowFlashcards,
  // Batch 9
  ...criticalThinkingFlashcards,
  ...habitsFlashcards,
  ...leadershipFlashcards,
  // Batch 10
  ...philosophyFlashcards,
  ...entrepreneurshipFlashcards,
  ...persuasionFlashcards,
  // Batch 11
  ...creativityFlashcards,
  ...memoryLearningFlashcards,
  ...healthWellnessFlashcards,
  ...timeManagementFlashcards,
  // Batch 12
  ...financialMarketsFlashcards,
  ...relationshipsFlashcards,
  ...systemsThinkingFlashcards,
  ...careerFlashcards,
  // Batch 13
  ...mindfulnessFlashcards,
  ...writingFlashcards,
  ...economicsFlashcards,
  ...problemSolvingFlashcards,
  // Batch 14
  ...resilienceFlashcards,
  ...cryptoWeb3Flashcards,
  ...focusFlashcards,
  ...goalSettingFlashcards,
  ...negotiationAdvancedFlashcards,
  // Batch 15
  ...selfDisciplineFlashcards,
  ...decisionMakingFlashcards,
  ...personalBrandingFlashcards,
  ...motivationFlashcards,
  ...dataAnalysisFlashcards,
  // Batch 16
  ...publicSpeakingFlashcards,
  ...learningStrategiesFlashcards,
  ...strategicThinkingFlashcards,
  ...networkingFlashcards,
  ...cognitiveScienceFlashcards,
  ...riskManagementFlashcards,
  ...influencePsychologyFlashcards,
  ...sleepScienceFlashcards,
  // Batch 17
  ...productivitySystemsFlashcards,
  ...stressManagementFlashcards,
  ...salesPsychologyFlashcards,
  ...conflictResolutionFlashcards,
  ...innovationThinkingFlashcards,
  ...interviewSkillsFlashcards,
  // Batch 18: Universal
  ...universalFlashcards,
  // Batch 19: Premium (Gemini-crafted)
  ...premiumFlashcards,
  // Gemini All: Comprehensive 76-module coverage (highest priority)
  ...geminiFlashcards,
]);

/**
 * Flashcards by category for filtered views
 */
export const flashcardsByCategory = {
  personalDevelopment: [
    ...mainFlashcards.filter(f => f.pathwayId === 'personal-development'),
    ...subtleArtFlashcards,
    ...mansSearchFlashcards,
    ...futureSelfFlashcards,
    ...habitsFlashcards,
    ...resilienceFlashcards,
    ...goalSettingFlashcards,
    ...selfDisciplineFlashcards,
    ...motivationFlashcards,
    ...learningStrategiesFlashcards,
    ...sleepScienceFlashcards,
  ],
  negotiation: [
    ...negotiationFlashcards,
    ...negotiationAdvancedFlashcards,
  ],
  psychology: [
    ...psychologyFlashcards,
    ...darkPsychologyFlashcards,
    ...emotionalIntelligenceFlashcards,
    ...thinkingFastSlowFlashcards,
    ...cognitiveBiasFlashcards,
    ...cognitiveScienceFlashcards,
    ...influencePsychologyFlashcards,
  ],
  blockchain: [
    ...blockchainFlashcards,
    ...defiFlashcards,
    ...cryptoWeb3Flashcards,
  ],
  bruceLee: bruceLeeFlashcards,
  lifeDesign: [
    ...lifeDesignFlashcards,
    ...careerFlashcards,
    ...personalBrandingFlashcards,
    ...interviewSkillsFlashcards,
  ],
  masterSynthesis: [
    ...masterSynthesisFlashcards,
    ...mentalModelsFlashcards,
    ...systemsThinkingFlashcards,
  ],
  wealthBuilding: [
    ...mainFlashcards.filter(f => f.pathwayId === 'wealth-building'),
    ...wealthBuildingFlashcards,
    ...quantitativeTradingFlashcards,
    ...financialMarketsFlashcards,
    ...economicsFlashcards,
    ...strategicThinkingFlashcards,
    ...riskManagementFlashcards,
  ],
  communication: [
    ...communicationFlashcards,
    ...relationshipsFlashcards,
    ...writingFlashcards,
    ...persuasionFlashcards,
    ...publicSpeakingFlashcards,
    ...networkingFlashcards,
    ...conflictResolutionFlashcards,
  ],
  aiMl: [
    ...mainFlashcards.filter(f => f.pathwayId === 'ai-ml'),
    ...aiMlFlashcards,
  ],
  pythonDataScience: [
    ...pythonDataScienceFlashcards,
    ...dataAnalysisFlashcards,
  ],
  statistics: statisticsFlashcards,
  productivity: [
    ...productivityFlashcards,
    ...timeManagementFlashcards,
    ...focusFlashcards,
    ...productivitySystemsFlashcards,
    ...stressManagementFlashcards,
  ],
  philosophy: [
    ...philosophyFlashcards,
    ...stoicismFlashcards,
    ...mindfulnessFlashcards,
  ],
  leadership: leadershipFlashcards,
  entrepreneurship: [
    ...entrepreneurshipFlashcards,
    ...salesPsychologyFlashcards,
    ...innovationThinkingFlashcards,
  ],
  criticalThinking: [
    ...criticalThinkingFlashcards,
    ...problemSolvingFlashcards,
    ...decisionMakingFlashcards,
  ],
  creativity: creativityFlashcards,
  memoryLearning: memoryLearningFlashcards,
  healthWellness: healthWellnessFlashcards,
  // Batch 18: Universal categories
  emotionalIntelligenceMod: universalFlashcards.filter(c => c.pathwayId === 'emotional-intelligence'),
  bharatWisdom: universalFlashcards.filter(c =>
    ['bhagavad-gita', 'ramayana-mahabharata', 'upanishads', 'shiv-sutras',
     'sanskrit-mantras', 'jyotish-vastu', 'vedic-wisdom', 'ayurveda',
     'yoga-philosophy', 'mythology'].includes(c.pathwayId!)
  ),
  financeMarkets: universalFlashcards.filter(c =>
    ['finance-investing', 'technical-analysis', 'options-trading',
     'macro-economics', 'crypto-trading'].includes(c.pathwayId!)
  ),
  techCode: universalFlashcards.filter(c =>
    ['web-development', 'cloud-devops', 'cybersecurity'].includes(c.pathwayId!)
  ),
  scienceUniverse: universalFlashcards.filter(c =>
    ['astronomy', 'biology-evolution', 'quantum-mechanics', 'earth-sciences',
     'physics-engineering', 'mathematics-patterns'].includes(c.pathwayId!)
  ),
  creativeArts: universalFlashcards.filter(c =>
    ['writing-storytelling', 'music-sound', 'creative-writing',
     'content-creation', 'world-building'].includes(c.pathwayId!)
  ),
  strategySystems: universalFlashcards.filter(c =>
    ['strategic-thinking', 'systems-complexity', 'game-theory',
     'decision-making', 'risk-management', 'design-thinking'].includes(c.pathwayId!)
  ),
  historyCulture: universalFlashcards.filter(c =>
    ['history-civilizations', 'geopolitics', 'ancient-empires',
     'modern-history', 'cultural-anthropology'].includes(c.pathwayId!)
  ),
  relationshipsSociety: universalFlashcards.filter(c =>
    ['relationships-social', 'communication-rhetoric', 'dating-attraction',
     'networking', 'parenting', 'social-intelligence'].includes(c.pathwayId!)
  ),
  salesBusiness: universalFlashcards.filter(c =>
    ['sales-mastery', 'personal-branding', 'entrepreneurship-101',
     'startups-innovation'].includes(c.pathwayId!)
  ),
  leadershipProductivity: universalFlashcards.filter(c =>
    ['leadership', 'problem-solving', 'productivity-systems'].includes(c.pathwayId!)
  ),
  stoicismWisdom: universalFlashcards.filter(c =>
    ['stoicism', 'western-philosophy'].includes(c.pathwayId!)
  ),
  easternPhilosophy: universalFlashcards.filter(c =>
    ['eastern-philosophy'].includes(c.pathwayId!)
  ),
};

/**
 * Get flashcard stats
 */
export function getFlashcardStats() {
  return {
    total: allFlashcards.length,
    byDifficulty: {
      beginner: allFlashcards.filter(f => f.difficulty === 'beginner').length,
      intermediate: allFlashcards.filter(f => f.difficulty === 'intermediate').length,
      advanced: allFlashcards.filter(f => f.difficulty === 'advanced').length,
    },
    byCategory: Object.entries(flashcardsByCategory).reduce((acc, [key, cards]) => {
      acc[key] = cards.length;
      return acc;
    }, {} as Record<string, number>),
  };
}

// Re-export for backwards compatibility
export { mainFlashcards as flashcards };
