import { FC } from 'react'

import MostPopularVideo from '@/layout/right-side/most-popular-video/MostPopularVideo'
import TopChannels from '@/layout/right-side/top-channels/TopChannels'

import Line from '@/ui/Line'

import { IUser } from '@/shared/types/user.types'
import { IVideo } from '@/shared/types/video.types'

interface IRightSide {
	topVideo: IVideo
	topChannels: IUser[]
}

const RightSide: FC<IRightSide> = (props) => {
	return (
		<div className='right_side'>
			<MostPopularVideo video={props.topVideo} />

			<Line />

			<TopChannels channels={props.topChannels} />
		</div>
	)
}

export default RightSide
