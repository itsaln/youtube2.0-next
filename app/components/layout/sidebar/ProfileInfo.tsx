import cn from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { UserService } from '@/services/user.service'

import { nFormatter } from '@/utils/string/formatNumberToK'

import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
	const { data: profile, isLoading } = useQuery(
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
				<Image
					src={profile?.avatarPath || ''}
					alt={profile?.name || ''}
					width={70}
					height={70}
					quality={90}
				/>
				<div className={cn(styles.name, { verified: profile?.isVerified })}>
					{profile?.name}
				</div>
				<div className={styles.location}>{profile?.location}</div>
			</div>
			<div className={styles.information}>
				<div className={styles.item}>
					<div className={styles.top}>{profile?.videosCount}</div>
					<div className={styles.bottom}>videos</div>
				</div>
				<div className={styles.item}>
					<div className={styles.top}>
						{nFormatter(profile?.subscribersCount || 0)}
					</div>
					<div className={styles.bottom}>subscribers</div>
				</div>
			</div>
		</>
	)
}

export default ProfileInfo
