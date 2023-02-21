export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
}
