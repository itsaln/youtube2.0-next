export const nFormatter = (
	number: number,
	type: 'lowercase' | 'uppercase' = 'lowercase'
) => {
	if (number >= 1000000000)
		return (
			(number / 1000000000).toFixed(1).replace(/\.0$/, '') +
			`${type === 'uppercase' ? 'G' : 'g'}`
		)

	if (number >= 1000000)
		return (
			(number / 1000000).toFixed(1).replace(/\.0$/, '') +
			`${type === 'uppercase' ? 'M' : 'm'}`
		)

	if (number >= 1000)
		return (
			(number / 1000).toFixed(1).replace(/\.0$/, '') +
			`${type === 'uppercase' ? 'K' : 'k'}`
		)

	return number
}
