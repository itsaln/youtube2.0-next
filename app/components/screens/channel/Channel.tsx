import { FC } from 'react'

import { IChannel } from '@/screens/channel/channel.interface'

const Channel: FC<IChannel> = ({ channel, videos }) => {
	console.log(channel, videos)
	return <div>Channel</div>
}

export default Channel
