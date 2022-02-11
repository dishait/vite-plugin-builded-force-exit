import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import BuildForceExit from 'vite-plugin-builded-force-exit'

export default defineConfig({
	plugins: [
		Vue(),
		Inspect(),
		BuildForceExit({ delay: 2000 })
	]
})
