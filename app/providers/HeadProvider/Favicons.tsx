const Favicons = () => {
	return (
		<>
			{/* https://iconifier.net/ */}
			<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			{/*<link rel='apple-touch-icon' href='/apple-touch-icon.png' />*/}
			<link
				rel='apple-touch-icon'
				sizes='32x32'
				href='/favicon_32x32.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='48x48'
				href='/favicon_48x48.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='96x96'
				href='/favicon_96x96.png'
			/>
			<link
				rel='apple-touch-icon'
				sizes='144x144'
				href='/favicon_144x144.png'
			/>
		</>
	)
}

export default Favicons
