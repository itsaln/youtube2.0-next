import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'
import { useMutation } from 'react-query'

import { IAuthFields } from '@/layout/header/auth-form/auth-form.interface'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { AuthService } from '@/services/auth/auth.service'

import stylesIcons from '../icons/IconsRight.module.scss'

import styles from './AuthForm.module.scss'
import { validEmail } from './auth.constants'

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { setData } = useAuth()

	const { mutate: login } = useMutation(
		'login',
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) setData(data)
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') console.log('register:---', data.email)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcons.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#a4a4a4' />
			</button>
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
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
						{...register('password', {
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
						<Button type='submit' onClick={() => setType('login')}>
							Login
						</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
