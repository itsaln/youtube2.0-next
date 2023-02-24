import { FC } from 'react'
import { useMutation, useQuery } from 'react-query'

import Recommended from '@/screens/home/recommended/Recommended'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { VideoService } from '@/services/video.service'

import Meta from '@/utils/meta/Meta'

import StudioItem from './studio-item/StudioItem'

const Studio: FC = () => {
	const { data, isLoading, refetch } = useQuery(
		'get videos in studio',
		() => VideoService.getAllByUserIdPrivate(),
		{
			select: ({ data }) => data
		}
	)

	const { mutate } = useMutation(
		'remove video',
		(videoId: string) => VideoService.delete(videoId),
		{
			async onSuccess() {
				await refetch()
			}
		}
	)

	const removeHandler = (videoId: string) => {
		if (confirm('Вы действительно хотите удалить?')) {
			mutate(videoId)
		}
	}

	return (
		<Meta title='Youtube v2.0 - Studio'>
			<div className='bg-gray-100 p-7'>
				<StudioItem>
					{isLoading ? (
						<SkeletonLoader count={5} />
					) : data?.length ? (
						<Recommended newVideos={data || []} removeHandler={removeHandler} isUpdateLink />
					) : (
						<p>Videos not found!</p>
					)}
				</StudioItem>
			</div>
		</Meta>
	)
}

export default Studio
