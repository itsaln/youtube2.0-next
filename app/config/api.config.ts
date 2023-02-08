export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getVideosUrl = (string: string) => `/videos${string}`
export const getCommentsUrl = (string: string) => `/comments${string}`
