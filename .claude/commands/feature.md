# Create Feature

Create a new feature module for Gyanmarg.

## Arguments
$ARGUMENTS - Feature name and description (e.g., "neural-playground interactive neural network visualization")

## Instructions

Parse the arguments to extract:
1. **Feature name** (kebab-case)
2. **Feature description**

### Directory Structure
Create at: `app/src/features/{feature-name}/`

### Files to Create
1. `{FeatureName}.tsx` - Main feature component
2. `index.ts` - Re-export
3. Additional components as needed

### Feature Template
```typescript
import { FC } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/templates/PageLayout';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';

export const {FeatureName}: FC = () => {
  const { profile } = useUserStore();
  const { addXP } = useProgressStore();

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-2xl font-bold text-white">
          {/* Feature Title */}
        </h1>

        {/* Feature content */}
      </motion.div>
    </PageLayout>
  );
};
```

### Add Route
Update `app/src/App.tsx` to add the new route:
```typescript
import { {FeatureName} } from '@/features/{feature-name}';
// Add route in Routes
<Route path="/{feature-name}" element={<{FeatureName} />} />
```

### Guidelines
- Use PageLayout template for consistent layout
- Add Framer Motion animations for entrance
- Connect to Zustand stores for state
- Award XP for meaningful interactions
- Follow existing feature patterns
- Use Tailwind dark theme colors (slate-800, slate-700, etc.)
