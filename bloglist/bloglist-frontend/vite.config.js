import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 8000, // This is the port which we will use in docker
		strictPort: true,
		origin: "http://0.0.0.0:8000",
		// add the next lines if you're using windows and hot reload doesn't work
		watch: {
			usePolling: true
		},
		proxy: {
			'/api': {
				target: 'http://localhost:3003',
				changeOrigin: true,
			},
		}
	},
})
