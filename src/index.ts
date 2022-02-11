import { exit } from 'process'
import { Plugin } from 'vite'
import {
	createSleep,
	createPluginName
} from './shared/create'

interface Options {
	/**
	 * 延迟，单位为 ms (毫秒)
	 */
	delay: number
}

const useName = createPluginName()

const sleepExit = createSleep(() => exit(0))

const usePlugin = (options?: Partial<Options>): Plugin => {
	return {
		name: useName('builded-force-exit'),
		apply: 'build',
		closeBundle() {
			if (options?.delay) {
				sleepExit(options.delay)
				return
			}
			exit(0)
		}
	}
}

export default usePlugin
