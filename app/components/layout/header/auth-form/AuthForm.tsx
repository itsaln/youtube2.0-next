import { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'

import stylesIcons from '../icons/IconsRight.module.scss'

import styles from './AuthForm.module.scss'
import Field from '@/ui/field/Field'
import Button from '@/ui/button/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from '@/layout/header/auth-form/auth-form.interface'

const AuthForm: FC = () => {
	const {register, formState: {errors}, handleSubmit} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		alert(data.email)
	}

	return (
		<div className={styles.wrapper}>
			<button className={stylesIcons.button}>
				<FaUserCircle fill='#a4a4a4' />
			</button>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter a valid email address'
						}
					})}
					placeholder='Email' error={errors.email} />
				<Button>Login</Button>
				<button className='text-sm'>Register</button>
			</form>
		</div>
	)
}

export default AuthForm
