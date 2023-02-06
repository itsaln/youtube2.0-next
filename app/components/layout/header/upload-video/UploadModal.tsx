import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import styles from './UploadVideo.module.scss'
import UploadVideoForm from './upload-video-form/UploadVideoForm'
import { IUploadModal } from './upload-video.interface'

const UploadModal: FC<IUploadModal> = ({ isOpen, setIsOpen, videoId }) => {
	return (
		<Transition
			show={isOpen}
			enter='duration-300 ease-out'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='duration-200 ease-in'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
			as={Fragment}
		>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className={styles.modal}
			>
				<div className={styles.overlay} aria-hidden='true' />

				<div className={styles.wrapper}>
					<div>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className={styles.window}>
								<UploadVideoForm videoId={videoId} />
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default UploadModal
