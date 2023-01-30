import { Dialog } from '@headlessui/react'
import { FC } from 'react'

import styles from './UploadVideo.module.scss'
import UploadVideoForm from './upload-video-form/UploadVideoForm'
import { IUploadModal } from './upload-video.interface'

const UploadModal: FC<IUploadModal> = ({ isOpen, setIsOpen }) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className={styles.modal}
		>
			<div className={styles.overlay} aria-hidden='true' />

			<div className={styles.wrapper}>
				<div>
					<Dialog.Panel className={styles.window}>
						<UploadVideoForm />
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	)
}

export default UploadModal
