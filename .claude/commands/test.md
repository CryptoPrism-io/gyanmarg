# Run Tests

Run tests for the Gyanmarg application.

## Arguments
$ARGUMENTS - Optional: specific test file or pattern

## Instructions

### If tests are set up (Vitest/Jest)
```bash
cd c:\Users\44776\Downloads\Ebooks-Courses\Ebooks\Gyanmarg\app
npm test
# or for specific file
npm test -- {pattern}
```

### If no test framework exists
Inform the user that tests need to be set up and offer to:
1. Install Vitest (recommended for Vite projects)
2. Create test configuration
3. Write initial test files

### Test Setup (if needed)
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add to `vite.config.ts`:
```typescript
/// <reference types="vitest" />
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
```

### What to Test
1. **Stores** - State updates, persistence
2. **Components** - Rendering, interactions
3. **Utilities** - Helper functions
4. **Features** - User flows

### Test File Location
- Component tests: `__tests__/` folder next to component
- Or: `{ComponentName}.test.tsx` alongside component
