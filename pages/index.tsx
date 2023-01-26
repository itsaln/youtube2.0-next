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
		const randomVideo = {}
		const topVideo = {}
		const topChannels: never[] = []

		// weekly featured & new videos
		// top videos
		// top channels

		return {
			props: {
				newVideos,
				weeklyVideos: shuffle(newVideos),
				randomVideo,
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
