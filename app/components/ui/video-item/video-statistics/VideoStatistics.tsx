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
			<div className={styles.views}>VIEWS {nFormatter(views)}</div>
			{!!likes && <div className={styles.views}>LIKES {nFormatter(likes)}</div>}
			<div className={styles.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
			{!!subscribers && (
				<div className={styles.views}>
					SUBSCRIBERS {nFormatter(subscribers)}
				</div>
			)}
		</div>
	)
}

export default VideoStatistics
