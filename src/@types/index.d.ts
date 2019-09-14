declare class NoSleep {
	constructor()

	enable(): void

	disable(): void
}

declare module 'nosleep.js' {
	export = NoSleep
}
