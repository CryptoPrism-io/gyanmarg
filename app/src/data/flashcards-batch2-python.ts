import type { SpacedRepetitionCard } from '@/types';

export const pythonDataScienceFlashcards: SpacedRepetitionCard[] = [
  // Python Fundamentals - Data Types
  {
    id: 'fc-pyds-001',
    front: 'What are the four main mutable vs immutable data types in Python?',
    back: 'Immutable: int, float, str, tuple (cannot be changed after creation). Mutable: list, dict, set (can be modified in place). Understanding mutability is crucial for: 1) Avoiding unintended side effects, 2) Using as dictionary keys (only immutables), 3) Function argument behavior, 4) Memory efficiency.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['python', 'data-types', 'mutability']
  },
  {
    id: 'fc-pyds-002',
    front: 'What is the difference between == and "is" in Python?',
    back: '"==" checks value equality (do two objects have the same value?). "is" checks identity (are two references pointing to the same object in memory?). Example: a = [1,2]; b = [1,2]; a == b is True, but a is b is False. Use "is" for None checks: if x is None. Common pitfall: small integers (-5 to 256) are cached, so "is" may work unexpectedly.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['python', 'operators', 'comparison']
  },
  {
    id: 'fc-pyds-003',
    front: 'What is a Python dictionary comprehension and when should you use it?',
    back: 'Dictionary comprehension creates dicts concisely: {key: value for item in iterable if condition}. Example: {x: x**2 for x in range(5)} creates {0:0, 1:1, 2:4, 3:9, 4:16}. Use for: transforming data, filtering, creating lookup tables. Avoid when: logic is complex (use regular loops for readability), or when you need side effects.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'comprehensions', 'dictionaries']
  },
  {
    id: 'fc-pyds-004',
    front: 'Explain Python\'s *args and **kwargs syntax.',
    back: '*args collects positional arguments into a tuple. **kwargs collects keyword arguments into a dictionary. Usage: def func(*args, **kwargs). Order matters: regular args, *args, keyword args, **kwargs. Use cases: 1) Flexible function signatures, 2) Decorators, 3) Passing arguments to parent classes, 4) Wrapper functions. Example: func(1, 2, name="test") with *args and **kwargs.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'functions', 'arguments']
  },

  // List Comprehensions
  {
    id: 'fc-pyds-005',
    front: 'What is a list comprehension and how does it compare to map/filter?',
    back: 'List comprehension: [expression for item in iterable if condition]. More Pythonic and often faster than map/filter. Example: [x**2 for x in range(10) if x % 2 == 0] vs list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, range(10)))). Comprehensions are preferred for readability; use map/filter when you already have named functions.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['python', 'list-comprehension', 'functional']
  },
  {
    id: 'fc-pyds-006',
    front: 'How do you create a nested list comprehension for matrix operations?',
    back: 'Nested comprehension: [[expr for j in inner] for i in outer]. Reading order: outer loop first, then inner. Example - transpose: [[row[i] for row in matrix] for i in range(len(matrix[0]))]. Example - flatten: [item for sublist in matrix for item in sublist]. Note: for complex operations, NumPy is more readable and efficient.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'list-comprehension', 'matrices']
  },

  // Decorators
  {
    id: 'fc-pyds-007',
    front: 'What is a decorator in Python and how does it work?',
    back: 'A decorator is a function that takes another function and extends its behavior without modifying it. Syntax: @decorator above function definition. Under the hood: decorated_func = decorator(original_func). Common uses: logging, timing, authentication, caching (@lru_cache), input validation. Always use @functools.wraps to preserve function metadata.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'decorators', 'functions']
  },
  {
    id: 'fc-pyds-008',
    front: 'How do you create a decorator that accepts arguments?',
    back: 'Use a decorator factory - a function that returns a decorator. Three nested functions: 1) Outer function takes decorator args, 2) Middle function is the actual decorator taking the function, 3) Inner function is the wrapper. Example: def repeat(n): def decorator(func): def wrapper(*args): return [func(*args) for _ in range(n)] return wrapper return decorator. Usage: @repeat(3).',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['python', 'decorators', 'advanced']
  },

  // Generators
  {
    id: 'fc-pyds-009',
    front: 'What is a generator in Python and why use it over lists?',
    back: 'Generators produce items one at a time using "yield" instead of returning all at once. Benefits: 1) Memory efficient (items generated on demand), 2) Can represent infinite sequences, 3) Lazy evaluation (compute only when needed). Create with generator functions (def with yield) or generator expressions (x for x in iterable). Use for large datasets, streaming data, pipelines.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'generators', 'memory']
  },
  {
    id: 'fc-pyds-010',
    front: 'Explain the difference between yield and return in Python.',
    back: 'return: exits function, returns value, function state is lost. yield: pauses function, returns value, function state is preserved for next iteration. A function with yield becomes a generator. Each next() call resumes from where it left off. Multiple yields are common. Example: def countdown(n): while n > 0: yield n; n -= 1. Generators are iterators but can only be iterated once.',
    category: 'Python & Data Science',
    source: 'Python Fundamentals',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'generators', 'yield']
  },

  // Pandas Basics
  {
    id: 'fc-pyds-011',
    front: 'What is the difference between a Pandas Series and DataFrame?',
    back: 'Series: 1-dimensional labeled array (like a column). DataFrame: 2-dimensional labeled data structure (like a table/spreadsheet). DataFrame is essentially a dict of Series sharing the same index. Series has: values, index, name. DataFrame has: values, index (rows), columns. Most operations return DataFrames; selecting single column returns Series.',
    category: 'Python & Data Science',
    source: 'Pandas',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['pandas', 'dataframe', 'series']
  },
  {
    id: 'fc-pyds-012',
    front: 'What is the difference between .loc[] and .iloc[] in Pandas?',
    back: '.loc[]: label-based indexing - uses actual index/column names. .iloc[]: integer position-based indexing - uses 0-based positions. Examples: df.loc["row_name", "col_name"] vs df.iloc[0, 1]. Key difference: .loc includes the endpoint in slices, .iloc excludes it (like Python). Use .loc for readability with named indices, .iloc when position matters.',
    category: 'Python & Data Science',
    source: 'Pandas',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['pandas', 'indexing', 'loc-iloc']
  },
  {
    id: 'fc-pyds-013',
    front: 'How does the groupby operation work in Pandas?',
    back: 'groupby splits data into groups based on criteria, applies a function, combines results. Pattern: df.groupby("column").agg_function(). Split-Apply-Combine paradigm. Examples: df.groupby("category")["value"].mean(), df.groupby(["col1","col2"]).agg({"value": ["sum","mean"]}). Returns GroupBy object (lazy) - computation happens on aggregation.',
    category: 'Python & Data Science',
    source: 'Pandas',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['pandas', 'groupby', 'aggregation']
  },
  {
    id: 'fc-pyds-014',
    front: 'What is the difference between merge, join, and concat in Pandas?',
    back: 'merge(): SQL-style joins on columns - df1.merge(df2, on="key", how="inner/left/right/outer"). join(): joins on index by default - df1.join(df2). concat(): stacks DataFrames - pd.concat([df1, df2], axis=0 for rows, axis=1 for columns). Use merge for database-style operations, concat for simple stacking, join when index-based is convenient.',
    category: 'Python & Data Science',
    source: 'Pandas',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['pandas', 'merge', 'join', 'concat']
  },
  {
    id: 'fc-pyds-015',
    front: 'How do you create and use a pivot table in Pandas?',
    back: 'pd.pivot_table(df, values="col", index="row_group", columns="col_group", aggfunc="mean"). Reshapes data for analysis. Parameters: values (what to aggregate), index (row grouping), columns (column grouping), aggfunc (how to aggregate - mean, sum, count, etc.), fill_value (replace NaN). Alternative: df.pivot() for simple reshaping without aggregation.',
    category: 'Python & Data Science',
    source: 'Pandas',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['pandas', 'pivot-table', 'reshaping']
  },
  {
    id: 'fc-pyds-016',
    front: 'How do you handle missing data in Pandas?',
    back: 'Detect: df.isnull(), df.isna(), df.isnull().sum(). Remove: df.dropna(axis=0/1, how="any/all", subset=["cols"]). Fill: df.fillna(value), df.fillna(method="ffill/bfill"), df.fillna(df.mean()). Interpolate: df.interpolate(). Replace: df.replace(old, new). Best practice: understand why data is missing before choosing strategy (MCAR, MAR, MNAR).',
    category: 'Python & Data Science',
    source: 'Pandas',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['pandas', 'missing-data', 'cleaning']
  },

  // NumPy Essentials
  {
    id: 'fc-pyds-017',
    front: 'Why is NumPy faster than Python lists for numerical operations?',
    back: 'NumPy advantages: 1) Contiguous memory allocation (better cache usage), 2) Homogeneous data types (no type checking per element), 3) Vectorized operations in C (no Python loop overhead), 4) SIMD instructions. Performance: 10-100x faster for large arrays. Trade-off: less flexible than lists. Use NumPy for numerical computations, lists for mixed-type collections.',
    category: 'Python & Data Science',
    source: 'NumPy',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['numpy', 'performance', 'arrays']
  },
  {
    id: 'fc-pyds-018',
    front: 'What is broadcasting in NumPy and how does it work?',
    back: 'Broadcasting allows operations on arrays of different shapes. Rules: 1) Compare shapes from right to left, 2) Dimensions are compatible if equal or one is 1, 3) Smaller array is "broadcast" to match larger. Example: (3,4) + (4,) works - (4,) becomes (1,4) then (3,4). Enables: arr + scalar, matrix + vector operations without explicit loops or tiling.',
    category: 'Python & Data Science',
    source: 'NumPy',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['numpy', 'broadcasting', 'arrays']
  },
  {
    id: 'fc-pyds-019',
    front: 'What is vectorization and why is it important in NumPy?',
    back: 'Vectorization applies operations to entire arrays without explicit Python loops. Instead of: [x**2 for x in arr], use: arr**2. Benefits: 1) Concise code, 2) Operations run in optimized C, 3) 10-100x speedup. Common vectorized functions: np.sum, np.mean, np.dot, arithmetic operators. Rule: if you write a loop over array elements, look for a vectorized alternative.',
    category: 'Python & Data Science',
    source: 'NumPy',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['numpy', 'vectorization', 'performance']
  },
  {
    id: 'fc-pyds-020',
    front: 'Explain NumPy array slicing and the difference between views and copies.',
    back: 'Slicing: arr[start:stop:step], multidimensional: arr[row_slice, col_slice]. Views (default for slices): share memory with original, changes propagate. Copies (explicit): arr.copy(), independent of original. Test with: np.shares_memory(a, b). Gotcha: basic slicing creates views, fancy indexing (arr[[0,2]]) creates copies. Always .copy() if you need independent data.',
    category: 'Python & Data Science',
    source: 'NumPy',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['numpy', 'slicing', 'views']
  },

  // Data Visualization
  {
    id: 'fc-pyds-021',
    front: 'What are the key differences between Matplotlib and Seaborn?',
    back: 'Matplotlib: low-level, highly customizable, verbose, foundation for others. Seaborn: built on Matplotlib, statistical visualizations, better defaults, works with DataFrames, less customizable. Use Matplotlib for: publication-quality custom plots, animations. Use Seaborn for: quick exploratory analysis, statistical plots (distributions, correlations), categorical data visualization.',
    category: 'Python & Data Science',
    source: 'Data Visualization',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['matplotlib', 'seaborn', 'visualization']
  },
  {
    id: 'fc-pyds-022',
    front: 'What is the difference between plt.subplots() and plt.figure() in Matplotlib?',
    back: 'plt.figure(): creates just a figure container. plt.subplots(nrows, ncols): creates figure AND axes objects, returns (fig, ax). Preferred pattern: fig, ax = plt.subplots() gives you explicit handles. For multiple plots: fig, axes = plt.subplots(2, 3) returns 2D array of axes. Use ax.plot(), ax.set_xlabel() instead of plt.plot() for better control.',
    category: 'Python & Data Science',
    source: 'Data Visualization',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['matplotlib', 'subplots', 'visualization']
  },
  {
    id: 'fc-pyds-023',
    front: 'When should you use a histogram vs a box plot vs a violin plot?',
    back: 'Histogram: shows distribution shape, frequency bins, good for single variable exploration. Box plot: shows median, quartiles, outliers; great for comparing distributions across categories; compact. Violin plot: combines box plot + kernel density; shows full distribution shape; better for bimodal distributions but takes more space. Use histogram first, box plots for comparison, violin for detailed distribution analysis.',
    category: 'Python & Data Science',
    source: 'Data Visualization',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['visualization', 'distributions', 'charts']
  },
  {
    id: 'fc-pyds-024',
    front: 'What is a heatmap and when should you use it?',
    back: 'Heatmap displays matrix data as colors. Use cases: 1) Correlation matrices (sns.heatmap(df.corr())), 2) Confusion matrices in ML, 3) Time-based patterns, 4) Geographic data (simplified). Key parameters: annot=True for values, cmap for colorscheme (diverging for correlations), vmin/vmax for scale. Best for: spotting patterns in large tables, comparing many variables simultaneously.',
    category: 'Python & Data Science',
    source: 'Data Visualization',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['seaborn', 'heatmap', 'visualization']
  },

  // Data Cleaning
  {
    id: 'fc-pyds-025',
    front: 'What are the common steps in a data cleaning pipeline?',
    back: '1) Handle missing values (drop, impute, flag). 2) Remove duplicates (df.drop_duplicates()). 3) Fix data types (pd.to_datetime, astype). 4) Standardize text (lower, strip, regex). 5) Handle outliers (IQR, z-score). 6) Validate ranges and constraints. 7) Resolve inconsistencies (encoding, naming conventions). Rule: 80% of data science is data cleaning. Document all transformations.',
    category: 'Python & Data Science',
    source: 'Data Cleaning',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['data-cleaning', 'preprocessing', 'pipeline']
  },
  {
    id: 'fc-pyds-026',
    front: 'How do you detect and handle outliers in a dataset?',
    back: 'Detection methods: 1) IQR: outliers < Q1-1.5*IQR or > Q3+1.5*IQR, 2) Z-score: |z| > 3, 3) Visualization: box plots, scatter plots. Handling options: 1) Remove if errors, 2) Cap/floor (winsorization), 3) Transform (log, sqrt), 4) Keep if legitimate extreme values, 5) Separate analysis. Always investigate outliers before removing - they may contain valuable information.',
    category: 'Python & Data Science',
    source: 'Data Cleaning',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['outliers', 'data-cleaning', 'statistics']
  },
  {
    id: 'fc-pyds-027',
    front: 'What is feature scaling and when is it necessary?',
    back: 'Feature scaling normalizes feature ranges. Types: 1) StandardScaler: (x-mean)/std, results in mean=0, std=1. 2) MinMaxScaler: (x-min)/(max-min), results in [0,1]. Necessary for: distance-based algorithms (KNN, SVM, k-means), gradient descent optimization, neural networks. Not necessary for: tree-based models, Naive Bayes. Always fit on training data, transform both train and test.',
    category: 'Python & Data Science',
    source: 'Data Preprocessing',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['scaling', 'preprocessing', 'normalization']
  },
  {
    id: 'fc-pyds-028',
    front: 'What is one-hot encoding and when should you use it?',
    back: 'One-hot encoding converts categorical variables to binary columns (one column per category, 1 if present, 0 otherwise). Use pd.get_dummies() or sklearn OneHotEncoder. Use when: categories have no ordinal relationship, algorithm requires numerical input. Avoid when: high cardinality (many categories) causes dimensionality explosion. Alternatives: label encoding (for ordinals), target encoding, embeddings.',
    category: 'Python & Data Science',
    source: 'Data Preprocessing',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['encoding', 'categorical', 'preprocessing']
  },

  // Statistics for Data Science
  {
    id: 'fc-pyds-029',
    front: 'What is the difference between population and sample statistics?',
    back: 'Population: entire group of interest, parameters denoted with Greek letters (mu for mean, sigma for std). Sample: subset of population, statistics denoted with Latin letters (x-bar for mean, s for std). Sample statistics estimate population parameters. Key difference: sample std uses n-1 (Bessel correction) for unbiased estimate. Most real-world analysis uses samples due to cost/feasibility.',
    category: 'Python & Data Science',
    source: 'Statistics',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['statistics', 'sampling', 'fundamentals']
  },
  {
    id: 'fc-pyds-030',
    front: 'Explain the Central Limit Theorem and its importance in data science.',
    back: 'CLT states: regardless of population distribution, sample means approach normal distribution as sample size increases (n > 30 typically). Importance: 1) Enables hypothesis testing with unknown distributions, 2) Justifies using normal-based confidence intervals, 3) Foundation of many statistical methods. Practical implication: we can make inferences about population means using the normal distribution.',
    category: 'Python & Data Science',
    source: 'Statistics',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['statistics', 'clt', 'distributions']
  },
  {
    id: 'fc-pyds-031',
    front: 'What is a p-value and how should it be interpreted?',
    back: 'P-value: probability of observing results as extreme as the data, assuming the null hypothesis is true. NOT the probability that H0 is true. Interpretation: if p < alpha (typically 0.05), reject H0 (statistically significant). Common misconceptions: small p does not mean large effect, p is not effect size, p = 0.05 is arbitrary. Always report effect size and confidence intervals alongside p-values.',
    category: 'Python & Data Science',
    source: 'Statistics',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['statistics', 'p-value', 'hypothesis-testing']
  },
  {
    id: 'fc-pyds-032',
    front: 'What is the difference between correlation and causation?',
    back: 'Correlation: statistical relationship between variables (they change together). Causation: one variable directly affects another. Correlation does not imply causation because of: 1) Confounding variables (third factor causes both), 2) Reverse causation, 3) Coincidence. Establishing causation requires: controlled experiments, temporal precedence, eliminating confounders. In observational data, use causal inference methods carefully.',
    category: 'Python & Data Science',
    source: 'Statistics',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['statistics', 'correlation', 'causation']
  },
  {
    id: 'fc-pyds-033',
    front: 'What is the difference between Type I and Type II errors?',
    back: 'Type I error (False Positive): rejecting true null hypothesis (alpha, typically 5%). Example: concluding treatment works when it does not. Type II error (False Negative): failing to reject false null hypothesis (beta). Example: missing a real treatment effect. Trade-off: reducing one increases the other. Power = 1-beta. Balance based on consequences: medical tests often prioritize avoiding false negatives.',
    category: 'Python & Data Science',
    source: 'Statistics',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['statistics', 'errors', 'hypothesis-testing']
  },

  // SQL for Data Analysis
  {
    id: 'fc-pyds-034',
    front: 'What is the order of execution in a SQL query?',
    back: 'Written order vs execution order differs! Execution: 1) FROM/JOIN (get data), 2) WHERE (filter rows), 3) GROUP BY (aggregate), 4) HAVING (filter groups), 5) SELECT (choose columns), 6) DISTINCT, 7) ORDER BY, 8) LIMIT. Important because: you cannot use SELECT aliases in WHERE (not executed yet), but can use in ORDER BY. HAVING filters after grouping, WHERE before.',
    category: 'Python & Data Science',
    source: 'SQL',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['sql', 'query', 'fundamentals']
  },
  {
    id: 'fc-pyds-035',
    front: 'What are the different types of JOINs in SQL?',
    back: 'INNER JOIN: only matching rows from both tables. LEFT JOIN: all rows from left table, matching from right (NULL if no match). RIGHT JOIN: all rows from right, matching from left. FULL OUTER JOIN: all rows from both (NULL where no match). CROSS JOIN: cartesian product (all combinations). Self JOIN: table joined with itself. Most common: LEFT JOIN to preserve all records from primary table.',
    category: 'Python & Data Science',
    source: 'SQL',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['sql', 'joins', 'fundamentals']
  },
  {
    id: 'fc-pyds-036',
    front: 'What is a window function in SQL and when would you use it?',
    back: 'Window functions perform calculations across related rows without collapsing them (unlike GROUP BY). Syntax: function() OVER (PARTITION BY col ORDER BY col). Common functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), SUM() OVER, running totals. Use cases: rankings within groups, comparing to previous row, calculating moving averages, cumulative sums. Essential for advanced analytics.',
    category: 'Python & Data Science',
    source: 'SQL',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['sql', 'window-functions', 'analytics']
  },
  {
    id: 'fc-pyds-037',
    front: 'What is the difference between WHERE and HAVING in SQL?',
    back: 'WHERE: filters individual rows BEFORE grouping, cannot use aggregate functions. HAVING: filters groups AFTER GROUP BY, can use aggregate functions. Example: SELECT dept, AVG(salary) FROM employees WHERE hire_date > "2020-01-01" GROUP BY dept HAVING AVG(salary) > 50000. WHERE removes rows before aggregation, HAVING removes groups after aggregation.',
    category: 'Python & Data Science',
    source: 'SQL',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['sql', 'filtering', 'groupby']
  },

  // Jupyter Best Practices
  {
    id: 'fc-pyds-038',
    front: 'What are best practices for organizing Jupyter notebooks?',
    back: '1) Clear structure: intro, imports, data loading, exploration, analysis, conclusions. 2) Markdown documentation between code cells. 3) Modular code: functions for repeated operations. 4) Restart and run all before sharing. 5) Clear outputs before version control. 6) Use meaningful cell outputs (not print statements). 7) Keep notebooks focused (one analysis per notebook). 8) Consider nbconvert for production code extraction.',
    category: 'Python & Data Science',
    source: 'Jupyter',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['jupyter', 'best-practices', 'workflow']
  },
  {
    id: 'fc-pyds-039',
    front: 'What are Jupyter magic commands and which are most useful?',
    back: 'Magic commands extend notebook functionality. Line magics (%): %timeit (timing), %matplotlib inline (plotting), %load (load file), %who (list variables), %pwd (current directory). Cell magics (%%): %%time (cell timing), %%writefile (write cell to file), %%sql (SQL execution). %lsmagic shows all. Most useful for data science: %timeit, %matplotlib inline, %load_ext, %%time.',
    category: 'Python & Data Science',
    source: 'Jupyter',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['jupyter', 'magic-commands', 'productivity']
  },

  // Data Science Interview Questions
  {
    id: 'fc-pyds-040',
    front: 'How would you handle imbalanced classes in a classification problem?',
    back: 'Techniques: 1) Resampling: oversample minority (SMOTE), undersample majority. 2) Class weights: penalize misclassification of minority class more. 3) Threshold adjustment: tune decision threshold. 4) Ensemble methods: balanced random forests, EasyEnsemble. 5) Different metrics: use precision, recall, F1, AUC-ROC instead of accuracy. 6) Collect more minority class data if possible. Choose based on data size and problem context.',
    category: 'Python & Data Science',
    source: 'Interview Questions',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'classification', 'interview']
  },
  {
    id: 'fc-pyds-041',
    front: 'Explain the difference between bagging and boosting.',
    back: 'Bagging (Bootstrap Aggregating): trains models independently on random data subsets, combines by voting/averaging. Reduces variance. Example: Random Forest. Boosting: trains models sequentially, each correcting previous errors, weighted combination. Reduces bias. Examples: AdaBoost, XGBoost, LightGBM. Bagging is parallelizable and less prone to overfitting; boosting often achieves higher accuracy but can overfit.',
    category: 'Python & Data Science',
    source: 'Interview Questions',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'ensemble', 'interview']
  },
  {
    id: 'fc-pyds-042',
    front: 'What metrics would you use to evaluate a regression model?',
    back: 'Common metrics: 1) MAE (Mean Absolute Error): average absolute difference, interpretable units. 2) MSE (Mean Squared Error): penalizes large errors more. 3) RMSE: square root of MSE, same units as target. 4) R-squared: proportion of variance explained (0-1). 5) MAPE: percentage error. Choose based on: outlier sensitivity (MSE vs MAE), interpretability needs, business context. Always compare to baseline.',
    category: 'Python & Data Science',
    source: 'Interview Questions',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['machine-learning', 'regression', 'metrics']
  },
  {
    id: 'fc-pyds-043',
    front: 'What is regularization and why is it important in machine learning?',
    back: 'Regularization adds penalty term to loss function to prevent overfitting. Types: L1 (Lasso) adds |weights| - promotes sparsity, feature selection. L2 (Ridge) adds weights^2 - shrinks weights, keeps all features. ElasticNet combines both. Importance: 1) Prevents overfitting, 2) Handles multicollinearity, 3) Improves generalization. Hyperparameter lambda controls regularization strength.',
    category: 'Python & Data Science',
    source: 'Interview Questions',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'regularization', 'interview']
  },

  // Machine Learning Workflow
  {
    id: 'fc-pyds-044',
    front: 'What are the typical stages of a machine learning project?',
    back: '1) Problem definition: business goal, success metrics. 2) Data collection and understanding. 3) Data cleaning and preprocessing. 4) Exploratory data analysis. 5) Feature engineering. 6) Model selection and training. 7) Model evaluation (cross-validation). 8) Hyperparameter tuning. 9) Final evaluation on test set. 10) Deployment and monitoring. Iterate: 80% is data work, expect to cycle back through stages.',
    category: 'Python & Data Science',
    source: 'ML Workflow',
    pathwayId: 'python-data-science',
    difficulty: 'beginner',
    tags: ['machine-learning', 'workflow', 'project']
  },
  {
    id: 'fc-pyds-045',
    front: 'What is feature engineering and why is it crucial?',
    back: 'Feature engineering transforms raw data into features that better represent the problem to ML algorithms. Techniques: 1) Creating interactions (A*B), 2) Binning continuous variables, 3) Extracting from dates (day of week, month), 4) Text features (TF-IDF, word counts), 5) Aggregations (rolling means), 6) Domain-specific features. Often more impactful than algorithm choice. "Applied ML is basically feature engineering" - common saying.',
    category: 'Python & Data Science',
    source: 'ML Workflow',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'feature-engineering', 'preprocessing']
  },
  {
    id: 'fc-pyds-046',
    front: 'What is data leakage and how do you prevent it?',
    back: 'Data leakage: using information during training that would not be available at prediction time, causing overly optimistic performance estimates. Types: 1) Target leakage (features derived from target), 2) Train-test contamination (preprocessing on full data). Prevention: 1) Split data FIRST, 2) Use pipelines for preprocessing, 3) Time-based splits for temporal data, 4) Domain knowledge to identify problematic features.',
    category: 'Python & Data Science',
    source: 'ML Workflow',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'data-leakage', 'validation']
  },
  {
    id: 'fc-pyds-047',
    front: 'How do you select features for a machine learning model?',
    back: 'Methods: 1) Filter: statistical tests, correlation, mutual information (fast, independent of model). 2) Wrapper: recursive feature elimination, forward/backward selection (expensive, model-specific). 3) Embedded: L1 regularization, tree feature importance (during training). 4) Domain expertise. Process: start with all features, remove highly correlated, use importance measures, validate with cross-validation. Balance between complexity and performance.',
    category: 'Python & Data Science',
    source: 'ML Workflow',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['machine-learning', 'feature-selection', 'modeling']
  },

  // Advanced Python
  {
    id: 'fc-pyds-048',
    front: 'What is the GIL (Global Interpreter Lock) and how does it affect Python?',
    back: 'GIL is a mutex preventing multiple threads from executing Python bytecode simultaneously. Impact: CPU-bound multi-threaded code does not achieve true parallelism. Solutions: 1) multiprocessing (separate processes, bypasses GIL), 2) Use GIL-releasing libraries (NumPy, pandas - operations run in C), 3) async/await for I/O-bound tasks. Note: GIL is per-process, so multiprocessing achieves parallelism. Rarely a bottleneck in data science due to C-based libraries.',
    category: 'Python & Data Science',
    source: 'Python Advanced',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['python', 'gil', 'concurrency']
  },
  {
    id: 'fc-pyds-049',
    front: 'What is a context manager in Python and how do you create one?',
    back: 'Context managers handle setup/teardown automatically using "with" statement. Built-in: with open("file") as f. Create using: 1) Class with __enter__ and __exit__ methods, 2) @contextmanager decorator with generator (yield). Use cases: file handling, database connections, locks, timing, temporary state changes. Benefits: guarantees cleanup even if exceptions occur, cleaner code than try/finally.',
    category: 'Python & Data Science',
    source: 'Python Advanced',
    pathwayId: 'python-data-science',
    difficulty: 'intermediate',
    tags: ['python', 'context-manager', 'resources']
  },
  {
    id: 'fc-pyds-050',
    front: 'How do you profile and optimize Python code for data science?',
    back: 'Profiling: %timeit (micro-benchmarks), %prun (function profiling), cProfile, line_profiler (@profile decorator). Memory: memory_profiler, tracemalloc. Optimization steps: 1) Profile first (find bottlenecks), 2) Use vectorized operations (NumPy/Pandas), 3) Avoid loops over rows, 4) Use appropriate data types, 5) Consider Cython, Numba for hot spots. Rule: premature optimization is evil - measure, then optimize.',
    category: 'Python & Data Science',
    source: 'Python Advanced',
    pathwayId: 'python-data-science',
    difficulty: 'advanced',
    tags: ['python', 'profiling', 'optimization']
  }
];
