import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useCallback,
	useMemo,
	useState
} from 'react'
import { useMutation } from 'react-query'

import { MediaService } from '@/services/media.service'

import { toastError } from '@/utils/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string,
	setValue?: (val: number) => void,
	setIsChosen?: Dispatch<SetStateAction<boolean>>
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUploadField: TypeUpload = (
	onChange,
	folder,
	setValue,
	setIsChosen
) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => MediaService.upload(data, folder, setValue),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error) => {
				toastError(error, 'Upload file')
			}
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = e.target.files

			if (!files?.length) return

			setIsChosen && setIsChosen(true)

			const formData = new FormData()
			formData.append('media', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({
			uploadFile,
			isLoading
		}),
		[uploadFile, isLoading]
	)
}
