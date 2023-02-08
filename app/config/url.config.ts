export const getVideoUrl = (id: string | undefined) => `/v/${id}`
export const getChannelUrl = (id: string | undefined) => `/c/${id}`

export const getAdminUrl = (url: string | undefined) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
