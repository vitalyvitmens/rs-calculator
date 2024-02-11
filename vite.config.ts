import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  base:
    process.env.NODE_ENV === 'production'
      ? '/https://github.com/vitalyvitmens/rs-calculator/'
      : '/',
  plugins: [react()],
})
