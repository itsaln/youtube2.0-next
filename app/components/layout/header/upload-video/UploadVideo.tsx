import { FC, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

import stylesIcons from '../icons/IconsRight.module.scss'

import UploadModal from './UploadModal'
import styles from './UploadVideo.module.scss'

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button className={stylesIcons.button} onClick={() => setIsOpen(true)}>
				<BsPlusCircleFill fill='#CD3A42' />
			</button>
			<UploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

export default UploadVideo
