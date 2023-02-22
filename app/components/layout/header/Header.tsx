import dynamic from 'next/dynamic'
import { FC } from 'react'

import Search from './search/Search'

const DynamicIconsRight = dynamic(() => import('./icons/IconsRight'), {
	ssr: false
})

const Header: FC = () => {
	return (
		<header id='header'>
			<Search />
			<DynamicIconsRight />
		</header>
	)
}

export default Header
