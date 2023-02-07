import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-aria/TextArea'
import UploadField from '@/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media.service'
import { VideoService } from '@/services/video.service'

import { IVideoData } from '@/shared/types/video.types'

import styles from '../UploadVideo.module.scss'

import FooterForm from './footer-form/FooterForm'
import TogglePublic from './toggle-public/TogglePublic'
import VideoInformation from './video-information/VideoInformation'

const UploadVideoForm: FC<{
	videoId: string
	handleCloseModal: () => void
}> = ({ videoId, handleCloseModal }) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue,
		reset
	} = useForm<IVideoData>({
		mode: 'onChange'
	})

	const { mutateAsync, isSuccess } = useMutation(
		'update video',
		(body: IVideoData) => VideoService.update(videoId, body),
		{
			onSuccess: () => {
				handleCloseModal()
			}
		}
	)

	const onSubmit: SubmitHandler<IVideoData> = async (data) => {
		await mutateAsync(data)
		reset()
	}

	const videoPath = watch('videoPath')
	const thumbnailPath = watch('thumbnailPath')
	const [videoFileName, setVideoFileName] = useState('')

	const handleUploadVideo = (value: IMediaResponse) => {
		setValue('videoPath', value.url)
		setValue('name', value.name)
		setVideoFileName(value.name)
	}

	const [isChosen, setIsChosen] = useState(false)

	const [percent, setPercent] = useState(0)
	const [isUploaded, setIsUploaded] = useState(false)
	const setProgressPercentage = (val: number) => {
		setPercent(val)
		if (val === 100) setIsUploaded(true)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
			{isSuccess && (
				<div className='absolute top-5 left-1/4 p-2 z-10 flex items-center justify-center animate-scaleIn shadow-block w-1/2 bg-green-500 text-white text-center mx-auto'>
					Видео успешно загружено!
				</div>
			)}
			{isChosen ? (
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
						<div className='mt-6'>
							<Controller
								control={control}
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
							control={control}
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
							fileName={videoFileName}
							isUploaded={isUploaded}
							thumbnailPath={thumbnailPath}
						/>
					</div>

					<FooterForm percent={percent} isUploaded={isUploaded} />
				</>
			) : (
				<div className={styles.uploadScreen}>
					<Controller
						control={control}
						name={'videoPath'}
						render={() => (
							<UploadField
								title='Сначала загрузите видео 👇'
								folder='videos'
								onChange={handleUploadVideo}
								setValue={setProgressPercentage}
								setIsChosen={setIsChosen}
							/>
						)}
					/>
				</div>
			)}
		</form>
	)
}

export default UploadVideoForm
