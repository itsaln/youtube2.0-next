import { FC } from 'react'

import ChannelItem from '@/layout/right-side/top-channels/ChannelItem'

import { IUser } from '@/shared/types/user.types'

import styles from './TopChannels.module.scss'

const TopChannels: FC<{ channels: IUser[] }> = ({ channels }) => {
	return (
		<div className={styles.top_channels}>
			<div className='title_gray mb-5'>
				<h2>Top Channels</h2>
			</div>

			<div className={styles.list_channels}>
				{channels &&
					channels.map((channel) => (
						<ChannelItem key={channel._id} item={channel} />
					))}
			</div>
		</div>
	)
}

export default TopChannels
