import { FC } from 'react'
import { useQuery } from 'react-query'

import AddCommentForm from '@/screens/video/comments/AddCommentForm'
import CommentItem from '@/screens/video/comments/CommentItem'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import { CommentService } from '@/services/comment.service'

import styles from './Comments.module.scss'

const Comments: FC<{ videoId: string }> = ({ videoId }) => {
	const { user } = useAuth()

	const { refetch, data, isLoading } = useQuery(
		['get comments', videoId],
		() => CommentService.getAllByVideoId(videoId),
		{
			select: ({ data }) => data
		}
	)

	return (
		<>
			<div>
				{user && <AddCommentForm videoId={videoId} refetch={refetch} />}
			</div>
			{isLoading ? (
				<SkeletonLoader count={4} />
			) : data?.length ? (
				<>
					<div className={styles.grid}>
						{data.map((comment, index) => (
							<CommentItem key={`${comment._id}_${index}`} comment={comment} />
						))}
					</div>
				</>
			) : (
				<p>Comments not found!</p>
			)}
			<h2>{}</h2>
		</>
	)
}

export default Comments
