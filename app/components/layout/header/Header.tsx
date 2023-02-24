import dynamic from 'next/dynamic'
import { FC } from 'react'

import Search from './search/Search'
import styles from './Header.module.scss'

const DynamicIconsRight = dynamic(() => import('./icons/IconsRight'), {
	ssr: false
})

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<DynamicIconsRight />
		</header>
	)
}

export default Header
