import type { SpacedRepetitionCard } from '@/types';

export const dataAnalysisFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-da-001',
    front: 'What is Exploratory Data Analysis (EDA)?',
    back: 'Analyze datasets; summarize characteristics via graphics & visualization. Discover patterns; spot anomalies; test hypotheses; check assumptions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'eda', 'statistics']
  },
  {
    id: 'fc-da-002',
    front: 'List the five-number summary statistics for a dataset.',
    back: 'Find: Minimum; Q1 (25th percentile); Median (50th percentile); Q3 (75th percentile); Maximum. Use for quick data distribution overview.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'statistics', 'descriptive-statistics']
  },
  {
    id: 'fc-da-003',
    front: 'Correlation vs. Causation: What\'s the difference?',
    back: 'Correlation measures statistical relationship; causation implies direct influence. Correlation doesn\'t equal causation; consider coincidence, confounders, reverse causation. ',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'correlation-causation']
  },
  {
    id: 'fc-da-004',
    front: 'Define p-value in hypothesis testing.',
    back: 'P-value: Probability of observed results if null hypothesis is true. Small p-value (e.g., < 0.05) suggests reject null hypothesis.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-005',
    front: 'How do you handle missing data?',
    back: 'Delete rows/cols; Impute with mean/median/mode/prediction; Forward/Backward fill; Multiple imputation; Flag & fill.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'missing-data']
  },
  {
    id: 'fc-da-006',
    front: 'Define A/B testing and when do you apply it?',
    back: 'Compare two versions (A/B) to see which performs best on a metric. Use to test changes on websites, campaigns, features, pricing.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'ab-testing', 'experimentation']
  },
  {
    id: 'fc-da-007',
    front: 'Define statistical significance & how you determine it in hypothesis testing.',
    back: 'Effect unlikely due to chance. Set alpha; Calculate test statistic & p-value; Reject null if p < alpha; Conclude significance.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'significance-testing']
  },
  {
    id: 'fc-da-008',
    front: 'What\'s cohort analysis?',
    back: 'Group users by shared traits/time; track behavior over time. Understand retention, lifetime value, and group differences.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'cohort-analysis', 'user-analytics']
  },
  {
    id: 'fc-da-009',
    front: 'What is funnel analysis?',
    back: 'Track users through key steps; measure conversion rates between steps.  Find bottlenecks; optimize user journeys to increase conversions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'funnel-analysis', 'conversion']
  },
  {
    id: 'fc-da-010',
    front: 'Effective data visualization: Key principles?',
    back: 'Know your audience; Choose right chart; Maximize data-ink; Use color; Label clearly; Tell story; Make accessible. ID: fc-da-010',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'best-practices', 'design']
  },
  {
    id: 'fc-da-011',
    front: 'Bar chart vs. line chart: When should you use each?',
    back: 'Bars: Compare categories/rankings. Use for categorical data. Lines: Show trends over time. Use for time series data.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'chart-types', 'best-practices']
  },
  {
    id: 'fc-da-012',
    front: 'Define Tufte\'s data-ink ratio in data visualization.',
    back: 'Maximize data-ink ratio; erase non-essential ink. Improve clarity; highlight information.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'design-principles', 'tufte']
  },
  {
    id: 'fc-da-013',
    front: 'Type I vs Type II error in hypothesis testing?',
    back: 'Type I: False Positive; Reject true null. Type II: False Negative; Fail to reject false null. Control Type I with alpha; Type II with Power.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-014',
    front: 'Define outlier detection and name common methods in data analysis.',
    back: 'Find data points differing greatly from others. Use IQR; Z-score; Modified Z-score; Isolation Forest; DBSCAN; Visual inspection.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'outliers']
  },
  {
    id: 'fc-da-015',
    front: 'Differentiate: descriptive, diagnostic, predictive, prescriptive analytics.',
    back: 'Descriptive: Report what happened. Diagnostic: Analyze why. Predictive: Forecast what will happen. Prescriptive: Recommend actions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'analytics-types', 'fundamentals']
  },
  {
    id: 'fc-da-016',
    front: 'A/B testing: How do you determine the necessary sample size?',
    back: 'Calculate using baseline conversion; MDE; power (80%); significance (5%). Ensure enough data for confident difference detection.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'ab-testing', 'sample-size']
  },
  {
    id: 'fc-da-017',
    front: 'Data storytelling: What are key guiding principles?',
    back: 'Understand audience & context; Choose visuals carefully; Remove clutter; Focus on insights; Design well; Craft a narrative (context, insight, action).',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'storytelling', 'communication']
  },
  {
    id: 'fc-da-018',
    front: 'What does a box plot visualize?',
    back: 'Display five-number summary; box shows IQR (Q1-Q3), median; whiskers show data range; points beyond are outliers.  Reveal distribution, skewness, and outliers.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'statistics', 'chart-types']
  },
  {
    id: 'fc-da-019',
    front: 'Define data normalization & when should you apply it?',
    back: 'Scale numeric features to standard range. Apply when scales differ; use distance-based algorithms/gradient descent; compare different units. Use Min-Max, Z-score; Decimal scaling.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'preprocessing']
  },
  {
    id: 'fc-da-020',
    front: 'fc-da-020: What is Simpson\'s Paradox?',
    back: 'Simpson\'s Paradox: Observe trends reverse when data groups combine; Analyze subgroups separately to avoid misinterpretations.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'paradoxes']
  },
  {
    id: 'fc-da-021',
    front: 'Dashboard design: Name best practices for effective visuals.',
    back: 'Define KPIs; Prioritize metrics top-left; Use consistent design; Add context; Enable drill-down; Reduce clutter; Know audience. fc-da-021',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'dashboard-design', 'best-practices']
  },
  {
    id: 'fc-da-022',
    front: 'What does the Pearson correlation coefficient measure?',
    back: 'Quantify the linear relationship between two variables; Values range from -1 to +1.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'statistics', 'correlation']
  },
  {
    id: 'fc-da-023',
    front: 'Population vs. Sample Statistics: What\'s the difference?',
    back: 'Population uses parameters (μ, σ); Sample uses statistics (x̄, s). Estimate population parameters from sample statistics. Larger samples improve estimates.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'statistics', 'sampling']
  },
  {
    id: 'fc-da-024',
    front: 'Heatmap: What is it, and when is it most useful?',
    back: 'Represent matrix values with color intensity. Use it for correlation, time patterns, geographic & confusion matrices, cohort tables.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'chart-types', 'heatmaps']
  },
  {
    id: 'fc-da-025',
    front: 'Explain the Central Limit Theorem (CLT) and its importance.',
    back: 'CLT: Sample means approach normal distribution as size increases. Crucial; use normal-based tests even with non-normal data; enable statistical inference.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'probability']
  },
  {
    id: 'fc-da-026',
    front: 'Define data binning. When is it useful?',
    back: 'Group continuous data into discrete bins. Use to reduce noise; handle outliers; create categorical features; simplify visualization; meet test assumptions; use equal-width, equal-frequency, or custom methods.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'preprocessing']
  },
  {
    id: 'fc-da-027',
    front: 'Differentiate nominal, ordinal, interval, and ratio data types.',
    back: 'Nominal: Categorize. Ordinal: Rank. Interval: Order/equal intervals. Ratio: Interval/true zero; Enable different stats; Example: colors;ratings;°C;height.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-types', 'statistics']
  },
  {
    id: 'fc-da-028',
    front: 'Define confidence interval & its interpretation (95% CI).',
    back: 'Estimate population parameter range. 95% CI: 95% of intervals from repeated samples contain true value; quantifies estimate uncertainty.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'inference']
  },
  {
    id: 'fc-da-029',
    front: 'Name common selection biases in data analysis.',
    back: 'Avoid survivorship bias (analyze failures too); address self-selection (account for volunteers); mitigate non-response bias (target underrepresented groups).',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'bias', 'sampling']
  },
  {
    id: 'fc-da-030',
    front: 'Scatter plot matrix: what is it, and when should you use it?',
    back: 'Visualize pairwise relationships between variables in a grid. Use for initial EDA; find correlations; detect clusters; identify outliers.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'eda', 'chart-types']
  },
  {
    id: 'fc-da-031',
    front: 'What does the Chi-Square test assess?',
    back: 'Examine relationships between categorical variables; Independence: are they related?; Goodness-of-fit: observed vs expected frequencies match?',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-032',
    front: 'Wide vs. Long Data Formats: What\'s the difference?',
    back: 'Wide: Variable per column, row per observation. Long: Variable names & values in columns; observations span rows. Analyze & visualize Long data.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-cleaning', 'data-formats']
  },
  {
    id: 'fc-da-033',
    front: 'Define statistical power and explain its importance.',
    back: 'Power: Probability to correctly reject a false null hypothesis.  Increase power (by increasing sample size, etc.) to reduce false negatives; aim for 80%.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-034',
    front: 'SQL Joins: What\'s the difference between LEFT, RIGHT, and INNER?',
    back: 'INNER: Get matching rows. LEFT: Get all from left, matching right. RIGHT: Get all from right, matching left; Handle missing data with nulls.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-cleaning', 'sql']
  },
  {
    id: 'fc-da-035',
    front: 'Leading vs. vanity metrics: What\'s the difference?',
    back: 'Leading metrics predict future success; act on these. Vanity metrics look good but don\'t drive decisions; ignore these.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'metrics', 'business-analytics']
  },
  {
    id: 'fc-da-036',
    front: 'T-test vs. Z-test: What\'s the key difference?',
    back: 'Use Z-test for known variance or large samples. Use T-test for unknown variance and small samples; T-distribution handles increased uncertainty.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-037',
    front: 'Multicollinearity: What is it and how does it impact regression analysis?',
    back: 'High IV correlation causes unstable coefficients & inflated errors. Detect: Correlation matrix, VIF > 5-10. Fix: Remove/combine variables; use regularization.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'regression']
  },
  {
    id: 'fc-da-038',
    front: 'Data visualization: What are key principles for effective color use?',
    back: 'Use sequential, diverging, or categorical palettes; consider colorblindness. Highlight data; limit colors (<7); be consistent; avoid decoration.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'color-theory', 'design']
  },
  {
    id: 'fc-da-039',
    front: 'ANOVA vs. t-test: How do they differ in group comparison?',
    back: 'T-test compares 2 group means; ANOVA compares 3+ group means. If ANOVA shows variance, use post-hoc tests to pinpoint differences.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-040',
    front: 'What is data profiling?',
    back: 'Analyze data structure, content, quality; Infer types; Analyze missing values; Check uniqueness; Find distributions/patterns/relationships. ID: fc-da-040',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-quality', 'eda']
  },
  {
    id: 'fc-da-041',
    front: 'Define the novelty effect in A/B testing.',
    back: 'New features inflate early metrics simply due to their novelty; not inherent improvement. Mitigate: Run tests longer; segment users by tenure; measure long-term behavior.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'ab-testing', 'experimentation']
  },
  {
    id: 'fc-da-042',
    front: 'Violin plot vs. box plot: What\'s the key difference?',
    back: 'Violin plots show distribution shape via kernel density; box plots show summary statistics only. Use violin plots to compare distributions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'chart-types', 'distributions']
  },
  {
    id: 'fc-da-043',
    front: 'Multiple Comparisons Problem: What happens with many statistical tests?',
    back: 'Increases Type I error probability.  Control false positives with Bonferroni (alpha/n); FDR; Holm-Bonferroni. fc-da-043',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-044',
    front: 'Primary vs. secondary chart axes: What\'s the difference?',
    back: 'Primary: Main metric. Secondary: Another metric, different scale. Use sparingly; clearly label; consider small multiples. ID: fc-da-044',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'chart-design', 'best-practices']
  },
  {
    id: 'fc-da-045',
    front: 'Parametric vs. non-parametric tests: What\'s the key difference?',
    back: 'Parametric: Assume distributions; use means; powerful. Non-parametric: No assumption; use ranks/medians; robust. (t-test vs Mann-Whitney; ANOVA vs Kruskal-Wallis)',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-046',
    front: 'Define segmentation analysis & its primary purpose.',
    back: 'Divide a population into groups by shared traits; Target marketing, personalize experiences, allocate resources better. Methods: RFM; Clustering; Trees.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'segmentation', 'business-analytics']
  },
  {
    id: 'fc-da-047',
    front: 'Define effect size and why it matters more than just p-values.',
    back: 'Quantify magnitude of effect, unlike p-values; it\'s sample-size independent. Examples: Cohen\'s d, Pearson\'s r. ID: fc-da-047',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'effect-size']
  },
  {
    id: 'fc-da-048',
    front: 'Waterfall Chart: What does it show & when should you use it?',
    back: 'Show cumulative effect of sequential positive & negative values. Use for financial statements; inventory, population, or budget changes.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'chart-types', 'financial-analysis']
  },
  {
    id: 'fc-da-049',
    front: 'Define data lineage and explain its importance.',
    back: 'Track data\'s origin, movement, transformations.  Essential for debugging; compliance; impact analysis; build data trust. ID: fc-da-049',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-governance', 'data-quality']
  },
  {
    id: 'fc-da-050',
    front: 'Batch vs. Real-time Analytics: Key difference?',
    back: 'Batch: Process scheduled data for reports. Real-time: Stream data for immediate action; fraud detection; monitoring. ',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-engineering', 'architecture']
  };
