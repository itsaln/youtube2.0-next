import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IUser } from '@/shared/types/user.types'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './ChannelItem.module.scss'
import cn from 'classnames'

const ChannelItem: FC<{ item: IUser }> = ({ item }) => {
	return (
		<div className={styles.channel}>
			<div className={styles.info_left}>
				<Link href={`/c/${item._id}`}>
					<Image width={70} height={70} src={item.avatarPath} alt={item.name} />
				</Link>
				<div className={styles.info}>
					<Link href={`/c/${item._id}`} className={cn(styles.name, 'truncate-1', {
						verified: item.isVerified
					})}>{item.name}</Link>
					<div className={styles.subs}>
						{nFormatter(item.subscribersCount)} Subscribers
					</div>
				</div>
			</div>

			<Link href='#' className={styles.mnu}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src='img/common/open-menu.svg' alt='' />
			</Link>
		</div>
	)
}

export default ChannelItem
