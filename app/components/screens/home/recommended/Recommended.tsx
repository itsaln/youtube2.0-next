import { FC } from 'react'

import VideoItem from '@/ui/video-item/VideoItem'

import { IVideo } from '@/shared/types/video.types'

import styles from './Recommended.module.scss'

const Recommended: FC<{ newVideos: IVideo[] }> = ({ newVideos }) => {
	return (
		<div id='recommended'>
			<div className={styles.top_block}>
				<div className='left_title title_gray'>
					<h2>Newest video</h2>
				</div>
				<div className={styles.sort}>By View Trending</div>
			</div>

			<div className={styles.catalog}>
				{newVideos.map((video) => (
					<VideoItem key={video._id} item={video} isAvatar />
				))}
			</div>
		</div>
	)
}

export default Recommended
