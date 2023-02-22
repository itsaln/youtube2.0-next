import dayjs from 'dayjs'
import { FC } from 'react'

import styles from '@/ui/video-item/VideoItem.module.scss'

import { nFormatter } from '@/utils/string/formatNumberToK'

interface IVideoStatistics {
	views: number
	likes?: number
	createdAt: string
	subscribers?: number
}

const VideoStatistics: FC<IVideoStatistics> = ({
	views,
	likes,
	createdAt,
	subscribers
}) => {
	return (
		<div className={styles.number_info}>
			<div>Views {nFormatter(views)}</div>
			{!!likes && <div>Likes {nFormatter(likes)}</div>}
			<div className={styles.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
			{!!subscribers && (
				<div className={styles.subscribers}>
					Subscribers {nFormatter(subscribers)}
				</div>
			)}
		</div>
	)
}

export default VideoStatistics
