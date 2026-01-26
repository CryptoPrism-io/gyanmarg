import type { PathwayLesson } from '@/types';

export const pythonDataExpandedLessons: PathwayLesson[] = [
  // Section 1: Python Fundamentals (8 lessons)
  {
    id: 'py-exp-001',
    title: 'Variables and Data Types',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Master Python\'s core building blocks: variables, strings, numbers, and booleans.',
      mainContent: `**Variables: Containers for Data**

In Python, variables are names that point to values. No declaration needed - just assign:

\`\`\`python
name = "Alice"      # String
age = 25            # Integer
height = 5.7        # Float
is_student = True   # Boolean
\`\`\`

**Core Data Types**

| Type | Example | Use Case |
|------|---------|----------|
| str | "hello" | Text data |
| int | 42 | Whole numbers |
| float | 3.14 | Decimals |
| bool | True/False | Logic |

**Type Checking and Conversion**

\`\`\`python
type(age)        # <class 'int'>
str(age)         # "25"
int("100")       # 100
float("3.14")    # 3.14
\`\`\`

**String Operations**

\`\`\`python
name.upper()           # "ALICE"
name.lower()           # "alice"
f"Hello, {name}!"      # f-strings (best practice)
len(name)              # 5
\`\`\`

**Dynamic Typing**

Python is dynamically typed - variables can change type:
\`\`\`python
x = 10      # int
x = "ten"   # now a string
\`\`\`

This flexibility is powerful but requires discipline.`,
      keyTakeaway: 'Variables are labels pointing to values. Python\'s dynamic typing offers flexibility but requires attention to types.',
      actionItem: 'Open a Python interpreter and create variables of each type. Practice type conversion between them.',
    },
  },
  {
    id: 'py-exp-002',
    title: 'Control Flow: Conditionals and Loops',
    type: 'concept',
    duration: 14,
    xpReward: 110,
    content: {
      overview: 'Control program execution with if statements, for loops, and while loops.',
      mainContent: `**Conditional Statements**

Make decisions in your code:

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
\`\`\`

**Comparison Operators**

| Operator | Meaning |
|----------|---------|
| == | Equal |
| != | Not equal |
| < > | Less/Greater |
| <= >= | Less/Greater or equal |
| in | Membership |

**For Loops**

Iterate over sequences:

\`\`\`python
# List iteration
for item in [1, 2, 3]:
    print(item)

# Range
for i in range(5):      # 0, 1, 2, 3, 4
    print(i)

# Enumerate for index + value
for i, val in enumerate(['a', 'b', 'c']):
    print(f"{i}: {val}")
\`\`\`

**While Loops**

Repeat while condition is true:

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

**Loop Control**

\`\`\`python
for i in range(10):
    if i == 3:
        continue    # Skip this iteration
    if i == 7:
        break       # Exit loop entirely
    print(i)
\`\`\``,
      keyTakeaway: 'Conditionals make decisions, for loops iterate over sequences, while loops repeat until a condition is false.',
      actionItem: 'Write a program that iterates through numbers 1-100 and prints "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both.',
    },
  },
  {
    id: 'py-exp-003',
    title: 'Functions: Reusable Code Blocks',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Write clean, reusable code with functions - the building blocks of programs.',
      mainContent: `**Defining Functions**

\`\`\`python
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
\`\`\`

**Parameters and Arguments**

\`\`\`python
# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Bob")              # "Hello, Bob!"
greet("Bob", "Hi")        # "Hi, Bob!"

# Keyword arguments
greet(greeting="Hey", name="Bob")
\`\`\`

**Multiple Return Values**

\`\`\`python
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

low, high, avg = get_stats([1, 2, 3, 4, 5])
\`\`\`

**Args and Kwargs**

\`\`\`python
def flexible(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

flexible(1, 2, 3, name="Alice", age=25)
\`\`\`

**Lambda Functions**

Short, anonymous functions:

\`\`\`python
square = lambda x: x ** 2
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
\`\`\`

**Best Practices**

- One function, one purpose
- Descriptive names (verb_noun)
- Document with docstrings
- Keep functions short (<20 lines ideal)`,
      keyTakeaway: 'Functions encapsulate logic for reuse. Use descriptive names, default parameters, and keep them focused on one task.',
      actionItem: 'Refactor a piece of code you\'ve written by extracting repeated logic into functions.',
    },
  },
  {
    id: 'py-exp-004',
    title: 'Lists and Dictionaries',
    type: 'concept',
    duration: 14,
    xpReward: 115,
    content: {
      overview: 'Master Python\'s most important data structures: lists for sequences and dicts for key-value pairs.',
      mainContent: `**Lists: Ordered Collections**

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Access
fruits[0]           # "apple"
fruits[-1]          # "cherry" (last item)
fruits[1:3]         # ["banana", "cherry"] (slice)

# Modify
fruits.append("date")
fruits.insert(1, "apricot")
fruits.remove("banana")
popped = fruits.pop()
\`\`\`

**List Comprehensions**

Powerful one-liners:

\`\`\`python
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`

**Dictionaries: Key-Value Pairs**

\`\`\`python
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}

# Access
person["name"]          # "Alice"
person.get("job", "N/A")  # Safe access with default

# Modify
person["age"] = 31
person["job"] = "Engineer"
del person["city"]
\`\`\`

**Dictionary Methods**

\`\`\`python
person.keys()       # dict_keys(['name', 'age', 'job'])
person.values()     # dict_values(['Alice', 31, 'Engineer'])
person.items()      # key-value pairs

# Iteration
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

**Dict Comprehensions**

\`\`\`python
squared = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
\`\`\``,
      keyTakeaway: 'Lists store ordered sequences, dictionaries store key-value pairs. List/dict comprehensions make transformations elegant.',
      actionItem: 'Create a dictionary of 5 friends with their ages, then use comprehension to filter those over 25.',
    },
  },
  {
    id: 'py-exp-005',
    title: 'Object-Oriented Programming Basics',
    type: 'concept',
    duration: 15,
    xpReward: 120,
    content: {
      overview: 'Organize code with classes and objects - the foundation of scalable Python programs.',
      mainContent: `**Classes and Objects**

A class is a blueprint; an object is an instance:

\`\`\`python
class Dog:
    # Class attribute
    species = "Canis familiaris"

    # Constructor
    def __init__(self, name, age):
        self.name = name    # Instance attribute
        self.age = age

    # Instance method
    def bark(self):
        return f"{self.name} says woof!"

    # String representation
    def __str__(self):
        return f"{self.name}, {self.age} years old"

# Create objects
buddy = Dog("Buddy", 3)
print(buddy.bark())     # "Buddy says woof!"
\`\`\`

**Inheritance**

\`\`\`python
class GoldenRetriever(Dog):
    def __init__(self, name, age, trained=False):
        super().__init__(name, age)
        self.trained = trained

    def fetch(self):
        return f"{self.name} fetches the ball!"

goldie = GoldenRetriever("Goldie", 2, True)
goldie.bark()    # Inherited method
goldie.fetch()   # New method
\`\`\`

**Encapsulation**

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance   # Protected (convention)

    @property
    def balance(self):
        return self._balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
\`\`\`

**When to Use OOP**

- Modeling real-world entities
- Code that needs to scale
- When state and behavior are tightly coupled`,
      keyTakeaway: 'Classes bundle data (attributes) and behavior (methods). Use inheritance to extend and specialize.',
      actionItem: 'Create a class hierarchy for a simple game: Character base class with Warrior and Mage subclasses.',
    },
  },
  {
    id: 'py-exp-006',
    title: 'Error Handling and Debugging',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Write robust code that handles errors gracefully and debug effectively.',
      mainContent: `**Try-Except Blocks**

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Error: {e}")
else:
    print("Success!")  # Runs if no exception
finally:
    print("Always runs")
\`\`\`

**Common Exceptions**

| Exception | Cause |
|-----------|-------|
| ValueError | Wrong value type |
| TypeError | Wrong operation for type |
| KeyError | Dict key not found |
| IndexError | List index out of range |
| FileNotFoundError | File doesn't exist |

**Raising Exceptions**

\`\`\`python
def divide(a, b):
    if b == 0:
        raise ValueError("Divisor cannot be zero")
    return a / b
\`\`\`

**Debugging Techniques**

\`\`\`python
# Print debugging
print(f"DEBUG: x = {x}")

# Assert statements
assert x > 0, "x must be positive"

# Python debugger
import pdb; pdb.set_trace()

# Logging (better than print)
import logging
logging.debug(f"x = {x}")
\`\`\`

**Best Practices**

- Catch specific exceptions, not bare except
- Don't silence errors without logging
- Use finally for cleanup (closing files, connections)
- Fail fast with assertions during development`,
      keyTakeaway: 'Handle exceptions gracefully with try-except. Catch specific errors and use logging for production code.',
      actionItem: 'Add error handling to a function that reads a file - handle FileNotFoundError and other potential issues.',
    },
  },
  {
    id: 'py-exp-007',
    title: 'Working with Files',
    type: 'concept',
    duration: 12,
    xpReward: 105,
    content: {
      overview: 'Read, write, and manipulate files - essential for data processing.',
      mainContent: `**Reading Files**

\`\`\`python
# Best practice: context manager
with open('data.txt', 'r') as f:
    content = f.read()      # Entire file as string

with open('data.txt', 'r') as f:
    lines = f.readlines()   # List of lines

with open('data.txt', 'r') as f:
    for line in f:          # Memory efficient
        print(line.strip())
\`\`\`

**Writing Files**

\`\`\`python
with open('output.txt', 'w') as f:  # Overwrite
    f.write("Hello\\n")
    f.writelines(["Line 1\\n", "Line 2\\n"])

with open('output.txt', 'a') as f:  # Append
    f.write("New line\\n")
\`\`\`

**Working with CSV**

\`\`\`python
import csv

# Reading
with open('data.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['name'], row['age'])

# Writing
with open('output.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'age'])
    writer.writeheader()
    writer.writerow({'name': 'Alice', 'age': 30})
\`\`\`

**Working with JSON**

\`\`\`python
import json

# Read
with open('data.json', 'r') as f:
    data = json.load(f)

# Write
with open('output.json', 'w') as f:
    json.dump(data, f, indent=2)
\`\`\`

**Path Handling**

\`\`\`python
from pathlib import Path

path = Path('data') / 'file.txt'
path.exists()
path.is_file()
path.read_text()
\`\`\``,
      keyTakeaway: 'Always use context managers (with statement) for file operations. Use pathlib for cross-platform path handling.',
      actionItem: 'Write a script that reads a CSV file, processes the data, and writes results to a new CSV.',
    },
  },
  {
    id: 'py-exp-008',
    title: 'Modules and Packages',
    type: 'concept',
    duration: 11,
    xpReward: 100,
    content: {
      overview: 'Organize code into reusable modules and leverage Python\'s vast ecosystem.',
      mainContent: `**Importing Modules**

\`\`\`python
import math
math.sqrt(16)           # 4.0

from math import sqrt, pi
sqrt(16)                # 4.0

from math import *      # Import all (avoid!)

import numpy as np      # Alias
\`\`\`

**Creating Modules**

Any .py file is a module:

\`\`\`python
# helpers.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

# main.py
from helpers import greet, PI
\`\`\`

**Packages**

Directories with __init__.py:

\`\`\`
mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
\`\`\`

**Essential Standard Library**

| Module | Purpose |
|--------|---------|
| os | Operating system interface |
| sys | System-specific parameters |
| datetime | Date and time |
| collections | Specialized containers |
| itertools | Iterator functions |
| re | Regular expressions |

**Installing Packages**

\`\`\`bash
pip install pandas numpy matplotlib
pip install -r requirements.txt
\`\`\`

**Virtual Environments**

\`\`\`bash
python -m venv myenv
source myenv/bin/activate  # Linux/Mac
myenv\\Scripts\\activate    # Windows
pip install pandas
\`\`\``,
      keyTakeaway: 'Modules organize code; packages group modules. Always use virtual environments for project isolation.',
      actionItem: 'Create a virtual environment, install pandas and numpy, then create a simple module with helper functions.',
    },
  },

  // Section 2: Data Analysis with Pandas (8 lessons)
  {
    id: 'py-exp-009',
    title: 'Introduction to Pandas',
    type: 'concept',
    duration: 13,
    xpReward: 110,
    content: {
      overview: 'Meet Pandas - the essential library for data analysis in Python.',
      mainContent: `**What is Pandas?**

Pandas provides fast, flexible data structures for data manipulation and analysis. It's built on NumPy and is essential for data science.

**Installation**

\`\`\`bash
pip install pandas
\`\`\`

**Core Data Structures**

\`\`\`python
import pandas as pd

# Series: 1D labeled array
s = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])

# DataFrame: 2D labeled table
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
})
\`\`\`

**Reading Data**

\`\`\`python
# From CSV
df = pd.read_csv('data.csv')

# From Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# From JSON
df = pd.read_json('data.json')

# From SQL
df = pd.read_sql(query, connection)
\`\`\`

**Quick Exploration**

\`\`\`python
df.head()           # First 5 rows
df.tail()           # Last 5 rows
df.shape            # (rows, columns)
df.info()           # Column types, memory
df.describe()       # Statistics
df.columns          # Column names
df.dtypes           # Data types
\`\`\`

**Why Pandas?**

- Handle missing data elegantly
- Powerful data alignment
- Reshape and pivot data
- Time series functionality
- Optimized performance`,
      keyTakeaway: 'Pandas DataFrames are the foundation of data analysis in Python. Master read_csv, head(), info(), and describe() first.',
      actionItem: 'Load a CSV file with pd.read_csv() and explore it using head(), info(), describe(), and shape.',
    },
  },
  {
    id: 'py-exp-010',
    title: 'DataFrame Operations',
    type: 'concept',
    duration: 14,
    xpReward: 115,
    content: {
      overview: 'Master selecting, filtering, and manipulating DataFrame data.',
      mainContent: `**Selecting Data**

\`\`\`python
# Single column (returns Series)
df['name']
df.name

# Multiple columns (returns DataFrame)
df[['name', 'age']]

# By position
df.iloc[0]          # First row
df.iloc[0:3]        # Rows 0-2
df.iloc[0, 1]       # Row 0, column 1

# By label
df.loc[0]           # Row with index 0
df.loc[0:2, 'name'] # Rows 0-2, 'name' column
\`\`\`

**Filtering Data**

\`\`\`python
# Boolean indexing
df[df['age'] > 25]

# Multiple conditions
df[(df['age'] > 25) & (df['city'] == 'NYC')]

# Query method (cleaner)
df.query('age > 25 and city == "NYC"')

# isin for multiple values
df[df['city'].isin(['NYC', 'LA'])]
\`\`\`

**Adding/Modifying Columns**

\`\`\`python
# New column
df['senior'] = df['age'] > 30

# Apply function
df['name_upper'] = df['name'].apply(str.upper)

# Conditional column
df['category'] = df['age'].apply(
    lambda x: 'young' if x < 30 else 'older'
)
\`\`\`

**Sorting**

\`\`\`python
df.sort_values('age')
df.sort_values('age', ascending=False)
df.sort_values(['city', 'age'])
\`\`\`

**Dropping Data**

\`\`\`python
df.drop('column_name', axis=1)    # Drop column
df.drop([0, 1], axis=0)           # Drop rows
df.dropna()                        # Drop rows with NaN
\`\`\``,
      keyTakeaway: 'Use iloc for position-based selection, loc for label-based. Boolean indexing is powerful for filtering.',
      actionItem: 'Filter a dataset to find all records matching multiple criteria, then sort the results.',
    },
  },
  {
    id: 'py-exp-011',
    title: 'Data Cleaning with Pandas',
    type: 'concept',
    duration: 15,
    xpReward: 120,
    content: {
      overview: 'Transform messy real-world data into clean, analysis-ready datasets.',
      mainContent: `**Handling Missing Data**

\`\`\`python
# Detect missing values
df.isnull()
df.isnull().sum()           # Count per column
df.isnull().sum().sum()     # Total missing

# Drop missing
df.dropna()                 # Drop any row with NaN
df.dropna(subset=['age'])   # Only if 'age' is NaN
df.dropna(thresh=2)         # Keep rows with 2+ non-NaN

# Fill missing
df.fillna(0)
df.fillna(df.mean())
df['age'].fillna(df['age'].median(), inplace=True)
df.fillna(method='ffill')   # Forward fill
\`\`\`

**Fixing Data Types**

\`\`\`python
df['age'] = df['age'].astype(int)
df['date'] = pd.to_datetime(df['date'])
df['category'] = df['category'].astype('category')
\`\`\`

**Handling Duplicates**

\`\`\`python
df.duplicated()             # Boolean mask
df.duplicated().sum()       # Count duplicates
df.drop_duplicates()
df.drop_duplicates(subset=['name'])
\`\`\`

**String Operations**

\`\`\`python
df['name'] = df['name'].str.strip()
df['name'] = df['name'].str.lower()
df['name'] = df['name'].str.replace('old', 'new')
df['email'].str.contains('@gmail')
\`\`\`

**Renaming**

\`\`\`python
df.rename(columns={'old_name': 'new_name'})
df.columns = ['col1', 'col2', 'col3']
\`\`\`

**Replacing Values**

\`\`\`python
df.replace('old', 'new')
df.replace({'M': 'Male', 'F': 'Female'})
df['status'].replace({'Y': True, 'N': False})
\`\`\``,
      keyTakeaway: 'Data cleaning is 80% of the work. Master handling missing values, duplicates, and type conversions.',
      actionItem: 'Take a messy dataset and clean it: handle missing values, fix types, remove duplicates, standardize strings.',
    },
  },
  {
    id: 'py-exp-012',
    title: 'GroupBy and Aggregation',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Perform powerful split-apply-combine operations with groupby.',
      mainContent: `**GroupBy Basics**

\`\`\`python
# Split-Apply-Combine
grouped = df.groupby('city')

# Single aggregation
df.groupby('city')['age'].mean()

# Multiple aggregations
df.groupby('city')['age'].agg(['mean', 'min', 'max', 'count'])
\`\`\`

**Multiple Columns**

\`\`\`python
df.groupby(['city', 'gender'])['salary'].mean()
\`\`\`

**Named Aggregations**

\`\`\`python
df.groupby('city').agg(
    avg_age=('age', 'mean'),
    total_salary=('salary', 'sum'),
    count=('name', 'count')
)
\`\`\`

**Custom Functions**

\`\`\`python
def range_func(x):
    return x.max() - x.min()

df.groupby('city')['age'].agg(range_func)
\`\`\`

**Transform**

Apply function and return same-shape result:

\`\`\`python
# Normalize within groups
df['normalized'] = df.groupby('city')['salary'].transform(
    lambda x: (x - x.mean()) / x.std()
)
\`\`\`

**Filter Groups**

\`\`\`python
# Keep groups with more than 10 members
df.groupby('city').filter(lambda x: len(x) > 10)
\`\`\`

**Pivot Tables**

\`\`\`python
pd.pivot_table(
    df,
    values='salary',
    index='city',
    columns='gender',
    aggfunc='mean'
)
\`\`\``,
      keyTakeaway: 'GroupBy splits data, applies functions, and combines results. Use agg() for multiple aggregations, transform() to keep shape.',
      actionItem: 'Group a sales dataset by region and product, calculate total sales and average order value.',
    },
  },
  {
    id: 'py-exp-013',
    title: 'Merging and Joining DataFrames',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Combine multiple datasets using merge, join, and concatenation.',
      mainContent: `**Merge (SQL-style Joins)**

\`\`\`python
# Inner join (default)
pd.merge(df1, df2, on='key')

# Left join
pd.merge(df1, df2, on='key', how='left')

# Right join
pd.merge(df1, df2, on='key', how='right')

# Outer join
pd.merge(df1, df2, on='key', how='outer')
\`\`\`

**Different Column Names**

\`\`\`python
pd.merge(df1, df2, left_on='id', right_on='user_id')
\`\`\`

**Multiple Keys**

\`\`\`python
pd.merge(df1, df2, on=['city', 'year'])
\`\`\`

**Concatenation**

\`\`\`python
# Stack vertically
pd.concat([df1, df2])

# Stack horizontally
pd.concat([df1, df2], axis=1)

# Reset index
pd.concat([df1, df2], ignore_index=True)
\`\`\`

**Join Types Explained**

| Join | Result |
|------|--------|
| inner | Only matching keys |
| left | All from left + matches |
| right | All from right + matches |
| outer | All from both |

**Handling Duplicates**

\`\`\`python
# Suffixes for overlapping columns
pd.merge(df1, df2, on='key', suffixes=('_left', '_right'))
\`\`\`

**Validate Merge**

\`\`\`python
pd.merge(df1, df2, on='key', validate='one_to_one')
# Options: one_to_one, one_to_many, many_to_one, many_to_many
\`\`\``,
      keyTakeaway: 'Use merge() for SQL-style joins, concat() for stacking. Always verify your join type matches your intent.',
      actionItem: 'Merge a customers table with an orders table, then with a products table to create a complete sales analysis dataset.',
    },
  },
  {
    id: 'py-exp-014',
    title: 'Time Series with Pandas',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Work with dates, times, and time series data in Pandas.',
      mainContent: `**DateTime Basics**

\`\`\`python
# Convert to datetime
df['date'] = pd.to_datetime(df['date'])

# Parse specific format
df['date'] = pd.to_datetime(df['date'], format='%Y-%m-%d')

# Create date range
dates = pd.date_range('2024-01-01', periods=30, freq='D')
\`\`\`

**DateTime Components**

\`\`\`python
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['dayofweek'] = df['date'].dt.dayofweek
df['weekday_name'] = df['date'].dt.day_name()
\`\`\`

**Setting DateTime Index**

\`\`\`python
df = df.set_index('date')

# Select by date
df['2024']              # All of 2024
df['2024-01']           # January 2024
df['2024-01-01':'2024-01-15']  # Date range
\`\`\`

**Resampling**

\`\`\`python
# Downsampling (aggregate)
df.resample('M').mean()     # Monthly average
df.resample('W').sum()      # Weekly sum
df.resample('Q').last()     # Quarterly last value

# Upsampling (interpolate)
df.resample('H').interpolate()
\`\`\`

**Rolling Windows**

\`\`\`python
df['rolling_avg'] = df['value'].rolling(window=7).mean()
df['rolling_std'] = df['value'].rolling(window=7).std()
df['ewm'] = df['value'].ewm(span=7).mean()  # Exponential
\`\`\`

**Shifting**

\`\`\`python
df['prev_day'] = df['value'].shift(1)
df['next_day'] = df['value'].shift(-1)
df['pct_change'] = df['value'].pct_change()
\`\`\``,
      keyTakeaway: 'Use pd.to_datetime() to parse dates, set datetime index for time-based selection, resample() for aggregation.',
      actionItem: 'Load stock price data, calculate 7-day and 30-day moving averages, and compute daily returns.',
    },
  },
  {
    id: 'py-exp-015',
    title: 'Exploratory Data Analysis',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Systematically explore datasets to understand patterns, anomalies, and relationships.',
      mainContent: `**EDA Framework**

1. Understand the data structure
2. Check data quality
3. Univariate analysis
4. Bivariate analysis
5. Document insights

**Step 1: Structure**

\`\`\`python
df.shape
df.info()
df.columns
df.dtypes
df.head()
\`\`\`

**Step 2: Data Quality**

\`\`\`python
# Missing values
df.isnull().sum()
df.isnull().sum() / len(df) * 100  # Percentage

# Duplicates
df.duplicated().sum()

# Unique values
df['column'].nunique()
df['column'].value_counts()
\`\`\`

**Step 3: Univariate Analysis**

\`\`\`python
# Numerical
df.describe()
df['column'].hist()
df['column'].plot(kind='box')

# Categorical
df['category'].value_counts()
df['category'].value_counts().plot(kind='bar')
\`\`\`

**Step 4: Bivariate Analysis**

\`\`\`python
# Numerical vs Numerical
df.corr()
df.plot.scatter(x='col1', y='col2')

# Categorical vs Numerical
df.groupby('category')['value'].mean()
df.boxplot(column='value', by='category')

# Categorical vs Categorical
pd.crosstab(df['cat1'], df['cat2'])
\`\`\`

**Quick EDA Libraries**

\`\`\`python
# Automated EDA
import pandas_profiling
profile = pandas_profiling.ProfileReport(df)

# Or use ydata-profiling, sweetviz, dataprep
\`\`\``,
      keyTakeaway: 'EDA is systematic: structure → quality → univariate → bivariate. Let the data guide your questions.',
      actionItem: 'Perform complete EDA on a new dataset: document 5 key insights and 3 data quality issues.',
    },
  },
  {
    id: 'py-exp-016',
    title: 'NumPy Essentials',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Master NumPy arrays - the foundation of scientific computing in Python.',
      mainContent: `**NumPy Arrays**

\`\`\`python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
zeros = np.zeros((3, 4))
ones = np.ones((2, 3))
range_arr = np.arange(0, 10, 2)
linspace = np.linspace(0, 1, 5)
\`\`\`

**Array Operations**

\`\`\`python
# Element-wise operations
arr * 2
arr + arr
arr ** 2
np.sqrt(arr)

# Aggregations
arr.sum()
arr.mean()
arr.std()
arr.min(), arr.max()
\`\`\`

**Indexing and Slicing**

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

arr[0, 0]           # 1
arr[0, :]           # First row
arr[:, 0]           # First column
arr[0:2, 1:3]       # Subarray

# Boolean indexing
arr[arr > 5]
\`\`\`

**Reshaping**

\`\`\`python
arr.reshape(3, 3)
arr.flatten()
arr.T               # Transpose
\`\`\`

**Broadcasting**

\`\`\`python
# Operations on different shapes
arr = np.array([[1, 2, 3], [4, 5, 6]])
arr + np.array([10, 20, 30])  # Broadcasts
\`\`\`

**Linear Algebra**

\`\`\`python
np.dot(a, b)        # Dot product
np.matmul(a, b)     # Matrix multiplication
np.linalg.inv(a)    # Inverse
np.linalg.det(a)    # Determinant
\`\`\`

**Random**

\`\`\`python
np.random.rand(3, 3)      # Uniform 0-1
np.random.randn(3, 3)     # Normal distribution
np.random.randint(0, 10, (3, 3))
\`\`\``,
      keyTakeaway: 'NumPy arrays are faster than lists for numerical operations. Master indexing, broadcasting, and aggregations.',
      actionItem: 'Create a 100x100 random matrix, calculate row and column means, and find values above the 95th percentile.',
    },
  },

  // Section 3: Data Visualization (8 lessons)
  {
    id: 'py-exp-017',
    title: 'Matplotlib Fundamentals',
    type: 'concept',
    duration: 14,
    xpReward: 115,
    content: {
      overview: 'Create publication-quality visualizations with Matplotlib.',
      mainContent: `**Basic Plotting**

\`\`\`python
import matplotlib.pyplot as plt

# Simple line plot
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('My Plot')
plt.show()
\`\`\`

**Figure and Axes**

\`\`\`python
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(x, y)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_title('Title')
\`\`\`

**Multiple Subplots**

\`\`\`python
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
axes[0, 0].plot(x, y)
axes[0, 1].bar(categories, values)
axes[1, 0].scatter(x, y)
axes[1, 1].hist(data)
plt.tight_layout()
\`\`\`

**Common Plot Types**

\`\`\`python
plt.plot(x, y)              # Line
plt.scatter(x, y)           # Scatter
plt.bar(x, height)          # Bar
plt.barh(y, width)          # Horizontal bar
plt.hist(data, bins=20)     # Histogram
plt.pie(sizes, labels=labels)  # Pie
plt.boxplot(data)           # Box plot
\`\`\`

**Customization**

\`\`\`python
plt.plot(x, y,
         color='red',
         linestyle='--',
         linewidth=2,
         marker='o',
         label='Series 1')
plt.legend()
plt.grid(True)
\`\`\`

**Saving Figures**

\`\`\`python
plt.savefig('plot.png', dpi=300, bbox_inches='tight')
plt.savefig('plot.pdf')
\`\`\``,
      keyTakeaway: 'Use fig, ax = plt.subplots() for control. Always label axes and add titles.',
      actionItem: 'Create a 2x2 subplot showing different visualizations of the same dataset.',
    },
  },
  {
    id: 'py-exp-018',
    title: 'Seaborn for Statistical Visualization',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Create beautiful statistical graphics with Seaborn\'s high-level interface.',
      mainContent: `**Getting Started**

\`\`\`python
import seaborn as sns
import matplotlib.pyplot as plt

# Set style
sns.set_style('whitegrid')
sns.set_palette('husl')
\`\`\`

**Distribution Plots**

\`\`\`python
# Histogram + KDE
sns.histplot(data=df, x='value', kde=True)

# KDE only
sns.kdeplot(data=df, x='value')

# Box plot
sns.boxplot(data=df, x='category', y='value')

# Violin plot
sns.violinplot(data=df, x='category', y='value')
\`\`\`

**Categorical Plots**

\`\`\`python
# Count plot
sns.countplot(data=df, x='category')

# Bar plot (with aggregation)
sns.barplot(data=df, x='category', y='value')

# Strip plot
sns.stripplot(data=df, x='category', y='value')

# Swarm plot
sns.swarmplot(data=df, x='category', y='value')
\`\`\`

**Relationship Plots**

\`\`\`python
# Scatter with regression
sns.regplot(data=df, x='x', y='y')

# Scatter with hue
sns.scatterplot(data=df, x='x', y='y', hue='category')

# Pair plot (all combinations)
sns.pairplot(df, hue='category')
\`\`\`

**Heatmaps**

\`\`\`python
# Correlation heatmap
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
\`\`\`

**FacetGrid**

\`\`\`python
g = sns.FacetGrid(df, col='category', row='gender')
g.map(sns.histplot, 'value')
\`\`\``,
      keyTakeaway: 'Seaborn excels at statistical visualization. Use hue for grouping, FacetGrid for multiple subplots.',
      actionItem: 'Create a pair plot colored by category and a correlation heatmap for a dataset.',
    },
  },
  {
    id: 'py-exp-019',
    title: 'Interactive Visualizations with Plotly',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Build interactive, web-ready visualizations with Plotly.',
      mainContent: `**Plotly Express (Quick Plots)**

\`\`\`python
import plotly.express as px

# Line chart
fig = px.line(df, x='date', y='value', title='Trend')
fig.show()

# Scatter
fig = px.scatter(df, x='x', y='y', color='category',
                 size='size', hover_data=['name'])

# Bar
fig = px.bar(df, x='category', y='value', color='group')

# Histogram
fig = px.histogram(df, x='value', nbins=30)
\`\`\`

**Advanced Features**

\`\`\`python
# Animated scatter
fig = px.scatter(df, x='gdp', y='life_exp',
                 animation_frame='year',
                 size='population',
                 color='continent')

# Sunburst
fig = px.sunburst(df, path=['continent', 'country'],
                  values='population')

# Treemap
fig = px.treemap(df, path=['category', 'subcategory'],
                 values='value')
\`\`\`

**Customization**

\`\`\`python
fig.update_layout(
    title='My Chart',
    xaxis_title='X Axis',
    yaxis_title='Y Axis',
    template='plotly_dark'
)

fig.update_traces(marker=dict(size=10))
\`\`\`

**Saving**

\`\`\`python
fig.write_html('chart.html')
fig.write_image('chart.png')
\`\`\`

**Dash for Dashboards**

\`\`\`python
from dash import Dash, dcc, html

app = Dash(__name__)
app.layout = html.Div([
    dcc.Graph(figure=fig)
])
app.run_server()
\`\`\``,
      keyTakeaway: 'Plotly creates interactive, web-ready charts. Use Plotly Express for quick plots, Dash for full dashboards.',
      actionItem: 'Create an interactive scatter plot with hover info and a dropdown to filter categories.',
    },
  },
  {
    id: 'py-exp-020',
    title: 'Choosing the Right Chart',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Select the most effective visualization for your data and message.',
      mainContent: `**Chart Selection Guide**

| Data Type | Goal | Chart |
|-----------|------|-------|
| Numerical | Distribution | Histogram, KDE, Box |
| Numerical | Trend over time | Line |
| Numerical vs Numerical | Relationship | Scatter |
| Categorical | Comparison | Bar |
| Categorical | Composition | Pie, Stacked Bar |
| Categorical x Numerical | Comparison | Box, Bar |
| Part of Whole | Composition | Pie, Treemap |
| Geographic | Location | Map, Choropleth |

**Distribution Questions**

- Shape? → Histogram
- Outliers? → Box plot
- Compare distributions? → Violin, overlapping histograms

**Comparison Questions**

- Rank? → Bar chart
- Change over time? → Line chart
- Part of whole? → Stacked bar, pie

**Relationship Questions**

- Two variables? → Scatter
- Correlation matrix? → Heatmap
- Three+ variables? → Scatter with size/color

**Common Mistakes**

- Pie charts with too many slices
- 3D charts (usually unnecessary)
- Dual y-axes (confusing)
- Wrong chart for the story
- Missing labels and context

**Best Practices**

- Start with zero baseline for bars
- Sort categories meaningfully
- Use color purposefully
- Remove chartjunk
- Tell one story per chart`,
      keyTakeaway: 'Let your question guide chart choice: distribution, comparison, relationship, or composition?',
      actionItem: 'Take 5 different questions about a dataset and choose the best chart type for each.',
    },
  },
  {
    id: 'py-exp-021',
    title: 'Building Dashboards',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Create interactive data dashboards that tell compelling stories.',
      mainContent: `**Dashboard Design Principles**

1. **Know your audience** - Executives vs analysts
2. **One page, one story** - Focus on key metrics
3. **Progressive disclosure** - Overview → detail
4. **Consistent design** - Colors, fonts, layout

**Dashboard Layout**

\`\`\`
+------------------+------------------+
|   Key Metric 1   |   Key Metric 2   |
+------------------+------------------+
|                                     |
|         Main Visualization          |
|                                     |
+------------------+------------------+
|  Supporting 1    |   Supporting 2   |
+------------------+------------------+
\`\`\`

**Streamlit (Fastest)**

\`\`\`python
import streamlit as st
import pandas as pd
import plotly.express as px

st.title('Sales Dashboard')

# Sidebar filters
category = st.sidebar.selectbox('Category', options)

# Metrics
col1, col2 = st.columns(2)
col1.metric('Total Sales', '$1.2M', '+12%')
col2.metric('Orders', '1,234', '-5%')

# Charts
st.plotly_chart(fig)

# Run: streamlit run app.py
\`\`\`

**Key Components**

- KPI cards at top
- Filters/controls in sidebar
- Main chart prominently displayed
- Supporting charts below
- Data tables for detail

**Interactivity**

- Filters that update all charts
- Drill-down capability
- Tooltips with detail
- Export options`,
      keyTakeaway: 'Good dashboards focus on key metrics first, then allow drilling into detail. Use Streamlit for rapid prototyping.',
      actionItem: 'Build a simple dashboard with Streamlit: 2 KPI cards, 1 main chart, and a filter.',
    },
  },
  {
    id: 'py-exp-022',
    title: 'Data Storytelling',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Transform data insights into compelling narratives that drive action.',
      mainContent: `**The Story Structure**

1. **Setup** - Context and why it matters
2. **Rising Action** - The data journey
3. **Climax** - The key insight
4. **Resolution** - What to do about it

**The SCR Framework**

- **Situation**: Where are we now?
- **Complication**: What's the problem/opportunity?
- **Resolution**: What should we do?

**Visual Storytelling Techniques**

\`\`\`python
# Highlight the key point
colors = ['gray'] * len(data)
colors[max_idx] = 'red'  # Highlight max

# Annotate insights
ax.annotate('Peak here!',
            xy=(x, y),
            xytext=(x+1, y+10),
            arrowprops=dict(arrowstyle='->'))

# Use reference lines
ax.axhline(y=target, color='red', linestyle='--',
           label='Target')
\`\`\`

**Presentation Tips**

1. Lead with the insight, not the data
2. One message per slide/chart
3. Use headlines that state the conclusion
4. Remove unnecessary elements
5. Practice the narrative flow

**Headlines That Work**

❌ "Sales by Region"
✅ "West Region Sales Grew 40%, Leading All Regions"

❌ "Customer Satisfaction Trends"
✅ "Satisfaction Dropped After Price Increase"

**The 5-Second Rule**

Your audience should grasp the main point within 5 seconds of seeing your visualization.`,
      keyTakeaway: 'Don\'t show data, tell stories with data. Lead with insights, use headlines that conclude.',
      actionItem: 'Take an existing chart and reframe it as a story: add a headline that states the insight.',
    },
  },
  {
    id: 'py-exp-023',
    title: 'Visualization Best Practices',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Apply design principles that make your visualizations clear and effective.',
      mainContent: `**Data-Ink Ratio**

Maximize data, minimize ink:
- Remove gridlines (or make subtle)
- Remove borders and boxes
- Remove unnecessary legends
- Remove 3D effects

**Color Guidelines**

\`\`\`python
# Sequential: one variable, low to high
cmap='Blues'

# Diverging: deviation from center
cmap='RdBu'

# Categorical: distinct groups
palette='Set2'

# Colorblind-safe
palette='colorblind'
\`\`\`

**Typography**

- Title: Clear, concise, ideally stating the insight
- Axis labels: Always include with units
- Font size: Readable at intended display size
- Avoid ALL CAPS except sparingly

**Layout and Spacing**

\`\`\`python
plt.tight_layout()
plt.subplots_adjust(hspace=0.3, wspace=0.3)
fig.set_size_inches(10, 6)  # Golden ratio
\`\`\`

**Accessibility**

- Sufficient contrast
- Don't rely solely on color
- Use patterns/shapes as backup
- Include alt text for web

**Common Fixes**

\`\`\`python
# Rotate x labels if crowded
plt.xticks(rotation=45, ha='right')

# Format large numbers
from matplotlib.ticker import FuncFormatter
ax.yaxis.set_major_formatter(
    FuncFormatter(lambda x, p: f'{x/1e6:.1f}M')
)

# Add commas
ax.yaxis.set_major_formatter(
    FuncFormatter(lambda x, p: f'{x:,.0f}')
)
\`\`\``,
      keyTakeaway: 'Less is more. Remove chartjunk, use color purposefully, always label clearly.',
      actionItem: 'Take an existing visualization and apply 3 improvements from these best practices.',
    },
  },
  {
    id: 'py-exp-024',
    title: 'Custom Styling and Themes',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Create consistent, branded visualizations with custom styles.',
      mainContent: `**Matplotlib Styles**

\`\`\`python
# Built-in styles
plt.style.use('seaborn-v0_8')
plt.style.use('ggplot')
plt.style.use('fivethirtyeight')

# List available styles
print(plt.style.available)
\`\`\`

**Custom Style Sheet**

Create mystyle.mplstyle:
\`\`\`
axes.facecolor: white
axes.edgecolor: gray
axes.labelcolor: #333333
axes.titlesize: 14
axes.labelsize: 12
figure.facecolor: white
font.family: sans-serif
grid.color: #EEEEEE
grid.linestyle: -
lines.linewidth: 2
\`\`\`

\`\`\`python
plt.style.use('mystyle.mplstyle')
\`\`\`

**Seaborn Themes**

\`\`\`python
sns.set_theme(style='whitegrid',
              palette='husl',
              font_scale=1.2)

# Custom palette
custom_palette = ['#FF6B6B', '#4ECDC4', '#45B7D1']
sns.set_palette(custom_palette)
\`\`\`

**Plotly Templates**

\`\`\`python
import plotly.io as pio

# Built-in templates
pio.templates.default = 'plotly_dark'

# Custom template
custom_template = {
    'layout': {
        'font': {'family': 'Arial', 'size': 14},
        'paper_bgcolor': 'white',
        'plot_bgcolor': '#f8f9fa'
    }
}
\`\`\`

**Color Palettes**

\`\`\`python
# Create custom palette
colors = sns.color_palette('husl', 8)
colors = sns.diverging_palette(220, 20, n=7)

# Company colors
brand_colors = {
    'primary': '#1a73e8',
    'secondary': '#ea4335',
    'accent': '#34a853'
}
\`\`\``,
      keyTakeaway: 'Consistent styling builds trust and recognition. Create reusable style sheets for your projects.',
      actionItem: 'Create a custom color palette and style sheet that matches your company or project branding.',
    },
  },

  // Section 4: Statistics & ML Basics (8 lessons)
  {
    id: 'py-exp-025',
    title: 'Descriptive Statistics',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Summarize and describe data with measures of central tendency and spread.',
      mainContent: `**Measures of Central Tendency**

\`\`\`python
import numpy as np
from scipy import stats

data = [1, 2, 2, 3, 3, 3, 4, 5]

np.mean(data)       # 2.875 - arithmetic average
np.median(data)     # 3.0 - middle value
stats.mode(data)    # 3 - most frequent
\`\`\`

**When to Use Each**

| Measure | Use When |
|---------|----------|
| Mean | Symmetric distribution |
| Median | Skewed data, outliers present |
| Mode | Categorical data |

**Measures of Spread**

\`\`\`python
np.std(data)        # Standard deviation
np.var(data)        # Variance
np.percentile(data, [25, 50, 75])  # Quartiles

# Range
np.max(data) - np.min(data)

# IQR (Interquartile Range)
q75, q25 = np.percentile(data, [75, 25])
iqr = q75 - q25
\`\`\`

**Pandas Describe**

\`\`\`python
df.describe()
# Returns: count, mean, std, min, 25%, 50%, 75%, max
\`\`\`

**Skewness and Kurtosis**

\`\`\`python
from scipy.stats import skew, kurtosis

skew(data)      # < 0: left-skewed, > 0: right-skewed
kurtosis(data)  # > 0: heavy tails, < 0: light tails
\`\`\`

**Correlation**

\`\`\`python
# Pearson (linear relationship)
np.corrcoef(x, y)[0, 1]

# Spearman (monotonic relationship)
stats.spearmanr(x, y)

# Full correlation matrix
df.corr()
\`\`\``,
      keyTakeaway: 'Use mean for symmetric data, median for skewed. Standard deviation measures spread around the mean.',
      actionItem: 'Calculate descriptive statistics for a dataset and explain what the skewness tells you.',
    },
  },
  {
    id: 'py-exp-026',
    title: 'Probability Fundamentals',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understand probability concepts essential for data science and statistics.',
      mainContent: `**Basic Probability**

\`\`\`python
# P(A) = favorable outcomes / total outcomes
p_heads = 1 / 2  # Fair coin

# Complement
p_not_a = 1 - p_a

# Addition (OR)
# P(A or B) = P(A) + P(B) - P(A and B)

# Multiplication (AND, independent)
# P(A and B) = P(A) * P(B)
\`\`\`

**Conditional Probability**

\`\`\`python
# P(A|B) = P(A and B) / P(B)
# "Probability of A given B"
\`\`\`

**Bayes' Theorem**

\`\`\`python
# P(A|B) = P(B|A) * P(A) / P(B)

# Example: Disease testing
p_disease = 0.01        # Prior: 1% have disease
p_positive_given_disease = 0.99  # Sensitivity
p_positive_given_healthy = 0.05  # False positive rate

p_positive = (p_positive_given_disease * p_disease +
              p_positive_given_healthy * (1 - p_disease))

p_disease_given_positive = (p_positive_given_disease * p_disease) / p_positive
# Often surprisingly low!
\`\`\`

**Expected Value**

\`\`\`python
# E[X] = sum(x * P(x))
outcomes = [1, 2, 3, 4, 5, 6]
probs = [1/6] * 6
expected = sum(x * p for x, p in zip(outcomes, probs))
# 3.5 for a fair die
\`\`\`

**Simulating Probability**

\`\`\`python
import numpy as np

# Monte Carlo simulation
n_simulations = 10000
results = np.random.choice([0, 1], size=n_simulations, p=[0.5, 0.5])
estimated_prob = results.mean()
\`\`\``,
      keyTakeaway: 'Bayes\' theorem updates beliefs with evidence. Simulation can solve complex probability problems.',
      actionItem: 'Simulate the Monty Hall problem and verify that switching wins 2/3 of the time.',
    },
  },
  {
    id: 'py-exp-027',
    title: 'Common Probability Distributions',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Recognize and work with the distributions that appear everywhere in data.',
      mainContent: `**Normal Distribution**

\`\`\`python
from scipy import stats
import numpy as np

# Create distribution
normal = stats.norm(loc=0, scale=1)  # mean=0, std=1

# Generate samples
samples = normal.rvs(size=1000)

# Probability density
normal.pdf(0)  # Height at x=0

# Cumulative probability
normal.cdf(1.96)  # P(X <= 1.96) ≈ 0.975

# Percentile
normal.ppf(0.95)  # 95th percentile ≈ 1.645
\`\`\`

**Key Distributions**

| Distribution | Use Case | Parameters |
|--------------|----------|------------|
| Normal | Natural phenomena | mean, std |
| Binomial | Success/failure counts | n, p |
| Poisson | Event counts per interval | lambda |
| Exponential | Time between events | lambda |
| Uniform | Equal probability | min, max |

**Binomial Distribution**

\`\`\`python
# n trials, probability p of success
binom = stats.binom(n=10, p=0.5)
binom.pmf(5)    # P(exactly 5 successes)
binom.cdf(5)    # P(5 or fewer successes)
\`\`\`

**Poisson Distribution**

\`\`\`python
# Events per interval (lambda = average rate)
poisson = stats.poisson(mu=3)
poisson.pmf(5)  # P(exactly 5 events)
\`\`\`

**Central Limit Theorem**

Sample means are normally distributed regardless of population distribution (with large enough n).

\`\`\`python
# Demonstrate CLT
sample_means = [np.random.exponential(1, 30).mean()
                for _ in range(1000)]
# sample_means will be approximately normal!
\`\`\``,
      keyTakeaway: 'Normal distribution appears everywhere due to CLT. Know when to use binomial, Poisson, and exponential.',
      actionItem: 'Generate samples from 3 different distributions and plot their histograms.',
    },
  },
  {
    id: 'py-exp-028',
    title: 'Hypothesis Testing',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Make data-driven decisions using statistical hypothesis tests.',
      mainContent: `**The Framework**

1. State null hypothesis (H0) and alternative (H1)
2. Choose significance level (α, typically 0.05)
3. Calculate test statistic and p-value
4. Compare p-value to α
5. Draw conclusion

**One-Sample t-Test**

\`\`\`python
from scipy import stats

# Is sample mean different from population mean?
sample = [2.3, 2.5, 2.8, 2.1, 2.7]
population_mean = 2.0

t_stat, p_value = stats.ttest_1samp(sample, population_mean)
# p < 0.05 → reject H0
\`\`\`

**Two-Sample t-Test**

\`\`\`python
# Are two groups different?
group_a = [23, 25, 28, 24, 26]
group_b = [30, 32, 28, 35, 31]

t_stat, p_value = stats.ttest_ind(group_a, group_b)
\`\`\`

**Chi-Square Test**

\`\`\`python
# Categorical independence
observed = [[10, 20], [30, 40]]
chi2, p_value, dof, expected = stats.chi2_contingency(observed)
\`\`\`

**Interpreting p-values**

| p-value | Evidence against H0 |
|---------|---------------------|
| > 0.10 | Little or none |
| 0.05-0.10 | Weak |
| 0.01-0.05 | Moderate |
| < 0.01 | Strong |

**Common Mistakes**

- p-value is NOT probability H0 is true
- Statistical significance ≠ practical significance
- Multiple testing requires correction
- Always report effect size too`,
      keyTakeaway: 'p-value measures evidence against the null hypothesis. Always consider practical significance alongside statistical.',
      actionItem: 'Conduct an A/B test analysis: calculate the t-test and interpret whether the difference is significant.',
    },
  },
  {
    id: 'py-exp-029',
    title: 'Linear Regression',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Predict continuous outcomes and understand relationships with linear regression.',
      mainContent: `**Simple Linear Regression**

y = β₀ + β₁x + ε

\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

model = LinearRegression()
model.fit(X, y)

print(f"Intercept: {model.intercept_}")
print(f"Slope: {model.coef_[0]}")

# Predict
model.predict([[6]])
\`\`\`

**Multiple Regression**

\`\`\`python
from sklearn.model_selection import train_test_split

X = df[['feature1', 'feature2', 'feature3']]
y = df['target']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)
\`\`\`

**Evaluation Metrics**

\`\`\`python
from sklearn.metrics import r2_score, mean_squared_error

y_pred = model.predict(X_test)

r2 = r2_score(y_test, y_pred)           # 0-1, higher better
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
\`\`\`

**Assumptions**

1. Linear relationship
2. Independence of residuals
3. Homoscedasticity (constant variance)
4. Normal residuals

**Checking Assumptions**

\`\`\`python
residuals = y_test - y_pred
plt.scatter(y_pred, residuals)
plt.axhline(0, color='red')
plt.xlabel('Predicted')
plt.ylabel('Residuals')
\`\`\``,
      keyTakeaway: 'Linear regression predicts continuous outcomes. Check R² for fit quality, residuals for assumption violations.',
      actionItem: 'Build a regression model, evaluate it with R² and RMSE, and check the residual plot.',
    },
  },
  {
    id: 'py-exp-030',
    title: 'Classification Basics',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Predict categories with classification algorithms.',
      mainContent: `**Logistic Regression**

\`\`\`python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

# Predict class
y_pred = model.predict(X_test)

# Predict probability
y_proba = model.predict_proba(X_test)
\`\`\`

**Decision Trees**

\`\`\`python
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier(max_depth=5)
model.fit(X_train, y_train)

# Visualize
from sklearn.tree import plot_tree
plot_tree(model, feature_names=feature_names)
\`\`\`

**Random Forest**

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Feature importance
importances = model.feature_importances_
\`\`\`

**Evaluation Metrics**

\`\`\`python
from sklearn.metrics import (accuracy_score, precision_score,
    recall_score, f1_score, confusion_matrix)

accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

cm = confusion_matrix(y_test, y_pred)
\`\`\`

**Confusion Matrix**

|  | Predicted Pos | Predicted Neg |
|--|---------------|---------------|
| Actual Pos | TP | FN |
| Actual Neg | FP | TN |

- Precision = TP / (TP + FP)
- Recall = TP / (TP + FN)
- F1 = 2 * (Precision * Recall) / (Precision + Recall)`,
      keyTakeaway: 'Use accuracy for balanced classes, F1 for imbalanced. Random Forest is a strong baseline.',
      actionItem: 'Train a classifier, create a confusion matrix, and calculate precision, recall, and F1.',
    },
  },
  {
    id: 'py-exp-031',
    title: 'Model Evaluation and Validation',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Properly evaluate models to ensure they generalize to new data.',
      mainContent: `**Train-Test Split**

\`\`\`python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
\`\`\`

**Cross-Validation**

\`\`\`python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"Mean: {scores.mean():.3f} (+/- {scores.std()*2:.3f})")
\`\`\`

**Overfitting vs Underfitting**

| Problem | Training Score | Test Score | Solution |
|---------|----------------|------------|----------|
| Underfit | Low | Low | More features, complex model |
| Good fit | High | High | Keep it! |
| Overfit | Very high | Low | Regularization, simpler model |

**Learning Curves**

\`\`\`python
from sklearn.model_selection import learning_curve

train_sizes, train_scores, test_scores = learning_curve(
    model, X, y, cv=5, n_jobs=-1,
    train_sizes=np.linspace(0.1, 1.0, 10)
)
\`\`\`

**Hyperparameter Tuning**

\`\`\`python
from sklearn.model_selection import GridSearchCV

param_grid = {
    'max_depth': [3, 5, 7, 10],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(model, param_grid, cv=5)
grid_search.fit(X_train, y_train)

print(grid_search.best_params_)
print(grid_search.best_score_)
\`\`\`

**ROC Curve**

\`\`\`python
from sklearn.metrics import roc_curve, roc_auc_score

fpr, tpr, thresholds = roc_curve(y_test, y_proba[:, 1])
auc = roc_auc_score(y_test, y_proba[:, 1])
\`\`\``,
      keyTakeaway: 'Always validate on held-out data. Use cross-validation for robust estimates, GridSearchCV for tuning.',
      actionItem: 'Use cross-validation and GridSearchCV to tune a model and report the best parameters.',
    },
  },
  {
    id: 'py-exp-032',
    title: 'Feature Engineering',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Create powerful features that improve model performance.',
      mainContent: `**Why Feature Engineering?**

"Applied machine learning is basically feature engineering" - Andrew Ng

**Numerical Features**

\`\`\`python
# Scaling
from sklearn.preprocessing import StandardScaler, MinMaxScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Log transform (for skewed data)
df['log_value'] = np.log1p(df['value'])

# Binning
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 50, 100],
                         labels=['youth', 'adult', 'middle', 'senior'])
\`\`\`

**Categorical Features**

\`\`\`python
# One-hot encoding
df_encoded = pd.get_dummies(df, columns=['category'])

# Label encoding
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df['category_encoded'] = le.fit_transform(df['category'])
\`\`\`

**DateTime Features**

\`\`\`python
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['dayofweek'] = df['date'].dt.dayofweek
df['is_weekend'] = df['dayofweek'].isin([5, 6])
df['quarter'] = df['date'].dt.quarter
\`\`\`

**Interaction Features**

\`\`\`python
df['price_per_sqft'] = df['price'] / df['sqft']
df['age_income'] = df['age'] * df['income']
\`\`\`

**Text Features**

\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer

vectorizer = TfidfVectorizer(max_features=1000)
X_text = vectorizer.fit_transform(df['text'])
\`\`\`

**Feature Selection**

\`\`\`python
from sklearn.feature_selection import SelectKBest, f_classif

selector = SelectKBest(f_classif, k=10)
X_selected = selector.fit_transform(X, y)
\`\`\``,
      keyTakeaway: 'Good features matter more than complex models. Create domain-relevant features and properly encode categoricals.',
      actionItem: 'Engineer 5 new features from a dataset: include a ratio, datetime extraction, and interaction term.',
    },
  },

  // Section 5: Real-World Projects (8 lessons)
  {
    id: 'py-exp-033',
    title: 'Web Scraping with Python',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Extract data from websites ethically and efficiently.',
      mainContent: `**Requests + BeautifulSoup**

\`\`\`python
import requests
from bs4 import BeautifulSoup

# Fetch page
response = requests.get('https://example.com')
soup = BeautifulSoup(response.content, 'html.parser')

# Find elements
title = soup.find('h1').text
links = soup.find_all('a')
prices = soup.select('.price')  # CSS selector
\`\`\`

**Navigating the DOM**

\`\`\`python
# Find by attribute
soup.find('div', {'class': 'product'})
soup.find('input', {'id': 'search'})

# Navigate relationships
element.parent
element.children
element.next_sibling
\`\`\`

**Handling Pagination**

\`\`\`python
all_items = []
for page in range(1, 11):
    url = f'https://example.com/page/{page}'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    items = soup.select('.item')
    all_items.extend(items)
    time.sleep(1)  # Be polite!
\`\`\`

**Best Practices**

- Check robots.txt
- Add delays between requests
- Use headers to identify yourself
- Handle errors gracefully
- Cache responses when possible

**Dynamic Content (Selenium)**

\`\`\`python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get('https://example.com')
element = driver.find_element(By.CLASS_NAME, 'dynamic-content')
driver.quit()
\`\`\``,
      keyTakeaway: 'Scrape responsibly: respect robots.txt, add delays, handle errors. Use Selenium for JavaScript-rendered pages.',
      actionItem: 'Scrape a simple website (with permission): extract titles and links from a listing page.',
    },
  },
  {
    id: 'py-exp-034',
    title: 'Working with APIs',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Access structured data from web services through APIs.',
      mainContent: `**REST API Basics**

\`\`\`python
import requests

# GET request
response = requests.get('https://api.example.com/data')
data = response.json()

# With parameters
params = {'page': 1, 'limit': 100}
response = requests.get(url, params=params)

# With headers (authentication)
headers = {'Authorization': 'Bearer YOUR_TOKEN'}
response = requests.get(url, headers=headers)
\`\`\`

**HTTP Methods**

| Method | Purpose |
|--------|---------|
| GET | Retrieve data |
| POST | Create data |
| PUT | Update data |
| DELETE | Remove data |

**POST Request**

\`\`\`python
payload = {'name': 'Alice', 'email': 'alice@example.com'}
response = requests.post(url, json=payload)
\`\`\`

**Error Handling**

\`\`\`python
response = requests.get(url)
response.raise_for_status()  # Raises exception for 4xx/5xx

# Or check manually
if response.status_code == 200:
    data = response.json()
elif response.status_code == 404:
    print('Not found')
\`\`\`

**Rate Limiting**

\`\`\`python
import time

for item_id in items:
    response = requests.get(f'{url}/{item_id}')
    data = response.json()
    results.append(data)
    time.sleep(0.5)  # Respect rate limits
\`\`\`

**Common APIs**

- OpenWeather, NASA, GitHub
- Twitter, Reddit, Spotify
- Google Maps, Yelp
- Financial: Alpha Vantage, Yahoo Finance`,
      keyTakeaway: 'APIs provide structured data access. Always handle errors, respect rate limits, and secure your API keys.',
      actionItem: 'Connect to a public API (weather, GitHub, etc.) and fetch data into a pandas DataFrame.',
    },
  },
  {
    id: 'py-exp-035',
    title: 'Automation Scripts',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Automate repetitive tasks to save time and reduce errors.',
      mainContent: `**File Automation**

\`\`\`python
import os
import shutil
from pathlib import Path

# Organize files by extension
downloads = Path('~/Downloads').expanduser()
for file in downloads.iterdir():
    if file.is_file():
        ext = file.suffix.lower()
        dest = downloads / ext[1:]  # Remove dot
        dest.mkdir(exist_ok=True)
        shutil.move(str(file), str(dest / file.name))
\`\`\`

**Email Automation**

\`\`\`python
import smtplib
from email.mime.text import MIMEText

def send_email(to, subject, body):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['To'] = to

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login('you@gmail.com', 'app_password')
        server.send_message(msg)
\`\`\`

**Excel Automation**

\`\`\`python
import openpyxl

wb = openpyxl.load_workbook('report.xlsx')
ws = wb.active

# Update cells
ws['A1'] = 'Updated Value'

# Add formula
ws['B10'] = '=SUM(B1:B9)'

wb.save('report_updated.xlsx')
\`\`\`

**Scheduling**

\`\`\`python
import schedule
import time

def job():
    print("Running scheduled task...")

schedule.every().day.at("09:00").do(job)
schedule.every(10).minutes.do(job)

while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`

**Command Line Interface**

\`\`\`python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--input', required=True)
parser.add_argument('--output', default='result.csv')
args = parser.parse_args()
\`\`\``,
      keyTakeaway: 'Automate repetitive tasks: file organization, emails, reports. Use schedule for recurring jobs, argparse for CLI tools.',
      actionItem: 'Create an automation script that organizes files, sends a summary email, or generates a daily report.',
    },
  },
  {
    id: 'py-exp-036',
    title: 'Building Data Pipelines',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Create reliable, reproducible data processing workflows.',
      mainContent: `**Pipeline Structure**

\`\`\`
Extract → Transform → Load (ETL)
1. Get data from sources
2. Clean and transform
3. Load to destination
\`\`\`

**Simple Pipeline**

\`\`\`python
def extract():
    """Load raw data from sources."""
    df = pd.read_csv('raw_data.csv')
    return df

def transform(df):
    """Clean and process data."""
    df = df.dropna()
    df['date'] = pd.to_datetime(df['date'])
    df['total'] = df['quantity'] * df['price']
    return df

def load(df):
    """Save processed data."""
    df.to_csv('processed_data.csv', index=False)
    # Or to database
    df.to_sql('table', engine, if_exists='replace')

# Run pipeline
raw = extract()
clean = transform(raw)
load(clean)
\`\`\`

**Sklearn Pipeline**

\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', LogisticRegression())
])

pipe.fit(X_train, y_train)
predictions = pipe.predict(X_test)
\`\`\`

**Error Handling**

\`\`\`python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def run_pipeline():
    try:
        logger.info("Starting extraction...")
        data = extract()
        logger.info(f"Extracted {len(data)} rows")

        logger.info("Transforming...")
        data = transform(data)

        logger.info("Loading...")
        load(data)
        logger.info("Pipeline complete!")

    except Exception as e:
        logger.error(f"Pipeline failed: {e}")
        raise
\`\`\``,
      keyTakeaway: 'Pipelines make data processing reproducible. Use logging for visibility, handle errors gracefully.',
      actionItem: 'Build an ETL pipeline that extracts from API, transforms data, and loads to CSV with logging.',
    },
  },
  {
    id: 'py-exp-037',
    title: 'Portfolio Project: End-to-End Analysis',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Build a complete data analysis project for your portfolio.',
      mainContent: `**Project Structure**

\`\`\`
my_project/
├── data/
│   ├── raw/
│   └── processed/
├── notebooks/
│   ├── 01_exploration.ipynb
│   └── 02_analysis.ipynb
├── src/
│   ├── __init__.py
│   ├── data_processing.py
│   └── visualization.py
├── requirements.txt
├── README.md
└── .gitignore
\`\`\`

**README Template**

\`\`\`markdown
# Project Title

## Overview
What problem does this solve?

## Data
- Source and description
- Size and features

## Key Findings
1. Finding one
2. Finding two

## Methods
- Tools used
- Approach taken

## How to Run
\\\`\\\`\\\`
pip install -r requirements.txt
python main.py
\\\`\\\`\\\`

## Results
Include visualizations and metrics
\`\`\`

**Project Ideas**

1. **Sales Analysis** - Trends, forecasting, customer segments
2. **A/B Test Analysis** - Statistical testing, recommendations
3. **Sentiment Analysis** - NLP on reviews/tweets
4. **Churn Prediction** - Classification model, feature importance
5. **Price Optimization** - Regression, elasticity analysis

**What Impresses Employers**

- Clean, documented code
- Clear problem statement
- Insightful visualizations
- Statistical rigor
- Actionable recommendations
- Reproducible results`,
      keyTakeaway: 'Portfolio projects demonstrate real skills. Include clear problem statements, clean code, and actionable insights.',
      actionItem: 'Start a portfolio project: define the problem, gather data, and create the project structure.',
    },
  },
  {
    id: 'py-exp-038',
    title: 'Deploying Data Applications',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Share your work by deploying dashboards and models to the web.',
      mainContent: `**Streamlit Deployment**

\`\`\`python
# app.py
import streamlit as st
import pandas as pd

st.title('My Data App')
uploaded = st.file_uploader('Upload CSV')
if uploaded:
    df = pd.read_csv(uploaded)
    st.dataframe(df)
\`\`\`

**Deploy to Streamlit Cloud**

1. Push code to GitHub
2. Go to share.streamlit.io
3. Connect repo
4. Deploy

**Flask API**

\`\`\`python
from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    prediction = model.predict([data['features']])
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

**Docker Basics**

\`\`\`dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["streamlit", "run", "app.py"]
\`\`\`

**Deployment Options**

| Platform | Best For |
|----------|----------|
| Streamlit Cloud | Dashboards |
| Heroku | Small apps |
| AWS/GCP/Azure | Production |
| HuggingFace Spaces | ML demos |

**Security Considerations**

- Never commit API keys
- Use environment variables
- Validate user input
- Rate limit endpoints`,
      keyTakeaway: 'Streamlit is fastest for dashboards, Flask for APIs. Use environment variables for secrets.',
      actionItem: 'Deploy a Streamlit app to Streamlit Cloud: a simple dashboard or data exploration tool.',
    },
  },
  {
    id: 'py-exp-039',
    title: 'Data Science Career Tips',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Navigate your data science career from learning to landing jobs.',
      mainContent: `**Building Your Skills**

**Technical Foundation**
- Python (pandas, numpy, sklearn)
- SQL (essential, often overlooked)
- Statistics (hypothesis testing, regression)
- Visualization (matplotlib, seaborn)
- Git/Version control

**Differentiators**
- Domain expertise
- Communication skills
- Business acumen
- ML deployment experience

**Portfolio Strategy**

Quality over quantity. 3-5 strong projects:
1. Data cleaning + EDA project
2. Visualization/Dashboard project
3. ML prediction project
4. Domain-specific project
5. End-to-end deployed project

**Job Search Tips**

- Tailor resume to job description
- Show impact with numbers
- Practice SQL and Python coding
- Prepare case study presentations
- Network: meetups, LinkedIn, Twitter

**Interview Preparation**

| Type | Prepare |
|------|---------|
| Technical | SQL, Python, Stats questions |
| Case Study | Structure, assumptions, insights |
| Behavioral | STAR method stories |
| Take-home | Clean code, documentation |

**Career Paths**

- Data Analyst → Senior Analyst → Lead
- Data Scientist → Senior DS → Staff DS
- ML Engineer → Senior MLE → Principal
- Analytics → Manager → Director

**Continuous Learning**

- Follow industry blogs
- Take online courses
- Contribute to open source
- Attend conferences/meetups
- Build in public`,
      keyTakeaway: 'Build a strong portfolio, master SQL, and develop communication skills. Domain expertise differentiates.',
      actionItem: 'Audit your skills against job postings and create a 3-month learning plan for gaps.',
    },
  },
  {
    id: 'py-exp-040',
    title: 'Continuous Learning in Data Science',
    type: 'concept',
    duration: 12,
    xpReward: 115,
    content: {
      overview: 'Stay current in the rapidly evolving data science field.',
      mainContent: `**The Learning Mindset**

Data science evolves rapidly. What matters:
- Fundamentals over frameworks
- Learning how to learn
- Building, not just consuming
- Teaching to solidify knowledge

**Staying Current**

**Newsletters**
- Data Science Weekly
- Python Weekly
- Towards Data Science digest

**Podcasts**
- Data Skeptic
- Linear Digressions
- Talking Machines

**YouTube Channels**
- StatQuest
- 3Blue1Brown
- Sentdex

**Learning Efficiently**

1. **Active Learning** - Code along, don't just watch
2. **Spaced Repetition** - Review concepts over time
3. **Project-Based** - Apply immediately
4. **Teach Others** - Write blogs, mentor

**Building in Public**

- Share projects on GitHub
- Write about what you learn
- Engage on Twitter/LinkedIn
- Contribute to discussions

**Advanced Topics to Explore**

- Deep Learning (PyTorch, TensorFlow)
- MLOps and deployment
- Time series forecasting
- NLP and LLMs
- Computer vision
- Causal inference
- A/B testing at scale

**The 70-20-10 Rule**

- 70% doing (projects, work)
- 20% learning from others (mentors, peers)
- 10% formal learning (courses, books)

**Your Learning System**

1. Set quarterly learning goals
2. Dedicate weekly learning time
3. Build projects to apply knowledge
4. Share and get feedback
5. Review and adjust`,
      keyTakeaway: 'Build more than you consume. Active learning through projects beats passive consumption.',
      actionItem: 'Create your personal learning system: set 3 quarterly goals, schedule weekly learning time, and identify 2 projects to build.',
    },
  },
];
