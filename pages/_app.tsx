import type { AppProps } from 'next/app'

import AuthProvider from '@/providers/AuthProvider'

import '../app/assets/styles/globals.scss'
import '../app/assets/styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}
