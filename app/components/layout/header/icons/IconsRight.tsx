import { FC } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

import AuthForm from '@/layout/header/auth-form/AuthForm'

import { useAuth } from '@/hooks/useAuth'

import styles from './IconsRight.module.scss'

const IconsRight: FC = () => {
	const { user } = useAuth()

	return (
		<div className={styles.icons}>
			{!!user && (
				<button className={styles.button}>
					<BsPlusCircleFill fill='#CD3A42' />
				</button>
			)}
			{!user && <AuthForm />}
		</div>
	)
}

export default IconsRight
