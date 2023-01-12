export const accentColor = '#F4003F'
// export const bgColor = '#191b1f'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'
