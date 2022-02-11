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
		{
			name: 'foo',
			apply: 'build',
			closeBundle() {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve('foo被触发了')
					}, 1000)
				}).then(msg => console.log(msg))
			}
		},
		BuildedForceExit({
			delay: 4000
		})
	]
})
