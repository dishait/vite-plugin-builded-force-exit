import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { watch } from 'chokidar'
import BuildedForceExit from 'vite-plugin-builded-force-exit'

watch('demo').on('all', () => {
	console.log('demo文件夹变动了')
})

export default defineConfig({
	plugins: [
		Vue(),
		Inspect(),
		BuildedForceExit({ delay: 4000 })
	]
})
