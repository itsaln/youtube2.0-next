import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-aria/TextArea'

import { IVideoData } from '@/shared/types/video.types'

import TogglePublic from './toggle-public/TogglePublic'

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
		<form onSubmit={handleSubmit(onSubmit)}>
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
			<TogglePublic />
			{/* Upload video file */}
			{/* Upload thumbnail file */}
			<div className='mt-5 mb-1 text-center'>
				<Button>Save</Button>
			</div>
		</form>
	)
}

export default UploadVideoForm
