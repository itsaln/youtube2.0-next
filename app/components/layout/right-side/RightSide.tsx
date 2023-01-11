import { FC } from 'react'

import MostPopularVideo from '@/layout/right-side/most-popular-video/MostPopularVideo'
import TopChannels from '@/layout/right-side/top-channels/TopChannels'

import Line from '@/ui/Line'

const RightSide: FC = () => {
	return (
		<div className='right_side'>
			<MostPopularVideo />

			<Line />

			<TopChannels />
		</div>
	)
}

export default RightSide
