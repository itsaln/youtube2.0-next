export interface IUser {
	_id: string
	email: string
	name: string
	description: string
	// password: string
	avatarPath: string
	location: string
	subscribersCount: number
	videosCount?: number
	isAdmin: boolean
	createdAt: string
	updatedAt: string
}

export interface IUserRequest
	extends Pick<
		IUser,
		'email' | 'description' | 'name' | 'location' | 'avatarPath'
	> {}
