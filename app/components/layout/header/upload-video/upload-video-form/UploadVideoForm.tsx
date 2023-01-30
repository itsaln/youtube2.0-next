import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-aria/TextArea'

import { IVideoData } from '@/shared/types/video.types'

import FooterForm from './footer-form/FooterForm'
import TogglePublic from './toggle-public/TogglePublic'
import VideoInformation from './video-information/VideoInformation'

const UploadVideoForm: FC = () => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit
	} = useForm<IVideoData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IVideoData> = (data) => {
		console.log(data)
	}

	// TODO: Update name when uploading video

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
			<div className='w-8/12 pr-6 pt-8'>
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
			<div className='w-4/12 p-3 pl-10'>
				<VideoInformation />
			</div>
			{/* Upload video file */}
			{/* Upload thumbnail file */}

			<FooterForm />
		</form>
	)
}

export default UploadVideoForm
