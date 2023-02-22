import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'
import { useMutation } from 'react-query'

import styles from '@/layout/header/auth-form/AuthForm.module.scss'

import Field from '@/ui/field/Field'

import { CommentService } from '@/services/comment.service'

import { ICommentData } from '@/shared/types/comment.types'

const AddCommentForm: FC<{ videoId: string; refetch: any }> = ({
	videoId,
	refetch
}) => {
	const {
		register: registerInput,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ICommentData>({
		mode: 'onChange'
	})

	const { mutateAsync } = useMutation(
		'add comment',
		(data: ICommentData) => CommentService.create({ ...data, videoId }),
		{
			onSuccess(data) {
				reset()
				refetch()
			}
		}
	)

	const onSubmit: SubmitHandler<ICommentData> = async (data) => {
		await mutateAsync(data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className='relative'>
				<Field
					{...registerInput('message', {
						required: 'Message is required'
					})}
					placeholder='Add a public comment'
					error={errors.message}
				/>
				<button className='text-2xl absolute right-0 top-2'>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddCommentForm
