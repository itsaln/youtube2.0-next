import axios, { axiosClassic } from '@/api/interceptors'

import { getUsersUrl } from '@/config/api.config'

import { IUser, IUserData } from '@/shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return await axiosClassic.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm: searchTerm } : {}
		})
	},

	async getMostPopular() {
		return await axiosClassic.get<IUser[]>(getUsersUrl('/most-popular'))
	},

	async getOne(_id: string) {
		return await axios.get<IUser>(getUsersUrl(`/${_id}`))
	},

	async getProfile() {
		return await axios.get<IUser>(getUsersUrl('/profile'))
	},

	async updateProfile(data: IUserData) {
		return await axios.put<IUser>(getUsersUrl('/profile'), data)
	},

	async update(_id: string, data: IUserData) {
		return await axios.put<IUser>(getUsersUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return await axios.delete<IUser>(getUsersUrl(`/${_id}`))
	}
}
