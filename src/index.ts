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

const forceExit = () => {
	process.removeAllListeners()
	process.exit(0)
}
const sleepExit = createSleep(forceExit)

const usePlugin = (options?: Partial<Options>): Plugin => {
	return {
		name: useName('builded-force-exit'),
		apply: 'build',
		enforce: 'post',
		closeBundle() {
			if (options?.delay) {
				return sleepExit(options.delay)
			}
			forceExit()
		}
	}
}

export default usePlugin
