import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'
import { useMutation } from 'react-query'

import VideoDetail from '@/screens/video/video-detail/VideoDetail'
import VideoPlayer from '@/screens/video/video-player/VideoPlayer'
import { IVideoPage } from '@/screens/video/video.interface'

import { VideoService } from '@/services/video.service'

import { IUser } from '@/shared/types/user.types'

import Meta from '@/utils/meta/Meta'

const DynamicComments = dynamic(
	() => import('@/screens/video/comments/Comments'),
	{
		ssr: false
	}
)

const Video: FC<IVideoPage> = ({ video }) => {
	const { mutate } = useMutation('update views', () =>
		VideoService.updateCountViews(video._id)
	)

	useEffect(() => {
		mutate()
	}, [])

	return (
		<Meta title={video.name}>
			<div>
				<VideoPlayer videoPath={video.videoPath} />
				<div id='wrapper_content'>
					<div className='left_side'>
						<VideoDetail video={video} channel={video.user || ({} as IUser)} />
					</div>
					<div className='right_side'>
						<DynamicComments videoId={video._id} />
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default Video
