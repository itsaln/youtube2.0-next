import Link from 'next/link'
import { FC } from 'react'

import styles from './VideoInformation.module.scss'

const VideoInformation: FC = () => {
	return (
		<div className={styles.info}>
			<div className={styles.thumbnail}>Uploading video...</div>
			<div className={styles.details}>
				<div>
					<span>Video link</span>
					<Link href={'/'}>https://youtube.com/v/wefasfadwqwr</Link>
				</div>
				<div>
					<span>Filename</span>
					<span>Video-hot.mp4</span>
				</div>
			</div>
		</div>
	)
}

export default VideoInformation
