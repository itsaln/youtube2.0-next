import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from './meu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>
				<Image width={24} height={24} src={item.image} alt={item.title || ''} />
				<b>{item.title}</b>
			</Link>
		</li>
	)
}

export default MenuItem
