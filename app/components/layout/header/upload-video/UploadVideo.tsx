import { FC, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useMutation } from 'react-query'

import { VideoService } from '@/services/video.service'

import stylesIcons from '../icons/IconsRight.module.scss'

import UploadModal from './UploadModal'
import styles from './UploadVideo.module.scss'

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState('')

	const { mutate } = useMutation('', () => VideoService.create(), {
		onSuccess: ({ data }) => {
			setVideoId(data)
			setIsOpen(true)
		}
	})

	return (
		<>
			<button className={stylesIcons.button} onClick={() => mutate()}>
				<BsPlusCircleFill fill='#CD3A42' />
			</button>
			<UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
		</>
	)
}

export default UploadVideo
