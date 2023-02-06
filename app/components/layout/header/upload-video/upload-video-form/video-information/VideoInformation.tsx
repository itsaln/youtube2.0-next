import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './VideoInformation.module.scss'

interface IVideoInformation {
	thumbnailPath?: string
	videoId: string
	fileName: string
	isUploaded: boolean
}

const VideoInformation: FC<IVideoInformation> = ({
	videoId,
	fileName,
	thumbnailPath,
	isUploaded
}) => {
	return (
		<div className={styles.info}>
			{!thumbnailPath ? (
				<div className={styles.thumbnail}>
					{isUploaded ? 'Uploading video...' : 'You should update thumbnail'}
				</div>
			) : (
				<Image width={200} height={200} src={thumbnailPath} alt={''} />
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
