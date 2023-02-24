import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import styles from '@/layout/header/upload-video/UploadVideo.module.scss'
import FooterForm from '@/layout/header/upload-video/upload-video-form/footer-form/FooterForm'
import TogglePublic from '@/layout/header/upload-video/upload-video-form/toggle-public/TogglePublic'
import VideoInformation from '@/layout/header/upload-video/upload-video-form/video-information/VideoInformation'

import StudioItem from '@/screens/studio/studio-item/StudioItem'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-aria/TextArea'
import UploadField from '@/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media.service'
import { VideoService } from '@/services/video.service'

import { IVideo, IVideoData } from '@/shared/types/video.types'

import Meta from '@/utils/meta/Meta'

const VideoEdit: FC = () => {
	const { query, push } = useRouter()
	const videoId = String(query.id)

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

	const { data, isLoading, refetch } = useQuery(
		['get video private by id', videoId],
		() => VideoService.getOnePrivate(videoId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('description', data.description)
				setValue('videoPath', data.videoPath)
				setValue('thumbnailPath', data.thumbnailPath)
				setValue('isPublic', data.isPublic)
			},
			enabled: !!videoId
		}
	)

	const { mutate } = useMutation(
		['update video', videoId],
		(data: IVideoData) => VideoService.update(videoId, data)
	)

	const onSubmit: SubmitHandler<IVideoData> = (data) => {
		mutate(data)
	}

	return (
		<Meta title='Video Editing'>
			<div className='bg-gray-100 p-7'>
				<StudioItem>
					{isLoading ? (
						<SkeletonLoader count={5} />
					) : (
						<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
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
												onChange={(value: IMediaResponse) =>
													onChange(value.url)
												}
											/>
										)}
									/>
								</div>
								<div className='mt-6'>
									<span>Video: </span>
									<Controller
										control={control}
										name={'videoPath'}
										render={({ field: { onChange } }) => (
											<UploadField
												folder='videos'
												onChange={(value: IMediaResponse) =>
													onChange(value.url)
												}
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
									fileName={''}
									isUploaded
									thumbnailPath={watch('thumbnailPath')}
								/>
							</div>

							<div className='mt-10'>
								<Button onClick={() => push('/')}>Save</Button>
							</div>
						</form>
					)}
				</StudioItem>
			</div>
		</Meta>
	)
}

export default VideoEdit
