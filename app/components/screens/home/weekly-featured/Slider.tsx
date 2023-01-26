import { FC } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

import VideoItem from '@/ui/video-item/VideoItem'

import { IVideo } from '@/shared/types/video.types'

const Slider: FC<{ videos: IVideo[] }> = ({ videos }) => {
	return (
		<Swiper
			spaceBetween={8}
			modules={[Autoplay]}
			slidesPerView={2}
			className='slider_wf'
			autoplay={{
				delay: 4500,
				pauseOnMouseEnter: true
			}}
		>
			{videos.map((video) => (
				<SwiperSlide key={video._id}>
					<VideoItem item={video} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
