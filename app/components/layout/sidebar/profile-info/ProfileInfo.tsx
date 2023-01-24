import Image from 'next/image'

const ProfileInfo = () => (
	<>
		<div className='profile_info'>
			<Image
				width={70}
				height={70}
				src='http://localhost:3000/img/main/avatar.jpg'
				alt=''
			/>
			<div className='name'>Nannie Nelson</div>
			<div className='location'>Montreal, QC</div>
		</div>
		<div className='information'>
			<div className='item'>
				<div className='top'>278</div>
				<div className='bottom'>videos</div>
			</div>
			<div className='item'>
				<div className='top'>36.5k</div>
				<div className='bottom'>subscribers</div>
			</div>
		</div>
	</>
)

export default ProfileInfo
