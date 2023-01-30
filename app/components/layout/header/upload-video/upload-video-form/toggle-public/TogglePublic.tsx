import { Switch } from '@headlessui/react'
import cn from 'classnames'
import { FC, useState } from 'react'

import styles from './TogglePublic.module.scss'

const TogglePublic: FC = () => {
	const [isEnabled, setIsEnabled] = useState(false)

	return (
		<Switch
			checked={isEnabled}
			onChange={setIsEnabled}
			className={cn(styles.switch, {
				'bg-blue-600': isEnabled,
				'bg-gray-200': !isEnabled
			})}
		>
			<span>Enable notifications</span>
			<span
				className={cn(styles.point, {
					'translate-x-6': isEnabled,
					'translate-x-1': !isEnabled
				})}
			/>
		</Switch>
	)
}

export default TogglePublic
