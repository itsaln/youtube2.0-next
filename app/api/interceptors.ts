import axios from 'axios'
import Cookies from 'js-cookie'

import { API_URL } from '@/api/api.constants'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const axiosClassic = axios.create({
	// baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL
	baseURL: API_URL,
	headers: getContentType()
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		// @ts-ignore
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export default instance
