import { FC } from 'react'

import RightSide from '@/layout/right-side/RightSide'

import { IHome } from '@/screens/home/home.interface'

import Line from '@/ui/Line'

import Meta from '@/utils/meta/Meta'

import Recommended from './recommended/Recommended'
import WeeklyFeatured from './weekly-featured/WeeklyFeatured'

const Home: FC<IHome> = (props) => {
	return (
		<Meta title='Youtube v2.0 - Best video'>
			<div id='wrapper_content'>
				<div className='left_side'>
					<WeeklyFeatured
						weeklyVideos={props.weeklyVideos}
						randomVideo={props.randomVideo}
					/>

					<Line />

					<Recommended newVideos={props.newVideos} />
				</div>
				<RightSide topVideo={props.topVideo} topChannels={props.topChannels} />
			</div>
		</Meta>
	)
}

export default Home
