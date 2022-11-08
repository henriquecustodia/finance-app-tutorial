
// vite.config.ts
import { defineConfig } from 'vite';
import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        TailwindCSSVitePlugin()
    ],
});