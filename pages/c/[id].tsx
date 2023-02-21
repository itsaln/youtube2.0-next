import { shuffle } from 'lodash'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Channel from '@/screens/channel/Channel'
import { IChannel } from '@/screens/channel/channel.interface'

import { UserService } from '@/services/user.service'
import { VideoService } from '@/services/video.service'

import { IUser } from '@/shared/types/user.types'
import { IVideo } from '@/shared/types/video.types'

const ChannelPage: NextPage<IChannel> = ({ channel, videos, randomVideo }) => {
	return <Channel channel={channel} videos={videos} randomVideo={randomVideo} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: users } = await UserService.getAll()
		const paths = users.map((user) => ({
			params: {
				id: user._id
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
		const userId = String(params?.id)

		const { data: videos } = await VideoService.getAllByUserId(userId)
		const channel = await UserService.getOne(userId).then(
			({ data }) => data || ({} as IUser)
		)

		return {
			props: {
				channel,
				videos,
				randomVideo: shuffle(videos)[0] || ({} as IVideo)
			} as IChannel,
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				channel: {} as IUser,
				videos: [],
				randomVideo: {} as IVideo
			} as IChannel
		}
	}
}

export default ChannelPage
