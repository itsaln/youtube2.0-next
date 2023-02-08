import Image from 'next/image'
import { FC } from 'react'

import VideoItem from '@/ui/video-item/VideoItem'

import styles from './Search.module.scss'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Search videos...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				{/*<img*/}
				{/*	width={18}*/}
				{/*	height={18}*/}
				{/*	src='/img/common/search.svg'*/}
				{/*	alt='Search icon'*/}
				{/*/>*/}
				<Image
					width={18}
					height={18}
					src='/img/common/search.svg'
					alt='Search icon'
				/>
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map((video) => <VideoItem key={video._id} item={video} />)
					) : (
						<div>Videos not found!</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
