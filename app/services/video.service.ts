import axios, { axiosClassic } from '@/api/interceptors'

import { getVideosUrl } from '@/config/api.config'

import { IVideo, IVideoData } from '@/shared/types/video.types'

export const VideoService = {
	async getAll(searchTerm?: string) {
		return await axiosClassic.get<IVideo[]>(getVideosUrl(''), {
			params: searchTerm ? { searchTerm: searchTerm } : {}
		})
	},

	async getMostPopularByViews() {
		return await axiosClassic.get<IVideo[]>(getVideosUrl('/most-popular'))
	},

	async getAllByUserId(userId: string) {
		return await axios.get<IVideo[]>(getVideosUrl(`/by-user/${userId}`))
	},

	async getAllByUserIdPrivate() {
		return await axios.get<IVideo[]>(getVideosUrl('/by-user-private'))
	},

	async getOne(_id: string) {
		return await axios.get<IVideo>(getVideosUrl(`/${_id}`))
	},

	async getOnePrivate(_id: string) {
		return await axios.get<IVideo>(getVideosUrl(`/get-private/${_id}`))
	},

	async create() {
		return await axios.post<string>(getVideosUrl(''))
	},

	async updateCountViews(_id: string) {
		return await axios.put<IVideo>(getVideosUrl(`/update-views/${_id}`))
	},

	async updateReaction(_id: string) {
		return await axios.put<IVideo>(getVideosUrl(`/update-likes/${_id}`))
	},

	async update(_id: string, data: IVideoData) {
		return await axios.put<IVideo>(getVideosUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return await axios.delete<IVideo>(getVideosUrl(`/${_id}`))
	}
}
