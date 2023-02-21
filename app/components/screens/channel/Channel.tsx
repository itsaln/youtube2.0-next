import { FC } from 'react'

import ChannelInfo from '@/screens/channel/channel-info/ChannelInfo'
import { IChannel } from '@/screens/channel/channel.interface'
import Recommended from '@/screens/home/recommended/Recommended'

import VideoItem from '@/ui/video-item/VideoItem'

import Meta from '@/utils/meta/Meta'

const Channel: FC<IChannel> = ({ channel, videos, randomVideo }) => {
	return (
		<Meta title={channel.name}>
			<div className='flex flex-wrap justify-around p-9'>
				<div className='w-1/2 pr-2'>
					<ChannelInfo channel={channel} />
				</div>
				<div className='w-1/3 pl-2'>
					<VideoItem item={randomVideo} />
				</div>
			</div>
			<Recommended newVideos={videos} />
		</Meta>
	)
}

export default Channel
