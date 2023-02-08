import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Channel from '@/screens/channel/Channel'
import { IChannel } from '@/screens/channel/channel.interface'

import { UserService } from '@/services/user.service'
import { VideoService } from '@/services/video.service'

import { IUser } from '@/shared/types/user.types'

const ChannelPage: NextPage<IChannel> = ({ channel, videos }) => {
	return <Channel channel={channel} videos={videos} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: users } = await UserService.getAll()
		const paths = users.map((user) => ({ params: { id: user._id } }))
		console.log('users:---', users)
		console.log('paths:---', paths)

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
		console.log('userId:---', userId)

		const { data: videos } = await VideoService.getAllByUserId(userId)
		const { data: channel } = await UserService.getProfile()

		return {
			props: {
				channel,
				videos
			} as IChannel,
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				channel: {} as IUser,
				videos: []
			} as IChannel
		}
	}
}

export default ChannelPage
