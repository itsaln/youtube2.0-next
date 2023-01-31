import { FC } from 'react'

import styles from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'

const UploadField: FC<IUploadField> = ({ title }) => {
	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Choose file</span>
				<input type='file' />
			</label>
		</div>
	)
}

export default UploadField
