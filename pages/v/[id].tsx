import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Video from '@/screens/video/Video'
import { IVideoPage } from '@/screens/video/video.interface'

import { VideoService } from '@/services/video.service'

import { IVideo } from '@/shared/types/video.types'

const VideoPage: NextPage<IVideoPage> = ({ video }) => {
	return <Video video={video} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: videos } = await VideoService.getAll()
		const paths = videos.map((video) => ({
			params: {
				id: video._id
			}
		}))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const videoId = String(params?.id)

		const { data: video } = await VideoService.getOne(videoId)

		return {
			props: {
				video
			} as IVideoPage,
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				video: {} as IVideo
			} as IVideoPage
		}
	}
}

export default VideoPage
