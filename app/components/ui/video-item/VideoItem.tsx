import cn from 'clsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'

import VideoDuration from '@/ui/video-item/VideoDuration'
import VideoStatistics from '@/ui/video-item/video-statistics/VideoStatistics'

import { getChannelUrl, getVideoUrl } from '@/config/url.config'

import styles from './VideoItem.module.scss'
import { IVideoItem } from './video-item.interface'
import { useRouter } from 'next/router'

dayjs.extend(relativeTime)

const VideoItem: FC<IVideoItem> = ({
	item,
	isLarge,
	isAvatar,
	tag,
	removeHandler,
	isUpdateLink
}) => {
	const {push} = useRouter()

	return (
		<div className={styles.video_item}>
			{!!removeHandler && (
				<button
					className={styles.delete}
					onClick={() => removeHandler(item._id)}
				>
					<BiTrash className='text-base text-red-700' />
				</button>
			)}
			{isUpdateLink && (
				<button
					className={styles.update}
					onClick={() => push(`/video/edit/${item._id}`)}
				>
					<BiEdit className='text-base text-blue-600' />
				</button>
			)}
			<div className={styles.thumbnail}>
				<Link href={getVideoUrl(item._id)} className='block'>
					<Image
						src={item.thumbnailPath || '/img/no-image.svg'}
						alt={item.name || ''}
						width={248}
						height={166}
						layout={'responsive'}
						priority
					/>
				</Link>
				<VideoDuration videoPath={item.videoPath} />
				{tag && <div className={styles.hot}>{tag}</div>}
				{isAvatar && (
					<Link
						href={getChannelUrl(String(item.user?._id))}
						className={styles.avatar}
					>
						<Image
							width={50}
							height={50}
							src={item.user?.avatarPath || ''}
							alt={item.user?.name || ''}
						/>
					</Link>
				)}
			</div>
			<Link
				href={getChannelUrl(String(item.user?._id))}
				className={cn(styles.author, { verified: item.user?.isVerified })}
			>
				{item.user?.name}
			</Link>
			<Link
				href={getVideoUrl(item._id)}
				className={styles.name}
				title={item.name}
			>
				{item.name}
			</Link>
			{isLarge && <div className={styles.description}>{item.description}</div>}
			<VideoStatistics
				views={item.views}
				likes={isLarge ? item.likes : undefined}
				createdAt={item.createdAt}
			/>
		</div>
	)
}

export default VideoItem
