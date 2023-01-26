import { IUser } from '@/shared/types/user.types'

export interface IComment {
	_id: string
	user: IUser
	video: string
	message: string

	createdAt: string
	updatedAt: string
}

export interface ICommentData extends Pick<IComment, 'message'> {
	videoId: string
}
