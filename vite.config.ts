import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react(), tsconfigPaths()],
})

// eslint-disable-next-line import/no-default-export
export default config
