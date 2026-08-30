import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        projectsIndex: resolve(process.cwd(), 'projects/index.html'),
        polyWeb: resolve(process.cwd(), 'projects/poly-web/index.html'),
        projectAlpha: resolve(process.cwd(), 'projects/project-alpha/index.html'),
        cliToolkit: resolve(process.cwd(), 'projects/cli-toolkit/index.html'),
        dataViz: resolve(process.cwd(), 'projects/data-viz/index.html'),
        mobileApp: resolve(process.cwd(), 'projects/mobile-app/index.html'),
        openSource: resolve(process.cwd(), 'projects/open-source/index.html'),
      },
    },
  },
})
