import { FC } from 'react'

import Comments from '@/screens/video/comments/Comments'
import VideoDetail from '@/screens/video/video-detail/VideoDetail'
import VideoPlayer from '@/screens/video/video-player/VideoPlayer'
import { IVideoPage } from '@/screens/video/video.interface'

import { IUser } from '@/shared/types/user.types'

import Meta from '@/utils/meta/Meta'

const Video: FC<IVideoPage> = ({ video }) => {
	console.log('video:---', video)

	return (
		<Meta title={video.name}>
			<div>
				<VideoPlayer videoPath={video.videoPath} />
				<div id='wrapper_content'>
					<div className='left_side'>
						<VideoDetail video={video} channel={video.user || ({} as IUser)} />
					</div>
					<div className='right_side'>
						<Comments videoId={video._id} />
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default Video
