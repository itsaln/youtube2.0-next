import axios from '@/api/interceptors'

import { getUsersUrl } from '@/config/api.config'

import { IUser } from '@/shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return await axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm: searchTerm } : {}
		})
	},

	async getProfile() {
		return await axios.get<IUser>(getUsersUrl('/profile'))
	}
}
