import Image from 'next/image'
import Link from 'next/link'
import { FC, MouseEvent } from 'react'

import ProfileInfo from '@/layout/sidebar/ProfileInfo'
import Menu from '@/layout/sidebar/menu/Menu'

import Line from '@/ui/Line'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Sidebar: FC = () => {
	const { user } = useAuth()

	const { logout } = useActions()
	const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		logout()
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
			<div className='copy'>&copy; 2023 Youtube, LLC</div>
		</div>
	) : null
}

export default Sidebar
