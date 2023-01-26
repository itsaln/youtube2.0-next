import { IUser } from '@/shared/types/user.types'

export interface IVideo {
	_id: string
	name: string
	description: string
	thumbnailPath: string
	videoPath: string
	views: number
	likes: number
	user?: IUser
	isPublic?: boolean

	createdAt: string
	updatedAt: string
}

export interface IVideoData
	extends Pick<
		IVideo,
		'name' | 'description' | 'thumbnailPath' | 'videoPath' | 'isPublic'
	> {}
