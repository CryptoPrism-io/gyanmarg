# Start Development Server

Start the Vite development server for Gyanmarg.

## Instructions

1. Navigate to the app directory
2. Check if dependencies are installed
3. Start the development server

```bash
cd c:\Users\44776\Downloads\Ebooks-Courses\Ebooks\Gyanmarg\app
npm install
npm run dev
```

The development server will start at http://localhost:5173

### Hot Module Replacement
- Changes to components will hot reload automatically
- Changes to stores may require a page refresh
- Tailwind CSS changes apply instantly

### Common Issues
- **Port 5173 in use**: Kill the process or use `npm run dev -- --port 5174`
- **Module not found**: Run `npm install` to ensure dependencies are installed
- **TypeScript errors**: Check terminal output for type errors
