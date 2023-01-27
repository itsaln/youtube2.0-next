import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const TopChannels: FC = () => {
	return (
		<div id='top_channels'>
			<div className='title_gray'>
				<h2>Top Channels</h2>
			</div>

			<div className='list_channels'>
				<div className='channel'>
					<div className='info_left'>
						<img src='img/main/avatar.jpg' alt='' />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<img src='img/common/open-menu.svg' alt='' />
					</Link>
				</div>
				<div className='channel'>
					<div className='info_left'>
						<img src='img/main/avatar.jpg' alt='' />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<img src='img/common/open-menu.svg' alt='' />
					</Link>
				</div>
				<div className='channel'>
					<div className='info_left'>
						<img src='img/main/avatar.jpg' alt='' />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<img src='img/common/open-menu.svg' alt='' />
					</Link>
				</div>
				<div className='channel'>
					<div className='info_left'>
						<img src='img/main/avatar.jpg' alt='' />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<img src='img/common/open-menu.svg' alt='' />
					</Link>
				</div>
				<div className='channel'>
					<div className='info_left'>
						<img src='img/main/avatar.jpg' alt='' />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<img src='img/common/open-menu.svg' alt='' />
					</Link>
				</div>
				<div className='channel'>
					<div className='info_left'>
						<img src='img/main/avatar.jpg' alt='' />
						<div className='info'>
							<div className='name'>LEGO</div>
							<div className='subs'>6.2M Subscribers</div>
						</div>
					</div>
					<Link href='#' className='mnu'>
						<img src='img/common/open-menu.svg' alt='' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TopChannels
