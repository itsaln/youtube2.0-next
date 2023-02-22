import { useCallback, useEffect, useRef, useState } from 'react'

import { IVideoElement } from './video-player.interface'

export const usePlayer = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isShowButton, setIsShowButton] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const originalDuration = videoRef.current?.duration
		if (originalDuration) setVideoTime(originalDuration)
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(async () => {
		if (!isPlaying) {
			await videoRef.current?.play()
			setIsPlaying(true)
			setTimeout(() => {
				setIsShowButton(false)
			}, 1000)
		} else {
			setIsShowButton(true)
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 15
	}

	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 15
	}

	const fullScreen = async () => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			await video.requestFullscreen()
		} else if (video.msRequestFullScreen) {
			video.msRequestFullScreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const handleKeyDown = async (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case 'Space':
					e.preventDefault()
					await toggleVideo()
					break
				case 'f':
					await fullScreen()
					break
				default:
					return
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	return {
		videoRef,
		toggleVideo,
		status: {
			isPlaying,
			progress,
			isShowButton
		}
	}
}
