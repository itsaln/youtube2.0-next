import { FC } from 'react'

import styles from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'
import { useUploadField } from './useUploadField'

const UploadField: FC<IUploadField> = ({ title, onChange, folder, setValue }) => {
	const { uploadFile } = useUploadField(onChange, folder, setValue)

	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Choose file</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField
