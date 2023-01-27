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
	isVerified: boolean

	createdAt: string
	updatedAt: string
}

export interface IUserData
	extends Pick<
		IUser,
		'email' | 'description' | 'name' | 'location' | 'avatarPath'
	> {}
