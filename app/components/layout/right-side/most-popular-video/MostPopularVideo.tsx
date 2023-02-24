import { FC } from 'react'

import { IVideo } from '@/shared/types/video.types'
import VideoItem from '@/ui/video-item/VideoItem'

const MostPopularVideo: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className='hot'>
			<div className='title_gray mb-5'>
				<h2>Top video</h2>
			</div>

			<VideoItem item={video} tag='🔥Hot' isAvatar />
		</div>
	)
}

export default MostPopularVideo
