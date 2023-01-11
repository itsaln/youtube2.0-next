import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header id='header'>
			<div className='search_top'>
				<label>
					<input type='text' placeholder='Search videos, stars or authors...' />
					<img src='img/common/search.svg' alt='' />
				</label>
			</div>
			<div className='icons_right'>
				<Link href='#'>
					<img src='img/common/plus.svg' alt='' />
				</Link>
				<Link href='#'>
					<img src='img/common/review.svg' alt='' />
				</Link>
				<Link href='#'>
					<img src='img/common/basket.svg' alt='' />
				</Link>
			</div>
		</header>
	)
}

export default Header
