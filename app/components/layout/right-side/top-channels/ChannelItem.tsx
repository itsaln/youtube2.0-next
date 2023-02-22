import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getChannelUrl } from '@/config/url.config'

import { IUser } from '@/shared/types/user.types'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './ChannelItem.module.scss'

const ChannelItem: FC<{ item: IUser }> = ({ item }) => {
	return (
		<div className={styles.channel}>
			<div className={styles.info_left}>
				<Link href={getChannelUrl(item._id)}>
					<Image width={70} height={70} src={item.avatarPath} alt={item.name} />
				</Link>
				<div className={styles.info}>
					<Link
						href={getChannelUrl(item._id)}
						className={cn(styles.name, {
							verified: item.isVerified
						})}
					>
						{item.name}
					</Link>
					<div className={styles.subs}>
						{nFormatter(item.subscribersCount)} Subscribers
					</div>
				</div>
			</div>

			<Link href='/' className={styles.mnu}>
				<Image
					width={20}
					height={20}
					src='/img/common/open-menu.svg'
					alt='Menu icon'
				/>
			</Link>
		</div>
	)
}

export default ChannelItem
