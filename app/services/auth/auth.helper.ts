import Cookies from 'js-cookie'

export interface IAuthData {
	user: {
		_id: string
		email: string
	} | null
	accessToken: string
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set('accessToken', accessToken)
}

export const removeTokenStorage = () => {
	Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthData) => {
	saveTokenStorage(data.accessToken)
	localStorage.setItem('user', JSON.stringify(data.user))
}
