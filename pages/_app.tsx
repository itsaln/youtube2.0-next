import type { AppProps } from 'next/app'

import MainProvider from '@/providers/MainProvider'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import 'react-redux-toastr/src/styles/index.scss'
import '@/assets/styles/globals.scss'
import '@/assets/styles/main.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
