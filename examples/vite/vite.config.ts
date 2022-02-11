import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import BuildedForceExit from 'vite-plugin-builded-force-exit'

export default defineConfig({
	plugins: [
		Vue(),
		Inspect(),
		BuildedForceExit({ delay: 2000 })
	]
})
