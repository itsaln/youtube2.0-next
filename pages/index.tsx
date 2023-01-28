import { shuffle } from 'lodash'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { UserService } from '@/services/user.service'
import { VideoService } from '@/services/video.service'

import { IVideo } from '@/shared/types/video.types'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		const topVideo = await VideoService.getMostPopularByViews().then(
			({ data }) => data[0] || ({} as IVideo)
		)
		const topChannels = await UserService.getMostPopular().then(
			({ data }) => data
		)

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos).slice(0, 5),
				randomVideo: shuffle(newVideos)[0] || ({} as IVideo),
				topVideo,
				topChannels
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				randomVideo: {},
				topVideo: {},
				topChannels: [],
				newVideos: [],
				weeklyVideos: []
			}
		}
	}
}

export default HomePage
