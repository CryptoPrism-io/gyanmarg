import type { PathwayLevel } from '@/types';
import { pythonDataExpandedLessons } from './python-data-expanded';

export const pythonDataPathway: PathwayLevel[] = [
  {
    id: 'python-level1',
    title: 'Level 1: Python Fundamentals',
    description: 'Master the language that powers data science and AI',
    icon: '🐍',
    color: 'yellow',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'python-intro',
        title: 'Why Python Rules Data',
        type: 'intro',
        duration: 8,
        xpReward: 50,
        content: {
          overview: 'Python became the language of data science for good reasons.',
          mainContent: `**Python: The Swiss Army Knife of Programming**

Why Python dominates data science, AI, and automation:

**1. Readability First**
Python reads like English:
\`\`\`python
# Other languages
for (int i = 0; i < 10; i++) { print(i); }

# Python
for i in range(10):
    print(i)
\`\`\`

**2. Massive Ecosystem**
Libraries for everything:
- **NumPy:** Fast numerical computing
- **Pandas:** Data manipulation
- **Matplotlib/Seaborn:** Visualization
- **Scikit-learn:** Machine learning
- **TensorFlow/PyTorch:** Deep learning

**3. Rapid Prototyping**
Write less code, test ideas faster. What takes 100 lines in Java takes 20 in Python.

**4. Community Support**
Stack Overflow has answers. Every problem you'll face, someone solved it.

**The Tradeoff:**
Python is slower than C++ or Java. But for most data work, development speed matters more than execution speed.

**Your Learning Path:**
1. Basic syntax and data types
2. Functions and control flow
3. Data structures (lists, dicts)
4. File handling
5. Libraries (pandas, numpy)
6. Data analysis projects`,
          keyTakeaway: 'Python\'s simplicity and ecosystem make it the best language for data science beginners.',
          actionItem: 'Install Python and run your first "Hello, World!" program.',
        },
      },
      {
        id: 'python-data-types',
        title: 'Data Types & Variables',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Understanding how Python stores and manipulates data.',
          mainContent: `**Python Data Types**

**Numbers:**
\`\`\`python
integer = 42
float_num = 3.14
complex_num = 3 + 4j
\`\`\`

**Strings:**
\`\`\`python
name = "Alice"
multiline = """This spans
multiple lines"""
f_string = f"Hello, {name}!"  # Formatted string
\`\`\`

**Booleans:**
\`\`\`python
is_active = True
is_empty = False
\`\`\`

**Lists (Mutable, Ordered):**
\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits[0] = "avocado"
\`\`\`

**Tuples (Immutable, Ordered):**
\`\`\`python
coordinates = (10, 20)
# coordinates[0] = 5  # Error! Can't modify
\`\`\`

**Dictionaries (Key-Value Pairs):**
\`\`\`python
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}
print(person["name"])  # Alice
\`\`\`

**Sets (Unique, Unordered):**
\`\`\`python
unique_nums = {1, 2, 3, 3, 3}  # {1, 2, 3}
\`\`\`

**Type Checking:**
\`\`\`python
type(42)        # <class 'int'>
type("hello")   # <class 'str'>
isinstance(42, int)  # True
\`\`\``,
          keyTakeaway: 'Choose the right data type: lists for ordered collections, dicts for lookups, sets for uniqueness.',
          quiz: {
            question: 'Which data structure would you use to store unique email addresses?',
            options: [
              'List',
              'Tuple',
              'Set',
              'Dictionary',
            ],
            correct: 2,
            explanation: 'Sets automatically remove duplicates, making them perfect for unique collections.',
          },
        },
      },
      {
        id: 'python-pandas',
        title: 'Pandas: Your Data Workhorse',
        type: 'concept',
        duration: 15,
        xpReward: 125,
        content: {
          overview: 'Pandas is the essential library for data manipulation in Python.',
          mainContent: `**Pandas Essentials**

**DataFrames: Your Data Table**
\`\`\`python
import pandas as pd

# Create from dictionary
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 70000]
})
\`\`\`

**Reading Data:**
\`\`\`python
df = pd.read_csv('data.csv')
df = pd.read_excel('data.xlsx')
df = pd.read_json('data.json')
\`\`\`

**Exploring Data:**
\`\`\`python
df.head()        # First 5 rows
df.tail()        # Last 5 rows
df.shape         # (rows, columns)
df.describe()    # Statistics
df.info()        # Column types
\`\`\`

**Selecting Data:**
\`\`\`python
df['name']           # Single column
df[['name', 'age']]  # Multiple columns
df.loc[0]            # Row by label
df.iloc[0]           # Row by index
df[df['age'] > 25]   # Filter rows
\`\`\`

**Transforming Data:**
\`\`\`python
df['bonus'] = df['salary'] * 0.1  # New column
df['age_group'] = df['age'].apply(lambda x: 'young' if x < 30 else 'senior')
df.groupby('age_group')['salary'].mean()  # Group and aggregate
\`\`\`

**Handling Missing Data:**
\`\`\`python
df.isna().sum()      # Count missing
df.dropna()          # Remove missing
df.fillna(0)         # Fill with value
\`\`\``,
          keyTakeaway: 'Pandas DataFrames are your primary tool for data cleaning, exploration, and transformation.',
          actionItem: 'Load a CSV file with pandas and explore it using head(), describe(), and info().',
        },
      },
    ],
  },
  {
    id: 'python-level2',
    title: 'Level 2: Data Analysis & Visualization',
    description: 'Turn raw data into insights and beautiful charts',
    icon: '📊',
    color: 'blue',
    unlockRequirement: 2,
    lessons: [
      {
        id: 'python-viz',
        title: 'Data Visualization Mastery',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Visualize data effectively with Matplotlib and Seaborn.',
          mainContent: `**Data Visualization in Python**

**Matplotlib: The Foundation**
\`\`\`python
import matplotlib.pyplot as plt

# Line plot
plt.plot([1, 2, 3, 4], [1, 4, 2, 3])
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Simple Line Plot')
plt.show()

# Bar chart
plt.bar(['A', 'B', 'C'], [10, 20, 15])

# Scatter plot
plt.scatter(x_data, y_data)

# Histogram
plt.hist(data, bins=30)
\`\`\`

**Seaborn: Statistical Visualization**
\`\`\`python
import seaborn as sns

# Distribution plot
sns.histplot(data=df, x='age', kde=True)

# Correlation heatmap
sns.heatmap(df.corr(), annot=True)

# Box plot
sns.boxplot(data=df, x='category', y='value')

# Pair plot (all relationships)
sns.pairplot(df)
\`\`\`

**Visualization Best Practices:**

1. **Choose the right chart type:**
   - Trends over time → Line chart
   - Comparisons → Bar chart
   - Distributions → Histogram
   - Relationships → Scatter plot
   - Proportions → Pie chart (use sparingly)

2. **Design principles:**
   - Label your axes
   - Use clear titles
   - Choose accessible colors
   - Remove clutter
   - Tell a story`,
          keyTakeaway: 'Good visualizations reveal patterns that raw numbers hide. Choose chart types based on what story you want to tell.',
          quiz: {
            question: 'Which chart type is best for showing correlation between two variables?',
            options: [
              'Bar chart',
              'Pie chart',
              'Scatter plot',
              'Line chart',
            ],
            correct: 2,
            explanation: 'Scatter plots show the relationship between two continuous variables, revealing correlation patterns.',
          },
        },
      },
    ],
  },
  {
    id: 'python-level3',
    title: 'Level 3: Python Fundamentals Deep Dive',
    description: 'Master Python syntax, data structures, and core concepts',
    icon: '🔧',
    color: 'green',
    unlockRequirement: 200,
    lessons: pythonDataExpandedLessons.slice(0, 8),
  },
  {
    id: 'python-level4',
    title: 'Level 4: Advanced Pandas & Data Wrangling',
    description: 'Handle real-world messy data with confidence',
    icon: '🔀',
    color: 'cyan',
    unlockRequirement: 400,
    lessons: pythonDataExpandedLessons.slice(8, 16),
  },
  {
    id: 'python-level5',
    title: 'Level 5: Data Visualization Mastery',
    description: 'Create stunning visualizations that tell compelling stories',
    icon: '📈',
    color: 'purple',
    unlockRequirement: 600,
    lessons: pythonDataExpandedLessons.slice(16, 24),
  },
  {
    id: 'python-level6',
    title: 'Level 6: Statistics & Machine Learning',
    description: 'Apply statistical methods and build predictive models',
    icon: '🤖',
    color: 'pink',
    unlockRequirement: 800,
    lessons: pythonDataExpandedLessons.slice(24, 32),
  },
  {
    id: 'python-level7',
    title: 'Level 7: Real-World Projects',
    description: 'Apply everything in comprehensive data science projects',
    icon: '🚀',
    color: 'orange',
    unlockRequirement: 1000,
    lessons: pythonDataExpandedLessons.slice(32, 40),
  },
];

export default pythonDataPathway;
