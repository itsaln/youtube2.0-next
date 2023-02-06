import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-aria/TextArea'
import UploadField from '@/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media.service'

import { IVideoData } from '@/shared/types/video.types'

import styles from '../UploadVideo.module.scss'

import FooterForm from './footer-form/FooterForm'
import TogglePublic from './toggle-public/TogglePublic'
import VideoInformation from './video-information/VideoInformation'

const UploadVideoForm: FC<{ videoId: string }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue
	} = useForm<IVideoData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IVideoData> = (data) => {
		console.log(data)
	}

	const videoPath = watch('videoPath')
	const [videoFileName, setVideoFileName] = useState('')

	const handleUploadVideo = (value: IMediaResponse) => {
		setValue('videoPath', value.url)
		setValue('name', value.name)
		setVideoFileName(value.name)
	}

	// TODO: Update name when uploading video

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
			{!!videoPath ? (
				<>
					<div className='w-3/5 pr-6 pt-8'>
						<Field
							{...register('name', {
								required: 'Name is required'
							})}
							placeholder='Name'
							error={errors.name}
						/>
						<TextArea
							{...register('description', {
								required: 'Description is required'
							})}
							placeholder='Description'
							error={errors.description}
						/>
						<Controller
							control={control}
							name='isPublic'
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => onChange(!value)}
									isEnabled={!!value}
								/>
							)}
						/>
					</div>
					<div className='w-2/5 p-3 pl-8'>
						<VideoInformation videoId={videoId} fileName={videoFileName} />
					</div>
					{/* Upload video file */}
					{/* Upload thumbnail file */}

					<FooterForm />
				</>
			) : (
				<div className={styles.uploadScreen}>
					<Controller
						control={control}
						name='videoPath'
						render={() => (
							<UploadField
								title='Сначала загрузите видео 👇'
								folder='videos'
								onChange={handleUploadVideo}
							/>
						)}
					/>
				</div>
			)}
		</form>
	)
}

export default UploadVideoForm
