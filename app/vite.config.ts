import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Hashed build output (JS, CSS, and the ~72MB of module/level webp imported from
// src) is served from CloudFront, so Firebase Hosting only ever serves index.html
// and the handful of files in public/. That keeps us inside the Spark free tier's
// daily transfer cap, which the full payload would otherwise exhaust in ~180 cold
// visits. Unset in dev and for local builds, where everything stays same-origin.
//
// public/ deliberately does NOT move: a service worker can only control the origin
// it is served from, so sw.js must stay on the Firebase origin, and a cross-origin
// manifest.json breaks PWA install prompts in some browsers.
const rawAssetBase = process.env.VITE_ASSET_BASE ?? ''
const ASSET_BASE = rawAssetBase && !rawAssetBase.endsWith('/') ? `${rawAssetBase}/` : rawAssetBase

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ...(ASSET_BASE
    ? {
        experimental: {
          renderBuiltUrl(filename: string, { type }: { type: 'asset' | 'public' }) {
            return type === 'public' ? `/${filename}` : `${ASSET_BASE}${filename}`
          },
        },
      }
    : {}),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-vendor';
          }
          if (id.includes('node_modules/zustand')) {
            return 'state-vendor';
          }
          // Flashcard data — lazy loaded, separate chunk
          if (id.includes('data/flashcards')) {
            return 'flashcard-data';
          }
          // Pathway lesson files — split into category chunks (~3MB each instead of 26MB monolith)
          if (id.includes('data/pathways/') && id.includes('-lessons')) {
            const fileName = id.split('/').pop()?.replace('.ts', '') || '';
            // Group by first letter prefix for reasonable chunk count
            const prefix = fileName.split('-')[0];
            return `pathway-${prefix}`;
          }
          // Visualization components — heavy, separate chunk
          if (id.includes('components/visualizations/')) {
            return 'visualizations';
          }
        },
      },
    },
  },
})
