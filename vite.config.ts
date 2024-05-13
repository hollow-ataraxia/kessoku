import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'

export default defineConfig({
	server: {port: 4321},
	test: {environment: 'jsdom'},
	plugins: [tsconfigPaths(), react()]
})
