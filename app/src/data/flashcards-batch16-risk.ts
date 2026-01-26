import type { SpacedRepetitionCard } from '@/types';

export const riskManagementFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-risk-001',
    front: 'What is a Black Swan event according to Nassim Taleb?',
    back: 'A Black Swan is an event with three characteristics: (1) It is an outlier beyond normal expectations, (2) It carries extreme impact, (3) Despite its outlier status, human nature makes us concoct explanations after the fact, making it seem predictable. Examples include 9/11, the 2008 financial crisis, and COVID-19. The key insight is that these events are not predictable but are retrospectively rationalized.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['risk', 'black-swan', 'uncertainty', 'taleb']
  },
  {
    id: 'fc-risk-002',
    front: 'What is the difference between risk and uncertainty?',
    back: 'Risk refers to situations where probabilities are known or can be estimated (like casino games). Uncertainty refers to situations where probabilities are unknown or unknowable (like launching a new product). Risk can be quantified and insured against; uncertainty cannot. Frank Knight made this distinction: "Risk" = measurable, "Uncertainty" = immeasurable. Most real-world decisions involve uncertainty, not risk.',
    category: 'Wealth Building',
    source: 'Risk, Uncertainty and Profit - Frank Knight',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['risk', 'uncertainty', 'decision-making']
  },
  {
    id: 'fc-risk-003',
    front: 'What does "Antifragile" mean and how does it differ from resilience?',
    back: 'Antifragile describes systems that gain from disorder, volatility, and stress - they get stronger when shocked. This differs from: (1) Fragile - breaks under stress, (2) Resilient/Robust - resists stress but stays the same, (3) Antifragile - improves under stress. Examples: muscles grow stronger with exercise, immune systems strengthen with exposure. Application: Structure your finances to benefit from volatility rather than just survive it.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['antifragile', 'risk', 'taleb', 'volatility']
  },
  {
    id: 'fc-risk-004',
    front: 'What is Expected Value (EV) and how do you calculate it?',
    back: 'Expected Value = Sum of (Probability × Outcome) for all possible outcomes. Formula: EV = P1×O1 + P2×O2 + ... + Pn×On. Example: A bet with 60% chance of winning $100 and 40% chance of losing $50 has EV = (0.6 × $100) + (0.4 × -$50) = $60 - $20 = $40. Key insight: Always take positive EV bets repeatedly over time, even if individual outcomes are uncertain. Long-term success comes from consistently making +EV decisions.',
    category: 'Wealth Building',
    source: 'Thinking in Bets - Annie Duke',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['expected-value', 'probability', 'decision-making']
  },
  {
    id: 'fc-risk-005',
    front: 'What is the Kelly Criterion and when should you use it?',
    back: 'The Kelly Criterion determines optimal bet size to maximize long-term growth: f* = (bp - q) / b, where f* = fraction of bankroll to bet, b = odds received, p = probability of winning, q = probability of losing (1-p). Example: If you have 60% edge (p=0.6) on even money (b=1), bet 20% of bankroll. Key insights: (1) Never bet more than Kelly suggests, (2) Half-Kelly is often safer in practice, (3) Overbetting leads to ruin even with positive edge.',
    category: 'Wealth Building',
    source: 'Fortune\'s Formula - William Poundstone',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['kelly-criterion', 'bet-sizing', 'risk-management']
  },
  {
    id: 'fc-risk-006',
    front: 'What are "fat tails" and why do they matter for risk management?',
    back: 'Fat tails describe probability distributions where extreme events occur more frequently than a normal (Gaussian) distribution predicts. In markets, daily moves of 5+ standard deviations happen far more often than bell curves suggest. Implications: (1) Standard risk models (like VaR) dramatically underestimate tail risk, (2) The bulk of gains/losses come from rare events, (3) You cannot simply extrapolate from average behavior. Always ask: "What happens in the extreme case?"',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['fat-tails', 'probability', 'risk', 'statistics']
  },
  {
    id: 'fc-risk-007',
    front: 'What is survivorship bias and how does it distort our understanding of success?',
    back: 'Survivorship bias is focusing on winners while ignoring the silent evidence of failures. Examples: (1) Studying successful entrepreneurs without examining failed ones, (2) Analyzing surviving hedge funds while ignoring those that closed, (3) Learning from "winners" in any field without knowing how many tried and failed. Correction: Always ask "Where is the graveyard?" Before emulating successful strategies, investigate how many attempted the same approach and failed.',
    category: 'Wealth Building',
    source: 'Fooled by Randomness - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['survivorship-bias', 'cognitive-bias', 'decision-making']
  },
  {
    id: 'fc-risk-008',
    front: 'What is a pre-mortem analysis and how do you conduct one?',
    back: 'A pre-mortem imagines a project has already failed, then works backward to identify causes. Process: (1) Assume the decision/project has failed spectacularly, (2) Each team member independently writes reasons why it failed, (3) Compile and discuss all potential failure modes, (4) Create mitigation strategies. Benefits: Overcomes optimism bias, surfaces concerns people hesitate to voice, and identifies risks before they materialize. Conduct pre-mortems before major investments, career changes, or business decisions.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['pre-mortem', 'planning', 'risk-assessment']
  },
  {
    id: 'fc-risk-009',
    front: 'What is the "barbell strategy" for managing risk?',
    back: 'The barbell strategy combines extreme safety with extreme risk-taking, avoiding the middle. Structure: 85-90% in ultra-safe assets (cash, treasuries) + 10-15% in highly speculative bets with unlimited upside. Rationale: You cannot lose more than 10-15%, but your upside is unlimited. The middle-risk investments often have hidden fragilities. Application: Keep most wealth secure, make small asymmetric bets on high-potential opportunities. This creates antifragility - you benefit from volatility.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['barbell-strategy', 'portfolio', 'antifragile', 'taleb']
  },
  {
    id: 'fc-risk-010',
    front: 'What is "skin in the game" and why is it essential for good decision-making?',
    back: 'Skin in the game means bearing the consequences of your decisions. It creates accountability, aligns incentives, and filters out bad advice. Red flags: Advisors with no personal stake, experts who face no downside from being wrong, consultants who do not implement their own recommendations. Application: (1) Only take advice from those with skin in the game, (2) Ensure your own incentives align with outcomes, (3) Be skeptical of predictions from those who bear no cost for being wrong.',
    category: 'Wealth Building',
    source: 'Skin in the Game - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['skin-in-the-game', 'incentives', 'accountability', 'taleb']
  },
  {
    id: 'fc-risk-011',
    front: 'What is the difference between multiplicative and additive risks?',
    back: 'Additive risks combine: if you lose $100, then lose $100, you have lost $200 total. Multiplicative risks compound: if you lose 50%, then lose 50%, you have lost 75% total. Key insight: A single 100% loss in multiplicative systems (like investing) wipes you out completely regardless of previous gains. This is why avoiding ruin is priority #1. Never take risks that could result in total loss, no matter how small the probability or how large the potential gain.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['risk', 'ruin', 'compounding', 'mathematics']
  },
  {
    id: 'fc-risk-012',
    front: 'What is the "narrative fallacy" and how does it affect risk assessment?',
    back: 'The narrative fallacy is our tendency to create coherent stories from random events, finding causation where there is only correlation or chance. We construct explanations after the fact that make past events seem predictable. Dangers: (1) Overconfidence in predictions, (2) False pattern recognition, (3) Underestimating randomness. Correction: Focus on process over outcomes, accept that luck plays a larger role than we admit, and be humble about your ability to explain complex events.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['narrative-fallacy', 'cognitive-bias', 'randomness']
  },
  {
    id: 'fc-risk-013',
    front: 'How should you think about portfolio diversification beyond just holding many assets?',
    back: 'True diversification means reducing correlation, not just increasing quantity. Principles: (1) Assets must respond differently to the same events, (2) Diversify across asset classes, geographies, time horizons, and risk factors, (3) Stress-test: would all positions suffer in the same scenario? Pitfall: In crises, correlations spike - assets that seemed uncorrelated become correlated. Solution: Include truly uncorrelated assets (cash, certain alternatives) and maintain dry powder for opportunities.',
    category: 'Wealth Building',
    source: 'Against the Gods - Peter Bernstein',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['diversification', 'portfolio', 'correlation', 'risk-management']
  },
  {
    id: 'fc-risk-014',
    front: 'What is "ergodicity" and why does it matter for personal finance?',
    back: 'A system is ergodic if time average equals ensemble average. Example: Russian roulette - on average across 6 people, 5/6 survive. But for one person playing 6 times, they will eventually die. Personal finance is non-ergodic: you only have one life/career. Implications: (1) Avoid strategies that could cause ruin even if expected value is positive, (2) What works "on average" may not work for you individually, (3) Survival must come before optimization.',
    category: 'Wealth Building',
    source: 'Ergodicity Economics - Ole Peters',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['ergodicity', 'risk', 'personal-finance', 'mathematics']
  },
  {
    id: 'fc-risk-015',
    front: 'What is "via negativa" and how does it apply to risk management?',
    back: 'Via negativa means improvement through subtraction - what you do not do matters more than what you do. In risk management: (1) Focus on avoiding stupid mistakes rather than making brilliant moves, (2) Remove fragilities before adding new investments, (3) Eliminate downside before chasing upside. Applications: Avoid leverage, avoid concentrated positions, avoid illiquid investments, avoid complexity you do not understand. Success often comes from avoiding failures, not from bold actions.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['via-negativa', 'risk-management', 'taleb', 'simplicity']
  },
  {
    id: 'fc-risk-016',
    front: 'What is asymmetric risk-reward and how do you identify it?',
    back: 'Asymmetric risk-reward means potential gains significantly exceed potential losses (or vice versa). Positive asymmetry: Limited downside, unlimited upside (like options). Negative asymmetry: Limited upside, unlimited downside (like selling insurance). Identification: (1) What is the maximum I can lose? (2) What is the maximum I can gain? (3) What are the probabilities? Seek positive asymmetry: situations where you can lose small but win big. Avoid negative asymmetry disguised as "safe" income.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['asymmetry', 'risk-reward', 'optionality']
  },
  {
    id: 'fc-risk-017',
    front: 'What is "optionality" and why is it valuable in uncertain environments?',
    back: 'Optionality is having the right but not obligation to take an action. Options have asymmetric payoffs: limited downside (cost of option) but unlimited upside. Sources of optionality: (1) Cash reserves, (2) Skills and education, (3) Relationships and network, (4) Flexibility in career/life. Strategy: Collect options cheaply, exercise them when conditions are favorable. In uncertain environments, the ability to respond to new information is more valuable than a fixed optimal plan.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['optionality', 'flexibility', 'antifragile', 'uncertainty']
  },
  {
    id: 'fc-risk-018',
    front: 'What is loss aversion and how does it affect investment decisions?',
    back: 'Loss aversion means losses feel roughly twice as painful as equivalent gains feel good. A $100 loss hurts more than a $100 gain pleases. Effects on investing: (1) Holding losing positions too long hoping to break even, (2) Selling winners too early to lock in gains, (3) Avoiding beneficial risks, (4) Checking portfolios too frequently amplifies emotional pain. Correction: Focus on total portfolio, not individual positions. Make decisions based on future expected value, not past purchase price.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['loss-aversion', 'behavioral-finance', 'cognitive-bias']
  },
  {
    id: 'fc-risk-019',
    front: 'What is the "ludic fallacy" and why is it dangerous?',
    back: 'The ludic fallacy is believing real-world probabilities work like games (ludus = game). In games, rules and probabilities are known. In reality, we face unknown unknowns and cannot enumerate all possibilities. Danger: Using casino-like models (normal distributions, known odds) for real-world decisions leads to massive underestimation of tail risks. Correction: Acknowledge that the real world is messier than models suggest, maintain large safety margins, and prepare for scenarios you cannot imagine.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['ludic-fallacy', 'probability', 'uncertainty', 'taleb']
  },
  {
    id: 'fc-risk-020',
    front: 'How do you conduct a proper risk tolerance assessment?',
    back: 'Risk tolerance has three components: (1) Risk capacity - financial ability to absorb losses (time horizon, income stability, wealth), (2) Risk need - required return to meet goals, (3) Risk attitude - psychological comfort with volatility. Assessment: Consider worst-case scenarios - if your portfolio dropped 50%, would you panic sell or buy more? Test with real money first. Your true risk tolerance is revealed in actual downturns, not questionnaires. Err conservative: overestimating tolerance leads to panic selling at bottoms.',
    category: 'Wealth Building',
    source: 'The Intelligent Asset Allocator - William Bernstein',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['risk-tolerance', 'investing', 'personal-finance']
  },
  {
    id: 'fc-risk-021',
    front: 'What is "domain dependence" in risk assessment?',
    back: 'Domain dependence means people evaluate risks differently in different contexts, even when mathematically identical. Example: Someone cautious with investments may take huge career risks, or vice versa. A surgeon may accept investment risks they would never accept in surgery. Implications: (1) Risk perception is not consistent, (2) We cannot transfer risk skills easily between domains, (3) Abstract risks feel different from vivid ones. Correction: Use consistent frameworks across all decisions; calculate expected values explicitly.',
    category: 'Wealth Building',
    source: 'Fooled by Randomness - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['domain-dependence', 'cognitive-bias', 'risk-perception']
  },
  {
    id: 'fc-risk-022',
    front: 'What is the "turkey problem" and what does it teach about risk?',
    back: 'A turkey is fed every day for 1,000 days, developing increasing confidence that it will be fed tomorrow. On day 1,001 (Thanksgiving), it is slaughtered. Lesson: The absence of evidence of risk is not evidence of absence. Long periods of stability can precede catastrophic failure. Past performance does not guarantee future results - especially for strategies that have never been stress-tested. Always ask: "What event could change everything?" and "How would I know if the environment has fundamentally changed?"',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['turkey-problem', 'risk', 'black-swan', 'taleb']
  },
  {
    id: 'fc-risk-023',
    front: 'What is hedging and what are the main hedging strategies?',
    back: 'Hedging reduces risk by taking offsetting positions. Main strategies: (1) Direct hedging - buy insurance or put options, (2) Diversification - hold uncorrelated assets, (3) Natural hedging - match assets/liabilities (like borrowing in the currency you earn), (4) Dynamic hedging - adjust positions as conditions change. Cost-benefit: Hedging has a cost (premiums, lower returns). Hedge against risks you cannot afford, accept risks you can absorb. Perfect hedging eliminates both downside and upside.',
    category: 'Wealth Building',
    source: 'Against the Gods - Peter Bernstein',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['hedging', 'risk-management', 'portfolio']
  },
  {
    id: 'fc-risk-024',
    front: 'What is the difference between "fragile" and "robust" systems?',
    back: 'Fragile systems break under stress and volatility - they need calm, predictable environments. Robust systems resist stress and remain unchanged. Characteristics of fragility: (1) High leverage/debt, (2) Tight optimization with no slack, (3) Dependence on specific conditions, (4) Complexity. Characteristics of robustness: (1) Redundancy and reserves, (2) Simplicity, (3) Fewer dependencies, (4) Buffer margins. Before optimizing for returns, first ensure your system is robust enough to survive adversity.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['fragility', 'robustness', 'systems', 'taleb']
  },
  {
    id: 'fc-risk-025',
    front: 'What is "Mediocristan" vs "Extremistan" and why does it matter?',
    back: 'Mediocristan: Domains where single observations cannot significantly affect the total (human height, calories consumed). Governed by normal distributions. Extremistan: Domains where single observations can dominate (wealth, book sales, city populations). Governed by power laws. Mistake: Applying Mediocristan thinking to Extremistan domains. In Extremistan, outliers matter enormously, averages mislead, and prediction is much harder. Finance, technology, and fame operate in Extremistan.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['extremistan', 'mediocristan', 'power-laws', 'taleb']
  },
  {
    id: 'fc-risk-026',
    front: 'What is the "lindy effect" and how does it inform decision-making?',
    back: 'The Lindy Effect states that for non-perishable things (ideas, technologies, books), expected remaining lifespan is proportional to current age. A book in print for 100 years will likely stay in print another 100 years. Applications: (1) Prefer time-tested strategies over new fads, (2) Old problems/solutions are more likely to persist, (3) New is fragile, old is robust. Investment implication: Be skeptical of new financial products and strategies; prefer those that have survived multiple market cycles.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['lindy-effect', 'time-tested', 'taleb', 'longevity']
  },
  {
    id: 'fc-risk-027',
    front: 'What is "iatrogenics" and how does it apply to financial advice?',
    back: 'Iatrogenics refers to harm caused by the healer - in medicine, treatments that make patients worse. In finance: (1) Excessive trading costs, (2) Tax-inefficient moves, (3) Advisors churning accounts, (4) Overcomplicating simple situations. Principle: First, do no harm. Often the best action is no action. Intervention should clear a high bar: the expected benefit must exceed expected harm plus costs. Many financial "improvements" destroy value through fees, taxes, and behavioral mistakes.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['iatrogenics', 'financial-advice', 'intervention', 'taleb']
  },
  {
    id: 'fc-risk-028',
    front: 'How should you think about the relationship between confidence and competence?',
    back: 'The Dunning-Kruger effect shows beginners are overconfident while experts recognize their limitations. In risk assessment: (1) Overconfidence leads to excessive risk-taking, (2) True expertise includes knowing what you do not know, (3) Markets punish overconfidence severely. Warning signs: Certainty about uncertain outcomes, complex explanations for why "this time is different," inability to articulate what would change your mind. Cultivate calibrated confidence - match your certainty to actual predictability.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['overconfidence', 'dunning-kruger', 'cognitive-bias']
  },
  {
    id: 'fc-risk-029',
    front: 'What is "convexity" and why should you seek it?',
    back: 'Convexity means having more upside than downside from variability. A convex position gains more from favorable moves than it loses from unfavorable ones. Examples: (1) Options (limited loss, unlimited gain), (2) Venture capital (most fail, few massive wins), (3) Tinkering/experimentation. Opposite: Concavity - limited upside, large downside (selling insurance, leverage). Strategy: Structure your life and investments to have convex exposure - benefit from volatility rather than being harmed by it.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['convexity', 'optionality', 'antifragile', 'taleb']
  },
  {
    id: 'fc-risk-030',
    front: 'What is a "margin of safety" and how do you apply it?',
    back: 'Margin of safety means building in a buffer between your estimate and your actions. Origin: Benjamin Graham\'s investing principle of buying below intrinsic value. Broader application: (1) Save more than you think you need, (2) Estimate costs higher than expected, (3) Plan for delays and setbacks, (4) Keep reserves for emergencies. The larger your uncertainty, the larger your margin should be. It compensates for errors in analysis, bad luck, and unknown unknowns.',
    category: 'Wealth Building',
    source: 'The Intelligent Investor - Benjamin Graham',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['margin-of-safety', 'value-investing', 'risk-management']
  },
  {
    id: 'fc-risk-031',
    front: 'What is "silent evidence" and how does it distort our view of risk?',
    back: 'Silent evidence is the data we never see because failures are invisible. Examples: (1) Failed businesses that closed leave no trace, (2) Dead people cannot tell their stories, (3) Abandoned strategies are not documented. Effect: We dramatically underestimate risk by only observing survivors. The risks that killed others are invisible to us. Correction: Actively seek out failure stories, study what did not work, visit the "graveyard" of failed ventures before emulating successful ones.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['silent-evidence', 'survivorship-bias', 'risk', 'taleb']
  },
  {
    id: 'fc-risk-032',
    front: 'What is "variance drain" and why does it matter for long-term returns?',
    back: 'Variance drain (or volatility drag) reduces compound returns even when average returns are positive. Math: A portfolio that gains 50% then loses 50% does not break even - it loses 25% ($100 to $150 to $75). The geometric mean is always less than arithmetic mean when variance exists. Formula: Geometric return approximately equals Arithmetic return - (Variance/2). Implication: Two portfolios with the same average return will have different ending wealth; the less volatile one wins. Reduce unnecessary volatility.',
    category: 'Wealth Building',
    source: 'Expected Returns - Antti Ilmanen',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['variance-drain', 'volatility', 'compounding', 'mathematics']
  },
  {
    id: 'fc-risk-033',
    front: 'How do you distinguish between reversible and irreversible decisions?',
    back: 'Reversible decisions (Type 2): Can be undone, should be made quickly with 70% confidence. Examples: hiring, product features, most investments. Irreversible decisions (Type 1): Difficult or impossible to undo, require careful analysis. Examples: major acquisitions, having children, career changes. Strategy: (1) Identify which type you face, (2) Move fast on reversible decisions, (3) Slow down and gather more information for irreversible ones, (4) When uncertain about reversibility, err toward caution.',
    category: 'Wealth Building',
    source: 'Jeff Bezos / Amazon Shareholder Letters',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['decision-making', 'reversibility', 'risk-assessment']
  },
  {
    id: 'fc-risk-034',
    front: 'What is the "denomination effect" in risk perception?',
    back: 'The denomination effect means identical risks feel different based on how they are presented. Example: A 1% chance of losing $100,000 feels different from a 100% chance of losing $1,000, even though expected loss is identical. Also: A risk of "1 in 1,000" feels safer than "0.1%." Applications: (1) Reframe risks in different denominations to check your judgment, (2) Convert percentages to frequencies ("3 out of 100") for better intuition, (3) Beware of how risks are framed by those presenting them.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['framing', 'cognitive-bias', 'risk-perception']
  },
  {
    id: 'fc-risk-035',
    front: 'What is the "planning fallacy" and how do you counteract it?',
    back: 'The planning fallacy is the systematic tendency to underestimate time, costs, and risks of future actions while overestimating benefits. Even experts who know about this bias still fall prey to it. Counteractions: (1) Reference class forecasting - look at how long similar projects actually took, (2) Add 50-100% buffer to estimates, (3) Pre-mortem analysis, (4) Break projects into smaller pieces and estimate each, (5) Track your past estimates vs actuals to calibrate.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['planning-fallacy', 'cognitive-bias', 'forecasting']
  },
  {
    id: 'fc-risk-036',
    front: 'What is "regression to the mean" and why is it misunderstood?',
    back: 'Regression to the mean: Extreme observations tend to be followed by less extreme ones. A company with exceptional performance will likely have more average performance next year; a poor performer may improve. Misunderstanding: We attribute regression to causes when it is purely statistical. The "Sports Illustrated curse" is regression, not causation. Investment implication: Do not chase yesterday\'s best performers or flee yesterday\'s worst; both will likely regress. Past extreme performance is partly luck that will not persist.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['regression-to-mean', 'statistics', 'investing']
  },
  {
    id: 'fc-risk-037',
    front: 'What is "path dependence" and why does sequence of returns matter?',
    back: 'Path dependence means the order of events affects the final outcome, not just the average. For retirees withdrawing funds: Poor returns early are devastating even if later returns are great, because there is less capital to compound. For accumulators: Poor returns early matter less because you have less at stake. Implications: (1) Reduce risk as you approach using money, (2) Sequence of returns risk requires different strategies than average return risk, (3) Cannot simply look at historical average returns.',
    category: 'Wealth Building',
    source: 'The Psychology of Money - Morgan Housel',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['path-dependence', 'sequence-risk', 'retirement']
  },
  {
    id: 'fc-risk-038',
    front: 'How do you calculate the probability of ruin over time?',
    back: 'For repeated risks, ruin probability compounds. If each year has a 2% chance of a catastrophic loss, over 30 years: P(survival) = 0.98^30 = 54.5%, meaning 45.5% chance of ruin. Formula: P(ruin over n periods) = 1 - (1 - p)^n, where p = single-period ruin probability. Key insight: Small annual risks become large lifetime risks. A 1% annual risk means 26% chance of occurrence over 30 years. This is why avoiding ruin, not maximizing returns, should be the primary goal.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['ruin', 'probability', 'mathematics', 'risk']
  },
  {
    id: 'fc-risk-039',
    front: 'What is the "base rate neglect" and how does it affect predictions?',
    back: 'Base rate neglect is ignoring general statistical information in favor of specific case information. Example: Ignoring that 90% of startups fail when evaluating a specific "promising" startup. The base rate of failure should heavily weight your prediction regardless of how good the specific case seems. Correction: Always start with the base rate, then adjust for specific information. Ask: "What percentage of similar situations resulted in this outcome?" before considering unique features.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['base-rate', 'cognitive-bias', 'probability']
  },
  {
    id: 'fc-risk-040',
    front: 'What is "availability heuristic" and how does it distort risk assessment?',
    back: 'The availability heuristic judges probability by how easily examples come to mind. Vivid, recent, or emotional events seem more likely than they are. Examples: Fearing plane crashes more than car accidents, overweighting recent market events. Effects: (1) Recency bias in investing, (2) Overreaction to dramatic news, (3) Underestimating mundane but common risks. Correction: Use actual statistics rather than gut feelings, recognize when your judgment is being swayed by memorable rather than representative events.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['availability-heuristic', 'cognitive-bias', 'risk-perception']
  },
  {
    id: 'fc-risk-041',
    front: 'What is "model risk" and why should you distrust complex financial models?',
    back: 'Model risk is the risk that a model is wrong or misused. All models are simplifications; they break down under conditions they were not designed for. Famous failures: LTCM, subprime mortgage models. Problems: (1) Models assume the future resembles the past, (2) They cannot capture unknown unknowns, (3) Complexity obscures assumptions, (4) False precision creates overconfidence. Defense: Understand a model\'s assumptions, stress-test under extreme scenarios, maintain skepticism, prefer simple robust models over complex precise ones.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['model-risk', 'complexity', 'financial-models']
  },
  {
    id: 'fc-risk-042',
    front: 'What is "moral hazard" and how does it affect risk-taking?',
    back: 'Moral hazard occurs when someone takes more risks because they do not bear the full consequences. Examples: (1) Banks taking excessive risks knowing governments will bail them out, (2) Insurance encouraging riskier behavior, (3) Employees taking risks with company money. Personal finance applications: (1) Be wary of advisors with moral hazard (fees regardless of performance), (2) Recognize when your own moral hazard increases risk, (3) Align incentives to minimize moral hazard in your own decisions.',
    category: 'Wealth Building',
    source: 'Skin in the Game - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['moral-hazard', 'incentives', 'risk', 'ethics']
  },
  {
    id: 'fc-risk-043',
    front: 'How do you use scenario analysis for decision-making?',
    back: 'Scenario analysis evaluates decisions across multiple possible futures instead of predicting one outcome. Process: (1) Identify key uncertainties, (2) Create 3-5 distinct scenarios (best case, worst case, most likely, and wildcards), (3) Evaluate your decision under each scenario, (4) Identify decisions that are robust across scenarios. Benefits: Forces consideration of alternatives, reveals hidden assumptions, identifies strategies that work across multiple futures. Choose strategies that survive bad scenarios while benefiting from good ones.',
    category: 'Wealth Building',
    source: 'The Art of the Long View - Peter Schwartz',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['scenario-analysis', 'decision-making', 'planning']
  },
  {
    id: 'fc-risk-044',
    front: 'What is "correlation breakdown" and why does it matter in crises?',
    back: 'Correlation breakdown occurs when assets that normally move independently suddenly move together during crises. In 2008, nearly all asset classes fell together despite historical diversification. Cause: In panic, correlations converge toward 1 as investors flee all risk. Implications: (1) Diversification fails precisely when you need it most, (2) Historical correlations underestimate crisis risk, (3) True safety requires assets uncorrelated in crises (not just normal times): cash, certain government bonds, gold. Plan for correlation spikes.',
    category: 'Wealth Building',
    source: 'Expected Returns - Antti Ilmanen',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['correlation', 'crisis', 'diversification', 'portfolio']
  },
  {
    id: 'fc-risk-045',
    front: 'What is the "disposition effect" and how does it harm investors?',
    back: 'The disposition effect is the tendency to sell winners too early and hold losers too long. Cause: Loss aversion makes realizing losses painful, while taking gains provides satisfaction. Problem: This reverses rational behavior - you should cut losses (tax benefits, redeploy capital) and let winners run (momentum tends to persist). Correction: (1) Ignore purchase price when deciding to sell, (2) Ask "Would I buy this today at current price?", (3) Tax-loss harvest systematically, (4) Use predetermined selling rules.',
    category: 'Wealth Building',
    source: 'Thinking, Fast and Slow - Daniel Kahneman',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['disposition-effect', 'behavioral-finance', 'investing']
  },
  {
    id: 'fc-risk-046',
    front: 'What is "negative knowledge" and why is it valuable?',
    back: 'Negative knowledge is knowing what does not work, what to avoid, what will not happen. It is more robust than positive knowledge because it is subtractive and less likely to be wrong. Examples: (1) Knowing what destroys wealth (high fees, leverage, concentration) is more actionable than knowing what creates it, (2) Eliminating bad habits beats adding good ones. Strategy: Focus on avoiding stupidity rather than seeking brilliance. Make a list of "don\'t do" rules. Most success comes from avoiding big mistakes.',
    category: 'Wealth Building',
    source: 'Poor Charlie\'s Almanack - Charlie Munger',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['negative-knowledge', 'via-negativa', 'munger', 'wisdom']
  },
  {
    id: 'fc-risk-047',
    front: 'How do you think about "tail risk" in portfolio construction?',
    back: 'Tail risk is exposure to extreme, rare events at the edges of the probability distribution. Portfolio implications: (1) Traditional risk measures (standard deviation, VaR) underestimate tail risk, (2) Small tail hedges (like put options) can protect against catastrophe, (3) Barbell approach: mostly safe assets plus small speculative positions. Tail risk thinking: "What happens if the worst 1% scenario occurs?" If the answer is "I am wiped out," you have unacceptable tail risk regardless of average expectations.',
    category: 'Wealth Building',
    source: 'The Black Swan - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['tail-risk', 'portfolio', 'risk-management', 'extremes']
  },
  {
    id: 'fc-risk-048',
    front: 'What is "resulting" and why is it a flawed way to evaluate decisions?',
    back: 'Resulting is judging decision quality by outcomes rather than process. A good decision can have bad outcomes (and vice versa) due to randomness. Problems: (1) Luck gets attributed to skill, (2) Sound strategies abandoned after unlucky outcomes, (3) Reckless strategies reinforced by lucky wins. Correction: Evaluate decision quality by the process: Was available information used well? Were probabilities estimated correctly? Would you make the same decision again? Keep a decision journal to review process, not just outcomes.',
    category: 'Wealth Building',
    source: 'Thinking in Bets - Annie Duke',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['resulting', 'decision-quality', 'process', 'luck']
  },
  {
    id: 'fc-risk-049',
    front: 'What is the "principal-agent problem" in financial advice?',
    back: 'The principal-agent problem occurs when someone (agent) making decisions for another (principal) has different incentives. In finance: (1) Brokers paid by commission favor frequent trading, (2) Fund managers favor asset gathering over returns, (3) Bankers favor complex products with high fees. Solutions: (1) Seek fiduciary advisors legally bound to your interest, (2) Prefer fee-only over commission compensation, (3) Understand how your advisor gets paid, (4) Prefer advisors who invest alongside you.',
    category: 'Wealth Building',
    source: 'Skin in the Game - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'beginner',
    tags: ['principal-agent', 'financial-advice', 'incentives']
  },
  {
    id: 'fc-risk-050',
    front: 'What is the difference between "tight" and "loose" risk management?',
    back: 'Tight risk management: Precise rules, stop-losses, and predetermined actions. Works for quantifiable, frequent risks. Loose risk management: Broad principles, flexibility, and redundancy. Works for uncertain, rare risks. The mistake is using tight management for uncertain situations (false precision) or loose management for measurable situations (unnecessary losses). Recommendation: Use tight controls for known, repeating risks (position sizing, rebalancing rules). Use loose principles and large buffers for unknown risks and Black Swans.',
    category: 'Wealth Building',
    source: 'Antifragile - Nassim Nicholas Taleb',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['risk-management', 'rules', 'principles', 'flexibility']
  }
];
