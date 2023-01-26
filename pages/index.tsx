import { shuffle } from 'lodash'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'

import { VideoService } from '@/services/video.service'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		const topVideo = {}
		const topChannels: never[] = []

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos).slice(0, 5),
				randomVideo: shuffle(newVideos)[0],
				topVideo,
				topChannels
			},
			revalidate: 60
		}
	} catch (error) {
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
