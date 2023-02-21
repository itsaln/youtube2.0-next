import Meta from '@/utils/meta/Meta'

export default function Error500() {
	return (
		<Meta title='Page not found'>
			<div className='font-bold text-danger'>
				500 - Server-side error occurred
			</div>
		</Meta>
	)
}
