import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'

import styles from './AuthForm.module.scss'
import stylesIcons from '../icons/IconsRight.module.scss'

const AuthForm: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={stylesIcons.button}>
				<FaUserCircle fill='#a4a4a4' />
			</button>
		</div>
	)
}

export default AuthForm
