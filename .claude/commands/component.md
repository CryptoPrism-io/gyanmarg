# Create Component

Create a new React component following the Atomic Design pattern.

## Arguments
$ARGUMENTS - Component name and type (e.g., "Button atom" or "QuizCard molecule")

## Instructions

Parse the arguments to extract:
1. **Component name** (PascalCase)
2. **Component type**: atom, molecule, organism, or template

### Directory Structure
- atoms → `app/src/components/atoms/{ComponentName}/`
- molecules → `app/src/components/molecules/{ComponentName}/`
- organisms → `app/src/components/organisms/{ComponentName}/`
- templates → `app/src/components/templates/{ComponentName}/`

### Files to Create
1. `{ComponentName}.tsx` - Main component file
2. `index.ts` - Re-export the component

### Component Template
```typescript
import { FC } from 'react';

interface {ComponentName}Props {
  // Define props here
}

export const {ComponentName}: FC<{ComponentName}Props> = (props) => {
  return (
    <div className="">
      {/* Component content */}
    </div>
  );
};
```

### Guidelines
- Use TypeScript with explicit prop interfaces
- Use Tailwind CSS for styling
- Use Lucide React icons when needed
- Add Framer Motion animations for interactive components
- Export from index.ts for clean imports
- Follow existing component patterns in the codebase
