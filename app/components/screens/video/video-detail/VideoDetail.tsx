import { FC } from 'react'
import { BiLike } from 'react-icons/bi'

import ChannelInfoShort from '@/ui/channel-info-short/ChannelInfoShort'
import VideoStatistics from '@/ui/video-item/video-statistics/VideoStatistics'

import { IUser } from '@/shared/types/user.types'
import { IVideo } from '@/shared/types/video.types'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './VideoDetail.module.scss'

const VideoDetail: FC<{ video: IVideo; channel: IUser }> = ({
	video,
	channel
}) => {
	return (
		<div>
			<div>
				<div>
					<h1>{video.name}</h1>
					<VideoStatistics
						views={video.views}
						createdAt={video.createdAt}
						subscribers={channel.subscribersCount}
					/>
				</div>
				<div>
					<button className={styles.likeButton}>
						<BiLike className={styles.likeIcon} />
						<span>{nFormatter(video.likes)}</span>
					</button>
				</div>
			</div>
			<article>{video.description}</article>
			<ChannelInfoShort channel={channel} />
		</div>
	)
}

export default VideoDetail
