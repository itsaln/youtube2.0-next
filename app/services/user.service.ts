import axios, { axiosClassic } from '@/api/interceptors'

import { getUsersUrl } from '@/config/api.config'

import { IUser, IUserData } from '@/shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm: searchTerm } : {}
		})
	},

	async getMostPopular() {
		return axiosClassic.get<IUser[]>(getUsersUrl('/most-popular'))
	},

	async getOne(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},

	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},

	async updateProfile(data: IUserData) {
		return axios.put<IUser>(getUsersUrl('/profile'), data)
	},

	async update(_id: string, data: IUserData) {
		return axios.put<IUser>(getUsersUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<IUser>(getUsersUrl(`/${_id}`))
	}
}
