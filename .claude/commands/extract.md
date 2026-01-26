# Extract Book Content

Extract and structure content from an ebook for use in Gyanmarg lessons.

## Arguments
$ARGUMENTS - Book title or file path

## Instructions

### Extraction Process
1. Read the book/PDF content
2. Identify key chapters and concepts
3. Extract main ideas, frameworks, and examples
4. Structure for lesson creation

### Output Format
```markdown
# Book Title
**Author:** Author Name
**Module:** Which Gyanmarg module this belongs to

## Key Concepts
1. **Concept Name** - Brief description
   - Key insight 1
   - Key insight 2
   - Example/application

## Frameworks & Models
1. **Framework Name**
   - Step 1
   - Step 2
   - Step 3

## Memorable Quotes
- "Quote text" (Chapter X)

## Action Items (for lessons)
- Specific action 1
- Specific action 2

## Quiz Questions
1. Question based on content
   - Option A
   - Option B (correct)
   - Option C
   - Option D

## Connections to Other Books
- Connects to [Book] regarding [concept]
```

### Guidelines
- Focus on actionable insights, not summaries
- Extract frameworks and mental models
- Note connections to other books in the collection
- Identify practical exercises and applications
- Mark which content is suitable for:
  - Foundation lessons (intro concepts)
  - Deep dive lessons (detailed exploration)
  - Challenge lessons (application exercises)
  - Flashcards (key facts/definitions)
  - Quizzes (understanding checks)

### Important
NEVER use dummy or synthetic content. Only extract actual content from the provided book. If the book is not accessible, inform the user.
