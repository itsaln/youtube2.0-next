import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import VideoDuration from '@/ui/video-item/VideoDuration'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './VideoItem.module.scss'
import { IVideoItem } from './video-item.interface'

dayjs.extend(relativeTime)

const VideoItem: FC<IVideoItem> = ({ item, isLarge, isAvatar }) => {
	return (
		<div className={styles.video_item}>
			<Link href={`/v/${item._id}`} className={styles.thumbnail}>
				<Image
					width={248}
					height={166}
					src={item.thumbnailPath}
					alt={item.name}
					layout='responsive'
				/>
				<VideoDuration videoPath={item.videoPath} />
				{isAvatar && (
					<Link href={`/c/${item.user?._id}`} className={styles.avatar}>
						<Image
							width={36}
							height={36}
							src={item.user?.avatarPath || ''}
							alt={item.user?.name || ''}
						/>
					</Link>
				)}
			</Link>
			<Link href={`/c/${item.user?._id}`} className={styles.author}>
				{item.user?.name}
			</Link>
			<Link href={`/v/${item._id}`} className={styles.name}>
				{item.name}
			</Link>
			{isLarge && <div className={styles.description}>{item.description}</div>}
			<div className={styles.number_info}>
				<div className={styles.views}>VIEWS {nFormatter(item.views)}</div>
				{isLarge && (
					<div className={styles.views}>LIKES {nFormatter(item.likes)}</div>
				)}
				<div className={styles.date}>
					{dayjs(new Date(item.createdAt)).fromNow()}
				</div>
			</div>
		</div>
	)
}

export default VideoItem
