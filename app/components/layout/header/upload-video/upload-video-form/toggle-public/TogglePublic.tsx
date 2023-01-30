import { Switch } from '@headlessui/react'
import cn from 'classnames'
import { FC } from 'react'

import styles from './TogglePublic.module.scss'
import { ITogglePublic } from './toggle-public.interface'

const TogglePublic: FC<ITogglePublic> = ({ isEnabled, clickHandler }) => {
	return (
		<div className={styles.wrapper}>
			<Switch
				checked={isEnabled}
				onChange={clickHandler}
				className={cn(styles.switch, {
					'bg-primary bg-opacity-80': isEnabled,
					'bg-gray-200': !isEnabled
				})}
			>
				<span
					className={cn(styles.point, {
						'translate-x-6': isEnabled,
						'translate-x-1': !isEnabled
					})}
				/>
			</Switch>
			<span onClick={clickHandler}>Публичное видео</span>
		</div>
	)
}

export default TogglePublic
