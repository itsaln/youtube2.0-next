import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'
import Sidebar from '@/layout/sidebar/Sidebar'

import { useAuth } from '@/hooks/useAuth'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()

	return (
		<main id='youtube_main'>
			<Sidebar />

			<section
				className={cn('content', {
					'content-full': !user
				})}
			>
				<Header />
				<div className='content-wrapper'>{children}</div>
			</section>
		</main>
	)
}

export default Layout
