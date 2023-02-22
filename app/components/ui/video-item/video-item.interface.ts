import { IVideo } from '@/shared/types/video.types'

export interface IVideoItem {
	item: IVideo
	isLarge?: boolean
	isAvatar?: boolean
	tag?: string
	removeHandler?: (videoId: string) => void
}
