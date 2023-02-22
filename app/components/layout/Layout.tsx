import cn from 'clsx'
import dynamic from 'next/dynamic'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

import Header from '@/layout/header/Header'

import { useAuth } from '@/hooks/useAuth'

const DynamicSidebar = dynamic(() => import('@/layout/sidebar/Sidebar'), {
	ssr: false
})

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const [isUser, setIsUser] = useState(false)

	useEffect(() => {
		if (user) setIsUser(!!user)

		return () => {
			setIsUser(false)
		}
	}, [user])

	return (
		<main id='youtube_main'>
			<DynamicSidebar />

			<section
				className={cn('content', {
					'content-full': !isUser
				})}
			>
				<Header />
				<div className='content-wrapper'>{children}</div>
			</section>
		</main>
	)
}

export default Layout
