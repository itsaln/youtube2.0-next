import cn from 'classnames'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'
import Sidebar from '@/layout/sidebar/Sidebar'

import { accentColor } from '@/config/constants'

import { useAuth } from '@/hooks/useAuth'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	const { user } = useAuth()

	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
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
