import axios, { axiosClassic } from '@/api/interceptors'

import { getCommentsUrl } from '@/config/api.config'

import { IComment, ICommentData } from '@/shared/types/comment.types'

export const CommentService = {
	async getAllByVideoId(videoId: string) {
		return axiosClassic.get<IComment[]>(getCommentsUrl(`/by-video/${videoId}`))
	},

	async create(data: ICommentData) {
		return await axios.post<IComment>(getCommentsUrl(''), data)
	}
}
