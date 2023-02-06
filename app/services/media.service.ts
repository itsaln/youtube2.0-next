import axios from '@/api/interceptors'

export interface IMediaResponse {
	name: string
	url: string
}

export const MediaService = {
	async upload(
		media: FormData,
		folder?: string,
		setValue?: (val: number) => void
	) {
		return axios.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'application/form-data' },
			onUploadProgress: (progressEvent) => {
				if (setValue) {
					// @ts-ignore
					const progress = (progressEvent.loaded / progressEvent.total) * 100
					setValue(Math.ceil(progress))
				}
			}
		})
	}
}
