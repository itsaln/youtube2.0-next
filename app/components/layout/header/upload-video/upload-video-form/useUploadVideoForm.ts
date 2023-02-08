import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { IMediaResponse } from '@/services/media.service'
import { VideoService } from '@/services/video.service'

import { IVideoData } from '@/shared/types/video.types'

export interface IUseUploadVideoForm {
	videoId: string
	handleCloseModal: () => void
}

export const useUploadVideoForm = ({
	videoId,
	handleCloseModal
}: IUseUploadVideoForm) => {
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
				setTimeout(() => {
					handleCloseModal()
					reset()
				}, 500)
			}
		}
	)

	const onSubmit: SubmitHandler<IVideoData> = async (data) => {
		await mutateAsync(data)
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

	return {
		form: {
			register,
			errors,
			control,
			handleSubmit,
			onSubmit
		},
		media: {
			videoPath,
			thumbnailPath,
			videoFileName,
			handleUploadVideo
		},
		status: {
			isSuccess,
			isChosen,
			setIsChosen,
			percent,
			isUploaded,
			setProgressPercentage
		}
	}
}
