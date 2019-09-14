/**
 * Format seconds into a readable mm:ss format
 */
export function formatSeconds(s: number): string {
	const minutes = prependZeroes(Math.floor(s / 60))
	const seconds = prependZeroes(s % 60)

	if (parseInt(minutes) > 0) {
		return `${minutes}:${seconds}`
	}

	return `00:${seconds}`
}

/**
 * Prepend the number with zeroes in case it isn't a two-digit number.
 */
function prependZeroes(number: number): string {
	return `0${number % 60}`.slice(-2)
}
