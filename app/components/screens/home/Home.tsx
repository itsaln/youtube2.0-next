import { FC } from 'react'

import RightSide from '@/layout/right-side/RightSide'

import Line from '@/ui/Line'

import Meta from '@/utils/meta/Meta'

import Recommended from './recommended/Recommended'
import WeeklyFeatured from './weekly-featured/WeeklyFeatured'

const Home: FC = () => {
	return (
		<Meta title='Youtube v2.0 - Best video'>
			<div id='wrapper_content'>
				<div className='left_side'>
					<WeeklyFeatured />

					<Line />

					<Recommended />
				</div>
				<RightSide />
			</div>
		</Meta>
	)
}

export default Home
