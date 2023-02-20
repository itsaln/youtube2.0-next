import { shuffle } from 'lodash'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { UserService } from '@/services/user.service'
import { VideoService } from '@/services/video.service'

import { IVideo } from '@/shared/types/video.types'

const HomePage: NextPage<IHome> = ({
	topChannels,
	topVideo,
	newVideos,
	weeklyVideos,
	randomVideo
}) => {
	return (
		<Home
			topChannels={topChannels}
			topVideo={topVideo}
			newVideos={newVideos}
			weeklyVideos={weeklyVideos}
			randomVideo={randomVideo}
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		const topVideo = await VideoService.getMostPopularByViews().then(
			({ data }) => data[0] || ({} as IVideo)
		)
		const { data: topChannels } = await UserService.getMostPopular()

		// console.log('newVideos:---', newVideos)
		// console.log('topVideo:---', topVideo)
		// console.log('topChannels:---', topChannels)

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
