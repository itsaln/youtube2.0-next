export const nFormatter = (number: number) => {
	if (number >= 1000000000)
		return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'g'

	if (number >= 1000000)
		return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'm'

	if (number >= 1000)
		return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'k'

	return number
}
