import { IUser } from '@/shared/types/user.types'
import { IVideo } from '@/shared/types/video.types'

export interface IHome {
	randomVideo: IVideo
	topVideo: IVideo
	topChannels: IUser[]
	newVideos: IVideo[]
	weeklyVideos: IVideo[]
}
