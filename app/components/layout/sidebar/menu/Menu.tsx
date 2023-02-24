import { FC, Fragment } from 'react'

import Line from '@/ui/Line'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
	return (
		<ul className={styles.mnu_sidebar}>
			{menu.map((item, index) => (
				<Fragment key={`${item.link}_${index}`}>
					<MenuItem item={item} />
				</Fragment>
			))}

			<Line />
		</ul>
	)
}

export default Menu
