import cn from 'classnames'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'
import Sidebar from '@/layout/sidebar/Sidebar'

import { useAuth } from '@/hooks/useAuth'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	const { user } = useAuth()

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
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
		</>
	)
}

export default Layout
