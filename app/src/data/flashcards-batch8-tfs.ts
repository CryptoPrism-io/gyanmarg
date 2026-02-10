import type { SpacedRepetitionCard } from '@/types';

export const thinkingFastSlowFlashcards: SpacedRepetitionCard[] = [
  // System 1 vs System 2
  {
    id: 'fc-tfs-001',
    front: 'Kahneman\'s System 1: What are its key characteristics?',
    back: 'Think fast, automatically, and intuitively. Use heuristics; make quick judgments, react emotionally',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-psychology', 'system-1', 'dual-process-theory']
  },
  {
    id: 'fc-tfs-002',
    front: 'Kahneman\'s System 2: What are its key characteristics?',
    back: 'Engage slow, analytical thought. Use conscious attention; handle complex tasks; enable logic and self-control',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-psychology', 'system-2', 'dual-process-theory']
  },
  {
    id: 'fc-tfs-003',
    front: 'Why does System 2 often accept System 1\'s suggestions?',
    back: 'System 2 conserves mental energy; endorse System 1\'s intuition without scrutiny when busy/tired/depleted',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-psychology', 'mental-effort', 'cognitive-ease']
  },
  {
    id: 'fc-tfs-004',
    front: 'Define cognitive ease',
    back: 'Experience mental fluency; Feel it\'s true/good/safe when processing is easy (familiar, clear, repeated). Fluency can mislead to accepting false info',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-psychology', 'cognitive-ease', 'fluency']
  },
  {
    id: 'fc-tfs-005',
    front: 'WYSIATI: What does it stand for and what is its core implication?',
    back: 'Stands for \'What You See Is All There Is\'. Don\'t assume complete information; consider missing data',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-psychology', 'wysiati', 'decision-making']
  },
  {
    id: 'fc-tfs-006',
    front: 'How does WYSIATI fuel overconfidence in judgment?',
    back: 'WYSIATI makes stories seem complete using available data; Ignore missing info. Consistency, not completeness, drives overconfidence; Trust what you see',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'cognitive-psychology', 'wysiati', 'overconfidence']
  },
  {
    id: 'fc-tfs-007',
    front: 'Anchoring Effect: What is it?',
    back: 'Fixate on initial info; Use this as a reference point when making decisions',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'anchoring', 'heuristics']
  },
  {
    id: 'fc-tfs-008',
    front: 'How does a random number affect estimation per Kahneman\'s research?',
    back: 'Random numbers bias estimates; seeing "10" yields lower estimates than seeing "65".  Anchoring affects numerical judgment, even when irrelevant',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'anchoring', 'research']
  },
  {
    id: 'fc-tfs-009',
    front: 'Availability Heuristic: How do we estimate event frequency?',
    back: 'Estimate based on mental ease; Recall readily available, recent, or emotional events easily. Overestimate probability; decide fast',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'availability-heuristic', 'heuristics']
  },
  {
    id: 'fc-tfs-010',
    front: 'Why overestimate plane crash risks vs. car accident risks?',
    back: 'Availability heuristic: vivid media coverage makes plane crashes easily recalled; influences risk perception. ID: fc-tfs-010',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'availability-heuristic', 'risk-perception']
  },
  {
    id: 'fc-tfs-011',
    front: 'Representativeness heuristic? (Psychology, Beginner)',
    back: 'Judge probability by stereotype matching; Ignore base rates & statistics. Kahneman; cognitive-bias; heuristics',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'representativeness', 'heuristics']
  },
  {
    id: 'fc-tfs-012',
    front: 'Describe representativeness heuristic & the conjunction fallacy',
    back: 'Judge probability based on stereotypes, not logic. Ignore probability rules',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'representativeness', 'conjunction-fallacy']
  },
  {
    id: 'fc-tfs-013',
    front: 'Define base rate neglect',
    back: 'Ignore base rates; focus on specific details when judging probability. Overemphasize representativeness, not prevalence. fc-tfs-013',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'cognitive-bias', 'base-rate-neglect', 'statistics']
  },
  {
    id: 'fc-tfs-014',
    front: 'Prospect Theory: How do people decide under risk?',
    back: 'Model choices as gains/losses from reference point, not final states; Consider loss aversion and diminishing sensitivity. Kahneman & Tversky developed it',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'prospect-theory', 'decision-making', 'behavioral-economics']
  },
  {
    id: 'fc-tfs-015',
    front: 'Define loss aversion and its relative impact vs. equivalent gains',
    back: 'Losses hurt about twice as much as equivalent gains feel good; influences decisions, risk, and negotiations',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'prospect-theory', 'loss-aversion', 'behavioral-economics']
  },
  {
    id: 'fc-tfs-016',
    front: 'Prospect Theory: What\'s diminishing sensitivity?',
    back: 'See changes closer to your reference point as larger; perceive less impact as you move farther from it. This impacts gains and losses',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'prospect-theory', 'diminishing-sensitivity', 'value-function']
  },
  {
    id: 'fc-tfs-017',
    front: 'How does a reference point shape outcome perception?',
    back: 'Perceive outcomes as gains or losses based on your reference point. Evaluate relative to expectations, not in absolute terms',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'prospect-theory', 'reference-point', 'framing']
  },
  {
    id: 'fc-tfs-018',
    front: 'What are framing effects?',
    back: 'Framing effects influence decisions by how you present info, even if the facts are identical. Reframe options to improve outcomes',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'framing-effects', 'decision-making', 'cognitive-bias']
  },
  {
    id: 'fc-tfs-019',
    front: 'How does framing influence medical choices in the Asian disease problem?',
    back: 'Emphasize gains, people choose risk-averse options. Emphasize losses, people choose risk-seeking options. Consider the framing carefully',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'framing-effects', 'risk-aversion', 'medical-decisions']
  },
  {
    id: 'fc-tfs-020',
    front: 'What is overconfidence bias?',
    back: 'Overestimate your knowledge & prediction accuracy; underestimate uncertainty. It leads to poor decisions',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'cognitive-bias', 'overconfidence', 'decision-making']
  },
  {
    id: 'fc-tfs-021',
    front: 'Define the planning fallacy',
    back: 'Underestimate time/cost/risk of actions; overestimate benefits.  Ignore base rates; factor in optimistic bias and past failures to improve predictions',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'planning-fallacy', 'overconfidence', 'project-management']
  },
  {
    id: 'fc-tfs-022',
    front: 'Define the \'inside\' vs. \'outside\' view in forecasting, per Kahneman',
    back: 'Inside: focus on specifics. Outside: use base rates. Use outside view (reference class forecasting) to avoid planning fallacy & overconfidence',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'planning-fallacy', 'reference-class-forecasting', 'decision-making']
  },
  {
    id: 'fc-tfs-023',
    front: 'Explain the peak-end rule and how it affects memory of experiences',
    back: 'Judge experiences by their peak emotion and ending, not the total. Improve experience memory; focus on favorable final moments',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'peak-end-rule', 'memory', 'experienced-utility']
  },
  {
    id: 'fc-tfs-024',
    front: 'Define duration neglect in evaluating experiences',
    back: 'Ignore experience length; focus on peak/end. Recall same pain levels for short/long, if peak/end are equal',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'duration-neglect', 'memory', 'peak-end-rule']
  },
  {
    id: 'fc-tfs-025',
    front: 'Experiencing vs. Remembering Self: Key Difference?',
    back: 'Experiencing self lives in the present; Remembering self creates stories of the past. They often disagree on what constitutes happiness',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'experiencing-self', 'remembering-self', 'well-being']
  },
  {
    id: 'fc-tfs-026',
    front: 'Why do bad vacation endings taint good memories?',
    back: 'Apply the peak-end rule: A negative ending biases memory. Remember the enjoyable days; don\'t let the final bad event ruin the entire recollection',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'remembering-self', 'peak-end-rule', 'memory']
  },
  {
    id: 'fc-tfs-027',
    front: 'What is attribute substitution (Kahneman)?',
    back: 'Replace difficult questions with easier ones unconsciously; rely on System 1 heuristics',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'heuristics', 'attribute-substitution', 'system-1']
  },
  {
    id: 'fc-tfs-028',
    front: 'Affect Heuristic: How do emotions influence judgments?',
    back: 'Use feelings to judge; Favor what you like (more benefits, fewer risks). Override careful analysis',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'affect-heuristic', 'emotions', 'risk-perception']
  },
  {
    id: 'fc-tfs-029',
    front: 'Define regression to the mean',
    back: 'Extreme observations move toward the average; high scores regress lower, low scores regress higher. It\'s due to chance, not causation',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'statistics', 'regression-to-mean', 'probability']
  },
  {
    id: 'fc-tfs-030',
    front: 'Why do we often invent false causal stories instead of seeing regression to the mean?',
    back: 'System 1 seeks causal explanations; attribute changes to feedback, not regression.  Leads to incorrect causal beliefs about reward and punishment; ignore statistics',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'regression-to-mean', 'causation', 'feedback']
  },
  {
    id: 'fc-tfs-031',
    front: 'Define hindsight bias',
    back: 'See past events as predictable *after* they happen; Recast memory to fit current knowledge',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'hindsight-bias', 'memory', 'decision-making']
  },
  {
    id: 'fc-tfs-032',
    front: 'What is outcome bias?',
    back: 'Outcome bias is judging the quality of a decision by its outcome rather than by the quality of the decision-making process at the time. A doctor who made a reasonable decision that led to a bad outcom',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'outcome-bias', 'decision-making', 'hindsight']
  },
  {
    id: 'fc-tfs-033',
    front: 'Illusion of skill in stock picking?',
    back: 'Investing advisors\' returns show zero correlation year-to-year; they overestimate skill. Industry rewards luck; don\'t be fooled',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'illusion-of-skill', 'investing', 'overconfidence']
  },
  {
    id: 'fc-tfs-034',
    front: 'Why do simple algorithms often beat expert judgment in prediction?',
    back: 'Experts are inconsistent; mood & biases affect decisions. Algorithms use key variables consistently; ignore noise; surpass expert accuracy',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'expert-judgment', 'algorithms', 'prediction']
  },
  {
    id: 'fc-tfs-035',
    front: 'What is priming and how does it influence behavior?',
    back: 'Priming: Exposure to a stimulus unconsciously affects subsequent responses. Example: Think \'old\' -> walk slower; think \'money\' -> act selfishly',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'priming', 'unconscious-influence', 'system-1']
  },
  {
    id: 'fc-tfs-036',
    front: 'Loss aversion & sunk cost fallacy: What\'s the connection?',
    back: 'Loss aversion drives the sunk cost fallacy; Avoid the pain of admitting wasted resources by continuing failing ventures',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'sunk-cost-fallacy', 'loss-aversion', 'decision-making']
  },
  {
    id: 'fc-tfs-037',
    front: 'Define narrow framing & its problem in decision-making',
    back: 'Isolate decisions; causes excessive risk aversion.  Accept multiple small positive bets; avoid narrow framing\'s perceived risk',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'narrow-framing', 'risk-aversion', 'decision-making']
  },
  {
    id: 'fc-tfs-038',
    front: 'Explain a \'premortem\' technique to improve planning and decision-making',
    back: 'Imagine project failure; explain why it happened. Legitimizes doubt; reveals risks; counters overconfidence',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'intermediate',
    tags: ['kahneman', 'premortem', 'planning-fallacy', 'decision-making']
  },
  {
    id: 'fc-tfs-039',
    front: 'Improve decisions: How use System 1 & 2 effectively?',
    back: 'Recognize & mitigate System 1 bias; Engage System 2; Seek disconfirmation; Use base rates & reference class forecasting; Structure better choices. Aim for *better*, not perfect',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'advanced',
    tags: ['kahneman', 'decision-making', 'debiasing', 'practical-applications']
  },
  {
    id: 'fc-tfs-040',
    front: 'Define the halo effect, including an example',
    back: 'Let initial impressions bias other judgments; attribute kindness to attractiveness; credit success to leadership. This colors subsequent views',
    category: 'Psychology',
    source: 'Thinking Fast and Slow',
    pathwayId: 'psychology',
    difficulty: 'beginner',
    tags: ['kahneman', 'halo-effect', 'cognitive-bias', 'first-impressions']
  }
];
