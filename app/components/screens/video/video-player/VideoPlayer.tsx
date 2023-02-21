import { FC } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'

import { usePlayer } from '@/screens/video/video-player/usePlayer'

import styles from './VideoPlayer.module.scss'

const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
	const { videoRef, toggleVideo, status } = usePlayer()

	return (
		<div className={styles.wrapper}>
			<video
				ref={videoRef}
				className={styles.player}
				src={`${videoPath}#t=8`}
				preload='metadata'
			/>
			<div className={styles.button}>
				<button onClick={toggleVideo}>
					{status.isPlaying
						? status.isShowButton && <MdPause className='animate-fade' />
						: status.isShowButton && <MdPlayArrow className='animate-fade' />}
				</button>
			</div>
			<div className={styles.progressBarWrapper}>
				<div
					className={styles.progressBar}
					style={{
						width: `${status.progress}%`
					}}
				/>
			</div>
		</div>
	)
}

export default VideoPlayer
