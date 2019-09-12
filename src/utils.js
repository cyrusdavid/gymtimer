/**
 * Format seconds into a readable mm:ss format
 * @param {number} s seconds
 */
export function formatSeconds(s) {
	const minutes = prependZeroes(Math.floor(s / 60))
	const seconds = prependZeroes(s % 60)

	if (minutes > 0) {
		return `${minutes}:${seconds}`
	} else {
		return `00:${seconds}`
	}
}

/**
 * Prepend the number with zeroes in case it isn't a two-digit number.
 * @param {number} number
 */
function prependZeroes(number) {
	return `0${number % 60}`.slice(-2)
}
