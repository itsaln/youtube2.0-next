import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import AuthProvider from '@/providers/AuthProvider'

import '../app/assets/styles/globals.scss'
import '../app/assets/styles/main.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</QueryClientProvider>
	)
}
