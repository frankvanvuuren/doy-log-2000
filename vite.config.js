import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
          plugins: [svelte()],
          build: { minify: mode === 'production' },
          optimizeDeps: { include: ['@carbon/charts'] },
        };
});
