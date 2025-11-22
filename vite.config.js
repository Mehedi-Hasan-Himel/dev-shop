import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React plugin with React Compiler enabled
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),

    // Tailwind CSS plugin
    tailwindcss(),
  ],
})
