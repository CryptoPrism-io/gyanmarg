import type { SpacedRepetitionCard } from '@/types';

export const riskManagementFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-risk-001',
    front: 'Define Nassim Taleb\'s Black Swan event',
    back: 'It\'s a rare, high-impact outlier event; after it happens, people falsely see it as predictable. Examples: 9/11; 2008 crisis; COVID-19',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['risk', 'black-swan', 'uncertainty', 'taleb']
  },
  {
    id: 'fc-risk-002',
    front: 'Risk vs. Uncertainty: What\'s the key difference?',
    back: 'Risk: Know probabilities; estimate likelihood. Uncertainty: Probabilities unknown. Act: Quantify risk, adapt to uncertainty',
    category: 'Wealth Building',
    source: 'Risk, Uncertainty and Profit - Frank Knight',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['risk', 'uncertainty', 'decision-making']
  },
  {
    id: 'fc-risk-003',
    front: 'Describe antifragility: how do antifragile systems respond to stress?',
    back: 'Gain from disorder, volatility, and stress; grow stronger when shocked. Unlike fragility (breaks) and resilience (stays same)',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['antifragile', 'risk', 'taleb', 'volatility']
  },
  {
    id: 'fc-risk-004',
    front: 'Define Expected Value (EV) and outline its calculation',
    back: 'EV: Sum (Probability × Outcome). Calculate: P1×O1 + P2×O2 + ... + Pn×On. Take +EV bets repeatedly for long-term success; individual outcomes vary',
    category: 'Wealth Building',
    source: 'Thinking in Bets - Annie Duke',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['expected-value', 'probability', 'decision-making']
  },
  {
    id: 'fc-risk-005',
    front: 'Kelly Criterion: What is it & when do you use it?',
    back: 'Maximize long-term growth by calculating optimal bet size: f* = (bp - q) / b. Use cautiously; half-Kelly is often safer; overbetting leads to ruin',
    category: 'Wealth Building',
    source: 'Fortune\'s Formula - William Poundstone',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['kelly-criterion', 'bet-sizing', 'risk-management']
  },
  {
    id: 'fc-risk-006',
    front: 'What is a fat tail distribution and its implications for markets?',
    back: 'Extreme events more frequent than normal; Standard risk models underestimate risk; Gains/losses from rare events. Ask: How exposed am I?',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['fat-tails', 'probability', 'risk', 'statistics']
  },
  {
    id: 'fc-risk-007',
    front: 'What\'s survivorship bias & how does it mislead success analysis?',
    back: 'Focus on winners; ignore failures\' data. Study surviving businesses, not failed; analyze existing funds, not closed. ID: fc-risk-007',
    category: 'Wealth Building',
    source: 'Fooled by Randomness - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['survivorship-bias', 'cognitive-bias', 'decision-making']
  },
  {
    id: 'fc-risk-008',
    front: 'What\'s a pre-mortem analysis & how do you do it?',
    back: 'Imagine failure, then identify causes. Steps: Assume failure; List reasons independently; Compile & discuss; Mitigate. Use before big changes; Overcome bias; Find risks',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['pre-mortem', 'planning', 'risk-assessment']
  },
  {
    id: 'fc-risk-009',
    front: 'Barbell strategy: What does it do, and how does it achieve antifragility?',
    back: 'Combine safe + risky assets, avoid middle ground. Allocate 85-90% to safe assets; 10-15% to high-risk, high-reward bets. Cap losses, maximize upside & benefit from volatility',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['barbell-strategy', 'portfolio', 'antifragile', 'taleb']
  },
  {
    id: 'fc-risk-010',
    front: 'Define "skin in the game" in the context of decision-making & risk',
    back: 'Bear consequences of decisions; Aligns incentives & creates accountability; Avoid advice from those with no personal stake',
    category: 'Wealth Building',
    source: 'Skin in the Game - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['skin-in-the-game', 'incentives', 'accountability', 'taleb']
  },
  {
    id: 'fc-risk-011',
    front: 'Additive vs. Multiplicative Risks: What\'s the key difference?',
    back: 'Additive risks combine linearly; multiplicative risks compound losses. Prioritize avoiding ruin: prevent any risk leading to total loss',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['risk', 'ruin', 'compounding', 'mathematics']
  },
  {
    id: 'fc-risk-012',
    front: 'Define narrative fallacy & its risks to wealth building. (fc-risk-012)',
    back: 'Create stories from random events; mistake correlation for causation. Avoid overconfidence, false patterns, & underestimating randomness. Focus on process',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['narrative-fallacy', 'cognitive-bias', 'randomness']
  },
  {
    id: 'fc-risk-013',
    front: 'Beyond asset quantity, how achieve true portfolio diversification?',
    back: 'Reduce correlation, don\'t just increase holdings. Diversify: asset class; geography; time; risk. Stress-test & hold uncorrelated assets',
    category: 'Wealth Building',
    source: 'Against the Gods - Peter Bernstein',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['diversification', 'portfolio', 'correlation', 'risk-management']
  },
  {
    id: 'fc-risk-014',
    front: 'Define ergodicity; explain how it relates to personal finance risk',
    back: 'Ergodic: Time average = ensemble average. Personal finance is non-ergodic; avoid ruinous strategies. Consider: one life, expected value isn\'t everything',
    category: 'Wealth Building',
    source: 'Ergodicity Economics - Ole Peters',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['ergodicity', 'risk', 'personal-finance', 'mathematics']
  },
  {
    id: 'fc-risk-015',
    front: 'Define via negativa in investing. How to improve wealth?',
    back: 'Improve by subtracting. Avoid mistakes, then invest. Eliminate downside risk before chasing upside; leverage, concentration, illiquidity, complexity',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['via-negativa', 'risk-management', 'taleb', 'simplicity']
  },
  {
    id: 'fc-risk-016',
    front: 'Define asymmetric risk-reward. How do you spot it?',
    back: 'Gains greatly exceed losses (or vice versa). ID: Max loss? Max gain? Probabilities? Seek limited downside & huge upside; avoid big loss potential',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['asymmetry', 'risk-reward', 'optionality']
  },
  {
    id: 'fc-risk-017',
    front: 'What\'s optionality and why is it valuable in wealth building?',
    back: 'Gain asymmetric payoffs by having choices, not obligations. Build it: cash; skills; network; flexibility. Adapt, don\'t fix',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['optionality', 'flexibility', 'antifragile', 'uncertainty']
  },
  {
    id: 'fc-risk-018',
    front: 'Define loss aversion & its effects on investment decisions',
    back: 'Losses feel ~2x worse than equal gains. It leads to holding losers, selling winners early, avoiding risk, & over-monitoring. Focus on portfolio value; decide based on expected return',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['loss-aversion', 'behavioral-finance', 'cognitive-bias']
  },
  {
    id: 'fc-risk-019',
    front: 'What\'s the ludic fallacy, and why should it concern wealth builders?',
    back: 'Assume real-world probabilities equal those in games; danger: underestimate tail risk. Acknowledge real-world messiness; maintain safety margins',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['ludic-fallacy', 'probability', 'uncertainty', 'taleb']
  },
  {
    id: 'fc-risk-020',
    front: 'Assess risk tolerance: What factors & how do you gauge your comfort?',
    back: 'Factor in capacity (can you afford loss?), need (return required), attitude (comfort with volatility). Test with small sums; Observe reaction to actual downturns',
    category: 'Wealth Building',
    source: 'The Intelligent Asset Allocator - William Bernstein',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['risk-tolerance', 'investing', 'personal-finance']
  },
  {
    id: 'fc-risk-021',
    front: 'Define domain dependence in risk assessment. What does it mean?',
    back: 'Evaluate risk differently across contexts, even if identical. Fix: Apply consistent frameworks; calculate expected value',
    category: 'Wealth Building',
    source: 'Fooled by Randomness - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['domain-dependence', 'cognitive-bias', 'risk-perception']
  },
  {
    id: 'fc-risk-022',
    front: 'What\'s the Turkey Problem (Taleb)?',
    back: 'Absence of risk evidence != risk absence.  Don\'t assume continued success based on past stability; catastrophic failure is possible.  Always stress-test strategies',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['turkey-problem', 'risk', 'black-swan', 'taleb']
  },
  {
    id: 'fc-risk-023',
    front: 'Define hedging and list its primary strategies',
    back: 'Reduce risk with offsetting positions. Strategies: Direct insurance; Diversify uncorrelated assets; Match assets/liabilities; Dynamically adjust. Weigh costs vs benefits',
    category: 'Wealth Building',
    source: 'Against the Gods - Peter Bernstein',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['hedging', 'risk-management', 'portfolio']
  },
  {
    id: 'fc-risk-024',
    front: 'Fragile vs. Robust Systems: How do they respond to stress & volatility?',
    back: 'Fragile breaks; Robust resists. Fragile: leverage/debt; tight optimization; specific conditions; complexity. Robust: redundancy; simplicity; fewer dependencies; buffer margins. Ensure robustness first!',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['fragility', 'robustness', 'systems', 'taleb']
  },
  {
    id: 'fc-risk-025',
    front: 'Mediocristan vs. Extremistan: Define these domains and their key characteristic',
    back: 'Mediocristan: single observation DOES NOT affect total; normal distribution. Extremistan: single observation DOES affect total; power laws. Avoid Mediocristan thinking in Extremistan',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['extremistan', 'mediocristan', 'power-laws', 'taleb']
  },
  {
    id: 'fc-risk-026',
    front: 'Explain the Lindy Effect and its implications for wealth building',
    back: 'Remaining lifespan is proportional to current age for non-perishables. Favor time-tested strategies; prefer surviving financial products',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['lindy-effect', 'time-tested', 'taleb', 'longevity']
  },
  {
    id: 'fc-risk-027',
    front: 'Define iatrogenics in finance, referencing Taleb\'s perspective',
    back: 'Harm caused by the \'healer\'. Avoid excessive trading; tax-inefficient moves; churning accounts; overcomplicating. Benefit > Harm + Costs',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['iatrogenics', 'financial-advice', 'intervention', 'taleb']
  },
  {
    id: 'fc-risk-028',
    front: 'Confidence vs. Competence: What\'s the critical relationship to understand?',
    back: 'Avoid Dunning-Kruger: Overconfidence in beginners, underconfidence in experts. Manage risk; Know what you don\'t know; Markets punish hubris',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['overconfidence', 'dunning-kruger', 'cognitive-bias']
  },
  {
    id: 'fc-risk-029',
    front: 'Define convexity in investing/life',
    back: 'More upside than downside from volatility. Use options, VC, tinkering; structure to benefit from, not be harmed by, variability',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['convexity', 'optionality', 'antifragile', 'taleb']
  },
  {
    id: 'fc-risk-030',
    front: 'Define margin of safety in investing',
    back: 'Build a buffer between estimated value & action to mitigate risk',
    category: 'Wealth Building',
    source: 'The Intelligent Investor - Benjamin Graham',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['margin-of-safety', 'value-investing', 'risk-management']
  },
  {
    id: 'fc-risk-031',
    front: 'What\'s \'silent evidence\' in risk assessment, and why does it mislead us?',
    back: 'Hidden failures mislead; only survivors visible. Seek failure stories; study what didn\'t work',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['silent-evidence', 'survivorship-bias', 'risk', 'taleb']
  },
  {
    id: 'fc-risk-032',
    front: 'Explain variance drain (volatility drag) and its impact on compounding',
    back: 'Volatility hurts compounding even with positive returns. Reduce it! G=A-(V/2); Less volatile portfolios win',
    category: 'Wealth Building',
    source: 'Expected Returns - Antti Ilmanen',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['variance-drain', 'volatility', 'compounding', 'mathematics']
  },
  {
    id: 'fc-risk-033',
    front: 'Differentiate reversible vs. irreversible decisions',
    back: 'Reversible: Act quickly, 70% confidence (hiring; features). Irreversible: Analyze carefully (acquisitions; career change); err toward caution',
    category: 'Wealth Building',
    source: 'Jeff Bezos / Amazon Shareholder Letters',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['decision-making', 'reversibility', 'risk-assessment']
  },
  {
    id: 'fc-risk-034',
    front: 'Denomination Effect: How does framing impact risk perception?',
    back: 'Reframe identical risks to feel different. E.g., 1% chance of losing $100k vs. 100% chance losing $1k, though expected loss is identical. ID: fc-risk-034',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['framing', 'cognitive-bias', 'risk-perception']
  },
  {
    id: 'fc-risk-035',
    front: 'What is the planning fallacy? How do you counter it?',
    back: 'Underestimate time/costs & overestimate benefits of future actions. Counter: Reference class forecasting; add buffer; pre-mortem; break down projects; track estimates',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['planning-fallacy', 'cognitive-bias', 'forecasting']
  },
  {
    id: 'fc-risk-036',
    front: 'Explain regression to the mean & its investment relevance',
    back: 'Extreme results tend toward the average; Exceptional companies likely normalize, poor ones may improve. Avoid misattributing statistical effects',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['regression-to-mean', 'statistics', 'investing']
  },
  {
    id: 'fc-risk-037',
    front: 'Explain path dependence (sequence risk) and its impact on retirees',
    back: 'Order of returns matters; early poor returns devastate retirees withdrawing funds. Reduce risk near retirement; consider sequence risk, not just average returns',
    category: 'Wealth Building',
    source: 'The Psychology of Money - Morgan Housel',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['path-dependence', 'sequence-risk', 'retirement']
  },
  {
    id: 'fc-risk-038',
    front: 'Calculate the probability of ruin over multiple periods',
    back: 'Ruin probability compounds: P(ruin over n periods) = 1 - (1 - p)^n. Prioritize avoiding ruin over maximizing returns; small annual risks become large lifetime risks',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['ruin', 'probability', 'mathematics', 'risk']
  },
  {
    id: 'fc-risk-039',
    front: 'What is base rate neglect? Give an example',
    back: 'Ignore base rates; favor specific details. Example: Startups have 90% fail rate; focus on details of a specific startup; ignore odds. fc-risk-039',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['base-rate', 'cognitive-bias', 'probability']
  },
  {
    id: 'fc-risk-040',
    front: 'Availability Heuristic: How does it skew your risk assessment?',
    back: 'Judge probability by ease of recall. Counter: Use data; recognize biases from vivid, recent, emotional events. Affects investment & risk perception',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['availability-heuristic', 'cognitive-bias', 'risk-perception']
  },
  {
    id: 'fc-risk-041',
    front: 'Define model risk and its common problems',
    back: 'Model risk: Errors or misuse. Understand limits; assume future differs from past. Complexity obscures assumptions; avoid false precision',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['model-risk', 'complexity', 'financial-models']
  },
  {
    id: 'fc-risk-042',
    front: 'What\'s moral hazard?',
    back: 'Take more risk when shielded from consequences. Examples: bank bailouts; insurance. Personal finance: align incentives; avoid advisors with misaligned incentives',
    category: 'Wealth Building',
    source: 'Skin in the Game - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['moral-hazard', 'incentives', 'risk', 'ethics']
  },
  {
    id: 'fc-risk-043',
    front: 'Use scenario analysis for decision-making: how?',
    back: 'Evaluate decisions across multiple futures. Identify uncertainties; create scenarios; evaluate; find robust decisions. Choose strategies that thrive',
    category: 'Wealth Building',
    source: 'The Art of the Long View - Peter Schwartz',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['scenario-analysis', 'decision-making', 'planning']
  },
  {
    id: 'fc-risk-044',
    front: 'Correlation breakdown: What happens during crises?',
    back: 'Assets move together; diversification fails. Plan for crisis-uncorrelated assets: cash, bonds, gold; historical correlations underestimate risk',
    category: 'Wealth Building',
    source: 'Expected Returns - Antti Ilmanen',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['correlation', 'crisis', 'diversification', 'portfolio']
  },
  {
    id: 'fc-risk-045',
    front: 'What is the disposition effect?',
    back: 'Sell winners early, hold losers long. Avoid loss aversion; cut losses for tax benefits and redeploy capital; let winners run',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['disposition-effect', 'behavioral-finance', 'investing']
  },
  {
    id: 'fc-risk-046',
    front: 'Explain negative knowledge & its advantage in wealth building/decision making',
    back: 'Know what DOESN\'T work, what to avoid. More robust than positive knowledge because subtractive; e.g., avoid high fees, not chase growth',
    category: 'Wealth Building',
    source: 'Poor Charlie\'s Almanack - Charlie Munger',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['negative-knowledge', 'via-negativa', 'munger', 'wisdom']
  },
  {
    id: 'fc-risk-047',
    front: 'Define tail risk and its portfolio implications in brief',
    back: 'Extreme rare events, underestimated by std deviation/VaR.  Hedge with options; use a barbell strategy: safe assets + small bets',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['tail-risk', 'portfolio', 'risk-management', 'extremes']
  },
  {
    id: 'fc-risk-048',
    front: 'What is Resulting?',
    back: 'Judge decision quality by outcomes, not process. Avoid: luck attributed to skill; abandoning sound strategies; reinforcing recklessness. Evaluate the process; use decision journals',
    category: 'Wealth Building',
    source: 'Thinking in Bets - Annie Duke',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['resulting', 'decision-quality', 'process', 'luck']
  },
  {
    id: 'fc-risk-049',
    front: 'Describe the principal-agent problem; give finance examples',
    back: 'Agent\'s incentives differ from yours. Fix: Choose fiduciaries; prefer fee-only advisors; understand advisor pay; find advisors who invest with you',
    category: 'Wealth Building',
    source: 'Skin in the Game - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['principal-agent', 'financial-advice', 'incentives']
  },
  {
    id: 'fc-risk-050',
    front: 'Tight vs. Loose Risk Management: Key difference?',
    back: 'Tight: Rules for known risks; use stop-losses. Loose: Principles for unknown risks; build flexibility & redundancy. Adapt to situation',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['risk-management', 'rules', 'principles', 'flexibility']
  }
];
