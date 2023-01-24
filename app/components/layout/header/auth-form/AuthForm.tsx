import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { IAuthFields } from '@/layout/header/auth-form/auth-form.interface'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { validEmail } from '@/shared/regex'

import stylesIcons from '../icons/IconsRight.module.scss'

import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcons.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#a4a4a4' />
			</button>
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...registerInput('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						type='password'
						{...registerInput('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should be more or same 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
					/>
					<div className='mt-6 mb-2 text-center'>
						<Button
							type='submit'
							className={styles.login}
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
					</div>
					<button
						type='submit'
						className={styles.register}
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
