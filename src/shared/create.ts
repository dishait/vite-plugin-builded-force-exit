export const createSleep = <T extends Function>(
	callback: T
) => {
	return (ms: number) => {
		return new Promise(resolve => {
			setTimeout(() => {
				callback()
				resolve(null)
			}, ms)
		})
	}
}

export const createPluginName = (
	repeat: boolean = false
) => {
	let i = 0
	return (name: string) => {
		if (repeat) {
			return `vite-plugin-${name}:${i++}`
		}
		return `vite-plugin-${name}`
	}
}
