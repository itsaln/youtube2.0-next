import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { IUser } from '@/shared/types/user.types'

import styles from './ChannelInfoShort.module.scss'

const ChannelInfoShort: FC<{ channel: IUser }> = ({ channel }) => {
	return (
		<div className={styles.profile_info}>
			<Image
				src={channel?.avatarPath || ''}
				alt={channel?.name || ''}
				width={50}
				height={50}
				quality={90}
			/>
			<div>
				<div className={cn(styles.name, { verified: channel?.isVerified })}>
					{channel?.name}
				</div>
				<div className={styles.location}>{channel?.location}</div>
			</div>
		</div>
	)
}

export default ChannelInfoShort
