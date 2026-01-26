import type { SpacedRepetitionCard } from '@/types';

export const dataAnalysisFlashcards: SpacedRepetitionCard[] = [
  {
    id: 'fc-da-001',
    front: 'What is Exploratory Data Analysis (EDA)?',
    back: 'EDA is an approach to analyzing datasets to summarize their main characteristics using statistical graphics and visualization methods. It helps discover patterns, spot anomalies, test hypotheses, and check assumptions before formal modeling.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'eda', 'statistics']
  },
  {
    id: 'fc-da-002',
    front: 'What are the five-number summary statistics?',
    back: 'The five-number summary consists of: (1) Minimum, (2) First Quartile (Q1/25th percentile), (3) Median (Q2/50th percentile), (4) Third Quartile (Q3/75th percentile), (5) Maximum. These statistics provide a quick overview of data distribution.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'statistics', 'descriptive-statistics']
  },
  {
    id: 'fc-da-003',
    front: 'What is the difference between correlation and causation?',
    back: 'Correlation measures the statistical relationship between two variables (how they move together). Causation means one variable directly causes changes in another. Correlation does not imply causation - two variables can be correlated due to coincidence, confounding variables, or reverse causation.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'correlation-causation']
  },
  {
    id: 'fc-da-004',
    front: 'What is a p-value in statistical testing?',
    back: 'A p-value is the probability of obtaining results at least as extreme as the observed results, assuming the null hypothesis is true. A small p-value (typically < 0.05) suggests the observed data is unlikely under the null hypothesis, leading to its rejection.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-005',
    front: 'What are the main techniques for handling missing data?',
    back: '1. Deletion: Remove rows/columns with missing values. 2. Imputation: Fill with mean, median, mode, or predicted values. 3. Forward/Backward Fill: Use adjacent values (time series). 4. Multiple Imputation: Create multiple complete datasets. 5. Flag and Fill: Create indicator variable and impute.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'missing-data']
  },
  {
    id: 'fc-da-006',
    front: 'What is A/B testing and when is it used?',
    back: 'A/B testing is a randomized controlled experiment comparing two versions (A and B) to determine which performs better on a specific metric. It is used to test website changes, marketing campaigns, product features, and pricing strategies while controlling for confounding variables.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'ab-testing', 'experimentation']
  },
  {
    id: 'fc-da-007',
    front: 'What is statistical significance and how is it determined?',
    back: 'Statistical significance indicates that an observed effect is unlikely due to random chance. It is determined by: 1. Setting a significance level (alpha, typically 0.05), 2. Calculating a test statistic, 3. Computing the p-value, 4. Rejecting the null hypothesis if p-value < alpha.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'significance-testing']
  },
  {
    id: 'fc-da-008',
    front: 'What is cohort analysis?',
    back: 'Cohort analysis groups users by shared characteristics or experiences within a defined time period (cohort) and tracks their behavior over time. It helps understand user retention, lifetime value, and how different user groups behave differently over their lifecycle.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'cohort-analysis', 'user-analytics']
  },
  {
    id: 'fc-da-009',
    front: 'What is funnel analysis?',
    back: 'Funnel analysis tracks users through a series of sequential steps (e.g., landing page -> signup -> purchase) to identify where users drop off. It measures conversion rates between steps and helps optimize user journeys by identifying bottlenecks.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'funnel-analysis', 'conversion']
  },
  {
    id: 'fc-da-010',
    front: 'What are the key principles of effective data visualization?',
    back: '1. Know your audience and purpose. 2. Choose the right chart type for your data. 3. Minimize chart junk and maximize data-ink ratio. 4. Use color purposefully. 5. Label clearly and provide context. 6. Tell a story with your data. 7. Make it accessible.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'best-practices', 'design']
  },
  {
    id: 'fc-da-011',
    front: 'When should you use a bar chart vs a line chart?',
    back: 'Bar charts: Compare discrete categories or show rankings. Best for categorical data. Line charts: Show trends over continuous time or ordered categories. Best for time series data. Use bars when comparing distinct groups; use lines when showing change or continuity.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'chart-types', 'best-practices']
  },
  {
    id: 'fc-da-012',
    front: 'What is the data-ink ratio concept by Edward Tufte?',
    back: 'Data-ink ratio is the proportion of a graphic\'s ink devoted to displaying actual data versus non-essential decoration. Tufte advocates maximizing this ratio by removing chartjunk (unnecessary gridlines, backgrounds, 3D effects) while keeping ink that conveys information.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'design-principles', 'tufte']
  },
  {
    id: 'fc-da-013',
    front: 'What is Type I error vs Type II error?',
    back: 'Type I Error (False Positive): Rejecting a true null hypothesis - detecting an effect that does not exist. Type II Error (False Negative): Failing to reject a false null hypothesis - missing a real effect. Alpha controls Type I; Power (1-beta) controls Type II.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-014',
    front: 'What is outlier detection and what methods are commonly used?',
    back: 'Outlier detection identifies data points that differ significantly from others. Methods include: 1. IQR method (beyond 1.5*IQR from quartiles), 2. Z-score (beyond 3 standard deviations), 3. Modified Z-score (using median), 4. Isolation Forest, 5. DBSCAN clustering, 6. Visual inspection with box plots.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'outliers']
  },
  {
    id: 'fc-da-015',
    front: 'What is the difference between descriptive, diagnostic, predictive, and prescriptive analytics?',
    back: 'Descriptive: What happened? (reports, dashboards). Diagnostic: Why did it happen? (root cause analysis). Predictive: What will happen? (forecasting, ML models). Prescriptive: What should we do? (optimization, recommendations). Each builds on the previous level.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'analytics-types', 'fundamentals']
  },
  {
    id: 'fc-da-016',
    front: 'What is sample size determination for A/B testing?',
    back: 'Sample size depends on: 1. Baseline conversion rate, 2. Minimum detectable effect (MDE), 3. Statistical power (typically 80%), 4. Significance level (typically 5%). Formula considers these factors to ensure enough data to detect meaningful differences with confidence.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'ab-testing', 'sample-size']
  },
  {
    id: 'fc-da-017',
    front: 'What are the principles of storytelling with data?',
    back: '1. Understand the context and audience. 2. Choose an appropriate visual. 3. Eliminate clutter. 4. Focus attention on key insights. 5. Think like a designer. 6. Tell a story with clear beginning (context), middle (tension/insight), and end (call to action).',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'storytelling', 'communication']
  },
  {
    id: 'fc-da-018',
    front: 'What is a box plot and what does it show?',
    back: 'A box plot (box-and-whisker plot) displays the five-number summary visually. The box shows Q1 to Q3 (IQR), the line inside is the median. Whiskers extend to min/max or 1.5*IQR. Points beyond whiskers are potential outliers. It reveals distribution, skewness, and outliers.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'statistics', 'chart-types']
  },
  {
    id: 'fc-da-019',
    front: 'What is data normalization and when is it needed?',
    back: 'Data normalization scales numeric features to a standard range (e.g., 0-1 or z-scores). It is needed when: 1. Features have different scales, 2. Using distance-based algorithms, 3. Gradient descent optimization, 4. Comparing variables with different units. Common methods: Min-Max, Z-score, Decimal scaling.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'preprocessing']
  },
  {
    id: 'fc-da-020',
    front: 'What is Simpson\'s Paradox?',
    back: 'Simpson\'s Paradox occurs when a trend present in different groups of data reverses or disappears when the groups are combined. It highlights the importance of considering confounding variables and not drawing conclusions from aggregated data without examining subgroups.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'paradoxes']
  },
  {
    id: 'fc-da-021',
    front: 'What are best practices for dashboard design?',
    back: '1. Define clear objectives and KPIs. 2. Place most important metrics prominently (top-left). 3. Use consistent layouts and color schemes. 4. Provide context with comparisons and benchmarks. 5. Enable drill-down for details. 6. Avoid clutter - less is more. 7. Design for your audience\'s expertise level.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'dashboard-design', 'best-practices']
  },
  {
    id: 'fc-da-022',
    front: 'What is the Pearson correlation coefficient?',
    back: 'Pearson\'s r measures linear correlation between two continuous variables, ranging from -1 to +1. r = +1: perfect positive linear relationship. r = -1: perfect negative linear relationship. r = 0: no linear relationship. It does not capture non-linear relationships.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'statistics', 'correlation']
  },
  {
    id: 'fc-da-023',
    front: 'What is the difference between population and sample statistics?',
    back: 'Population: The entire group you want to draw conclusions about. Uses parameters (mu, sigma). Sample: A subset of the population used for analysis. Uses statistics (x-bar, s). Sample statistics estimate population parameters. Larger samples generally provide better estimates.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'statistics', 'sampling']
  },
  {
    id: 'fc-da-024',
    front: 'What is a heatmap and when should it be used?',
    back: 'A heatmap uses color intensity to represent values in a matrix. Best uses: 1. Correlation matrices, 2. Time-based patterns (hour x day), 3. Geographic data, 4. Confusion matrices, 5. Cohort retention tables. Effective for spotting patterns in large datasets with two categorical dimensions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'chart-types', 'heatmaps']
  },
  {
    id: 'fc-da-025',
    front: 'What is the Central Limit Theorem and why is it important?',
    back: 'The Central Limit Theorem states that the distribution of sample means approaches a normal distribution as sample size increases, regardless of the population distribution. This is crucial because it allows us to use normal distribution-based statistical tests even when the underlying data is not normal.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'probability']
  },
  {
    id: 'fc-da-026',
    front: 'What is data binning and when is it useful?',
    back: 'Data binning groups continuous data into discrete intervals (bins). Uses: 1. Reduce noise in data, 2. Handle outliers, 3. Create categorical features from continuous ones, 4. Simplify visualizations (histograms), 5. Meet assumptions of certain statistical tests. Methods: equal-width, equal-frequency, custom boundaries.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-cleaning', 'preprocessing']
  },
  {
    id: 'fc-da-027',
    front: 'What is the difference between nominal, ordinal, interval, and ratio data?',
    back: 'Nominal: Categories without order (colors, gender). Ordinal: Ordered categories (ratings, education level). Interval: Ordered with equal intervals, no true zero (temperature in Celsius). Ratio: Interval with true zero (height, weight, income). Each level allows different statistical operations.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-types', 'statistics']
  },
  {
    id: 'fc-da-028',
    front: 'What is confidence interval and how is it interpreted?',
    back: 'A confidence interval is a range of values likely to contain the true population parameter. A 95% CI means: if we repeated the sampling many times, 95% of calculated intervals would contain the true value. It quantifies uncertainty around point estimates.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'inference']
  },
  {
    id: 'fc-da-029',
    front: 'What are the common types of selection bias?',
    back: '1. Survivorship bias: Only analyzing successful cases. 2. Self-selection bias: Participants choose to participate. 3. Non-response bias: Certain groups don\'t respond. 4. Exclusion bias: Systematically excluding certain data. 5. Healthy user bias: Healthier individuals more likely to participate.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'bias', 'sampling']
  },
  {
    id: 'fc-da-030',
    front: 'What is a scatter plot matrix (pair plot) and when to use it?',
    back: 'A scatter plot matrix shows pairwise relationships between multiple variables in a grid format. Each cell contains a scatter plot of two variables. Diagonal often shows distributions. Use for: initial EDA, finding correlations, detecting clusters, identifying outliers across multiple dimensions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['visualization', 'eda', 'chart-types']
  },
  {
    id: 'fc-da-031',
    front: 'What is the chi-square test used for?',
    back: 'The chi-square test examines the relationship between categorical variables. Chi-square test of independence: Tests if two categorical variables are related. Chi-square goodness of fit: Tests if observed frequencies match expected frequencies. It compares observed vs expected counts in a contingency table.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-032',
    front: 'What is the difference between wide and long data formats?',
    back: 'Wide format: Each variable has its own column; each row is an observation. Long (tidy) format: One column for variable names, one for values; observations span multiple rows. Wide is readable; long is better for analysis and visualization libraries like ggplot2 and seaborn.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-cleaning', 'data-formats']
  },
  {
    id: 'fc-da-033',
    front: 'What is statistical power and why does it matter?',
    back: 'Statistical power is the probability of correctly rejecting a false null hypothesis (detecting a true effect). Power = 1 - beta (Type II error rate). Higher power reduces false negatives. Affected by: sample size, effect size, significance level, and variance. Standard target is 80%.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-034',
    front: 'What is the difference between left, right, and inner joins?',
    back: 'Inner join: Returns only matching rows from both tables. Left join: All rows from left table, matching from right (nulls for non-matches). Right join: All rows from right table, matching from left. Full outer join: All rows from both tables, with nulls where no match exists.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-cleaning', 'sql']
  },
  {
    id: 'fc-da-035',
    front: 'What are leading and vanity metrics?',
    back: 'Vanity metrics: Look impressive but don\'t drive decisions (total page views, registered users). Leading metrics: Predict future outcomes and are actionable (weekly active users, activation rate). Leading metrics help identify problems early; vanity metrics can be misleading.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'metrics', 'business-analytics']
  },
  {
    id: 'fc-da-036',
    front: 'What is the difference between t-test and z-test?',
    back: 'Z-test: Used when population variance is known and/or sample size is large (n > 30). T-test: Used when population variance is unknown and sample size is small. T-distribution has heavier tails than normal distribution, accounting for extra uncertainty.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-037',
    front: 'What is multicollinearity and how does it affect analysis?',
    back: 'Multicollinearity occurs when independent variables are highly correlated with each other. Effects: 1. Unstable coefficient estimates, 2. Inflated standard errors, 3. Difficulty interpreting individual variable effects. Detection: Correlation matrix, VIF > 5-10. Solutions: Remove variables, combine them, or use regularization.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'regression']
  },
  {
    id: 'fc-da-038',
    front: 'What are the principles of color use in data visualization?',
    back: '1. Use sequential palettes for ordered data. 2. Use diverging palettes for data with meaningful midpoint. 3. Use categorical palettes for unordered categories. 4. Consider colorblind-friendly palettes. 5. Use color consistently across visuals. 6. Limit number of colors (< 7). 7. Use color to highlight, not decorate.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'color-theory', 'design']
  },
  {
    id: 'fc-da-039',
    front: 'What is the difference between ANOVA and t-test?',
    back: 'T-test: Compares means between exactly 2 groups. ANOVA (Analysis of Variance): Compares means across 3 or more groups simultaneously. ANOVA tests if any group differs; post-hoc tests (Tukey, Bonferroni) identify which specific groups differ.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-040',
    front: 'What is data profiling?',
    back: 'Data profiling is the process of examining data to collect statistics and information about its structure, content, and quality. It includes: data type inference, missing value analysis, uniqueness checks, value distributions, pattern detection, and relationship discovery.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-analysis', 'data-quality', 'eda']
  },
  {
    id: 'fc-da-041',
    front: 'What is the novelty effect in A/B testing?',
    back: 'The novelty effect occurs when users engage more with a new feature simply because it is new and different, not because it is better. This can inflate early metrics. Solutions: Run tests longer, analyze user segments by tenure, measure long-term behavior, or use holdout groups.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'ab-testing', 'experimentation']
  },
  {
    id: 'fc-da-042',
    front: 'What is a violin plot and how does it differ from a box plot?',
    back: 'A violin plot combines a box plot with a kernel density estimation, showing the full distribution shape. Unlike box plots that show only summary statistics, violin plots reveal multimodality and distribution shape. They are better for comparing distributions but can be harder to interpret.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'chart-types', 'distributions']
  },
  {
    id: 'fc-da-043',
    front: 'What is the multiple comparisons problem?',
    back: 'When performing multiple statistical tests, the probability of at least one false positive (Type I error) increases. With 20 tests at alpha=0.05, there is a 64% chance of at least one false positive. Solutions: Bonferroni correction (alpha/n), False Discovery Rate (FDR), or Holm-Bonferroni method.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-044',
    front: 'What is the difference between primary and secondary axes in charts?',
    back: 'Primary axis (left) shows the main metric. Secondary axis (right) shows a second metric with different scale. Caution: Dual axes can be misleading as scale choices affect perception. Best practice: Use only when necessary, clearly label both axes, and consider using small multiples instead.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'chart-design', 'best-practices']
  },
  {
    id: 'fc-da-045',
    front: 'What is the difference between parametric and non-parametric tests?',
    back: 'Parametric tests: Assume specific distributions (usually normal), use means, more powerful when assumptions are met (t-test, ANOVA). Non-parametric tests: No distribution assumptions, use ranks/medians, more robust to outliers and non-normal data (Mann-Whitney, Kruskal-Wallis).',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'statistics', 'hypothesis-testing']
  },
  {
    id: 'fc-da-046',
    front: 'What is segmentation analysis?',
    back: 'Segmentation analysis divides a population into distinct groups based on shared characteristics (demographics, behavior, preferences). Benefits: Targeted marketing, personalized experiences, better resource allocation. Methods: RFM analysis, clustering algorithms, decision trees, rule-based segmentation.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'segmentation', 'business-analytics']
  },
  {
    id: 'fc-da-047',
    front: 'What is effect size and why is it important beyond p-values?',
    back: 'Effect size measures the magnitude of a difference or relationship, independent of sample size. Examples: Cohen\'s d, correlation coefficient, odds ratio. Importance: P-values only indicate if an effect exists; effect size shows if it is meaningful. Large samples can make tiny, meaningless differences statistically significant.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['data-analysis', 'statistics', 'effect-size']
  },
  {
    id: 'fc-da-048',
    front: 'What is a waterfall chart and when should it be used?',
    back: 'A waterfall chart shows how an initial value is affected by sequential positive and negative changes to arrive at a final value. Best uses: 1. Financial statements (profit breakdown), 2. Inventory changes, 3. Population changes, 4. Budget analysis. Each bar shows incremental change from previous value.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'chart-types', 'financial-analysis']
  },
  {
    id: 'fc-da-049',
    front: 'What is data lineage and why does it matter?',
    back: 'Data lineage tracks the origin, movement, and transformation of data throughout its lifecycle. It answers: Where did this data come from? How was it transformed? Who/what has used it? Importance: Debugging errors, compliance (GDPR), impact analysis, and building trust in data quality.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-governance', 'data-quality']
  },
  {
    id: 'fc-da-050',
    front: 'What is the difference between batch analysis and real-time analytics?',
    back: 'Batch analysis: Processes data in scheduled intervals (hourly, daily). Lower cost, higher latency, good for historical analysis and reporting. Real-time analytics: Processes data as it arrives (streaming). Higher cost, low latency, essential for fraud detection, monitoring, and immediate actions.',
    category: 'Python & Data Science',
    source: 'Data Analysis',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['data-analysis', 'data-engineering', 'architecture']
  }
];
