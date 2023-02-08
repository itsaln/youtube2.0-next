import { FC } from 'react'
import { Controller } from 'react-hook-form'

import {
	IUseUploadVideoForm,
	useUploadVideoForm
} from '@/layout/header/upload-video/upload-video-form/useUploadVideoForm'

import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-aria/TextArea'
import UploadField from '@/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media.service'

import styles from '../UploadVideo.module.scss'

import FooterForm from './footer-form/FooterForm'
import TogglePublic from './toggle-public/TogglePublic'
import VideoInformation from './video-information/VideoInformation'

const UploadVideoForm: FC<IUseUploadVideoForm> = ({
	videoId,
	handleCloseModal
}) => {
	const { form, status, media } = useUploadVideoForm({
		videoId,
		handleCloseModal
	})

	return (
		<form
			onSubmit={form.handleSubmit(form.onSubmit)}
			className='flex flex-wrap'
		>
			{status.isSuccess && (
				<div className='absolute top-5 left-1/4 p-2 z-10 flex items-center justify-center animate-scaleIn shadow-block w-1/2 bg-green-500 text-white text-center mx-auto'>
					Видео успешно загружено!
				</div>
			)}
			{status.isChosen ? (
				<>
					<div className='w-3/5 pr-6 pt-8'>
						<Field
							{...form.register('name', {
								required: 'Name is required'
							})}
							placeholder='Name'
							error={form.errors.name}
						/>
						<TextArea
							{...form.register('description', {
								required: 'Description is required'
							})}
							placeholder='Description'
							error={form.errors.description}
						/>
						<div className='mt-6'>
							<Controller
								control={form.control}
								name={'thumbnailPath'}
								render={({ field: { onChange } }) => (
									<UploadField
										folder='videos'
										onChange={(value: IMediaResponse) => onChange(value.url)}
									/>
								)}
							/>
						</div>
						<Controller
							control={form.control}
							name={'isPublic'}
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => onChange(!value)}
									isEnabled={!!value}
								/>
							)}
						/>
					</div>
					<div className='w-2/5 p-3 pl-8'>
						<VideoInformation
							videoId={videoId}
							fileName={media.videoFileName}
							isUploaded={status.isUploaded}
							thumbnailPath={media.thumbnailPath}
						/>
					</div>

					<FooterForm percent={status.percent} isUploaded={status.isUploaded} />
				</>
			) : (
				<div className={styles.uploadScreen}>
					<Controller
						control={form.control}
						name={'videoPath'}
						render={() => (
							<UploadField
								title='Сначала загрузите видео 👇'
								folder='videos'
								onChange={media.handleUploadVideo}
								setValue={status.setProgressPercentage}
								setIsChosen={status.setIsChosen}
							/>
						)}
					/>
				</div>
			)}
		</form>
	)
}

export default UploadVideoForm
