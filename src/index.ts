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

const sleepExit = createSleep(exit)

const usePlugin = (options?: Partial<Options>): Plugin => {
	return {
		name: useName('builded-force-exit'),
		apply: 'build',
		enforce: 'post',
		buildEnd(err) {
			if (err) {
				console.log(err.message)
			}
			if (options?.delay) {
				sleepExit(options.delay)
			} else {
				setImmediate(exit)
			}
		}
	}
}

export default usePlugin
