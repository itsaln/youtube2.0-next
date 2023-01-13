import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Line from '@/ui/Line'

import { useAuth } from '@/hooks/useAuth'

import { defaultValueAuthState } from '@/providers/AuthProvider'

import { AuthService } from '@/services/auth/auth.service'

const Sidebar: FC = () => {
	const { user, setData } = useAuth()

	return user ? (
		<section className='sidebar'>
			<Link href='/' className='logo'>
				<Image
					width={130}
					height={42}
					src='http://localhost:3000/img/common/logo.png'
					alt='Youtube'
				/>
			</Link>

			<div className='profile_info'>
				<Image
					width={70}
					height={70}
					src='http://localhost:3000/img/main/avatar.jpg'
					alt=''
				/>
				<div className='name'>Nannie Nelson</div>
				<div className='location'>Montreal, QC</div>
			</div>
			<div className='information'>
				<div className='item'>
					<div className='top'>278</div>
					<div className='bottom'>videos</div>
				</div>
				<div className='item'>
					<div className='top'>36.5k</div>
					<div className='bottom'>subscribers</div>
				</div>
			</div>

			<Line />

			<ul className='mnu_sidebar'>
				<li>
					<Link href='#'>
						<img src='img/common/multimedia.svg' alt='' />
						<b>Videos</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/video-camera.svg' alt='' />
						<b>Movies & Shows</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/gift.svg' alt='' />
						<b>Premium Contents</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/live-news.svg' alt='' />
						<b>Live</b>
					</Link>
				</li>

				<div className='line_mnu' />

				<li>
					<Link href='#'>
						<img src='img/common/calendar.svg' alt='' />
						<b>Subscribtions</b>
						<span className='number'>29 new</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/smartphone.svg' alt='' />
						<b>Library</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/like.svg' alt='' />
						<b>Liked Videos</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/time.svg' alt='' />
						<b>Watch Later</b>
					</Link>
				</li>

				<div className='line_mnu' />

				<li>
					<Link href='#'>
						<img src='img/common/adjust.svg' alt='' />
						<b>Settings</b>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<img src='img/common/support.svg' alt='' />
						<b>Help & Report</b>
					</Link>
				</li>
			</ul>

			<div className='switch_wrapper'>
				<label className='switch'>
					<input type='checkbox' checked />
					<span className='slider round' />
				</label>
				<p>Light On</p>
			</div>

			<button
				id='logout_btn'
				onClick={() => {
					AuthService.logout()
					setData && setData(defaultValueAuthState)
				}}
			>
				Logout
			</button>
			<div className='copy'>&copy; 2020 Youtube, LLC</div>
		</section>
	) : null
}

export default Sidebar
