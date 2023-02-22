import { FC } from 'react'
import { BiLike } from 'react-icons/bi'
import { useMutation } from 'react-query'

import ChannelInfoShort from '@/ui/channel-info-short/ChannelInfoShort'
import VideoStatistics from '@/ui/video-item/video-statistics/VideoStatistics'

import { VideoService } from '@/services/video.service'

import { IUser } from '@/shared/types/user.types'
import { IVideo } from '@/shared/types/video.types'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './VideoDetail.module.scss'

const VideoDetail: FC<{ video: IVideo; channel: IUser }> = ({
	video,
	channel
}) => {
	const { mutateAsync, data } = useMutation('set like', () =>
		VideoService.updateReaction(video._id)
	)

	return (
		<div className={styles.detail}>
			<div className={styles.wrapper}>
				<div className={styles.text}>
					<h1>{video.name}</h1>
					<VideoStatistics
						views={video.views}
						createdAt={video.createdAt}
						subscribers={channel.subscribersCount}
					/>
				</div>
				<div>
					<button className={styles.likeButton} onClick={() => mutateAsync()}>
						<BiLike className={styles.likeIcon} />
						<span>{nFormatter(data?.data.likes || video.likes)}</span>
					</button>
				</div>
			</div>
			<article className={styles.article}>{video.description}</article>
			<ChannelInfoShort channel={channel} />
		</div>
	)
}

export default VideoDetail
