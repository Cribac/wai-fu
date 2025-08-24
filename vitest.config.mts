import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/app/__tests__/setup.ts'], // setup file
    include: ['src/app/__tests__/*.test.ts*'], // include test files in __tests__ directory
  },
})
