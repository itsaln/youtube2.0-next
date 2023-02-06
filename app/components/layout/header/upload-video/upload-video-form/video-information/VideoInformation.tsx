import Link from 'next/link'
import { FC } from 'react'

import styles from './VideoInformation.module.scss'

interface IVideoInformation {
	thumbnailPath?: boolean
	videoId: string
	fileName: string
}

const VideoInformation: FC<IVideoInformation> = ({
	videoId,
	fileName,
	thumbnailPath
}) => {
	return (
		<div className={styles.info}>
			{!thumbnailPath && (
				<div className={styles.thumbnail}>Uploading video...</div>
			)}
			<div className={styles.details}>
				<div>
					<span>Video link</span>
					<span>
						<Link href={`/v/${videoId}`}>
							https://localhost.com/v/{videoId}
						</Link>
					</span>
				</div>
				<div>
					<span>Filename</span>
					<span>{fileName}</span>
				</div>
			</div>
		</div>
	)
}

export default VideoInformation
