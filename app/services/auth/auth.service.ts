import { axiosClassic } from '@/api/interceptors'

import { getAuthUrl } from '@/config/api.config'

import { IAuthData, removeTokenStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(getAuthUrl('/login'), {
			email,
			password
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(getAuthUrl('/register'), {
			email,
			password
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	logout() {
		removeTokenStorage()
		localStorage.removeItem('user')
	}
}
