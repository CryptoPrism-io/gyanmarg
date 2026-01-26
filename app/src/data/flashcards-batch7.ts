import type { SpacedRepetitionCard } from '@/types';

/**
 * Flashcard Batch 7 - Generated flashcards from multiple topics:
 * - Quantitative Trading (30 cards)
 * - Communication Science (40 cards)
 * - DeFi / Decentralized Finance (40 cards)
 * - Statistics for Data Science (40 cards)
 */

// ============================================
// QUANTITATIVE TRADING - 30 flashcards
// ============================================
export const quantitativeTradingFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-qt-001',
    front: 'What is quantitative trading?',
    back: 'Quantitative trading is an investment approach that uses mathematical models, statistical analysis, and computer algorithms to identify and execute trading opportunities. It relies on data-driven decision making rather than intuition, using historical data to develop and test strategies before deploying capital.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'algorithms', 'basics']
  },
  {
    id: 'fc-qt-002',
    front: 'What is backtesting and why is it critical in quantitative trading?',
    back: 'Backtesting is the process of testing a trading strategy on historical data to evaluate its performance before risking real capital. It is critical because it helps identify strategy weaknesses, estimate expected returns and risks, optimize parameters, and validate that the strategy logic works as intended across different market conditions.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'backtesting', 'validation']
  },
  {
    id: 'fc-qt-003',
    front: 'What is alpha in quantitative trading?',
    back: 'Alpha represents the excess return of a trading strategy above a benchmark (often the market return). It measures the value added by the strategy independent of market movements. Positive alpha indicates the strategy outperforms its benchmark on a risk-adjusted basis, representing the "edge" or skill of the quantitative approach.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'alpha', 'performance']
  },
  {
    id: 'fc-qt-004',
    front: 'What is the difference between systematic and discretionary trading?',
    back: 'Systematic trading follows predefined rules and algorithms with minimal human intervention, executing trades based on quantitative signals. Discretionary trading relies on human judgment and intuition for decision-making. Systematic approaches offer consistency, scalability, and emotional discipline, while discretionary trading can adapt to novel situations but is prone to behavioral biases.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'systematic', 'strategy-types']
  },
  {
    id: 'fc-qt-005',
    front: 'What is a momentum trading strategy?',
    back: 'A momentum strategy buys assets that have shown strong recent performance and sells those with weak performance, based on the empirical observation that trends tend to persist. Implementation involves ranking securities by past returns over lookback periods (1-12 months), going long winners and short losers, with regular rebalancing.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'momentum', 'strategy-types']
  },
  {
    id: 'fc-qt-006',
    front: 'What is mean reversion in trading strategies?',
    back: 'Mean reversion is a strategy based on the assumption that prices tend to return to their historical average over time. When prices deviate significantly from their mean (measured by z-scores or Bollinger Bands), the strategy takes contrarian positions expecting prices to revert. It works best in range-bound markets and pairs trading scenarios.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'mean-reversion', 'strategy-types']
  },
  {
    id: 'fc-qt-007',
    front: 'What is overfitting in the context of strategy development?',
    back: 'Overfitting occurs when a trading strategy is too closely tailored to historical data, capturing noise rather than genuine market patterns. Symptoms include exceptional backtest results but poor live performance, excessive parameters, and strategies that only work on specific time periods. Prevention involves out-of-sample testing, cross-validation, and keeping models simple.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'overfitting', 'backtesting']
  },
  {
    id: 'fc-qt-008',
    front: 'What is survivorship bias and how does it affect backtests?',
    back: 'Survivorship bias occurs when backtests only include securities that survived to the present day, excluding delisted, bankrupt, or merged companies. This inflates historical returns because failed investments are ignored. To avoid it, use point-in-time databases that include all securities that existed during the backtest period.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'bias', 'backtesting']
  },
  {
    id: 'fc-qt-009',
    front: 'What is a factor model in quantitative investing?',
    back: 'A factor model explains asset returns through exposure to common risk factors such as market (beta), size (small vs. large cap), value (cheap vs. expensive), momentum, quality, and volatility. Factor investing systematically captures risk premiums associated with these factors, forming the basis of many quant strategies including smart beta and long-short equity.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'factors', 'alpha']
  },
  {
    id: 'fc-qt-010',
    front: 'What is look-ahead bias in backtesting?',
    back: 'Look-ahead bias occurs when a backtest inadvertently uses information that would not have been available at the time of the trade. Examples include using same-day closing prices for signals, incorporating future earnings announcements, or using data that was revised after initial release. It leads to unrealistically optimistic backtest results.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'bias', 'backtesting']
  },
  {
    id: 'fc-qt-011',
    front: 'What is the Sharpe Ratio and how is it calculated?',
    back: 'The Sharpe Ratio measures risk-adjusted returns by dividing excess return (strategy return minus risk-free rate) by standard deviation of returns. Formula: (Rp - Rf) / \u03c3p. A Sharpe above 1.0 is considered good, above 2.0 is excellent. It allows comparison across strategies with different risk levels but assumes normally distributed returns.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'risk-management', 'performance']
  },
  {
    id: 'fc-qt-012',
    front: 'What is maximum drawdown and why is it important?',
    back: 'Maximum drawdown (MDD) is the largest peak-to-trough decline in portfolio value before a new peak is reached. It measures the worst loss an investor would have experienced. MDD is crucial because it indicates capital at risk, affects investor psychology, and determines leverage limits. A strategy with 50% MDD needs 100% gain to recover.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'risk-management', 'drawdown']
  },
  {
    id: 'fc-qt-013',
    front: 'What is the Kelly Criterion for position sizing?',
    back: 'The Kelly Criterion is a formula for optimal bet sizing that maximizes long-term wealth growth. Formula: f* = (bp - q) / b, where b is odds, p is win probability, q is loss probability. It suggests the fraction of capital to risk on each trade. In practice, traders use "half Kelly" or less to reduce volatility and account for estimation errors.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'position-sizing', 'risk-management']
  },
  {
    id: 'fc-qt-014',
    front: 'What is Value at Risk (VaR)?',
    back: 'Value at Risk estimates the maximum potential loss over a specified time period at a given confidence level. For example, a 1-day 95% VaR of $1M means there is a 5% chance of losing more than $1M in one day. Methods include historical simulation, parametric (variance-covariance), and Monte Carlo simulation. VaR does not measure tail risk beyond the threshold.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'risk-management', 'var']
  },
  {
    id: 'fc-qt-015',
    front: 'What is portfolio volatility and how does diversification affect it?',
    back: 'Portfolio volatility measures the standard deviation of portfolio returns. Diversification reduces portfolio volatility below the weighted average of individual asset volatilities when assets are not perfectly correlated. The formula includes correlation terms: \u03c3p\u00b2 = \u03a3wi\u00b2\u03c3i\u00b2 + \u03a3\u03a3wiwj\u03c3i\u03c3j\u03c1ij. Adding uncorrelated assets dramatically reduces risk.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'risk-management', 'diversification']
  },
  {
    id: 'fc-qt-016',
    front: 'What is the Sortino Ratio and how does it differ from Sharpe?',
    back: 'The Sortino Ratio is a risk-adjusted return measure that only penalizes downside volatility, unlike Sharpe which penalizes all volatility. Formula: (Rp - Rf) / \u03c3d, where \u03c3d is downside deviation. It is more appropriate for strategies with asymmetric returns since upside volatility (gains) should not be considered "risk."',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'risk-management', 'performance']
  },
  {
    id: 'fc-qt-017',
    front: 'What is a stop-loss and how should it be sized in algorithmic trading?',
    back: 'A stop-loss is a predefined exit point that limits losses on a position. In algorithmic trading, stop-losses should be based on volatility (e.g., 2x ATR), maximum acceptable loss per trade (e.g., 1-2% of capital), or technical levels. Stops should be wide enough to avoid noise-triggered exits but tight enough to preserve capital.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'risk-management', 'position-sizing']
  },
  {
    id: 'fc-qt-018',
    front: 'What is correlation risk in portfolio management?',
    back: 'Correlation risk is the danger that asset correlations increase during market stress, reducing diversification benefits precisely when needed most. During crises, previously uncorrelated assets often move together (correlation goes to 1). Quant traders must stress-test portfolios under high-correlation scenarios and not rely solely on historical correlation estimates.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'risk-management', 'correlation']
  },
  {
    id: 'fc-qt-019',
    front: 'What is the Calmar Ratio?',
    back: 'The Calmar Ratio measures risk-adjusted returns by dividing annualized return by maximum drawdown. Formula: CAGR / |Maximum Drawdown|. It focuses on the risk of large losses rather than volatility. A ratio above 1.0 is generally considered good. Unlike Sharpe, it captures tail risk and is particularly relevant for strategies with significant drawdown potential.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'risk-management', 'performance']
  },
  {
    id: 'fc-qt-020',
    front: 'What is beta neutrality in portfolio construction?',
    back: 'Beta neutrality means constructing a portfolio with zero market exposure (beta = 0), so returns are independent of market direction. Achieved by balancing long and short positions or using derivatives to hedge market risk. Beta-neutral strategies aim to generate pure alpha without taking systematic market risk.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'risk-management', 'hedging']
  },
  {
    id: 'fc-qt-021',
    front: 'What is market microstructure?',
    back: 'Market microstructure studies the process and mechanics of trading: how orders are placed, matched, and executed; how prices are formed; and how information is incorporated into prices. Key concepts include order books, bid-ask spreads, market makers, price discovery, and the impact of trading on prices. Understanding microstructure is essential for execution algorithms.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'microstructure', 'execution']
  },
  {
    id: 'fc-qt-022',
    front: 'What is the bid-ask spread and what does it represent?',
    back: 'The bid-ask spread is the difference between the highest price buyers will pay (bid) and lowest price sellers will accept (ask). It represents the cost of immediacy and compensates market makers for risk. Spreads are tighter in liquid markets. For traders, the spread is a transaction cost that must be overcome to profit.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'microstructure', 'costs']
  },
  {
    id: 'fc-qt-023',
    front: 'What is slippage in algorithmic trading?',
    back: 'Slippage is the difference between expected execution price and actual execution price. It occurs due to market movement during order processing, large orders consuming multiple price levels, and latency. Slippage erodes strategy profits and must be estimated realistically in backtests. High-frequency strategies are particularly sensitive to slippage.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'execution', 'costs']
  },
  {
    id: 'fc-qt-024',
    front: 'What is a TWAP execution algorithm?',
    back: 'Time-Weighted Average Price (TWAP) is an execution algorithm that divides a large order into smaller slices executed at regular time intervals throughout a specified period. Goal is to achieve average execution price close to the time-weighted average market price. TWAP is simple and predictable but does not adapt to market conditions or volume patterns.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'execution', 'algorithms']
  },
  {
    id: 'fc-qt-025',
    front: 'What is a VWAP execution algorithm?',
    back: 'Volume-Weighted Average Price (VWAP) executes orders proportionally to historical volume patterns, trading more during high-volume periods. Goal is to match or beat the volume-weighted average price. VWAP is a common benchmark for institutional trading. It reduces market impact by trading with the market but can be predictable and exploited by other traders.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'execution', 'algorithms']
  },
  {
    id: 'fc-qt-026',
    front: 'What is market impact and how is it modeled?',
    back: 'Market impact is the price movement caused by executing a trade. Large orders push prices against the trader (buying raises prices, selling lowers them). Impact models include linear (impact proportional to size), square-root (impact proportional to sqrt of size), and temporary vs. permanent components. Minimizing market impact is crucial for profitable execution.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'execution', 'microstructure']
  },
  {
    id: 'fc-qt-027',
    front: 'What is latency in high-frequency trading?',
    back: 'Latency is the time delay between receiving market data and executing a trade. In HFT, latency is measured in microseconds or nanoseconds. Lower latency provides competitive advantage for capturing fleeting opportunities. Latency reduction involves co-location (placing servers near exchanges), specialized hardware (FPGAs), and optimized code paths.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'hft', 'execution']
  },
  {
    id: 'fc-qt-028',
    front: 'What is order book imbalance and how is it used?',
    back: 'Order book imbalance measures the difference between buy and sell orders at various price levels. Calculated as (Bid Volume - Ask Volume) / (Bid Volume + Ask Volume). Imbalance predicts short-term price direction: positive imbalance suggests upward pressure. HFT strategies use imbalance signals for market making and directional trading.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'microstructure', 'hft']
  },
  {
    id: 'fc-qt-029',
    front: 'What is co-location in high-frequency trading?',
    back: 'Co-location is the practice of placing trading servers in the same data center as exchange matching engines. This minimizes network latency to microseconds, providing speed advantage for HFT strategies. Exchanges offer co-location services for fees. Co-location is essential for latency-sensitive strategies like market making and statistical arbitrage.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'advanced',
    tags: ['quant', 'trading', 'hft', 'infrastructure']
  },
  {
    id: 'fc-qt-030',
    front: 'What is an iceberg order and why is it used?',
    back: 'An iceberg order displays only a small portion of the total order size, hiding the rest below the surface. As visible portions execute, hidden portions are revealed. Purpose is to hide trading intentions and minimize market impact on large orders. Detection of icebergs is a focus of HFT strategies seeking to exploit hidden liquidity.',
    category: 'Wealth Building',
    source: 'Quantitative Trading',
    pathwayId: 'wealth-building',
    difficulty: 'intermediate',
    tags: ['quant', 'trading', 'execution', 'order-types']
  }
];

// ============================================
// COMMUNICATION SCIENCE - 40 flashcards
// ============================================
export const communicationFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-comm-001',
    front: 'According to Frank Luntz in "Words That Work," what is the most important principle of effective communication?',
    back: "It's not what you say, it's what people hear. The meaning of your words is determined by the listener's interpretation, not your intention. Successful communicators focus on how their message will be received rather than what they want to express.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'perception', 'audience-awareness']
  },
  {
    id: 'fc-comm-002',
    front: 'What is "framing" in communication and why is it powerful?',
    back: 'Framing is the way information is presented that influences interpretation. The same facts can lead to different conclusions based on how they\'re framed. Example: "90% fat-free" vs "10% fat" - same information, but the first frame is more appealing. Frames activate certain mental associations while suppressing others.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'framing', 'persuasion']
  },
  {
    id: 'fc-comm-003',
    front: 'Why does Luntz recommend using simple language over complex vocabulary?',
    back: "Simple language ensures universal understanding, increases retention, and builds trust. Complex words create barriers and can seem pretentious. Lincoln's Gettysburg Address used mostly one and two-syllable words. The goal is communication, not demonstration of vocabulary. Simple words are processed faster and remembered longer.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'simplicity', 'clarity']
  },
  {
    id: 'fc-comm-004',
    front: 'What is the "Rule of Three" in memorable communication?',
    back: 'The Rule of Three states that information presented in groups of three is more memorable and persuasive. Examples: "Life, Liberty, and the Pursuit of Happiness"; "Government of the people, by the people, for the people." Three items create a pattern that feels complete and rhythmic without overwhelming the listener.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'persuasion', 'memorability']
  },
  {
    id: 'fc-comm-005',
    front: 'How does loss framing differ from gain framing, and which is typically more powerful?',
    back: 'Gain framing emphasizes benefits ("Save $100"), while loss framing emphasizes what might be lost ("Don\'t lose $100"). Loss framing is typically 2-3x more powerful due to loss aversion - people feel losses more intensely than equivalent gains. Use loss framing for urgent action, gain framing for building positive associations.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'framing', 'loss-aversion']
  },
  {
    id: 'fc-comm-006',
    front: 'What did Luntz identify as the most powerful word in the English language for persuasion?',
    back: '"Imagine" - it bypasses critical thinking and engages the creative, emotional brain. It invites participation rather than passive reception. When people imagine something, they mentally experience it, creating emotional investment. Other powerful words include: "you," "free," "because," "new," and "now."',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'persuasion', 'word-choice']
  },
  {
    id: 'fc-comm-007',
    front: 'What is the "Curse of Knowledge" and how does it impair communication?',
    back: "The Curse of Knowledge is the cognitive bias where experts forget what it's like not to know something. They use jargon, skip explanations, and assume shared context. To overcome it: use analogies, test messages on novices, explain acronyms, and ask \"Would my grandmother understand this?\"",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'cognitive-bias', 'clarity']
  },
  {
    id: 'fc-comm-008',
    front: 'Why is "because" such a powerful word in requests, according to Ellen Langer\'s research?',
    back: 'Langer\'s "copy machine study" showed that adding "because" to a request increased compliance significantly, even when the reason was meaningless ("because I need to make copies"). The word triggers an automatic compliance response - people expect reasons and "because" signals one is coming, satisfying that expectation.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'persuasion', 'compliance']
  },
  {
    id: 'fc-comm-009',
    front: 'What is the difference between "I" language and "You" language in persuasive communication?',
    back: '"I" language focuses on the speaker ("I think," "I need"), while "You" language focuses on the listener ("You\'ll benefit," "Your success"). "You" language is more persuasive because it centers the audience\'s interests. However, for taking responsibility or expressing feelings, "I" language is more appropriate and less accusatory.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'persuasion', 'language-patterns']
  },
  {
    id: 'fc-comm-010',
    front: 'What is "semantic satiation" and how should communicators avoid it?',
    back: 'Semantic satiation occurs when a word is repeated so often it loses meaning and impact. Example: overusing "amazing" until it means nothing. Avoid it by: varying word choice, using specific descriptors, saving powerful words for key moments, and letting actions reinforce words rather than repetition.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['communication', 'word-choice', 'impact']
  },
  {
    id: 'fc-comm-011',
    front: "What are Aristotle's three modes of persuasion (rhetorical appeals)?",
    back: 'Ethos (credibility/character), Pathos (emotional appeal), and Logos (logical argument). Effective communication uses all three: establish trust through expertise and integrity (ethos), connect emotionally (pathos), and provide evidence and reasoning (logos). The balance depends on audience and context.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'persuasion', 'rhetoric']
  },
  {
    id: 'fc-comm-012',
    front: 'Why do stories persuade more effectively than statistics alone?',
    back: "Stories activate multiple brain regions including sensory and motor cortices, creating \"neural coupling\" where the listener's brain mirrors the storyteller's. Statistics engage only analytical areas. Stories provide context, create emotional investment, are memorable (22x more than facts alone), and allow listeners to draw their own conclusions.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'storytelling', 'neuroscience']
  },
  {
    id: 'fc-comm-013',
    front: 'What is the "identifiable victim effect" in emotional communication?',
    back: 'People respond more strongly to a single, identified individual than to statistics about many. "One death is a tragedy; a million is a statistic." To leverage this: use specific individuals to represent larger issues, provide names and details, and make the subject relatable before presenting broader data.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'emotional-appeal', 'psychology']
  },
  {
    id: 'fc-comm-014',
    front: 'What is anaphora and how does it create rhetorical power?',
    back: 'Anaphora is the repetition of words or phrases at the beginning of successive clauses. Example: "I have a dream that... I have a dream that..." It creates rhythm, emphasizes key themes, builds emotional intensity, and makes messages memorable. Use for climactic moments and key takeaways.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'rhetoric', 'repetition']
  },
  {
    id: 'fc-comm-015',
    front: 'What is the "transportation" effect in narrative persuasion?',
    back: 'Transportation is the mental state where listeners become absorbed in a story, reducing their critical evaluation and resistance to persuasion. When "transported," people: experience genuine emotions, form story-consistent beliefs, and are less likely to counter-argue. This makes stories ideal for addressing skeptical audiences.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['communication', 'storytelling', 'persuasion']
  },
  {
    id: 'fc-comm-016',
    front: 'How should communicators use contrast to increase message impact?',
    back: 'Contrast makes differences salient and memorable. Techniques include: before/after comparisons, juxtaposing extremes ("Ask not what your country can do for you..."), comparing options side-by-side, and using antithesis (opposing ideas in parallel structure). Contrast provides context and prevents the "comparison vacuum."',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'rhetoric', 'contrast']
  },
  {
    id: 'fc-comm-017',
    front: 'What is the optimal structure for a persuasive story according to communication research?',
    back: 'The persuasive story arc: 1) Relatable character facing a challenge (creates identification), 2) Rising tension/complications (builds engagement), 3) Turning point/insight (delivers message), 4) Resolution showing transformation (models desired outcome), 5) Clear takeaway (crystallizes the lesson). Keep the message implicit within the narrative.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['communication', 'storytelling', 'structure']
  },
  {
    id: 'fc-comm-018',
    front: 'What is the rhetorical device "chiasmus" and why is it memorable?',
    back: 'Chiasmus is the reversal of grammatical structures in successive phrases: "Ask not what your country can do for you, but what you can do for your country." It creates a satisfying symmetry, forces listeners to think about both elements, and creates a memorable "twist." The reversed structure signals importance.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['communication', 'rhetoric', 'memorability']
  },
  {
    id: 'fc-comm-019',
    front: 'How do metaphors enhance understanding and persuasion?',
    back: "Metaphors map familiar concepts onto unfamiliar ones, making abstract ideas concrete. They: activate existing mental frameworks, bypass analytical resistance, create emotional resonance, and simplify complexity. Example: \"Time is money\" makes abstract time feel tangible. Choose metaphors that align with your audience's experiences.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'metaphor', 'understanding']
  },
  {
    id: 'fc-comm-020',
    front: 'What is the "peak-end rule" and how should it influence message structure?',
    back: 'People judge experiences primarily by their peak intensity and ending, not the average. For communication: place your strongest point at either the climax or conclusion, end on a high note even if there were weak moments, and ensure the final impression is the one you want remembered. A strong ending can redeem a rocky middle.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'psychology', 'structure']
  },
  {
    id: 'fc-comm-021',
    front: "What percentage of communication is nonverbal according to Albert Mehrabian's research, and when does this apply?",
    back: "Mehrabian found 55% body language, 38% tone, 7% words - but this only applies when there's inconsistency between verbal and nonverbal cues, particularly regarding feelings and attitudes. When discussing factual information, words carry more weight. The key insight: when channels conflict, people trust nonverbal cues.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'body-language', 'nonverbal']
  },
  {
    id: 'fc-comm-022',
    front: 'What is "mirroring" in communication and why does it build rapport?',
    back: "Mirroring is subtly matching another person's body language, speech patterns, or gestures. It activates mirror neurons and signals similarity, which humans instinctively trust. Effective mirroring: match posture and energy level, reflect key phrases, align breathing pace. Must be subtle - obvious mimicry feels mocking.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'rapport', 'body-language']
  },
  {
    id: 'fc-comm-023',
    front: 'How does voice pitch affect perceived authority and credibility?',
    back: 'Lower pitch is associated with authority, competence, and confidence across cultures. Research shows lower-voiced leaders are perceived as more dominant and trustworthy. To deepen voice: breathe from the diaphragm, relax the throat, speak slowly. Avoid "upspeak" (rising pitch at statement ends) as it signals uncertainty.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'voice', 'authority']
  },
  {
    id: 'fc-comm-024',
    front: 'What are the key components of active listening?',
    back: 'Active listening involves: 1) Full attention (eliminate distractions, face the speaker), 2) Nonverbal engagement (eye contact, nodding, open posture), 3) Verbal encouragers ("I see," "go on"), 4) Paraphrasing to confirm understanding, 5) Asking clarifying questions, 6) Withholding judgment, 7) Summarizing key points. It makes speakers feel heard and provides better information.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'listening', 'rapport']
  },
  {
    id: 'fc-comm-025',
    front: 'What is the significance of the "power pose" research by Amy Cuddy?',
    back: 'Cuddy found that adopting expansive postures ("power poses") for 2 minutes increased testosterone and decreased cortisol, affecting confidence and risk tolerance. While replication studies are mixed, the psychological principle holds: posture affects mood and self-perception. Standing tall and taking up space signals and creates confidence.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'body-language', 'confidence']
  },
  {
    id: 'fc-comm-026',
    front: 'How should speaking pace vary for maximum impact?',
    back: 'Varying pace creates engagement and emphasis. Speak faster for: excitement, urgency, less important information. Slow down for: key points, complex ideas, emotional moments, conclusions. Pauses are powerful - they create anticipation, allow processing, and signal importance. A monotonous pace, fast or slow, loses attention.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'voice', 'pacing']
  },
  {
    id: 'fc-comm-027',
    front: 'What does eye contact signal and what is the optimal amount?',
    back: 'Eye contact signals attention, confidence, honesty, and connection. Too little suggests discomfort, deception, or disinterest; too much feels aggressive or intimidating. Optimal: 60-70% of conversation time, in 3-5 second intervals. In groups, distribute eye contact to include everyone. Cultural norms vary significantly.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'body-language', 'eye-contact']
  },
  {
    id: 'fc-comm-028',
    front: 'What is "paralanguage" and what elements does it include?',
    back: 'Paralanguage refers to vocal cues beyond words: tone, pitch, volume, pace, rhythm, pauses, sighs, and vocal fillers. These convey emotion, emphasis, and sincerity. "That\'s fine" can mean opposite things depending on paralanguage. Master communicators align paralanguage with message to ensure congruence and authenticity.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'voice', 'paralanguage']
  },
  {
    id: 'fc-comm-029',
    front: 'What hand gestures enhance communication credibility?',
    back: 'Visible, open palms signal honesty and openness. Steepling (fingertips touching) projects confidence. Illustrative gestures that match speech content enhance comprehension by 60%. Avoid: pointing (aggressive), hands in pockets (disengaged), crossed arms (defensive), excessive gesturing (distracting), touching face (potentially deceptive).',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'body-language', 'gestures']
  },
  {
    id: 'fc-comm-030',
    front: 'What is the "empathic listening" technique and when should it be used?',
    back: "Empathic listening focuses on understanding the speaker's emotions and perspective, not just content. Techniques: reflect feelings (\"That sounds frustrating\"), validate emotions, avoid problem-solving immediately, ask about experiences not just facts. Use when: someone is upset, building deep relationships, understanding motivations, or when someone feels unheard.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['communication', 'listening', 'empathy']
  },
  {
    id: 'fc-comm-031',
    front: 'What is the "inverted pyramid" structure for effective written communication?',
    back: 'The inverted pyramid places the most important information first, followed by supporting details, then background. Benefits: readers get the key message immediately, content can be trimmed from the bottom without losing core meaning, accommodates skimming behavior. Essential for emails, memos, and busy audiences.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'writing', 'structure']
  },
  {
    id: 'fc-comm-032',
    front: 'What makes an email subject line effective?',
    back: 'Effective subject lines are: specific (not "Update" but "Q3 Budget Approved"), action-oriented when needed ("[Action Required]"), front-loaded with key info (important words first), appropriately urgent, and under 50 characters for mobile. They set clear expectations and help recipients prioritize without opening.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'email', 'writing']
  },
  {
    id: 'fc-comm-033',
    front: 'What is the "BLUF" principle in professional communication?',
    back: 'BLUF stands for "Bottom Line Up Front" - state your conclusion, request, or key point in the first sentence. Military and business writing principle. Example: "I recommend approving the budget because..." vs "After extensive research considering many factors..." Respects reader time and ensures the main point isn\'t buried.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'writing', 'clarity']
  },
  {
    id: 'fc-comm-034',
    front: 'How should you structure a persuasive presentation according to communication research?',
    back: 'The proven structure: 1) Hook - capture attention with surprising fact, question, or story, 2) Problem - establish stakes and relevance, 3) Solution - your main message, 4) Evidence - support with data and examples, 5) Objections - acknowledge and address counterarguments, 6) Call to action - specific next step, 7) Memorable close - return to opening theme.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'presentations', 'structure']
  },
  {
    id: 'fc-comm-035',
    front: 'What is the "10-20-30 Rule" for presentations proposed by Guy Kawasaki?',
    back: 'Maximum 10 slides, maximum 20 minutes, minimum 30-point font. This forces focus on essential content, respects audience attention limits, ensures readability, and leaves time for discussion. The constraints eliminate clutter and verbose slides. Even if you have more time, these limits improve quality.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'presentations', 'design']
  },
  {
    id: 'fc-comm-036',
    front: 'What is the Flesch-Kincaid readability principle and why does it matter?',
    back: "Flesch-Kincaid measures text complexity based on sentence length and syllable count. Lower scores mean easier reading. Most newspapers aim for grade 7-8 level. Even sophisticated audiences prefer clear writing - it's processed faster and remembered better. Academic or \"smart-sounding\" writing often just creates barriers.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'writing', 'readability']
  },
  {
    id: 'fc-comm-037',
    front: 'How should bullet points be used effectively in presentations?',
    back: 'Use bullets for: scannable lists, parallel items, key takeaways. Rules: maximum 5-6 bullets per slide, consistent grammatical structure, start with action verbs, keep to one line each, reveal progressively if presenting. Avoid: complete sentences, sub-bullets within sub-bullets, reading bullets verbatim. Bullets are prompts, not scripts.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'beginner',
    tags: ['communication', 'presentations', 'design']
  },
  {
    id: 'fc-comm-038',
    front: 'What is "signposting" in presentations and why is it important?',
    back: 'Signposting uses verbal cues to guide audiences through your structure: "First... Second... Finally..." "Now let\'s turn to..." "The key point here is..." It helps audiences: follow along, recognize important points, understand relationships between ideas, and stay oriented. Especially critical for complex or lengthy presentations.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'presentations', 'structure']
  },
  {
    id: 'fc-comm-039',
    front: 'What is the "primacy-recency effect" and how should it influence message ordering?',
    back: "People remember the first (primacy) and last (recency) items in a sequence best, with the middle forgotten. Implications: put critical information at the beginning and end, don't bury key messages in the middle, summarize at the close to reinforce opening points. For lists, position most important items first and last.",
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'intermediate',
    tags: ['communication', 'psychology', 'structure']
  },
  {
    id: 'fc-comm-040',
    front: 'What is the "Minto Pyramid Principle" for structuring business communication?',
    back: 'Barbara Minto\'s principle: start with the answer/recommendation, then group supporting arguments logically, then provide details. Vertically: each level answers "why?" about the level above. Horizontally: ideas at same level are MECE (Mutually Exclusive, Collectively Exhaustive). This creates clear, logical, persuasive documents that busy executives can skim.',
    category: 'Negotiation',
    source: 'Words That Work / Communication Science',
    pathwayId: 'negotiation',
    difficulty: 'advanced',
    tags: ['communication', 'writing', 'business-communication']
  }
];

// ============================================
// DEFI (Decentralized Finance) - 40 flashcards
// ============================================
export const defiFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-defi-001',
    front: 'What is DeFi (Decentralized Finance)?',
    back: 'DeFi is a financial ecosystem built on blockchain networks that operates without traditional intermediaries like banks. It uses smart contracts to provide financial services including lending, borrowing, trading, and earning interest in a permissionless, transparent, and accessible manner.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'fundamentals']
  },
  {
    id: 'fc-defi-002',
    front: 'What are the key characteristics that distinguish DeFi from traditional finance?',
    back: 'Key DeFi characteristics include: 1) Permissionless - anyone can participate without approval, 2) Trustless - smart contracts execute automatically without intermediaries, 3) Transparent - all transactions are publicly verifiable on-chain, 4) Non-custodial - users maintain control of their assets, 5) Composable - protocols can be combined like building blocks.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'fundamentals']
  },
  {
    id: 'fc-defi-003',
    front: 'What is a DEX (Decentralized Exchange) and how does it differ from a CEX?',
    back: 'A DEX is an exchange that operates via smart contracts without a central authority. Unlike CEXs (Centralized Exchanges) like Coinbase or Binance: DEXs are non-custodial (you keep your keys), permissionless (no KYC required), transparent (on-chain trades), but may have less liquidity and slower execution. CEXs offer better UX and liquidity but require trust in the operator.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'dex', 'exchanges']
  },
  {
    id: 'fc-defi-004',
    front: 'What is an AMM (Automated Market Maker)?',
    back: 'An AMM is a smart contract protocol that enables decentralized trading without traditional order books. Instead of matching buyers and sellers, AMMs use liquidity pools and mathematical formulas (like x*y=k) to determine asset prices. Users trade against the pool rather than other users, and liquidity providers earn fees for supplying assets.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'amm', 'dex']
  },
  {
    id: 'fc-defi-005',
    front: 'What is a liquidity pool in DeFi?',
    back: 'A liquidity pool is a smart contract containing reserves of two or more tokens that enables trading on a DEX. Liquidity providers (LPs) deposit token pairs in equal value ratios and receive LP tokens representing their share. The pool facilitates trades and collects fees distributed to LPs proportionally.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'liquidity', 'amm']
  },
  {
    id: 'fc-defi-006',
    front: 'How does the constant product formula (x*y=k) work in AMMs?',
    back: 'The constant product formula maintains that the product of token reserves must remain constant after trades. If a pool has 100 ETH (x) and 100,000 USDC (y), k=10,000,000. When someone buys ETH, they add USDC and remove ETH, but x*y must still equal k. This creates a price curve where larger trades cause more slippage.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'amm', 'mathematics']
  },
  {
    id: 'fc-defi-007',
    front: 'Name three popular DEX protocols and their primary blockchain.',
    back: '1) Uniswap - Ethereum (pioneered the AMM model, now multichain), 2) PancakeSwap - BNB Chain (Uniswap fork with lower fees), 3) Curve Finance - Ethereum (optimized for stablecoin and similar-asset swaps with minimal slippage). Other notable DEXs include SushiSwap, dYdX, and Jupiter (Solana).',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'dex', 'protocols']
  },
  {
    id: 'fc-defi-008',
    front: 'What is slippage in DeFi trading?',
    back: 'Slippage is the difference between the expected price of a trade and the actual execution price. In AMMs, slippage occurs because each trade changes the pool ratio. Larger trades relative to pool size cause more slippage. Users typically set a slippage tolerance (e.g., 0.5-1%) to prevent trades from executing at unfavorable prices.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'trading', 'amm']
  },
  {
    id: 'fc-defi-009',
    front: 'What is TVL (Total Value Locked) and why is it important?',
    back: 'TVL represents the total USD value of crypto assets deposited in a DeFi protocol or across the DeFi ecosystem. It serves as a key metric indicating protocol adoption, user trust, and available liquidity. Higher TVL generally suggests more liquidity for trading and lending, but should be evaluated alongside other metrics like user count and revenue.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'metrics', 'tvl']
  },
  {
    id: 'fc-defi-010',
    front: 'What role do arbitrageurs play in DeFi?',
    back: 'Arbitrageurs maintain price consistency across markets by exploiting price differences for profit. If ETH is $2000 on Uniswap but $2010 on SushiSwap, arbitrageurs buy on Uniswap and sell on SushiSwap. This activity equalizes prices across DEXs and helps AMM prices track external market prices, benefiting the ecosystem with accurate pricing.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'arbitrage', 'trading']
  },
  {
    id: 'fc-defi-011',
    front: 'What is yield farming in DeFi?',
    back: 'Yield farming is a strategy of maximizing returns by moving crypto assets between DeFi protocols to earn the highest yields. Farmers provide liquidity, stake tokens, or lend assets to earn rewards in the form of trading fees, interest, and governance token incentives. Strategies range from simple staking to complex multi-protocol positions.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'yield-farming', 'strategies']
  },
  {
    id: 'fc-defi-012',
    front: 'How do DeFi lending protocols like Aave and Compound work?',
    back: 'Lending protocols enable permissionless borrowing and lending through liquidity pools. Lenders deposit assets into pools and earn variable interest based on utilization. Borrowers provide collateral (typically 150%+ of loan value) to borrow assets. Interest rates are algorithmically determined by supply/demand. If collateral value drops below threshold, positions are liquidated.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'lending', 'aave', 'compound']
  },
  {
    id: 'fc-defi-013',
    front: 'What is overcollateralization and why is it required in DeFi lending?',
    back: 'Overcollateralization requires borrowers to deposit collateral worth more than their loan (e.g., $150 collateral for $100 loan). This protects lenders against default risk since there are no credit checks in DeFi. The excess collateral buffer absorbs price volatility, and if ratios fall below minimum thresholds, positions are liquidated to repay lenders.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'lending', 'collateral']
  },
  {
    id: 'fc-defi-014',
    front: 'What are the main types of stablecoins in DeFi?',
    back: '1) Fiat-collateralized: Backed 1:1 by USD reserves (USDC, USDT), 2) Crypto-collateralized: Backed by overcollateralized crypto (DAI backed by ETH), 3) Algorithmic: Maintain peg through supply/demand mechanisms (FRAX partially), 4) Commodity-backed: Backed by gold or other assets (PAXG). Each has different trust assumptions and risk profiles.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'stablecoins']
  },
  {
    id: 'fc-defi-015',
    front: 'What is impermanent loss and when does it occur?',
    back: 'Impermanent loss is the opportunity cost of providing liquidity to an AMM compared to simply holding the assets. It occurs when the price ratio of deposited tokens changes from the time of deposit. The greater the divergence, the greater the loss. Called "impermanent" because it only realizes upon withdrawal; if prices return to original ratio, the loss disappears.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'impermanent-loss', 'amm', 'liquidity']
  },
  {
    id: 'fc-defi-016',
    front: 'Calculate the impermanent loss when one asset doubles in price relative to another.',
    back: 'When one asset doubles in price (2x), impermanent loss is approximately 5.7%. Example: Deposit 1 ETH + 1000 USDC. If ETH doubles to $2000: Pool rebalances to ~0.707 ETH + 1414 USDC (worth $2828). Holding would be 1 ETH + 1000 USDC (worth $3000). IL = (3000-2828)/3000 = 5.7%. At 5x price change, IL reaches ~25%.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'impermanent-loss', 'calculations']
  },
  {
    id: 'fc-defi-017',
    front: 'What is liquidity mining and how does it incentivize participation?',
    back: 'Liquidity mining rewards users with protocol governance tokens for providing liquidity or using a protocol. These token rewards supplement trading fee income, making participation more attractive especially for new protocols needing to bootstrap liquidity. Critics note it can lead to "mercenary capital" that leaves when rewards decrease.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'liquidity-mining', 'incentives']
  },
  {
    id: 'fc-defi-018',
    front: 'What is APY vs APR in DeFi yields?',
    back: 'APR (Annual Percentage Rate) is the simple annual interest rate without compounding. APY (Annual Percentage Yield) includes compound interest effects. Example: 10% APR compounded daily = ~10.52% APY. DeFi protocols often display APY which appears higher. Always verify compounding frequency and whether advertised rates are sustainable or include temporary incentives.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'yield', 'apr', 'apy']
  },
  {
    id: 'fc-defi-019',
    front: 'What are yield aggregators and how do they work?',
    back: 'Yield aggregators are protocols that automatically optimize yield farming strategies across multiple DeFi protocols. Examples include Yearn Finance and Beefy. They pool user funds, auto-compound rewards, and shift strategies to maximize returns while reducing gas costs per user. Users deposit assets and receive vault tokens representing their share.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'yield-aggregator', 'yearn']
  },
  {
    id: 'fc-defi-020',
    front: 'What is a liquidation in DeFi lending and how does it work?',
    back: "Liquidation occurs when a borrower's collateral value falls below the required ratio (e.g., 150%). Liquidators repay part of the debt and receive the collateral at a discount (liquidation bonus of 5-15%). This incentivizes rapid liquidation to protect lenders. Borrowers lose collateral and may face penalties. Health factor below 1 triggers liquidation risk.",
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'lending', 'liquidation']
  },
  {
    id: 'fc-defi-021',
    front: 'What is a flash loan and how is it possible?',
    back: 'A flash loan is an uncollateralized loan that must be borrowed and repaid within a single blockchain transaction. If not repaid, the entire transaction reverts as if it never happened, eliminating lender risk. Enabled by blockchain atomicity - either all steps execute or none do. Used for arbitrage, collateral swaps, and self-liquidation.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'flash-loans', 'advanced']
  },
  {
    id: 'fc-defi-022',
    front: 'What are legitimate use cases for flash loans?',
    back: '1) Arbitrage across DEXs without capital, 2) Collateral swaps - change loan collateral in one tx, 3) Self-liquidation - avoid liquidation penalties, 4) Yield strategy optimization - rebalance positions efficiently, 5) One-click leverage/deleverage. Flash loans democratize access to capital-intensive strategies previously available only to well-funded traders.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'flash-loans', 'use-cases']
  },
  {
    id: 'fc-defi-023',
    front: 'What is a governance token and what rights does it provide?',
    back: 'Governance tokens grant holders voting rights on protocol decisions including parameter changes, treasury allocation, and protocol upgrades. Examples include UNI (Uniswap), AAVE, and COMP. Voting power is typically proportional to token holdings. Some protocols require token locking (veToken model) for voting rights, aligning long-term incentives.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'governance', 'tokens']
  },
  {
    id: 'fc-defi-024',
    front: 'What is a DAO (Decentralized Autonomous Organization)?',
    back: 'A DAO is an organization governed by smart contracts and token holder votes rather than traditional management hierarchies. Members propose and vote on decisions using governance tokens. Treasury funds are controlled by smart contracts and released based on passed proposals. DAOs manage DeFi protocols, investment funds, and community projects.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'dao', 'governance']
  },
  {
    id: 'fc-defi-025',
    front: 'What is the veToken model used in protocols like Curve?',
    back: "The veToken (vote-escrowed token) model requires locking tokens for extended periods to gain voting power. Curve's veCRV pioneered this: lock CRV for up to 4 years to receive veCRV. Longer locks = more voting power and reward boosts. This aligns holders with long-term protocol health and reduces circulating supply. Popularized \"Curve Wars\" for gauge weight control.",
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'tokenomics', 'curve', 'governance']
  },
  {
    id: 'fc-defi-026',
    front: 'What are the key components of DeFi tokenomics?',
    back: 'Key tokenomics elements: 1) Total/circulating supply and emission schedule, 2) Distribution (team, investors, community, treasury), 3) Vesting periods for insider tokens, 4) Utility (governance, staking, fee sharing), 5) Burn mechanisms, 6) Inflation/deflation dynamics. Well-designed tokenomics align incentives and create sustainable value accrual.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'tokenomics']
  },
  {
    id: 'fc-defi-027',
    front: 'What is protocol-owned liquidity (POL) and why is it significant?',
    back: "Protocol-owned liquidity means the protocol itself owns liquidity pool positions rather than renting it from LPs via emissions. Pioneered by Olympus DAO's bonding mechanism, POL provides stable, permanent liquidity and generates trading fee revenue for the treasury. It addresses the mercenary capital problem where LPs leave when incentives decrease.",
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'liquidity', 'tokenomics', 'olympus']
  },
  {
    id: 'fc-defi-028',
    front: 'What is DeFi composability (money legos)?',
    back: 'Composability refers to DeFi protocols being interoperable building blocks that can be combined. Like LEGO bricks, protocols can integrate with each other permissionlessly. Example: Deposit ETH into Lido for stETH, deposit stETH into Aave as collateral, borrow USDC, provide USDC to Curve pool. This creates complex strategies but also systemic risk.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'composability', 'architecture']
  },
  {
    id: 'fc-defi-029',
    front: 'What is a DEX aggregator and why use one?',
    back: 'DEX aggregators like 1inch, Paraswap, and Jupiter route trades across multiple DEXs to find optimal execution. They split orders across venues, finding the best prices and minimizing slippage. Benefits include better rates than any single DEX, simplified UX, and gas optimization. They earn through positive slippage or small fees.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'dex', 'aggregator', 'trading']
  },
  {
    id: 'fc-defi-030',
    front: 'What are synthetic assets in DeFi?',
    back: 'Synthetic assets are tokenized derivatives that track the price of real-world or crypto assets without requiring ownership of the underlying. Platforms like Synthetix create synths for stocks, commodities, forex. They use overcollateralized debt positions and oracles for price feeds. Enables 24/7 trading of traditional assets and exposure without custody complications.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'synthetics', 'derivatives']
  },
  {
    id: 'fc-defi-031',
    front: 'What are the main categories of DeFi risks?',
    back: '1) Smart contract risk - bugs or vulnerabilities, 2) Economic/design risk - flawed incentives or attack vectors, 3) Oracle risk - price feed manipulation, 4) Governance risk - malicious proposals, 5) Regulatory risk - legal uncertainty, 6) Systemic risk - cascading failures across composable protocols, 7) Counterparty risk - centralized dependencies.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'risk', 'security']
  },
  {
    id: 'fc-defi-032',
    front: 'What is a smart contract audit and what are its limitations?',
    back: "A smart contract audit is a professional security review examining code for vulnerabilities, logic errors, and best practices violations. Reputable auditors include Trail of Bits, OpenZeppelin, and Consensys Diligence. Limitations: Audits are point-in-time snapshots, can't guarantee security, may miss novel attack vectors, and don't cover economic exploits. Multiple audits are better.",
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'security', 'audits']
  },
  {
    id: 'fc-defi-033',
    front: 'What is a rug pull and how can you identify potential rug pull risks?',
    back: 'A rug pull is when developers abandon a project and steal user funds. Warning signs: Anonymous team, unaudited contracts, admin keys that can drain funds, locked liquidity with short timeframes, unrealistic APY promises, copied code without modifications, aggressive marketing over substance, and no clear utility. DYOR includes checking token contract permissions.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'scams', 'rug-pull', 'security']
  },
  {
    id: 'fc-defi-034',
    front: 'What is an oracle attack and how do protocols mitigate this risk?',
    back: 'Oracle attacks manipulate price feeds to exploit DeFi protocols. Flash loan attacks often manipulate DEX spot prices used as oracles. Mitigations include: Using decentralized oracles like Chainlink, TWAP (time-weighted average prices), multiple oracle sources, circuit breakers for extreme price movements, and avoiding easily manipulated on-chain price sources.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'oracles', 'security', 'attacks']
  },
  {
    id: 'fc-defi-035',
    front: 'What due diligence steps should you take before using a DeFi protocol?',
    back: '1) Check audit reports and their scope/age, 2) Research team credibility and track record, 3) Review TVL history and user growth, 4) Examine tokenomics and insider allocations, 5) Read documentation and understand mechanics, 6) Check community sentiment and developer activity, 7) Verify contract addresses from official sources, 8) Start with small amounts.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'due-diligence', 'security']
  },
  {
    id: 'fc-defi-036',
    front: 'What is MEV (Maximal Extractable Value) and how does it affect DeFi users?',
    back: 'MEV is profit extractable by block producers through transaction ordering, insertion, or censorship. Examples include frontrunning (trading before your large order), sandwich attacks (frontrun + backrun), and liquidation sniping. MEV costs users through worse execution prices. Mitigation includes private mempools (Flashbots), MEV-aware DEXs, and intent-based trading systems.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'mev', 'security']
  },
  {
    id: 'fc-defi-037',
    front: 'What is infinite approval risk and how to manage it?',
    back: 'When interacting with DeFi, you often approve contracts to spend unlimited tokens for convenience. If that contract is compromised, attackers can drain all approved tokens. Mitigations: Use exact approval amounts, regularly revoke unused approvals via tools like Revoke.cash, use separate wallets for different risk levels, and verify contract addresses before approving.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['defi', 'crypto', 'security', 'approvals']
  },
  {
    id: 'fc-defi-038',
    front: 'What is a governance attack and how can protocols defend against it?',
    back: 'Governance attacks involve acquiring enough voting power to pass malicious proposals (draining treasury, changing parameters). Notable example: Beanstalk flash loan governance attack. Defenses include: Timelock delays on execution, voting escrow requirements, quorum thresholds, guardian/veto mechanisms, flash loan prevention for voting, and gradual execution of large changes.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'governance', 'security', 'attacks']
  },
  {
    id: 'fc-defi-039',
    front: 'What is a bridge exploit and why are bridges high-risk?',
    back: 'Bridges connect different blockchains, locking assets on one chain and minting wrapped versions on another. They\'re high-risk targets because they hold large TVL in smart contracts. Attacks have exploited multisig vulnerabilities, validator compromises, and code bugs. Notable exploits: Ronin ($625M), Wormhole ($320M), Nomad ($190M). Use bridges cautiously and prefer canonical/official bridges.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['defi', 'crypto', 'bridges', 'security', 'cross-chain']
  },
  {
    id: 'fc-defi-040',
    front: 'What are best practices for DeFi wallet security?',
    back: '1) Use hardware wallets for significant holdings, 2) Maintain separate hot wallets for DeFi with limited funds, 3) Never share seed phrases or private keys, 4) Verify transaction details before signing, 5) Use official links only (bookmark sites), 6) Be wary of token approvals, 7) Test with small transactions first, 8) Enable available security features, 9) Keep software updated.',
    category: 'Blockchain',
    source: 'DeFi Guides',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['defi', 'crypto', 'security', 'wallets', 'best-practices']
  }
];

// ============================================
// STATISTICS FOR DATA SCIENCE - 40 flashcards
// ============================================
export const statisticsFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-stats-001',
    front: 'What is the arithmetic mean and how is it calculated?',
    back: 'The arithmetic mean is the sum of all values divided by the number of values.\n\nFormula: \u03bc = (\u03a3x\u1d62) / n\n\nExample: For [2, 4, 6, 8], mean = (2+4+6+8)/4 = 5',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'mean', 'central-tendency']
  },
  {
    id: 'fc-stats-002',
    front: 'What is the median and when is it preferred over the mean?',
    back: 'The median is the middle value when data is sorted in order.\n\nFor odd n: middle value\nFor even n: average of two middle values\n\nPreferred when data has outliers or is skewed, as it is resistant to extreme values.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'median', 'central-tendency']
  },
  {
    id: 'fc-stats-003',
    front: 'What is the mode and can a dataset have multiple modes?',
    back: 'The mode is the most frequently occurring value in a dataset.\n\nYes, a dataset can have:\n- No mode (all values unique)\n- One mode (unimodal)\n- Two modes (bimodal)\n- Multiple modes (multimodal)',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'mode', 'central-tendency']
  },
  {
    id: 'fc-stats-004',
    front: 'What is variance and what does it measure?',
    back: 'Variance measures the average squared deviation from the mean, indicating how spread out data is.\n\nPopulation variance: \u03c3\u00b2 = \u03a3(x\u1d62 - \u03bc)\u00b2 / N\nSample variance: s\u00b2 = \u03a3(x\u1d62 - x\u0304)\u00b2 / (n-1)\n\nHigher variance = more spread out data',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'variance', 'dispersion']
  },
  {
    id: 'fc-stats-005',
    front: 'What is standard deviation and how does it relate to variance?',
    back: 'Standard deviation is the square root of variance, measuring spread in the same units as the data.\n\n\u03c3 = \u221a(variance)\n\nAdvantage over variance: interpretable in original units\nExample: If variance is 16 square meters, SD is 4 meters',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'standard-deviation', 'dispersion']
  },
  {
    id: 'fc-stats-006',
    front: 'Why do we use (n-1) instead of n when calculating sample variance?',
    back: "We use (n-1) for Bessel's correction to get an unbiased estimate of population variance.\n\nReason: Sample mean is calculated from the same data, reducing degrees of freedom by 1.\n\nUsing n would systematically underestimate population variance.",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'variance', 'degrees-of-freedom']
  },
  {
    id: 'fc-stats-007',
    front: 'What is the relationship between mean, median, and mode in a skewed distribution?',
    back: 'In a right-skewed (positive) distribution:\nMode < Median < Mean\n\nIn a left-skewed (negative) distribution:\nMean < Median < Mode\n\nIn a symmetric distribution:\nMean = Median = Mode',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'skewness', 'central-tendency']
  },
  {
    id: 'fc-stats-008',
    front: 'What is the coefficient of variation (CV) and when is it useful?',
    back: 'CV is the ratio of standard deviation to mean, expressed as a percentage.\n\nCV = (\u03c3 / \u03bc) \u00d7 100%\n\nUseful for comparing variability between datasets with different units or vastly different means.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'coefficient-of-variation', 'dispersion']
  },
  {
    id: 'fc-stats-009',
    front: 'What are the five-number summary statistics?',
    back: 'The five-number summary consists of:\n1. Minimum\n2. First Quartile (Q1, 25th percentile)\n3. Median (Q2, 50th percentile)\n4. Third Quartile (Q3, 75th percentile)\n5. Maximum\n\nUsed to create box plots and identify outliers.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'quartiles', 'descriptive-statistics']
  },
  {
    id: 'fc-stats-010',
    front: 'How is the Interquartile Range (IQR) calculated and what is the outlier rule?',
    back: 'IQR = Q3 - Q1 (range of middle 50% of data)\n\nOutlier detection rule:\n- Lower bound: Q1 - 1.5 \u00d7 IQR\n- Upper bound: Q3 + 1.5 \u00d7 IQR\n\nValues outside these bounds are potential outliers.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'iqr', 'outliers']
  },
  {
    id: 'fc-stats-011',
    front: 'What are the key properties of the normal (Gaussian) distribution?',
    back: 'Properties of normal distribution:\n- Bell-shaped and symmetric around mean\n- Mean = Median = Mode\n- Defined by \u03bc (mean) and \u03c3 (standard deviation)\n- Total area under curve = 1\n- 68-95-99.7 rule applies\n\nPDF: f(x) = (1/(\u03c3\u221a2\u03c0)) \u00d7 e^(-(x-\u03bc)\u00b2/2\u03c3\u00b2)',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'normal-distribution', 'probability']
  },
  {
    id: 'fc-stats-012',
    front: 'What is the 68-95-99.7 (Empirical) Rule?',
    back: 'For a normal distribution:\n- 68% of data falls within 1 standard deviation of mean (\u03bc \u00b1 \u03c3)\n- 95% of data falls within 2 standard deviations (\u03bc \u00b1 2\u03c3)\n- 99.7% of data falls within 3 standard deviations (\u03bc \u00b1 3\u03c3)',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'normal-distribution', 'empirical-rule']
  },
  {
    id: 'fc-stats-013',
    front: 'What is a Z-score and how is it calculated?',
    back: 'Z-score measures how many standard deviations a value is from the mean.\n\nFormula: z = (x - \u03bc) / \u03c3\n\nInterpretation:\n- z = 0: value equals mean\n- z > 0: value above mean\n- z < 0: value below mean\n- |z| > 2: potentially unusual',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'z-score', 'standardization']
  },
  {
    id: 'fc-stats-014',
    front: 'What is the difference between correlation and causation?',
    back: 'Correlation: Statistical relationship between two variables (they move together)\n\nCausation: One variable directly causes change in another\n\nCorrelation \u2260 Causation!\n\nEstablishing causation requires:\n- Temporal precedence\n- Controlled experiments\n- Ruling out confounding variables',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'correlation', 'causation']
  },
  {
    id: 'fc-stats-015',
    front: "What is Pearson correlation coefficient and what do its values mean?",
    back: "Pearson's r measures linear relationship between two continuous variables.\n\nFormula: r = \u03a3(x\u1d62-x\u0304)(y\u1d62-\u0233) / \u221a[\u03a3(x\u1d62-x\u0304)\u00b2\u03a3(y\u1d62-\u0233)\u00b2]\n\nRange: -1 to +1\n- r = 1: perfect positive correlation\n- r = 0: no linear correlation\n- r = -1: perfect negative correlation",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'correlation', 'pearson']
  },
  {
    id: 'fc-stats-016',
    front: 'What is simple linear regression and what is the equation of the line?',
    back: 'Simple linear regression models the relationship between one independent (X) and one dependent (Y) variable.\n\nEquation: \u0177 = \u03b2\u2080 + \u03b2\u2081x\n\nWhere:\n- \u03b2\u2080 = y-intercept\n- \u03b2\u2081 = slope (change in Y per unit change in X)\n- \u0177 = predicted value',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'regression', 'linear-regression']
  },
  {
    id: 'fc-stats-017',
    front: 'What is R-squared (R\u00b2) and how do you interpret it?',
    back: 'R\u00b2 (coefficient of determination) measures the proportion of variance in Y explained by the model.\n\nFormula: R\u00b2 = 1 - (SS_residual / SS_total)\n\nRange: 0 to 1\n- R\u00b2 = 0: model explains none of the variance\n- R\u00b2 = 1: model explains all variance\n- R\u00b2 = 0.75: model explains 75% of variance',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'regression', 'r-squared']
  },
  {
    id: 'fc-stats-018',
    front: 'What are the basic rules of probability?',
    back: "Probability rules:\n\n1. P(A) is between 0 and 1\n2. P(sample space) = 1\n3. Complement: P(A') = 1 - P(A)\n4. Addition: P(A \u222a B) = P(A) + P(B) - P(A \u2229 B)\n5. For mutually exclusive: P(A \u222a B) = P(A) + P(B)\n6. Multiplication: P(A \u2229 B) = P(A) \u00d7 P(B|A)",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'probability', 'probability-rules']
  },
  {
    id: 'fc-stats-019',
    front: 'What is conditional probability?',
    back: 'Conditional probability is the probability of event A occurring given that event B has occurred.\n\nFormula: P(A|B) = P(A \u2229 B) / P(B)\n\nRead as: "probability of A given B"\n\nExample: P(rain | cloudy) = probability of rain given it\'s cloudy',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'probability', 'conditional-probability']
  },
  {
    id: 'fc-stats-020',
    front: 'What is the Central Limit Theorem and why is it important?',
    back: "The Central Limit Theorem states that the sampling distribution of the mean approaches a normal distribution as sample size increases, regardless of the population distribution.\n\nKey points:\n- Works for n \u2265 30 typically\n- Mean of sampling distribution = population mean\n- SE = \u03c3/\u221an\n\nImportance: Enables inference even when population isn't normal",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'central-limit-theorem', 'sampling']
  },
  {
    id: 'fc-stats-021',
    front: 'What is a null hypothesis (H\u2080) and alternative hypothesis (H\u2081)?',
    back: "Null hypothesis (H\u2080): The default assumption of no effect, no difference, or no relationship. What we try to disprove.\n\nAlternative hypothesis (H\u2081 or H\u2090): The claim we're testing for, suggesting there IS an effect or difference.\n\nExample:\nH\u2080: \u03bc = 50 (no change)\nH\u2081: \u03bc \u2260 50 (there is change)",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'hypothesis-testing', 'null-hypothesis']
  },
  {
    id: 'fc-stats-022',
    front: 'What is a p-value and how do you interpret it?',
    back: 'P-value: The probability of obtaining results at least as extreme as observed, assuming the null hypothesis is true.\n\nInterpretation:\n- Small p-value (< \u03b1): Strong evidence against H\u2080, reject it\n- Large p-value (\u2265 \u03b1): Insufficient evidence to reject H\u2080\n\nCommon \u03b1 = 0.05\n\nP-value is NOT the probability that H\u2080 is true!',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'p-value', 'hypothesis-testing']
  },
  {
    id: 'fc-stats-023',
    front: 'What are Type I and Type II errors in hypothesis testing?',
    back: "Type I Error (False Positive):\n- Rejecting H\u2080 when it's actually true\n- Probability = \u03b1 (significance level)\n\nType II Error (False Negative):\n- Failing to reject H\u2080 when it's actually false\n- Probability = \u03b2\n\nPower = 1 - \u03b2 (probability of correctly rejecting false H\u2080)",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'type-i-error', 'type-ii-error', 'hypothesis-testing']
  },
  {
    id: 'fc-stats-024',
    front: 'What is a confidence interval and how do you interpret a 95% CI?',
    back: "A confidence interval is a range of values likely to contain the true population parameter.\n\n95% CI interpretation: If we repeated sampling many times, 95% of calculated intervals would contain the true parameter.\n\nFormula (for mean): x\u0304 \u00b1 z*(\u03c3/\u221an)\n\nWider CI = more uncertainty; larger n = narrower CI",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'confidence-interval', 'inference']
  },
  {
    id: 'fc-stats-025',
    front: 'What is the difference between a one-tailed and two-tailed test?',
    back: 'One-tailed test:\n- Tests for effect in ONE direction\n- H\u2081: \u03bc > \u03bc\u2080 OR \u03bc < \u03bc\u2080\n- More power to detect effect in that direction\n\nTwo-tailed test:\n- Tests for effect in EITHER direction\n- H\u2081: \u03bc \u2260 \u03bc\u2080\n- More conservative, commonly used\n\nUse one-tailed only with strong prior justification',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'hypothesis-testing', 'one-tailed', 'two-tailed']
  },
  {
    id: 'fc-stats-026',
    front: 'What is the standard error and how does it differ from standard deviation?',
    back: 'Standard Deviation (\u03c3 or s): Measures spread of individual observations in a sample/population.\n\nStandard Error (SE): Measures precision of a sample statistic (e.g., mean).\n\nSE of mean = \u03c3 / \u221an\n\nKey difference: SE decreases as sample size increases; SD does not.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'standard-error', 'sampling']
  },
  {
    id: 'fc-stats-027',
    front: 'What is sampling bias and what are common types?',
    back: "Sampling bias occurs when the sample doesn't represent the population.\n\nCommon types:\n- Selection bias: Non-random selection\n- Survivorship bias: Only \"survivors\" included\n- Response bias: Certain groups more likely to respond\n- Convenience sampling: Using easily available subjects\n\nSolution: Random sampling methods",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'sampling-bias', 'sampling']
  },
  {
    id: 'fc-stats-028',
    front: 'What is statistical power and how can it be increased?',
    back: 'Statistical power: Probability of correctly rejecting a false null hypothesis (detecting a true effect).\n\nPower = 1 - \u03b2 (where \u03b2 = Type II error rate)\n\nIncrease power by:\n- Increasing sample size (most common)\n- Increasing effect size\n- Increasing \u03b1 (less conservative)\n- Reducing measurement error\n- Using one-tailed test (if justified)',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'statistical-power', 'hypothesis-testing']
  },
  {
    id: 'fc-stats-029',
    front: 'What is the difference between stratified and cluster sampling?',
    back: 'Stratified Sampling:\n- Divide population into homogeneous strata\n- Sample from EACH stratum proportionally\n- Ensures representation of all groups\n\nCluster Sampling:\n- Divide population into heterogeneous clusters\n- Randomly select SOME clusters\n- Sample everyone within selected clusters\n- More practical for large geographic areas',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'sampling', 'stratified', 'cluster']
  },
  {
    id: 'fc-stats-030',
    front: 'What is the Law of Large Numbers?',
    back: 'The Law of Large Numbers states that as sample size increases, the sample mean converges to the population mean.\n\nTwo forms:\n- Weak LLN: Sample mean converges in probability\n- Strong LLN: Sample mean converges almost surely\n\nPractical meaning: Larger samples give more accurate estimates of population parameters.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'law-of-large-numbers', 'sampling']
  },
  {
    id: 'fc-stats-031',
    front: 'What is A/B testing and what are its key components?',
    back: 'A/B testing compares two versions (control A vs treatment B) to determine which performs better.\n\nKey components:\n1. Control group (A): Current version\n2. Treatment group (B): New version\n3. Random assignment of users\n4. Key metric (conversion, clicks, etc.)\n5. Statistical significance testing\n6. Sufficient sample size for power',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'ab-testing', 'experimentation']
  },
  {
    id: 'fc-stats-032',
    front: 'How do you calculate the minimum sample size for an A/B test?',
    back: 'Sample size per group formula:\nn = 2 \u00d7 [(Z\u03b1 + Z\u03b2)\u00b2 \u00d7 p(1-p)] / \u03b4\u00b2\n\nWhere:\n- Z\u03b1 = z-score for significance level (1.96 for \u03b1=0.05)\n- Z\u03b2 = z-score for power (0.84 for 80% power)\n- p = baseline conversion rate\n- \u03b4 = minimum detectable effect\n\nRule of thumb: Smaller effects need larger samples',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'ab-testing', 'sample-size']
  },
  {
    id: 'fc-stats-033',
    front: "What is Bayes' Theorem and what is its formula?",
    back: "Bayes' Theorem calculates conditional probability by updating prior beliefs with new evidence.\n\nFormula: P(A|B) = [P(B|A) \u00d7 P(A)] / P(B)\n\nComponents:\n- P(A|B): Posterior probability\n- P(A): Prior probability\n- P(B|A): Likelihood\n- P(B): Evidence (marginal likelihood)",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'bayes-theorem', 'probability']
  },
  {
    id: 'fc-stats-034',
    front: "Explain Bayes' Theorem with a medical testing example.",
    back: "Example: Disease affects 1% of population. Test is 90% accurate.\n\nIf you test positive, what's the probability you have the disease?\n\nP(Disease|Positive) = [P(Pos|Disease) \u00d7 P(Disease)] / P(Positive)\n= (0.90 \u00d7 0.01) / [(0.90 \u00d7 0.01) + (0.10 \u00d7 0.99)]\n= 0.009 / 0.108 \u2248 8.3%\n\nDespite 90% test accuracy, only ~8% chance of disease!",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'bayes-theorem', 'medical-statistics']
  },
  {
    id: 'fc-stats-035',
    front: "What is Simpson's Paradox?",
    back: "Simpson's Paradox: A trend in aggregated data reverses or disappears when data is separated into groups.\n\nExample: Treatment A may appear better overall, but Treatment B is better within EACH subgroup.\n\nCause: Confounding variable affects both group assignment and outcome.\n\nSolution: Analyze subgroups separately; identify confounders.",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'simpsons-paradox', 'fallacies']
  },
  {
    id: 'fc-stats-036',
    front: "What is the Gambler's Fallacy?",
    back: "Gambler's Fallacy: The mistaken belief that past random events affect future probabilities.\n\nExample: After 10 coin flips landing heads, believing tails is \"due\" - but each flip is still 50/50.\n\nReality: Independent events have no memory. Past outcomes don't change future probabilities.\n\nRelated: Hot hand fallacy (opposite belief)",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'beginner',
    tags: ['statistics', 'data-science', 'gamblers-fallacy', 'fallacies', 'probability']
  },
  {
    id: 'fc-stats-037',
    front: 'What is p-hacking and why is it problematic?',
    back: 'P-hacking: Manipulating data analysis to achieve statistically significant results (p < 0.05).\n\nCommon techniques:\n- Testing many hypotheses, reporting only significant ones\n- Stopping data collection when significance reached\n- Selectively removing outliers\n- Trying multiple statistical tests\n\nProblems: Inflates false positive rate, produces non-reproducible results.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'p-hacking', 'fallacies', 'research-ethics']
  },
  {
    id: 'fc-stats-038',
    front: 'What is the multiple comparisons problem and how is it addressed?',
    back: 'Multiple Comparisons Problem: When testing many hypotheses, chance of at least one false positive increases.\n\nWith \u03b1=0.05 and 20 tests:\nP(at least 1 false positive) = 1 - (0.95)\u00b2\u2070 \u2248 64%\n\nSolutions:\n- Bonferroni correction: \u03b1/n for each test\n- False Discovery Rate (FDR) control\n- Pre-registration of hypotheses',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'advanced',
    tags: ['statistics', 'data-science', 'multiple-comparisons', 'bonferroni']
  },
  {
    id: 'fc-stats-039',
    front: 'What is survivorship bias and give a famous example?',
    back: "Survivorship Bias: Drawing conclusions only from \"survivors\" while ignoring those that didn't survive the selection process.\n\nFamous example: WWII aircraft armor. Initially, engineers wanted to armor areas with bullet holes. Statistician Abraham Wald realized they should armor areas WITHOUT holes - planes hit there didn't return.\n\nIn data science: Analyzing only successful companies ignores failed ones.",
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'survivorship-bias', 'fallacies']
  },
  {
    id: 'fc-stats-040',
    front: 'What is regression to the mean and why does it occur?',
    back: 'Regression to the Mean: Extreme observations tend to be followed by more average ones.\n\nWhy it occurs:\n- Extreme values often include chance/luck component\n- Subsequent measurements reflect true average more closely\n\nExamples:\n- Extremely tall parents tend to have shorter children\n- Athletes after record-breaking seasons often decline\n\nMistake: Attributing regression to an intervention when none occurred.',
    category: 'Python & Data Science',
    source: 'Statistics for Data Science',
    pathwayId: 'python-data',
    difficulty: 'intermediate',
    tags: ['statistics', 'data-science', 'regression-to-mean', 'fallacies']
  }
];

// ============================================
// COMBINED EXPORT - All Batch 7 Flashcards
// ============================================
export const batch7Flashcards: SpacedRepetitionCard[] = [
  ...quantitativeTradingFlashcards,
  ...communicationFlashcards,
  ...defiFlashcards,
  ...statisticsFlashcards
];

export default batch7Flashcards;
