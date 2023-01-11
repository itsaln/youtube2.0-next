import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from '@/layout/header/Header'
import Sidebar from '@/layout/sidebar/Sidebar'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<main id='youtube_main'>
					<Sidebar />

					<section className='content'>
						<Header />

						<div className='content-wrapper'>{children}</div>
					</section>
				</main>
			</Head>
		</>
	)
}

export default Layout
