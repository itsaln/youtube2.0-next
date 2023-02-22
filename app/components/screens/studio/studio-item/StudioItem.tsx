import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './StudioItem.module.scss'

const StudioItem: FC<PropsWithChildren<any>> = ({ children, className }) => {
	return <div className={cn(styles.item, className)}>{children}</div>
}

export default StudioItem
