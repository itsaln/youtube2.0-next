import { FC } from 'react'

import RightSide from '@/layout/right-side/RightSide'

import { IHome } from '@/screens/home/home.interface'

import Line from '@/ui/Line'

import Meta from '@/utils/meta/Meta'

import Recommended from './recommended/Recommended'
import WeeklyFeatured from './weekly-featured/WeeklyFeatured'

const Home: FC<IHome> = ({
	weeklyVideos,
	randomVideo,
	topVideo,
	topChannels,
	newVideos
}) => {
	return (
		<Meta title='Youtube v2.0 - Best video'>
			<div className='left_side'>
				{!!weeklyVideos.length && !!randomVideo ? (
					<WeeklyFeatured
						weeklyVideos={weeklyVideos}
						randomVideo={randomVideo}
					/>
				) : (
					<div className='font-bold text-danger'>Not found!</div>
				)}

				<Line />

				{!!newVideos.length ? (
					<Recommended newVideos={newVideos} />
				) : (
					<div className='font-bold text-danger'>New videos not found!</div>
				)}
			</div>
			{!!topVideo && !!topChannels.length ? (
				<RightSide topVideo={topVideo} topChannels={topChannels} />
			) : (
				<div className='font-bold text-danger'>Top videos not found!</div>
			)}
		</Meta>
	)
}

export default Home
