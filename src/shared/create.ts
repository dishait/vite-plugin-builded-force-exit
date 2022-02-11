export const createSleep = <T extends Function>(
	callback: T
) => {
	return (ms: number) => {
		return new Promise(resolve => {
			setTimeout(resolve, ms)
		}).then(() => callback())
	}
}

export const createPluginName = (
	reusable: boolean = false
) => {
	let i = 0
	return (name: string) => {
		const base = `vite-plugin-${name}`
		return reusable ? `${base}:${i++}` : base
	}
}
