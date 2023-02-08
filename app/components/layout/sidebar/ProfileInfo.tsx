import cn from 'classnames'
import Image from 'next/image'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { UserService } from '@/services/user.service'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './ProfileInfo.module.scss'

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
			<div className={styles.profile_info}>
				{/*<img width={70} height={70} src={data?.avatarPath || ''} alt={data?.name || ''} />*/}
				<Image
					width={70}
					height={70}
					src={data?.avatarPath || ''}
					alt={data?.name || ''}
				/>
				<div className={cn(styles.name, { verified: data?.isVerified })}>
					{data?.name}
				</div>
				<div className={styles.location}>{data?.location}</div>
			</div>
			<div className={styles.information}>
				<div className={styles.item}>
					<div className={styles.top}>{data?.videosCount}</div>
					<div className={styles.bottom}>videos</div>
				</div>
				<div className={styles.item}>
					<div className={styles.top}>
						{nFormatter(data?.subscribersCount || 0)}
					</div>
					<div className={styles.bottom}>subscribers</div>
				</div>
			</div>
		</>
	)
}

export default ProfileInfo
