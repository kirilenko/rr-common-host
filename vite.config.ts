import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => ({
  build: {
    cssCodeSplit: false,
    minify: mode === 'production',
    modulePreload: false,
    target: 'esnext',
  },
  plugins: [
    react(),
    federation({
      exposes: {
        './shared/ui': './src/shared/ui',
      },
      filename: 'remote-entry.js',
      name: 'remote-common',
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@entities': '/src/entities',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@widgets': '/src/widgets',
    },
  },
}))
