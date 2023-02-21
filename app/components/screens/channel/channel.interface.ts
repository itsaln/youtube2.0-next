import { IUser } from '@/shared/types/user.types'
import { IVideo } from '@/shared/types/video.types'

export interface IChannel {
	channel: IUser
	videos: IVideo[]
	randomVideo: IVideo
}
