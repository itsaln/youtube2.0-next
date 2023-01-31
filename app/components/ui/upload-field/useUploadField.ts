import { useMutation } from 'react-query'

import { MediaService } from '@/services/media.service'

export const useUploadField = (
	onChange: (...event: any) => void,
	folder?: string
) => {
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => MediaService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			}
		}
	)
}
