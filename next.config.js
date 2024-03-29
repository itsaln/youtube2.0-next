/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				// destination: 'http://localhost:5200/api/:path*'
				destination: 'https://youtube2-0-api-kcg0.onrender.com/api/:path*'
			},
			{
				source: '/uploads/:path*',
				// destination: 'http://localhost:5200/uploads/:path*'
				destination: 'https://youtube2-0-api-kcg0.onrender.com/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
