import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// For using env variables in config:
// import { loadEnv } from 'vite'
// export default defineConfig(() => {
//   const env = loadEnv(mode, process.cwd(), '')
//   ...
// })

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
        './app/providers': './src/app/providers',
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
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['/test.config.ts'],
  },
}))
