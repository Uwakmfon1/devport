import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'

import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
    }),
    react(),
  ],
})

