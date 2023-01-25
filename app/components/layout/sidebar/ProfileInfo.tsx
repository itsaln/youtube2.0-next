import Image from 'next/image'
import { useQuery } from 'react-query'

import { UserService } from '@/services/user.service'
import SkeletonLoader from '@/ui/SkeletonLoader'
import { nFormatter } from '@/utils/string/formatNumberToK'

const ProfileInfo = () => {
	const { data, isLoading } = useQuery(
		'get profile',
		() => UserService.getProfile(),
		{
			select: ({ data }) => data
		}
	)

	return isLoading ? (
		<SkeletonLoader count={5} />
	) : (
		<>
			<div className='profile_info'>
				<Image
					width={70}
					height={70}
					src={data?.avatarPath || ''}
					alt={data?.name || ''}
				/>
				<div className='name'>{data?.name}</div>
				<div className='location'>{data?.location}</div>
			</div>
			<div className='information'>
				<div className='item'>
					<div className='top'>{data?.videosCount}</div>
					<div className='bottom'>videos</div>
				</div>
				<div className='item'>
					<div className='top'>{nFormatter(data?.subscribersCount || 0)}</div>
					<div className='bottom'>subscribers</div>
				</div>
			</div>
		</>
	)
}

export default ProfileInfo
