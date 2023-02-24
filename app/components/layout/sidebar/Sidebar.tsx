import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, MouseEvent } from 'react'

import ProfileInfo from '@/layout/sidebar/ProfileInfo'
import Menu from '@/layout/sidebar/menu/Menu'

import Line from '@/ui/Line'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Sidebar: FC = () => {
	const { user } = useAuth()
	const { push } = useRouter()

	const { logout } = useActions()
	const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		logout()
		await push('/')
	}

	return user ? (
		<div className='sidebar'>
			<Link href='/' className='logo'>
				<Image
					width={130}
					height={42}
					src='/img/common/logo.png'
					alt='Youtube'
				/>
			</Link>

			<ProfileInfo />

			<Line />

			<Menu />

			{/*<div className='switch_wrapper'>*/}
			{/*	<label className='switch'>*/}
			{/*		<input type='checkbox' checked />*/}
			{/*		<span className='slider round' />*/}
			{/*	</label>*/}
			{/*	<p>Light On</p>*/}
			{/*</div>*/}

			<button id='logout_btn' onClick={handleLogout}>
				Logout
			</button>
			<p className='copy'>&copy; 2023 Youtube, LLC</p>
		</div>
	) : null
}

export default Sidebar
