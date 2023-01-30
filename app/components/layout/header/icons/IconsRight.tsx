import { FC } from 'react'

import AuthForm from '@/layout/header/auth-form/AuthForm'
import UploadVideo from '@/layout/header/upload-video/UploadVideo'

import { useAuth } from '@/hooks/useAuth'

import styles from './IconsRight.module.scss'

const IconsRight: FC = () => {
	const { user } = useAuth()

	return (
		<div className={styles.icons}>
			{!!user ? <UploadVideo /> : <AuthForm />}
		</div>
	)
}

export default IconsRight
