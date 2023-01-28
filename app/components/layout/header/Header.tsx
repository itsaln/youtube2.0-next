import { FC } from 'react'

import IconsRight from './icons/IconsRight'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<header id='header'>
			<Search />
			<IconsRight />
		</header>
	)
}

export default Header
